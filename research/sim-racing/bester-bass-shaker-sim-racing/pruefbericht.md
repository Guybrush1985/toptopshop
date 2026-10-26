# Prüfbericht: /bester-bass-shaker-sim-racing/

Stand: 2026-10-26 · Prüfer

## Ergebnis: **Korrektur nötig** (Top 5: 2 von 5 Listings nicht verfügbar)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build | fehlerfrei, 4.337 Wörter |
| Gewichte | 0,30 + 0,25 + 0,20 + 0,25 = 1,0 |
| Gesamtnoten | P1 8,10 · P2 6,95 · P3 7,33 – P1 höchste; Sortierung nach Rolle in der Methodik offen erklärt ✔ |
| Meta | Title 44, Description 156 |
| FAQs / quick | 8 FAQs; alle 7 H2 mit `quick` |
| Fakten | belegt; Herstellerangaben gekennzeichnet; traxion.gg nur als Suchauszug transparent ✔ |
| Sicherheit | Wärme, 230 V, Nachbarn/Körperschall, ärztlicher Hinweis – zurückhaltend und sinnvoll ✔ |
| Technik 1440/390 px | 1 H1, JSON-LD ok, keine Fehler/404, kein horizontales Scrollen, `bassshaker` korrekt |

### ASIN-Gegenprüfung

| Produkt | ASIN | Ergebnis |
|---|---|---|
| ButtKicker Gamer Plus | B09XPB7THZ | ✔ BK-GR-PLUS; Listing-Metadaten fehlerhaft („Nintendo DS“), Preis-Snapshot alt – live prüfen |
| Dayton Audio BST-2 | B08NN5V62G | ✔ aktiv (ca. 50 €) |
| Reckhorn BS-200 | B00AMH17GC | ✔ passt; ein Snapshot „derzeit nicht verfügbar“, anderer 64,95 € – live prüfen |
| Dayton TT25-16 4er-Pack (Top 5) | B0073IXASQ | ✔ aktiv |
| ButtKicker Mini LFE (Top 5) | B0052AXFKK | ✔ aktiv |
| **Dayton BST-1 (Top 5)** | B01CDDPJTI | ✘ **„derzeit nicht verfügbar“**, Titel verstümmelt („BST-39 1“) |
| **Reckhorn A-409 (Top 5)** | B01GPOCO08 | ✘ **„Derzeit nicht verfügbar, unbekannt ob wieder lieferbar“** – Nachfolger A-410 **B0DNN2FSQP** aktiv gelistet |
| Audio System Bass Shaker (Top 5) | B01FKHSOQE | ✔ Titel passt, Daten im Listing widersprüchlich |

## Korrekturaufträge

1. [hoch] Top 5 „RECKHORN A-409 Verstärker“ – Listing nicht verfügbar; zugleich nennen Platz 3 (`cons`, `specs.verstaerker`, Features) und Kaufkriterien den A-409 als Verstärker-Empfehlung. – Auf **Reckhorn A-410 (B0DNN2FSQP)** umstellen (Händler: „entspricht in Bedienung und Daten dem A-409“), Herstellerdaten des A-410 in `produkte.json` belegen; Texte „A-409“ → „A-410 (Nachfolger des A-409)“ angleichen. – zuständig: produkt-rechercheur → redakteur
2. [hoch] Top 5 „Dayton Audio BST-1“ – Listing nicht verfügbar, Titel verstümmelt. – Ersetzen durch ein aktives Produkt mit eigenem Intent (z. B. Dayton-Verstärker SA70/SPA250 oder ein lieferbares Rig-Set, falls wieder gelistet: Reckhorn-Set, BST-300EX, Gamer Pro); wenn nichts Gleichwertiges aktiv ist, `query` statt `asin` und Text „derzeit schwer erhältlich“ – CLAUDE.md: aktive Listings bevorzugen. – zuständig: produkt-rechercheur → redakteur
3. [mittel] Top 5 „Audio System Bass Shaker“ – Füller mit widersprüchlichen Listing-Daten, wenigen Bewertungen und Begründung „weil die Rig-Kits … nicht lieferbar sind“. Erleichtert die Entscheidung kaum. – Wenn bei Auftrag 2 ein besseres aktives Produkt gefunden wird, diesen Platz ebenfalls ersetzen; sonst Leistungsangabe im Text konkret als „laut Listing max. 220 W“ belegen und die Schwäche klar benennen. – zuständig: produkt-rechercheur → redakteur
4. [gering] Symbolbild `bassshaker` zeigt immer einen Verstärker – bei Platz 2 und 3 (ausdrücklich ohne Verstärker) missverständlich, die Seite betont genau diesen Unterschied. – Optionale Variante ohne Verstärker (z. B. `visual.variant: "solo"` oder eigene Form `bassshaker-solo`) für Einzel-Shaker. – zuständig: illustrator
5. [gering] Platz 1 Label „Bestes Komplett-Kit“ / Verdict „das einzige Komplett-Kit …“ – „bestes“ bei nur einem verfügbaren Kit ist schwach. – Optional „Beste Gesamtwahl (Komplett-Kit)“. – zuständig: redakteur

## Runde 2 (2026-10-26)

### Ergebnis: **bestanden** (zwei kleine Textkorrekturen empfohlen, kein Blocker)

| Auftrag Runde 1 | Umsetzung |
|---|---|
| 1 [hoch] A-409 nicht verfügbar | ✔ Top 5 auf **Reckhorn A-410 (B0DNN2FSQP)** umgestellt; alle A-409-Nennungen (Platz-3-Spec/Con/Feature, Tabelle, Verstärker-Absatz) als „A-410 (Nachfolger des A-409)“ angeglichen; A-409-Daten sauber als Vorgänger-Herstellerdaten gekennzeichnet, „Listing nennt Bass-Shaker nicht ausdrücklich“ offen benannt |
| 2 [hoch] Dayton BST-1 nicht verfügbar | ✔ ersetzt durch **AuraSound AST-2B-4 Pro (B0002ZPTBI)**; widersprüchliche Listing-Angaben (Bluetooth, wasserdicht, 5.1) offen benannt; Methodik nennt Austausch mit Datum |
| 3 [mittel] Audio System Bass Shaker | ✔ ersetzt durch **Sinuslive bassPUMP III 4 Ω (B0000WR4F2)** |
| 4 [gering] Symbolbild ohne Verstärker | ○ nicht umgesetzt (in `produkte.json` als offen vermerkt) – optional, kein Blocker |
| 5 [gering] Label Platz 1 | ✔ „Beste Gesamtwahl (Komplett-Kit)“ |

**ASIN-Gegenprüfung (WebSearch amazon.de):**
- B0DNN2FSQP → „Reckhorn A-410 … 1 Channel, 400 Watt, Metal Housing, Subwoofer Mono Amplifier“ ✔ (2 Ω, „wie A-409“); kein Hinweis auf „nicht verfügbar“
- B0002ZPTBI → „AuraSound AST-2B-4 Pro Bass Shaker Tactile Converter“ ✔, 4,6★/515; Snapshot-Preis auffällig hoch (Marktplatz?) – im Text kein Preis, ok
- B0000WR4F2 → „Sinuslive bassPUMP 4 Ohm Body Sound Converter, 50W RMS Bass Shaker … Gaming Chair … SIM Racing“ ✔, ca. 4,4–4,5★/ca. 180; 8-Ω-Variante im Text abgegrenzt

**Bewertung Sinuslive bassPUMP III als Top-5-Budget-Eintrag:** **vertretbar.** Deutsche Car-Hifi-Marke mit Herstelleranleitung, aktives Listing mit soliden Bewertungen, das Sim Racing ausdrücklich nennt; eigener Intent („günstigster Einstieg unter dem Sitz“); Schwächen klar benannt (schwächer als BS-200/AST-2B-4, Verarbeitung teils kritisiert, Verstärker nötig). Deutlich besser als der vorherige Füller. Einzige Unschärfe: Leistungsangaben – Anleitung laut Agent 80 W max., Listing 70 W max., Conrad-Artikeltitel „70 W“; die Anleitung konnte ich nicht abrufen. Daher Max-Wert streichen (s. u.).

**Build/Technik:** fehlerfrei (4.513 Wörter); alle 8 ASINs im HTML; 1 H1, JSON-LD parsebar; nur Preisklassen-Spannen.

### Restkorrekturen
- [gering] Top 5 Sinuslive, `text`: „laut Bedienungsanleitung 50 W Sinus / 80 W max., 20–80 Hz“ → „laut Bedienungsanleitung 50 W Sinus, 20–80 Hz“ (Max-Wert in den Quellen uneinheitlich 70/80 W). – zuständig: Orchestrator/redakteur
- [gering] Top 5 AuraSound, `text`: „Resonanz um 40 Hz, Metallgehäuse, auf amazon.de mit rund 500 Kundenbewertungen (Snapshot) – deutlich mehr Erfahrungswerte als bei anderen Ausweich-Shakern.“ → „Frequenzangabe 40 Hz, Metallgehäuse, auf amazon.de mit rund 500 Kundenbewertungen (Snapshot) – eine breite Basis an Erfahrungswerten.“ (Listing nennt nur „40 Hz“, nicht Resonanz; „Ausweich-Shaker“ ist ein Überbleibsel des alten Eintrags.) – zuständig: Orchestrator/redakteur
