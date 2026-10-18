// Werbung lohnt sich: signierte Upload-Adresse für Werbespots.
// Prüft die Sitzung (eigene Konten im Schema wls) und gibt nur Werbetreibenden eine Upload-Adresse
// in den öffentlichen Bucket "wls-spots" (max. 50 MB, mp4/webm/mov).
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const TYPES: Record<string, string> = { "video/mp4": "mp4", "video/webm": "webm", "video/quicktime": "mov" };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST" }, 405);
  try {
    const { token, type } = await req.json();
    const ext = TYPES[type];
    if (!ext) return json({ error: "Bitte lade ein MP4-, WebM- oder MOV-Video hoch." }, 400);
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: accountId, error } = await admin.rpc("wls_upload_account", { p_token: token });
    if (error || !accountId) return json({ error: error?.message || "Bitte melde dich erneut an." }, 401);
    const path = `${accountId}/${crypto.randomUUID()}.${ext}`;
    const { data, error: upErr } = await admin.storage.from("wls-spots").createSignedUploadUrl(path);
    if (upErr) return json({ error: upErr.message }, 500);
    const { data: pub } = admin.storage.from("wls-spots").getPublicUrl(path);
    return json({ signedUrl: data.signedUrl, token: data.token, path, publicUrl: pub.publicUrl });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
