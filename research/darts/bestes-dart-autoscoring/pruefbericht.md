# Prüfbericht – bestes-dart-autoscoring

Stand: 2026-10-21 · Prüfer: pruefer · Geprüft: `src/content/categories/bestes-dart-autoscoring.mjs`, `research/darts/bestes-dart-autoscoring/produkte.json`, `dist/bestes-dart-autoscoring/`

## Ergebnis: **Korrektur nötig** (kleiner Umfang, keine Blocker bei ASINs/Technik)

## Geprüft und in Ordnung
- **ASINs** (WebSearch, amazon.de):
  - B0DMPM62MR – „TARGET Darts Omni Dartscheibe mit automatischer Punktzahlberechnung und LED-Beleuchtung …“, Modell 2400055, Verkauf Target Darts, 4,5★/162. Passt.
  - B0GY9N3Q7L – „AUTODARTS Vantage Autoscoring System Dart – Smart Dartboard Camera Scorer“, Verkauf WINMAU, 4,1★/48; Lieferumfang (3 Kameraarme, 3-zu-1-USB-Kabel), „bis 99,5 %“, Laptop/PC nötig, Plasma empfohlen – alles bestätigt. Hinweis: Produktinfo der Seite nennt intern auch B0GK8336JH/AD-2001 (Dublette, korrekt verworfen). Passt.
  - B0GJS7HY28 – „Scolia Home 2 Home autoscoring System“; Lieferumfang laut Listing „Scolia Home System 2.3“ (3 Kameras, CPU, Netzteil, WLAN-Antenne, Lüfter) + Montagematerial, **kein Lichtring** → „ohne Lichtring“ stimmt. Listenpreis ca. 979 € (Flex mit Licht B0DJ1R8VVM: 569 €; Fachhandel: Home 2 ohne Licht ca. 879 €, Flex ohne Licht ca. 499 €) → Preisniveau spricht klar für die **Nicht-Flex-Version**. Die Seite hat aber einen Variantenwähler (Home2 / Home2FLEX / SC-H2L-F); welche Variante beim Aufruf von /dp/B0GJS7HY28 vorausgewählt ist, ließ sich ohne Browserzugriff auf amazon.de nicht endgültig feststellen. Der Callout „Vor dem Kauf prüfen“ fängt das ab → akzeptabel, Restrisiko siehe Hinweis 1.
  - B0DJ1R8VVM – „Scolia Home 2 Flex mit Licht“, mit Flex-Plan und Scolia-Lichtring. Passt.
  - B0H1CCSKYD, B0DBZX8JD7, B087DH69SG – Titel in Suchergebnissen bestätigt.
- **Bezugsquellen-Reihenfolge:** alle Top 3 über Amazon; Autodarts X ohne Amazon-Listing nur als `where` in Top 5, kein neuer Awin-Händler. OK.
- **Rechnung „1.000 Würfe ≈ gut 300 Aufnahmen“:** mathematisch korrekt (1.000 ÷ 3 ≈ 333). Scolia selbst zählt laut Flex-Seite/Darts Corner **Darts** (Einzelpfeile), Händler sagen „throws“ – „Würfe“ = Einzelpfeile ist also richtig. Als Einordnung erkennbar, Formulierung aber unscharf (siehe Auftrag 3).
- **Omni-Maße (Currys):** 131 × 728 × 790 mm, 5,5 kg, 36 W/12 V auf zwei Currys-Seiten (inkl. Currys Business) bestätigt; die Black-Variante nennt 720 × 790 × 130 mm. „rund 73 × 79 cm laut Händler“ ist gedeckt.
- **Regeln:** keine Preise im Text, keine Amazon-Bilder (nur Symbolbilder), kein AggregateRating; Gewichte 0,35+0,2+0,2+0,25 = 1; Gesamtnoten Omni 8,43 > Scolia 7,95 > Vantage 7,58 → Platz 1 höchste Note (Platz 3 > Platz 2 ist zulässig, Rollen begründet); 7 FAQs; `quick` je H2 (5/5); Meta-Title 42, Description 163 Zeichen (≤ 165); Top 5 mit anderem Suchintent („Alternativen zum Zählen und Online-Spielen“); Rückrufe/Innenbereich/Kinder-Hinweis vorhanden.
- **Technik:** `node build.mjs` Exit 0; Chromium 1440/390 px: keine Konsolenfehler, keine 4xx, kein horizontales Scrollen (nur die vorgesehene Nav-Leiste scrollt intern), genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList), beide SVGs laden (naturalWidth 600), Amazon-Links mit `tag=toptopshop-21`.
- **Duplicate Content:** Stichprobe gegen die vier anderen Darts-Kategorien und dartautomaten – nur der Methodik-Satz zu WDF/PDC-Maßen ist wortgleich mit beste-dartscheiben-beleuchtung (unkritisch).

## Korrekturaufträge

1. **[Mittel] Scolia-Erkennung „übereinstimmend“ – Beleg ist eine Einzelmeinung.** In produkte.json gibt es genau einen Nutzerbericht (mydealz, als „Einzelmeinung“ markiert). Der Text verallgemeinert ihn.
   - `answer`: „…das Nutzer besonders für seine zuverlässige Erkennung loben“ → „…dessen Erkennung in einem Nutzerbericht als besonders zuverlässig beschrieben wird“ (oder Rechercheur liefert ≥ 2 weitere unabhängige Erfahrungsberichte, dann bleibt Plural).
   - Abschnitt „bestes-dart-autoscoring“, letzter Absatz: „weil Nutzerberichte das System übereinstimmend als besonders zuverlässig beschreiben – das ist eine Tendenz aus Erfahrungsberichten“ → „weil ein Nutzer im direkten Vergleich Scolia deutlich zuverlässiger fand als Autodarts und Scolia als einziges System feste Kamerabeine ohne Nachkalibrieren hat – das ist eine Einschätzung, kein Messergebnis“.
   - Gleiches Muster bei „laut Nutzerberichten“ (Scolia-`verdict`, `pros`, `quick`, Tabelle Bauarten, Vantage-`verdict`/`cons`): entweder auf „laut einem Nutzerbericht“ ändern oder Belege ergänzen.
   - zuständig: produkt-rechercheur (weitere Berichte suchen), danach redakteur.
2. **[Niedrig] Unbelegte Einzelaussagen.**
   - Omni-`cons`: „Garantieangaben bei Händlern uneinheitlich (1 bzw. 2 Jahre)“ – keine Quelle in produkte.json → belegen (Händler-URLs) oder streichen. zuständig: produkt-rechercheur / redakteur.
   - Kaufkriterien „Kameras und Erkennung“: „Falsch gewertete Würfe lassen sich bei allen drei Systemen … korrigieren“ – belegt nur für Omni (DartCounter-Handbuch) → für Scolia/Autodarts belegen oder „beim Omni laut DartCounter-Handbuch, bei den anderen Systemen ebenfalls über die App/Software“ nur mit Quelle.
   - Scolia-`bestFor` „die etablierteste Plattform“ und `pros` „Große Online-Community“ – ohne Beleg → „eine etablierte Plattform mit Online-Spiel“ bzw. Beleg nachreichen. zuständig: redakteur.
3. **[Niedrig] Rechnung präzisieren und kennzeichnen.** Abo-Abschnitt: „Zur Einordnung: 1.000 Würfe entsprechen grob gut 300 Aufnahmen à drei Pfeile.“ → „Zur Einordnung (eigene Rechnung): 1.000 Würfe – Scolia zählt einzelne Darts – sind rund 330 Aufnahmen à drei Pfeile.“ zuständig: redakteur.
4. **[Niedrig] Quelle für Regelmaße fehlt.** Methodik/Guide nennen 1,73 m/2,37 m als WDF/PDC-Regelmaß, `sources` enthält keine Regelquelle → z. B. `{ label: "Wikipedia: Darts (Regeln und Maße)", url: "https://de.wikipedia.org/wiki/Darts" }` ergänzen (wie in beste-dartmatte). zuständig: redakteur.

## Hinweise (keine Korrektur nötig)
1. Vor Veröffentlichung einmal im normalen Browser /dp/B0GJS7HY28 öffnen und prüfen, dass „Home2“ (nicht „Home2FLEX“/„SC-H2L-F“) vorausgewählt ist. Wenn Flex vorausgewählt ist: Variante-ASIN der Nicht-Flex-Version eintragen. (Orchestrator/Nutzer)
2. Produktname Omni weicht von der Amazon-Bezeichnung („TARGET Darts Omni Dartscheibe mit automatischer Punktzahlberechnung und LED-Beleuchtung“) ab; die Kurzform ist verständlicher und eindeutig – vertretbar.
3. Bereichsseite /darts/ verlinkt diese Kategorie wegen eines Template-Fehlers nicht sichtbar (siehe `research/darts/bereich-pruefbericht.md`).

## Umsetzung (Orchestrator, 2026-10-21)
Korrekturen 1–4 umgesetzt: Scolia-Erkennung auf „ein Nutzerbericht“ eingeschränkt, „etablierteste Plattform“/„große Community“ entschärft, Korrekturfunktion nur für Omni behauptet, Garantie-Contra gestrichen, eigene Rechnung gekennzeichnet (≈ 330 Aufnahmen), Wikipedia-Quelle ergänzt.
