# Prüfbericht: sideboard-kinderzimmer

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig**

## Technik
- Build fehlerfrei, 3.135 Wörter. Chromium 1440/390 px: eine H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen.
- **Darstellungsfehler:** Das Marken-Badge im Symbolbild von Platz 1 und 3 ist abgeschnitten („…INDER – DAS GESUNDE KINDERZIM…“), weil `brand: "BioKinder – Das gesunde Kinderzimmer"` zu lang ist (Screenshot sb-fig-1440.png im Scratchpad).

## ASIN-Prüfung (WebSearch, amazon.de)
- B0DK8XV26K COSTWAY 106 × 30 × 62 – Titel passt, aktiv, Kippschutz laut Listing vorhanden.
- B00JLXTZ9O BioKinder Lina Kommode 110 × 90 × 55 – Titel passt, **Listing „Derzeit nicht verfügbar“, kein Liefertermin bekannt** (die Variante B076M45B6B ebenfalls).
- B0854B83R5 BioKinder Laura Stufenkommode – in der Suche nicht auffindbar, nicht live prüfbar.
- Top 5, Stichprobe: B00RE34O6W Vipack Pino Kommode – Listing vorhanden, Daten passen; ob es lieferbar ist, war nicht erkennbar.

## Korrekturaufträge
- [hoch] products[2] BioKinder Lina Kommode (Premium-Wahl) – Das Listing ist derzeit nicht verfügbar. Laut CLAUDE.md eine aktive Alternative wählen, z. B. die vom Rechercheur genannte Pinolino Lumi extra breit (B09Z6H7NWC, vorher prüfen). Danach Texte, FAQ „Wickelkommode später als Sideboard“, Tabelle, Kennzahlen und Bewertung anpassen. Falls Lina bleiben soll, dem Nutzer melden – zuständig: produkt-rechercheur, danach redakteur
- [hoch] products[0] Laura (Platz 1) – Die ASIN B0854B83R5 ist per Suche nicht bestätigbar, der Preis ist unbelegt (priceTier 3 nur aus Serienpreisen abgeleitet). Verfügbarkeit und Preisklasse prüfen; wenn das nicht geht, Platz 1 neu bewerten – zuständig: produkt-rechercheur
- [mittel] products[0] Laura „Massivholz Erle, geölt“ (pros) und editorial „die Oberflächen sind laut Hersteller geölt“ – „Geölt“ ist nur für **andere** Laura-Teile belegt. Für die Stufenkommode streichen oder als „Laura-Serie laut Listing mit Öl/Wachs“ kennzeichnen – zuständig: redakteur
- [mittel] products[1].cons „Bisher wenige Bewertungen“ – Bewertungsanzahl streichen. „Aufbauanleitung laut einer Rezension unklar“ ist inhaltlich und darf bleiben – zuständig: redakteur
- [mittel] brand „BioKinder – Das gesunde Kinderzimmer“ (Platz 1 und 3) → „BioKinder“, damit das Badge nicht abgeschnitten wird – zuständig: redakteur
- [mittel] Guide „Was sagen Tests?“ – „Öko-Test prüfte 2009 Wickelkommoden“: um die Ausgabe ergänzen („ÖKO-TEST Magazin 8/2009“). Mit /kinderschrank/ angleichen, wo fälschlich 2010 steht – zuständig: redakteur
- [gering] Guide „kippschutz“ – Den Wayfair-Rückruf (CPSC, März 2026) mit der Primärquelle CPSC statt HealthDay belegen. Für den IKEA-Rückruf 2016 (Salzburg24) wäre die CPSC-Meldung belastbarer – zuständig: produkt-rechercheur
- [gering] Duplicate/Kannibalisierung mit /kinderschrank/ und /kinder-buecherregal/ – Die H2 „Wie sichert man ein Sideboard gegen Umkippen?“ und das FAQ „Wie sichert man eine Kommode gegen Umkippen?“ decken dieselbe Suchintention ab wie die Schwesterseiten. Das FAQ ist fast wortgleich mit dem Kinderschrank-Callout („Beton, Ziegel oder Gipskarton brauchen unterschiedliche Befestigungen“). FAQ umformulieren oder durch eine sideboard-spezifische Frage ersetzen (z. B. „Brauchen auch niedrige Kommoden einen Kippschutz?“) und für die Montage auf /kinderschrank/ verlinken. Die H2 „Worauf sollte man beim Kauf achten?“ ist wortgleich mit dem Bücherregal – um „eines Kinder-Sideboards“ ergänzen – zuständig: redakteur
- [gering] Symbolbild Laura – Es zeigt ein Sideboard mit 2 Türen und Fach; Laura ist eine Stufenkommode mit 1 Tür und 1 Schublade. Optional anpassen – zuständig: illustrator

## In Ordnung
Keine festen Preise und keine Sterne. EN 71 und EN 14749 sind korrekt abgegrenzt. GS/EN 14749 wird nicht behauptet. Rückrufe anderer Hersteller sind als solche gekennzeichnet und haben Quellen. Gewichte = 1, Platz 1 hat die höchste Note.

## Korrekturen (Runde 1)
Stand 2026-10-08 · Korrektur-Agent · `node build.mjs` fehlerfrei (3.317 Wörter)

**Top 3 neu (alle ASINs per WebSearch amazon.de bestätigt):**

| Platz | Produkt | ASIN | Note |
|---|---|---|---|
| 1 Beste Gesamtwahl | COSTWAY Kinderschrank 2 Schubladen & 2 Türen, 106 × 30 × 62 cm | B0DK8XV26K | 7,5 |
| 2 Bestes Preis-Leistungs-Verhältnis | SONGMICS Kinderregal mit Rollbox GKR041W10 (bisher Top 5) | B0CFQRXL7K | 7,0 |
| 3 Premium-Wahl | PINOLINO Wickelkommode Enno extrabreit, Buche massiv geölt | B0C37SG645 | 7,4 |

- **[hoch] Lina – erledigt (ersetzt):** Lina nicht verfügbar; vorgeschlagene Pinolino Lumi extra breit (B09Z6H7NWC) laut Suchtreffer ebenfalls „derzeit nicht verfügbar“. Ersatz: **PINOLINO Enno extrabreit** (B0C37SG645) – laut Suchtreffer lieferbar, verkauft von Amazon; massive Buche, 1 Tür + 3 Schubkästen, Soft-Close, abnehmbarer Wickelaufsatz, 141 × 52 × 100 cm, ca. 87 kg. Neue Bewertung (Höhe 5,0 / Sicherheit 7,5 / Material 9,5 / Alltag 8,5).
- **[hoch] Laura (Platz 1) – erledigt (Platz 1 neu besetzt):** B0854B83R5 weder über Produktnamen noch per direkter ASIN-Suche auffindbar, amazon.de direkt nicht erreichbar (Proxy 403), Preis unbelegt. Platz 1 jetzt COSTWAY (Sicherheit 7,5 → 8,0 wegen beiliegendem Kippschutz, leisen Scharnieren, abgerundeten Ecken). Ein Top-5-Platz geht an die belegte **BioKinder Laura Mini-Kommode** (B08L5QM1WJ, 80 × 40 × 46 cm, Kiefer massiv); dafür rückte SONGMICS GKR041W10 in die Top 3.
- **[mittel] „Geölt“ bei Laura – entfällt** (Laura nicht mehr in der Top 3).
- **[mittel] „Bisher wenige Bewertungen“ (COSTWAY) – erledigt:** gestrichen; „Aufbauanleitung laut einer Rezension unklar“ bleibt. Bewertungsfakt auch aus produkte.json entfernt.
- **[mittel] Brand-Badge „BioKinder – Das gesunde Kinderzimmer“ – entfällt:** keine BioKinder-Produkte mehr in der Top 3 (Brands jetzt COSTWAY, SONGMICS, PINOLINO).
- **[mittel] Öko-Test – erledigt:** „ÖKO-TEST prüfte im Magazin 8/2009 zehn Wickelkommoden“, Quellenlabel angepasst; mit /kinderschrank/ angeglichen.
- **[gering] Rückruf-Quellen – erledigt:** HealthDay und Salzburg24 durch CPSC-Primärquellen ersetzt (IKEA-Rückruf Juni 2016; 17 Stories, Rückruf 26-323 vom 12.03.2026, ca. 3.000 Stück, verkauft über Wayfair.com).
- **[gering] Kannibalisierung – erledigt:** H2 jetzt „Brauchen auch niedrige Sideboards einen Kippschutz?“, Abschnitt auf sideboard-spezifische Punkte reduziert (Schubladen verschieben den Schwerpunkt, Oberseite lädt zum Klettern ein, Rollbox) und Dübel-/Untergrund-Absatz durch Link auf `/kinderschrank/#aufstellen-sichern` ersetzt. FAQ „Wie sichert man eine Kommode gegen Umkippen?“ ersetzt durch „Brauchen auch niedrige Kommoden einen Kippschutz?“. H2 „Worauf sollte man beim Kauf eines Kinder-Sideboards achten?“. EN 14749 einheitlich „Aufbewahrungsmöbel für den Wohn- und Küchenbereich“.
- **[gering] Symbolbild Laura – entfällt.**
- **Offen für den Nutzer:** Ob bei der Enno ein Kippschutz-Set beiliegt, nennt das Listing nicht (im Text so gekennzeichnet). Preis der Laura Mini-Kommode laut Suchtreffer sehr hoch (ca. 909 €) – im Text nur als „Preis in der obersten Klasse“.
