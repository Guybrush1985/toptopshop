# Prüfbericht: beste-dartmatte

Stand: 2026-10-21 · Prüfer · Datei: `src/content/categories/beste-dartmatte.mjs`

## Ergebnis: **Korrektur nötig**

Hauptproblem ist Platz 3 (Bull's Carpet + Oche). Das Listing hat nur 6 Bewertungen mit 3,4/5, und ein Käufer berichtet,
dass die abgebildete 237-cm-Linie fehlte. Für eine „Premium-Wahl“ mit 8,0 Punkten bei „Abwurflinie“ ist das nicht
haltbar. Die widersprüchlichen Maße bei Winmau Pro Zone und Bull's Carpet sind im Text dagegen vorsichtig und korrekt
formuliert („laut Listing“, „90–95 cm“, Contra „Maßangaben widersprüchlich“).

## Geprüft und in Ordnung

- **Build:** `node build.mjs` läuft fehlerfrei (3.068 Wörter).
- **Darstellung:** Headless-Chromium bei 1440 px und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen,
  genau eine H1, JSON-LD parsebar, Symbolbilder `dartmat` korrekt, keine Amazon-Bilder.
- **Regeln:**
  - Gewichte ergeben zusammen 1.
  - Gesamtnoten: Winmau 8,45 > Bull's 8,20 > Target 7,20, Platz 1 hat also die höchste Note.
  - 7 FAQs, `quick`-Block unter jeder H2.
  - Meta-Title 59 Zeichen, Description 159 Zeichen.
  - Keine festen Preise, kein `AggregateRating`.
  - PAK-Hinweis mit Quellen, Laser-Hinweis und Sicherheits-Callout sind vorhanden.
  - Top 5 hat einen eigenen Suchintent (Bodenart und Platz).
- **Rechnung:** Die Diagonale von 2,93 m stimmt (√(1,73² + 2,37²) ≈ 2,93).
- **Bezugsquellen:** Alle Produkte kommen von Amazon, ein neuer Awin-Händler ist nicht nötig.
- **ASINs mit passendem Titel** (per WebSearch auf amazon.de geprüft):
  - Winmau Pro Zone Blade 6 Soft (B0DJMDY7RT)
  - Bull's Rubber Oche Mat (B01MQJAA4O)
  - Winmau Pro Zone PVC (B0DJMGH5FM)
  - Red Dragon Pro-Position (B09ZYRNT36)
  - Winmau Hi-Tech Beam (B007UEL5RQ; Abstand 2,37 m per Inbus einstellbar)
  - Mission Samurai Carpet (B0D5MQ2GWQ)

## Korrekturaufträge

1. **[hoch] Platz 3, Bull's Carpet + Oche (B08M6DS6CY)**
   - **Problem:** Laut amazon.de-Listing hat das Produkt **3,4 von 5 Sternen bei nur 6 Bewertungen**. Die Rezensionen
     berichten:
     - Die Matte kam gebraucht aussehend und mit vielen Löchern an (2024, 1 Stern).
     - Sie ist „recht dünn“, und **die auf den Bildern gezeigte weiße Linie bei 237 cm fehlte** (2025, 4 Sterne).

     Die Recherche nennt nur die positive Anti-Rutsch-Rezension, die Darstellung ist also selektiv. Die Noten
     abwurflinie 8,0 und haltbarkeit 7,5 sowie die Rolle „Premium-Wahl“ sind damit nicht belegt.
   - **Korrekturauftrag:** Platz 3 ersetzen.
     - Kandidaten, die zu prüfen sind: Bull's Advantage Carpet Dart Mat 300 × 85 cm + Oche (B0FGJMY4Y7) und Bull's
       Professional Carpet + Oche 300 × 65 cm (B08W1PXZNM; dort berichtet aber ebenfalls ein Käufer von einer nur
       aufgedruckten Linie).
     - Ebenfalls zu prüfen: eine andere breite Markenmatte mit eindeutigen Linienangaben und ausreichend Bewertungen.
     - Danach Name, Specs, Noten und alle Stellen anpassen, die das Produkt nennen: `answer`, `quick` in „beste-dartmatte“,
       der Absatz zur Breite, die `cards` „Parkett oder Fliesen“, die Abschnitte „Länge und Breite“ und FAQ 1 sowie
       `sources`.
     - Falls kein gleichwertiger Ersatz da ist, gilt Variante (b): bleibt Bull's, dann
       - Noten senken (abwurflinie ≤ 6, haltbarkeit ≤ 6),
       - die Rolle von „Premium-Wahl“ zu „Extra breit“ ändern,
       - als Contra aufnehmen: „Wenige Bewertungen; ein Käufer berichtet, dass die Abwurflinie fehlte“.
   - **Zuständig:** produkt-rechercheur, danach redakteur.
2. **[mittel] Platz 2, `name`: „Target Darts Weltmeisterschafts-Oche-Dartteppich (World Champions, Blue Trim)“**
   - **Problem:** Der amazon.de-Titel lautet „Target Darts World Cup Dart Mat Blue Trim“, die deutsche URL
     „Weltmeisterschafts-Oche-Dartteppich“. Der Zusatz „World Champions“ steht so nicht im Listing.
   - **Korrekturauftrag:** `name` → „Target Darts Weltmeisterschafts-Oche-Dartteppich (Blue Trim)“. Die Kurzform im Text
     bleibt.
   - **Zuständig:** redakteur.
3. **[mittel] Duplicate Content mit `beste-steeldart-scheibe.mjs` und `bestes-dartboard-kabinett.mjs` im `guide`-Abschnitt „auslegen“**
   - **Problem:**
     - Der `facts`-Block (2,37 m / 1,73 m / 2,93 m mit dem identischen Label „Diagonale Bull bis Abwurflinie“) steht so
       auf allen drei Seiten.
     - Der Satz „Von der Mitte des Bulls … sind es diagonal 2,93 m“ ist fast gleich mit dem Steps-Text bei der Scheibe
       und dem Kabinett-Absatz.
   - **Korrekturauftrag:**
     - `facts` auf mattenspezifische Werte umstellen, z. B.:
       - „2,37 m – Abwurflinie Steeldart, ab Scheibenfront“ (beibehalten)
       - „ca. 3 m – Mattenlänge bis hinter die Linie“
       - „25 mm – erhöhte Oche der Winmau Pro Zone (laut Listing)“
     - Den Diagonalen-Satz kürzen und verlinken: „Weitere Regelmaße wie Höhe und Diagonale stehen im Ratgeber zur
       [Steeldart-Scheibe](/beste-steeldart-scheibe/).“
   - **Zuständig:** redakteur.
4. **[niedrig] Platz 1, Kennzeichnung der Quellenart**
   - **Problem:** `features[2]` „Soft-Feel-Oberfläche im Design der Blade-6-Scheibe (Herstellerangabe)“ und `pros[2]`
     „Weiche Oberfläche schont Spitzen (Herstellerangabe)“ stützen sich in `produkte.json` nur auf Händlerangaben
     (amazon.de, buffalo.nl). Zudem nennt das Listing im Materialfeld „Nylon“, der Titel aber eine PVC-Matte.
   - **Korrekturauftrag:**
     - Beide Stellen → „(Händlerangabe)“ bzw. „(laut Listing)“.
     - `cons[2]` → „Maß- und Materialangaben im Listing teils widersprüchlich“.
   - **Zuständig:** redakteur.
5. **[niedrig] Top 5, Mission Samurai Carpet (B0D5MQ2GWQ)**
   - **Problem:** Das Listing hat 3,8/5 bei 25 Bewertungen. Laut Rezensionen rollen sich die Ecken auf, und ein Käufer
     berichtet, dass sich die Matte nach einem Monat auflöste und kahle Stellen hatte. Davon steht nichts im Text.
     Linien für Steel- und Softdart sind laut Listing vorhanden.
   - **Korrekturauftrag:** Den Text ergänzen um: „Linien für Steel- und Softdart (Händlerangabe). Laut Rezensionen rollen
     sich die Ecken teils auf, ein Käufer berichtet von Abnutzung nach einem Monat.“ Alternativ das Produkt ersetzen.
   - **Zuständig:** produkt-rechercheur, redakteur.

## Hinweis (kein Fehler)

- Bei B093M594FC (Target) und B0DJMGH5FM (Winmau PVC) weichen die ASINs in den technischen Details bzw. die Maße im Titel
  (118 × 24 cm) ab. Das ist typisch für Varianten-Listings und Packmaße. Die Titel passen, kein Handlungsbedarf.
- Screenshots: `/tmp/claude-0/-home-user-toptopshop/4b9f932c-5ff5-5325-b84b-37d9dae4f15f/scratchpad/pruefer-darts2/`

## Umsetzung (Korrekturrunde 1)

Stand: 2026-10-21 · produkt-rechercheur + redakteur · `node build.mjs` fehlerfrei (`/beste-dartmatte/` 3.163 Wörter)

1. **Platz 3 ersetzt:** Bull's Carpet + Oche (B08M6DS6CY) → **Bull's Carpet Mat 140 Grün Dartteppich (B07ZZPBXSM)**,
   Rolle „Extra breit“, priceTier 1.
   - Belege (WebSearch, amazon.de-/dp/-Treffer; amazon.de selbst per DNS nicht abrufbar): Titel „Carpet Mat 140 Green,
     Dart Rug with Non-Slip Rubber Backing … 237 cm x 80 cm“, ca. 4,2–4,3/5 bei ca. 280–300 Bewertungen; Linien
     237 cm + 244 cm laut Listing; 280 × 80 × 0,3 cm, Polyester mit Latex-Rücken (ed-sports.de).
   - Kritik aus Rezensionen (Abnutzung, dünn, rutscht teils) steht in verdict/cons.
   - Noten 8,0 / 7,0 / 6,5 / 6,0 → Gesamt 7,00. Reihenfolge: Winmau 8,45 > Target 7,20 > Bull's 7,00.
   - Verworfen (in `produkte.json` mit Grund): B08M6DS6CY (Bericht), Bull's Advantage 300 × 85 (B0FGJMY4Y7, nur ca. 1–9
     Bewertungen), B08W1PXZNM (Linie nur aufgedruckt, 65 cm), B07ZK2RFTL/B074L1XLDD (nicht verfügbar).
   - Angepasst: `answer`, `top3Intro` (2,80–3 m), `quick` und Breite-Absatz in „beste-dartmatte“, Karte „Parkett oder
     Fliesen“, „Länge und Breite“, FAQ 1, `sources`. Bei Target „günstigste Markenmatte“ → „eine der günstigsten“, weil
     der neue Platz 3 preislich ähnlich liegt.
   - Offen: Verfügbarkeit nicht live geprüft (amazon.it zeigte „nicht verfügbar“). Ausweich-ASIN Rotvariante B07ZZPMWT6.
2. **Target-Name** → „Target Darts Weltmeisterschafts-Oche-Dartteppich (Blue Trim)“, `query` angeglichen.
3. **Duplicate Content:** `facts` → 2,37 m / ca. 3 m Mattenlänge / 25 mm Winmau-Oche (laut Listing); Diagonalen-Satz
   ersetzt durch Verweis auf [Steeldart-Scheibe](/beste-steeldart-scheibe/).
4. **Platz 1:** features[2] „(Händlerangabe)“, pros[2] „(laut Listing)“, cons[2] „Maß- und Materialangaben im Listing
   teils widersprüchlich“.
5. **Mission Samurai:** Text um Linienangabe (Händlerangabe) und Rezensionskritik (Ecken, Abnutzung nach einem Monat)
   ergänzt.
