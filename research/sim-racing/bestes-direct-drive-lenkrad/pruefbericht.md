# Prüfbericht: /bestes-direct-drive-lenkrad/

Stand: 2026-10-26 · Prüfer · Grundlage: `src/content/categories/bestes-direct-drive-lenkrad.mjs`, `produkte.json`, `bilder.json`, `struktur.json`

## Ergebnis: **bestanden** (mit kleinen Hinweisen, kein Blocker)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build (`node build.mjs`) | fehlerfrei, 4.039 Wörter |
| Gewichte | 0,30 + 0,25 + 0,20 + 0,25 = 1,0 |
| Gesamtnoten | P1 8,10 > P2 7,40 > P3 7,28 – Platz 1 höchste Note |
| Meta | Title 56 Zeichen, Description 160 Zeichen |
| FAQs / quick je H2 | 9 FAQs; alle 5 H2 mit `quick` |
| Top 5 Suchintent | „nach Plattform und Ausbaustufe“ (Xbox, Logitech-Oberklasse, Fanatec-Baukasten, 12 Nm, Premium) – klar anderer Intent |
| Preise / Amazon-Bilder / AggregateRating | keine festen Preise, keine Amazon-Bilder, kein AggregateRating im HTML |
| Rückrufe/Sicherheit | Methodik + Sicherheits- und Gesundheits-Callout vorhanden, zurückhaltend formuliert |
| Fakten | Alle Produkt- und Testaussagen haben Entsprechung in `produkte.json` (Gameswelt/GamePro/PCGH nur als Tenor, korrekt gekennzeichnet) |
| Technik 1440/390 px | 1 H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList …), keine Konsolenfehler, keine 404, kein horizontales Scrollen, Symbolbilder `ddwheel` korrekt (alle 3 Töne) |

### ASIN-Gegenprüfung (WebSearch, amazon.de)

| Produkt | ASIN | Ergebnis |
|---|---|---|
| Logitech G RS50 System (PS5/PS4/PC) | B0FKGV88JX | ✔ Titel passt, aktiv (ca. 550 €, 4,7★) |
| MOZA R5 Pro Bundle (RS105) | B0HFRZNN31 | ✔ Modell RS105 passt, aktiv („nur noch 11“); Titel italienisch, 1 Bewertung, Snapshot-Preis ca. 492 € |
| Fanatec GT DD Pro PlayStation Bundle | B0F94B7PTB | ✔ passt, aktiv (ca. 650–700 €) |
| T598 Xbox & PC (Top 5) | B0F24NDP7K | ✔ Xbox/PC-Version |
| Logitech G PRO Racing Wheel (Top 5) | B0DCBW7GGM | ✔ PS-Version („for PC, PS4, PS5“) |
| Fanatec CSL DD QR2 PC (Top 5) | B0FJFMNP4M | ✔ passt |
| MOZA R12 V2 (Top 5) | B0FSXXZKDJ | ✔ RS081, aktiv; Listing nennt fälschlich PS5 – Seite benennt das korrekt |
| T818 Black Edition (Top 5) | B0G2BV2LP2 | ✔ passt |

## Hinweise / Korrekturaufträge

- [gering] Platz 2, `priceTier: 1` („bis ca. 450 €“) – Amazon-Listing B0HFRZNN31 zeigt im Snapshot ca. 492 € (Marktplatz, 1 Bewertung, ital. Titel); Hersteller-Startpreis 419 €. – Vor Merge Verkäufer/Preis live prüfen; falls dauerhaft > 450 €, Preisklasse 2 setzen oder Grenze „bis ca. 500 €“ wählen. – zuständig: produkt-rechercheur
- [gering] Platz 1 `cons`: „Tischklemme im Händlertitel nicht ausdrücklich genannt – vor dem Kauf prüfen“ – offene Recherchefrage wird an Leser weitergereicht. – Lieferumfang (Klemme ja/nein) klären und als Fakt formulieren (z. B. „Tischklemme separat“ oder streichen). – zuständig: produkt-rechercheur → redakteur
- [gering] Top 5 Eintrag „Logitech G PRO Racing Wheel“ – ASIN ist die PS-Version, Name nennt keine Plattform. – Namen an Amazon angleichen („Logitech G Pro Racing Wheel – für PC, PS4, PS5“) und im Text sagen, dass die Xbox-Version (B0DCBR289M) separat ist. – zuständig: redakteur
- [Info] Seiten-Änderungen außerhalb der Kategorie (site.mjs Intro/Meta/Article, related in sim-racing-cockpits, vr-gaming, gaming-stuehle) geprüft: korrekt, Meta Description Gaming-Room 160 Zeichen, Links bauen fehlerfrei. Neue Formen in `visuals.mjs` rendern in allen Tönen sauber.

## Runde 2 (2026-10-26)

### Ergebnis: **bestanden** (eine kosmetische Restkorrektur, kein Blocker)

| Auftrag Runde 1 | Umsetzung |
|---|---|
| Preisklasse MOZA R5 Pro Bundle | ✔ Grenze auf „bis ca. 500 €“ / „ca. 500–650 €“ angehoben, Begründung (Startpreis 419 €, Listing-Snapshots ca. 482–492 €) in `produkte.json`; RS50 (ca. 550 €) bleibt korrekt in Stufe 2 |
| Tischklemme RS50 | ✔ als Fakt geklärt (Logitech-Shop: Klemme + T-Nuts im RS50 System; amazon.de-Lieferumfang nennt Tischklemme), Con gestrichen, Feature, Spec, Tabelle und FAQ „Schreibtisch“ angeglichen – widerspruchsfrei |
| Logitech G Pro – Plattform | ✔ Name „Logitech G Pro Racing Wheel – für PC, PS4, PS5“, Xbox-Version (941-000194) im Text genannt |

**ASIN-Gegenprüfung neu:** B0DCBR289M → „Logitech G Pro Racing Wheel – Steering Wheel for PC, Xbox Series X|S“, Modell 941-000194 ✔ (nur als Quelle, nicht verlinkt). B0DCBW7GGM weiterhin PS/PC-Version ✔.

**Build/Technik:** `node build.mjs` fehlerfrei (4.068 Wörter); 1 H1, JSON-LD parsebar; im Seitentext nur Preisklassen-Spannen, keine festen Preise.

### Restkorrektur
- [gering] Top 5 „Logitech G Pro Racing Wheel – für PC, PS4, PS5“, `text`: Satzzeichenfehler „(Herstellerangabe), Der Link führt“ → „(Herstellerangabe). Der Link führt“. – zuständig: Orchestrator/redakteur
