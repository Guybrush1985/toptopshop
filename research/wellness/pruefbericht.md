# Prüfbericht Wellness (outdoor-whirlpool, indoor-whirlpool, Bereich wellness)

Stand: 2026-10-23 · Prüfer · ASINs per WebSearch (amazon.de) geprüft, amazon.de selbst nicht abrufbar.

## Ergebnis
- **outdoor-whirlpool:** bestanden mit kleinen Korrekturen
- **indoor-whirlpool:** Korrektur nötig (Platz 3 Atlantic L, MBH-Text)
- **Bereich wellness / Symbolbilder:** bestanden

Technik: `node build.mjs` grün. Headless-Chromium 1440/390 px für alle drei Seiten: je genau eine H1, kein horizontales
Scrollen, JSON-LD parsebar, SVGs gerendert. Einzige Konsolenfehler: Webfont per file:// (CORS) – Testartefakt, kein Befund.
Keine festen Preise im Text (nur Preisstufen-Labels wie in allen Kategorien), keine Amazon-Bilder, keine Awin-Produkte –
Vorgabe „nur Amazon“ erfüllt. Gewichte je 1,0; Platz 1 jeweils höchste Gesamtnote; 6 FAQs je Seite; `quick` je H2 vorhanden.

## Befunde

### Allgemein
- [mittel] `research/wellness/` – Es gibt keine `produkte.json`/Recherche-Dateien; Fakten konnten nur gegen die
  Amazon-Listings geprüft werden. – Recherche-Datei mit Quellen je Produkt nachliefern. – produkt-rechercheur

### outdoor-whirlpool
- [ok] ASINs B0D9YT4LFZ (Bali AirJet 196×71, 6 P., 140 Düsen), B07XTYN9VN (Intex 28440, 196×71, 795 l, 140 Düsen,
  2.200 W, 1.741 l/h, Kalkschutz), B0BG7X5DJZ (Beach Pure 210×155×83, 51 Düsen, 24 Lichter, 3.000 W, 900 l, 270 kg, ohne
  Treppe/Abdeckung), B0FMQD22BT (Hawaii AirJet Ø 236, 8 P., 190 Düsen), B09Q1R6XC5 (Greywood Deluxe 6 P., 1.098 l,
  170 Düsen), B095XJKPS4 (Mauritius 270×180×71, 1.370 l, 180 Düsen), B0F7SLRDJ1 (BRAST MSpa Frame Mono Eco Ø 192×65,
  8 P., 144 Düsen), B0D9YTTTBF (Rome 201×201, 7 P., 180 Düsen) – Titel passen.
- [niedrig] Top 5, BRAST Mono Eco – „bis 8 Personen“ bei Ø 192 cm widerspricht dem eigenen Kaufberatungs-Absatz
  („196 cm: vier bequem, sechs eng“). – „laut Anbieter bis 8 Personen, realistisch eher 4–5“ ergänzen. – redakteur
- [niedrig] Top 5, Mauritius B095XJKPS4 – Amazon verweist auf ein Nachfolgemodell mit App (B0CDXPKG1N, „Mauritius
  AirJet XXL WLAN“). – Prüfen, ob das neuere Listing aktiv ist, ggf. ASIN tauschen. – produkt-rechercheur
- [niedrig] Top 5, Intex Greywood Deluxe 6 P. – Laut Listing-Rezension bestätigt Intex für diese Version keine
  Salzwasser-Vorinstallation; außerdem nennt das Listing widersprüchliche Maße. Im Guide wird gerade dieses Modell als
  Beispiel für Salzwassersysteme verlinkt. – Salzwasser-Aussage absichern oder als „laut Angebotstitel“ abschwächen;
  im Guide neutral formulieren. – produkt-rechercheur / redakteur
- [niedrig] Platz 2, Intex B07XTYN9VN – Listing-Titel nur „Intex Whirlpool SPA“ (Modell 28440). Es gibt ein neueres
  Listing „PureSpa Greywood Deluxe 4 Person … App Control“ (B0FR9HLF95). – Aktivität beider prüfen, ggf. neueres nehmen,
  dann Features anpassen. – produkt-rechercheur
- [niedrig] `sources` – Intex-Quelle ist die US-Seite (intexcorp.com, US-Spezifikation); keine Bestway-Quelle. –
  EU-Herstellerseiten (intex/bestway .de) als Quelle ergänzen. – produkt-rechercheur
- [niedrig] `top3Intro` – „Zwei aufblasbare Whirlpools, die man im Herbst wieder abbauen kann“ passt schlecht zum
  Bestway-Argument „Frostwächter, auch im Winter“. – „abbauen kann, aber nicht muss“ o. ä. – redakteur
- [niedrig] Top 5 Hawaii „rund 1.440 Liter“ – im Listing-Snippet nicht bestätigt. – Wert belegen oder streichen. – produkt-rechercheur

### indoor-whirlpool
- [hoch] Platz 3, Home Deluxe Atlantic L (B08CHGZ3NN) – Listing nennt **4 verstellbare Whirlpool-Düsen + 13 Luftdüsen,
  1.500-W-Heizung, Lichttherapie**; die „4 Körperdüsen“ und damit „8 Wasser-Düsen“ (Feature und Spec) sind nicht belegt.
  Spec `hygiene: "laut Anbieter"` und `extras: "Komplettes Zubehör"` sind inhaltsleer. Außerdem nur 2,6/5 Sterne bei
  7 Bewertungen mit Mängelberichten (Sand in Leitungen, kaum Ablaufgefälle). – Düsenzahl korrigieren, 1.500 W ergänzen,
  Hygiene/Extras konkret füllen (z. B. „Lichttherapie, Touch-Bedienung“); Empfehlung als Top 3 überdenken oder die
  schwache Bewertungslage als Contra nennen. – produkt-rechercheur / redakteur
- [mittel] Top 5, medisana MBH (B08D9KGFKC) – Text „Zwei Intensitätsstufen plus Intervallprogramm“; Listing-Titel
  sagt „3 Intensitätsstufen“. – Mit medisana-Quelle abgleichen und korrigieren. „Günstigere Variante“ nur, wenn ohne
  Preisangabe belegbar (z. B. 450 W statt 570 W, keine Heizung). – redakteur
- [niedrig] Ranking – Basic Naxos und Atlantic L haben exakt dieselbe Gesamtnote (7,7). Text sagt „liegen gleichauf“,
  ist also ehrlich; trotzdem Plätze 2/3 per Teilnote klar trennen. – redakteur
- [niedrig] Platz 2, Basera Basic – „laut Angebot in Deutschland gefertigt“ ist nur für die Premium-Version im
  Listing belegt. – Belegen oder streichen. – produkt-rechercheur
- [niedrig] Platz 1/2, Spec `personen: "1–2"` – nicht belegt. – Quelle oder „1“. – produkt-rechercheur
- [ok] ASINs B0BRJWP959 (Premium Naxos 180×90, 24 Düsen 8/8/8, 750 W Pumpe, 1.000 W Heizung, Ozon, Bodenansaugung),
  B0BQGFD2LX (Basic Naxos 180×90, 16 Düsen 8/8, 750 W), B07V47NGLC (medisana BBS 120×36, 3 Stufen, Heizung, Timer
  10/20/30), B006K0XKSS (Newgen Medicals Sprudelmatte, nicht eingestellt), B0DVCCTSBX (Intex Chevron Deluxe 28472NP
  196×196×71, 1.098 l, 170 Düsen), B078NM8ZZQ (AQUADE Selbstbausatz, 8 Seitendüsen) – Titel passen.
- [ok] Baunetz-Wissen-Aussage (separater Anschluss für Whirlpool) und LGL-Aussage (Warmsprudelbecken/Legionellen) sind
  durch die verlinkten Seiten gedeckt.

### Bereich wellness (src/site.mjs) und Symbolbilder (visuals.mjs)
- [ok] Texte sachlich, keine Preise, Sicherheits-Callout vorhanden. `hottub`, `spa`, `bathtub` im Set `OBJECTS`
  registriert und in README dokumentiert; rendern fehlerfrei.
- Keine Tippfehler gefunden.

## Umsetzung der Befunde (Orchestrator, 2026-10-23)
- Atlantic L ersetzt durch Basera Premium Futuna (B0BWN9WQW5); Specs konkret, Plätze 2/3 jetzt getrennt (7,7 / 8,1 → Platz 3 als Spezialwahl „Beste Eckwanne“).
- „In Deutschland gefertigt“ und `personen` bei der Basic entfernt; Vergleichszeile jetzt „Form“.
- medisana MBH: Stufenzahl neutral formuliert.
- MSpa Mono Eco: Personenangabe relativiert, Innenmaß als Händlerangabe.
- Salzwasser-Beispiel im Guide neutral formuliert; Hawaii-Literangabe entfernt; top3Intro angepasst.
- Offen: neuere Listings B0CDXPKG1N (Mauritius) und B0FR9HLF95 (Intex) live prüfen.
