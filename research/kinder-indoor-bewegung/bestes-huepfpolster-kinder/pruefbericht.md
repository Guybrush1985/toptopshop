# Prüfbericht: bestes-huepfpolster-kinder

Stand: 2026-10-22 · Prüfer · Datei `src/content/categories/bestes-huepfpolster-kinder.mjs`,
Recherche `produkte.json`, `bilder.json`, Seite `/kinder-spielplatz/indoor/bestes-huepfpolster-kinder/`

## Ergebnis: **Korrektur nötig**

Keine Rechts- oder Sicherheitsverstöße und keine technischen Fehler. Korrigiert werden müssen: eine Top-5-ASIN, die laut amazon.de „derzeit nicht verfügbar“ ist, die Begründung für Platz 2 (Preis-Leistung bzw. „größte Fläche“), die mit dem eigenen Platz 3 nicht zusammenpasst, und mehrere kleine Zuschreibungen ohne Quelle.

## Geprüft und in Ordnung

- **Build:** `node build.mjs` läuft fehlerfrei (135 Seiten, Seite mit 4.618 Wörtern). Der Build lief im Repo und in einer eigenen Kopie unter scratchpad. Ein erster Lauf im Repo brach mit `ENOTEMPTY dist` ab, weil parallel ein anderer Build lief; der zweite Lauf ging durch.
- **Technik (Chromium, 1440 px und 390 px):** keine Konsolenfehler, keine 404. Kein horizontales Scrollen (`scrollWidth` = Viewport; breite Elemente nur in `nav` und `.tablewrap`, die beide scrollen). Genau eine H1. JSON-LD lässt sich parsen (Article, ItemList/Product/Review, FAQPage, BreadcrumbList). Kein `AggregateRating`. Beide SVG-Grafiken laden und haben einen Alt-Text. Das Symbolbild `bouncemat` wird korrekt angezeigt. Alle 23 Affiliate-Links haben `rel="sponsored nofollow"` und `tag=toptopshop-21`.
- **Regeln:** Die Gewichte ergeben zusammen 1,0. Gesamtnoten: Funzy 8,45, traturio 7,35, Linodino 8,15, also hat Platz 1 die höchste Note. 7 FAQs. Jedes H2 hat einen `quick`-Block. metaTitle hat 55 Zeichen, metaDescription 148. Keine festen Preise (nur Preisklassen). Keine Amazon-Bilder. Die Top 5 hat einen eigenen Suchintent (Wohnsituation, Alter, XL, Budget, Trampolin ab 6).
- **Bezugsquellen:** Alle Produkte sind über Amazon verlinkt. Awin wird nicht genutzt (es gibt keine passende Freischaltung). Neue Händler werden nur als Option in `produkte.json` genannt (Baur, Babywalz) und sind nicht eingebaut.
- **Sicherheit und Kinder:** Die Aussagen sind zurückhaltend formuliert, die Herstellerangaben gekennzeichnet. Die Aussage „Trampolin erst ab 6“ ist mit Kinderärzte im Netz und bfu belegt. Der Hinweis auf Aufsicht und auf Safety Gate ist vorhanden. Rückrufe zu Funzy, Linodino, traturio und Betzold habe ich auch in einer eigenen Websuche nicht gefunden.
- **Tests:** Stiftung Warentest und Öko-Test werden korrekt als „kein Test gefunden“ geführt. Der Trampolin-Test 04/2019 ist als „laut Berichten“ gekennzeichnet und richtig abgegrenzt.
- **Duplicate Content:** Ich habe Sätze mit Spielsofa, Fallschutzmatten und Balance-Board verglichen. Es gibt keine wortgleichen Sätze; die Querverlinkung ist stimmig.
- **Konsistenz mit der Spielsofa-Seite:** „Spielsofa ab ca. 1 Jahr laut Händler“ deckt sich mit `bestes-spielsofa-kinder.mjs`.

## ASIN-Prüfung (WebSearch, `allowed_domains: amazon.de`)

| Produkt | ASIN | Befund |
|---|---|---|
| Funzy Hüpfpolster Cord Cream Beige 85 × 65 × 21 | B0FCYYD56N | ✅ Titel passt. Herstellerangaben bestätigt: Taschenfederkern + PUR, ab 18 Monaten, 40 kg, 30 °C, OEKO-TEX, 6,5 kg. Listing mit Preis, also aktiv. |
| traturio 107 × 70 × 17, Mittelgrau/eisblau | B07ZW9RY5H | ✅ Titel passt genau. Snippet zeigt Preis (129 €) und 4,9★/60 und keinen Hinweis „nicht verfügbar“, ist also **wahrscheinlich aktiv**. Die Lieferbarkeit lässt sich nicht direkt abrufen. Das Listing nennt „nur Handwäsche“, 40 kg, Stahlfedern, Turnmatten-Unterseite und ist seit 11/2015 auf amazon.de. |
| Linodino Hüpfpolster 107 × 70 × 17 | – (query) | ⚠️ Das Amazon-Listing existiert: Titel laut Suchtreffern „Linodino Hüpfpolster für Kinder, 107 x 70 x 17 cm, Hüpfmatratze, Cord Bezug Grau mit Federkern …“, 4,8★/52. In mehreren Suchen (standard und extended) erscheint aber **keine /dp/-URL**. Die einzige gefundene Linodino-ASIN, B0CPJ2LYZ9, gehört zum Spielsofa. **Keine ASIN auffindbar**, daher bleibt `query` richtig. |
| Betzold Hüpfpolster S | B0DZVJJ945 | ✅ Titel passt, 40 kg, 8 kg, 40 °C. Auf der Seite steht intern die ASIN B0D2KH35ZK (Eltern/Kind-Listing, unkritisch). ⚠️ Das Listing nennt widersprüchliche Altersangaben: „2–12 Jahre“ und zugleich „nicht für Kinder unter 3 Jahren“. |
| traturio 130 × 90 × 25 | B07ZKY9QZC | ❌ Laut Snippet **„derzeit nicht verfügbar“** („ob und wann wieder vorrätig, ist unbekannt“). Aktive Alternativen derselben Größe: **B07ZWG9M8P** (blau/eisblau, 4,9★/37, mit Preis, ebenfalls 70 kg bzw. 60 kg im Text) oder **B091FTH979** (Outdoor blau/rot, 4,9★/35, mit Preis, 70 kg). |
| Betzold Hüpfpolster XL Indoor 140 × 90 × 21 | B0F267FCRT | ✅ Titel passt: 14,6 kg, 70 kg, PU-Schaum, Kunstleder, Alter 2–18+. |
| Jump Hüpfpolster blau 99 × 75 × 18 | B0CV5FK6DP | ✅ Titel passt (ab 3 Jahren, 40 kg). |
| SportPlus Fitness Trampolin Ø 126 cm | B0D8BLNK1F | ✅ Titel passt genau (Griff 82–117 cm, 130 kg). Intern steht die ASIN B0CT651MK7 (Variante, unkritisch). ⚠️ Die zitierten Mängel (Griff, Gummiseile) stammen aus dem Listing **B01N8W1WI4**, nicht aus diesem. |

**Ist traturio seriös genug für die Top 3?** Vertretbar. traturio verkauft seit 2015 auf amazon.de, hat einen eigenen Händler-Account und Brand Store, eine durchgängige Produktlinie in vielen Größen und Farben und konstant hohe Bewertungen (4,9★ bei 35 bis 60 Bewertungen je Listing). Die Marke wird auf beste-testsieger.de, vergleich.org und wunschkind-community geführt. Es gibt aber **keine auffindbare eigene Website, kein Impressum und keine Firmenangabe**. „Made in Germany“ ist allein eine Angabe des Anbieters. Der Text kennzeichnet das bereits („laut eigener Angabe“). Das reicht für Platz 2, wenn die Rolle sauber begründet ist (siehe K2).

## Korrekturaufträge

1. **[mittel] `top5.items[1]` (traturio 130 × 90 × 25), Feld `asin` und Quelle `sources[7]`.** Problem: B07ZKY9QZC ist laut amazon.de-Snippet „derzeit nicht verfügbar“. Auftrag: Eine aktive Variante eintragen, B07ZWG9M8P (blau/eisblau) oder B091FTH979 (Outdoor blau/rot). Danach Quellenlabel und `produkte.json` (`top5[1]`, `quellen`) anpassen und das Gewicht von 18 kg für die gewählte Variante bestätigen. Zuständig: **produkt-rechercheur**.
2. **[mittel] Platz 2 traturio: `answer`, `products[1].verdict`, `products[1].pros[0]`, `editorial.sections[0]` (Absatz traturio, „die Wahl für mehr Fläche“), `welches-huepfpolster-passt.quick` („Mehr Fläche … traturio“), Bildunterschrift `figures.scores.caption` („traturio bietet die meiste Fläche“).** Problem: Linodino (Platz 3) hat **dieselbe Fläche, 107 × 70 × 17 cm**, liegt in derselben Preisklasse und hat die höhere Note (8,15 gegenüber 7,35). Aussagen wie „größte Sprungfläche in derselben Preisklasse“ und „meiste Fläche fürs Geld“ stimmen daher nicht, und das Label „Bestes Preis-Leistungs-Verhältnis“ ist nicht begründet. Auftrag: Rolle und Begründung von traturio auf das stützen, was es wirklich unterscheidet: Outdoor-Varianten, Turnmatten-Unterseite, „Made in Germany“ laut Anbieter, viele Farben und Größen (zum Beispiel Label „Beste Wahl für drinnen & draußen“). Alle Formulierungen mit „größte“ oder „meiste Fläche“ streichen oder als „größer als Funzy“ formulieren. Zuständig: **redakteur**, Label gegebenenfalls in Absprache mit dem Orchestrator.
3. **[mittel] `editorial.sections[1]` (Vergleichstabelle), Zeile „Hüpfpolster“, Spalte „Typisches Alter“: „ab ca. 18 Monaten bis 2–3 Jahren laut Hersteller“.** Problem: Kein Hersteller nennt eine Obergrenze von 2–3 Jahren. Betzold gibt 2–12 Jahre an, die Grenze ist das Gewicht (40 kg). Auftrag: Durch „ab ca. 18 Monaten (Hersteller), Grenze meist 40 kg“ oder Ähnliches ersetzen. Zuständig: **redakteur**.
4. **[mittel] `kaufkriterien`, Callout „40 kg ist eine Grenze, kein Richtwert“: „Die Belastbarkeit gilt laut Hersteller für ein springendes Kind.“** Problem: Diese Herstelleraussage steht nicht in `produkte.json`, sie ist ohne Quelle einem Hersteller zugeschrieben. Auftrag: Als eigene Einschätzung formulieren („Wir verstehen die Angabe als Grenze für ein springendes Kind …“) oder eine Quelle nachweisen. Zuständig: **redakteur**.
5. **[mittel] Betzold-Altersangabe: `top5.items[0].text` („empfohlen von 2 bis 12 Jahren“), `welches-huepfpolster-passt` („Betzold gibt 2 Jahre an“), Callout „Sicherheit“ („Betzold S ab 2 Jahren“), FAQ 1 („Betzold nennt 2 Jahre“), `produkte.json` `warnungen[2]`.** Problem: Das Listing B0DZVJJ945 sagt zugleich „nicht für Kinder unter 3 Jahren geeignet“. Auftrag: Den Widerspruch nennen („laut Listing 2–12 Jahre, an anderer Stelle ab 3 Jahren“) oder vorsichtig mit 3 Jahren arbeiten. Zuständig: **produkt-rechercheur** (Fakt in `produkte.json` ergänzen), danach **redakteur**.
6. **[niedrig] `top5.items[4]` (SportPlus): „Einzelne Rezensionen bemängeln einen sich lockernden Griff bzw. gerissene Gummiseile.“** Problem: Laut `produkte.json` stammen die Rezensionen aus einem anderen Listing, B01N8W1WI4. Auftrag: „Bei einem baugleichen bzw. verwandten SportPlus-Listing bemängeln einzelne Rezensionen …“ schreiben oder den Satz streichen. Zuständig: **redakteur**.
7. **[niedrig] `products[2].pros[1]` sowie Kaufkriterien und Lautstärke: „laut Hersteller leise“ bzw. „Linodino bewirbt sein Polster ausdrücklich als leise“.** Problem: Dafür gibt es keinen Fakt mit Quelle in `produkte.json`. Auftrag: Die Herstellerangabe mit Quelle (linodino.de) nachtragen oder die Aussage streichen. Zuständig: **produkt-rechercheur**.
8. **[niedrig] `products[0].cons[2]`: „Hüpfpolster erst seit Kurzem im Funzy-Programm“.** Problem: Das ist nicht belegt. Auftrag: Belegen (zum Beispiel mit dem Datum „bei Amazon seit …“ aus dem Listing) oder zu „bisher wenige Erfahrungsberichte, kein unabhängiger Test“ umformulieren. Zuständig: **redakteur**.
9. **[niedrig] `pflege-haltbarkeit`, 1. Absatz: „Neue Hüpfpolster kommen oft vakuumverpackt und brauchen einige Stunden, bis sie ihre volle Höhe haben.“** Problem: Belegt ist nur, dass Linodino vakuumverpackt geliefert wird; „einige Stunden“ ist ohne Quelle. Auftrag: Auf Linodino beschränken („Linodino liefert vakuumverpackt …“) oder als allgemeinen Hinweis ohne Zeitangabe formulieren. Zuständig: **redakteur**.
10. **[niedrig] `figures.steps.steps[1]` (auch `bilder.json`): „Taschenfederkern und Federanzahl laut Hersteller entscheiden …“** Problem: Keiner der Top-3-Hersteller nennt eine Federanzahl. Auftrag: Zum Beispiel zu „Echter Federkern statt reinem Schaum – Angabe in der Produktbeschreibung prüfen“ ändern. Zuständig: **illustrator** (Grafiktext) mit **redakteur**.
11. **[niedrig] Platz 3 Linodino, Rolle „Beste Wahl für Kleinkinder (flach)“ und `bestFor`/`verdict`.** Problem: traturio ist mit 17 cm genauso flach und genauso groß. Der Vorteil von Linodino liegt in der ausdrücklichen Altersangabe ab 18 Monaten, im komplett abnehmbaren Bezug und in der stärkeren Federung laut Berichten. Auftrag: Die Begründung auf diese Punkte stützen und nicht auf „flach und großflächig“ allein. Zuständig: **redakteur**.
12. **[niedrig] `products[2].query`.** Problem: Das Amazon-Listing heißt laut Suchtreffern „Linodino Hüpfpolster für Kinder, 107 x 70 x 17 cm, Hüpfmatratze, Cord Bezug … mit Federkern“. Auftrag: Optional die Suchanfrage an diesen Titel anpassen, zum Beispiel „Linodino Hüpfpolster für Kinder 107 x 70 x 17 cm Hüpfmatratze Cord Federkern“. **Die ASIN bleibt unauffindbar**, der Nutzer sollte sie bei Gelegenheit manuell auf amazon.de nachtragen. Zuständig: **produkt-rechercheur**.
13. **[Hinweis] `bilder.json`.** Problem: `scoresAlt`, `scoresCaption` und `offen` sind veraltete Entwürfe mit anderen Kriterien. Die Kategorie-Datei nutzt bereits die richtigen Texte, auf der Seite ist also nichts falsch. Auftrag: Nur das Archiv bereinigen. Zuständig: **illustrator**.

## Nicht prüfbar (aus der Umgebung)

- Die Lieferbarkeit auf amazon.de lässt sich live nicht prüfen (amazon.de, linodino.de, funzy.de und wunschkind-community.de sind nicht direkt abrufbar). Alle Befunde stammen aus WebSearch-Snippets.
- Safety Gate und produktwarnungen.de waren nicht direkt abfragbar. In der Websuche gab es keine Treffer zu Rückrufen.
- traturio-Herkunft „Made in Germany“ und Firmensitz: keine unabhängige Quelle gefunden.

Screenshots: `/tmp/claude-0/-home-user-toptopshop/b4c9d281-2b59-5c6e-a7d0-1275ae9e1651/scratchpad/pruef-huepfpolster/`
(`huepfpolster-1440-full.png`, `huepfpolster-390-full.png`, `top-390.png`, `platz1-1440.png`).

---

## Runde 2 (Nachprüfung, 2026-10-22)

### Ergebnis: **bestanden**

Alle 13 Korrekturaufträge aus Runde 1 sind umgesetzt. Neue Fehler sind dabei nicht entstanden.

| Nr. | Befund |
|---|---|
| K1 | ✅ traturio 130 × 90 × 25 hat jetzt **B07ZWG9M8P** (blau/eisblau). In Runde 1 war diese ASIN per WebSearch mit Preis und 4,9★/37 sichtbar, ohne Hinweis „nicht verfügbar“. `sources` und `produkte.json` sind angepasst. Die Gewichtsangabe von 18 kg wurde entfernt. |
| K2 | ✅ Label „Beste Wahl für drinnen & draußen“. Die Aussagen „größte“ oder „meiste Fläche“ sind überall entfernt (answer, verdict, pros, Redaktionsabsatz, Quick-Block „passt zu wem“, Karte, Bildunterschrift). Die Begründung stützt sich jetzt auf Turnmatten-Unterseite, Outdoor-Varianten und Serienbreite. „Made in Germany“ ist als Anbieterangabe gekennzeichnet, mit dem Zusatz, dass es keine unabhängige Bestätigung gibt. |
| K3 | ✅ Tabelle: „ab ca. 18 Monaten (Hersteller), Grenze meist 40 kg“. |
| K4 | ✅ Callout ist jetzt als eigene Einschätzung formuliert („Wir verstehen die Angabe als …“). |
| K5 | ✅ Der Widerspruch bei der Betzold-Altersangabe (2–12 Jahre bzw. nicht unter 3 Jahren) wird genannt: in Top 5, „Nach Alter“, Callout „Sicherheit“ und FAQ 1. In `produkte.json` ist er als Fakt ergänzt. |
| K6 | ✅ SportPlus: „Bei einem verwandten SportPlus-Listing …“. |
| K7 | ✅ „Linodino leise“ ist gestrichen (pros, Lautstärke-Absatz). |
| K8 | ✅ Funzy: „Bisher wenige Erfahrungsberichte, kein unabhängiger Test“. |
| K9 | ✅ Pflege: Vakuumverpackung nur noch bei Linodino, ohne Zeitangabe. |
| K10 | ✅ Schritt 2: „Echter Federkern statt reinem Schaum – Angabe in der Produktbeschreibung prüfen“. |
| K11 | ✅ Linodino: Label „Beste Wahl für Kleinkinder“. Die Begründung nennt die ausdrückliche Altersangabe, den komplett abnehmbaren Bezug und die Sprungkraft laut Praxisbericht. Dass Linodino dieselbe Fläche und Höhe wie traturio hat, steht jetzt transparent im Text. |
| K12 | ✅ Linodino `query` ist an den Amazon-Titel angeglichen. Die **ASIN bleibt unauffindbar**; der Nutzer sollte sie manuell nachtragen. |
| K13 | ✅ In `bilder.json` sind `scoresAlt` aktualisiert und `offen` geleert. |

**Build und Technik:** `node build.mjs` lief in einer frischen Kopie unter scratchpad fehlerfrei (135 Seiten, diese Seite 4.718 Wörter). Bei 1440 px und 390 px gibt es keine Konsolenfehler, keine 404 und kein horizontales Scrollen. Die Seite hat genau eine H1, das JSON-LD ist lesbar und der neue Link `B07ZWG9M8P?tag=toptopshop-21` wird ausgegeben.

**Kosmetik (kein Blocker):** Bei traturio stehen die „Outdoor-Varianten“ sowohl in `pros[0]` als auch in `pros[2]`. Wer will, ersetzt eine der beiden Nennungen durch einen anderen Vorteil. Zuständig: redakteur.
