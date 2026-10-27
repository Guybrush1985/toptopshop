// Stripe-Ergebnisse in die Datenbank übernehmen. Wird vom Webhook und nach der Rückkehr aus dem Checkout
// (Aktion sync_checkout) aufgerufen. Alles ist idempotent: doppelte Aufrufe ändern nichts.
import type { Stripe as StripeT } from "npm:stripe@23.0.0";
import { db } from "./db.ts";
import { stripe } from "./stripe.ts";

type Session = StripeT.Checkout.Session;
const idOf = (x: string | { id: string } | null | undefined) => (x == null ? null : typeof x === "string" ? x : x.id);
const ts = (sec?: number | null) => (sec ? new Date(sec * 1000) : null);

export async function applyCheckoutSession(session: Session) {
  if (session.status !== "complete") return;
  const kind = session.metadata?.kind;
  if (kind === "bill") return applyBillSession(session);
  if (kind === "sponsorship") return applySponsorshipSession(session);
  if (kind === "card_setup") return applyCardSetup(session);
  if (kind === "subscription") {
    const subId = idOf(session.subscription);
    if (subId) await applySubscription(await stripe().subscriptions.retrieve(subId));
  }
}

async function applyBillSession(session: Session) {
  if (session.payment_status !== "paid") return;
  const sql = db();
  const billId = session.metadata!.bill_id;
  const pi = await stripe().paymentIntents.retrieve(idOf(session.payment_intent)!, { expand: ["latest_charge"] });
  const receipt = (pi.latest_charge as StripeT.Charge | null)?.receipt_url ?? null;
  await sql.begin(async (tx) => {
    const [bill] = await tx`select * from public.bills where id = ${billId} for update`;
    if (!bill) return;
    // Beträge aus Stripe übernehmen (maßgeblich ist, was tatsächlich bezahlt wurde)
    const fee = Number(pi.application_fee_amount ?? bill.fee_cents);
    const tip = Number(session.metadata?.tip_cents ?? bill.tip_cents);
    await tx`update public.bills set status = 'PAID', paid_at = now(), payment_intent_id = ${pi.id}, receipt_url = ${receipt},
      tip_cents = ${tip}, fee_cents = ${fee} where id = ${billId} and status in ('OPEN', 'CANCELLED')`;
    await tx`insert into public.payments (kind, restaurant_id, user_id, booking_id, bill_id, amount_cents, fee_cents, net_cents, tip_cents,
        status, description, stripe_id, receipt_url)
      values ('BILL', ${bill.restaurant_id}, ${bill.user_id}, ${bill.booking_id}, ${billId}, ${pi.amount}, ${fee}, ${pi.amount - fee}, ${tip},
        'SUCCEEDED', ${pi.description ?? "Rechnung"}, ${pi.id}, ${receipt})
      on conflict (stripe_id) do nothing`;
  });
}

async function applySponsorshipSession(session: Session) {
  if (session.payment_status !== "paid") return;
  const sql = db();
  const id = session.metadata!.sponsorship_id;
  let invoiceUrl: string | null = null;
  let invoicePdf: string | null = null;
  const invoiceId = idOf(session.invoice);
  if (invoiceId) {
    const inv = await stripe().invoices.retrieve(invoiceId);
    invoiceUrl = inv.hosted_invoice_url ?? null;
    invoicePdf = inv.invoice_pdf ?? null;
  }
  const [sp] = await sql`update public.sponsorships set status = 'PAID' where id = ${id} returning *`;
  if (!sp) return;
  await sql`insert into public.payments (kind, restaurant_id, sponsorship_id, amount_cents, fee_cents, net_cents, status, description,
      stripe_id, invoice_url, invoice_pdf)
    values ('SPONSORSHIP', ${sp.restaurant_id}, ${id}, ${session.amount_total ?? sp.amount_cents}, ${session.amount_total ?? sp.amount_cents}, 0,
      'SUCCEEDED', ${`Werbeplatz ${sp.city}, ${sp.days} ${sp.days === 1 ? "Tag" : "Tage"}`}, ${idOf(session.payment_intent) ?? session.id},
      ${invoiceUrl}, ${invoicePdf})
    on conflict (stripe_id) do nothing`;
}

async function applyCardSetup(session: Session) {
  const s = stripe();
  const userId = session.metadata!.user_id;
  const si = await s.setupIntents.retrieve(idOf(session.setup_intent)!, { expand: ["payment_method"] });
  if (si.status !== "succeeded") return;
  const pm = si.payment_method as StripeT.PaymentMethod;
  const customer = idOf(session.customer)!;
  const sql = db();
  const [old] = await sql`select payment_method_id from public.guest_payment_methods where user_id = ${userId}`;
  await sql`insert into public.guest_payment_methods (user_id, stripe_customer_id, payment_method_id, brand, last4, exp_month, exp_year, updated_at)
    values (${userId}, ${customer}, ${pm.id}, ${pm.card?.brand ?? pm.type}, ${pm.card?.last4 ?? null}, ${pm.card?.exp_month ?? null},
      ${pm.card?.exp_year ?? null}, now())
    on conflict (user_id) do update set stripe_customer_id = excluded.stripe_customer_id, payment_method_id = excluded.payment_method_id,
      brand = excluded.brand, last4 = excluded.last4, exp_month = excluded.exp_month, exp_year = excluded.exp_year, updated_at = now()`;
  await s.customers.update(customer, { invoice_settings: { default_payment_method: pm.id } });
  // Alte Karte entfernen, damit nur eine hinterlegt ist
  if (old?.payment_method_id && old.payment_method_id !== pm.id) await s.paymentMethods.detach(old.payment_method_id).catch(() => {});
}

const PLAN_STATUS = new Set(["trialing", "active", "past_due", "unpaid", "canceled", "incomplete", "incomplete_expired", "paused"]);

export async function applySubscription(sub: StripeT.Subscription) {
  const sql = db();
  const rid = sub.metadata?.restaurant_id;
  if (!rid) return;
  const status = PLAN_STATUS.has(sub.status) ? sub.status : "none";
  const ended = status === "canceled" || status === "incomplete_expired";
  const plan = ended ? "NONE" : sub.metadata?.plan === "PRO" ? "PRO" : "BASIC";
  // Ab API 2025: Abrechnungszeitraum steht an der Position, vorher am Abo
  const periodEnd = (sub as unknown as { current_period_end?: number }).current_period_end ?? sub.items?.data?.[0]?.current_period_end;
  await sql`insert into public.restaurant_accounts (restaurant_id) values (${rid}) on conflict (restaurant_id) do nothing`;
  await sql`update public.restaurant_accounts set
      subscription_id = ${ended ? null : sub.id}, plan = ${plan}, plan_status = ${ended ? "canceled" : status},
      trial_end = ${ts(sub.trial_end)}, current_period_end = ${ts(periodEnd)},
      cancel_at_period_end = ${!!sub.cancel_at_period_end || !!sub.cancel_at}, trial_used = true,
      stripe_customer_id = coalesce(stripe_customer_id, ${idOf(sub.customer)}), updated_at = now()
    where restaurant_id = ${rid} and (subscription_id is null or subscription_id = ${sub.id})`;
}

export async function applyInvoice(inv: StripeT.Invoice) {
  if (inv.status !== "paid" || !inv.amount_paid) return;
  const anyInv = inv as unknown as { subscription?: string | { id: string }; parent?: { subscription_details?: { subscription?: string | { id: string } } } };
  const subId = idOf(anyInv.parent?.subscription_details?.subscription ?? anyInv.subscription);
  if (!subId) return; // Einmalrechnungen (Werbung) werden beim Checkout verbucht
  const sql = db();
  const [acc] = await sql`select restaurant_id from public.restaurant_accounts where stripe_customer_id = ${idOf(inv.customer)}`;
  if (!acc) return;
  const line = inv.lines?.data?.[0];
  const from = line?.period?.start ? new Date(line.period.start * 1000).toLocaleDateString("de-DE") : "";
  const to = line?.period?.end ? new Date(line.period.end * 1000).toLocaleDateString("de-DE") : "";
  await sql`insert into public.payments (kind, restaurant_id, amount_cents, fee_cents, net_cents, status, description, stripe_id, invoice_url, invoice_pdf)
    values ('SUBSCRIPTION', ${acc.restaurant_id}, ${inv.amount_paid}, ${inv.amount_paid}, 0, 'SUCCEEDED',
      ${`Firsty-Abo${from ? ` ${from}–${to}` : ""}${inv.number ? `, Rechnung ${inv.number}` : ""}`}, ${inv.id},
      ${inv.hosted_invoice_url ?? null}, ${inv.invoice_pdf ?? null})
    on conflict (stripe_id) do nothing`;
}

export async function applyAccount(acct: StripeT.Account) {
  await db()`update public.restaurant_accounts set charges_enabled = ${!!acct.charges_enabled}, payouts_enabled = ${!!acct.payouts_enabled},
    details_submitted = ${!!acct.details_submitted}, updated_at = now() where stripe_account_id = ${acct.id}`;
}

/** No-Show-Gebühren werden ohne Checkout belastet; ihr Endstand kommt über payment_intent.* */
export async function applyPaymentIntent(pi: StripeT.PaymentIntent) {
  if (pi.metadata?.kind !== "no_show") return;
  const status = pi.status === "succeeded" ? "SUCCEEDED" : pi.status === "canceled" || pi.last_payment_error ? "FAILED" : "PENDING";
  await db()`update public.payments set status = ${status} where stripe_id = ${pi.id} and status <> 'REFUNDED'`;
}

/** Erstattung (auch aus dem Stripe-Dashboard): Rechnung bzw. Gebühr als erstattet markieren und Gegenbuchung anlegen. */
export async function applyRefundedCharge(charge: StripeT.Charge) {
  const piId = idOf(charge.payment_intent);
  if (!piId || !charge.amount_refunded) return;
  const sql = db();
  const [p] = await sql`select * from public.payments where stripe_id = ${piId}`;
  if (!p) return;
  const full = charge.amount_refunded >= charge.amount;
  const feeBack = full ? p.fee_cents : Math.round((p.fee_cents * charge.amount_refunded) / charge.amount);
  await sql.begin(async (tx) => {
    if (full) await tx`update public.payments set status = 'REFUNDED' where id = ${p.id}`;
    if (full && p.bill_id) await tx`update public.bills set status = 'REFUNDED' where id = ${p.bill_id}`;
    await tx`insert into public.payments (kind, restaurant_id, user_id, booking_id, bill_id, amount_cents, fee_cents, net_cents, status, description, stripe_id)
      values ('REFUND', ${p.restaurant_id}, ${p.user_id}, ${p.booking_id}, ${p.bill_id}, ${-charge.amount_refunded}, ${-feeBack},
        ${-(charge.amount_refunded - feeBack)}, 'SUCCEEDED', ${`Erstattung: ${p.description ?? ""}`}, ${`refund:${charge.id}:${charge.amount_refunded}`})
      on conflict (stripe_id) do nothing`;
  });
}
