# Prüfbericht indoor-rutsche (2026-10-08)

**Ergebnis: Korrektur nötig (nur kleinere Punkte)**

## ASIN-Prüfung
| Produkt | ASIN | Ergebnis |
|---|---|---|
| joy of nature Rutschbrett 49607 | B0D796MHKN | bestätigt (120 × 40 cm, 50 kg, 12 Monate–6 Jahre) |
| Smoby Life Kinderrutsche XS | B0DV5M9CG5 | bestätigt (90 cm, ab 2 Jahren, 50 kg) |
| Little Tikes Erste Rutsche | B006YMOCOS | bestätigt (18 Monate–5 Jahre, 25 bzw. 27,2 kg) |
| Top 5 (Stichprobe) | B0CKQKQCDB, B09SDHSRP2, B09DKXZLXW | passende amazon.de-Titel in den Suchtreffern |

## Befunde
- [mittel] products[2].verdict und pros: „niedrige Einstiegshöhe von rund 70 cm“ ist falsch. 69,9 cm ist die **Gesamthöhe** des Produkts einschließlich der Handläufe, nicht die Einstiegshöhe. **Auftrag:** Zu „niedrige Rutsche mit rund 70 cm Gesamthöhe (Händlerangabe)“ ändern. – redakteur
- [niedrig] editorial (Abschnitt beste-indoor-rutsche): „Die Smoby XS hat mit 90 cm die **längere** Rutschfläche“. Die Rutschlänge der Little Tikes ist nicht belegt. **Auftrag:** Den Vergleich streichen und nur „90 cm Rutschfläche“ schreiben. – redakteur
- [niedrig] Kaufkriterien und „Welche Rutsche passt“: „50 kg reichen meist bis ins Grundschulalter, 25 kg eher bis ins Kindergartenalter“ und „Ein Vierjähriger mit 20 kg …“ sind unbelegte Gewichts- und Alterswerte. **Auftrag:** Neutral formulieren, z. B. „Je höher die Belastungsgrenze, desto länger kann die Rutsche genutzt werden; das Gewicht des Kindes mit der Herstellerangabe abgleichen“. – redakteur
- [niedrig] h3 „Holz oder Kunststoff“: „Bei Holz lohnt ein Blick auf die Oberfläche: … Smoby verweist auf recycelten Kunststoff“. Logikbruch, denn Smoby ist aus Kunststoff. **Auftrag:** Den Satz teilen. – redakteur
- [niedrig] top5 BioKinder Noah: „einzeln ist sie beim Hersteller BioKinder erhältlich“. Laut Research war bio-kinder.de nicht abrufbar, die Aussage ist also unbelegt. **Auftrag:** Belegen oder zu „laut Händlerangaben als Zubehör zum Noah-Spielturm angeboten“ ändern. Alternativ das Set B01LIPUGYU verlinken, wie es die Research vorschlägt, und den Nutzer entscheiden lassen. – produkt-rechercheur, redakteur
- [hinweis] Der Name in answer („joy of nature Rutschbrett 2in1“) weicht vom Produktnamen ab („Holz-Rampe Rutsche 2in1 (49607)“). Das ist vertretbar, optional angleichen.

## Fakten, Regeln und Qualität (ohne Beanstandung)
- Die Kipp-Berichte zur Little Tikes sind als Käuferberichte gekennzeichnet und mit einer Gegenmaßnahme versehen. Der Hinweis „ab 18 statt 12 Monate“ ist korrekt.
- Es wird kein Test behauptet. dadslife.de ist als Erfahrungsbericht gekennzeichnet.
- Gewichte summieren sich auf 1. Platz 1 hat 8,25 Punkte (Platz 3 hat 7,28 und liegt knapp über Platz 2 mit 7,23, das ist zulässig).
- Es gibt 6 FAQs, die `quick`-Blöcke sind vorhanden, die Top 5 bedienen einen anderen Intent (Bauform und System).
- Kein Duplicate Content mit pikler-dreieck, nur das TP-683U-Zubehör wird in beiden Kategorien in unterschiedlicher Rolle genannt.

## Technik (alle Prüfungen bestanden)
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
- Headless-Chromium bei 1440 px und 390 px: genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList, Organization, WebSite), kein `AggregateRating`, keine Konsolenfehler, keine 404, kein horizontales Scrollen (die Vergleichstabelle scrollt nur in ihrem eigenen Container). Symbolbilder und beide Infografiken laden. Einmal trat ein 404 auf die Schriftdatei auf; der Fehler war nicht reproduzierbar, vermutlich weil ein anderer Agent parallel `dist/` neu gebaut hat.
- Euro-Beträge stehen nur in den Preisklassen-Beschriftungen. Im Text stehen keine festen Preise, keine Sternebewertungen und keine Bewertungsanzahlen.

## Korrekturen (Runde 1)
- **[mittel] Little Tikes:** Im verdict steht jetzt „niedrige Rutsche mit rund 70 cm Gesamthöhe einschließlich Handläufen (Händlerangabe)“. Der Pro-Punkt lautet „Niedrig gebaut, rund 70 cm Gesamthöhe (Händlerangabe)“.
- **[niedrig] Smoby:** Statt „mit 90 cm die längere Rutschfläche“ steht jetzt „eine 90 cm lange Rutschfläche“.
- **[niedrig] Gewichts- und Altersfaustregeln:** Beide Stellen sind neutral formuliert und verweisen auf die Herstellerangaben: Je höher die Belastungsgrenze, desto länger kann das Kind die Rutsche nutzen; das Gewicht mit der Herstellerangabe abgleichen. Bei den Geschwistern stehen nur noch die Listingwerte, also 25 bzw. 50 kg.
- **[niedrig] Holz/Kunststoff:** Der Satz ist geteilt, Smoby steht jetzt im eigenen Kunststoff-Satz (≥ 38 % recycelt, Herstellerangabe).
- **[niedrig] BioKinder Noah:** Die Rutsche ist weiter nicht belegbar, weil bio-kinder.de nicht abrufbar war. Der Text lautet jetzt „laut Händlerangaben als Zubehör zum Noah-Spielturm angeboten“, `where` „Zubehör zum BioKinder-Noah-Spielturm“. Offen für den Nutzer: Er kann stattdessen das Set B01LIPUGYU (Bett + Spielturm + Rutsche) verlinken.
- **[hinweis] Name in answer:** Angeglichen zu „joy of nature Holz-Rampe Rutsche 2in1“.
- ASINs sind unverändert. `node build.mjs` läuft fehlerfrei durch (Exit 0).
