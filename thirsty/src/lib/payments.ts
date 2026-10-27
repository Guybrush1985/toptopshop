"use client";

// Zahlungen in der App: Karte hinterlegen, Rechnung bezahlen, No-Show-Gebühr, Auszahlungen, Abo, Werbung, Konto löschen.
// Live: Edge Function „payments“ (Stripe). Vorschau: alles wird im Browser simuliert, ohne echtes Geld.
// Preise und Gebühren: supabase/functions/_shared/pricing.ts

import { APP, REMOTE } from "./config";
import { supabase } from "./supabase";
import { getState, uid, update, type Bill, type Booking, type Payment, type RestaurantAccount, type Spot, type State } from "./store";
import { ActionError } from "./errors";
import { reliabilityOf } from "./reliability";
import {
  billAmounts, BOOKING_FEE_NO_SHOW_HOURS, bookingFeeNet, commissionOf, feeFreeUntil, gross, noShowPlatformShare, PLANS, sponsorPrice,
  SUBSCRIPTIONS_OFFERED, tipOf, TIP_OPTIONS, TRIAL_DAYS, type PlanKey,
} from "../../supabase/functions/_shared/pricing";

export * from "../../supabase/functions/_shared/pricing";

const fail = (msg: string): never => {
  throw new ActionError(msg);
};

/**
 * Abo und Werbeplätze sind digitale Leistungen. In den Store-Apps werden sie nicht verkauft
 * (Apple und Google verlangen dafür ihre eigenen Kaufsysteme); Restaurants buchen sie im Web-Portal.
 * Zahlungen für Restaurantbesuche (Rechnung, No-Show-Gebühr) sind reale Leistungen und laufen überall über Stripe.
 */
export const SELLS_DIGITAL = !APP;

// ---------- Lesen ----------

export function accountOf(s: State, restaurantId: string): RestaurantAccount {
  return s.accounts.find((a) => a.restaurantId === restaurantId) ?? {
    restaurantId, connected: false, chargesEnabled: false, payoutsEnabled: false, detailsSubmitted: false,
    plan: "NONE", planStatus: "none", trialUsed: false, cancelAtPeriodEnd: false, hasCustomer: false,
  };
}

export function flagsOf(s: State, restaurantId: string) {
  if (s.flags) return s.flags[restaurantId] ?? { acceptsAppPayment: false, sponsored: false };
  const now = Date.now();
  return {
    acceptsAppPayment: accountOf(s, restaurantId).chargesEnabled,
    sponsored: s.sponsorships.some((x) => x.restaurantId === restaurantId && x.status === "PAID" && new Date(x.startsAt).getTime() <= now && now < new Date(x.endsAt).getTime()),
  };
}

export const cardOf = (s: State, userId: string) => s.cards.find((c) => c.userId === userId && c.last4);

/** Braucht diese Buchung eine hinterlegte Karte? */
export function needsCard(s: State, userId: string, spot: Spot) {
  return !!spot.noShowProtection || reliabilityOf(s, userId).tier === "DEPOSIT";
}

export const billOf = (s: State, bookingId: string) => s.bills.find((b) => b.bookingId === bookingId);

/**
 * Buchungsgebühr eines Restaurants im Monat (YYYY-MM, Monat der Angebote) nach denselben Regeln wie die Abrechnung
 * (schema.sql: booking_fee_month): eingecheckt oder bis 24 Stunden nach Ende nicht als No-Show gemeldet.
 * Offene Buchungen (noch keine 24 Stunden vorbei) zählen als „offen“ und kommen ggf. noch dazu.
 */
export function bookingFeeOf(s: State, restaurantId: string, month: string, now = Date.now()) {
  const r = s.restaurants.find((x) => x.id === restaurantId);
  const freeUntil = feeFreeUntil(r?.createdAt || new Date(now).toISOString(), accountOf(s, restaurantId).feeFreeUntil);
  const monthOf = (iso: string) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin", year: "numeric", month: "2-digit" }).format(new Date(iso));
  let attended = 0, billable = 0, pending = 0;
  for (const b of s.bookings) {
    const sp = s.spots.find((x) => x.id === b.spotId);
    if (!sp || sp.restaurantId !== restaurantId || monthOf(sp.startsAt) !== month) continue;
    const over = new Date(sp.endsAt).getTime() + BOOKING_FEE_NO_SHOW_HOURS * 36e5 < now;
    const counts = b.status === "CHECKED_IN" || (b.status === "BOOKED" && over);
    if (b.status === "BOOKED" && !over) pending++;
    if (!counts) continue;
    attended++;
    if (!r?.demo && new Date(sp.startsAt) >= freeUntil) billable++;
  }
  return { attended, billable, pending, netCents: bookingFeeNet(billable), freeUntil };
}

export const PLAN_STATUS_LABEL: Record<string, string> = {
  none: "Kein Abo", trialing: "Testzeit", active: "Aktiv", past_due: "Zahlung offen", unpaid: "Unbezahlt", canceled: "Gekündigt",
  incomplete: "Unvollständig", incomplete_expired: "Abgelaufen", paused: "Pausiert",
};
export const BILL_STATUS_LABEL: Record<string, string> = {
  OPEN: "Offen", PAID: "In der App bezahlt", PAID_ON_SITE: "Vor Ort bezahlt", CANCELLED: "Storniert", REFUNDED: "Erstattet",
};
export const PAYMENT_KIND_LABEL: Record<string, string> = {
  BILL: "Rechnung", NO_SHOW: "No-Show-Gebühr", SUBSCRIPTION: "Abo", SPONSORSHIP: "Werbeplatz", REFUND: "Erstattung",
  BOOKING_FEE: "Buchungsgebühr",
};
export const brandLabel = (b?: string) => ({ visa: "Visa", mastercard: "Mastercard", amex: "American Express", girocard: "girocard" } as Record<string, string>)[b ?? ""] ?? (b ? b[0].toUpperCase() + b.slice(1) : "Karte");

// ---------- Aufruf der Edge Function ----------

type Result = { url?: string; sessionId?: string; [k: string]: unknown };

async function call(action: string, body: Record<string, unknown> = {}): Promise<Result> {
  const { data, error } = await supabase!.functions.invoke("payments", { body: { action, app: APP, ...body } });
  if (error) {
    let msg = "Die Zahlungsfunktion ist gerade nicht erreichbar. Bitte versuche es gleich noch einmal.";
    try {
      const res = (error as { context?: Response }).context;
      const j = res ? await res.json() : null;
      if (j?.error) msg = j.error;
    } catch {
      /* Standardmeldung */
    }
    fail(msg);
  }
  return (data ?? {}) as Result;
}

const PENDING = "firsty-pending-checkout";

/** Öffnet eine Stripe-Seite. App: In-App-Browser; Website: im selben Tab. */
export async function openStripe(res: Result) {
  if (!res.url) return;
  try {
    if (res.sessionId) sessionStorage.setItem(PENDING, res.sessionId);
  } catch {
    /* egal */
  }
  if (APP) {
    const { Browser } = await import("@capacitor/browser");
    await Browser.open({ url: res.url, presentationStyle: "popover", toolbarColor: "#0b0b0d" });
  } else {
    window.location.href = res.url;
  }
}

/** Nach Rückkehr: Ergebnis eines Checkouts übernehmen (falls der Webhook noch nicht da war). */
export async function syncCheckout(sessionId?: string | null) {
  let id = sessionId;
  try {
    id ||= sessionStorage.getItem(PENDING);
    sessionStorage.removeItem(PENDING);
  } catch {
    /* egal */
  }
  if (!REMOTE || !id || !/^cs_/.test(id)) return;
  await call("sync_checkout", { sessionId: id }).catch(() => undefined);
}

async function refreshRemote() {
  const { refresh } = await import("./remote");
  await refresh();
}

function save(fn: (s: State) => void) {
  if (!update(fn)) fail("Der Speicher dieses Browsers ist voll.");
}

function me() {
  const s = getState();
  return s.users.find((u) => u.id === s.sessionUserId) ?? fail("Bitte melde dich an.");
}

function previewAccount(d: State, restaurantId: string) {
  let a = d.accounts.find((x) => x.restaurantId === restaurantId);
  if (!a) {
    a = { ...accountOf(d, restaurantId) };
    d.accounts.push(a);
  }
  return a;
}

const ledger = (p: Omit<Payment, "id" | "createdAt" | "status" | "tipCents"> & Partial<Pick<Payment, "status" | "tipCents">>): Payment => ({
  id: uid(), createdAt: new Date().toISOString(), status: "SUCCEEDED", tipCents: 0, ...p,
});

/** Ergebnis für die Oberfläche: entweder wurde eine Stripe-Seite geöffnet oder die Vorschau hat es direkt erledigt. */
export type Done = { opened: boolean; message?: string };

// ---------- Gast ----------

export async function startCardSetup(weiter = ""): Promise<Done> {
  const user = me();
  if (REMOTE) {
    await openStripe(await call("card_setup", { weiter }));
    return { opened: true };
  }
  save((d) => {
    d.cards = d.cards.filter((c) => c.userId !== user.id);
    d.cards.push({ userId: user.id, brand: "visa", last4: "4242", expMonth: 12, expYear: new Date().getFullYear() + 3 });
  });
  return { opened: false, message: "Testkarte Visa •••• 4242 hinterlegt (Vorschau, keine echte Karte)." };
}

export async function removeCard() {
  const user = me();
  if (REMOTE) {
    await call("card_remove");
    return refreshRemote();
  }
  const s = getState();
  const open = s.bookings.some((b) => b.userId === user.id && b.status === "BOOKED" && b.guaranteed && new Date(s.spots.find((x) => x.id === b.spotId)?.endsAt ?? 0) > new Date());
  if (open) fail("Deine Karte ist für eine offene Buchung als Garantie hinterlegt. Entfernen geht nach dem Besuch oder nach dem Stornieren.");
  save((d) => void (d.cards = d.cards.filter((c) => c.userId !== user.id)));
}

export async function payBill(billId: string, tipPercent: number): Promise<Done> {
  const user = me();
  if (!(TIP_OPTIONS as readonly number[]).includes(tipPercent)) fail("Ungültiges Trinkgeld.");
  if (REMOTE) {
    await openStripe(await call("pay_bill", { billId, tipPercent }));
    return { opened: true };
  }
  const s = getState();
  const bill = s.bills.find((b) => b.id === billId && b.userId === user.id) ?? fail("Rechnung nicht gefunden.");
  if (bill.status !== "OPEN") fail("Diese Rechnung ist schon abgeschlossen.");
  if (!flagsOf(s, bill.restaurantId).acceptsAppPayment) fail("Dieses Restaurant nimmt noch keine Zahlung in der App an. Bitte zahl wie gewohnt vor Ort.");
  const tip = tipOf(bill.amountCents, tipPercent);
  const fee = commissionOf(bill.amountCents);
  const r = s.restaurants.find((x) => x.id === bill.restaurantId);
  save((d) => {
    const b = d.bills.find((x) => x.id === billId)!;
    Object.assign(b, { status: "PAID", tipCents: tip, feeCents: fee, paidAt: new Date().toISOString() });
    d.payments.push(ledger({
      kind: "BILL", restaurantId: b.restaurantId, userId: user.id, bookingId: b.bookingId, billId, amountCents: b.amountCents + tip,
      feeCents: fee, netCents: b.amountCents + tip - fee, tipCents: tip, description: `Rechnung ${r?.name ?? ""}`,
    }));
  });
  return { opened: false, message: "Bezahlt (Vorschau, kein echtes Geld)." };
}

// ---------- Restaurant: Rechnung und No-Show ----------

function requireMemberOf(restaurantId: string, roles = ["OWNER", "MANAGER", "STAFF"]) {
  const user = me();
  const m = getState().members.find((x) => x.userId === user.id && x.restaurantId === restaurantId);
  if (!m || !roles.includes(m.role)) fail("Dafür fehlt dir die Berechtigung in diesem Restaurant.");
  return user;
}

export async function createBill(booking: Booking, subtotalEuro: string, note = "") {
  const subtotal = Math.round(Number(subtotalEuro.replace(/\s|€/g, "").replace(",", ".")) * 100);
  if (!Number.isFinite(subtotal) || subtotal < 50) fail("Bitte gib die Summe laut Kasse ein (mindestens 0,50 €).");
  if (subtotal > 1_000_000) fail("Das ist zu viel für eine Rechnung.");
  const s = getState();
  const spot = s.spots.find((x) => x.id === booking.spotId) ?? fail("Angebot nicht gefunden.");
  if (REMOTE) {
    const { error } = await supabase!.rpc("create_bill", { p_booking: booking.id, p_subtotal_cents: subtotal, p_note: note });
    if (error) fail(error.code === "P0001" ? error.message : `Etwas ist schiefgelaufen (${error.message}).`);
    return refreshRemote();
  }
  const user = requireMemberOf(spot.restaurantId);
  if (booking.status !== "CHECKED_IN") fail("Eine Rechnung gibt es erst nach dem Check-in.");
  const existing = billOf(s, booking.id);
  if (existing && existing.status !== "OPEN") fail("Diese Rechnung ist schon abgeschlossen.");
  const { discountCents, amountCents } = billAmounts(subtotal, spot.discountPercent);
  save((d) => {
    const b = d.bills.find((x) => x.bookingId === booking.id);
    const values = { subtotalCents: subtotal, discountPercent: spot.discountPercent, discountCents, amountCents, note: note.trim() || undefined };
    if (b) Object.assign(b, values);
    else {
      d.bills.push({
        id: uid(), bookingId: booking.id, restaurantId: spot.restaurantId, userId: booking.userId, tipCents: 0, feeCents: 0, status: "OPEN",
        createdAt: new Date().toISOString(), ...values,
      });
    }
    void user;
  });
}

async function billRpc(fn: "settle_bill_on_site" | "cancel_bill", bill: Bill, status: Bill["status"], roles?: string[]) {
  if (REMOTE) {
    const { error } = await supabase!.rpc(fn, { p_bill: bill.id });
    if (error) fail(error.code === "P0001" ? error.message : `Etwas ist schiefgelaufen (${error.message}).`);
    return refreshRemote();
  }
  requireMemberOf(bill.restaurantId, roles);
  if (bill.status !== "OPEN") fail("Diese Rechnung ist schon abgeschlossen.");
  save((d) => {
    const b = d.bills.find((x) => x.id === bill.id)!;
    b.status = status;
    if (status === "PAID_ON_SITE") b.paidAt = new Date().toISOString();
  });
}

export const settleBillOnSite = (bill: Bill) => billRpc("settle_bill_on_site", bill, "PAID_ON_SITE");
export const cancelBill = (bill: Bill) => billRpc("cancel_bill", bill, "CANCELLED", ["OWNER", "MANAGER"]);

/** Nach „Nicht erschienen“: Gebühr von der hinterlegten Karte (nur wenn mit Karte gebucht). */
export async function chargeNoShow(booking: Booking): Promise<string | undefined> {
  if (!booking.guaranteed) return;
  if (REMOTE) {
    const r = await call("charge_no_show", { bookingId: booking.id }).catch((e: Error) => ({ charged: false, reason: e.message }));
    await refreshRemote();
    return r.charged ? undefined : (r.reason as string | undefined);
  }
  const s = getState();
  const spot = s.spots.find((x) => x.id === booking.spotId)!;
  if (!accountOf(s, spot.restaurantId).chargesEnabled) return "Auszahlungen deines Restaurants sind noch nicht eingerichtet, deshalb wurde keine Gebühr belastet.";
  if (s.payments.some((p) => p.bookingId === booking.id && p.kind === "NO_SHOW" && p.status === "SUCCEEDED")) return;
  const fee = booking.noShowFeeCents ?? 0;
  save((d) => void d.payments.push(ledger({
    kind: "NO_SHOW", restaurantId: spot.restaurantId, userId: booking.userId, bookingId: booking.id, amountCents: fee,
    feeCents: noShowPlatformShare(fee), netCents: fee - noShowPlatformShare(fee), description: "No-Show-Gebühr",
  })));
}

/** Gast kam doch: eine belastete No-Show-Gebühr erstatten. */
export async function refundNoShow(bookingId: string) {
  if (REMOTE) {
    await call("refund_no_show", { bookingId }).catch(() => undefined);
    return refreshRemote();
  }
  save((d) => {
    const p = d.payments.find((x) => x.bookingId === bookingId && x.kind === "NO_SHOW" && x.status === "SUCCEEDED");
    if (!p) return;
    p.status = "REFUNDED";
    d.payments.push(ledger({ ...p, kind: "REFUND", amountCents: -p.amountCents, feeCents: -p.feeCents, netCents: -p.netCents, description: "Erstattung: No-Show-Gebühr" }));
  });
}

// ---------- Restaurant: Auszahlungen, Abo, Werbung ----------

export async function connectOnboarding(restaurantId: string): Promise<Done> {
  if (REMOTE) {
    await openStripe(await call("connect_onboarding", { restaurantId }));
    return { opened: true };
  }
  requireMemberOf(restaurantId, ["OWNER"]);
  save((d) => Object.assign(previewAccount(d, restaurantId), { connected: true, chargesEnabled: true, payoutsEnabled: true, detailsSubmitted: true }));
  return { opened: false, message: "Auszahlungskonto eingerichtet (Vorschau)." };
}

export async function connectStatus(restaurantId: string) {
  if (!REMOTE) return;
  await call("connect_status", { restaurantId }).catch(() => undefined);
  await refreshRemote();
}

export async function connectDashboard(restaurantId: string) {
  if (!REMOTE) fail("In der Vorschau gibt es kein Stripe-Dashboard.");
  await openStripe(await call("connect_dashboard", { restaurantId }));
}

export async function subscribe(restaurantId: string, plan: PlanKey): Promise<Done> {
  if (!SUBSCRIPTIONS_OFFERED) fail("Firsty hat keine Abos mehr. Du zahlst nur pro Buchung.");
  if (!SELLS_DIGITAL) fail("Abos werden im Restaurant-Portal auf der Website abgeschlossen.");
  if (REMOTE) {
    await openStripe(await call("subscribe", { restaurantId, plan }));
    return { opened: true };
  }
  requireMemberOf(restaurantId, ["OWNER"]);
  const a = accountOf(getState(), restaurantId);
  if (["trialing", "active", "past_due"].includes(a.planStatus)) fail("Dein Restaurant hat schon ein Abo.");
  save((d) => {
    const acc = previewAccount(d, restaurantId);
    const trial = !acc.trialUsed;
    Object.assign(acc, {
      plan, planStatus: trial ? "trialing" : "active", trialUsed: true, hasCustomer: true, cancelAtPeriodEnd: false,
      trialEnd: trial ? new Date(Date.now() + TRIAL_DAYS * 864e5).toISOString() : undefined,
      periodEnd: new Date(Date.now() + (trial ? TRIAL_DAYS : 30) * 864e5).toISOString(),
    });
    if (!trial) {
      d.payments.push(ledger({ kind: "SUBSCRIPTION", restaurantId, amountCents: gross(PLANS[plan].netCents), feeCents: gross(PLANS[plan].netCents), netCents: 0, description: `Firsty ${PLANS[plan].name}` }));
    }
  });
  return { opened: false, message: "Abo abgeschlossen (Vorschau, keine echte Zahlung)." };
}

export async function billingPortal(restaurantId: string): Promise<Done> {
  if (!SELLS_DIGITAL) fail("Das Abo verwaltest du im Restaurant-Portal auf der Website.");
  if (REMOTE) {
    await openStripe(await call("billing_portal", { restaurantId }));
    return { opened: true };
  }
  // Vorschau: Kündigen zum Ende der Laufzeit
  save((d) => void (previewAccount(d, restaurantId).cancelAtPeriodEnd = true));
  return { opened: false, message: "Abo zum Ende der Laufzeit gekündigt (Vorschau)." };
}

export async function sponsor(restaurantId: string, days: number, start: string): Promise<Done> {
  if (!SELLS_DIGITAL) fail("Werbeplätze werden im Restaurant-Portal auf der Website gebucht.");
  if (REMOTE) {
    await openStripe(await call("sponsor", { restaurantId, days, start }));
    return { opened: true };
  }
  requireMemberOf(restaurantId, ["OWNER", "MANAGER"]);
  const s = getState();
  const r = s.restaurants.find((x) => x.id === restaurantId)!;
  if (r.status !== "ACTIVE" || !r.city) fail("Werben geht nur, wenn dein Restaurant online ist.");
  const t0 = new Date(`${start}T00:00:00`);
  const t1 = new Date(t0.getTime() + days * 864e5);
  const busy = s.sponsorships.filter((x) => x.city === r.city && x.status === "PAID" && x.restaurantId !== r.id && new Date(x.startsAt) < t1 && new Date(x.endsAt) > t0);
  if (busy.length >= 2) fail(`In ${r.city} sind in diesem Zeitraum schon alle Werbeplätze vergeben.`);
  const price = sponsorPrice(days);
  save((d) => {
    const id = uid();
    d.sponsorships.push({ id, restaurantId, city: r.city!, startsAt: t0.toISOString(), endsAt: t1.toISOString(), days, amountCents: price, status: "PAID", createdAt: new Date().toISOString() });
    d.payments.push(ledger({ kind: "SPONSORSHIP", restaurantId, amountCents: price, feeCents: price, netCents: 0, description: `Werbeplatz ${r.city}, ${days} ${days === 1 ? "Tag" : "Tage"}` }));
  });
  return { opened: false, message: "Werbeplatz gebucht (Vorschau, keine echte Zahlung)." };
}

// ---------- Konto löschen ----------

export async function deleteAccount() {
  const user = me();
  if (REMOTE) {
    await call("delete_account");
    await supabase!.auth.signOut().catch(() => undefined);
    return refreshRemote();
  }
  const s = getState();
  const owns = s.members.filter((m) => m.userId === user.id && m.role === "OWNER").map((m) => accountOf(s, m.restaurantId));
  if (owns.some((a) => ["trialing", "active", "past_due"].includes(a.planStatus) && !a.cancelAtPeriodEnd)) {
    fail("Bitte kündige zuerst das Abo deines Restaurants (Portal → Abrechnung → Abo verwalten).");
  }
  save((d) => {
    const mine = new Set(d.bookings.filter((b) => b.userId === user.id).map((b) => b.id));
    d.users = d.users.filter((u) => u.id !== user.id);
    d.bookings = d.bookings.filter((b) => b.userId !== user.id);
    d.reviews = d.reviews.filter((r) => !mine.has(r.bookingId));
    d.feedback = d.feedback.filter((f) => !mine.has(f.bookingId));
    d.events = d.events.filter((e) => e.userId !== user.id);
    d.favorites = d.favorites.filter((f) => f.userId !== user.id);
    d.members = d.members.filter((m) => m.userId !== user.id);
    d.cards = d.cards.filter((c) => c.userId !== user.id);
    // Rechnungen und Zahlungen bleiben für die Buchhaltung, ohne Personenbezug
    for (const b of d.bills) if (b.userId === user.id) Object.assign(b, { userId: undefined, bookingId: undefined });
    for (const p of d.payments) if (p.userId === user.id) Object.assign(p, { userId: undefined, bookingId: undefined });
    d.sessionUserId = null;
  });
}
