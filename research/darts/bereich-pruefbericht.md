# Prüfbericht – Bereich `darts`

Stand: 2026-10-21 · Prüfer: pruefer · Geprüft: Eintrag `darts` in `src/site.mjs` (areas), `dist/darts/index.html`

## Ergebnis: **Korrektur nötig**

## Geprüft und in Ordnung
- Meta-Title 53 Zeichen, Description 157 Zeichen (≤ 65/≤ 165).
- Chromium 1440/390 px: keine Konsolenfehler, keine 4xx, kein horizontales Scrollen, genau eine H1, JSON-LD parsebar (CollectionPage, ItemList mit allen 5 Kategorien, BreadcrumbList).
- 1,73 m (Bullmitte) und 2,37 m (Scheibenfront bis Abwurflinie) sind die WDF/PDC-Regelmaße und auf allen Darts-Kategorieseiten so verwendet. OK.
- Sicherheits-Callout zurückhaltend und sinnvoll; Link auf /dartautomaten/ funktioniert.
- „Unabhängige Labortests … gibt es bisher nicht“ deckt sich mit der Recherche aller fünf Kategorien (testsieger.de o. ä. nur Aggregatoren).

## Korrekturaufträge

1. **[Hoch] Nur 2 von 5 Ratgebern sind auf /darts/ verlinkt.** Die Seite zeigt „5 Ratgeber – Unsere Empfehlungen“, rendert aber nur die Karten Dartmatten und Dartscheiben-Beleuchtung; Steeldart-Scheibe, Dart-Autoscoring und Dartboard-Kabinett erscheinen nur im JSON-LD. Ursache: `src/templates/pages.mjs`, `areaPage`, Zeile 142:
   `${areas.flatMap((a) => cats.filter((c) => c.area === a.slug).slice(0, 2)).map(guideCard).join("")}`
   (offenbar aus der Startseiten-Logik kopiert, seit Commit a18d555). Betrifft **alle** Bereiche ohne Unterbereiche (Pickleball, Bräunung, Tennis-Ballwand … zeigen ebenfalls nur 2 Karten).
   Korrektur → `${cats.map(guideCard).join("")}`. Danach `node build.mjs` und /darts/ prüfen (5 Karten). zuständig: Orchestrator (Template, kein Content-Agent).
2. **[Mittel] Platzbedarf „rund 3,5 m Länge und etwa 1,5 m Breite“ ist nicht belegt.** Weder in research/darts noch per Websuche eine Quelle gefunden; aus den Regelmaßen ableitbar ist nur die Mindestlänge 2,37 m + Scheibe/Kabinett + Stand hinter der Linie. Entschärfen:
   alt: „Dafür braucht die Dart-Ecke rund 3,5 m Länge und etwa 1,5 m Breite, damit auch Mitspielende Platz haben.“
   neu: „Plane deshalb deutlich mehr als 2,37 m Länge ein – hinter der Abwurflinie braucht der Werfer Platz zum Stehen, seitlich sollten Mitspielende mit Abstand warten können. Als grobe eigene Faustregel reichen etwa 3 bis 3,5 m Länge.“ (oder Zahl ganz weglassen). zuständig: redakteur.
3. **[Niedrig] „Unsere Empfehlungen sind bei Amazon erhältlich.“** stimmt für alle Top 3, aber nicht für Winmau Autodarts X (Top 5 Autoscoring, nur Hersteller/Fachhandel) → „Unsere Top-3-Empfehlungen sind bei Amazon erhältlich.“ zuständig: redakteur.
4. **[Niedrig] Formulierung Tests:** „Unabhängige Labortests von Stiftung Warentest & Co. gibt es für Dart-Zubehör bisher nicht“ → „Unabhängige Labortests von Stiftung Warentest & Co. haben wir für Dart-Zubehör bisher nicht gefunden (Stand Oktober 2026)“ – konsistent mit den Methodik-Texten der Kategorien. zuständig: redakteur.

## Umsetzung (Orchestrator, 2026-10-21)
1. Template-Fehler behoben: Bereichsseiten ohne Unterbereiche zeigen jetzt alle Kategorien (`src/templates/pages.mjs`, `cats.map(guideCard)`) – wirkt auch auf Pickleball, Bräunung usw.
2.–4. Texte in `src/site.mjs` entschärft (Platzbedarf ohne Zahl, „Top-3-Empfehlungen“, „nicht gefunden (Stand Oktober 2026)“).
