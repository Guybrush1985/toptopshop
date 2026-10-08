# Prüfbericht kletterwand-kinderzimmer (2026-10-08)

**Ergebnis: Korrektur nötig**

## ASIN-Prüfung
| Produkt | ASIN | Ergebnis |
|---|---|---|
| Gartenpirat Indoor Kletterwand | B0DD3NCHR1 | Titel passt (18 mm Birke, 150 kg je Platte, 2–8 Platten), aber der Suchtreffer zeigt **„Derzeit nicht verfügbar“** |
| GOODEX Kletterwand | B0DDJSX7KP | **nicht bestätigt**: weder die amazon.de-Suche noch eine Websuche nach der ASIN in Anführungszeichen findet etwas. Gefunden wird nur B0BSRDMC83, das laut Research nicht verfügbar ist |
| ALPIDEX Komplettset | B0BVVGMY3F | bestätigt (Varianten-Listing; die Detailtabelle zeigt B0BVRT4VR1 als Farbvariante) |
| Top 5 (Stichprobe) | B07H7P5Q1R, B0C7C539YX | passende Titel |

## Befunde
- [hoch] products[0] Gartenpirat B0DD3NCHR1 ist laut Suchtreffer „derzeit nicht verfügbar“. Das widerspricht der CLAUDE.md-Regel, aktive Listings zu bevorzugen. **Auftrag:** Die Verfügbarkeit prüfen. Ist das Listing inaktiv, eine aktive Varianten-ASIN suchen (z. B. die IW-Variante mit 3,90 m², 6 Platten) oder auf Platz 1 nachrücken lassen bzw. ein anderes Produkt wählen. Danach answer, quick und Karten anpassen. – zuständig: produkt-rechercheur, redakteur
- [hoch] products[1] GOODEX B0DDJSX7KP ist nicht belegbar. **Auftrag:** Den /dp/-Treffer mit Titel vorlegen, sonst die ASIN entfernen, `query` belassen und es dem Nutzer melden. – produkt-rechercheur
- [mittel] top5 small foot „Adventure“ 12310 hat keine ASIN und nur `query` (korrekt, weil die Treffer widersprüchlich sind). Laut CLAUDE.md muss das **dem Nutzer gemeldet** werden. **Auftrag:** In den Abschlussbericht an den Nutzer aufnehmen. – orchestrator
- [niedrig] top5 MAMOI: „Laut Berichten von kita.de und familie.de eine beliebte Wahl“ ist vage. **Auftrag:** Konkret formulieren: „laut Berichten Empfehlung im Boulderwand-Vergleich von kita.de (redaktionell, kein Labortest)“. – redakteur
- [niedrig] products[1] ist als „Bestes Preis-Leistungs-Verhältnis“ gelabelt, liegt aber in derselben Preisklasse € € wie Platz 1. **Auftrag:** Das Label begründen (das kleinste Set ist günstiger) oder in „Beste kompakte Wand für 3–6 Jahre“ ändern. – redakteur

## Fakten, Regeln und Qualität (ohne Beanstandung)
- Alle Montage- und Sicherheitsangaben sind belegt: Gartenpirat (Vollmauerwerk, 36 Monate), Ehrenkind-Gebrauchsanleitung (2,50 m Höhe, 2 m Abstand), Altersangabe von HUDORA und small foot. Die EN-71-Angaben sind als Anbietertexte gekennzeichnet.
- Unter-3-Jährige werden ausdrücklich ausgeschlossen, Fachkraft und Vermieter sind genannt.
- Gewichte summieren sich auf 1. Platz 1 hat 8,03 Punkte, die beiden anderen 7,85 und 7,28.
- Es gibt 6 FAQs, die `quick`-Blöcke sind vorhanden, die Top 5 bedienen einen anderen Intent (Bauform).
- Ehrenkind steht ohne Link mit `where`, das ist korrekt. BAUR ist nur als Quelle verlinkt, ohne Kaufempfehlung.
- Kein Duplicate Content mit sprossenwand-kinder.

## Technik (alle Prüfungen bestanden)
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
- Headless-Chromium bei 1440 px und 390 px: genau eine H1, JSON-LD parsebar (Article, ItemList, FAQPage, BreadcrumbList, Organization, WebSite), kein `AggregateRating`, keine Konsolenfehler, keine 404, kein horizontales Scrollen (die Vergleichstabelle scrollt nur in ihrem eigenen Container). Symbolbilder und beide Infografiken laden. Einmal trat ein 404 auf die Schriftdatei auf; der Fehler war nicht reproduzierbar, vermutlich weil ein anderer Agent parallel `dist/` neu gebaut hat.
- Euro-Beträge stehen nur in den Preisklassen-Beschriftungen. Im Text stehen keine festen Preise, keine Sternebewertungen und keine Bewertungsanzahlen.

## Korrekturen (Runde 1)
- **[hoch] Gartenpirat B0DD3NCHR1:** Die ASIN-Suche und die amazon.de-Suche zeigen weiterhin „Derzeit nicht verfügbar“. Eine aktive Indoor-Variante gibt es nicht, IW2 bis IW8 laufen nur über dieses Listing, und die Outdoor-Version B0DDKJSL7B ist ebenfalls nicht verfügbar. Gartenpirat ist deshalb aus den Top 3 gestrichen und wird nur noch als Herstellerquelle zum Untergrund genannt (Rigips und Ytong ausgeschlossen).
- **[hoch] GOODEX B0DDJSX7KP:** Auch eine erneute Suche (amazon.de, frei und mit ASIN) findet die ASIN nicht. Das einzige GOODEX-Listing, B0BSRDMC83, ist nicht verfügbar. GOODEX ist deshalb gestrichen.
- **Neue Top 3** (alle Rollen und Erwähnungen in answer, quick, Fließtext, Karten, FAQ, Figuren-Alt/Caption und Quellen angepasst):
  1. ALPIDEX Kletterwand Komplettset B0BVVGMY3F, „Beste Gesamtwahl“, 7,85 Punkte. Die Bewertung ist unverändert.
  2. ALPIDEX Starterset mit 35 Klettergriffen B07H7P5Q1R (vorher Top 5), „Beste Wahl zum Selberbauen“, Preisklasse €, 6,73 Punkte.
  3. MAMOI Kletterwand mit Klettergriffen und Montagesatz B0G596FRFY (neu, laut Suchtreffer auf Lager), „Günstiger Einstieg“, Preisklasse €, 6,25 Punkte. Die Daten (1 Modul, 18 mm, 4 Griffe, 120 kg) stammen aus dem Hersteller-Shop. Die widersprüchlichen Altersangaben (Modul ab 36 Monaten, Griffsets ab 14 Jahren) sind offen benannt.
  - Platz 1 hat die höchste Gesamtnote. Die Rolle „Preis-Leistung“ entfällt, die neuen Labels passen zur jeweiligen Preisklasse.
- **Top 5 neu:** Starterset und MAMOI-Modul sind in die Top 3 gewandert. Neu in den Top 5 sind das ALPIDEX-Set mit 35 Griffen und Einschlagdübeln für Betonwände (B01N2RPTJJ, Intent „Griffe direkt an die Betonwand“) und die ALPIDEX Kletterwand ohne Griffe (B0BW91JMZP). small foot, YARDIN und Ehrenkind bleiben.
- **[mittel] small foot 12310:** Hat weiterhin keine ASIN, nur `query`. Muss an den Nutzer gemeldet werden (Orchestrator).
- **[niedrig] MAMOI-Formulierung:** Die vage Formulierung ist entfallen. Stattdessen steht jetzt konkret: „empfiehlt … kita.de ein größeres MAMOI-Set mit vier Modulen und 16 Griffen (Note 1,4). Das ist ein redaktioneller Vergleich, kein Labortest.“
- **[niedrig] Preis-Leistungs-Label:** Mit GOODEX entfallen.
- Methodentext ergänzt: Empfohlen werden nur Produkte, die auf Amazon bestellbar sind. Gartenpirat und GOODEX waren bei der Prüfung nicht verfügbar.
- `node build.mjs` läuft fehlerfrei durch (Exit 0).
