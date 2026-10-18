# Prüfbericht: kindertisch-mit-stuehlen

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig**

## Technik
- Build fehlerfrei, 2.918 Wörter. Chromium 1440/390 px: eine H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen. Die Symbolbilder (kidtable) werden angezeigt.

## ASIN-Prüfung (WebSearch, amazon.de)
- B078S7MD79 Bomi Amy – Titel passt, 79,99 €-Klasse (Tier 1 ok). Das Listing zeigt **4,2 Sterne bei 48 Bewertungen**, nicht „rund 2.800“. Die Zahl im Text ist also nicht einmal als Momentaufnahme haltbar (vermutlich über Varianten summiert). Eine andere Amy-Variante (B08THTFJ3N) nennt 40 kg statt 180 kg je Stuhl.
- B0CBRZYY91 roba Woody – Titel passt. In den Produktdetails steht aber die ASIN B0C3H2162B (Modell 450040HTP), also wohl ein Farbvarianten-Listing. Laut Listing „nur unter direkter Aufsicht eines Erwachsenen“.
- B08P54SXC8 Bubema Tisch + 2 Stühle weiß – in der Suche nicht auffindbar, nicht live prüfbar.
- Top 5 nicht einzeln geprüft (laut Recherche verweist B0H5JNKLLM roba Picknick for 4 auf B07QLZSVBS, Verfügbarkeit „begrenzt“).

## Korrekturaufträge
- [hoch] Bewertungsanzahlen und -schnitte im Text – products[0].features „Rund 140 Kundenbewertungen mit sehr gutem Schnitt …“, products[1].features „Rund 2.800 Kundenbewertungen …“, products[0].pros „Sehr gute Kundenbewertungen“, products[1].pros „Sehr große Bewertungsbasis“, products[2].verdict „… und hat bisher wenige Bewertungen“, products[2].cons „Wenige Bewertungen, …“ und editorial „… und sehr guten Kundenbewertungen“: alles streichen. Inhaltliches Kundenfeedback darf bleiben („laut Kundenberichten stabil“, „Schrauben müssen nachgezogen werden“). Die 2.800 sind zudem nachweislich falsch (Listing: 48) – zuständig: redakteur
- [hoch] criteria[3] „alltag“ und method – „Zahl und Tenor der Kundenbewertungen“ als Bewertungsgrundlage streichen bzw. durch „Tenor der Kundenberichte“ ersetzen. Die Noten in „alltag“ prüfen, falls sie auf der Bewertungsanzahl beruhen – zuständig: redakteur
- [mittel] products[1] Bomi – Bei „180 kg je Stuhl“ auf die gewählte Variante achten; eine andere Amy-Variante nennt 40 kg. Variante und Wert gegenprüfen, sonst „laut Listing bis 180 kg (andere Varianten abweichend)“ – zuständig: produkt-rechercheur
- [mittel] products[0] Bubema B08P54SXC8 – Das Listing ist per Suche nicht bestätigbar. Verfügbarkeit prüfen, sonst Alternative bzw. `query`. Der Rechercheur hat die Natur-geölt-Variante gesehen; laut Suchtreffer nennt Betten-ABC für das Wachs EN 71-3. Falls zutreffend, kann „Keine Normangabe zum Lack“ für die geölte Variante entfallen – zuständig: produkt-rechercheur
- [mittel] guide, Liste „Aufsicht“ – „roba weist darauf hin, Kinder unter 12 Monaten nicht unbeaufsichtigt zu lassen“ passt nicht zur Woody (ab 18 Monaten; laut Listing nur unter direkter Aufsicht Erwachsener). Klarstellen, auf welches Produkt sich der Hinweis bezieht, und für die Woody „nur unter Aufsicht eines Erwachsenen (Herstellerhinweis)“ ergänzen – zuständig: redakteur
- [gering] products[2].asin B0CBRZYY91 – In den Produktdetails steht B0C3H2162B. Prüfen, welche ASIN die Farbe Holzdekor/Taupe direkt öffnet – zuständig: produkt-rechercheur
- [gering] FAQ „Wie viel Platz braucht eine Kindersitzgruppe?“ – Die eigene Rechnung (50–60 cm Tisch + je 50 cm hinter beiden Stühlen + Stuhltiefe ca. 30 cm) ergibt eher rund 2 × 1 m, nicht 1,5 × 1 m. Zahl korrigieren oder die Herleitung erklären – zuständig: redakteur
- [gering] Duplicate: FAQ „Ab welchem Alter braucht ein Kind einen Kindertisch?“ und Kinderschreibtisch-FAQ „Ab wann braucht ein Kind einen Schreibtisch?“ sind thematisch nah, aber inhaltlich sauber abgegrenzt – ok. Keine Überschneidung über 1,4 %.

## In Ordnung
DIN EN 17191:2021 ist korrekt als einschlägige Norm genannt, EN 71-1/-3 nur als Herstellerangabe. Der Zara-Home-Rückruf ist mit CCPC und test.de belegt. Keine festen Preise. Altersangaben stammen nur vom Hersteller; die Bomi-Uneinheitlichkeit ist transparent. Platz 1 hat die höchste Note.

## Korrekturen (Runde 1)
- **Bewertungsanzahlen/-schnitte entfernt:** products[0].features (140 Bewertungen) durch Kundenbericht-Tenor ersetzt (Stabilität gelobt, Querstreben/Gewicht kritisiert); products[1].features (2.800) ebenso ersetzt; pros „Sehr gute Kundenbewertungen“ → „Lack nach EN 71-3 laut Anbieter“, „Sehr große Bewertungsbasis“ → „Laut Kundenberichten einfach aufzubauen“; Woody-verdict und -cons ohne „wenige Bewertungen“ (jetzt: Haltbarkeit laut Kundenberichten teils kritisiert); editorial-Absatz ohne „sehr guten Kundenbewertungen“.
- **criteria[3]/method:** „Zahl und Tenor der Kundenbewertungen“ → „Tenor der Kundenberichte“ (alltag: Montage, Lieferzustand, Stauraum, Tenor zu Haltbarkeit/Aufbau). **Noten geprüft:** Bomi alltag 8,0 → 7,5 (die 8,0 stützte sich auf die große Bewertungsbasis; Aufbau nötig, Schrauben lockern sich). Bubema und Woody unverändert.
- **Bubema B08P54SXC8:** per WebSearch wiedergefunden, Titel passt („… Kernbuche Weiß lackiert“), auf Lager (Verkauf/Versand Betten-ABC). Laut Listing ist der weiße Lack nach EN 71-3 als unbedenklich zertifiziert → „Keine Normangabe zum Lack“ ersetzt durch „Keine Prüfung nach DIN EN 17191 genannt“, specs.norm „EN 71-3 (Lack, Herstellerangabe)“, Normabsatz und Materialabsatz ergänzt; oberflaeche 8,5 → 9,0. Gesamt neu: Bubema 8,55 · Bomi 7,68 · Woody 7,63 – Platz 1 weiterhin höchste Note.
- **Bomi 180 kg:** Die 2-Stuhl-, 4-Stuhl- und Grau/Weiß-Listings nennen 180 kg; nur B08THTFJ3N (Grün/Natur) nennt im Feld 40 kg, in der Vergleichstabelle derselben Seite aber 180 kg. Text jetzt „laut Listing bis 180 kg“, Feature und specs mit Hinweis auf abweichende Variante.
- **roba Woody ASIN:** B0CBRZYY91 bleibt – der Titel nennt „Holzdekor und Taupe“; B0C3H2162B (450040HTP) ist das Sammel-Listing mit Farbangabe grau. Hinweis „nur unter direkter Aufsicht eines Erwachsenen“ in verdict und in die Aufsicht-Liste übernommen; der Hinweis „unter 12 Monaten“ ist nun ausdrücklich der Outdoor-Garnitur „Picknick for 4“ zugeordnet.
- **FAQ Platz:** Herleitung ergänzt, Ergebnis jetzt ca. 2 × 1 m; Guide-Absatz angeglichen.
- Zusätzlich: verbliebene Sie-Anrede (3 Stellen) auf Du umgestellt.
