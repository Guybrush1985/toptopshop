# Prüfbericht spielhoehle (2026-10-08)

**Ergebnis: Korrektur nötig**

Technik: Build ok; 1440/390 px ohne Konsolenfehler/404/horizontales Scrollen, eine H1, JSON-LD ok, kein AggregateRating, Meta 59/139. Platz 1 höchste Note (8,0 vs. 7,95 vs. 7,1). Keine festen Preise, keine Sternebewertungen im Text.

## Korrekturaufträge
- [hoch] products[2] Moi Mili (B0DMXB8DLP) – amazon.de-Treffer: Listing „derzeit nicht verfügbar, unbekannt ob wieder lieferbar“ und Farbe laut Beschreibung **Fuchsrot**, nicht Beige. Name „Classic Tipi Zelt Beige“ passt nicht zur ASIN; Premium-Platz damit nicht kaufbar. Aktive Beige-ASIN suchen oder Platz 3 neu besetzen (z. B. aus `verworfen` prüfen); bei Neubesetzung ratings/Texte/Figuren anpassen. – produkt-rechercheur, danach redakteur
- [mittel] top5 TikTakToo „Spielhaus aus Pappe Ritter“ (B015OOM2LG) – per Suche nicht auffindbar, Research meldet „zeitweise nicht verfügbar“. Verfügbarkeit prüfen; sonst ersetzen (gefunden: TikTakToo Pappspielhaus zum Bemalen 106 × 84 × 110 cm B0DPL6WHMV oder small foot Ritterburg „Avalon“ 9970 B001FR9UAI) und Text anpassen. – produkt-rechercheur
- [mittel] editorial kaufkriterien „Stoff und Schadstoffe“ + guide „Pflege“ – „Laut Berichten haben ältere Untersuchungen … Lösungsmittel, problematische Farbstoffe oder PVC“ stammt aus einem Öko-Test ohne Heft/Quelle auf der Seite; die einzige zitierte Quelle (Miljøstyrelsen 2005) fand vor allem Formaldehyd-Ausgasung. Entweder Öko-Test mit Heft belegen oder Satz auf „Eine Untersuchung der dänischen Umweltbehörde (2005) maß in den ersten Nutzungsstunden erhöhte Formaldehyd-Ausgasungen“ reduzieren. – redakteur
- [mittel] Karte „Höhle zum Schaukeln“ + related schaukeltuch – Text „Hängende Stoffhöhlen und Schaukeltücher für die Decke“ / Label „Schaukeltücher“ widerspricht der Schaukeltuch-Seite, die elastische Schaukeltücher ausdrücklich nicht empfiehlt. Ändern in „Hängesitze und Hängehöhlen statt Schaukeltuch“. – redakteur
- [niedrig] Little Dutch Pop-up – Listing-Warnhinweis „nicht für Kinder unter 18 Monaten“ ergänzen (Altersangabe „ab 2 Jahren“ bleibt). – redakteur
- [niedrig] products[2].specs.bauform „Tipi, 5 Wände“ – nicht in produkte.json belegt; belegen oder streichen. – produkt-rechercheur
- [niedrig] welche-spielhoehle-passt: „Für die Kleinsten reicht eine Decke über zwei Stühlen – unter Aufsicht“ – ok, aber Hinweis „keine losen Decken bei Babys“ wäre konsistenter; optional. – redakteur

## ASIN-Stichprobe
B0BGC5L1V9 PINOLINO Yuma ✔ (Warnhinweis Strangulation bestätigt) · B0DX1WJ1PM Little Dutch ✔ · B0DMXB8DLP ✘ (s. o.) · B0BGC43DDF Yuma Spielzelt ✔ · B079ZM4PCW Jakara ✔ · B015OOM2LG nicht auffindbar.

## Korrekturen (Runde 1)
- [hoch] Moi Mili (B0DMXB8DLP): keine aktive Beige-ASIN auf amazon.de gefunden (nur Fuchsrot, „derzeit nicht verfügbar“). Weitere Kandidaten geprüft und verworfen (JaBaDaBaDo K041: widersprüchliches Listing; roba/Wigiwama/Done by Deer u. a.: kein amazon.de-Tipi gefunden; Hakuna Matte nicht verfügbar). **Platz 3 neu: small foot (Legler) Wigwam Indianerzelt, B000KHRI6C** (aus Top 5 hochgezogen, Listing in der Stichprobe ✔), Rolle „Höchstes Tipi für drinnen & draußen“, ratings 7,0/7,0/6,5/6,5 → 6,8 (Platz 1 bleibt 8,0, Platz 2 7,1). answer, Quick-Antworten, Fließtext, Karte, Figuren-Alt/Caption, Pflege/Boden-Text, FAQ (Waschen, Platzbedarf) und Quellen angepasst; Moi Mili in `verworfen`. Preisklasse 1 geschätzt (Preis nicht live geprüft).
- [mittel] TikTakToo ersetzt durch small foot 10016 Spielhaus Traktor aus Bastelkarton (B01B38LLU0, Titel eindeutig, Warnhinweis „nicht unter 36 Monaten“ übernommen). Freier Top-5-Platz (Wigwam) mit Knorrtoys 55102 Spieltunnel Bunt (B08VDTDCQR) belegt; Intro angepasst. Avalon 9970 (nicht verfügbar) und small foot 10015/10018 (widersprüchliche Listings) verworfen.
- [mittel] Öko-Test-Satz („laut Berichten … Lösungsmittel, Farbstoffe, PVC“) auf die belegte Miljøstyrelsen-Untersuchung 2005 (Formaldehyd-Ausgasung) reduziert; Pflege-Absatz ebenso.
- [mittel] Karte und related schaukeltuch: „Hängesitze und Hängehöhlen statt Schaukeltuch“.
- [niedrig] Little Dutch: Warnhinweis „nicht für Kinder unter 18 Monaten“ ergänzt; Pro „Günstigstes Modell der Top 3“ → „Preiswert für eine Markenhöhle“ (Wigwam-Preis nicht geprüft).
- [niedrig] „Tipi, 5 Wände“ entfällt mit Moi Mili.
- [niedrig] Hinweis „ohne lose Decken oder Kissen bei Babys“ ergänzt.
- Build `node build.mjs` fehlerfrei.
