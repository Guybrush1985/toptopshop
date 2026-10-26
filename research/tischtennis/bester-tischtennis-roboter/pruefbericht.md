# Prüfbericht: /bester-tischtennis-roboter/

Stand: 2026-10-26 · Prüfer · Ergebnis: **Korrektur nötig**

## Geprüft
- Build `node build.mjs` fehlerfrei (3.305 Wörter, 9 FAQs, Top 5 vollständig, `quick` in allen H2-Abschnitten).
- Meta: Title 55, Description 161 Zeichen. Gewichte Summe 1,00. Gesamtnoten 8,40 / 6,25 / 7,58 → Platz 1 höchste.
- Keine Preise, Sternzahlen oder Bewertungszahlen im Text (nur Preisklassen). Keine Amazon-Bilder.
- Darstellung 1440/390 px (Playwright): genau eine H1, kein horizontales Scrollen, keine Konsolenfehler, keine 404, JSON-LD parsebar, alle internen Links erreichbar, Affiliate-Links mit `rel="sponsored"`. Symbolbild `ttrobot` korrekt.
- ASIN-Gegenprüfung per WebSearch (amazon.de): B0CTXY6NVQ (PONGBOT Nova S Pro) ✔, B0CVWQW2DX (OMNI S Pro) ✔, B0D31G7J2P (Bundle) ✔, B0BMG91LLK (JOOLA 21128 Fangnetz) ✔, B08RKLPTCX (Buddy V200) ✔.

## Befunde
1. **[Hoch]** Platz 1, `products[0].asin: "B0CFL8M9PT"` – Listing per WebSearch (amazon.de, auch mit Modellname) nicht mehr auffindbar; ein britischer Händler (tennisnuts.com) führt den Amicus Start laut Suchergebnis als „discontinued“. Platz 1 kann damit auf ein inaktives Listing zeigen. – **Auftrag:** aktives amazon.de-Listing für den Amicus Start bestätigen. Wenn das nicht gelingt: `asin` entfernen, `query` belassen und dem Nutzer melden – oder Platz 1 neu besetzen (z. B. PONGBOT Nova S Pro als Gesamtwahl, Rollen/Noten anpassen). Diese Entscheidung trifft der Orchestrator. – zuständig: produkt-rechercheur
2. **[Hoch]** Platz 2, `products[1].asin: "B08T845HCB"` – Variantenlisting bestätigt: Die englische Ansicht heißt „Joola Buddy V200 Table Tennis Robot – Green“, der Beschreibungstext spricht vom „JOOLA iPong V200“ mit 12–70 Bällen/min. Nur der deutsche Titel nennt „iPong V300“. Top 5 Nr. 3 verlinkt B08RKLPTCX = Buddy V200, also führen Platz 2 und Top 5 wahrscheinlich zum selben Gerät. – **Auftrag:** eine eindeutige V300-ASIN suchen. Gibt es keine: `asin` entfernen (`query: "JOOLA iPong V300"`) und melden. Top 5 Nr. 3 durch ein Produkt mit eigenem Suchintent ersetzen oder klar vom V300 abgrenzen. – zuständig: produkt-rechercheur
3. **[Mittel]** Top 5 Nr. 2, `asin: "B07DW8CX4C"` (Butterfly Amicus Expert) – per WebSearch nicht auffindbar; laut Research Dropship-Verkäufer mit wenigen Bewertungen. – **Auftrag:** ein aktives Listing bestätigen. Sonst `asin` entfernen (nur `query`) oder das Produkt ersetzen. – zuständig: produkt-rechercheur
4. **[Mittel]** FAQ „Welche Bälle braucht man …“: „Unsere drei Empfehlungen nehmen 40+-Bälle an.“ und guide `facts`: „40+ – Ballstandard, den alle drei Empfehlungen annehmen“ – Für den Nova S Pro gibt es in `produkte.json` keinen Beleg. – **Auftrag:** Beleg nachtragen ODER Text ändern: FAQ → „Amicus Start und iPong V300 nehmen laut Hersteller 40+-Bälle an; für den Nova S Pro nennt das Listing keine Ballsorte.“ Facts-Label → „Ballstandard der Amicus- und JOOLA-Roboter (Herstellerangabe)“. – zuständig: produkt-rechercheur / redakteur
5. **[Niedrig]** editorial `bester-tischtennis-roboter`, 2. `p`: „nutzt laut Butterfly das gleiche 3-Rad-Kopfdesign wie der teurere Amicus Prime“ – Die Quelle ist der Händlerbericht von Megaspin, nicht Butterfly. – **Auftrag:** „laut Butterfly“ → „laut dem Händlerbericht von Megaspin“. – zuständig: redakteur
6. **[Niedrig]** Platz 2 `cons[1]` und Kaufkriterien-Absatz – Die Käuferkritik (Oszillation, Fernbedienung, Mindesttempo) stammt aus Rezensionen am Buddy-V200-Listing. – **Auftrag:** „Käufer berichten …“ → „Käufer der JOOLA-Kleinroboter (iPong/Buddy) berichten …“. – zuständig: redakteur
7. **[Niedrig]** editorial: „Ältere Robo-Pong-Modelle … wegen schwacher Käuferresonanz“ – Das stützt sich auf vom Scout genannte, nicht nachgeprüfte Sternwerte. – **Auftrag:** → „wegen gemischter Käuferberichte und unklarer Verfügbarkeit“. – zuständig: redakteur
8. **[Niedrig]** Platz 1 `specs.gewicht: "keine Angabe"` – Die Bedienungsanleitung (megaspin.net, PDF) nennt ca. 6 kg. – **Auftrag:** prüfen und „ca. 6 kg (Bedienungsanleitung)“ eintragen. Nur relevant, wenn das Produkt bleibt (Befund 1). – zuständig: produkt-rechercheur
9. **[Niedrig]** Top 5 Nr. 5 ist derselbe Nova S Pro wie Platz 3, nur als Bundle. Der eigene Suchintent ist schwach. – **Auftrag:** optional durch ein eigenständiges Produkt ersetzen. – zuständig: produkt-rechercheur

## Runde 2 (2026-10-26)

Ergebnis: **bestanden** (zwei kleine Text-Hinweise, ein Prüfhinweis)

- Top 3 neu: Platz 1 PONGBOT Nova S Pro (B0CTXY6NVQ), Platz 2 JOOLA Buddy V200 (B08RKLPTCX), Platz 3 PONGBOT OMNI S Pro (B0CVWQW2DX). Alle drei per WebSearch (amazon.de) erneut bestätigt. Die Titel passen (Nova S Pro: 264 Übungen, Lieferumfang „Nova S Pro, N Control S“; Buddy V200: Teilenummer 21127; OMNI S Pro: Netz, E-Pad S, 396 Ballbahnen). Kein Listing ist als „derzeit nicht verfügbar“ markiert.
- Top 5: B07SPC8PQQ (Robo-Pong 545 inkl. Versa-Netz) ✔. B08RZW7P1T (Buddy Pro V300 & Fangnetz, Set-Listing) ✔. B0BMG91LLK und B0D31G7J2P ✔ (aus Runde 1). **B07BZWQTGF (Robo-Pong 3050XL)** war in Runde 2 mit drei Suchanfragen nicht als Treffer zu reproduzieren. Die Research nennt einen /dp/-Treffer mit passendem Titel, deshalb ist das kein Blocker (siehe Hinweis 1).
- Keine Reste der alten Top 3: Amicus Start und iPong V300 kommen nur noch als Begründung für die Herausnahme (Methodik, Editorial) bzw. als Anleitungsquelle („verwandter Kompaktroboter“) vor. Antwort, Quick-Blöcke, Karten, FAQ, Tabelle, Diagramm-Alt und Caption sind konsistent mit der neuen Top 3.
- Befunde aus Runde 1 erledigt: 1 und 2 (Produkte ersetzt), 3 (Amicus Expert ersetzt), 4 (40+ jetzt über das Bundle-Listing belegt, FAQ und Facts angepasst), 5–7 (Text korrigiert). 8 ist entfallen. 9 bleibt bewusst so (begründet in `produkte.json`, `offen`).
- Noten: 7,575 / 5,85 / 7,55. Platz 1 ist am höchsten (knapp, begründet). Gewichte Summe 1. Meta 55/161 Zeichen. 9 FAQs. Keine Preise, Sterne oder Bewertungszahlen.
- `node build.mjs` fehlerfrei. Darstellung 1440/390 px: genau eine H1, kein Überlauf, keine Konsolenfehler oder 404, JSON-LD parsebar.

Hinweise:
1. **[Niedrig]** Top 5 Nr. 1 `asin: "B07BZWQTGF"` – in Runde 2 per WebSearch nicht reproduzierbar. – **Auftrag:** vor dem Push einmal im Browser öffnen. Ist das Listing nicht aktiv: `asin` entfernen und nur `query` behalten. – zuständig: produkt-rechercheur
2. **[Niedrig]** Platz 1 `pros[1]`: „Viele Stufen für Tempo, Spin und Frequenz; Oszillation“ – für die Oszillation gibt es in `produkte.json` keinen Beleg. – **Auftrag:** → „Viele Stufen für Tempo, Spin und Frequenz (Herstellerangabe)“. – zuständig: redakteur
3. **[Niedrig]** Kaufkriterien-Tabelle, Zeile Robo-Pong 545: „Seitenschnitt per Handverstellung, wenig Programme“ – belegt ist nur die manuelle Ausrichtung per AIM auf drei Zonen. – **Auftrag:** → „Kopf per Hand ausrichten (AIM), keine Übungsprogramme angegeben“. – zuständig: redakteur
