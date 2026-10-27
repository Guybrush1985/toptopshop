# Prüfbericht: /beste-tischtennisplatten-abdeckhuelle/

Stand: 2026-10-26 · Prüfer · Ergebnis: **Korrektur nötig**

## Geprüft
- Build fehlerfrei (3.295 Wörter, 8 FAQs, Top 5 vollständig, `quick` in allen H2-Abschnitten).
- Meta: Title 53, Description 164 Zeichen. Gewichte 1,00. Gesamtnoten 8,30 / 7,08 / 8,22 → Platz 1 höchste.
- Keine Preise, Sterne oder Bewertungszahlen. Indoor/Outdoor-Warnung korrekt belegt.
- ASINs per WebSearch: B0014D6RAO (KETTLER Premium grau, Polyester, Reißverschluss, 150 × 160 × 80/25) ✔, B0B936BWVH (JOOLA 19901, 274 × 137 × 0,3 cm) ✔, B0CL6FZGYH (Cornilleau Premium+, Modell 201906) ✔, B0FV2YNNLZ (Kettler Basic) ✔.
- Darstellung 1440/390 px fehlerfrei. Symbolbild `ttcover` erkennbar, wirkt aber eher wie ein Kleidersack (siehe Befund 4).

## Befunde
1. **[Mittel]** Platz 2 JOOLA 19901 (B0B936BWVH) in den Top 3: Die Käuferbewertung liegt auf amazon.de bei rund 3,5 von 5 bei ca. 1.600 Bewertungen, mit wiederkehrenden Rissen und nachlassendem UV-Schutz. Mit 274 × 137 cm ist die Hülle schmaler als die Spielfläche (152,5 cm). Das Listing beschreibt sie außerdem als Universalgröße für 9 × 5 ft und u. a. für die Aufbewahrungsposition. Die Rolle „flache Abdeckung“ ist eigenständig und der Text ehrlich – als Top-3-Empfehlung ist das aber nur knapp vertretbar („Fokus auf Produktqualität“). – **Auftrag (Entscheidung Orchestrator):** Empfehlung: JOOLA 19901 in die Top 5 verschieben (als „Platte bleibt aufgeklappt“) und Platz 2 mit einer günstigeren Haube als „Bestes Preis-Leistungs-Verhältnis“ besetzen (Kandidat Donic-Schildkröt 828530, B001L1R8PM; vorher Material- und Maßwidersprüche klären). Bleibt sie auf Platz 2: pros/editorial „die auch die flache Spielfläche abdeckt“ → „die auch auf die flache Platte gelegt werden kann (deckt die Spielfläche nicht ganz ab)“. – zuständig: produkt-rechercheur / redakteur
2. **[Niedrig]** guide „Kondenswasser vermeiden“: „Keine der von uns geprüften Hüllen …“ und FAQ „Wie verhindert man Kondenswasser“: „Die von uns geprüften Hüllen …“ – klingt nach eigenem Test. – **Auftrag:** → „Keine der Hüllen in unserem Vergleich …“ bzw. „Die Hüllen in unserem Vergleich …“. – zuständig: redakteur
3. **[Niedrig]** `sources`: sechs amazon.de-Links ohne Partner-Tag und ohne `sponsored`. – **Auftrag:** optional entfernen, die Produkte sind bereits verlinkt. – zuständig: redakteur
4. **[Niedrig]** Symbolbild `ttcover`: Die Silhouette mit Reißverschluss und Henkel wirkt wie ein Kleidersack oder Koffer. – **Auftrag:** optional die Plattenkante bzw. Netzpfosten-Ausbuchtung oben andeuten oder das Henkel-Rechteck entfernen. – zuständig: illustrator

## Runde 2 (2026-10-26)

Ergebnis: **bestanden** (kleine Hinweise)

- Platz 2 jetzt KETTLER Basic (B0FV2YNNLZ): per WebSearch (amazon.de) erneut bestätigt – „KETTLER Table Tennis Cover Basic Weatherproof UV-Resistant and Robust“, 100 % HDPE, 150 × 160 × 55–80 cm, Klett, Modell k_cover_basic_black. Das Listing ist aktiv (mit Preis, nicht als nicht verfügbar markiert).
- JOOLA 19901 (B0B936BWVH) steht jetzt in der Top 5 als „Flache Variante – mit Einschränkungen“. Das Listing ist bestätigt. Die Einschränkung 137 cm < 152,5 cm ist im Editorial, in der Ausmess-Anleitung und im Top-5-Text konsistent beschrieben. Im Top-3-Text, in der Antwort, den Karten, der FAQ, dem Diagramm-Alt und der Meta-Description steht die JOOLA 19901 nicht mehr als Top-3-Produkt.
- Befunde aus Runde 1 erledigt: 1 (umgesetzt wie empfohlen, Kettler Basic statt Donic 828530), 2 („in unserem Vergleich“), 3 (Amazon-Quellenlinks entfernt). 4 (Symbolbild) war optional.
- Noten: 8,30 / 7,10 / 8,225. Platz 1 ist am höchsten. Gewichte Summe 1. Meta 53/158 Zeichen. 8 FAQs. Keine Preise, Sterne oder Bewertungszahlen.
- `node build.mjs` fehlerfrei. Darstellung 1440/390 px fehlerfrei (eine H1, kein Überlauf, JSON-LD ok, keine 404).

Hinweise:
1. **[Niedrig]** Kettler Basic, „für drinnen und draußen“ als Herstellerangabe: In `produkte.json` steht das nur als Händlerangabe (amazon.de). Die Kettler-Herstellerangabe nennt es nicht. – **Auftrag:**
   - `features[1]`: „100 % HDPE, UV-beständig in stabilisierter Ausführung, für drinnen und draußen (Herstellerangabe)“ → „100 % HDPE, UV-beständig in stabilisierter Ausführung (Herstellerangabe), laut Listing für drinnen und draußen“
   - `pros[2]`: „Für drinnen und draußen freigegeben (Herstellerangabe)“ → „Für drinnen und draußen freigegeben (laut Listing)“
   - Callout: „die Kettler Basic ist laut Hersteller für drinnen und draußen gedacht“ → „die Kettler Basic ist laut Listing für drinnen und draußen gedacht“
   – zuständig: redakteur
2. **[Niedrig, optional]** Platz 2 `label: "Bestes Preis-Leistungs-Verhältnis"` – liegt in derselben Preisklasse (€€) wie die höher bewertete Cornilleau Premium+ (Platz 3). Das Label gilt nur unter den Universalhauben. – **Auftrag:** optional → „Günstigere Universalhaube“. – zuständig: redakteur
