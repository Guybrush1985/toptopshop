// Content Security Policy für den statischen Export der Website.
// Die Seite läuft ohne Server, deshalb steht die Richtlinie als <meta> in jeder HTML-Datei. Inline-Skripte
// von Next.js werden einzeln per SHA-256 erlaubt, alles andere muss von toptop.shop kommen. Ein eingeschleustes
// <script> oder ein Skript von einer fremden Domain wird damit vom Browser blockiert, und Daten können nur an
// Supabase und OpenStreetMap gehen.
// frame-ancestors (Schutz vor Einbetten) wirkt nur als HTTP-Header und steht deshalb in public/.htaccess.
import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;

async function env(dir) {
  const text = await readFile(join(dir, ".env.production"), "utf8").catch(() => "");
  return Object.fromEntries([...text.matchAll(/^([A-Z_]+)=(.*)$/gm)].map((m) => [m[1], m[2].trim()]));
}

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith(".html")) yield p;
  }
}

export function policy(html, supabaseUrl) {
  const hashes = [...html.matchAll(INLINE_SCRIPT)]
    .filter((m) => m[1].length > 0)
    .map((m) => `'sha256-${createHash("sha256").update(m[1], "utf8").digest("base64")}'`);
  const sb = supabaseUrl ? [supabaseUrl, supabaseUrl.replace(/^https:/, "wss:")] : [];
  return [
    "default-src 'self'",
    `script-src 'self' ${[...new Set(hashes)].join(" ")}`.trim(),
    // React und Leaflet setzen Styles per JavaScript; Inline-Styles erlauben kein Ausführen von Code.
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: blob: https://tile.openstreetmap.org ${sb[0] ?? ""}`.trim(),
    "font-src 'self' data:",
    // data: für das Umwandeln hochgeladener Fotos vor dem Upload (fetch(dataUrl)).
    `connect-src 'self' data: blob: ${sb.join(" ")} https://nominatim.openstreetmap.org`,
    "frame-src https://www.openstreetmap.org",
    "media-src 'self' blob:",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

/** Schreibt die Richtlinie in alle HTML-Dateien unter outDir. */
export async function addCsp(outDir, projectDir) {
  const { NEXT_PUBLIC_SUPABASE_URL: supabaseUrl = "" } = await env(projectDir);
  let n = 0;
  for await (const file of htmlFiles(outDir)) {
    const html = await readFile(file, "utf8");
    if (html.includes('http-equiv="Content-Security-Policy"')) continue;
    if (!html.includes("<head>")) throw new Error(`Kein <head> in ${file}`);
    const meta = `<meta http-equiv="Content-Security-Policy" content="${policy(html, supabaseUrl)}"/>`;
    await writeFile(file, html.replace("<head>", `<head>${meta}`));
    n++;
  }
  return n;
}
