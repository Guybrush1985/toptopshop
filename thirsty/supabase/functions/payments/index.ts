// Edge Function „payments“: alle Zahlungsaktionen der App. Aufruf: supabase.functions.invoke("payments", { body: { action, … } })
// Antwort: { url } für Stripe-Seiten (Checkout, Onboarding, Portal) oder ein Ergebnisobjekt; Fehler als { error } mit Meldung auf Deutsch.
//
// Geldflüsse (Stripe Connect, Express-Konten der Restaurants):
// - Rechnung in der App: Zahlung des Gastes geht direkt an das Restaurant (on_behalf_of + transfer_data),
//   Firsty behält die Provision als application_fee. Trinkgeld geht vollständig an das Restaurant.
// - No-Show-Gebühr: hinterlegte Karte wird ohne Anwesenheit belastet, 70 % Restaurant, 30 % Firsty.
// - Abo und Werbung: Restaurant zahlt an Firsty (Stripe Billing bzw. Checkout mit Rechnung, zzgl. 19 % USt.).
import { db } from "../_shared/db.ts";
import { requireUser, type AuthUser } from "../_shared/auth.ts";
import { cors, json, SITE_URL, UserError } from "../_shared/env.ts";
import { portalConfiguration, stripe, stripeMessage, vatRate } from "../_shared/stripe.ts";
import { applyAccount, applyCheckoutSession, applyPaymentIntent, applyRefundedCharge } from "../_shared/fulfill.ts";
import {
  billAmounts, commissionOf, noShowPlatformShare, PLANS, SPONSOR_DAY_OPTIONS, SPONSOR_NET_CENTS_PER_DAY, sponsorPrice, TIP_OPTIONS,
  tipOf, TRIAL_DAYS, type PlanKey,
} from "../_shared/pricing.ts";

type Body = Record<string, unknown> & { action?: string; app?: boolean };
const euro = (c: number) => (c / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const str = (v: unknown) => (typeof v === "string" ? v : "");
const isUuid = (v: unknown) => typeof v === "string" && /^[0-9a-f-]{36}$/i.test(v);

/** Rücksprung nach Stripe: Website-Seite /zahlung/, die in der App wieder die App öffnet. */
function back(body: Body, params: Record<string, string>, withSession = true) {
  const q = new URLSearchParams({ ...params, ...(body.app ? { app: "1" } : {}) }).toString();
  return `${SITE_URL()}/zahlung/?${q}${withSession ? "&session={CHECKOUT_SESSION_ID}" : ""}`;
}

async function memberRole(userId: string, restaurantId: unknown) {
  if (!isUuid(restaurantId)) throw new UserError("Restaurant fehlt.");
  const [m] = await db()`select role from public.members where user_id = ${userId} and restaurant_id = ${restaurantId as string}`;
  return (m?.role as string | undefined) ?? null;
}

async function requireRole(user: AuthUser, restaurantId: unknown, roles: string[]) {
  const role = await memberRole(user.id, restaurantId);
  if (!role || !roles.includes(role)) throw new UserError("Dafür fehlt dir die Berechtigung in diesem Restaurant.", 403);
  const [r] = await db()`select r.*, b.legal_name, b.vat_id from public.restaurants r
    left join public.restaurant_billing b on b.restaurant_id = r.id where r.id = ${restaurantId as string}`;
  await db()`insert into public.restaurant_accounts (restaurant_id) values (${r.id}) on conflict (restaurant_id) do nothing`;
  const [a] = await db()`select * from public.restaurant_accounts where restaurant_id = ${r.id}`;
  return { r, a };
}

// ---------- Restaurant: Auszahlungen (Stripe Connect) ----------

async function connectOnboarding(user: AuthUser, body: Body) {
  const { r, a } = await requireRole(user, body.restaurantId, ["OWNER"]);
  const s = stripe();
  let acct = a.stripe_account_id as string | null;
  if (!acct) {
    const created = await s.accounts.create({
      type: "express",
      country: "DE",
      email: r.email ?? user.email,
      business_type: "company",
      business_profile: {
        name: r.legal_name ?? r.name,
        mcc: "5812", // Restaurants
        product_description: "Restaurant (Early-Bird-Plätze über Firsty)",
        url: r.website ?? `${SITE_URL()}/restaurant/?s=${r.slug}`,
      },
      capabilities: { card_payments: { requested: true }, transfers: { requested: true } },
      settings: { payouts: { schedule: { interval: "weekly", weekly_anchor: "monday" } } },
      metadata: { restaurant_id: r.id },
    });
    acct = created.id;
    await db()`update public.restaurant_accounts set stripe_account_id = ${acct}, updated_at = now() where restaurant_id = ${r.id}`;
  }
  const link = await s.accountLinks.create({
    account: acct,
    type: "account_onboarding",
    refresh_url: back(body, { art: "connect", status: "neu", r: r.id }, false),
    return_url: back(body, { art: "connect", status: "ok", r: r.id }, false),
  });
  return { url: link.url };
}

async function connectStatus(user: AuthUser, body: Body) {
  const { a } = await requireRole(user, body.restaurantId, ["OWNER", "MANAGER"]);
  if (!a.stripe_account_id) return { connected: false };
  const acct = await stripe().accounts.retrieve(a.stripe_account_id);
  await applyAccount(acct);
  return { connected: true, chargesEnabled: !!acct.charges_enabled, payoutsEnabled: !!acct.payouts_enabled };
}

async function connectDashboard(user: AuthUser, body: Body) {
  const { a } = await requireRole(user, body.restaurantId, ["OWNER"]);
  if (!a.stripe_account_id) throw new UserError("Richte zuerst die Auszahlungen ein.");
  const link = await stripe().accounts.createLoginLink(a.stripe_account_id);
  return { url: link.url };
}

// ---------- Restaurant: Abo ----------

async function restaurantCustomer(r: Record<string, any>, a: Record<string, any>, email: string) {
  if (a.stripe_customer_id) return a.stripe_customer_id as string;
  const s = stripe();
  const params = {
    name: r.legal_name ?? r.name,
    email: r.email ?? email,
    address: r.street ? { line1: r.street, postal_code: r.postal_code ?? undefined, city: r.city ?? undefined, country: "DE" } : undefined,
    metadata: { restaurant_id: r.id },
    preferred_locales: ["de"],
  };
  let c;
  try {
    c = await s.customers.create(r.vat_id ? { ...params, tax_id_data: [{ type: "eu_vat", value: String(r.vat_id).replace(/\s/g, "") }] } : params);
  } catch {
    c = await s.customers.create(params); // ungültige USt-IdNr.: ohne anlegen, im Checkout korrigierbar
  }
  await db()`update public.restaurant_accounts set stripe_customer_id = ${c.id}, updated_at = now() where restaurant_id = ${r.id}`;
  return c.id;
}

async function subscribe(user: AuthUser, body: Body) {
  const plan = str(body.plan) as PlanKey;
  if (!PLANS[plan]) throw new UserError("Bitte wähle Basic oder Pro.");
  const { r, a } = await requireRole(user, body.restaurantId, ["OWNER"]);
  if (["trialing", "active", "past_due", "unpaid"].includes(a.plan_status)) {
    throw new UserError("Dein Restaurant hat schon ein Abo. Wechseln oder kündigen kannst du unter „Abo verwalten“.");
  }
  const customer = await restaurantCustomer(r, a, user.email);
  const session = await stripe().checkout.sessions.create({
    mode: "subscription",
    customer,
    locale: "de",
    line_items: [{
      quantity: 1,
      tax_rates: [await vatRate()],
      price_data: {
        currency: "eur",
        unit_amount: PLANS[plan].netCents,
        recurring: { interval: "month" },
        product_data: { name: `Firsty ${PLANS[plan].name}`, description: PLANS[plan].features.join(" · ") },
      },
    }],
    subscription_data: {
      ...(a.trial_used ? {} : { trial_period_days: TRIAL_DAYS }),
      description: `Firsty ${PLANS[plan].name} für ${r.name}`,
      metadata: { restaurant_id: r.id, plan },
    },
    payment_method_collection: "always",
    billing_address_collection: "required",
    customer_update: { address: "auto", name: "auto" },
    tax_id_collection: { enabled: true },
    metadata: { kind: "subscription", restaurant_id: r.id, plan },
    success_url: back(body, { art: "abo", status: "ok", r: r.id }),
    cancel_url: back(body, { art: "abo", status: "abbruch", r: r.id }, false),
  });
  return { url: session.url, sessionId: session.id };
}

async function billingPortal(user: AuthUser, body: Body) {
  const { a, r } = await requireRole(user, body.restaurantId, ["OWNER"]);
  if (!a.stripe_customer_id) throw new UserError("Dein Restaurant hat noch kein Abo.");
  const session = await stripe().billingPortal.sessions.create({
    customer: a.stripe_customer_id,
    configuration: await portalConfiguration(),
    locale: "de",
    return_url: back(body, { art: "portal", status: "ok", r: r.id }, false),
  });
  return { url: session.url };
}

// ---------- Restaurant: Werbung ----------

async function sponsor(user: AuthUser, body: Body) {
  const days = Number(body.days);
  if (!(SPONSOR_DAY_OPTIONS as readonly number[]).includes(days)) throw new UserError("Bitte wähle 1, 7 oder 30 Tage.");
  const start = str(body.start);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start)) throw new UserError("Bitte wähle den Starttag.");
  const { r, a } = await requireRole(user, body.restaurantId, ["OWNER", "MANAGER"]);
  const price = sponsorPrice(days);
  const sql = db();
  let sp;
  try {
    [sp] = await sql`select * from public.prepare_sponsorship(${user.id}, ${r.id}, ${days}, ${start}::date, ${price})`;
  } catch (e) {
    throw new UserError((e as Error).message);
  }
  const customer = await restaurantCustomer(r, a, user.email);
  const session = await stripe().checkout.sessions.create({
    mode: "payment",
    customer,
    locale: "de",
    line_items: [{
      quantity: days,
      tax_rates: [await vatRate()],
      price_data: {
        currency: "eur",
        unit_amount: SPONSOR_NET_CENTS_PER_DAY,
        product_data: {
          name: `Werbeplatz ${r.city} (Tag)`,
          description: `${r.name}: „Anzeige“ oben in Liste und Karte, ${new Date(sp.starts_at).toLocaleDateString("de-DE", { timeZone: "Europe/Berlin" })}–${new Date(new Date(sp.ends_at).getTime() - 1).toLocaleDateString("de-DE", { timeZone: "Europe/Berlin" })}`,
        },
      },
    }],
    invoice_creation: { enabled: true, invoice_data: { description: `Firsty Werbeplatz für ${r.name}`, metadata: { restaurant_id: r.id } } },
    billing_address_collection: "required",
    customer_update: { address: "auto", name: "auto" },
    tax_id_collection: { enabled: true },
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    metadata: { kind: "sponsorship", sponsorship_id: sp.id, restaurant_id: r.id },
    success_url: back(body, { art: "werbung", status: "ok", r: r.id }),
    cancel_url: back(body, { art: "werbung", status: "abbruch", r: r.id }, false),
  });
  await sql`update public.sponsorships set checkout_session_id = ${session.id} where id = ${sp.id}`;
  return { url: session.url, sessionId: session.id };
}

// ---------- Gast: Karte hinterlegen ----------

async function guestCustomer(user: AuthUser) {
  const sql = db();
  const [row] = await sql`select * from public.guest_payment_methods where user_id = ${user.id}`;
  if (row) return row.stripe_customer_id as string;
  const [p] = await sql`select name from public.profiles where id = ${user.id}`;
  const c = await stripe().customers.create({ email: user.email, name: p?.name, metadata: { user_id: user.id }, preferred_locales: ["de"] });
  await sql`insert into public.guest_payment_methods (user_id, stripe_customer_id) values (${user.id}, ${c.id})
    on conflict (user_id) do nothing`;
  const [again] = await sql`select stripe_customer_id from public.guest_payment_methods where user_id = ${user.id}`;
  return again.stripe_customer_id as string;
}

async function cardSetup(user: AuthUser, body: Body) {
  const customer = await guestCustomer(user);
  const session = await stripe().checkout.sessions.create({
    mode: "setup",
    customer,
    currency: "eur",
    locale: "de",
    allowed_payment_method_types: ["card"],
    setup_intent_data: { description: "Firsty: Karte als Garantie für Buchungen", metadata: { user_id: user.id } },
    metadata: { kind: "card_setup", user_id: user.id },
    success_url: back(body, { art: "karte", status: "ok", weiter: str(body.weiter) }),
    cancel_url: back(body, { art: "karte", status: "abbruch", weiter: str(body.weiter) }, false),
  });
  return { url: session.url, sessionId: session.id };
}

async function cardRemove(user: AuthUser) {
  const sql = db();
  const [open] = await sql`select 1 from public.bookings b join public.spots s on s.id = b.spot_id
    where b.user_id = ${user.id} and b.status = 'BOOKED' and b.guaranteed and s.ends_at > now() limit 1`;
  if (open) throw new UserError("Deine Karte ist für eine offene Buchung als Garantie hinterlegt. Entfernen geht nach dem Besuch oder nach dem Stornieren.");
  const [row] = await sql`select * from public.guest_payment_methods where user_id = ${user.id}`;
  if (row?.payment_method_id) await stripe().paymentMethods.detach(row.payment_method_id).catch(() => {});
  await sql`update public.guest_payment_methods set payment_method_id = null, brand = null, last4 = null, exp_month = null, exp_year = null,
    updated_at = now() where user_id = ${user.id}`;
  return { ok: true };
}

// ---------- Gast: Rechnung bezahlen ----------

async function payBill(user: AuthUser, body: Body) {
  if (!isUuid(body.billId)) throw new UserError("Rechnung nicht gefunden.");
  const tipPercent = Number(body.tipPercent ?? 0);
  if (!(TIP_OPTIONS as readonly number[]).includes(tipPercent)) throw new UserError("Ungültiges Trinkgeld.");
  const sql = db();
  const [bill] = await sql`select b.*, r.name as restaurant_name, a.stripe_account_id, a.charges_enabled
    from public.bills b join public.restaurants r on r.id = b.restaurant_id
    left join public.restaurant_accounts a on a.restaurant_id = b.restaurant_id where b.id = ${body.billId as string}`;
  if (!bill || bill.user_id !== user.id) throw new UserError("Rechnung nicht gefunden.", 404);
  if (bill.status !== "OPEN") throw new UserError("Diese Rechnung ist schon abgeschlossen.");
  if (!bill.charges_enabled || !bill.stripe_account_id) {
    throw new UserError("Dieses Restaurant nimmt noch keine Zahlung in der App an. Bitte zahl wie gewohnt vor Ort.");
  }
  const { amountCents } = billAmounts(bill.subtotal_cents, bill.discount_percent);
  const tip = tipOf(amountCents, tipPercent);
  const fee = commissionOf(amountCents);
  const [g] = await sql`select stripe_customer_id from public.guest_payment_methods where user_id = ${user.id}`;
  const description = `Rechnung ${bill.restaurant_name}`;
  const items = [{
    quantity: 1,
    price_data: {
      currency: "eur",
      unit_amount: amountCents,
      product_data: {
        name: description,
        description: bill.discount_percent
          ? `Summe ${euro(bill.subtotal_cents)} abzüglich ${bill.discount_percent} % Firsty-Rabatt (${euro(bill.discount_cents)})`
          : `Summe laut Kasse ${euro(bill.subtotal_cents)}`,
      },
    },
  }];
  if (tip) items.push({ quantity: 1, price_data: { currency: "eur", unit_amount: tip, product_data: { name: "Trinkgeld", description: `${tipPercent} %, geht vollständig an das Team` } } });
  const session = await stripe().checkout.sessions.create({
    mode: "payment",
    locale: "de",
    ...(g ? { customer: g.stripe_customer_id } : { customer_email: user.email }),
    line_items: items,
    payment_intent_data: {
      application_fee_amount: fee,
      on_behalf_of: bill.stripe_account_id,
      transfer_data: { destination: bill.stripe_account_id },
      description,
      receipt_email: user.email || undefined,
      metadata: { kind: "bill", bill_id: bill.id, booking_id: bill.booking_id ?? "" },
    },
    expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    metadata: { kind: "bill", bill_id: bill.id, tip_cents: String(tip) },
    success_url: back(body, { art: "rechnung", status: "ok", b: bill.booking_id ?? "" }),
    cancel_url: back(body, { art: "rechnung", status: "abbruch", b: bill.booking_id ?? "" }, false),
  });
  await sql`update public.bills set checkout_session_id = ${session.id}, tip_cents = ${tip}, fee_cents = ${fee} where id = ${bill.id} and status = 'OPEN'`;
  return { url: session.url, sessionId: session.id };
}

// ---------- Restaurant: No-Show-Gebühr ----------

async function chargeNoShow(user: AuthUser, body: Body) {
  if (!isUuid(body.bookingId)) throw new UserError("Buchung nicht gefunden.");
  const sql = db();
  const [b] = await sql`select b.*, s.restaurant_id, s.starts_at, r.name as restaurant_name, a.stripe_account_id, a.charges_enabled,
      g.stripe_customer_id, g.payment_method_id, p.email
    from public.bookings b join public.spots s on s.id = b.spot_id join public.restaurants r on r.id = s.restaurant_id
    left join public.restaurant_accounts a on a.restaurant_id = s.restaurant_id
    left join public.guest_payment_methods g on g.user_id = b.user_id
    left join public.profiles p on p.id = b.user_id
    where b.id = ${body.bookingId as string}`;
  if (!b || !(await memberRole(user.id, b.restaurant_id))) throw new UserError("Dafür fehlt dir die Berechtigung in diesem Restaurant.", 403);
  if (b.status !== "NO_SHOW") throw new UserError("Diese Buchung ist nicht als „nicht erschienen“ gemeldet.");
  if (!b.guaranteed || !b.no_show_fee_cents) return { charged: false, reason: "Für diese Buchung war keine Karte hinterlegt." };
  if (!b.charges_enabled || !b.stripe_account_id) return { charged: false, reason: "Auszahlungen deines Restaurants sind noch nicht eingerichtet." };
  if (!b.payment_method_id) return { charged: false, reason: "Der Gast hat keine Karte mehr hinterlegt." };
  const [done] = await sql`select status from public.payments where booking_id = ${b.id} and kind = 'NO_SHOW' and status in ('SUCCEEDED', 'PENDING')`;
  if (done) return { charged: true, status: done.status, already: true };

  const fee = Number(b.no_show_fee_cents);
  const description = `No-Show-Gebühr ${b.restaurant_name}, ${new Date(b.starts_at).toLocaleDateString("de-DE", { timeZone: "Europe/Berlin" })}`;
  let status = "FAILED";
  let piId = `noshow-failed:${b.id}:${Date.now()}`;
  let reason: string | undefined;
  try {
    const pi = await stripe().paymentIntents.create({
      amount: fee,
      currency: "eur",
      customer: b.stripe_customer_id,
      payment_method: b.payment_method_id,
      off_session: true,
      confirm: true,
      application_fee_amount: noShowPlatformShare(fee),
      on_behalf_of: b.stripe_account_id,
      transfer_data: { destination: b.stripe_account_id },
      description,
      receipt_email: b.email || undefined,
      metadata: { kind: "no_show", booking_id: b.id },
    }, { idempotencyKey: `noshow-${b.id}` });
    piId = pi.id;
    status = pi.status === "succeeded" ? "SUCCEEDED" : pi.status === "processing" ? "PENDING" : "FAILED";
  } catch (e) {
    reason = stripeMessage(e);
    const pi = (e as { raw?: { payment_intent?: { id: string } } }).raw?.payment_intent;
    if (pi?.id) piId = pi.id;
  }
  await sql`insert into public.payments (kind, restaurant_id, user_id, booking_id, amount_cents, fee_cents, net_cents, status, description, stripe_id)
    values ('NO_SHOW', ${b.restaurant_id}, ${b.user_id}, ${b.id}, ${fee}, ${noShowPlatformShare(fee)}, ${fee - noShowPlatformShare(fee)},
      ${status}, ${description}, ${piId})
    on conflict (stripe_id) do update set status = excluded.status`;
  return { charged: status !== "FAILED", status, reason };
}

/** Gast kam doch noch (Check-in nach No-Show-Meldung): Gebühr erstatten. */
async function refundNoShow(user: AuthUser, body: Body) {
  if (!isUuid(body.bookingId)) throw new UserError("Buchung nicht gefunden.");
  const sql = db();
  const [b] = await sql`select b.status, s.restaurant_id from public.bookings b join public.spots s on s.id = b.spot_id where b.id = ${body.bookingId as string}`;
  if (!b || !(await memberRole(user.id, b.restaurant_id))) throw new UserError("Dafür fehlt dir die Berechtigung in diesem Restaurant.", 403);
  if (b.status === "NO_SHOW") throw new UserError("Die Buchung ist noch als „nicht erschienen“ gemeldet.");
  const [p] = await sql`select * from public.payments where booking_id = ${body.bookingId as string} and kind = 'NO_SHOW' and status = 'SUCCEEDED'`;
  if (!p) return { refunded: false };
  const s = stripe();
  await s.refunds.create({ payment_intent: p.stripe_id, refund_application_fee: true, reverse_transfer: true, reason: "requested_by_customer" },
    { idempotencyKey: `noshow-refund-${p.id}` });
  const pi = await s.paymentIntents.retrieve(p.stripe_id, { expand: ["latest_charge"] });
  if (pi.latest_charge && typeof pi.latest_charge !== "string") await applyRefundedCharge(pi.latest_charge);
  return { refunded: true };
}

// ---------- Konto löschen ----------

async function deleteAccount(user: AuthUser) {
  const sql = db();
  const [{ blocker }] = await sql`select public.account_deletion_blocker(${user.id}) as blocker`;
  if (blocker) throw new UserError(blocker);
  const [g] = await sql`select stripe_customer_id from public.guest_payment_methods where user_id = ${user.id}`;
  if (g?.stripe_customer_id && Deno.env.get("STRIPE_SECRET_KEY")) await stripe().customers.del(g.stripe_customer_id).catch(() => {});
  // Löscht Profil, Buchungen, Bewertungen, Favoriten und Mitgliedschaften. Rechnungen und Zahlungen bleiben
  // für die Buchhaltung (10 Jahre, § 147 AO) ohne Personenbezug erhalten.
  await sql`delete from auth.users where id = ${user.id}`;
  return { deleted: true };
}

// ---------- Rückkehr aus dem Checkout ----------

/** Übernimmt das Ergebnis eines Checkouts sofort (falls der Webhook noch nicht da war). Idempotent und ohne Anmeldung nutzbar. */
async function syncCheckout(body: Body) {
  const id = str(body.sessionId);
  if (!/^cs_[A-Za-z0-9_]+$/.test(id)) throw new UserError("Unbekannter Bezahlvorgang.");
  const session = await stripe().checkout.sessions.retrieve(id);
  await applyCheckoutSession(session);
  return { status: session.status, paid: session.payment_status === "paid" || session.payment_status === "no_payment_required" };
}

// ---------- Verteiler ----------

const ACTIONS: Record<string, (u: AuthUser, b: Body) => Promise<unknown>> = {
  connect_onboarding: connectOnboarding,
  connect_status: connectStatus,
  connect_dashboard: connectDashboard,
  subscribe,
  billing_portal: billingPortal,
  sponsor,
  card_setup: cardSetup,
  card_remove: (u) => cardRemove(u),
  pay_bill: payBill,
  charge_no_show: chargeNoShow,
  refund_no_show: refundNoShow,
  delete_account: (u) => deleteAccount(u),
};

export async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST." }, 405);
  try {
    const body = (await req.json().catch(() => ({}))) as Body;
    const action = str(body.action);
    if (action === "sync_checkout") return json(await syncCheckout(body));
    if (action === "sync_payment_intent") {
      // Nur für Tests und Fehlersuche: Stand einer No-Show-Zahlung nachladen
      const pi = await stripe().paymentIntents.retrieve(str(body.id));
      await applyPaymentIntent(pi);
      return json({ status: pi.status });
    }
    const fn = ACTIONS[action];
    if (!fn) return json({ error: "Unbekannte Aktion." }, 400);
    const user = await requireUser(req);
    return json(await fn(user, body));
  } catch (e) {
    if (e instanceof UserError) return json({ error: e.message }, e.status);
    console.error(e);
    const msg = (e as { type?: string })?.type?.startsWith("Stripe") ? `Stripe: ${stripeMessage(e)}` : "Interner Fehler. Bitte versuche es noch einmal.";
    return json({ error: msg }, 500);
  }
}

if (!Deno.env.get("FIRSTY_TEST")) Deno.serve(handler);
