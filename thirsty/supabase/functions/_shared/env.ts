// Umgebung der Edge Functions. Geheimnisse liegen in Supabase → Edge Functions → Secrets, nie im Repository.
//   STRIPE_SECRET_KEY              sk_test_… (Testmodus) bzw. sk_live_…
//   STRIPE_WEBHOOK_SECRET          whsec_… des Webhooks für Ereignisse des eigenen Kontos
//   STRIPE_CONNECT_WEBHOOK_SECRET  whsec_… des Webhooks für Ereignisse verbundener Konten (optional)
//   FIRSTY_CRON_SECRET             langes Zufallswort für den monatlichen Cron-Aufruf (Buchungsgebühr abrechnen)
// Von Supabase automatisch gesetzt: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_DB_URL.

export const env = (k: string) => Deno.env.get(k) ?? "";
export const SITE_URL = () => env("SITE_URL") || "https://firsty.toptop.shop";

/** Fehler mit einer Meldung, die die App so anzeigen darf. */
export class UserError extends Error {
  constructor(message: string, public status = 400) {
    super(message);
  }
}

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
