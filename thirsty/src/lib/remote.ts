"use client";

// Live-Betrieb mit Supabase. Lädt alle Daten, die der angemeldete Nutzer sehen darf, in dieselbe Form wie die
// Vorschau (State), damit die Oberfläche unverändert bleibt. Regeln prüft die Datenbank (supabase/schema.sql);
// nach jeder Änderung werden die Daten neu geladen.

import { supabase } from "./supabase";
import { emptyState, getState, setRemoteState, type Booking, type MemberRole, type Photo, type Restaurant, type Role, type State, type User } from "./store";
import { SITE_URL } from "./config";
import type { Tier } from "./reliability";
import { ActionError } from "./errors";

type Row = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const sb = () => supabase!;
const fail = (msg: string): never => {
  throw new ActionError(msg);
};

const AUTH_MESSAGES: [RegExp, string][] = [
  [/invalid login credentials/i, "E-Mail oder Passwort stimmt nicht."],
  [/already registered|already exists/i, "Für diese E-Mail gibt es schon ein Konto."],
  [/email not confirmed/i, "Bitte bestätige zuerst deine E-Mail-Adresse über den Link in der Mail."],
  [/password should be at least/i, "Das Passwort braucht mindestens 8 Zeichen."],
  [/rate limit|too many/i, "Zu viele Versuche. Bitte warte kurz und versuche es dann noch einmal."],
  [/failed to fetch|network/i, "Keine Verbindung. Bitte prüfe deine Internetverbindung."],
];

/** Fehler aus Supabase in verständliche Meldungen übersetzen. Meldungen aus den Datenbankfunktionen sind schon deutsch. */
function check<T extends { error: { message: string; code?: string } | null }>(res: T): T {
  if (res.error) {
    const msg = res.error.message;
    // Meldungen aus den Datenbankfunktionen (raise exception) sind schon für Nutzer formuliert.
    if (res.error.code === "P0001") fail(msg);
    const known = AUTH_MESSAGES.find(([re]) => re.test(msg));
    if (known) fail(known[1]);
    if (/row-level security|permission denied/i.test(msg)) fail("Dafür fehlt dir die Berechtigung.");
    fail(`Etwas ist schiefgelaufen (${msg}).`);
  }
  return res;
}

// ---------- Laden ----------

const opt = <T,>(v: T | null | undefined) => (v == null ? undefined : v);

function mapRestaurant(r: Row, billing?: Row): Restaurant {
  return {
    id: r.id, slug: r.slug, name: r.name, tagline: opt(r.tagline), description: opt(r.description), cuisine: opt(r.cuisine),
    priceLevel: r.price_level, street: opt(r.street), postalCode: opt(r.postal_code), city: opt(r.city), lat: opt(r.lat), lng: opt(r.lng),
    directions: opt(r.directions), phone: opt(r.phone), email: opt(r.email), website: opt(r.website), instagram: opt(r.instagram),
    seatsInside: r.seats_inside, seatsOutside: r.seats_outside, features: r.features ?? [],
    legalName: opt(billing?.legal_name), vatId: opt(billing?.vat_id), status: r.status, demo: r.demo || undefined, createdAt: r.created_at,
  };
}

function mapBooking(b: Row): Booking {
  return {
    id: b.id, spotId: b.spot_id, userId: b.user_id, partySize: b.party_size, code: b.code, status: b.status,
    createdAt: b.created_at, checkedInAt: opt(b.checked_in_at), cancelledAt: opt(b.cancelled_at),
    guaranteed: b.guaranteed ?? undefined, noShowFeeCents: b.no_show_fee_cents ?? undefined,
  };
}

const iso = (v: unknown) => (v ? new Date(v as string).toISOString() : undefined);

let loadSeq = 0;
let latest: Promise<void> = Promise.resolve();
let demoTopUp: Promise<unknown> | null = null;

/** Lädt alles neu, was der aktuelle Nutzer sehen darf. Überholt ein neuerer Aufruf, wartet dieser auf dessen Ergebnis. */
export function refresh(): Promise<void> {
  const seq = ++loadSeq;
  const p = load(seq).then(async (applied) => {
    if (!applied) await latest;
  });
  latest = p;
  return p;
}

async function load(seq: number): Promise<boolean> {
  const db = sb();
  // Beispiel-Restaurants bekommen Angebote für die nächsten Tage (einmal pro Seitenaufruf).
  demoTopUp ??= Promise.resolve(db.rpc("ensure_demo_spots")).catch(() => undefined);
  await demoTopUp;

  const { data: { session } } = await db.auth.getSession();
  const me = session?.user.id ?? null;
  const since = new Date(Date.now() - 120 * 864e5).toISOString();

  const all = <T,>(p: PromiseLike<{ data: T | null; error: { message: string } | null }>) =>
    Promise.resolve(p).then((r) => check(r).data ?? ([] as unknown as T));
  const none = Promise.resolve([] as Row[]);

  const [restaurants, hours, photos, menu, spots, reviews, taken, profiles, members, bookings, events, favorites, billing, rel] = await Promise.all([
    all<Row[]>(db.from("restaurants").select("*")),
    all<Row[]>(db.from("opening_hours").select("*")),
    all<Row[]>(db.from("photos").select("*")),
    all<Row[]>(db.from("menu_items").select("*")),
    all<Row[]>(db.from("spots").select("*").gte("ends_at", since)),
    all<Row[]>(db.from("reviews").select("*")),
    all<Row[]>(db.rpc("spot_taken")),
    me ? all<Row[]>(db.from("profiles").select("*").eq("id", me)) : none,
    me ? all<Row[]>(db.from("members").select("*")) : none,
    me ? all<Row[]>(db.from("bookings").select("*").eq("user_id", me)) : none,
    me ? all<Row[]>(db.from("reliability_events").select("*").eq("user_id", me)) : none,
    me ? all<Row[]>(db.from("favorites").select("*").eq("user_id", me)) : none,
    me ? all<Row[]>(db.from("restaurant_billing").select("*")) : none,
    me ? all<Row[]>(db.rpc("my_reliability")) : none,
  ]);
  // Zahlungen: tolerant laden, damit die App auch ohne eingespielte Zahlungstabellen läuft
  const soft = <T,>(p: PromiseLike<{ data: T | null; error: unknown }>) =>
    Promise.resolve(p).then((r) => (r.error ? ([] as unknown as T) : (r.data ?? ([] as unknown as T)))).catch(() => [] as unknown as T);
  const [flags, bills, payments, cards, accounts, sponsorships] = await Promise.all([
    soft<Row[]>(db.rpc("payment_flags")),
    me ? soft<Row[]>(db.from("bills").select("*")) : none,
    me ? soft<Row[]>(db.from("payments").select("*").order("created_at", { ascending: false }).limit(1000)) : none,
    me ? soft<Row[]>(db.from("guest_payment_methods").select("user_id, brand, last4, exp_month, exp_year").eq("user_id", me)) : none,
    me ? soft<Row[]>(db.from("restaurant_accounts").select("*")) : none,
    me ? soft<Row[]>(db.from("sponsorships").select("*")) : none,
  ]);

  // Portal: Buchungen mit Gastinfos und Team der eigenen Restaurants.
  const myRestaurants = [...new Set(members.filter((m) => m.user_id === me).map((m) => m.restaurant_id as string))];
  const portal = await Promise.all(
    myRestaurants.map(async (rid) => ({
      bookings: await all<Row[]>(db.rpc("restaurant_bookings", { p_restaurant: rid })),
      team: await all<Row[]>(db.rpc("restaurant_members", { p_restaurant: rid })),
      extras: await soft<Row[]>(db.rpc("restaurant_booking_extras", { p_restaurant: rid })),
    })),
  );
  if (seq !== loadSeq) return false; // ein neuerer Ladevorgang läuft schon

  const s: State = { ...emptyState(), remote: { ready: true, taken: {}, reliability: {} } };
  const remote = s.remote!;
  const users = new Map<string, User>();
  const addUser = (u: Partial<User> & { id: string }) => {
    const prev = users.get(u.id);
    users.set(u.id, { email: "", passwordHash: "", name: "Gast", role: "GUEST", createdAt: "", ...prev, ...Object.fromEntries(Object.entries(u).filter(([, v]) => v != null)) } as User);
  };

  s.sessionUserId = me && profiles.length ? me : null;
  s.restaurants = restaurants.map((r) => mapRestaurant(r, billing.find((b) => b.restaurant_id === r.id)));
  s.hours = hours.map((h) => ({ restaurantId: h.restaurant_id, weekday: h.weekday, opens: h.opens, closes: h.closes }));
  s.photos = photos.map((p) => ({ id: p.id, restaurantId: p.restaurant_id, dataUrl: p.url, kind: p.kind, position: p.position }));
  s.menu = menu.map((m) => ({
    id: m.id, restaurantId: m.restaurant_id, category: m.category, name: m.name, description: opt(m.description),
    priceCents: m.price_cents, tags: m.tags ?? [], allergens: opt(m.allergens), position: m.position,
  }));
  s.spots = spots.map((x) => ({
    id: x.id, restaurantId: x.restaurant_id, startsAt: new Date(x.starts_at).toISOString(), endsAt: new Date(x.ends_at).toISOString(),
    seats: x.seats, maxGroupSize: x.max_group_size, discountPercent: x.discount_percent, freebie: opt(x.freebie),
    conditions: opt(x.conditions), bookingCutoffMin: x.booking_cutoff_min, arriveWithinMin: x.arrive_within_min ?? 15,
    maxDiscountCents: opt(x.max_discount_cents), status: x.status,
    noShowProtection: x.no_show_protection ?? undefined,
  }));
  s.reviews = reviews.map((v) => ({
    id: v.id, bookingId: v.booking_id, restaurantId: v.restaurant_id, authorName: v.author_name, rating: v.rating,
    food: opt(v.food), service: opt(v.service), ambience: opt(v.ambience), asPromised: v.as_promised, text: opt(v.text),
    reply: opt(v.reply), createdAt: v.created_at,
  }));
  for (const t of taken) remote.taken[t.spot_id] = t.taken;

  for (const p of profiles) {
    addUser({ id: p.id, email: p.email, name: p.name, phone: opt(p.phone), role: p.role as Role, dietaryNotes: opt(p.dietary_notes), createdAt: p.created_at });
  }
  s.members = members.map((m) => ({ id: m.id, userId: m.user_id, restaurantId: m.restaurant_id, role: m.role as MemberRole }));
  s.bookings = bookings.map(mapBooking);
  s.events = events.map((e) => ({ id: e.id, userId: e.user_id, bookingId: opt(e.booking_id), kind: e.kind, points: e.points, createdAt: e.created_at }));
  s.favorites = favorites.map((f) => ({ userId: f.user_id, restaurantId: f.restaurant_id }));

  for (const { bookings: rb, team, extras } of portal) {
    for (const b of rb) {
      const extra = extras.find((e) => e.booking_id === b.id);
      if (!s.bookings.some((x) => x.id === b.id)) s.bookings.push(mapBooking({ ...b, ...(extra ? { guaranteed: extra.guaranteed, no_show_fee_cents: extra.no_show_fee_cents } : {}) }));
      addUser({ id: b.user_id, name: b.guest_name, dietaryNotes: opt(b.dietary_notes) });
      remote.reliability[b.user_id] ??= { score: -1, tier: b.tier as Tier, blockedUntil: null };
      if (b.has_feedback && !s.feedback.some((f) => f.bookingId === b.id)) s.feedback.push({ bookingId: b.id, positive: true, tags: [] });
    }
    // Mitgliedschaften kommen schon aus der Tabelle members; hier nur Namen und E-Mails des Teams.
    for (const m of team) {
      addUser({ id: m.user_id, name: m.name, email: m.email });
    }
  }
  if (me && rel[0]) {
    remote.reliability[me] = { score: rel[0].score, tier: rel[0].tier, blockedUntil: rel[0].blocked_until ? new Date(rel[0].blocked_until) : null };
  }
  s.users = [...users.values()];

  s.flags = Object.fromEntries(flags.map((f) => [f.restaurant_id, { acceptsAppPayment: !!f.accepts_app_payment, sponsored: !!f.sponsored }]));
  s.bills = bills.map((b) => ({
    id: b.id, bookingId: opt(b.booking_id), restaurantId: b.restaurant_id, userId: opt(b.user_id), subtotalCents: b.subtotal_cents,
    discountPercent: b.discount_percent, discountCents: b.discount_cents, amountCents: b.amount_cents, tipCents: b.tip_cents,
    feeCents: b.fee_cents, status: b.status, note: opt(b.note), receiptUrl: opt(b.receipt_url), createdAt: b.created_at, paidAt: iso(b.paid_at),
  }));
  s.payments = payments.map((p) => ({
    id: p.id, kind: p.kind, restaurantId: opt(p.restaurant_id), userId: opt(p.user_id), bookingId: opt(p.booking_id), billId: opt(p.bill_id),
    amountCents: p.amount_cents, feeCents: p.fee_cents, netCents: p.net_cents, tipCents: p.tip_cents, status: p.status,
    description: opt(p.description), receiptUrl: opt(p.receipt_url), invoiceUrl: opt(p.invoice_url), invoicePdf: opt(p.invoice_pdf),
    createdAt: p.created_at,
  }));
  s.cards = cards.map((c) => ({ userId: c.user_id, brand: opt(c.brand), last4: opt(c.last4), expMonth: opt(c.exp_month), expYear: opt(c.exp_year) }));
  s.accounts = accounts.map((a) => ({
    restaurantId: a.restaurant_id, connected: !!a.stripe_account_id, chargesEnabled: a.charges_enabled, payoutsEnabled: a.payouts_enabled,
    detailsSubmitted: a.details_submitted, plan: a.plan, planStatus: a.plan_status, trialUsed: a.trial_used, trialEnd: iso(a.trial_end),
    periodEnd: iso(a.current_period_end), cancelAtPeriodEnd: a.cancel_at_period_end, hasCustomer: !!a.stripe_customer_id,
  }));
  s.sponsorships = sponsorships.map((x) => ({
    id: x.id, restaurantId: x.restaurant_id, city: x.city, startsAt: iso(x.starts_at)!, endsAt: iso(x.ends_at)!, days: x.days,
    amountCents: x.amount_cents, status: x.status, createdAt: x.created_at,
  }));
  setRemoteState(s);
  return true;
}

let started = false;
/** Einmal beim Start: Daten laden und bei An- und Abmeldung neu laden. */
export function startRemote() {
  if (started) return;
  started = true;
  sb().auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") setTimeout(() => void refresh(), 0);
  });
  refresh().catch(() => {
    const s = getState();
    setRemoteState({ ...s, remote: { ...s.remote!, ready: true } });
  });
}

function userId() {
  const id = getState().sessionUserId;
  if (!id) fail("Bitte melde dich an.");
  return id!;
}

// ---------- Konto ----------

export async function register(input: { name: string; email: string; password: string; role: Role }) {
  const { data } = check(await sb().auth.signUp({
    email: input.email,
    password: input.password,
    options: { data: { name: input.name, role: input.role }, emailRedirectTo: `${SITE_URL}/login/` },
  }));
  if (!data.session) fail("Fast geschafft: Wir haben dir eine E-Mail geschickt. Bitte bestätige deine Adresse über den Link und melde dich dann an.");
  await refresh();
}

export async function login(email: string, password: string) {
  const { data } = check(await sb().auth.signInWithPassword({ email, password }));
  await refresh();
  const user = getState().users.find((u) => u.id === data.user?.id);
  if (!user) fail("Dein Konto konnte nicht geladen werden. Bitte versuche es noch einmal.");
  return user!;
}

/** Anmeldung über Google oder Apple. Leitet zum Anbieter und danach zurück zur Login-Seite (mit Rücksprung-Ziel). */
export async function loginWith(provider: "google" | "apple", next?: string) {
  const back = `${window.location.origin}/firsty/login/${next ? `?weiter=${encodeURIComponent(next)}` : ""}`;
  check(await sb().auth.signInWithOAuth({ provider, options: { redirectTo: back } }));
}

export async function logout() {
  await sb().auth.signOut();
  await refresh();
}

export async function updateProfile(input: { name: string; phone: string; dietaryNotes: string }) {
  const id = userId();
  const patch: Row = { phone: input.phone.trim() || null, dietary_notes: input.dietaryNotes.trim() || null };
  if (input.name.trim()) patch.name = input.name.trim();
  check(await sb().from("profiles").update(patch).eq("id", id));
  await refresh();
}

// ---------- Gäste ----------

export async function bookSpot(spotId: string, partySize: number): Promise<Booking> {
  userId();
  const { data } = check(await sb().rpc("book_spot", { p_spot: spotId, p_party: partySize }));
  await refresh();
  return mapBooking(data as Row);
}

export async function cancelBooking(bookingId: string) {
  check(await sb().rpc("cancel_booking", { p_booking: bookingId }));
  await refresh();
}

export async function submitReview(bookingId: string, input: { rating: number; food?: number; service?: number; ambience?: number; asPromised: boolean; text: string }) {
  check(await sb().rpc("submit_review", {
    p_booking: bookingId, p_rating: input.rating, p_food: input.food ?? null, p_service: input.service ?? null,
    p_ambience: input.ambience ?? null, p_as_promised: input.asPromised, p_text: input.text,
  }));
  await refresh();
}

export async function toggleFavorite(restaurantId: string) {
  const id = userId();
  const isFav = getState().favorites.some((f) => f.userId === id && f.restaurantId === restaurantId);
  if (isFav) check(await sb().from("favorites").delete().eq("user_id", id).eq("restaurant_id", restaurantId));
  else check(await sb().from("favorites").insert({ user_id: id, restaurant_id: restaurantId }));
  await refresh();
}

// ---------- Portal ----------

export async function createRestaurant(name: string, city: string) {
  userId();
  const { data } = check(await sb().rpc("create_restaurant", { p_name: name, p_city: city }));
  await refresh();
  return data as string;
}

const COLUMNS: Partial<Record<keyof Restaurant, string>> = {
  name: "name", tagline: "tagline", description: "description", cuisine: "cuisine", priceLevel: "price_level", street: "street",
  postalCode: "postal_code", city: "city", lat: "lat", lng: "lng", directions: "directions", phone: "phone", email: "email",
  website: "website", instagram: "instagram", seatsInside: "seats_inside", seatsOutside: "seats_outside", features: "features",
  status: "status",
};

export async function updateRestaurant(id: string, patch: Partial<Restaurant>) {
  if (patch.name !== undefined && !patch.name.trim()) fail("Der Name darf nicht leer sein.");
  const row: Row = {};
  for (const [k, col] of Object.entries(COLUMNS)) {
    if (k in patch) row[col!] = patch[k as keyof Restaurant] ?? null;
  }
  if (Object.keys(row).length) {
    const { data } = check(await sb().from("restaurants").update(row).eq("id", id).select("id"));
    if (!data?.length) fail("Dafür fehlt dir die Berechtigung in diesem Restaurant.");
  }
  if ("legalName" in patch || "vatId" in patch) {
    check(await sb().from("restaurant_billing").upsert({ restaurant_id: id, legal_name: patch.legalName ?? null, vat_id: patch.vatId ?? null }));
  }
  await refresh();
}

export async function setOpeningHours(id: string, rows: { weekday: number; opens: string; closes: string }[]) {
  check(await sb().from("opening_hours").delete().eq("restaurant_id", id));
  if (rows.length) check(await sb().from("opening_hours").insert(rows.map((r) => ({ ...r, restaurant_id: id }))));
  await refresh();
}

export async function setStatus(id: string, status: Restaurant["status"]) {
  await updateRestaurant(id, { status });
}

async function dataUrlToBlob(dataUrl: string) {
  return (await fetch(dataUrl)).blob();
}

export async function addPhotos(restaurantId: string, kind: Photo["kind"], dataUrls: string[]) {
  const db = sb();
  const existing = getState().photos.filter((p) => p.restaurantId === restaurantId);
  const uploaded: Row[] = [];
  let position = existing.length;
  for (const dataUrl of dataUrls) {
    const path = `${restaurantId}/${crypto.randomUUID()}.jpg`;
    check(await db.storage.from("photos").upload(path, await dataUrlToBlob(dataUrl), { contentType: "image/jpeg" }));
    const url = db.storage.from("photos").getPublicUrl(path).data.publicUrl;
    uploaded.push({ restaurant_id: restaurantId, kind, url, path, position: position++ });
  }
  if (kind === "LOGO" || kind === "COVER") {
    const old = await db.from("photos").select("id, path").eq("restaurant_id", restaurantId).eq("kind", kind);
    for (const p of old.data ?? []) await removePhoto(p.id, p.path);
  }
  check(await db.from("photos").insert(uploaded));
  await refresh();
}

async function removePhoto(id: string, path?: string | null) {
  check(await sb().from("photos").delete().eq("id", id));
  if (path) await sb().storage.from("photos").remove([path]);
}

export async function deletePhoto(photoId: string) {
  const { data } = check(await sb().from("photos").select("id, path").eq("id", photoId));
  if (!data?.length) fail("Foto nicht gefunden.");
  await removePhoto(photoId, data![0].path);
  await refresh();
}

export async function addMenuItem(restaurantId: string, item: Row) {
  check(await sb().from("menu_items").insert({ ...item, restaurant_id: restaurantId }));
  await refresh();
}

export async function deleteMenuItem(itemId: string) {
  check(await sb().from("menu_items").delete().eq("id", itemId));
  await refresh();
}

export async function createSpots(rows: Row[]) {
  check(await sb().from("spots").insert(rows));
  await refresh();
}

export async function cancelSpot(spotId: string) {
  check(await sb().rpc("cancel_spot", { p_spot: spotId }));
  await refresh();
}

export async function checkIn(restaurantId: string, raw: string) {
  const { data } = check(await sb().rpc("check_in", { p_restaurant: restaurantId, p_code: raw }));
  await refresh();
  const r = data as { booking_id: string; again: boolean };
  return { bookingId: r.booking_id, again: r.again };
}

export async function markNoShow(bookingId: string) {
  check(await sb().rpc("mark_no_show", { p_booking: bookingId }));
  await refresh();
}

export async function giveFeedback(bookingId: string, positive: boolean, tags: string[]) {
  check(await sb().rpc("give_feedback", { p_booking: bookingId, p_positive: positive, p_tags: tags }));
  await refresh();
}

export async function replyToReview(reviewId: string, reply: string) {
  const { data } = check(await sb().from("reviews").update({ reply: reply.trim() || null }).eq("id", reviewId).select("id"));
  if (!data?.length) fail("Dafür fehlt dir die Berechtigung in diesem Restaurant.");
  await refresh();
}

export async function addMember(restaurantId: string, email: string, role: MemberRole) {
  check(await sb().rpc("add_member", { p_restaurant: restaurantId, p_email: email, p_role: role }));
  await refresh();
}

export async function removeMember(restaurantId: string, memberId: string) {
  check(await sb().from("members").delete().eq("id", memberId).eq("restaurant_id", restaurantId));
  await refresh();
}
