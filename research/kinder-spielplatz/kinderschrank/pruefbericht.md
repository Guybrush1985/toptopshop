# Prüfbericht: kinderschrank

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig**

## Technik
- Build fehlerfrei, 2.768 Wörter. Chromium 1440/390 px: eine H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen. Die Symbolbilder (wardrobe) werden angezeigt.

## ASIN-Prüfung (WebSearch, amazon.de)
- B0DXVYPSGR PINOLINO Linje – Titel und Daten passen (110 × 52 × 188, 3 Türen, Soft-Close, 83,5 kg, Modell 140009).
- B0085HMUPS Forte WINNIE 80 – Titel passt, auf Lager. Laut Listing ist die Wandmontage vorgeschrieben, also auch für die 80er-Variante belegt.
- B004CR5AFC PINOLINO Natura 142174 – Titel passt. Das Listing nennt aber **vier Böden**, der Text sagt fünf. Laut Listing gibt der Hersteller auf alle Produkte 10 Jahre Garantie.
- Top 5, Stichprobe: B073QT1NRV BioKinder Lina Kleiderschrank ist ein aktives Listing, die Daten passen (190 × 110 × 55, 5 Böden, Soft-Close).

## Korrekturaufträge
- [hoch] Bewertungsanzahlen in Vor- und Nachteilen – products[0].cons „Neues Modell mit noch wenigen Kundenbewertungen“, products[1].pros „Viele Kundenbewertungen“, products[2].cons „Nur wenige Kundenbewertungen“. Alle drei streichen; Amazon-Bewertungen sollen nicht im Text stehen. Falls nötig durch inhaltliche Punkte ersetzen (z. B. Linje: „Neues Modell – Langzeiterfahrungen fehlen noch“) – zuständig: redakteur
- [mittel] Kaufkriterien „Material und Ausdünstungen“ – „im Wickelkommoden-Test 2010“ ist falsch datiert. Laut oekotest.de erschien der Test im **ÖKO-TEST Magazin 8/2009** (aktualisiert im Jahrbuch Kleinkinder 2010). Korrigieren auf „ÖKO-TEST 8/2009“ und eine Quelle ergänzen (https://www.oekotest.de/kinder-familie/10-Wickelkommoden-im-Test_94257_1.html). Auf /sideboard-kinderzimmer/ steht „2009“, beide Angaben angleichen – zuständig: redakteur
- [mittel] Gleicher Absatz – Der Ikea-Test (Öko-Test online 12/2019) wird verkürzt als „Test kompletter Kinderzimmermöbel“ wiedergegeben. Ergänzen, dass es ein Ikea-Kinderzimmer war und die Raumluft insgesamt „gut“ abschnitt; sonst wirkt der Befund schärfer als belegt – zuständig: redakteur
- [mittel] products[2] Natura – Text, Features, Vergleichstabelle und Tabelle „5 Böden“ widersprechen dem Listing (4 Einlegeböden). Gegen Herstellerseite oder Listing klären, sonst „4–5 Böden (Angaben uneinheitlich)“ – zuständig: produkt-rechercheur
- [gering] products[0] Linje Garantie „10 Jahre (laut Händlerangaben)“ – ist nur für andere Linje-/Pinolino-Artikel belegt. Laut Natura-/Lasse-Listing gibt Pinolino auf alle Produkte 10 Jahre. Quelle auf diese Herstellerangabe umstellen oder „laut Pinolino für alle Produkte“ formulieren – zuständig: produkt-rechercheur
- [gering] Duplicate/Kannibalisierung mit Bücherregal und Sideboard (Kippschutz-H2, FAQ „gegen Umkippen“, Dübel-Absatz) – Wörtlich überschneiden sich nur 1,4–1,6 %, aber die Suchintention ist identisch. Empfehlung: Kinderschrank als **Hauptseite für Kippschutz** behalten (hier ist er am relevantesten) und die anderen beiden Seiten kürzen und hierher verlinken. Fast wortgleich ist der Satz „Dübel und Schrauben müssen zum Untergrund passen: Beton, Ziegel, … brauchen unterschiedliche Befestigungen“ (Sideboard-FAQ) – auf einer Seite umformulieren – zuständig: redakteur
- [gering] Top 5 HOCSOK (Spielzeugkiste mit Klappe) – Den Hinweis auf Einschlussgefahr und Lüftungsöffnungen ohne Quelle allgemein halten oder EN 71-1 (Anforderungen an Spielzeugtruhen) als Quelle angeben, falls belegbar – zuständig: redakteur
- [gering] Symbolbild Linje – Es zeigt 2 Türen; Linje hat 3 Türen und ein offenes Fach. Optional anpassen – zuständig: illustrator

## In Ordnung
Keine festen Preise und keine Sterne. EN 14749 ist korrekt eingeordnet (Wand und Dübel nicht Teil der Prüfung). Altersangaben werden nicht behauptet. Gewichte summieren sich auf 1, Platz 1 hat die höchste Note. Die Top 5 hat einen anderen Intent.

## Korrekturen (Runde 1)
Stand 2026-10-08 · Korrektur-Agent · `node build.mjs` fehlerfrei (2.974 Wörter)

- **[hoch] Bewertungsanzahlen – erledigt:** alle drei gestrichen. Linje: „Neues Modell – Langzeiterfahrungen fehlen noch“; WINNIE: „Wandmontage vom Hersteller vorgeschrieben“ (laut Listing auch für die 80er-Variante, Feature entsprechend angepasst); Natura: „Angaben zur Zahl der Böden uneinheitlich“.
- **[mittel] Öko-Test-Datierung – erledigt:** bestätigt per oekotest.de – „ÖKO-TEST Magazin 8/2009“ (aktualisiert im Jahrbuch Kleinkinder 2010). Text korrigiert, Quelle ergänzt; auf /sideboard-kinderzimmer/ angeglichen.
- **[mittel] Ikea-Test – erledigt:** jetzt „ein komplett eingerichtetes Ikea-Kinderzimmer … Insgesamt schnitt die Raumluft mit ‚gut‘ ab, in den ersten Tagen dünsteten Kleiderschrank und Stuhl aber problematische Verbindungen aus“. Quellenlabel angepasst.
- **[mittel] Natura Böden – erledigt:** amazon.de-Listing widersprüchlich (4 bzw. „5 tiers“), Händler (galaxus/auchan) nennen 5 Böden + 2 Stangen. Überall „4–5 Böden (Angaben uneinheitlich)“ (Verdict, Features, Specs, Tabelle, Fließtext).
- **[gering] Garantie Linje – erledigt:** Quelle umgestellt auf Lidl-Markenseite („10-Jahre-Pinolino-Plus-Garantie auf das gesamte Sortiment“, Händlerangabe); babyartikel-Hope-Quelle entfernt.
- **[gering] Kannibalisierung – erledigt:** Kinderschrank ist jetzt die Hauptseite für Kippschutz: Guide „aufstellen-sichern“ um eine Wand-/Dübel-Tabelle (allgemeine Orientierung) und einen Absatz mit Links auf die Kippschutz-Abschnitte von Bücherregal und Sideboard erweitert. Callout-Satz „Beton, Ziegel, … brauchen unterschiedliche Befestigungen“ umformuliert; das Sideboard-FAQ wurde ersetzt. EN 14749 einheitlich „Aufbewahrungsmöbel für den Wohn- und Küchenbereich“. „Kippbeschläge im oberen Bereich“ als Faustregel mit Verweis auf die Montageanleitung formuliert.
- **[gering] HOCSOK/Spielzeugtruhe – erledigt:** EN 71-1 (Deckelhalter, Lüftungsöffnungen bei Truhen, in die ein Kind hineinpasst) mit Quelle Intertek (EN 71-1, 2026) ergänzt, für „Spielzeugtruhen, die als Spielzeug verkauft werden“.
- **[gering] Symbolbild Linje – nicht geändert:** `visuals.mjs` hat nur ein `wardrobe`-Motiv; Türanzahl ist dort nicht steuerbar (Aufgabe Illustrator).
