import Stripe from "npm:stripe@23.0.0";
import { env, UserError } from "./env.ts";

export { Stripe };
let client: Stripe | null = null;

export function stripe(): Stripe {
  const key = env("STRIPE_SECRET_KEY");
  if (!key) throw new UserError("Zahlungen sind noch nicht eingerichtet. Bitte versuche es später noch einmal.", 503);
  // STRIPE_API_HOST/PORT nur für lokale Tests gegen stripe-mock
  const host = env("STRIPE_API_HOST");
  client ??= new Stripe(key, {
    httpClient: Stripe.createFetchHttpClient(),
    maxNetworkRetries: 2,
    ...(host ? { host, port: Number(env("STRIPE_API_PORT") || 12111), protocol: "http" as const } : {}),
  });
  return client;
}

/** Steuersatz 19 % USt. für Firsty-Leistungen an Restaurants; wird einmal angelegt und dann wiederverwendet. */
export async function vatRate(): Promise<string> {
  const s = stripe();
  const list = await s.taxRates.list({ active: true, limit: 100 });
  const found = list.data.find((t) => t.metadata?.firsty === "ust19");
  if (found) return found.id;
  const t = await s.taxRates.create({
    display_name: "USt.", percentage: 19, inclusive: false, country: "DE", jurisdiction: "DE",
    description: "Umsatzsteuer 19 %", metadata: { firsty: "ust19" },
  });
  return t.id;
}

/** Kundenportal (Abo kündigen, Zahlungsart ändern, Rechnungen laden). */
export async function portalConfiguration(): Promise<string> {
  const s = stripe();
  const list = await s.billingPortal.configurations.list({ active: true, limit: 100 });
  const found = list.data.find((c) => c.metadata?.firsty === "abo");
  if (found) return found.id;
  const c = await s.billingPortal.configurations.create({
    business_profile: { headline: "Firsty – Abo deines Restaurants" },
    features: {
      invoice_history: { enabled: true },
      payment_method_update: { enabled: true },
      customer_update: { enabled: true, allowed_updates: ["name", "email", "address", "tax_id"] },
      subscription_cancel: { enabled: true, mode: "at_period_end" },
    },
    metadata: { firsty: "abo" },
  });
  return c.id;
}

/** Stripe-Kartenfehler in eine verständliche Meldung übersetzen. */
export function stripeMessage(e: unknown): string {
  const err = e as { type?: string; code?: string; message?: string };
  if (err?.type === "StripeCardError") return "Die Karte wurde abgelehnt.";
  if (err?.code === "authentication_required") return "Die Bank verlangt eine Bestätigung durch den Karteninhaber.";
  return err?.message ?? "Unbekannter Fehler bei Stripe.";
}
