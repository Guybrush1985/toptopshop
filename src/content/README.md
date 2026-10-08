# Content-Modell: neue Kategorie anlegen

Jede Kategorie ist **eine Datei** in `src/content/categories/<slug>.mjs`. Layout, Vergleichstabelle,
Infografiken, strukturierte Daten, Sitemap, Navigation und interne Verlinkung entstehen automatisch.
Es muss nichts programmiert werden.

```text
KATEGORIE
↓ Hero: H1, Einordnung, „Kurz gesagt“-Antwort (GEO)
↓ Top 3 (Gesamtwahl · Preis-Leistung · Premium/Spezial)
↓ Vergleichstabelle
↓ Redaktionelle Einordnung (editorial.sections)
↓ Top-5-Liste mit eigenem Suchintent (top5)
↓ Kaufberatung / Anleitung (guide.sections)
↓ 2 Infografiken (figures) – werden als SEO-optimierte SVG-Dateien erzeugt
↓ FAQ (mind. 5) + Methodik + Quellen
↓ Verwandte Kategorien (related)
```

## Schnellstart

1. Eine bestehende Datei kopieren, z. B. `beste-selbstbraeuner.mjs` → `beste-luftreiniger.mjs`.
2. `slug` = Dateiname (wird zur URL `/beste-luftreiniger/`).
3. Inhalte ersetzen, `updated` auf das heutige Datum setzen.
4. Für einen neuen Bereich (z. B. „Haushalt“) einen Eintrag in `areas` in `src/site.mjs` ergänzen.
5. `node build.mjs` ausführen. Der Build bricht mit einer klaren Meldung ab, wenn etwas fehlt.
6. Optional: Vorschaubild erzeugen mit `node scripts/og-images.mjs` (siehe Kopf der Datei).

## Felder

| Feld | Bedeutung |
|---|---|
| `slug`, `area`, `navLabel` | URL, Bereich aus `site.mjs`, Kurzname für Navigation/Footer |
| `group` | nur bei Bereichen mit Unterbereichen (`areas[].groups`, z. B. Krisenvorsorge): URL wird `/bereich/group/slug/` |
| `published`, `updated` | ISO-Datum; `updated` erscheint sichtbar als „Zuletzt aktualisiert“ |
| `metaTitle` (≤ 65 Zeichen), `metaDescription` (≤ 165) | Suchergebnis-Snippet |
| `h1`, `eyebrow`, `lead` | Hero-Bereich |
| `answer` | Direkte Antwort in 1–3 Sätzen; die drei Produkte als `[**Name**](produkt:1)` usw. verlinken (Pflicht, prüft der Build) |
| `priceTiers` | optional: eigene Preisklassen-Beschriftung (z. B. für Fahrräder) |
| `criteria` | 4 Bewertungskriterien mit `weight` (Summe = 1) und Beschreibung |
| `products` | Genau 3 Produkte (siehe unten) |
| `comparison` | Zeilen der Vergleichstabelle: `{ key, label }` → Werte aus `product.specs[key]` |
| `figures.scores` | Bewertungsdiagramm (Werte kommen aus den Produkten) |
| `figures.steps` | Schritt-für-Schritt-Infografik mit `steps: [{ title, text }]` |
| `editorial` | `title`, `intro`, `sections` – redaktioneller Teil vor der Top 5 |
| `top5` | `id`, `h2`, `intro`, genau 5 `items` – **anderer Suchintent** als die Top 3 |
| `guide` | `sections` – Kaufberatung/Anleitung nach der Top 5 |
| `faqs` | Mind. 5 Fragen `{ q, a }` – Antwort beginnt mit der direkten Antwort |
| `method`, `sources` | Herkunft der Empfehlung, Quellenlinks |
| `related` | `{ slug, text }` für Kategorien, `{ group, text }` für Unterbereiche desselben Bereichs oder `{ area, text }` für Bereiche |

### Produkt

```js
{
  rank: 1, label: "Beste Gesamtwahl",
  name: "…", brand: "…", variant: "…",
  visual: { kind: "foam" | "drops" | "oilspray" | "lotion" | "gel" | "device" | "station" | "panel" | "canister"
                | "mask" | "radio" | "handheld" | "pack" | "roll" | "lamp" | "stove" | "cylinder"
                | "triangle" | "slide" | "climbwall" | "ladder" | "swing" | "tent" | "mat" | "tower" | "sandbox" | "zipline"
                | "bouncy" | "waterslide" | "shelf" | "wardrobe" | "kidtable" | "rug" | "sideboard" | "cloth", tone: "forest" | "green" | "mint" },
  image: { src, alt, width, height },   // optional: echtes Produktfoto statt Symbolbild
  priceTier: 1 | 2 | 3,                 // €, €€, €€€ – keine festen Preise (Amazon-Richtlinien)
  ratings: { <kriterium>: 0–10, … },    // Gesamtnote wird automatisch gewichtet berechnet
  bestFor: "…", verdict: "…",
  features: [], pros: [], cons: [],
  specs: { <key>: "…" },                // Werte für die Vergleichstabelle
  asin: "B0…",                          // optional: Direktlink; sonst Amazon-Suche über `query`
  query: "…",
  // ODER Awin-Partnershop statt Amazon:
  shop: "radwelt" | "fahrradlagerverkauf" | "fahrrad24",  // Schlüssel aus site.awin.merchants
  url: "https://www.radwelt-shop.de/…",                    // Produktseite beim Händler
  // Nur Top 5: `where: "anbieter.de"` statt Link, wenn es keine Amazon-/Awin-Quelle gibt
}
```

### Textbausteine in `sections[].blocks`

`{ quick }` direkte Antwort · `{ first }` Absatz mit Initiale · `{ p }` Absatz · `{ h3 }` Zwischenüberschrift ·
`{ list, ordered? }` · `{ quote }` Pull-Quote · `{ callout: { title, text, warn? } }` Infobox ·
`{ table: { caption, head, rows } }` · `{ facts: [{ value, label }] }` Kennzahlen ·
`{ cards: [{ title, text, link? }] }` Zielgruppen-Karten · `{ figure: "scores" | "steps" }` Bild

In Texten funktionieren `**fett**`, `[Link](/pfad/)` und `[Produktname](produkt:N)` für den Affiliate-Link des Top-3-Produkts N.

## Qualitätsregeln

- **Keine erfundenen Fakten.** Herstellerangaben als solche kennzeichnen, Testergebnisse mit Quelle und Ausgabe nennen.
- **Keine festen Preise** von Amazon im Text (Amazon-Richtlinien); Preisklassen sind erlaubt.
- **Immer ASINs recherchieren:** Für jedes Produkt (Top 3 und Top 5) die passende amazon.de-ASIN eintragen. Nur eindeutige, aktive Listings übernehmen; sonst `query` mit exaktem Produktnamen belassen.
- **Bewertungen sind redaktionelle Einschätzungen** – keine Labortests behaupten.
- **Platz 1 muss die höchste Gesamtnote haben** (prüft der Build).
- Gesundheitsthemen: zurückhaltend formulieren, auf ärztlichen Rat verweisen.
