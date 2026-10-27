// Tests der Edge Functions gegen eine lokale Postgres-Datenbank (test/db/start.sh) und stripe-mock
// (prüft jede Stripe-Anfrage gegen die offizielle API-Beschreibung; Antworten sind Beispieldaten).
// Aufruf: bash test/functions/run.sh
import { assert, assertEquals, assertMatch } from "jsr:@std/assert@1";
import postgres from "npm:postgres@3.4.9";
import Stripe from "npm:stripe@23.0.0";

const DB = Deno.env.get("SUPABASE_DB_URL")!;
const sql = postgres(DB, { max: 1, onnotice: () => {} });

// Nachgebautes Supabase Auth: Token "tok-<uuid>" gehört zu Nutzer <uuid>
const users: Record<string, string> = {};
const auth = Deno.serve({ port: 54400, onListen: () => {} }, (req) => {
  const id = (req.headers.get("Authorization") ?? "").replace("Bearer tok-", "");
  return users[id] ? Response.json({ id, email: users[id] }) : new Response("no", { status: 401 });
});

const { handler: payments } = await import("../../supabase/functions/payments/index.ts");
const { handler: webhook } = await import("../../supabase/functions/stripe-webhook/index.ts");
const fulfill = await import("../../supabase/functions/_shared/fulfill.ts");

const GUEST = "00000000-0000-0000-0000-0000000000a1";
const OWNER = "00000000-0000-0000-0000-0000000000b1";
const STAFF = "00000000-0000-0000-0000-0000000000c1";

async function call(user: string | null, body: Record<string, unknown>) {
  const res = await payments(new Request("http://x/payments", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(user ? { Authorization: `Bearer tok-${user}` } : {}) },
    body: JSON.stringify(body),
  }));
  return { status: res.status, data: await res.json() };
}

let rid = "";
let spot = "";
let booking = "";

Deno.test("Aufbau: Nutzer, Restaurant, Angebot", async () => {
  for (const [id, email, meta] of [[GUEST, "gast@test.de", { name: "Gina Gast" }], [OWNER, "wirt@test.de", { name: "Willi", role: "OWNER" }], [STAFF, "service@test.de", { name: "Sam" }]] as const) {
    users[id] = email;
    await sql`insert into auth.users (id, email, raw_user_meta_data) values (${id}, ${email}, ${sql.json(meta)})`;
  }
  [{ id: rid }] = await sql`insert into public.restaurants (slug, name, city, street, description, status, email)
    values ('fn-test', 'Funktionslokal', 'Bremen', 'Weg 1', 'Gut', 'ACTIVE', 'lokal@test.de') returning id`;
  await sql`insert into public.members (user_id, restaurant_id, role) values (${OWNER}, ${rid}, 'OWNER'), (${STAFF}, ${rid}, 'STAFF')`;
  [{ id: spot }] = await sql`insert into public.spots (restaurant_id, starts_at, ends_at, seats, discount_percent, booking_cutoff_min)
    values (${rid}, now() + interval '20 minutes', now() + interval '2 hours', 8, 50, 0) returning id`;
});

Deno.test("ohne Anmeldung: 401, ohne Stripe-Schlüssel: verständliche Meldung", async () => {
  const r = await call(null, { action: "card_setup" });
  assertEquals(r.status, 401);
  const key = Deno.env.get("STRIPE_SECRET_KEY")!;
  Deno.env.delete("STRIPE_SECRET_KEY");
  const r2 = await call(GUEST, { action: "card_setup" });
  Deno.env.set("STRIPE_SECRET_KEY", key);
  assertEquals(r2.status, 503);
  assertMatch(r2.data.error, /noch nicht eingerichtet/);
});

Deno.test("Auszahlungen: nur Inhaber startet Onboarding", async () => {
  assertEquals((await call(STAFF, { action: "connect_onboarding", restaurantId: rid })).status, 403);
  const r = await call(OWNER, { action: "connect_onboarding", restaurantId: rid, app: true });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  assertMatch(r.data.url, /^https:\/\//);
  const [a] = await sql`select * from public.restaurant_accounts where restaurant_id = ${rid}`;
  assertMatch(a.stripe_account_id, /^acct_/);
  const st = await call(OWNER, { action: "connect_status", restaurantId: rid });
  assertEquals(st.status, 200, JSON.stringify(st.data));
  // Für die weiteren Tests: Konto freigeschaltet (wie nach account.updated)
  await sql`update public.restaurant_accounts set charges_enabled = true, payouts_enabled = true where restaurant_id = ${rid}`;
  assertEquals((await call(OWNER, { action: "connect_dashboard", restaurantId: rid })).status, 200);
});

Deno.test("Abo: nicht im Angebot, bestehende Abos werden weiter verbucht", async () => {
  assertEquals((await call(OWNER, { action: "subscribe", restaurantId: rid, plan: "GOLD" })).status, 400);
  const r = await call(OWNER, { action: "subscribe", restaurantId: rid, plan: "BASIC" });
  assertEquals(r.status, 400);
  assertMatch(r.data.error, /pro Buchung/);
  await sql`update public.restaurant_accounts set stripe_customer_id = 'cus_old' where restaurant_id = ${rid}`;
  const [a] = await sql`select * from public.restaurant_accounts where restaurant_id = ${rid}`;
  // Abo-Ereignis (z. B. aus einer späteren Flatrate)
  await fulfill.applySubscription({
    id: "sub_test1", status: "trialing", metadata: { restaurant_id: rid, plan: "BASIC" }, trial_end: Math.floor(Date.now() / 1000) + 90 * 86400,
    customer: a.stripe_customer_id, cancel_at_period_end: false, cancel_at: null, items: { data: [{ current_period_end: Math.floor(Date.now() / 1000) + 90 * 86400 }] },
  } as any);
  const [a2] = await sql`select * from public.restaurant_accounts where restaurant_id = ${rid}`;
  assertEquals([a2.plan, a2.plan_status, a2.trial_used], ["BASIC", "trialing", true]);
  // Bezahlte Rechnung
  const inv = { id: "in_test1", status: "paid", amount_paid: 5831, customer: a.stripe_customer_id, number: "F-0001", hosted_invoice_url: "https://inv", invoice_pdf: "https://pdf",
    parent: { subscription_details: { subscription: "sub_test1" } }, lines: { data: [{ period: { start: 1790000000, end: 1792600000 } }] } };
  await fulfill.applyInvoice(inv as any);
  await fulfill.applyInvoice(inv as any); // doppelt: keine zweite Buchung
  const rows = await sql`select * from public.payments where kind = 'SUBSCRIPTION'`;
  assertEquals(rows.length, 1);
  assertEquals(rows[0].amount_cents, 5831);
  assertEquals((await call(OWNER, { action: "billing_portal", restaurantId: rid })).status, 200);
});

Deno.test("Buchungsgebühr: Monatsrechnung per Cron, bezahlt ins Kassenbuch", async () => {
  // Vormonat: 3 eingecheckte Buchungen, 1 No-Show; Gratiszeit vorbei
  const [{ m }] = await sql`select to_char(date_trunc('month', (now() at time zone 'Europe/Berlin') - interval '1 month'), 'YYYY-MM-DD') as m`;
  const [{ id: old }] = await sql`insert into public.spots (restaurant_id, starts_at, ends_at, seats, discount_percent)
    values (${rid}, (${m}::date + time '18:00') at time zone 'Europe/Berlin', (${m}::date + time '19:00') at time zone 'Europe/Berlin', 20, 50) returning id`;
  for (const [code, status] of [["810001", "CHECKED_IN"], ["810002", "CHECKED_IN"], ["810003", "CHECKED_IN"], ["810004", "NO_SHOW"]]) {
    await sql`insert into public.bookings (spot_id, user_id, party_size, code, status) values (${old}, ${GUEST}, 2, ${code}, ${status})`;
  }
  await sql`update public.restaurant_accounts set fee_free_until = now() - interval '200 days' where restaurant_id = ${rid}`;
  const cron = (secret: string | null, body: Record<string, unknown> = {}) => payments(new Request("http://x/payments", {
    method: "POST", headers: { "Content-Type": "application/json", ...(secret ? { "x-firsty-cron": secret } : {}) },
    body: JSON.stringify({ action: "invoice_booking_fees", ...body }),
  }));
  assertEquals((await cron(null)).status, 403); // ohne Geheimnis nicht erlaubt (auch nicht angemeldet)
  Deno.env.set("FIRSTY_CRON_SECRET", "cron-test");
  assertEquals((await cron("falsch")).status, 403);
  const thisMonth = new Date().toISOString().slice(0, 8) + "01";
  assertEquals((await cron("cron-test", { month: thisMonth })).status, 400); // laufender Monat noch nicht abrechenbar
  const res = await cron("cron-test");
  const out = await res.json();
  assertEquals(res.status, 200, JSON.stringify(out));
  assertEquals([out.month, out.invoiced, out.failed], [m, 1, 0], JSON.stringify(out));
  const [row] = await sql`select * from public.booking_fee_invoices where restaurant_id = ${rid}`;
  assertEquals([row.bookings, row.net_cents, row.status], [3, 600, "OPEN"]);
  assertMatch(row.stripe_invoice_id, /^in_/);
  // zweiter Lauf: nichts doppelt
  assertEquals((await (await cron("cron-test")).json()).invoiced, 0);
  // Rechnung bezahlt → Kassenbuch
  const inv = { id: row.stripe_invoice_id, status: "paid", amount_paid: 714, number: "F-0002", hosted_invoice_url: "https://inv2", invoice_pdf: "https://pdf2",
    metadata: { kind: "booking_fees", restaurant_id: rid, month: m } };
  await fulfill.applyInvoice(inv as any);
  await fulfill.applyInvoice(inv as any);
  const fees = await sql`select * from public.payments where kind = 'BOOKING_FEE'`;
  assertEquals(fees.length, 1);
  assertEquals(fees[0].amount_cents, 714);
  assertMatch(fees[0].description, /3 Buchungen/);
  const [paid] = await sql`select status from public.booking_fee_invoices where restaurant_id = ${rid}`;
  assertEquals(paid.status, "PAID");
});

Deno.test("Karte hinterlegen und No-Show-Schutz", async () => {
  const r = await call(GUEST, { action: "card_setup", weiter: "/restaurant/?s=fn-test" });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  const [g] = await sql`select * from public.guest_payment_methods where user_id = ${GUEST}`;
  assertMatch(g.stripe_customer_id, /^cus_/);
  // Ergebnis des Checkouts (setup) übernehmen
  await fulfill.applyCheckoutSession({ status: "complete", metadata: { kind: "card_setup", user_id: GUEST }, setup_intent: "seti_123", customer: g.stripe_customer_id } as any);
  // stripe-mock liefert den SetupIntent immer als „requires_payment_method“: dann darf nichts gespeichert werden
  const [g2] = await sql`select * from public.guest_payment_methods where user_id = ${GUEST}`;
  assertEquals(g2.payment_method_id, null);
  await sql`update public.guest_payment_methods set payment_method_id = 'pm_card_visa', brand = 'visa', last4 = '4242' where user_id = ${GUEST}`;

  await sql`update public.spots set no_show_protection = true where id = ${spot}`;
  await sql.begin(async (tx) => {
    await tx`select set_config('request.jwt.claim.sub', ${GUEST}, true)`;
    [{ id: booking }] = await tx`select id from public.book_spot(${spot}, 2)`;
  });
  const [b] = await sql`select * from public.bookings where id = ${booking}`;
  assertEquals([b.guaranteed, b.no_show_fee_cents], [true, 2000]);
  // Karte entfernen geht nicht bei offener Garantie
  assertEquals((await call(GUEST, { action: "card_remove" })).status, 400);
});

Deno.test("No-Show: Gebühr belasten, bei späterem Check-in erstatten", async () => {
  assertEquals((await call(OWNER, { action: "charge_no_show", bookingId: booking })).status, 400); // noch nicht gemeldet
  await sql`update public.bookings set status = 'NO_SHOW' where id = ${booking}`;
  assertEquals((await call(GUEST, { action: "charge_no_show", bookingId: booking })).status, 403);
  const r = await call(STAFF, { action: "charge_no_show", bookingId: booking });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  const [p] = await sql`select * from public.payments where kind = 'NO_SHOW' and booking_id = ${booking}`;
  assertEquals([p.amount_cents, p.fee_cents, p.net_cents], [2000, 600, 1400]);
  // zweiter Aufruf bucht nicht doppelt
  const again = await call(OWNER, { action: "charge_no_show", bookingId: booking });
  assertEquals(again.data.already ?? false, p.status !== "FAILED");
  await sql`update public.payments set status = 'SUCCEEDED' where id = ${p.id}`; // stripe-mock liefert festen Status
  assertEquals((await call(OWNER, { action: "refund_no_show", bookingId: booking })).status, 400); // noch NO_SHOW
  await sql`update public.bookings set status = 'CHECKED_IN', checked_in_at = now() where id = ${booking}`;
  const rf = await call(OWNER, { action: "refund_no_show", bookingId: booking });
  assertEquals(rf.status, 200, JSON.stringify(rf.data));
  assertEquals(rf.data.refunded, true);
});

Deno.test("Rechnung: in der App bezahlen, Zahlungsgebühr und Trinkgeld", async () => {
  // Restaurant erstellt Rechnung über 46,00 € (−50 % → 23,00 €)
  let bill = "";
  await sql.begin(async (tx) => {
    await tx`select set_config('request.jwt.claim.sub', ${STAFF}, true)`;
    [{ id: bill }] = await tx`select id from public.create_bill(${booking}, 4600, null)`;
  });
  assertEquals((await call(OWNER, { action: "pay_bill", billId: bill, tipPercent: 10 })).status, 404); // nicht seine Rechnung
  assertEquals((await call(GUEST, { action: "pay_bill", billId: bill, tipPercent: 7 })).status, 400);
  const r = await call(GUEST, { action: "pay_bill", billId: bill, tipPercent: 10, app: true });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  const [x] = await sql`select * from public.bills where id = ${bill}`;
  assertEquals([x.amount_cents, x.tip_cents, x.fee_cents], [2300, 230, 46]); // 2 % Zahlungsgebühr
  // Ergebnis übernehmen (Beträge kommen aus Stripe; stripe-mock liefert Beispielbeträge)
  await fulfill.applyCheckoutSession({ status: "complete", payment_status: "paid", metadata: { kind: "bill", bill_id: bill, tip_cents: "230" }, payment_intent: "pi_123" } as any);
  await fulfill.applyCheckoutSession({ status: "complete", payment_status: "paid", metadata: { kind: "bill", bill_id: bill, tip_cents: "230" }, payment_intent: "pi_123" } as any);
  const [y] = await sql`select * from public.bills where id = ${bill}`;
  assertEquals(y.status, "PAID");
  const rows = await sql`select * from public.payments where kind = 'BILL' and bill_id = ${bill}`;
  assertEquals(rows.length, 1);
  assertEquals(rows[0].net_cents, rows[0].amount_cents - rows[0].fee_cents);
  assertEquals((await call(GUEST, { action: "pay_bill", billId: bill, tipPercent: 0 })).status, 400); // schon bezahlt
  // Erstattung aus dem Dashboard
  await fulfill.applyRefundedCharge({ id: "ch_1", payment_intent: rows[0].stripe_id, amount: rows[0].amount_cents, amount_refunded: rows[0].amount_cents } as any);
  const [z] = await sql`select status from public.bills where id = ${bill}`;
  assertEquals(z.status, "REFUNDED");
  const [ref] = await sql`select * from public.payments where kind = 'REFUND' and bill_id = ${bill}`;
  assertEquals(ref.amount_cents, -rows[0].amount_cents);
});

Deno.test("Werbeplatz buchen", async () => {
  const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
  assertEquals((await call(OWNER, { action: "sponsor", restaurantId: rid, days: 3, start: today })).status, 400);
  assertEquals((await call(GUEST, { action: "sponsor", restaurantId: rid, days: 7, start: today })).status, 403);
  const r = await call(OWNER, { action: "sponsor", restaurantId: rid, days: 7, start: today });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  const [sp] = await sql`select * from public.sponsorships where restaurant_id = ${rid}`;
  assertEquals([sp.status, sp.amount_cents, sp.days], ["PENDING", 4165, 7]);
  await fulfill.applyCheckoutSession({ status: "complete", payment_status: "paid", amount_total: 4165, metadata: { kind: "sponsorship", sponsorship_id: sp.id }, payment_intent: "pi_sp1", invoice: "in_123" } as any);
  const [flag] = await sql`select * from public.payment_flags() where restaurant_id = ${rid}`;
  assertEquals([flag.sponsored, flag.accepts_app_payment], [true, true]);
});

Deno.test("Webhook: Signatur, doppelte Ereignisse, Kontostand", async () => {
  const secret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
  const [a] = await sql`select stripe_account_id from public.restaurant_accounts where restaurant_id = ${rid}`;
  const payload = JSON.stringify({ id: "evt_1", type: "account.updated", data: { object: { id: a.stripe_account_id, charges_enabled: false, payouts_enabled: false, details_submitted: true } } });
  const s = new Stripe("sk_test_123");
  const header = await s.webhooks.generateTestHeaderStringAsync({ payload, secret });
  const send = (h: string) => webhook(new Request("http://x/stripe-webhook", { method: "POST", headers: { "stripe-signature": h }, body: payload }));
  assertEquals((await send("t=1,v1=falsch")).status, 400);
  assertEquals((await send(header)).status, 200);
  const [a2] = await sql`select charges_enabled, details_submitted from public.restaurant_accounts where restaurant_id = ${rid}`;
  assertEquals([a2.charges_enabled, a2.details_submitted], [false, true]);
  assertEquals(await (await send(header)).text(), "schon verarbeitet");
  // Abrechnung ohne Auszahlungen: Zahlung in der App wird abgelehnt
});

Deno.test("Konto löschen: Inhaber mit Abo blockiert, Gast gelöscht", async () => {
  const blocked = await call(OWNER, { action: "delete_account" });
  assertEquals(blocked.status, 400);
  assertMatch(blocked.data.error, /Abo/);
  const r = await call(GUEST, { action: "delete_account" });
  assertEquals(r.status, 200, JSON.stringify(r.data));
  assertEquals((await sql`select 1 from auth.users where id = ${GUEST}`).length, 0);
  assertEquals((await sql`select 1 from public.profiles where id = ${GUEST}`).length, 0);
  assert((await sql`select 1 from public.payments where kind = 'BILL'`).length === 1, "Kassenbuch bleibt");
});

Deno.test("Aufräumen", async () => {
  await sql.end();
  await auth.shutdown();
  const { db } = await import("../../supabase/functions/_shared/db.ts");
  await db().end();
});
