# Prüfbericht – bester-tuer-basketballkorb

Geprüft: 2026-10-22 · Datei `src/content/categories/bester-tuer-basketballkorb.mjs` · Quellen `produkte.json`, `bilder.json`
· Seite `dist/kinder-spielplatz/indoor/bester-tuer-basketballkorb/index.html`

## Ergebnis: **Korrektur nötig** (keine blockierenden Rechts- oder Build-Fehler, aber mehrere inhaltliche und eine Darstellungs-Korrektur)

## Technik
- `node build.mjs` fehlerfrei, Seite 4.095 Wörter, Anker `/basketballkorb-fest/#sicherheit` existiert.
- Headless-Chromium bei 1440 px und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen
  (scrollWidth = clientWidth), genau eine H1, beide SVGs laden (600 px), Alt-Texte gesetzt, Lazy Loading.
- JSON-LD parsebar: Organization, WebSite, Article, ItemList/Product/Review/Rating, FAQPage, BreadcrumbList –
  **kein AggregateRating**.
- Meta-Title 48 Zeichen, Description 145, 8 FAQs, Gewichte Summe 1,0. Gesamtnoten: Platz 1 = 7,750,
  Platz 2 = 6,325, Platz 3 = 7,725 → Platz 1 höchste Note (Abstand zu Platz 3 nur 0,025).
- Keine festen Preise im Text, keine Amazon-Bilder, Partner-Tag `toptopshop-21` an allen 8 Amazon-Links.
- Kein Duplicate Content mit `/basketballkorb-fest/` (Stichprobe).

## ASIN-Prüfung (WebSearch, allowed_domains amazon.de; amazon.de direkt nicht erreichbar – Proxy blockiert)
| Produkt | ASIN | Befund |
|---|---|---|
| SKLZ Pro Mini Hoop | B001I912SQ | Keine eigene /dp/-Seite im Index; erscheint als ASIN in den Produktdetails von B0HC45516W („SKLZ Pro Mini Hoop“, 4,2★/≈26.900, BSR 7.459, Garantie 1 Jahr, 45,7 × 30,6 cm). Plausibel die Standardvariante 0401, **Live-Prüfung nicht möglich**. Ein Suchtreffer meldet, dieselbe ASIN tauche auf mehreren Variantenseiten auf – Restrisiko, dass sie nicht exakt die 18×12-Variante vorauswählt. Akzeptiert, vor Merge live öffnen. |
| Wilson NBA Team Mini Hoop | B091MHMF3T | Index bestätigt: „Wilson Mini-Basketballkorb NBA Team Mini Hoop“, **Variante Dallas Mavericks**, Modell WTBA1302DAL, Ring 7″, Garantie 2 Jahre, Preis im Index ≈ 22 € (Preisklasse 1 passt). Der Link führt also fest auf das Mavericks-Design. |
| SKLZ Pro Mini Hoop Flip | B0BCXBPJ75 | Index bestätigt: Modell 11017, „folding rim“, transparent, 4,1★/231, Preis ≈ 62 € (Preisklasse 3 passt). Bessere Wahl als Eltern-ASIN B0CNC9YV2S, deren EN-Seite die LED-Variante „Showtime“ zeigt. ✔ |
| Franklin 54132X | B07VFDFGBG | Titel passt (17.7″ × 12″, 4,6★/6.603, ≈ 45 €), **aber dieselbe ASIN wird auch als „Franklin 25″ X-Large“ gelistet** – Variantenfamilie, Vorauswahl unklar. |
| SKLZ Pro Mini Hoop XL | – (query) | korrekt nur Suche (B0CR9K459M laut Index nicht verfügbar). ✔ |
| Little Tikes TotSports | B004GXLWLI | Titel passt (18 Monate–5 Jahre, 2½–4 ft, 4,4★/687), Angebote von Drittanbietern (≈ 59–70 €, 8 Neuangebote). Ein Hinweis „newer version … Japan import, currently unavailable“ betrifft offenbar eine andere Version. Aktiv über Drittanbieter – akzeptiert. |
| Wilson NBA Forge Pro Mini Hoop | B0DSCH1GDF | /dp/-Seite mit exakt passendem Titel („…WITH ALL TEAM STICKERS 18″ X 11″ BOARD SIZE“, WTBA3001FRGNBA, ≈ 67 €), Produktdetails nennen B091MRMPWB (seit 08/2021) – beide bezeichnen dasselbe Produkt; B0DSCH1GDF ist die im Index belegte /dp/-Seite → **beibehalten**. ✔ |
| SKLZ Pro Mini Swish | B0F62QJTV7 | Titel passt (5″-Schaumball, für alle Pro-Mini-Körbe, 2er-Pack), Produktdetails nennen B0GW13QY2V – Varianten-/Neulisting, unkritisch. Käufer berichten teils von abblätternder Beschichtung und „nicht wirklich leise“. |

Awin: nicht genutzt; Decathlon (14353, `notjoined`) korrekt nur als offener Punkt mit Bewerbungstext in `produkte.json`. Bezugsquellen-Reihenfolge eingehalten.

## Ist Platz 2 (6,3) empfehlenswert genug?
Grenzwertig. Der Wilson hat im mit 35 % stärksten Kriterium nur 5,5, und der Text nennt ihn selbst „die
riskanteste Wahl“ bzw. „bei gefälzten Türen eine Wette“. Das ist ehrlich und belegt, aber unter „Bestes
Preis-Leistungs-Verhältnis“ empfehlen wir ein Produkt, dessen Hauptfunktion (Passen an die Tür) unsicher ist.
Eine belegte Alternative unter 30 € mit Türstärkenangabe gibt es laut Recherche nicht (Spalding nicht
verfügbar, No-Name ohne Angaben, Decathlon SK500 nicht über Awin freigeschaltet). **Empfehlung:** Platz 2
behalten, aber Rolle ehrlicher benennen und die Messwarnung in die Kurzantwort ziehen (siehe K1).

## Korrekturaufträge

1. **[mittel] `products[1].label`, `answer`, `editorial.sections[0].blocks[0].quick`, FAQ 1** – Rolle „Bestes
   Preis-Leistungs-Verhältnis“ und „Günstig und kindgerecht leicht“ verschweigen in der Kurzantwort das
   Passformrisiko (Note 5,5). – Label z. B. „Günstiger Einstieg mit Softball“ und in `answer`/`quick` einen
   Halbsatz ergänzen („… Türspalt aber vorher messen, die Haken sind dicker“). – **redakteur**
2. **[mittel] Bewertungsgrafik `bester-tuer-basketballkorb-2026-bewertung.svg`** – Kriterienlabels „Befestigung &
   Passform an deutschen Türen“ und „Lautstärke, Türschutz & Sicherheit“ laufen unter die Balken (Balken ab
   x = 228, Text deutlich länger) und werden abgeschnitten; der Name von Platz 3 „SKLZ Pro Mini Hoop
   Basketballkorb mit klappbarem Ring, transparent“ überlappt die Gesamtnote 7,7 (sichtbar bei 390 px). – Labels
   in `criteria[].label` kürzen (z. B. „Passform an der Tür“, „Lautstärke & Sicherheit“) und
   `products[2].name` kürzen, z. B. „SKLZ Pro Mini Hoop mit klappbarem Ring“ (entspricht weiter dem
   Amazon-Titel). Prüfen, dass auch Kauf-Buttons/Vergleichstabelle danach sauber umbrechen. – **redakteur**
   (falls Labels nicht kürzbar: Template-Umbruch → **illustrator**)
3. **[mittel] `editorial.sections[0].blocks[2]` (p „Deshalb gewichten wir …“)** – „Die beiden SKLZ-Körbe haben …
   gepolsterte Halterungen mit einer Türstärkenangabe des Händlers“ widerspricht `products[2].cons`/`specs`
   („Keine eigene Türstärkenangabe gefunden“). – Umformulieren: Türstärkenangabe nur für den Pro Mini, beim
   Flip baugleiche Halterung ohne eigene Angabe. – **redakteur**
4. **[mittel] `products[2].ratings.passform` (7,5)** – identisch mit Platz 1, obwohl dem Flip die eigene
   Türstärkenangabe und die Wandmontage-Option („keine Angabe gefunden“) fehlen – genau die beiden Punkte,
   die das Kriterium laut Beschreibung bewertet. – Auf ca. 7,0 senken (Gesamtnote dann 7,55; Reihenfolge
   bleibt) und Diagramm neu bauen. – **redakteur**
5. **[mittel] `guide.sections[0]` callout „Sicherheit“** – „mehr dazu im Ratgeber Basketballkorb für den Garten
   (/basketballkorb-fest/#sicherheit)“: Die Zielseite erwähnt weder den Decathlon/Tarmak-Rückruf noch
   Rückrufe überhaupt (grep: kein Treffer). – Verweis umformulieren (z. B. „Großkörbe vergleichen wir im
   Ratgeber …“) oder den Rückruf mit Quelle test.de dort ergänzen (separater Auftrag). – **redakteur**
6. **[niedrig] Steps-Grafik, Schritt 5 (`figures.steps.steps[4]` / `bilder.json`)** – „Mitgelieferten Softball
   nutzen“ passt nicht zu Platz 1 und 3 (Gummiball im Lieferumfang; Text empfiehlt Schaumball nachzukaufen). –
   „Schaumball statt Gummiball nutzen …“. Schritt 3 „Montagehöhe an die Größe des Kindes anpassen“ widerspricht
   außerdem „An der Tür ist die Höhe vorgegeben“ – z. B. „Höhe prüfen: an der Tür fest, an der Wand frei wählbar“.
   – **illustrator** (Text in `figures.steps` → redakteur)
7. **[niedrig] FAQ „Kann man am Tür-Basketballkorb dunken?“** – „der Wilson ist dafür ausdrücklich nicht gebaut“:
   „ausdrücklich“ suggeriert eine Herstellerangabe; in `produkte.json` steht nur die redaktionelle Einschätzung
   „Nicht zum Dunken geeignet“ ohne Quelle. – „ausdrücklich“ streichen oder Quelle nachliefern. –
   **redakteur** (Quelle: produkt-rechercheur)
8. **[niedrig] `editorial.sections[1]` p unter „Wenn die Tür nicht passt: Wandmontage“ und `top5.items[1].text`** –
   „die größere XL-Version wird auf Ratgeberseiten … als dauerhafter Wandkorb genannt“: keine Quelle in
   `produkte.json` (nur Formulierung im Feld `warum`). – Quelle nachtragen oder Satz streichen. –
   **produkt-rechercheur** / **redakteur**
9. **[niedrig] `top5.items[2].text` (Little Tikes)** – „Im Suchindex nur über einen Drittanbieter …“ ist
   Arbeitsjargon auf der Live-Seite. – z. B. „Bei Amazon derzeit vor allem über Drittanbieter erhältlich.“ –
   **redakteur**
10. **[niedrig] `top5.items[0]` Franklin B07VFDFGBG** – Variantenfamilie (auch „25″ X-Large“ unter derselben
    ASIN). – Live prüfen, ob die 17,7″-Variante vorausgewählt ist; falls eine eigene Kind-ASIN der 54132X
    existiert, diese eintragen, sonst Name/Text so lassen und Hinweis „Größe 17,7 × 12 Zoll wählen“ ergänzen. –
    **produkt-rechercheur**
11. **[niedrig] `products[1]`** – Link B091MHMF3T führt fest auf das Design Dallas Mavericks, Maße im Text
    stammen von der Variante Washington Wizards. – In `variant` oder Feature transparent machen („Link führt zur
    Variante Dallas Mavericks, weitere Teams auf der Amazon-Seite wählbar“). – **redakteur**
12. **[Hinweis, vor Merge] Live-Prüfung** – B001I912SQ (Standard 18×12 vorausgewählt?), B091MHMF3T und
    B0BCXBPJ75 im Browser auf amazon.de öffnen; aus der Umgebung nicht möglich. – **Orchestrator/Nutzer**

## Unprüfbar
- amazon.de, sklz.com, wilson.com direkt (Proxy); alle Befunde stammen aus Suchindex-Ausschnitten.
- Aktuelle Lieferbarkeit der Top-3-Kind-ASINs (nur indirekt über Preis/Bewertungen im Index).

---

## Runde 2 (2026-10-22) – Ergebnis: **bestanden**

Build in einer Scratchpad-Kopie des Repos (ohne `dist/`, `.git`): `node build.mjs` fehlerfrei, Seite 4.198 Wörter.
Chromium 1440 px und 390 px: keine Konsolenfehler, keine 404, kein horizontales Scrollen, eine H1, beide SVGs laden,
kein AggregateRating. Gesamtnoten neu: Platz 1 7,750 · Platz 2 6,325 · Platz 3 7,550 (Anzeige 7,5) → Platz 1 klar vorn.

| Auftrag | Status |
|---|---|
| K1 Rolle/Kurzantwort Wilson | ✔ Label „Günstiger Einstieg mit Softball“; Messhinweis in `answer`, `quick` und FAQ 1 |
| K2 Bewertungs-SVG | ✔ Labels „Passform an der Tür“, „Board & Ring“, „Ball & Lieferumfang“, „Lautstärke & Sicherheit“ enden vor den Balken (x < 228); Name Platz 3 „SKLZ Pro Mini Hoop mit klappbarem Ring“ überlappt die Note nicht mehr – bei 1440 und 390 px geprüft |
| K3 Türstärkenangabe nur Pro Mini | ✔ |
| K4 Passform Platz 3 = 7,0 | ✔ mit Begründung im Text |
| K5 Verweis auf /basketballkorb-fest/#sicherheit | ✔ neutral formuliert („große Standkörbe und ihre Sicherung …“) |
| K6 Steps-Grafik | ✔ „Höhe prüfen“ und „Schaumball statt Gummiball“ |
| K7 „ausdrücklich“ | ✔ als redaktionelle Einschätzung formuliert |
| K8 „Ratgeberseiten“ | ✔ entfernt |
| K9 „Suchindex“ | ✔ entfernt |
| K10 Franklin-Variante | ✔ Hinweis „Größe 17,7 × 12 Zoll wählen“ |
| K11 Wilson-Variante | ✔ Dallas Mavericks offengelegt, Wizards-Maße gekennzeichnet |

**ASIN Platz 1 → B0HC45516W:** eigene /dp/-Seite, Titel „SKLZ Pro Mini Hoop“, Größenauswahl Standard (18 × 12″) /
XL-mini; eine Indexkopie zeigt Stil „standard“, eine andere „Micro“ – Vorauswahl nicht abschließend prüfbar (amazon.de
nicht erreichbar). Vertretbar, weil `variant` auf die wählbare XL-Größe hinweist.

Restpunkte (nicht blockierend):
- [niedrig] `products[0].variant` – statt „im Listing ist auch die XL-Größe wählbar“ besser „auf der Amazon-Seite
  Größe Standard wählen“ (analog Franklin). – redakteur
- [niedrig] FAQ „Kann man am Tür-Basketballkorb dunken?“ – Grammatik: „… halten wir dafür **für** nicht geeignet“. – redakteur
- [Hinweis] Vor dem Merge B0HC45516W, B091MHMF3T, B0BCXBPJ75 einmal live auf amazon.de öffnen.
