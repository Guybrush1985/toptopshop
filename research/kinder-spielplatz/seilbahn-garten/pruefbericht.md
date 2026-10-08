# Prüfbericht: seilbahn-garten

Prüfer, Stand 2026-10-08. Ergebnis: **Korrektur nötig**

## Geprüft
- Build ok. Bei 1440 und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen, eine H1, JSON-LD ok, kein `aggregateRating`, beide SVGs vorhanden.
- Gewichte 0,35 + 0,25 + 0,2 + 0,2 = 1. Gesamtnoten: small foot 7,48 > Slackers 7,40 > KBT 6,88. 8 FAQs, `quick` je H2, Meta-Längen ok.
- CPSC-Rückruf Trsmima (Juli 2026, ca. 60.720 Kits und 19.120 Federbremsen, Seil, Spanner oder Sitz können sich lösen, zu schwache Bremsen) per Websuche gegen cpsc.gov bestätigt. Jugader 2024 ist im Research mit CPSC-Link belegt.
- DIN EN 1176-4 und EN 71 sind korrekt eingeordnet, belegt über DIN Media.
- ASINs per WebSearch (amazon.de):
  - B09WYZYX48 (small foot 11955): bestätigt, aktiv. Im Listing steht „ab 5 Jahren“ im Titel, in den technischen Daten aber „36 Monate bis 12 Jahre“.
  - B008CPDW9Q (KBT 24302): bestätigt, aktiv. Die Snippets nennen EN 71 und 8–12 Jahre, und **der Kunststoff-Schalensitz wird separat verkauft**.
  - B087SQMG93 (Slackers Eagle 980005): Das Produkt existiert auf amazon.de (Suchtreffer „14 Angebote ab 110,10 €“), aber die **ASIN ließ sich nicht live bestätigen**.

## Korrekturaufträge
1. **[hoch] Produkt 3 KBT: `specs.sitz: "Tellersitz"`, `top3Intro` („Alle drei … ein Tellersitz“), Tabelle und Karten**: Laut amazon.de-Listing ist der Sitz separat erhältlich. In `produkte.json` gibt es keinen Beleg für einen Sitz im Lieferumfang. Lieferumfang prüfen. Bestätigt sich das, `sitz` auf „nicht im Lieferumfang (separat)“ setzen, im `top3Intro` die Aussage „alle drei mit Tellersitz“ korrigieren, einen Nachteil „Sitz muss extra gekauft werden“ ergänzen und die Preis-Leistungs-Begründung sowie die Bewertung `ausstattung` überprüfen. – produkt-rechercheur, redakteur
2. **[mittel] Produkt 2 Slackers: `priceTier: 3` („über 250 €“)**: Die amazon.de-Suchtreffer zeigen Angebote ab ca. 110 €. Laut Research ist die Preisklasse nur geschätzt. Neu einordnen (vermutlich Klasse 2). Ist Slackers dann nicht mehr teurer als small foot, das Label „Premium-Wahl“ ändern, etwa in „Beste Wahl für größere Kinder“, und den Nachteil „Höchste Preisklasse im Vergleich“ anpassen. ASIN B087SQMG93 erneut bestätigen. – produkt-rechercheur, redakteur
3. **[niedrig] Produkt 1 small foot, Altersangabe**: Das Listing ist widersprüchlich (Titel „ab 5 Jahren“, Datenblatt 3–12 Jahre). Das Fazit „niedrigste Altersfreigabe“ bleibt vertretbar. Ergänzen: „Altersangaben im Listing uneinheitlich, wir nennen die vorsichtigere“. – redakteur
4. **[niedrig] Kaufkriterien › „Bremse und Endpuffer“ und Callout „Keine Seilbahn ohne Endbremse“**: „Komfortabler und sicherer ist eine Spiral-Bremsfeder“ ist eine Wertung ohne Quelle. Entweder als redaktionelle Einschätzung kennzeichnen oder mit einer Quelle belegen (z. B. Hersteller- bzw. Zubehörangaben von KBT oder Klingl). – redakteur
5. **[niedrig] Produkt 2 `pros` „Bekannte Outdoor-Marke, Vertrieb über Schildkröt“**: Der Vertrieb über Schildkröt sollte in `produkte.json` mit Quelle stehen. Ohne Beleg streichen. – produkt-rechercheur

## Korrekturen (Runde 1)
Stand 2026-10-08, `node build.mjs` fehlerfrei.
1. **Erledigt.** amazon.de-Listing B008CPDW9Q bestätigt erneut: Kunststoff-Schalensitz wird separat verkauft. `sitz` → „nicht im Lieferumfang (separat)“, Feature und Nachteil „Sitz nicht im Lieferumfang – muss extra gekauft werden“ ergänzt, `top3Intro`, `answer`, Fließtext, `quick` und Karten angepasst. Bewertung `ausstattung` 6,5 → 5,5 (Gesamt 6,68). Preis-Leistungs-Rolle bleibt bei KBT (günstigste Basis, auch mit Sitz nach unserer Einschätzung am preiswertesten), im Verdict transparent gemacht.
2. **Erledigt.** Slackers Eagle: Preise ca. 110–160 € (amazon.de-Suchtreffer laut Prüfer, eBay.de-Händler 159,95 €) → `priceTier: 2`. Damit nicht mehr teurer als small foot: Label „Premium-Wahl“ → „Beste Wahl für größere Kinder“, Nachteil „Höchste Preisklasse“ ersetzt. Gemäß Rollenreihenfolge (Platz 2 Preis-Leistung, Platz 3 Spezialrolle) Plätze getauscht: Platz 2 KBT, Platz 3 Slackers; alle `produkt:`-Links, `#platz-`-Anker, Karten und Diagramm-Alt-Text angepasst. Platz 1 small foot (7,48) hat weiterhin die höchste Note (Slackers 7,40, KBT 6,68). ASIN B087SQMG93 ließ sich per WebSearch nicht erneut bestätigen (Produkt auf amazon.de auffindbar, aber keine /dp/-URL im Treffer) → `asin` entfernt, nur `query`; amazon.de-Link aus `sources` entfernt.
3. **Erledigt.** small foot: Feature ergänzt „Altersangaben im Listing uneinheitlich, Datenblatt nennt 3–12 Jahre – wir nennen die vorsichtigere“.
4. **Erledigt.** Bremsfeder-Wertung als redaktionelle Einschätzung gekennzeichnet (Kaufkriterien, Callout, Aufbau-Abschnitt) und auf Bremsfedern als Zubehör bzw. im Komplettset bei KBT und Klingl verwiesen.
5. **Erledigt.** Pro „Bekannte Outdoor-Marke, Vertrieb über Schildkröt“ gestrichen, `brand` auf „Slackers“ gesetzt (Vertrieb nur indirekt belegbar, siehe `offen` in `produkte.json`).
