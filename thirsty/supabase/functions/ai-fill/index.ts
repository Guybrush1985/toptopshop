// KI-Hilfe für Restaurants: Daten zu einem Restaurant im Netz finden ("lookup")
// oder eine Speisekarte aus PDF/Foto auslesen ("menu").
// Braucht das Secret ANTHROPIC_API_KEY (Supabase → Edge Functions → Secrets).
import Anthropic from "npm:@anthropic-ai/sdk";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const LOOKUP = `Finde das Restaurant im Netz und antworte NUR mit einem JSON-Objekt (ohne Markdown):
{"found":true|false,"name":"","street":"","postalCode":"","city":"","phone":"","website":"","instagram":"",
"cuisine":"","priceLevel":1-4,"tagline":"ein Satz, max 120 Zeichen","description":"2-4 Sätze, sachlich",
"hours":[{"weekday":0-6 (0=Montag),"opens":"HH:MM","closes":"HH:MM"}]}
priceLevel: 1 = Hauptgang bis 15 €, 2 = 15–30 €, 3 = 30–50 €, 4 = über 50 €.
cuisine aus: CUISINES. Felder, die du nicht sicher weißt, leer lassen. Erfinde nichts.`;

const MENU = `Lies die Speisekarte aus und antworte NUR mit einem JSON-Objekt (ohne Markdown):
{"items":[{"category":"","name":"","description":"","price":"12,50","allergens":""}]}
Übernimm Namen und Preise genau so wie auf der Karte. Getränke nur, wenn sie mit Preis gelistet sind.`;

function parse(text: string) {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("Keine Antwort erhalten.");
  return JSON.parse(m[0]);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  // Signatur prüft Supabase (verify_jwt); hier nur angemeldete Nutzer zulassen, nicht den öffentlichen Schlüssel.
  try {
    const token = (req.headers.get("authorization") ?? "").replace(/^Bearer /, "");
    const claims = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (claims.role !== "authenticated") return json({ error: "Bitte anmelden." }, 401);
  } catch {
    return json({ error: "Bitte anmelden." }, 401);
  }
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) return json({ error: "not_configured" }, 503);
  try {
    const body = await req.json();
    const client = new Anthropic({ apiKey: key });
    let content: unknown[];
    let tools: unknown[] | undefined;
    if (body.mode === "lookup") {
      const name = String(body.name ?? "").slice(0, 120);
      const city = String(body.city ?? "").slice(0, 80);
      if (!name) return json({ error: "Name fehlt." }, 400);
      content = [{ type: "text", text: `${LOOKUP.replace("CUISINES", (body.cuisines ?? []).join(", "))}\n\nRestaurant: ${name}\nStadt: ${city}` }];
      tools = [{ type: "web_search_20260209", name: "web_search", max_uses: 5 }];
    } else if (body.mode === "menu") {
      const type = String(body.mediaType ?? "");
      const data = String(body.data ?? "");
      if (!data || data.length > 14_000_000) return json({ error: "Datei fehlt oder ist zu groß (max. 10 MB)." }, 400);
      const file = type === "application/pdf"
        ? { type: "document", source: { type: "base64", media_type: type, data } }
        : { type: "image", source: { type: "base64", media_type: type, data } };
      content = [file, { type: "text", text: MENU }];
    } else return json({ error: "Unbekannter Modus." }, 400);

    const stream = client.beta.messages.stream({
      model: "claude-opus-5-5",
      max_tokens: 32000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      ...(tools ? { tools } : {}),
      messages: [{ role: "user", content }],
    } as never);
    const msg = await stream.finalMessage();
    if (msg.stop_reason === "refusal") return json({ error: "Die KI konnte das nicht verarbeiten." }, 422);
    const text = msg.content.filter((b: { type: string }) => b.type === "text").map((b: { text: string }) => b.text).join("");
    return json(parse(text));
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Fehler" }, 500);
  }
});
