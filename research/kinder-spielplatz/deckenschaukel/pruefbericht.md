# Prüfbericht deckenschaukel (2026-10-08)

**Ergebnis: Korrektur nötig**

## ASIN-Prüfung
| Produkt | ASIN | Ergebnis |
|---|---|---|
| HUDORA Nestschaukel 90 cm blau 72126 | B0851M7FGC | Titel passt, laut Treffer aber ein **Bundle aus 2 Artikeln mit Zeltbezug** (Preis über Preisklasse € €). Die Seillänge ist im Listing widersprüchlich (150–200 bzw. 140–190 cm) |
| HUDORA Brettschaukel Gummi 72175 | B086ZFLFNX | bestätigt (38 × 17,5 cm, 137–197 cm, 100 kg, TÜV/GS im Titel) |
| small foot Babyschaukel 12800 | B09KNVS943 | **widersprüchlich**: Die Treffer zeigen teils „12800 … ab 12 Monaten“, teils „11584 Baby Swing Comfort … Outdoor and Indoor, ab 18 Monaten“. Für 12800 wurde eine eigene ASIN B0G83WBQG5 gefunden |
| Top 5 | – | nicht einzeln live geprüft |

## Befunde
- [hoch] products[0] B0851M7FGC ist laut Treffer ein Bundle aus Nestschaukel und Zeltbezug, gekennzeichnet ist aber die Einzelschaukel in Preisklasse 2. **Auftrag:** Ein Einzel-Listing wählen, z. B. B00BU7BF2O oder B01E8PD1ZS (laut Research die Ausweich-ASIN). Bei B00BU7BF2O steht in der Tabelle 50 kg statt 100 kg, deshalb die Belastung prüfen. Die Seillänge als „laut Händler ca. 140–200 cm, Angaben schwanken“ angeben. – produkt-rechercheur
- [hoch] products[2] small foot B09KNVS943: Die Variante ist unklar, nämlich 12800 (nur innen, ab 12 Monaten) oder 11584 Comfort (innen und außen, ab 18 Monaten). Davon hängen die Aussagen „Die einzige Schaukel …, die der Hersteller ausdrücklich für den Innenbereich auslegt“, „nur innen“ und „ab 12 Monaten“ ab. **Auftrag:** Die ASIN klären (B0G83WBQG5 für 12800 prüfen), dann verdict, specs, Label und FAQ an das tatsächlich verlinkte Produkt anpassen. – produkt-rechercheur, redakteur
- [mittel] Duplicate Content mit schaukeltuch:
  - (a) Der Callout-Satz „Wenn du den Deckenaufbau nicht sicher kennst, frag vor dem Bohren eine Fachkraft – in Mietwohnungen außerdem die Vermieterin oder den Vermieter.“ ist **wortgleich**.
  - (b) Die quick-Antwort „Für die meisten Familien mit Kindern ab drei Jahren ist … nach unserer Einschätzung die beste Wahl“ ist fast identisch.
  - (c) „Prüfzeichen nur glauben, wenn …“ ist fast identisch.
  - (d) Die small foot Nestschaukel XL 110 steht in **beiden** Top-5-Listen mit fast gleichem Text.

  **Auftrag:** (a) bis (c) in deckenschaukel umformulieren. Für (d) die Nestschaukel XL in deckenschaukel durch ein anderes Zubehör- oder Schaukelprodukt ersetzen oder mit klar anderem Fokus beschreiben. – redakteur, produkt-rechercheur
- [mittel] guide „Rückrufe bei Kinderschaukeln“: Die Fisher-Price-Rainforest-Schaukel ist eine Reise- bzw. Standschaukel und keine hängende Schaukel, als Beispiel also wenig passend. Die Aussage selbst ist laut test.de korrekt (Einklemmgefahr). In der Research liegen passendere, belegte Fälle vor: Aldi Süd Nestschaukel Flexxtrade (sich lösende Metallringe) und Lidl/Kaufland 3-in-1-Schaukel 07/2023 (Sitz kann kippen). **Auftrag:** Mindestens einen dieser Fälle mit Quelle und Datum aufnehmen, Fisher-Price streichen oder als Babywippe kennzeichnen. – redakteur
- [niedrig] products[0]: „ab 3 Jahren (Herstellerangabe)“ ist in der Research als Händlerangabe erfasst. **Auftrag:** Die Kennzeichnung angleichen. – redakteur
- [niedrig] sources: DIN EN 71-8 ist als Quelle gelistet, im Text aber nicht genutzt. **Auftrag:** Einen Satz ergänzen („Schaukeln für den Hausgebrauch fallen unter EN 71-8, Spielplätze unter EN 1176; für keine der Top 3 ist eine EN-71-8-Angabe belegt“) oder die Quelle entfernen. – redakteur
- [niedrig] lead „ob sie sicher hängt, entscheidet allein die Decke“ übertreibt, denn auch Haken, Dübel und Karabiner entscheiden mit. **Auftrag:** „entscheidet vor allem die Decke samt Befestigung“. – redakteur
- [hinweis] HUDORA Brettschaukel: Rezensionen berichten über gerissene Ösen der Höhenverstellung. Ein Prüfhinweis auf die Ösen ist optional (Quelle: Amazon-Rezension, als Käuferbericht kennzeichnen).

## Fakten, Regeln und Qualität (ohne Beanstandung)
- Die Statikaussagen sind über den Bauhaus-Ratgeber belegt. Der Türrahmen ist korrekt auf 25 kg begrenzt, von Klemmstangen wird abgeraten. Die Strangulationswarnung und die Aufsichtspflicht sind enthalten.
- Gewichte summieren sich auf 1. Platz 1 hat 8,3 Punkte, die beiden anderen 7,88 und 7,78.
- Es gibt 7 FAQs, die `quick`-Blöcke sind vorhanden, die Top 5 bedienen einen anderen Intent (Befestigung).

## Technik (alle Prüfungen bestanden)
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
- Headless-Chromium bei 1440 px und 390 px: genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList, Organization, WebSite), kein `AggregateRating`, keine Konsolenfehler, keine 404, kein horizontales Scrollen (die Vergleichstabelle scrollt nur in ihrem eigenen Container). Symbolbilder und beide Infografiken laden. Einmal trat ein 404 auf die Schriftdatei auf; der Fehler war nicht reproduzierbar, vermutlich weil ein anderer Agent parallel `dist/` neu gebaut hat.
- Euro-Beträge stehen nur in den Preisklassen-Beschriftungen. Im Text stehen keine festen Preise, keine Sternebewertungen und keine Bewertungsanzahlen.

## Korrekturen (Runde 1)
- **[hoch] Platz 1 HUDORA:** Auf das Einzel-Listing **B00BU7BF2O** umgestellt („HUDORA Nestschaukel 90 – Blaue Kunststoff-Nestschaukel für bis zu 100kg … für drinnen & draußen“, Modell 72126/01, laut Treffer auf Lager). B0851M7FGC (Bundle), B0857R7ZKM (nicht verfügbar) und B01E8PD1ZS (nicht auffindbar) verworfen. Weil die Datentabelle des Listings 50 kg statt 100 kg nennt, steht der Widerspruch jetzt offen auf der Seite (Features, Specs, Nachteil, Kaufkriterien). Die Belastbarkeit wurde von 9,5 auf 8,5 abgewertet, die Gesamtnote liegt jetzt bei 8,1 und bleibt die höchste (Platz 2: 7,88, Platz 3: 7,78). Seillänge: „laut Händler ca. 150–200 cm, Angaben schwanken“.
- **[hoch] Platz 3 small foot:** B09KNVS943 trägt inzwischen den Titel „small Foot Indoor Nest Swing … 11907“ und ist damit das falsche Produkt. Umgestellt auf **B0G83WBQG5**, Titel „small Foot 12800 Baby Swing Beige … from 12 Months“, 60 kg, Seil ca. 144 cm. Alter (ab 12 Monaten) und „nur innen“ (Warnhinweis des Herstellers, babyartikel.de) gelten damit für das verlinkte 12800. Das Verdict wurde präzisiert („laut Warnhinweis des Herstellers nur für den Innenbereich“), und die Seillänge von 144 cm ist ergänzt.
- **[mittel] Duplicate Content:** Der Fachkraft-Satz im Callout, die quick-Antwort, der Prüfzeichen-Satz und die FAQ zur Deckenbefestigung sind neu formuliert. Die small foot Nestschaukel XL in der Top 5 wurde durch **Feuerwehr-Karabinerhaken mit Schraubverschluss 12 × 140 mm, 2 Stück (B08ZVBW3R4)** ersetzt: eingeprägte WLL 510 kg, angelehnt an DIN 5299 C, als Händlerangabe gekennzeichnet. Das Intro der Top 5 und der Absatz „Drehwirbel und Karabiner“ verlinken darauf.
- **Zusätzlich gefunden:** B01C8USO9S (Top 5 Schaukelhaken) ist laut Treffer das verzinkte Safety-XL-Modell D+ für 140–170 mm und nicht der Edelstahlhaken für 60–140 mm. Umgestellt auf **B084MN42TR** (Edelstahl, 60–140 mm, 1 Stück; Hinweis: zwei Stück bestellen). Laut einem Treffer zeigt die Seite intern die ASIN B01C8USOBQ, daher die Verfügbarkeit einmal im Browser prüfen.
- **[mittel] Rückrufe:** Fisher-Price gestrichen. Neu aufgenommen: Lidl/Kaufland 3-in-1-Schaukel 07/2023 (infranken.de) und Aldi Süd Nestschaukel Art. 51562/Flexxtrade (leinetal24; ein genaues Datum war nicht belegbar). Die Quellenliste ist entsprechend angepasst.
- **[niedrig]** Das Alter bei Platz 1 ist jetzt als Händlerangabe gekennzeichnet (auch in der FAQ). Ein EN-71-8/EN-1176-Absatz („Normen und Prüfzeichen“) ist ergänzt. Der Lead lautet jetzt „entscheidet vor allem die Decke samt Befestigung“.
- **[hinweis]** Bei der Brettschaukel steht ein Nachteil zu gerissenen Ösen, als Käuferbericht bei Amazon gekennzeichnet.
- `node build.mjs` läuft fehlerfrei durch (Exit 0). schaukeltuch.mjs wurde nicht angefasst.
