# Prüfbericht pikler-dreieck (2026-10-08)

**Ergebnis: Korrektur nötig**

## ASIN-Prüfung (WebSearch, allowed_domains amazon.de)
| Produkt | ASIN | Ergebnis |
|---|---|---|
| Kids Woody Star 2-in-1 | B0BQ7MVG3D | bestätigt (Titel passt; Buche, 12–72 Monate, 50 kg) |
| TP Toys TP 682U | B09SDKFPD2 | **nicht bestätigt**: zwei Suchen ohne Treffer zur ASIN, auch eine Websuche nach der ASIN in Anführungszeichen findet nichts |
| GOODEX Kletterdreieck ohne Rutsche | B0B4BB5D2Q | **nicht bestätigt**: kein Treffer. Gefunden wurde nur B0B4BH2XG6, das GOODEX-Dreieck **mit** Rutsche |
| Top 5 | – | nicht einzeln geprüft (Stichprobe: B0BHCJTHX7, der GOODEX-Würfel, passt) |

## Befunde
- [hoch] products[1] (TP 682U, asin B09SDKFPD2) und products[2] (GOODEX, asin B0B4BB5D2Q): Die ASINs lassen sich per Suche nicht belegen. Für GOODEX taucht nur das Listing „mit Rutsche“ (B0B4BH2XG6) auf. **Auftrag:** Den Suchtreffer mit /dp/-URL und passendem Titel vorlegen. Geht das nicht, die ASIN entfernen, nur `query` belassen und es dem Nutzer melden. Bei GOODEX darf nicht auf die Rutschen-Variante verlinkt werden, solange die Karte „ohne Rutsche“ beschreibt. – zuständig: produkt-rechercheur
- [mittel] products[2].label „Beste Wahl ab 1 Jahr …“ widerspricht dem Rest der Seite: answer, Spezifikationen und FAQ sagen 10 Monate, der Text nennt das Modell „ideal für Babys“. **Auftrag:** Label z. B. auf „Beste Wahl für Babys & kleine Zimmer“ ändern. – zuständig: redakteur
- [mittel] method bzw. Rückrufaussage: In der Kategorie gab es eine Sicherheitsmaßnahme. Zum FitWood-LUOTO-Kletterbogen (Kletterbogen-Sets) gab es eine Entscheidung der schwedischen Verbraucherbehörde und ein Produkt-Update des Herstellers (produktwarnung.eu 03/2024, fitwood.com „Produkt-Update-Ankündigung“). Die Pikler-Research nennt das nicht, sie steht nur in der Kletterwand-Research. Die Formulierung „keine Rückrufe … gefunden“ ist deshalb zu pauschal. **Auftrag:** Den Fall prüfen und auf „zu den empfohlenen Modellen keine Rückrufe gefunden“ umformulieren. Optional den Fall als Beispiel nennen, mit Quelle. – zuständig: produkt-rechercheur, redakteur
- [niedrig] products[2].verdict „Das am besten verarbeitete Dreieck im Vergleich“: Das ist ein Superlativ, der nur auf Herstellerangaben beruht. **Auftrag:** Auf „das hochwertigste Material laut Herstellerangaben (massive Buche, Made in Germany)“ abschwächen. – redakteur
- [niedrig] products[2].verdict „In der flachsten Stellung nur 30 cm“: Belegt ist der Wert nur für Position 3 von 4. **Auftrag:** Zu „in Position 3 nur 30 cm hoch (Herstellerangabe)“ ändern. – redakteur
- [niedrig] Der Name in answer („TP Toys Active-Tots Kletterdreieck TP 682U“) und der Produktname („TP Toys TP 682U Active-Tots Kletterdreieck“) weichen voneinander ab. **Auftrag:** Vereinheitlichen. – redakteur

## Fakten, Regeln und Qualität (ohne Beanstandung)
- Herstellerangaben sind gekennzeichnet. kita.de ist korrekt als redaktioneller Vergleich ausgewiesen („laut Berichten“). Die V&A-Aussage ist mit Quelle belegt.
- Gewichte summieren sich auf 1. Platz 1 hat die höchste Gesamtnote (7,98 vor 7,65 und 7,2).
- Es gibt 7 FAQs, jeder H2-Abschnitt hat einen `quick`-Block, die Meta-Längen sind eingehalten.
- Die Top 5 bedienen einen anderen Suchintent (Bauform und Set).
- Die Sicherheitshinweise sind zurückhaltend formuliert und verlangen Aufsicht, Belastungsgrenzen und eine Matte.
- Kein Duplicate Content mit indoor-rutsche oder sprossenwand-kinder, nur die Boilerplate der Methodik wiederholt sich.

## Technik (alle Prüfungen bestanden)
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
- Headless-Chromium bei 1440 px und 390 px: genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList, Organization, WebSite), kein `AggregateRating`, keine Konsolenfehler, keine 404, kein horizontales Scrollen (die Vergleichstabelle scrollt nur in ihrem eigenen Container). Symbolbilder und beide Infografiken laden. Einmal trat ein 404 auf die Schriftdatei auf; der Fehler war nicht reproduzierbar, vermutlich weil ein anderer Agent parallel `dist/` neu gebaut hat.
- Euro-Beträge stehen nur in den Preisklassen-Beschriftungen. Im Text stehen keine festen Preise, keine Sternebewertungen und keine Bewertungsanzahlen.

## Korrekturen (Runde 1)
- **[hoch] TP 682U (Platz 2):** Die ASIN B09SDKFPD2 ließ sich auch in vier weiteren amazon.de-Suchen nicht belegen (gesucht nach Modellname, „TP682“ und englischem Titel). Gefunden wurden nur TP 683U (B0CKQKQCDB), TP 685U (B09SDHMK11), TP 686 und TP 687. Ein gleichwertiges günstiges Marken-Dreieck mit bestätigter ASIN gab es nicht. Deshalb ist die `asin` entfernt, das Produkt bleibt auf Platz 2 und verlinkt nur über `query` auf die Amazon-Suche. **Offener Punkt für den Nutzer.** Der Produktname ist in answer, Karte und produkte.json einheitlich „TP Toys TP 682U Active-Tots Kletterdreieck“.
- **[hoch] GOODEX (Platz 3):** Die ASIN B0B4BB5D2Q ist nicht belegbar, und auf die Variante mit Rutsche wird nicht verlinkt. GOODEX ist deshalb aus den Top 3 gestrichen. **Neu auf Platz 3:** das Marida Pikler Dreieck Indoor Klettergerüst aus Buche (B09HP72ZBV), dessen ASIN erneut bestätigt wurde. Label: „Beste Wahl für Babys & kleine Zimmer“. Die Bewertung ist neu: Sicherheit 6,5, Material 8,0, Spielwert 6,0, Platz 8,5, Gesamtnote 7,18. Platz 1 liegt mit 7,98 weiter vorn. Angepasst wurden answer, top3Intro, Abschnitts-Quick, Fließtext, Tabelle, Karten, Abschnitt „mit oder ohne Rutsche“, Alt-Text und Caption der Score-Grafik sowie die FAQ zu Alter und Höhe. Der Normsatz nennt jetzt Giant Bean statt GOODEX als Beispiel für EN 71.
- **Top 5:** Marida ist in die Top 3 aufgerückt. Den freien Platz in den Top 5 übernimmt das TP Active-Tots Kletter- und Schaukelset TP 685U (B09SDHMK11, bestätigt) für den Bedarf „Klettern und Schaukeln“. Beim GOODEX-Würfel ist der Verweis auf „GOODEX-Dreieck aus unseren Top 3“ entfernt. Das Top-5-Intro ist angepasst.
- **[mittel] Label:** Mit dem Wechsel zu Marida erledigt („Beste Wahl für Babys & kleine Zimmer“).
- **[mittel] Rückrufaussage:** Die method lautet jetzt „zu den empfohlenen Modellen keine gefunden“. Als Beispiel ist der FitWood-LUOTO-Kletterbogen genannt (Entscheidung der schwedischen Verbraucherbehörde und Produkt-Update des Herstellers), die Quelle fitwood.com steht in `sources`. Die Warnung in produkte.json ist ergänzt.
- **[niedrig] Superlativ „am besten verarbeitet“ und „30 cm in der flachsten Stellung“:** Beide Punkte sind erledigt, weil die GOODEX-Karte entfallen ist. Auf der Seite stehen keine GOODEX-Positionsangaben mehr.
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
