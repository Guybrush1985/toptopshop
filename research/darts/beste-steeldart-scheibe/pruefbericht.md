# Prüfbericht: /beste-steeldart-scheibe/

Stand: 2026-10-21 · Prüfer · Grundlage: `src/content/categories/beste-steeldart-scheibe.mjs`, `research/darts/beste-steeldart-scheibe/produkte.json`

## Ergebnis: **Korrektur nötig** (eine ASIN von Platz 3 ist nicht verfügbar, sonst nur Kleinigkeiten)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build (`node build.mjs`) | fehlerfrei, 3.060 Wörter |
| Meta | Titel 44 Zeichen, Description 157 Zeichen ✓ |
| Gewichte | Summe 1,0 ✓ |
| Gesamtnoten | P1 8,45 > P3 8,43 > P2 7,50, Platz 1 hat die höchste Note ✓ |
| FAQ | 8 ✓; jede H2 hat einen `quick`-Block ✓ |
| Top 5 | anderer Suchintent (Spielertyp/Anlass) ✓ |
| Preise/Bilder | keine festen Preise, nur Preisklassen; Symbolbilder, keine Amazon-Bilder ✓ |
| JSON-LD | parsebar, kein `aggregateRating` ✓ |
| Darstellung 1440/390 px | genau eine H1, kein horizontales Scrollen, keine Konsolenfehler, keine 404, Anker und interne Links ok, Symbolbild `dartboard` korrekt ✓ |
| Affiliate-Links | alle Produktlinks mit `sponsored`; ohne Tag sind nur die Quellenlinks (wie auf anderen Seiten) ✓ |
| Bezugsquellen | nur Amazon, kein Awin-Händler passend ✓ |
| Tests/Warnungen | kein StiWa-/Öko-Test-Test, korrekt so in der Methodik; testsieger.de nur als Vergleichsportal genannt ✓; Kinderhinweis zurückhaltend ✓ |

## ASIN-Prüfung (WebSearch, amazon.de, 2026-10-21)

| Produkt | ASIN | Befund |
|---|---|---|
| P1 Blade 6 | B09HR1SV6C | ✓ Titel passt, aktiv (Listing nennt Blade X als Nachfolger) |
| P2 Diamond Plus | B0018D69TE | ✓ Titel passt, aktiv, ca. 6.000–7.000 Bewertungen |
| P3 Blade 6 Triple Core Carbon | B0FLDWZFH7 | ✗ Suchtreffer zeigt **„Currently unavailable“** |
| Alternative P3 | B0G1C27K7J | ✓ „WINMAU Blade 6 Triple Core Carbon Professional Bristle Classic Dartboard“, mit Preis, ca. 2.860 Bewertungen, 48 × 48 cm, Rota-Lock + Spirit Master |
| Top 5 Blade X | B0GGS86MY4 | ✓ Variantenseite „Blade X & Blade 6“, Variante Blade X, 5 Jahre Garantie; der Hinweis im Text passt |
| Top 5 Target TOR/Goal | B0DFD14P67 | ✓ aktiv, Angaben (36XTEN, Peak-Fix, 60 %) bestätigt |
| Top 5 Blade 6 Set mit Surround | B0CJVJLZ6M | ✓ **aktiv**, Modell 5310, laut Listing inkl. 2 Sätzen Steeldarts, Oche und Checkout-Karte |
| (/dartautomaten/) | B0CBBNG62P | ✗ „derzeit nicht verfügbar“, ohne Liefertermin |
| Top 5 Unicorn Eclipse Pro 2 | B0BT9DZNM2 | ✓ Titel passt, aktiv (Listing nennt intern B01FVSLFCW, das ist unkritisch) |
| Top 5 Blade 6 Dual Core | B09SQBTSGW | ⚠ ein Snapshot zeigt „Currently unavailable“, Titel teils „Twin Core“ |
| Alternative Dual Core | B0G4DTMK9J | ✓ „WINMAU Blade 6 Dual Core Professional Bristle Classic Dartboard“, ca. 820 Bewertungen |

## Korrekturaufträge

1. **[hoch] products[2].asin (Platz 3)**: Das Listing ist nicht verfügbar. Korrekturauftrag: `asin: "B0FLDWZFH7"` → `asin: "B0G1C27K7J"`. Dazu in `sources` die URL `https://www.amazon.de/dp/B0FLDWZFH7` → `https://www.amazon.de/dp/B0G1C27K7J` ändern und `produkte.json` nachziehen. Zuständig: produkt-rechercheur.
2. **[mittel] top5.items[4].asin (Blade 6 Dual Core)**: Das Listing ist möglicherweise nicht verfügbar. Korrekturauftrag: `asin: "B09SQBTSGW"` → `asin: "B0G4DTMK9J"`. Lässt sich das nicht bestätigen, die ASIN weglassen und nur `query` behalten. Zuständig: produkt-rechercheur.
3. **[mittel] B0CJVJLZ6M gegenüber B0CBBNG62P**: B0CJVJLZ6M auf dieser Seite ist richtig und aktiv. Auf `/dartautomaten/` (`dartautomaten.mjs`, Top 5 „Winmau Blade 6 mit Surround“) ist B0CBBNG62P nicht verfügbar. Korrekturauftrag dort: `asin: "B0CBBNG62P"` → `asin: "B0CJVJLZ6M"`. Zuständig: produkt-rechercheur.
4. **[niedrig] top5.items[2].text**: Der Lieferumfang laut Listing fehlt. Korrekturauftrag: Nach „Blade 6 plus Surround als Wandschutzring“ ergänzen: „, dazu laut Listing zwei Sätze Steeldarts und eine Abwurflinie“. Zuständig: redakteur.
5. **[niedrig] guide „pflege-drehen“, Callout „Lärm im Mehrfamilienhaus“**: Die Aussage „Treffer auf Sisal sind leiser als auf einem E-Dart-Automaten“ hat keine Quelle in `produkte.json`. Korrekturauftrag: Den Satz auf „Treffer auf Sisal sind über die Wand als Körperschall hörbar.“ kürzen oder eine Quelle nachtragen. Zuständig: redakteur.
6. **[niedrig] editorial, Absatz `first`**: Die Funktionsweise des Sisals (Fasern werden verdrängt, das Loch schließt sich) ist plausibles Allgemeinwissen, hat aber keine Quelle. Optional eine Quelle ergänzen, z. B. die Händlertexte zu „selbstheilend“. Zuständig: produkt-rechercheur.

## Qualität

Die Seite erleichtert die Entscheidung gut: drei Sisalstufen in einer Tabelle, Rollen klar getrennt, die Prozentangaben zum Draht werden ehrlich eingeordnet. Überschneidungen mit `/bestes-dartboard-kabinett/` gibt es bei den Regelmaßen (Facts-Block 1,73/2,37/2,93 m) und beim Sicherheits-Callout. Bei einem Themencluster ist das vertretbar, die Formulierungen unterscheiden sich.

## Umsetzung (Orchestrator, 2026-10-21)
Korrekturen 1–5 umgesetzt: Platz 3 → B0G1C27K7J, Dual Core → B0G4DTMK9J (beide per Websuche auf amazon.de bestätigt), Set-Text ergänzt, Lärm-Satz gekürzt, `/dartautomaten/` auf B0CJVJLZ6M umgestellt. `asin` in produkte.json angepasst; alte Listings bleiben als Quellen dokumentiert.
