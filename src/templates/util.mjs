import { site } from "../site.mjs";

/** HTML-Escaping für Text und Attribute. */
export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Minimales Inline-Markup für Inhaltsdateien:
 *   **fett**   und   [Linktext](/pfad/ oder https://…)
 * Alles andere wird escaped. Externe Links öffnen in neuem Tab.
 */
export function md(text) {
  let out = esc(text);
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener"' : "";
    return `<a href="${href}"${attrs}>${label}</a>`;
  });
  return out;
}

/** Amazon-Link mit Partner-Tag: Produktseite per ASIN oder Suche. */
export function amazonUrl({ asin, query, name }) {
  const base = `https://${site.amazon.domain}`;
  const url = asin
    ? new URL(`${base}/dp/${encodeURIComponent(asin)}`)
    : new URL(`${base}/s`);
  if (!asin) url.searchParams.set("k", query || name);
  url.searchParams.set("tag", site.amazon.partnerTag);
  return url.toString();
}

const MONTHS = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

/** "2026-10-07" → "7. Oktober 2026" */
export function dateDe(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${MONTHS[m - 1]} ${y}`;
}

/** 8.75 → "8,8" */
export function scoreDe(score) {
  return score.toFixed(1).replace(".", ",");
}

export function absUrl(path) {
  return site.url + path;
}

/** Wörter im sichtbaren Text einer HTML-Zeichenkette zählen (für die Build-Prüfung). */
export function countWords(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<svg[\s\S]*?<\/svg>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  return text.split(/\s+/).filter((w) => /[A-Za-zÄÖÜäöüß0-9]/.test(w)).length;
}

/** Gewichteter Gesamtscore aus den Kriterien der Kategorie. */
export function overallScore(ratings, criteria) {
  let sum = 0;
  let weights = 0;
  for (const c of criteria) {
    if (typeof ratings[c.key] !== "number") {
      throw new Error(`Bewertung "${c.key}" fehlt`);
    }
    sum += ratings[c.key] * c.weight;
    weights += c.weight;
  }
  return Math.round((sum / weights) * 10) / 10;
}

export const PRICE_TIERS = {
  1: { symbol: "€", label: "günstig" },
  2: { symbol: "€€", label: "mittel" },
  3: { symbol: "€€€", label: "gehoben" },
};
