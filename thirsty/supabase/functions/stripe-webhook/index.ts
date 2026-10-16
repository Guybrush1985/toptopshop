// Edge Function „stripe-webhook“: nimmt Ereignisse von Stripe an (ohne Anmeldung, geprüft über die Webhook-Signatur).
// In Stripe einrichten: Entwickler → Webhooks → Endpunkt https://<projekt>.supabase.co/functions/v1/stripe-webhook
//   Ereignisse des eigenen Kontos: checkout.session.completed, checkout.session.async_payment_succeeded,
//     customer.subscription.created/updated/deleted, invoice.paid, payment_intent.succeeded, payment_intent.payment_failed,
//     charge.refunded  → Signaturgeheimnis als STRIPE_WEBHOOK_SECRET
//   Ereignisse verbundener Konten: account.updated → Signaturgeheimnis als STRIPE_CONNECT_WEBHOOK_SECRET
import { Stripe, stripe } from "../_shared/stripe.ts";
import { db } from "../_shared/db.ts";
import { env } from "../_shared/env.ts";
import {
  applyAccount, applyCheckoutSession, applyInvoice, applyPaymentIntent, applyRefundedCharge, applySubscription,
} from "../_shared/fulfill.ts";

const crypto = Stripe.createSubtleCryptoProvider();

async function verify(body: string, signature: string) {
  for (const secret of [env("STRIPE_WEBHOOK_SECRET"), env("STRIPE_CONNECT_WEBHOOK_SECRET")].filter(Boolean)) {
    try {
      return await stripe().webhooks.constructEventAsync(body, signature, secret, undefined, crypto);
    } catch {
      /* nächstes Geheimnis probieren */
    }
  }
  return null;
}

// deno-lint-ignore no-explicit-any
async function dispatch(event: any) {
  const o = event.data.object;
  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
      return applyCheckoutSession(o);
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
    case "customer.subscription.paused":
    case "customer.subscription.resumed":
      return applySubscription(o);
    case "invoice.paid":
      return applyInvoice(o);
    case "payment_intent.succeeded":
    case "payment_intent.payment_failed":
    case "payment_intent.canceled":
      return applyPaymentIntent(o);
    case "charge.refunded":
      return applyRefundedCharge(o);
    case "account.updated":
      return applyAccount(o);
  }
}

export async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Nur POST", { status: 405 });
  const body = await req.text();
  const event = await verify(body, req.headers.get("stripe-signature") ?? "");
  if (!event) return new Response("Ungültige Signatur", { status: 400 });
  const sql = db();
  const [fresh] = await sql`insert into public.stripe_events (id, type) values (${event.id}, ${event.type})
    on conflict (id) do nothing returning id`;
  if (!fresh) return new Response("schon verarbeitet", { status: 200 });
  try {
    await dispatch(event);
  } catch (e) {
    console.error(event.type, e);
    await sql`delete from public.stripe_events where id = ${event.id}`; // Stripe versucht es später erneut
    return new Response("Fehler", { status: 500 });
  }
  return new Response("ok", { status: 200 });
}

if (!env("FIRSTY_TEST")) Deno.serve(handler);
