# Prüfbericht: aufblasbare-wasserrutsche

Prüfer, Stand 2026-10-08. Ergebnis: **Korrektur nötig** (kleinere Korrekturen)

## Geprüft
- Build ok. Bei 1440 und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen, eine H1, JSON-LD ok, kein `aggregateRating`, beide SVGs vorhanden.
- Gewichte 0,3 + 0,3 + 0,2 + 0,2 = 1. Gesamtnoten: Hurricane 7,95 > Splash Course 7,85 > Beach Bounce 7,20. 7 FAQs, `quick` je H2, Meta-Längen ok.
- Schadstoff-Hintergrund (VZ NRW/test.de, Öko-Test 07/2014 und 2015) ist als „laut Berichten“ gekennzeichnet und klar von den Produkten abgegrenzt. Das ist in Ordnung.
- Kein Duplicate Content mit `huepfburg`. Gleich ist nur der Methodik-Standardsatz. Gebläse- und Windhinweise sind eigenständig formuliert.
- ASINs per WebSearch (amazon.de):
  - B08CBG5YTY (Splash Course 53387): bestätigt. Max. Fallhöhe 145 cm, kritische Fallhöhe 172 cm.
  - B0FRNDQXLF (Beach Bounce): bestätigt, Werte passen (3–8 Jahre, 5 Kinder, 227 kg, 45 kg je Kind). In den technischen Daten wird allerdings die ältere ASIN B08CBGRZ62 genannt.
  - B07FKJMMP9 (Hurricane 53303): bestätigt. **Das Listing nennt max. Fallhöhe 142 cm und kritische Fallhöhe 167 cm.** Eine Kopie des Listings zeigte „Derzeit nicht verfügbar“, Status also unklar.

## Korrekturaufträge
1. **[mittel] Produkt 1 Hurricane `features`/`specs.fallhoehe` „max. Fallhöhe 167 cm“ und editorial › 1. Abschnitt („beim Hurricane sind es 167 cm, beim Splash Course 145 cm“)**: Hier werden kritische und maximale Fallhöhe vermischt. Laut Listing beträgt die max. Fallhöhe beim Hurricane 142 cm (kritisch 167 cm), beim Splash Course 145 cm (kritisch 172 cm). Werte einheitlich als „max. Fallhöhe“ angeben, also 142 cm. `produkte.json` korrigieren. – produkt-rechercheur, redakteur
2. **[mittel] Produkt 1 Hurricane, Verfügbarkeit B07FKJMMP9**: Im Browser prüfen, ob das Listing aktiv ist. Ist es nicht verfügbar, eine aktive ASIN suchen oder das Ranking anpassen. – produkt-rechercheur
3. **[niedrig] Ansprache**: Die Seite siezt („Halten Sie sich …“, „holen Sie die Kinder heraus“, „Verwenden Sie …“, „Wenn Sie unsicher sind …“, „lassen Sie …“, „Den Rasen schonen Sie …“). Die übrigen Kategorien und Bereichstexte duzen („achte“, „deine Gemeinde“). Auf Du vereinheitlichen. – redakteur
4. **[niedrig] Produkt 2 und 3 `cons` „Bislang wenige Kundenbewertungen“ bzw. „… wenige Kundenbewertungen“**: Bewertungsanzahlen gehören nicht in den Text. Streichen oder ersetzen durch „noch wenig Erfahrungsberichte zur Haltbarkeit“. – redakteur
5. **[niedrig] Top 5 Intex 56167NP (B0CG6613KV)**: Laut Research wurde einmal „derzeit nicht verfügbar“ angezeigt. Verfügbarkeit prüfen und gegebenenfalls die im Research genannte Alternative nehmen. – produkt-rechercheur

## Korrekturen (Runde 1)
Korrektur-Agent, 2026-10-08. `node build.mjs` läuft fehlerfrei.

1. **Fallhöhe Hurricane (erledigt, gegenstandslos).** Bestätigt sind max. 142 cm und kritisch 167 cm. Ich habe das in `produkte.json` korrigiert, der Hurricane steht aber wegen Punkt 2 nicht mehr auf der Seite. Im Text wird jetzt nur noch die max. Fallhöhe genannt (Beach Bounce 35 cm, Splash Course 145 cm).
2. **Verfügbarkeit Hurricane (erledigt, ersetzt).** B07FKJMMP9 zeigt auch in meiner Suche „Currently unavailable“, der Hurricane ist deshalb raus. Ersatz ist der **Bestway H2OGO! Turbo Splash 53301 (B07FKG9W8G)**. Er hat dieselbe Bedienungsanleitung (53301/53303) und dasselbe 520-W-Gebläse mit GS-Zeichen, ist für 5–10 Jahre, Kinder bis 152 cm und 270 kg ausgelegt und hat Rutsche, Kletterwand, Wasserkanone und Turm mit Netz. Ein Snapshot zeigt Lieferung am 9./10.10. Bewertung 7,5 / 8,0 / 7,5 / 7,0, das ergibt 7,55. Damit hat jetzt der **Splash Course (7,85)** die höchste Note und steht auf **Platz 1** (Beste Gesamtwahl). Platz 2 bleibt die Beach Bounce (7,20), Platz 3 ist der Turbo Splash („Für mittelgroße Gärten“). Angepasst sind `answer`, Abschnitt 1, Kaufkriterien, Karten, Alt-Text und Caption, FAQ Alter, Top-5-Text Mount Splashmore und `sources`.
3. **Du-Form (erledigt).** Alle Sie-Formen sind auf Du umgestellt: „Halte dich“, „Lass … auslüften“, „hol die Kinder heraus“, „Verwende“, „Wenn du unsicher bist, frag“, „schick“, „Den Rasen schonst du“, „lässt du … ab“.
4. **„Wenige Kundenbewertungen“ (erledigt).** Bei Beach Bounce steht jetzt „Noch wenig Erfahrungsberichte zur Haltbarkeit“, beim Splash Course ist der Zusatz gestrichen.
5. **Intex 56167NP (erledigt, ersetzt).** B0CG6613KV ist „derzeit nicht verfügbar“. Die Alternative aus der Recherche, die Tsunami Splash Ramp, wäre eine Doublette zur Single 488 cm und hat Nahtprobleme. Eingesetzt habe ich deshalb die **Bestway H2OGO! Doppel-Wasserrutsche mit Startrampe 549 cm (B0CB8Q7NVS, Modell 52255, bis 100 kg)**. Die FAQ zum Dauergebläse ist angepasst.

Offen: Beim Turbo Splash sind die Snapshots widersprüchlich (lieferbar bzw. nicht verfügbar), das bitte vor der Veröffentlichung im Browser bestätigen. Eine Fallhöhe für den Turbo Splash habe ich nicht gefunden, auf der Seite steht „keine Angabe im Listing“.
