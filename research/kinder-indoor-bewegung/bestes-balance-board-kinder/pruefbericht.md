# Prüfbericht – bestes-balance-board-kinder

Stand: 2026-10-22 · Prüfer · geprüft: `src/content/categories/bestes-balance-board-kinder.mjs`, `produkte.json`, `bilder.json`,
`dist/kinder-spielplatz/indoor/bestes-balance-board-kinder/index.html`

## Ergebnis: **Korrektur nötig**

Ein Pflichtfehler (Top-5-ASIN des Wobbel XL ist laut amazon.de „derzeit nicht verfügbar“), dazu kleinere Belegfehler im Text.
Build, Technik und Regeln sonst in Ordnung.

## ASIN-Prüfung (WebSearch, `allowed_domains: amazon.de`; amazon.de selbst nicht abrufbar – Stand der Suchtreffer)

| Platz | ASIN | Titel laut amazon.de | Status |
|---|---|---|---|
| 1 | B076DJNQVF | Wobbel Balanceboard transparent lackiert, Filz Mausgrau (Yogaboard), 90 × 30 cm, 200 kg | passt, auf Lager |
| 2 | B09J8MLGFG | PINOLINO Kari Balance Board aus Massivholz, rutschfest, bis 100 kg, ab 1 1/2 Jahren, Natur (392303) | passt, verfügbar |
| 3 | B07JHXFHGC | WOBBEL – Starter – Balancespiel aus Holz – Natur/Sky, 70 × 27,5 cm, 100 kg | passt, verfügbar („nur noch 4“) |
| Top 5 | B076FBZLX9 | XL Wobbel transparent lackiert, Filz Mausgrau | **„Derzeit nicht verfügbar“**, unbekannt ob wieder lieferbar |
| Top 5 | B076FB59LJ | Wobbel Yogaboard transparent lackiert ohne Filz, 90 × 30 cm | passt, verfügbar |
| Top 5 | B07K8T8853 | Wobbel Yogaboard Pro transparent lackiert mit Maus-Filz (grau) 90 cm | passt, auf Lager, nicht eingestellt |
| Top 5 | B084B1VDLJ | Kinderfeets Holzbalancierbrett/Balance Board Kinder – Sage Wash, 81 × 30 cm, 485 lb | passt, auf Lager |
| Top 5 | B09V1RPHVP | PINOLINO Kari Kletterbogen & Wippe, 2-in-1, ab 2 Jahren, 104 × 60 × 46 cm, 50 kg | passt, verfügbar |

**Starter B07JHXFHGC vs. B07HM6KTC5:** B07HM6KTC5 (Starter transparent lackiert, Filz Baby Maus grau) ist laut amazon.de
„derzeit nicht verfügbar“. B07JHXFHGC (Natur/Sky) ist aktiv → **B07JHXFHGC beibehalten**, die Alternative aus `produkte.json` › `offen` streichen.

**Wobbel XL:** Auch die zweite XL-ASIN mit Mausgrau-ähnlicher Ausführung, B07F9XJXWR („XL Clear with Felt Air“), ist „derzeit nicht
verfügbar“. Aktiv laut Suchtreffern: **B08KRJCMKN** „Wobbel XL unbehandelt lackiert Filz hellrosa“ (115 × 40 × 25 cm, 200 kg,
Drittanbieter Kinder Wonderland, nur 1 Stück) und **B08P4XCR9C** „Wobbel Board XL – Limited Edition Black Wash, Felt Sky Blue“
(115 × 40 cm, 200 kg, Drittanbieter Kiids_GmbH, 4 Stück). Beide sind nur knapp auf Lager.

Awin: nicht genutzt, alle Produkte haben eine Amazon-ASIN. Die Reihenfolge der Bezugsquellen ist eingehalten, es wurde kein neuer Händler eingebaut.

## Regeln & Technik

- `node build.mjs` läuft fehlerfrei (Exit 0), die Seite hat 3.280 Wörter.
- Meta Title 54 Zeichen, Description 152 Zeichen. 7 FAQs, jede H2 (4) hat einen `quick`-Block.
- Die Gewichte ergeben 1,0. Gesamtnoten: 8,88 / 8,05 / 7,98 → Platz 1 hat die höchste Note.
- Keine festen Preise im HTML (nur die Beschriftungen der Preisklassen), keine Amazon-Bilder, kein `AggregateRating`.
  JSON-LD lässt sich parsen (Organization, WebSite, Article, ItemList, FAQPage, BreadcrumbList).
- Alle Amazon-Links tragen `tag=toptopshop-21`.
- Chromium bei 1440 px und 390 px: keine Konsolenfehler, keine 4xx-Antworten, kein horizontales Scrollen (scrollWidth = clientWidth;
  Tabelle und Navigation scrollen nur in ihrem eigenen Container). Genau eine H1. Beide SVG-Grafiken laden. Das Symbolbild
  `balanceboard` wird korrekt dargestellt.
  Screenshots liegen in `/tmp/claude-0/-home-user-toptopshop/b4c9d281-2b59-5c6e-a7d0-1275ae9e1651/scratchpad/pruef-balanceboard/`.
- Rückrufe und Warnungen sind berücksichtigt (Kinderfeets Hanging Gym/Pram Walker, Wobbel-Nutzungshinweis). Der Sicherheitsabschnitt
  ist zurückhaltend formuliert.
- Die Top 5 („nach Alter und Ausführung“) haben einen anderen Suchintent als die Top 3. Es gibt keine Doppelung mit pikler-dreieck,
  weil der Kari-Kletterbogen dort nicht vorkommt.

## Korrekturaufträge

1. **[hoch] `top5.items[0]` (Wobbel XL, `asin: "B076FBZLX9"`)** – Das Listing ist laut amazon.de „derzeit nicht verfügbar“
   (verstößt gegen CLAUDE.md: aktive Listings bevorzugen). – Auf eine aktive XL-ASIN umstellen, z. B. B08KRJCMKN (Filz hellrosa)
   oder B08P4XCR9C (Black Wash, Filz Sky Blue). Dann `name` und `query` an den Amazon-Titel anpassen und die Maße 115 × 40 cm
   übernehmen. Die Alternative „andere Listings 125 × 40 cm“ entfällt oder braucht einen eigenen Beleg. Ist keine der beiden
   eindeutig aktiv, die `asin` entfernen und nur `query: "Wobbel XL Balanceboard"` lassen, dem Nutzer melden. Danach
   `produkte.json` (`top5[0]`, `offen`) nachziehen. – **produkt-rechercheur** (Text: **redakteur**)
2. **[mittel] `top3Intro`** – „Alle drei sind gebogene Bretter aus Buchen-Schichtholz“: Für das Pinolino Kari gibt es keinen Beleg
   für Schichtholz. Amazon nennt „Massivholz“, Pinolino nennt „Buche klar lackiert, 1,5 cm stark“. – Satz anpassen, z. B. „aus
   Buchenholz (Wobbel: Schichtholz, Pinolino: laut Amazon Massivholz)“. – **redakteur**
3. **[mittel] `editorial.sections[1]` (kaufkriterien), Absatz unter „Größe: Starter, Original oder XL“** – Der Satz „Je länger das
   Brett, desto flacher fällt meist der Bogen aus und desto ruhiger schaukelt es.“ hat keine Quelle. Das Starter-Listing
   (B07JHXFHGC) beschreibt sogar eine *sanftere* Krümmung als beim Original, das widerspricht dem Satz. – Satz streichen oder
   belegen. – **redakteur**
4. **[niedrig] Länge Wobbel Original („ca. 85–90 cm“)** an diesen Stellen: `products[0].features[2]`, `specs.masse`,
   `editorial` Absatz 3, Tabelle, `guide` › `facts[1]`, FAQ 2. – Wobbel nennt 83,5 cm, Amazon 90 cm. Die Spanne 85–90 schließt
   den Herstellerwert aus. – „ca. 83,5–90 cm“ schreiben oder beide Werte mit Quelle nennen. – **redakteur**
5. **[niedrig] `top5.items[1]` (Wobbel ohne Filz)** – Für „laut Händlern eher ab 3 Jahren“ fehlt in `produkte.json` ein Beleg.
   Der Warnhinweis von Holzspielzeug Profi gilt für die Variante *mit* Filz, das Amazon-Listing B076FB59LJ nennt „ab 0 Jahren“. –
   Altersangabe streichen oder eine Quelle nachtragen. – **produkt-rechercheur** / **redakteur**
6. **[niedrig] `top5.items[3]` (Kinderfeets)** – „Laut Kinderfeets europäisches Buchen-Schichtholz …“: Die Quelle ist der Händler
   kidobebe, nicht Kinderfeets. Für „laut Händlern ab 18 Monaten“ gibt es keinen Fakteneintrag mit Quelle. – Zuordnung auf
   „laut Händlerangaben“ ändern, für die Altersangabe eine Quelle nachtragen oder sie streichen. – **produkt-rechercheur** /
   **redakteur**
7. **[niedrig] FAQ „Wie viel Gewicht hält ein Balance Board aus?“** – „Laut Herstellerangaben tragen Wobbel Starter und Pinolino
   Kari 100 kg“: Beim Starter ist es laut `produkte.json` eine Händlerangabe. – In „laut Hersteller- und Händlerangaben“ ändern. –
   **redakteur**
8. **[niedrig] Quellen für Wobbel-Pressfilz und Bedienungsanleitung** – „Pressfilz … strapazierfähiger und leichter zu reinigen“
   (kaufkriterien, Top 5 Pro) und „Stehen, Sitzen, Wippen geprüft und zertifiziert laut Bedienungsanleitung“ (guide `quick`,
   FAQ 6): In `produkte.json` stehen sie nur als Zusammenfassung bzw. „zitiert über Händler“, ohne URL. – Quell-URLs in
   `produkte.json` nachtragen. – **produkt-rechercheur**
9. **[niedrig] `bilder.json` › `scoresAlt`/`scoresCaption`/`offen`** – Das ist noch der Entwurf mit fünf alten Kriterien und
   weicht von der Kategoriedatei ab. Die Seite verwendet den korrekten Alt-Text aus der `.mjs`. – Archivdatei an die finalen
   Kriterien angleichen und den offenen Punkt schließen. – **illustrator**

## Hinweise ohne Korrekturbedarf

- Die Wobbel-Altersangaben auf Amazon sind uneinheitlich: Original „ab 2 Jahren“, Pro „ab 18 Monaten“. Der Text nennt deshalb
  zu Recht nur Hersteller- und Händler-Warnhinweise und rät zur Aufsicht.
- Das Pinolino Kari hat laut Amazon das Herkunftsland China. Der Text sagt nur „deutscher Kindermöbel-Hersteller“, das ist korrekt.
- Unprüfbar aus der Umgebung: wobbel.eu, pinolino.de und die Safety-Gate-Datenbank. Die Methodik weist darauf hin.

## Runde 2 (2026-10-22) – Nachprüfung der Korrekturen

**Ergebnis: bestanden**

`node build.mjs` läuft fehlerfrei (Exit 0), die Seite hat 3.270 Wörter.

| Nr. | Prüfpunkt | Befund |
|---|---|---|
| 1 | Wobbel XL ohne ASIN | erledigt: `name` „Wobbel XL Balance Board“, nur `query`, Link im HTML geht auf `amazon.de/s?k=Wobbel+XL+Balance+Board&tag=toptopshop-21`, B076FBZLX9 kommt nicht mehr vor; Maße 115 × 40 cm, Hinweis auf zeitweise Lieferbarkeit; `produkte.json` › `top5[0]` nachgezogen |
| 2 | `top3Intro` | erledigt: „Buchenholz (Wobbel: Schichtholz, Pinolino: laut Amazon Massivholz)“ |
| 3 | Satz zum Bogen („je länger, desto flacher“) | gestrichen |
| 4 | Länge Wobbel Original | erledigt: überall „ca. 83,5–90 cm“ bzw. beide Werte mit Quelle genannt (features, specs, editorial, Tabelle, facts, FAQ) |
| 5 | Wobbel ohne Filz, „ab 3 Jahren“ | gestrichen |
| 6 | Kinderfeets | erledigt: „Laut Händlerangaben …“, „ab 18 Monaten“ gestrichen; `produkte.json` als Händlerangabe (kidobebe) geführt |
| 7 | FAQ Gewicht | erledigt: „Laut Hersteller- und Händlerangaben“ |
| 8 | Pressfilz und Bedienungsanleitung | erledigt: „strapazierfähiger/leichter zu reinigen“ entfernt; Pressfilz nur mit belegter Angabe (Starter-Listing: recyceltes PET); die Aussage „Wobbel prüft laut Bedienungsanleitung …“ steht nicht mehr im Text, in `warnungen` ist sie als nicht belegt vermerkt |
| 9 | `bilder.json` | erledigt: `scoresAlt`/`scoresCaption` entsprechen der Kategoriedatei, `offen` ist leer |

Restpunkt, nur das Archiv und ohne Folgen für die Seite: `produkte.json` › `offen[0]` sagt noch „alle Top 3 und Top 5 mit amazon.de-ASIN“.
Das XL steht inzwischen nur noch per `query` drin. Bei Gelegenheit anpassen (zuständig: produkt-rechercheur). Dem Nutzer melden, dass das XL
kein eindeutig aktives Listing hat und deshalb zur Amazon-Suche verlinkt.
