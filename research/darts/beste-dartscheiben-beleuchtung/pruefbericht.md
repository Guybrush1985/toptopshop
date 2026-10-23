# Prüfbericht: beste-dartscheiben-beleuchtung

Stand: 2026-10-21 · Prüfer · Datei: `src/content/categories/beste-dartscheiben-beleuchtung.mjs`

## Ergebnis: **Korrektur nötig**

Zwei harte Punkte: Die ASIN für Platz 1 ist laut amazon.de „derzeit nicht verfügbar“, und der Top-5-Eintrag Harrows
Trilight ist falsch beschrieben. Der Rest ist sauber belegt, die Herstellerangaben sind gekennzeichnet und die Technik
ist in Ordnung.

## Geprüft und in Ordnung

- **Build:** `node build.mjs` läuft fehlerfrei (2.877 Wörter).
- **Darstellung:** Headless-Chromium bei 1440 px und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen,
  genau eine H1, JSON-LD parsebar, Symbolbilder `dartlight` korrekt, keine Amazon-Bilder.
- **Regeln:**
  - Gewichte ergeben zusammen 1.
  - Gesamtnoten: Corona 8,83 > Plasma 8,48 > Torus 8,23, Platz 1 hat also die höchste Note.
  - 7 FAQs, `quick`-Block unter jeder H2.
  - Meta-Title 44 Zeichen, Description 162 Zeichen.
  - Keine festen Preise, kein `AggregateRating`.
  - Rückruf-Hinweis und Sicherheits-Callout sind vorhanden.
- **Fakten:** Die Top-3-Aussagen haben eine Entsprechung in `produkte.json`. Die 2.000 lm der Plasma sind korrekt als
  Händlerangabe markiert. Die Methodik nennt das Fehlen unabhängiger Tests.
- **Bezugsquellen:** Alle Produkte kommen von Amazon. Kein freigeschalteter Awin-Händler führt Darts-Zubehör, ein neuer
  Händler ist nicht nötig.
- **ASINs mit passendem Titel** (per WebSearch auf amazon.de geprüft):
  - Torus 270 (B095T3365B)
  - Plasma (B07K1G7C4G)
  - Polaris (B0CJYLKJXB)
  - Torus 120 USB-C (B0FRB3DHZN)
  - Target Arc Cabinet (B09CV8JPXV)
  - Bull's Lumo Surround (B0D9YDSHKZ)
  - Harrows Trilight (B0DG2ZYLWD)

## Korrekturaufträge

1. **[hoch] Platz 1, `asin: "B0CFBBPLLF"` und Quelle „amazon.de: Target Corona Vision (Listing, Händlerangaben)“**
   - **Problem:** Das amazon.de-Listing B0CFBBPLLF ist laut Websuche „Currently unavailable“. Das gleiche Produkt gibt es
     aktiv unter **B06Y3J4WMX**: Titel „Target Darts Corona Vision Dartboard Lighting System …“, Verkauf durch Target
     Darts, Versand durch Amazon, auf Lager, ca. 7.800 Bewertungen, 123 LEDs, 4 Magnetfüße, Netzteil.
   - **Korrekturauftrag:**
     - `asin` → `"B06Y3J4WMX"`.
     - In `sources` die URL → `https://www.amazon.de/dp/B06Y3J4WMX`.
     - In `produkte.json` die Felder `asin` und `asinGeprueft` sowie den Punkt unter `offen` anpassen.
   - **Zuständig:** produkt-rechercheur (Werte), redakteur (Einträge in der .mjs).
2. **[hoch] Top 5, Harrows Trilight (`for: "Stablicht statt Ring"`, Text „… eher eine Alternative für alle, die keinen Ring um die Scheibe möchten“) sowie `top5.intro` („… und ein Stablicht“)**
   - **Problem:** Laut amazon.de-Listing B0DG2ZYLWD ist das Trilight **ein 360°-LED-Rahmen mit 44 cm Durchmesser**, der
     magnetisch am Rand der Scheibe befestigt wird. Laut Hersteller hat es einen um 55 % kleineren Rahmen und ein
     3-m-Kabel mit Ein/Aus-Schalter. Es ist also kein Stablicht. Die Aussage ist falsch, und der Eintrag deckt dann keine
     andere Bauart ab als Platz 1. Außerdem berichtet ein Rezensent, dass es nicht zu seinem Surround passte. Daneben gibt
     es ein zweites Listing, B0H36Q3FXH („Harrows 961901 Trilight“).
   - **Korrekturauftrag** (eine von zwei Varianten):
     - **(a) Ersetzen:** Den Eintrag durch ein Produkt, das wirklich eine andere Bauart hat. Zu prüfen ist das Target
       LED-Licht B0CLB4DQ15; eindeutige Bezeichnung und Bauart klären. Danach `intro` und `for` anpassen.
     - **(b) Behalten und richtig beschreiben:**
       - `for` → `"Schmaler 360°-Rahmen mit Schalter"`.
       - Text → „360°-LED-Rahmen mit 44 cm Durchmesser, magnetisch am Scheibenrand befestigt, 3-m-Kabel mit Ein/Aus-Schalter
         (Händlerangabe). Ein Rezensent berichtet, dass er nicht zu seinem Surround passte – vorher Maße prüfen.“
       - In `intro` die Wörter „und ein Stablicht“ ersetzen durch „und einen schmalen Rahmen mit Schalter“.
   - **Zuständig:** produkt-rechercheur, danach redakteur.
3. **[mittel] Duplicate Content mit `bestes-dart-autoscoring.mjs` im Abschnitt `guide` „beleuchtung-montieren“**
   - **Problem:** Mehrere Stellen sind fast wörtlich gleich mit der Autoscoring-Seite:
     - Der Satz „Die allgemeinen Steeldart-Regeln (WDF/PDC) sehen 1,73 m … und 2,37 m … vor.“
     - Der `facts`-Block mit den identischen Labels „Bullmitte über dem Boden (WDF/PDC-Regelmaß)“ und „Scheibenfront bis
       Abwurflinie (WDF/PDC-Regelmaß)“.
     - Das H3 „Drei typische Fehler“ mit dem Punkt „Scheibe gedreht, …“ (dort „Scheibe gedreht, nicht neu kalibriert“).
     - Das Callout-Ende „Steeldarts haben spitze Metallspitzen: Kinder nur unter Aufsicht spielen lassen.“
     - Der `related`-Text „Bodenschutz und Abwurflinie im Regelabstand von 2,37 m.“
   - **Korrekturauftrag:**
     - Den Regelmaß-Satz ersetzen durch: „Die genauen Regelmaße für Höhe und Abwurflinie stehen im Ratgeber zur
       [Steeldart-Scheibe](/beste-steeldart-scheibe/).“
     - `facts` auf lichtspezifische Werte umstellen, zum Beispiel:
       - „rund 45 cm – Standardscheibe, für die Ringe gebaut sind“
       - „ca. 74,5 cm – Wandring Winmau Plasma (Herstellerangabe)“
       - „270–360° – Lichtbogen für weitgehend schattenfreies Spielen“ (beibehalten)
     - Das H3 umbenennen, etwa in „Häufige Montagefehler beim Ringlicht“. Den Punkt „Scheibe gedreht“ eigenständig
       formulieren oder durch „Ring sitzt zu nah am Kabinett-Rahmen / Türen schließen nicht“ ersetzen.
     - `related`-Text für `beste-dartmatte` → z. B. „Matten mit Abwurflinie, die Boden und Pfeilspitzen schützen.“
   - **Zuständig:** redakteur.
4. **[niedrig] Top 5, Mission Torus 120 USB-C**
   - **Problem:** Laut Listing ist USB-C nur der Stromeingang, ein Netzteil liegt nicht bei.
   - **Korrekturauftrag:** Text ergänzen um: „Netzteil nicht enthalten – es braucht ein USB-C-Ladegerät oder eine Powerbank
     (Händlerangabe).“
   - **Zuständig:** redakteur.
5. **[niedrig] Top 5, Bull's Lumo Surround**
   - **Problem:** Der Text nennt nur eine Kritik am Schwestermodell. Zum Lumo Surround selbst berichtet eine Rezension
     (2 Sterne) von geknicktem Kabel, losem LED-Streifen und Beschädigung durch Fehlwürfe; bei 11 Bewertungen ist die
     Datenlage dünn.
   - **Korrekturauftrag:** Den Satz zum Lumo 2 ersetzen durch: „Wenige Bewertungen; ein Rezensent berichtet von losem
     LED-Streifen und Schäden durch Fehlwürfe.“
   - **Zuständig:** produkt-rechercheur (Eintrag in `produkte.json`), redakteur.
6. **[niedrig] Platz 1, `features[0]`**
   - **Problem:** Die Quelle ist unklar. In `produkte.json` steht „123 (Hersteller-US)“, als Quelle ist aber nur der
     UK-Shop angegeben.
   - **Korrekturauftrag:** → „360°-LED-Ring mit 123 LEDs laut amazon.de-Listing; der britische Target-Shop nennt 125“.
   - **Zuständig:** redakteur.

## Hinweis (kein Fehler)

- Die Seite `bestes-dart-autoscoring` empfiehlt die Winmau Plasma für Autodarts und Scolia. Optional kann in der
  `cards`-Karte „Punkte automatisch zählen“ oder im Plasma-Verdict ergänzt werden, dass die Plasma von Autodarts bzw.
  Scolia als kompatibel genannt wird. Das wäre stimmiges Cross-Linking.
- Screenshots: `/tmp/claude-0/-home-user-toptopshop/4b9f932c-5ff5-5325-b84b-37d9dae4f15f/scratchpad/pruefer-darts2/`

## Umsetzung (Korrekturrunde 1)

Stand: 2026-10-21 · produkt-rechercheur + redakteur · `node build.mjs` fehlerfrei (Seite 2.905 Wörter)

1. **Corona Vision ASIN:** Per WebSearch (amazon.de) bestätigt: B06Y3J4WMX, „Target Darts Corona Vision Dartboard Lighting
   System …“, auf Lager, ca. 7.820 Bewertungen, 123 LEDs, Magnetfüße, Netzteil. Geändert: `asin`, `sources`-URL; in
   `produkte.json` `asin`, `asinGeprueft`, Faktenquellen, Quellenliste und der Punkt unter `offen`.
2. **Harrows Trilight (Variante b):** `for` → „Schmaler 360°-Rahmen mit Schalter“. Text gemäß Auftrag (44 cm, magnetisch,
   3-m-Kabel mit Schalter, Hinweis zum Surround aus einer Rezension). `top5.intro` → „… und einen schmalen Rahmen mit Schalter“.
   In `produkte.json` `warum`, Fakten (Händlerangabe + Bericht) und `offen` angepasst. B0DG2ZYLWD bleibt; das zweite Listing
   B0H36Q3FXH ist vermerkt.
3. **Duplicate Content:**
   - Der Regelmaß-Satz ist durch einen Verweis auf [/beste-steeldart-scheibe/](/beste-steeldart-scheibe/) ersetzt.
   - `facts` sind jetzt lichtspezifisch: rund 45 cm Standardscheibe, ca. 74,5 cm Plasma (Herstellerangabe), 270–360°.
   - Das H3 heißt jetzt „Häufige Montagefehler beim Ringlicht“. Der Punkt „Scheibe gedreht“ ist ersetzt durch „Ring zu nah
     am Kabinett-Rahmen“.
   - Das Ende des Sicherheits-Callouts ist eigenständig formuliert: Stecker ziehen, Pfeile entfernen, bei Kindern ein
     Erwachsener an der Abwurflinie.
   - `related` für die Dartmatte → „Matten mit Abwurflinie, die Boden und Pfeilspitzen schützen.“
   - Zusätzlich ist der Methodik-Satz zu den Regelmaßen auf die Bullhöhe 1,73 m eingegrenzt, weil 2,37 m nicht mehr genannt
     wird.
4. **Torus 120 USB-C:** Hinweis „Netzteil nicht enthalten …“ ergänzt (auch als Fakt in `produkte.json`).
5. **Lumo Surround:** Der Satz zum Lumo 2 ist ersetzt. In `produkte.json` steht jetzt der Bericht zum Lumo Surround selbst
   (Quelle B0D9YDSHKZ).
6. **Corona `features[0]`:** → „360°-LED-Ring mit 123 LEDs laut amazon.de-Listing; der britische Target-Shop nennt 125“.
   In `produkte.json` ist der Fakt in eine Händlerangabe (123, amazon.de) und eine Herstellerangabe (125, UK-Shop) aufgeteilt.

Nicht umgesetzt (optional laut Hinweis): Autodarts-/Scolia-Kompatibilität der Plasma.
