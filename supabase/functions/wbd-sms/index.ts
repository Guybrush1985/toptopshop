// Wo bist du?: Anmeldung per SMS-Code über Twilio Verify.
// action "start": Limits prüfen (wbd_sms_start), Code per SMS senden.
// action "check": Code bei Twilio prüfen, dann anmelden oder Konto anlegen (wbd_sms_login).
// Secrets: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SID (Supabase → Edge Functions → Secrets).
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");
const VERIFY = Deno.env.get("TWILIO_VERIFY_SID");

async function twilio(path: string, form: Record<string, string>) {
  const res = await fetch(`https://verify.twilio.com/v2/Services/${VERIFY}/${path}`, {
    method: "POST",
    headers: { Authorization: "Basic " + btoa(`${SID}:${TOKEN}`), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(form),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST" }, 405);
  if (!SID || !TOKEN || !VERIFY) return json({ error: "not_configured" });
  try {
    const { action, phone, code, name } = await req.json();
    const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    if (action === "start") {
      const { data, error } = await db.rpc("wbd_sms_start", { p_phone: String(phone || "") });
      if (error) return json({ error: error.message });
      if (data.error) return json({ error: data.error });
      const r = await twilio("Verifications", { To: data.phone, Channel: "sms", Locale: "de" });
      if (!r.ok) {
        console.error("twilio start", r.status, r.data);
        return json({ error: r.status === 429 ? "Zu viele Versuche. Bitte warte kurz." : "Die SMS konnte nicht gesendet werden. Stimmt die Nummer?" });
      }
      return json({ ok: true, phone: data.phone, known: data.known });
    }

    if (action === "check") {
      const c = String(code || "").replace(/\D/g, "");
      if (c.length < 4) return json({ error: "Bitte gib den Code aus der SMS ein." });
      const r = await twilio("VerificationCheck", { To: String(phone || ""), Code: c });
      if (!r.ok || r.data.status !== "approved") {
        return json({ error: r.status === 404 ? "Der Code ist abgelaufen. Fordere einen neuen an." : "Der Code stimmt nicht." });
      }
      const { data, error } = await db.rpc("wbd_sms_login", { p_phone: phone, p_name: name ?? null });
      if (error) return json({ error: error.message });
      return json(data);
    }

    return json({ error: "Unbekannte Aktion" }, 400);
  } catch (e) {
    console.error(e);
    return json({ error: "Da ist etwas schiefgelaufen." }, 500);
  }
});
