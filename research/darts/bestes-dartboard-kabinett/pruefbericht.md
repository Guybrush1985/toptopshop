# Prüfbericht: /bestes-dartboard-kabinett/

Stand: 2026-10-21 · Prüfer · Grundlage: `src/content/categories/bestes-dartboard-kabinett.mjs`, `research/darts/bestes-dartboard-kabinett/produkte.json`

## Ergebnis: **Korrektur nötig** (nur kleine Punkte, alle ASINs aktiv)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build (`node build.mjs`) | fehlerfrei, 3.062 Wörter |
| Meta | Titel 50 Zeichen, Description 160 Zeichen ✓ |
| Gewichte | Summe 1,0 ✓ |
| Gesamtnoten | P1 7,88 > P3 7,53 > P2 6,73, Platz 1 hat die höchste Note ✓ |
| FAQ | 7 ✓; jede H2 hat einen `quick`-Block ✓ |
| Top 5 | anderer Suchintent (Wandschutz ohne Schrank, nach Wohnsituation) ✓ |
| Preise/Bilder | keine festen Preise; Symbolbild `dartcabinet` korrekt, keine Amazon-Bilder ✓ |
| JSON-LD | parsebar, kein `aggregateRating` ✓ |
| Darstellung 1440/390 px | genau eine H1, kein horizontales Scrollen, keine Konsolenfehler, keine 404, Anker (#top5-wandschutz, #platz-N) ok ✓ |
| Bezugsquellen | nur Amazon; die freigeschalteten Awin-Händler (Rewe, Radwelt, BrickZoneHub) führen keine Dartschränke ✓ |
| Sicherheit | zurückhaltend, mit Hinweis auf Leitungen und Dübel nach Wandart ✓; keine Rückrufe gefunden, steht so in der Methodik ✓ |

## ASIN-Prüfung (WebSearch, amazon.de, 2026-10-21)

| Produkt | ASIN | Befund |
|---|---|---|
| P1 Winmau Diamond-Plus-Schrankset | B0DWT8YLS1 | ✓ siehe unten |
| P2 Mission CAB011 | B08NXYSM7Q | ✓ Titel passt, aktiv, 4,3/5 (144); laut Bewertungen Versand teils aus UK mit Importgebühren |
| P3 Target Arc Home Cabinet Set | B08ZYQMZTH | ✓ Titel passt, aktiv, Lieferumfang bestätigt (Modell 440019) |
| Top 5 Winmau Pro Line Surround | B0GWM3XWX9 | ✓ Titel passt (intern B0DJDJVFBS, unkritisch) |
| Top 5 Unicorn Dartmate Tri-Stand | B01HXK0XLU | ✓ aktiv, ca. 4 kg, ab 6 Jahren/Aufsicht bestätigt |
| Top 5 Winmau Plain Rosewood | B01KJP3L5G | ✓ aktiv, Modell 4060; MDF laut Bewertungen bestätigt |
| Top 5 Target Arc Licht | B09CV8JPXV | ✓ aktiv; „kurzes Kabel“ bestätigt (2-m-Kabel) |
| Top 5 Holz-Backboard WDS | B0CJ3DY7VV | ✓ aktiv, 4,4/5 (591), 100 × 97 × 5 cm, ca. 7,5 kg |

**B0DWT8YLS1 und B077TW9CWF (gezielt geprüft):** Beide /dp/-Seiten zeigen dasselbe Set: Winmau Modell 5003, Diamond-Plus-Scheibe, Schrank, 2 Dartsätze, Oche, Kreide und Tuch, ca. 4,5/5. Auf B0DWT8YLS1 lautet der Titel „Winmau Darts Set (Black Cabinet, Diamond Dartboard and Darts)“, die Seite ist mit Preis gelistet, ca. 1.350 Bewertungen. B077TW9CWF heißt nur „WINMAU Professionelles Dart Set“ (ca. 1.085 Bewertungen). Dass die Detailtabelle eine andere ASIN nennt, ist auf amazon.de häufig: dasselbe kommt bei B0FT31NJBN, B01KJP3L5G, B09CV8JPXV und B0GWM3XWX9 vor. Es bedeutet keinen falschen Link. **B0DWT8YLS1 bleibt.** Sein Titel beschreibt das Produkt eindeutiger und es ist aktiv. Kein Korrekturbedarf.

**WDS-Backboard (No-Name?):** WDS ist keine austauschbare No-Name-Ware. „WDS Darts Sports“ ist eine eigene Darts-Marke (Händler- und Herstellerprofil u. a. auf dem Decathlon-Marktplatz, eigener Eintrag als Hersteller auf testberichte.de, eigene Ersatzteile wie der Tablet-Halter B08QGVHFGS; laut eigenem Listing „Made in Germany/Berlin“, nicht unabhängig belegt). Die Regel „keine No-Name-Ware“ gilt laut `produkt-rechercheur.md` für die Top 3. Der vorgeschlagene Ersatz **Winmau Blade 360 Surround (B0FWS1HZC9)** ist belegt (aktiv, 4,8/5 bei 35 Bewertungen, Modell 4464). Er ist aber ebenfalls ein Schaumring und würde Top-5-Platz 1 (Pro Line Surround) doppeln. Wegfallen würde dann der eigene Suchintent „großflächiges Backboard / Tablet-Halter“, auf den Intro und Guide-Abschnitt „kabinett-oder-surround“ ausdrücklich verweisen. **Empfehlung: WDS behalten, nur den Namen schärfen** (Auftrag 1).

## Korrekturaufträge

1. **[mittel] top5.items[4].name/text (WDS-Backboard)**: Der Name ist eine Gattungsbezeichnung, die Marke steht nur in Klammern. Korrekturauftrag: `name: "Holz-Dartboard-Surround / Backboard mit optionalem Tablet-Halter (WDS)"` → `name: "WDS Darts Sports Holz-Dartboard-Surround mit optionalem Tablet-Halter"`. Im Text „(Händlerangabe, Marke laut Listing WDS)“ → „(Händlerangabe); rund 7,5 kg, deshalb sicher verschrauben“. Gewicht laut Listing ca. 7,5 kg; in `produkte.json` als Fakt mit Quelle nachtragen. Zuständig: redakteur + produkt-rechercheur.
2. **[niedrig] products[0].name**: Der Amazon-Titel lautet „Winmau Darts Set (Black Cabinet, Diamond Dartboard and Darts)“, im Text steht „Diamond Plus Dartboard“. Laut CLAUDE.md wird der Name an die Amazon-Bezeichnung angepasst. Korrekturauftrag: `name: "WINMAU Darts Set (Black Cabinet, Diamond Plus Dartboard and Darts)"` → `name: "Winmau Darts Set (Black Cabinet, Diamond Dartboard and Darts)"`. `variant` behält „mit Diamond-Plus-Scheibe“, denn der Lieferumfang laut Listing nennt die Diamond Plus. Zuständig: redakteur.
3. **[niedrig] editorial „kaufkriterien“, H3 „Gewicht und Platz“**: „Kabinette mit Scheibe wiegen laut Listings rund 6 bis 11 kg“ ist so nicht belegt. Das Gesamtwahl-Set wird mit 10,5 pounds (ca. 4,8 kg) gelistet, 10,8 kg gilt nur für das verworfene Blade-6-Set. Korrekturauftrag: → „Kabinette mit Scheibe wiegen laut Listings rund 5 bis 11 kg“. Die Angabe von 10,5 lb in `produkte.json` aufnehmen. Zuständig: produkt-rechercheur + redakteur.
4. **[niedrig] editorial „welches-kabinett-passt“, letzter Absatz**: „Ein Schloss haben die vorgestellten Schränke laut Listings nicht“ hat keine Entsprechung in `produkte.json`. Korrekturauftrag: Den Satz ersetzen durch „Ein Schloss nennen die Listings der vorgestellten Schränke nicht – die Pfeile gehören deshalb trotzdem außer Reichweite.“ oder eine Quelle nachtragen. Zuständig: redakteur.
5. **[niedrig] guide, Callout „Sicherheit“**: „Hersteller schließen Kinder unter 6 Jahren aus“ ist nur für den Unicorn Tri-Stand belegt. Korrekturauftrag: → „Hersteller wie Unicorn schließen Kinder unter 6 Jahren aus und verlangen die Aufsicht Erwachsener.“ Zuständig: redakteur.
6. **[niedrig] products[1].cons (Mission CAB011)**: Optional ergänzen, dass die Ware laut Kundenberichten teils aus Großbritannien kommt, mit möglichen Importgebühren. Der Hinweis hilft bei der Kaufentscheidung. Zuständig: produkt-rechercheur.

## Qualität

Die Seite ist entscheidungsstark: Komplettset, leerer Schrank und Set mit Licht als klare Rollen, eine Bauart-Tabelle mit Schwächen, Dübel nach Wandart und Alternativen ohne Bohren. Die Regelmaße und der Sicherheits-Callout überschneiden sich inhaltlich mit `/beste-steeldart-scheibe/`. Das ist vertretbar, weil Formulierung und Schwerpunkt (Schrankmontage) verschieden sind.

## Umsetzung (Orchestrator, 2026-10-21)
Korrekturen 1–5 umgesetzt (WDS-Name, Platz-1-Name an Amazon-Titel, Gewichtsspanne 5–11 kg, Schloss-Satz, Unicorn-Altersangabe). Das WDS-Gewicht (7,5 kg) wurde nicht übernommen, da ohne Quelle in produkte.json. Punkt 6 (optional) nicht umgesetzt.
