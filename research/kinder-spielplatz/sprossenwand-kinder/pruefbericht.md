# Prüfbericht sprossenwand-kinder (2026-10-08)

**Ergebnis: Korrektur nötig**

## ASIN-Prüfung
| Produkt | ASIN | Ergebnis |
|---|---|---|
| NiroSport FitTop M1 | B07JQ72V83 | Titel passt (130/80 kg, TÜV), aber der Suchtreffer zeigt **„Derzeit nicht verfügbar“** |
| Sport-Thieme Sprossenwand Original | B076D4B6ZK | Titel passt (230 × 80 cm, 9 Sprossen, Esche 35 mm, 100 kg), aber der Suchtreffer zeigt **„Derzeit nicht verfügbar“** |
| KletterDschungel Holz-Turnwandset KDH-HK140 | B003LYG178 | bestätigt („nicht eingestellt“) |
| Top 5 (Stichprobe) | B00C4YMI32, B0F5353KL2 | passende Titel |

## Befunde
- [hoch] products[0] NiroSport B07JQ72V83 ist laut Treffer nicht verfügbar. **Auftrag:** Eine aktive M1-ASIN wählen. Kandidaten sind B00KD6LDIE (blau, 240–290 cm), B00JDE2XS6, B071L5KGQY und B07JR5FLZ6; dabei Raumhöhe und Farbvariante im Text nennen. – produkt-rechercheur
- [hoch] products[1] Sport-Thieme B076D4B6ZK ist laut Treffer nicht verfügbar. **Auftrag:** Eine aktive Alternative suchen, z. B. die Sport-Thieme Einzelfeld-Sprossenwand B003AKGFS8 oder ein anderes aktives Listing (Titel und Maße prüfen). Findet sich keine, ein gleichwertiges Produkt nachrücken lassen. Danach answer, Karten und FAQ anpassen. – produkt-rechercheur, redakteur
- [mittel] FAQ „Ab welchem Alter …“: Das NiroSport-Listing warnt „nicht geeignet für Kinder unter 3 Jahren, nur unter Aufsicht“. Die Seite sagt „Eine feste Altersgrenze gibt es nicht“ und nennt das nicht. **Auftrag:** Die Herstellerangabe „ab 3 Jahren (NiroSport)“ in FAQ, features bzw. specs und in der Sicherheits-Callout ergänzen. – redakteur
- [mittel] Callout „Prüfzeichen“: „Sprossenwände für Schulen und Vereine fallen unter die DIN EN 12346“ ist eine Normaussage ohne Quelle (die Research nennt keine URL). Die Norm existiert, ein Sport-Thieme-Listing führt „nach DIN EN 12346“ im Titel. **Auftrag:** Eine Quelle in `sources` ergänzen, z. B. die Normseite bei DIN Media oder das Sport-Thieme-Listing B076D4B6ZH. – produkt-rechercheur
- [niedrig] editorial: „wächst bis ins Teenageralter mit“ ist unbelegt. **Auftrag:** Zu „lässt sich bis ins Schulalter und auch von Erwachsenen nutzen (Belastbarkeit beachten)“ ändern. – redakteur
- [niedrig] products[1] ist als „Bestes Preis-Leistungs-Verhältnis“ gelabelt, liegt aber in derselben Preisklasse € € wie Platz 1, der Zubehör mitbringt. **Auftrag:** Das Label prüfen (z. B. „Beste klassische Wandmontage“) oder die Preisklasse belegen. – redakteur
- [niedrig] products[2] KletterDschungel bekommt bei „sicherheit“ 8,5, genauso viel wie NiroSport mit herstellerseitigem TÜV-Nachweis, obwohl das Prüfzeichen laut eigenem Contra „beim Hersteller erfragen“ ist. **Auftrag:** Die Note überdenken (z. B. 8,0). Platz 1 bleibt höher. – redakteur
- [hinweis] top5 Vira hat nur einen Decathlon-Marktplatz-Eintrag (`where`, ohne Link), das ist korrekt. Falls Decathlon ein Awin-Programm hat, nach CLAUDE.md-Regel 3 dem Nutzer als möglichen neuen Händler nennen, nicht selbst einbauen.

## Fakten, Regeln und Qualität (ohne Beanstandung)
- Die Herstellerangaben (130/80 kg, TÜV Nord, Raumhöhen) sind gekennzeichnet, die Belastung von Gerüst und Zubehör wird sauber getrennt. Vergleichsportale werden ausdrücklich nicht als Test gewertet.
- Gewichte summieren sich auf 1. Platz 1 hat 8,6 Punkte, die beiden anderen 8,38 und 7,0.
- Es gibt 7 FAQs, die `quick`-Blöcke sind vorhanden, die Top 5 bedienen einen anderen Intent.
- Kein Duplicate Content mit kletterwand-kinderzimmer oder deckenschaukel.

## Technik (alle Prüfungen bestanden)
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
- Headless-Chromium bei 1440 px und 390 px: genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList, Organization, WebSite), kein `AggregateRating`, keine Konsolenfehler, keine 404, kein horizontales Scrollen (die Vergleichstabelle scrollt nur in ihrem eigenen Container). Symbolbilder und beide Infografiken laden. Einmal trat ein 404 auf die Schriftdatei auf; der Fehler war nicht reproduzierbar, vermutlich weil ein anderer Agent parallel `dist/` neu gebaut hat.
- Euro-Beträge stehen nur in den Preisklassen-Beschriftungen. Im Text stehen keine festen Preise, keine Sternebewertungen und keine Bewertungsanzahlen.

## Korrekturen (Runde 1)
- **[hoch] NiroSport:** B07JQ72V83, B00JDE2XS6, B00J8K6PAM und B0CPD8GRMY sind laut Treffer nicht verfügbar, B00KD6LDIE ist auf amazon.co.uk nicht verfügbar. Neu gewählt ist **B071L5KGQY**, Titel „NiroSport FitTop M1 Klettergerüst … with Pull Up Bar incl. Gymnastics rings rope ladder trapezoidal“. Der Treffer zeigt einen Preis, das Listing ist also aktiv. Es ist ein Variantenlisting: Farben und Raumhöhen (200–250, 220–270, 240–290 cm) wählt man auf der Amazon-Seite, das steht so in `variant`. Eine Alternative mit fester Variante wäre B07JR5FLZ6 (Pink, 240–290 cm, laut Treffer auf Lager). Der Produktname ist an den Amazon-Titel angepasst.
- **[hoch] Sport-Thieme Original:** B076D4B6ZK ist nicht verfügbar. Die vorgeschlagenen Alternativen sind ebenfalls nicht verfügbar: B003AKGFS8, Tunturi B00K16AU3K und Sport-Thieme Fit B0F53B6DQ1. Nachgerückt ist die **Sport-Thieme Sprossenwand mit Klimmzugbügel Standard B003AKCGZ4** (vorher Top 5, Preis im Treffer sichtbar). Sie steht jetzt auf Platz 3 als „Beste klassische Wandmontage“, Preisklasse €€€, 7,2 Punkte. KletterDschungel rückt auf Platz 2 („Premium-Wahl“). answer, quick, Fließtext, Karten, FAQ, Zubehörtext, Alt-Text und Quellen sind angepasst. In den Top 5 ersetzt die Sport-Thieme Einzelfeld-Sprossenwand nach DIN EN 12346 (B0F534HSZ1, 150 kg) den frei gewordenen Platz.
- **[mittel] Alter:** Die Herstellerangabe „nicht für Kinder unter 3 Jahren, nur unter Aufsicht“ (NiroSport) steht jetzt in den Features, in der FAQ „Ab welchem Alter …“ und im Sicherheits-Callout.
- **[mittel] DIN EN 12346:** Die Aussage ist neu formuliert: „Für Sprossenwände in Schulen und Vereinen gilt laut Sport-Thieme die Norm DIN EN 12346; Heim-Sprossenwände müssen sie nicht erfüllen.“ Als Quelle sind die Sport-Thieme-Seite „Doppelfeld nach DIN EN 12346“ (art=1226599) und das Amazon-Listing B0F534HSZ1 in `sources` ergänzt. Der Hinweis zum Bausatz der Original-Wand ist mit dem Produkt entfallen.
- **[niedrig] Teenageralter:** Geändert zu „lässt sich bis ins Schulalter und auch von Erwachsenen nutzen (Belastbarkeit beachten)“.
- **[niedrig] Preis-Leistungs-Label:** Das Label ist entfallen. Das neue Label „Beste klassische Wandmontage“ passt zu Preisklasse 3.
- **[niedrig] KletterDschungel Sicherheit:** Die Note ist auf 8,0 gesenkt, der Verdict-Text begründet das. Gesamtnote 8,23, Platz 1 (8,6) bleibt höher.
- **[Hinweis] Vira/Decathlon:** Nicht eingebaut. Für den Nutzer: DECATHLON DE hat ein Awin-Programm (Advertiser-ID 14353, ui.awin.com/merchant-profile/14353). Laut einer Drittquelle werden Marktplatzverkäufe (Vira wird über einen Marktplatzhändler verkauft) möglicherweise nicht provisioniert. Vor einer Bewerbung prüfen.
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
