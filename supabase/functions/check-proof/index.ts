// MyShotCoach – automatische Vorprüfung eines hochgeladenen Coach-Nachweises.
// Aufruf durch den eingeloggten Coach direkt nach dem Upload. Die Freischaltung entscheidet weiterhin ein Mensch.
import { createClient } from "npm:@supabase/supabase-js@2";
import Anthropic from "npm:@anthropic-ai/sdk";
import { zodOutputFormat } from "npm:@anthropic-ai/sdk/helpers/zod";
import { z } from "npm:zod";
import { encodeBase64 } from "jsr:@std/encoding/base64";

const CORS = {
  "Access-Control-Allow-Origin": "https://toptop.shop",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const Check = z.object({
  kind: z.enum(["trainerlizenz", "uebungsleiter", "weltrangliste", "sonstiges", "unlesbar"]),
  plausible: z.boolean(),
  name_on_document: z.string(),
  name_matches: z.boolean(),
  level: z.enum(["A", "B", "C", "keine", "unklar"]),
  issuer: z.string(),
  valid_until: z.string(),
  reason: z.string(),
});

const TIER = { C: "DTB C-Trainer oder Übungsleiter Tennis", B: "DTB B-Trainer", A: "DTB A-Trainer", P: "ehemaliger Profi, mindestens Top 1000 ATP/WTA" } as Record<string, string>;
const IMG = ["image/jpeg", "image/png", "image/webp", "image/gif"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  const token = (req.headers.get("Authorization") || "").replace(/^Bearer /, "");
  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: u } = await db.auth.getUser(token);
  if (!u?.user) return json({ error: "not signed in" }, 401);
  const { data: c } = await db.from("coaches").select("*").eq("id", u.user.id).single();
  if (!c?.proof_path) return json({ error: "no proof" }, 400);
  if (!Deno.env.get("ANTHROPIC_API_KEY")) return json({ skipped: "no api key" });

  const { data: file, error } = await db.storage.from("coach-files").download(c.proof_path);
  if (error || !file) return json({ error: "download failed" }, 500);
  const type = file.type || (c.proof_path.endsWith(".pdf") ? "application/pdf" : "image/jpeg");
  const data = encodeBase64(new Uint8Array(await file.arrayBuffer()));
  const block = type === "application/pdf"
    ? { type: "document" as const, source: { type: "base64" as const, media_type: "application/pdf" as const, data } }
    : IMG.includes(type)
    ? { type: "image" as const, source: { type: "base64" as const, media_type: type as "image/jpeg", data } }
    : null;
  if (!block) {
    const r = { kind: "unlesbar", plausible: false, name_on_document: "", name_matches: false, level: "unklar", issuer: "", valid_until: "", reason: "Dateiformat kann nicht automatisch gelesen werden (z. B. HEIC). Bitte als JPG, PNG oder PDF hochladen." };
    await db.from("coaches").update({ ai_check: r, ai_checked_at: new Date().toISOString() }).eq("id", c.id);
    return json(r);
  }

  const claimed = c.tier === "P"
    ? `${TIER.P}; angegeben: ${c.pro_tour} beste Platzierung ${c.pro_rank}${c.pro_license ? `, zusätzlich DTB ${c.pro_license}-Lizenz` : ""}`
    : TIER[c.tier];
  const client = new Anthropic();
  const res = await client.messages.parse({
    model: "claude-opus-5-5",
    max_tokens: 4000,
    messages: [{ role: "user", content: [block, { type: "text", text:
`Du prüfst für eine Tennis-Coaching-Plattform, ob ein hochgeladener Nachweis plausibel zu den Angaben eines Coaches passt. Das ist nur eine Vorprüfung; ein Mensch entscheidet danach.

Angaben des Coaches:
- Name: ${c.first_name} ${c.last_name}
- Angegebene Qualifikation: ${claimed}

Prüfe kurz:
- Was ist das für ein Dokument (Trainerlizenz, Übungsleiterlizenz, Weltranglisten-Profil, sonstiges, unlesbar)?
- Passt das Dokument zur angegebenen Qualifikation, und ist es plausibel echt (keine offensichtliche Fälschung, kein Fremddokument)?
- Welcher Name steht darauf, und passt er zum Coach (Schreibvarianten und fehlende Zweitnamen sind ok)?
- Lizenzstufe, Aussteller, gültig bis (leer, wenn nicht erkennbar).
- reason: ein bis zwei Sätze auf Deutsch, sachlich.` }] }],
    output_config: { format: zodOutputFormat(Check) },
  });
  const r = res.stop_reason === "refusal" || !res.parsed_output
    ? { kind: "unlesbar", plausible: false, name_on_document: "", name_matches: false, level: "unklar", issuer: "", valid_until: "", reason: "Automatische Prüfung nicht möglich. Wir prüfen den Nachweis persönlich." }
    : res.parsed_output;
  await db.from("coaches").update({ ai_check: r, ai_checked_at: new Date().toISOString() }).eq("id", c.id);
  return json(r);
});
