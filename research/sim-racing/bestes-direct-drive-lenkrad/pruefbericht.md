# Prüfbericht: /bestes-direct-drive-lenkrad/

Prüfer, 2026-10-25. Geprüft: `src/content/categories/bestes-direct-drive-lenkrad.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **Korrektur nötig** (1 × mittel, 2 × niedrig)

## Prüfliste
- **Fakten:** Aussagen haben Entsprechungen in `produkte.json` (Hersteller-/Händlerangaben gekennzeichnet; Gameswelt, L'Éclaireur Fnac, Thumbculture, TechRadar als Online-Tests/Berichte ohne Noten). Plattformlogik korrekt: RS50 Lizenz in der Basis (PS- und Xbox-Edition getrennt), Fanatec CSL DD Xbox nur mit Xbox-lizenziertem Rim, nie PlayStation (Fanatec + amazon.de-Listing bestätigt), T818 und MOZA nur PC, T598 PS5/PC bzw. separate Xbox/PC-Variante. Kein Widerspruch zu den Schwesterseiten (Fanatec-Xbox-Logik identisch auf Pedale- und Handbremsen-Seite).
- **ASINs (WebSearch amazon.de):**
  - B0FKGV88JX: „Logitech G RS50 System … for PS5/PS4/PC“, 3-teilig, 4,7★/58, Preis vorhanden – ok.
  - B0FJFMNP4M: „Fanatec Sim Racing CSL DD QR2 Wheel Base – PC“, 5 Nm/Boost Kit 8 Nm, Xbox mit Xbox-lizenziertem Lenkrad – ok.
  - B0G2BV2LP2: „Thrustmaster T818 Black Edition – 10 N·m Direct-Drive-Wheel-Base für PC“, Erscheinen 12.12.2025 – Listing existiert und passt; Preis/Neuangebot in den Suchauszügen nicht direkt sichtbar (laut Recherche Drittanbieter, Versand durch Amazon) → vor Merge live prüfen.
  - Top 5: B0FKGT1BXC (RS50 Xbox/PC) ok; B0DL51ZY3T (MOZA R5 Bundle) im Suchergebnis aktiv; B0F9JZV22Y (MOZA R12 V2) Titel passt, Preis/Neuangebot nicht sichtbar, Zweitlisting B0FSXXZKDJ; **B0F9KTCVZZ (MOZA R9 V3) laut amazon.de „derzeit nicht verfügbar, ungewiss ob wieder lieferbar“** → M1. B0D3MRRD92 (T598 PS5/PC) und B0FT3WMLG3 (CSL Steering Wheel GT3 PC/Xbox) laut Recherche; nicht erneut geprüft.
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine Preise/Amazon-Bilder/AggregateRating; Gewichte = 1; Noten 8,20 / 7,53 / 7,30 (absteigend, Platz 1 höchste); Top 5 eigener Intent (Budget/Drehmoment); 8 FAQs; `quick` je H2; Meta 56/149; Sicherheits- und Kinderhinweis zurückhaltend; Rückrufe recherchiert (keine gefunden, Safety Gate nicht direkt abfragbar – offen benannt).
- **Qualität:** Plattform-zuerst-Logik ist eine echte Entscheidungshilfe. Duplicate Content nur beim Direct-Drive-Sicherheits-Callout (identisch mit /sim-racing-cockpits/, ähnlich /bester-lenkradstaender/) – als Sicherheitsbaustein akzeptabel.
- **Technik:** `node build.mjs` grün; Chromium 1440/390 px: 1 × H1, JSON-LD parsebar, keine Konsolenfehler, keine 404, kein horizontales Scrollen; Symbolbild `wheelbase` korrekt (Basis mit Kühlrippen, D-Lenkrad, Tischklemme).

## Direkt korrigiert (Prüfer)
- Platz 1, Pro „Logitech-Pedale und -Shifter passen“ → „Logitech-RS-Pedale und RS-Shifter passen direkt“ (der Driving Force Shifter läuft an RS50/G PRO laut Shifter-Seite nur per Racing Adapter am PC – Widerspruch vermieden).

## Korrekturaufträge
- [mittel] Top 5 Nr. 2 „MOZA R9 V3“ (B0F9KTCVZZ) – amazon.de: „derzeit nicht verfügbar“; laut Suchauszug existiert ein weiteres R9-V3-Listing (5,0★) – aktives Neuware-Listing suchen und ASIN tauschen, sonst Eintrag durch eine verfügbare Basis ersetzen (CLAUDE.md: aktive Listings bevorzugen) – **produkt-rechercheur**, danach **redakteur**
- [niedrig] Top 5 Nr. 3 „MOZA R12 V2“ (B0F9JZV22Y) – Snapshot nur Gebraucht-Angebot; Zweitlisting B0FSXXZKDJ live vergleichen und das mit Neu-Angebot nehmen – **produkt-rechercheur**
- [niedrig] Platz 3 T818 Black Edition (B0G2BV2LP2) – Neu-Angebot nur über Drittanbieter; vor Merge im Browser prüfen – **Orchestrator** (PR-Hinweis)

## Korrekturrunde 1 (produkt-rechercheur, 2026-10-25)
- **M1 MOZA R9 V3 (B0F9KTCVZZ):** amazon.de weiter „derzeit nicht verfügbar“. Per Websuche kein zweites amazon.de-Listing der R9 V3 Wheelbase gefunden (B0BQV3SJHX, B0DYHH7FSG nur amazon.com) → **Eintrag ersetzt** durch **Fanatec Gran Turismo DD Pro PlayStation Bundle, B0F94B7PTB** (amazon.de-Titel „Fanatec Officially Licensed Gran Turismo DD Pro PlayStation Bundle …“, Snapshot mit Preis und Lieferdatum, 4,4★/ca. 397). Eigener Intent „Fanatec-Komplettset für PlayStation“ (CSL DD der Top 3 läuft nicht an PS5); steht nach der T598. Text: 5 Nm FluxBarrier, Boost Kit 180 separat bis 8 Nm, Polyphony-Digital-Lenkrad, Zwei-Pedal-Set, PS5/PS4/PC (Händlerangabe), Rezensionshinweis zur PC-Ersteinrichtung.
- Methodik-Satz zur R9 V3 angepasst (nicht mehr „steht in der Top 5“), Quellenlink amazon.de R9 V3 → GT DD Pro. Thumbculture-Test der R9 V3 bleibt als Quelle für die Tischklemmen-Aussage im Ratgeber.
- `produkte.json`: Top-5-Eintrag getauscht, R9 V3 unter `verworfen`, GT DD Pro aus `weitereAmazonOptionen` entfernt, Quelle ergänzt.
- Offen (niedrig, unverändert): R12 V2 Zweitlisting B0FSXXZKDJ; T818 Neu-Angebot vor Merge im Browser prüfen.
