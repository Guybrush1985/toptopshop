"use client";

// Alle Änderungen an Daten. Regeln wie im Konzept: Buchungsgrenzen, Malus, Check-in-Fenster.
// Fehler werden als ActionError geworfen und in der Oberfläche angezeigt.
// Im Live-Betrieb (REMOTE) gehen die Änderungen an Supabase (remote.ts); dort prüft die Datenbank dieselben Regeln.
// Alle Änderungen sind deshalb async.

import {
  getState, hashPassword, uid, update,
  type Booking, type EventKind, type MemberRole, type Photo, type Restaurant, type Role, type Spot, type State,
} from "./store";
import { POINTS, reliabilityOf } from "./reliability";
import { berlinDate, dateKey, slugify } from "./format";
import { ActionError } from "./errors";
import { REMOTE } from "./supabase";
import * as R from "./remote";

export { ActionError };
const fail = (msg: string): never => {
  throw new ActionError(msg);
};
const ACTIVE = ["BOOKED", "CHECKED_IN"];
const STORAGE_FULL = "Der Speicher dieses Browsers ist voll. Bitte weniger oder kleinere Fotos verwenden.";

function save(fn: (s: State) => void) {
  if (!update(fn)) fail(STORAGE_FULL);
}

function me() {
  const s = getState();
  const user = s.users.find((u) => u.id === s.sessionUserId);
  if (!user) fail("Bitte melde dich an.");
  return user!;
}

export function memberRole(s: State, userId: string | undefined, restaurantId: string): MemberRole | null {
  return s.members.find((m) => m.userId === userId && m.restaurantId === restaurantId)?.role ?? null;
}

function requireMember(restaurantId: string, roles: MemberRole[] = ["OWNER", "MANAGER", "STAFF"]) {
  const user = me();
  const role = memberRole(getState(), user.id, restaurantId);
  if (!role || !roles.includes(role)) fail("Dafür fehlt dir die Berechtigung in diesem Restaurant.");
  return user;
}

function event(s: State, userId: string, kind: EventKind, bookingId?: string) {
  s.events.push({ id: uid(), userId, bookingId, kind, points: POINTS[kind], createdAt: new Date().toISOString() });
}

// ---------- Konto ----------

export async function register(input: { name: string; email: string; password: string; role: Role }) {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  if (name.length < 2) fail("Bitte gib deinen Namen an.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail("Bitte gib eine gültige E-Mail-Adresse an.");
  if (input.password.length < 8) fail("Das Passwort braucht mindestens 8 Zeichen.");
  if (REMOTE) return R.register({ ...input, name, email });
  if (getState().users.some((u) => u.email === email)) fail("Für diese E-Mail gibt es schon ein Konto.");
  const passwordHash = await hashPassword(input.password);
  const id = uid();
  save((s) => {
    s.users.push({ id, name, email, passwordHash, role: input.role, createdAt: new Date().toISOString() });
    s.sessionUserId = id;
  });
}

export async function login(emailRaw: string, password: string) {
  if (REMOTE) return R.login(emailRaw.trim().toLowerCase(), password);
  const email = emailRaw.trim().toLowerCase();
  const user = getState().users.find((u) => u.email === email);
  if (!user || user.passwordHash !== (await hashPassword(password))) fail("E-Mail oder Passwort stimmt nicht.");
  save((s) => void (s.sessionUserId = user!.id));
  return user!;
}

export async function logout() {
  if (REMOTE) return R.logout();
  save((s) => void (s.sessionUserId = null));
}

export async function updateProfile(input: { name: string; phone: string; dietaryNotes: string }) {
  const user = me();
  if (REMOTE) return R.updateProfile(input);
  save((s) => {
    const u = s.users.find((x) => x.id === user.id)!;
    u.name = input.name.trim() || u.name;
    u.phone = input.phone.trim() || undefined;
    u.dietaryNotes = input.dietaryNotes.trim() || undefined;
  });
}

// ---------- Gäste ----------

export function seatsTaken(s: State, spotId: string) {
  if (s.remote) return s.remote.taken[spotId] ?? 0;
  return s.bookings.filter((b) => b.spotId === spotId && ACTIVE.includes(b.status)).reduce((n, b) => n + b.partySize, 0);
}

export async function bookSpot(spotId: string, partySize: number): Promise<Booking> {
  if (REMOTE) return R.bookSpot(spotId, partySize);
  const user = me();
  const s = getState();
  const spot = s.spots.find((x) => x.id === spotId) ?? fail("Dieses Angebot gibt es nicht mehr.");
  const restaurant = s.restaurants.find((r) => r.id === spot.restaurantId)!;
  const startsAt = new Date(spot.startsAt);

  if (spot.status !== "OPEN" || restaurant.status !== "ACTIVE") fail("Dieses Angebot ist nicht mehr buchbar.");
  if (Date.now() > startsAt.getTime() - spot.bookingCutoffMin * 60_000) fail("Die Buchungsfrist ist abgelaufen.");
  if (!Number.isInteger(partySize) || partySize < 1 || partySize > spot.maxGroupSize) {
    fail(`Pro Buchung sind 1 bis ${spot.maxGroupSize} Personen möglich.`);
  }

  const rel = reliabilityOf(s, user.id);
  if (rel.tier === "BLOCKED") fail("Dein Konto ist wegen mehrerer No-Shows vorübergehend gesperrt.");
  if (rel.tier === "DEPOSIT") fail("Mit deinem Zuverlässigkeitswert ist eine Buchung nur mit Kaution möglich. Diese Funktion kommt bald.");

  const mine = s.bookings
    .filter((b) => b.userId === user.id && ACTIVE.includes(b.status))
    .map((b) => ({ ...b, spot: s.spots.find((x) => x.id === b.spotId)! }));
  if (mine.some((b) => b.spotId === spot.id)) fail("Du hast dieses Angebot schon gebucht.");
  const open = mine.filter((b) => b.status === "BOOKED" && new Date(b.spot.endsAt) > new Date());
  if (rel.tier === "PROBATION" && open.length > 0) fail("Auf Bewährung kannst du nur eine offene Buchung haben.");
  if (open.some((b) => dateKey(b.spot.startsAt) === dateKey(spot.startsAt))) fail("Du hast an diesem Tag schon eine Buchung.");
  const week = 7 * 864e5;
  if (mine.some((b) => b.spot.restaurantId === spot.restaurantId && Math.abs(new Date(b.spot.startsAt).getTime() - startsAt.getTime()) < week)) {
    fail("Pro Restaurant ist eine Buchung pro Woche möglich.");
  }
  if (seatsTaken(s, spot.id) + partySize > spot.seats) fail("Leider sind nicht mehr genug Plätze frei.");

  let code: string;
  do code = String(100000 + Math.floor(Math.random() * 900000));
  while (s.bookings.some((b) => b.code === code));
  const booking: Booking = { id: uid(), spotId, userId: user.id, partySize, code, status: "BOOKED", createdAt: new Date().toISOString() };
  save((d) => void d.bookings.push(booking));
  return booking;
}

export async function cancelBooking(bookingId: string) {
  if (REMOTE) return R.cancelBooking(bookingId);
  const user = me();
  const s = getState();
  const b = s.bookings.find((x) => x.id === bookingId);
  if (!b || b.userId !== user.id || b.status !== "BOOKED") fail("Diese Buchung kann nicht storniert werden.");
  const spot = s.spots.find((x) => x.id === b!.spotId)!;
  const late = new Date(spot.startsAt).getTime() - Date.now() < 2 * 3600_000;
  save((d) => {
    const x = d.bookings.find((y) => y.id === bookingId)!;
    x.status = late ? "LATE_CANCELLED" : "CANCELLED";
    x.cancelledAt = new Date().toISOString();
    if (late) event(d, user.id, "LATE_CANCEL", bookingId);
  });
}

export async function submitReview(bookingId: string, input: { rating: number; food?: number; service?: number; ambience?: number; asPromised: boolean; text: string }) {
  const user = me();
  const s = getState();
  const b = s.bookings.find((x) => x.id === bookingId);
  if (!REMOTE && (!b || b.userId !== user.id || b.status !== "CHECKED_IN")) fail("Bewerten kannst du nur nach dem Check-in.");
  if (!REMOTE && s.reviews.some((r) => r.bookingId === bookingId)) fail("Du hast schon bewertet.");
  if (!(input.rating >= 1 && input.rating <= 5)) fail("Bitte vergib 1 bis 5 Sterne.");
  if (REMOTE) return R.submitReview(bookingId, input);
  const restaurantId = s.spots.find((x) => x.id === b!.spotId)!.restaurantId;
  save((d) =>
    void d.reviews.push({
      id: uid(), bookingId, restaurantId, authorName: user.name.split(" ")[0], ...input, text: input.text.trim() || undefined,
      createdAt: new Date().toISOString(),
    }));
}

export async function toggleFavorite(restaurantId: string) {
  if (REMOTE) return R.toggleFavorite(restaurantId);
  const user = me();
  save((d) => {
    const i = d.favorites.findIndex((f) => f.userId === user.id && f.restaurantId === restaurantId);
    if (i >= 0) d.favorites.splice(i, 1);
    else d.favorites.push({ userId: user.id, restaurantId });
  });
}

// ---------- Portal ----------

function uniqueSlug(s: State, name: string, ignoreId?: string) {
  const base = slugify(name) || "restaurant";
  for (let i = 0; ; i++) {
    const slug = i ? `${base}-${i + 1}` : base;
    if (!s.restaurants.some((r) => r.slug === slug && r.id !== ignoreId)) return slug;
  }
}

export async function createRestaurant(name: string, city: string) {
  const user = me();
  if (!name.trim()) fail("Bitte gib den Namen des Restaurants an.");
  if (REMOTE) return R.createRestaurant(name.trim(), city.trim());
  const id = uid();
  save((d) => {
    d.restaurants.push({
      id, name: name.trim(), slug: uniqueSlug(d, name), city: city.trim() || undefined, priceLevel: 2,
      seatsInside: 0, seatsOutside: 0, features: [], status: "DRAFT", createdAt: new Date().toISOString(),
    });
    d.members.push({ id: uid(), userId: user.id, restaurantId: id, role: "OWNER" });
    const u = d.users.find((x) => x.id === user.id)!;
    u.role = "OWNER";
  });
  return id;
}

export async function geocode(street?: string, postalCode?: string, city?: string) {
  const q = [street, postalCode, city].filter(Boolean).join(", ");
  if (!q) fail("Bitte zuerst Adresse und Stadt eintragen.");
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=de,at,ch&q=${encodeURIComponent(q)}`, {
      signal: AbortSignal.timeout(6000),
    });
    const [hit] = (await res.json()) as { lat: string; lon: string }[];
    if (!hit) fail("Zu dieser Adresse wurde nichts gefunden.");
    return { lat: Number(hit.lat), lng: Number(hit.lon) };
  } catch (e) {
    if (e instanceof ActionError) throw e;
    return fail("Die Adresssuche ist gerade nicht erreichbar. Du kannst die Koordinaten auch selbst eintragen.");
  }
}

export async function updateRestaurant(id: string, patch: Partial<Restaurant>) {
  requireMember(id, ["OWNER", "MANAGER"]);
  if (patch.name !== undefined && !patch.name.trim()) fail("Der Name darf nicht leer sein.");
  if (REMOTE) return R.updateRestaurant(id, patch);
  save((d) => {
    const r = d.restaurants.find((x) => x.id === id)!;
    if (patch.name && patch.name !== r.name) patch.slug = uniqueSlug(d, patch.name, id);
    Object.assign(r, patch);
  });
}

export async function setOpeningHours(id: string, rows: { weekday: number; opens: string; closes: string }[]) {
  requireMember(id, ["OWNER", "MANAGER"]);
  if (REMOTE) return R.setOpeningHours(id, rows);
  save((d) => {
    d.hours = d.hours.filter((h) => h.restaurantId !== id).concat(rows.map((r) => ({ ...r, restaurantId: id })));
  });
}

export async function setStatus(id: string, status: Restaurant["status"]) {
  requireMember(id, ["OWNER", "MANAGER"]);
  const r = getState().restaurants.find((x) => x.id === id)!;
  if (status === "ACTIVE" && (!r.street || !r.city || !r.description)) {
    fail("Zum Veröffentlichen brauchst du mindestens Adresse und Beschreibung (Reiter „Profil“).");
  }
  if (REMOTE) return R.setStatus(id, status);
  save((d) => void (d.restaurants.find((x) => x.id === id)!.status = status));
}

/** Verkleinert ein Bild im Browser, damit es in den lokalen Speicher passt und Uploads klein bleiben. */
export function resizeImage(file: File, maxSide = 1000): Promise<string> {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return Promise.reject(new ActionError("Erlaubt sind JPG, PNG und WebP."));
  if (file.size > 10 * 1024 * 1024) return Promise.reject(new ActionError("Ein Bild darf höchstens 10 MB groß sein."));
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, maxSide / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(img.src);
      resolve(c.toDataURL("image/jpeg", 0.75));
    };
    img.onerror = () => reject(new ActionError("Das Bild konnte nicht gelesen werden."));
    img.src = URL.createObjectURL(file);
  });
}

export async function addPhotos(restaurantId: string, kind: Photo["kind"], files: File[]) {
  requireMember(restaurantId, ["OWNER", "MANAGER"]);
  if (!files.length) fail("Bitte wähle mindestens ein Bild aus.");
  const urls = await Promise.all(files.map((f) => resizeImage(f, kind === "LOGO" ? 400 : kind === "MENU" ? 1600 : 1200)));
  if (REMOTE) return R.addPhotos(restaurantId, kind, urls);
  save((d) => {
    if (kind === "LOGO" || kind === "COVER") d.photos = d.photos.filter((p) => !(p.restaurantId === restaurantId && p.kind === kind));
    let position = d.photos.filter((p) => p.restaurantId === restaurantId).length;
    for (const dataUrl of urls) d.photos.push({ id: uid(), restaurantId, kind, dataUrl, position: position++ });
  });
}

export async function deletePhoto(photoId: string) {
  const p = getState().photos.find((x) => x.id === photoId) ?? fail("Foto nicht gefunden.");
  requireMember(p.restaurantId, ["OWNER", "MANAGER"]);
  if (REMOTE) return R.deletePhoto(photoId);
  save((d) => void (d.photos = d.photos.filter((x) => x.id !== photoId)));
}

export async function addMenuItem(restaurantId: string, input: { category: string; name: string; description: string; price: string; allergens: string; tags: string[] }) {
  requireMember(restaurantId, ["OWNER", "MANAGER"]);
  const price = Number(input.price.replace(",", "."));
  if (!input.name.trim() || !Number.isFinite(price) || price < 0) fail("Bitte Name und Preis angeben.");
  if (REMOTE) {
    return R.addMenuItem(restaurantId, {
      category: input.category.trim() || "Speisen", name: input.name.trim(), description: input.description.trim() || null,
      price_cents: Math.round(price * 100), tags: input.tags, allergens: input.allergens.trim() || null,
      position: getState().menu.filter((m) => m.restaurantId === restaurantId).length,
    });
  }
  save((d) =>
    void d.menu.push({
      id: uid(), restaurantId, category: input.category.trim() || "Speisen", name: input.name.trim(),
      description: input.description.trim() || undefined, priceCents: Math.round(price * 100), tags: input.tags,
      allergens: input.allergens.trim() || undefined, position: d.menu.filter((m) => m.restaurantId === restaurantId).length,
    }));
}

export async function deleteMenuItem(itemId: string) {
  const item = getState().menu.find((x) => x.id === itemId) ?? fail("Gericht nicht gefunden.");
  requireMember(item.restaurantId, ["OWNER", "MANAGER"]);
  if (REMOTE) return R.deleteMenuItem(itemId);
  save((d) => void (d.menu = d.menu.filter((x) => x.id !== itemId)));
}

export async function createSpots(restaurantId: string, input: {
  date: string; start: string; end: string; repeatWeeks: number; seats: number; maxGroupSize: number;
  discountPercent: number; freebie: string; conditions: string; bookingCutoffMin: number;
}) {
  requireMember(restaurantId, ["OWNER", "MANAGER"]);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date) || !/^\d{2}:\d{2}$/.test(input.start) || !/^\d{2}:\d{2}$/.test(input.end)) {
    fail("Bitte Datum und Uhrzeiten angeben.");
  }
  if (!(input.seats >= 1 && input.seats <= 100)) fail("Das Kontingent muss zwischen 1 und 100 Plätzen liegen.");
  if (![0, 25, 50, 75].includes(input.discountPercent)) fail("Der Rabatt muss 25, 50 oder 75 % betragen.");
  if (!input.discountPercent && !input.freebie.trim()) fail("Bitte wähle ein Angebot aus.");
  const start = berlinDate(input.date, input.start);
  const end = berlinDate(input.date, input.end);
  if (end <= start) fail("Das Ende muss nach dem Beginn liegen.");
  if (start < new Date()) fail("Der Beginn liegt in der Vergangenheit.");
  const weeks = Math.min(12, Math.max(1, input.repeatWeeks));
  const spots: Spot[] = Array.from({ length: weeks }, (_, w) => ({
    id: uid(), restaurantId,
    startsAt: new Date(start.getTime() + w * 7 * 864e5).toISOString(),
    endsAt: new Date(end.getTime() + w * 7 * 864e5).toISOString(),
    seats: input.seats, maxGroupSize: Math.min(8, Math.max(1, input.maxGroupSize)),
    discountPercent: input.discountPercent, freebie: input.freebie.trim() || undefined,
    conditions: input.conditions.trim() || undefined, bookingCutoffMin: Math.max(0, input.bookingCutoffMin), status: "OPEN",
  }));
  if (REMOTE) {
    await R.createSpots(spots.map((x) => ({
      restaurant_id: restaurantId, starts_at: x.startsAt, ends_at: x.endsAt, seats: x.seats, max_group_size: x.maxGroupSize,
      discount_percent: x.discountPercent, freebie: x.freebie ?? null, conditions: x.conditions ?? null, booking_cutoff_min: x.bookingCutoffMin,
    })));
    return weeks;
  }
  save((d) => void d.spots.push(...spots));
  return weeks;
}

export async function cancelSpot(spotId: string) {
  if (REMOTE) return R.cancelSpot(spotId);
  const spot = getState().spots.find((x) => x.id === spotId) ?? fail("Angebot nicht gefunden.");
  requireMember(spot.restaurantId, ["OWNER", "MANAGER"]);
  save((d) => {
    d.spots.find((x) => x.id === spotId)!.status = "CANCELLED";
    for (const b of d.bookings) {
      if (b.spotId === spotId && b.status === "BOOKED") {
        b.status = "CANCELLED";
        b.cancelledAt = new Date().toISOString();
      }
    }
  });
}

/** Check-in per Code oder QR-Inhalt. Gilt ab 60 Minuten vor Beginn bis zum Ende des Zeitfensters. */
export async function checkIn(restaurantId: string, raw: string): Promise<{ bookingId: string; again: boolean }> {
  if (REMOTE) return R.checkIn(restaurantId, raw);
  requireMember(restaurantId);
  const code = raw.replace(/^THIRSTY:/i, "").replace(/\D/g, "");
  const s = getState();
  const b = s.bookings.find((x) => x.code === code);
  const spot = b && s.spots.find((x) => x.id === b.spotId);
  if (!b || !spot || spot.restaurantId !== restaurantId) fail(`Code ${code || raw} gehört zu keiner Buchung in diesem Restaurant.`);
  if (b!.status === "CHECKED_IN") return { bookingId: b!.id, again: true };
  if (b!.status !== "BOOKED" && b!.status !== "NO_SHOW") fail("Diese Buchung wurde storniert.");
  const now = Date.now();
  if (now < new Date(spot!.startsAt).getTime() - 3600_000) fail("Diese Buchung gilt erst später.");
  if (now > new Date(spot!.endsAt).getTime()) fail("Das Zeitfenster dieser Buchung ist vorbei.");
  save((d) => {
    const x = d.bookings.find((y) => y.id === b!.id)!;
    // Gast kam doch noch: No-Show-Malus zurücknehmen.
    if (x.status === "NO_SHOW") d.events = d.events.filter((e) => !(e.bookingId === x.id && e.kind === "NO_SHOW"));
    x.status = "CHECKED_IN";
    x.checkedInAt = new Date().toISOString();
    event(d, x.userId, "ATTENDED", x.id);
  });
  return { bookingId: b!.id, again: false };
}

/** No-Show melden: frühestens 15 Minuten nach Beginn. */
export async function markNoShow(bookingId: string) {
  if (REMOTE) return R.markNoShow(bookingId);
  const s = getState();
  const b = s.bookings.find((x) => x.id === bookingId) ?? fail("Buchung nicht gefunden.");
  const spot = s.spots.find((x) => x.id === b.spotId)!;
  requireMember(spot.restaurantId);
  if (b.status !== "BOOKED") fail("Diese Buchung ist nicht mehr offen.");
  if (Date.now() < new Date(spot.startsAt).getTime() + 15 * 60_000) fail("Ein No-Show kann erst 15 Minuten nach Beginn gemeldet werden.");
  save((d) => {
    d.bookings.find((x) => x.id === bookingId)!.status = "NO_SHOW";
    event(d, b.userId, "NO_SHOW", bookingId);
  });
}

export async function giveFeedback(bookingId: string, positive: boolean, tags: string[]) {
  if (REMOTE) return R.giveFeedback(bookingId, positive, tags);
  const s = getState();
  const b = s.bookings.find((x) => x.id === bookingId) ?? fail("Buchung nicht gefunden.");
  const spot = s.spots.find((x) => x.id === b.spotId)!;
  requireMember(spot.restaurantId);
  if (b.status !== "CHECKED_IN" || s.feedback.some((f) => f.bookingId === bookingId)) fail("Feedback ist schon abgegeben.");
  save((d) => {
    d.feedback.push({ bookingId, positive, tags });
    if (!positive) event(d, b.userId, "THUMBS_DOWN", bookingId);
    if (tags.includes("zu spät")) event(d, b.userId, "LATE_ARRIVAL", bookingId);
  });
}

export async function replyToReview(reviewId: string, reply: string) {
  if (REMOTE) return R.replyToReview(reviewId, reply);
  const r = getState().reviews.find((x) => x.id === reviewId) ?? fail("Bewertung nicht gefunden.");
  requireMember(r.restaurantId, ["OWNER", "MANAGER"]);
  save((d) => void (d.reviews.find((x) => x.id === reviewId)!.reply = reply.trim() || undefined));
}

export async function addMember(restaurantId: string, emailRaw: string, role: MemberRole) {
  if (REMOTE) return R.addMember(restaurantId, emailRaw.trim(), role);
  requireMember(restaurantId, ["OWNER"]);
  if (!["MANAGER", "STAFF"].includes(role)) fail("Unbekannte Rolle.");
  const email = emailRaw.trim().toLowerCase();
  const user = getState().users.find((u) => u.email === email);
  if (!user) fail("Zu dieser E-Mail gibt es noch kein Thirsty-Konto. Die Person muss sich zuerst registrieren.");
  save((d) => {
    const m = d.members.find((x) => x.userId === user!.id && x.restaurantId === restaurantId);
    if (m) m.role = role;
    else d.members.push({ id: uid(), userId: user!.id, restaurantId, role });
  });
}

export async function removeMember(restaurantId: string, memberId: string) {
  if (REMOTE) return R.removeMember(restaurantId, memberId);
  const user = requireMember(restaurantId, ["OWNER"]);
  save((d) => void (d.members = d.members.filter((m) => !(m.id === memberId && m.restaurantId === restaurantId && m.userId !== user.id))));
}
