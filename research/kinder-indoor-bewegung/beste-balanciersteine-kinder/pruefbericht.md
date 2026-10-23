# Prüfbericht – beste-balanciersteine-kinder

Prüfdatum: 2026-10-22 · Prüfer-Agent · geprüft: `src/content/categories/beste-balanciersteine-kinder.mjs`,
`research/kinder-indoor-bewegung/beste-balanciersteine-kinder/produkte.json`, `bilder.json`, gebaute Seite
`/kinder-spielplatz/indoor/beste-balanciersteine-kinder/`.

## Ergebnis: **Korrektur nötig**

Zwei Punkte sind mittelschwer: die 100-kg-Angabe der Flusssteine und das Symbolbild der Balancierstrecke.
Die übrigen Punkte sind Hinweise. Technik, Regeln, ASINs und die Begründung, warum alle drei Empfehlungen von Gonge kommen, sind in Ordnung.

## Korrekturaufträge

- **[mittel] Flusssteine: Belastbarkeit 100 kg ist nicht so eindeutig wie dargestellt** –
  Fundstellen: `.mjs` Z. 22 (`answer`), Z. 54 (`ratings.belastung: 9.0`), Z. 57 (`verdict`: „auch Erwachsene trägt“),
  Z. 60, 64, 69, Z. 183 (`quick`), Z. 185 („Mit 100 kg … dürfen auch Eltern einmal mitlaufen“), Z. 202, Z. 212, Z. 229, Z. 297.
  – Problem: Das amazon.de-Listing B000ANIVRG nennt max. 100 kg. Mehrere britische Fachhändler nennen für dasselbe
  6er-Set (gleiche Maße 36/25 cm, Höhe 8,5/4,5 cm) übereinstimmend **max. 75 kg**: Hope Education, Findel International, Davies Sports
  und SportSafe. Gryphon House (USA) nennt 110 lb (ca. 50 kg) und „ab 4 Jahren“. Die Methodik (Z. 43) und die Kaufkriterien (Z. 202)
  versprechen: „Wo Händler unterschiedliche Alters- oder Belastungsangaben machen, nennen wir die vorsichtigere.“ Bei den Hügelkuppen
  wird das umgesetzt, bei den Flusssteinen nicht. „100 kg“ ist das wichtigste Argument für Platz 1. – Korrekturauftrag:
  (1) Produkt-Rechercheur: Abweichung in `produkte.json` unter `fakten` mit Quelle eintragen
  (z. B. https://www.findel-international.com/product/sport/pe-essentials/control-and-balance/gonge-river-stones-pack-of-6/evmt13433,
  https://daviessports.co.uk/product/pe-essentials/control-and-balance/gonge-river-stones-pack-of-6/ppep07379) und `specs.Belastung` anpassen.
  (2) Redakteur: Die Angabe wie bei den Hügelkuppen formulieren: „75 kg (vorsichtigere Angabe; laut amazon.de-Listing 100 kg)“.
  Die Aussagen „auch Erwachsene“ und „Eltern dürfen mitlaufen“ streichen oder relativieren. `ratings.belastung` neu einordnen
  (Platz 1 bleibt auch mit 8,0 vorn: 8,48 gegenüber 8,38). Die Spanne in Z. 202 („bis 100 kg bei den Gonge-Flusssteinen“) und den FAQ-Vergleich anpassen.
  – zuständig: produkt-rechercheur, danach redakteur

- **[mittel] Symbolbild `beampath` zeigt eine erhöhte Balancierstrecke** – Fundstelle: `src/templates/visuals.mjs` Z. 255 (Platz 3,
  „Gonge Balance-Weg“). – Problem: Das Bild zeigt einen Balken auf zwei Beinen und eine Rampe auf einem hohen Pfosten bis zu einer Kuppe.
  Das wirkt wie ein Schwebebalken. Das Produkt besteht aber aus sieben flachen, 4,5 cm hohen Elementen, die direkt auf dem Boden liegen.
  Der Text wirbt gerade mit „Flach – geringe Sturzhöhe“. Das Bild führt also beim Sicherheitsmerkmal in die Irre.
  – Korrekturauftrag: Die Form `beampath` neu zeichnen, als Folge flacher, schmaler Balken auf der Bodenlinie, gerade oder leicht
  geschwungen und ohne Beine oder Rampe. Ein Trittstein am Ende ist möglich. – zuständig: illustrator

- **[niedrig] Stapelstein- und COSTWAY-ASIN sind Varianten- bzw. Eltern-ASINs** – Fundstelle: Z. 246 (`B0FSFW5NBW`), Z. 249 (`B0FBHRHZ75`).
  – Problem: Der Titel passt jeweils. In den Produktdetails der Seiten stehen aber die ASINs B0DK3PMQTB (Stapelstein Rainbow I) bzw. B0GBWWLMBR
  (COSTWAY 5er). Beide Links lösen laut Suche auf das richtige Produkt auf, das Listing ist aktiv. – Korrekturauftrag: Prüfen, ob die
  Kind-ASIN der gezeigten Variante eindeutiger ist, und gegebenenfalls übernehmen. Sonst so lassen. – zuständig: produkt-rechercheur

- **[niedrig] Belege für die Aussage „keine gleichwertige Alternative“ vervollständigen** – Fundstelle: `produkte.json` `verworfen`.
  – Problem: In der Suche erscheinen weitere Hügelkuppen- bzw. Flussstein-Sets: HAPPYMATY B0CLLHL71H, ein No-Name-11-teiliges Set mit
  Hügelkuppen B0CTQQHL9T und das Sport-Tec-12er-Set B081D5KN8S (Händlermarke von Gonge-Ware). Sie fehlen in `verworfen`. Die Aussage
  im Text ist mit dem Zusatz „etablierte Marke“ haltbar, im Archiv aber nicht belegt. – Korrekturauftrag: Diese Sets mit kurzem Grund in
  `verworfen` aufnehmen (kein Text-Änderungsbedarf). – zuständig: produkt-rechercheur

- **[niedrig] „Gonge aus Dänemark“ ohne Eintrag in `produkte.json`** – Fundstelle: Z. 32 („der dänische Hersteller“), Z. 190.
  – Problem: Die Aussage ist sachlich zutreffend, aber im Recherchearchiv nicht belegt. Davies Sports nennt „Made in China“ als
  Herstellungsland. Das widerspricht dem Text nicht, da nur vom Hersteller die Rede ist. – Korrekturauftrag: Eine Quelle für den
  Firmensitz ergänzen. Nicht „Made in Denmark“ o. Ä. schreiben. – zuständig: produkt-rechercheur

- **[niedrig] „Strecke von gut zwei Metern“** – Fundstelle: Z. 263. – Problem: 3 × 36 cm + 3 × 25 cm ergeben 1,83 m ohne Abstände.
  „Gut zwei Meter“ stimmt nur mit Lücken zwischen den Steinen. – Korrekturauftrag: Zum Beispiel „mit kleinen Abständen rund zwei Meter“. – zuständig: redakteur

- **[niedrig] Drinnen/draußen-Angabe zu den Flusssteinen ohne Fakt mit Quelle** – Fundstelle: Z. 277, Z. 295. – Problem: Die Angabe steht in
  `produkte.json` nur unter `specs.Einsatz`, nicht unter `fakten` mit Quelle. Das Nordic-Listing B08C1DY1MH trägt „Outdoor“ im Titel.
  – Korrekturauftrag: Einen Fakt mit Quelle ergänzen. – zuständig: produkt-rechercheur

- **[niedrig] Methodiksatz unklar** – Fundstelle: Z. 43 („… Ratgeber von kita.de, familie.de und wunderweib.de, die wir nur aus Berichten
  kennen …“). – Problem: Es bleibt unklar, was gemeint ist (gemeint sind vermutlich Suchauszüge). wunschkind-community.de wird im Text
  zitiert (Z. 186), fehlt aber in der Methodik. – Korrekturauftrag: Zum Beispiel „deren Inhalte wir nur über Suchauszüge einsehen konnten“
  schreiben und wunschkind-community.de ergänzen. – zuständig: redakteur

- **[Hinweis] Balance-Weg: Gummikante evtl. auch klassisch belegt** – Fundstelle: Z. 127, 133, 200. Laut Suchauszug nennt auch das Listing
  B000KTT9JE „Kunststoff mit gummiartigen Kanten“. Die jetzige Formulierung ist vorsichtig und nicht falsch. Ein Rechercheur kann das prüfen,
  danach entfällt eventuell der Nachteil. – zuständig: produkt-rechercheur (optional)

## Geprüft und in Ordnung

**ASINs** (WebSearch, `allowed_domains: amazon.de`, 2026-10-22; amazon.de selbst nicht direkt abrufbar, Lagerstatus nur aus Such-Snapshots):

| Produkt | ASIN | Titel passt | Status laut Snapshot |
|---|---|---|---|
| Gonge Fluss-Steine 6er Set (2120) | B000ANIVRG | ja | aktiv, nicht eingestellt, ca. 1.900 Bewertungen |
| Gonge Hügelkuppen / Hilltops (2121) | B0027WQV5M | ja | aktiv, nicht eingestellt, 193 Bewertungen; Listing: ab 24 Mon., 220 lb |
| Gonge Balance-Weg (G-2123) | B000KTT9JE | ja | aktiv, 346 Bewertungen |
| Gonge Balancierset 12-teilig | **B086X2MWF3** | ja (6 Flusssteine + 5 Kuppen + 1 federnder Stein) | **auf Lager** (Sportlädchen), nur 2 Bewertungen, mehrere Anbieter; Text weist darauf hin ✔ |
| Stapelstein Rainbow I | B0FSFW5NBW | ja | aktiv (Detail-ASIN B0DK3PMQTB, siehe oben) |
| Erzi Balancierbrett Feldsteine 190 cm (46384) | **B00P3NMN40** | ja | **„Availability: Limited“**, also eingeschränkt, aber nicht „derzeit nicht verfügbar“ oder eingestellt; der Text sagt „Verfügbarkeit war zuletzt eingeschränkt“ ✔. Vor dem Merge kurz live prüfen. |
| Gonge Taktile Fluss-Steine 5er | B0CNR8P2SP | ja | auf Lager („nur noch 10“) |
| COSTWAY 5er Balanciersteine | B0FBHRHZ75 | ja | aktiv (Detail-ASIN B0GBWWLMBR, siehe oben) |

- **Bezugsquellen:** Alle Produkte laufen über Amazon, kein Awin-Händler und keine neuen Händler eingebaut. Die Awin-Optionen (Stapelstein 20615,
  Sport-Thieme 11417) stehen nur als offener Punkt in `produkte.json` ✔.
- **Alle Top 3 von Gonge:** Das wird transparent begründet, an drei Stellen: `top3Intro` (Z. 32), die eigene H3 „Warum alle drei Empfehlungen
  von Gonge sind“ (Z. 189–190, mit Beispiel Sport-Thieme-Set 50 kg) und die Methodik (Z. 43). Andere Marken (Stapelstein, Erzi, COSTWAY)
  stehen in der Top 5, der Aufbau „je Produktart ein Set“ folgt der Briefing-Entscheidung zu gemischten Kategorien. Ausreichend.
  Die Begründung ist leicht redundant, aber noch nicht störend.
- **Regeln:** keine festen Preise (nur Preisklassen), keine Amazon-Bilder (Symbolbilder, gekennzeichnet), kein `AggregateRating`.
  Gesamtnoten 8,73 / 8,38 / 8,08 (Platz 1 höchste), Gewichte ergeben 1,0. Die Top 5 hat einen anderen Suchintent („nach Budget und Einsatz“).
  7 FAQs mit direkter Antwort, `quick` in allen vier H2-Abschnitten. Meta-Title 50, Description 156 Zeichen.
  Keine Rückrufe gefunden (eigene Websuche, Safety Gate nicht direkt abfragbar, das steht in der Methodik). Aufsicht, EN 71 und
  Weichmacher sind zurückhaltend formuliert, keine Förderversprechen, Verweis auf Kinderarzt und Ergotherapie ✔.
- **Fakten:** Die übrigen Produkt- und Testaussagen haben Entsprechungen in `produkte.json`. „spiel gut“ ist als „laut Bericht, nicht
  nachgeprüft“ gekennzeichnet. Kein Institutstest wird behauptet.
- **Qualität:** konkrete Entscheidungshilfe (Altersstufen, Steigerung Steine → Kuppen → Weg, Parcours-Ideen). Keine nennenswerte
  Überschneidung mit verwandten Seiten: ein 8-Wort-Abgleich gegen Balance Board, Spielsofa, Hüpfpolster, Pikler-Dreieck, Fallschutzmatten
  und Türbasketballkorb fand nur Methodik-Standardformeln.
- **Technik:** `node build.mjs` läuft fehlerfrei (in isolierter Kopie gebaut, um parallele Prüfer nicht zu stören), 3.486 Wörter.
  Headless-Chromium bei 1440 und 390 px: keine Konsolenfehler, keine 4xx oder fehlgeschlagenen Requests, kein horizontales Scrollen,
  genau eine H1. JSON-LD ist parsebar (Article, ItemList mit 3× Product/Review, FAQPage, BreadcrumbList, Organization, WebSite).
  Beide Infografiken laden mit Alt-Text, Affiliate-Links haben `?tag=toptopshop-21` und `rel="sponsored nofollow"`, Quellenlinks
  haben kein `sponsored`. Die Symbolbilder `stones` und `hills` passen, `beampath` siehe oben.
  Screenshots: `/tmp/claude-0/-home-user-toptopshop/b4c9d281-2b59-5c6e-a7d0-1275ae9e1651/scratchpad/pruef-balanciersteine/`.
- `bilder.json` → `scoresAlt` ist veraltet (Entwurfskriterien). In der `.mjs` steht der korrekte, finale Alt-Text, deshalb nur ein Archiv-Hinweis.

---

## Runde 2 (Nachprüfung 2026-10-22)

### Ergebnis: **bestanden**

| Punkt aus Runde 1 | Status |
|---|---|
| [mittel] Flusssteine 100 kg | ✔ behoben. Überall gilt jetzt „75 kg (vorsichtigere Angabe; laut amazon.de-Listing 100 kg)“: Features Z. 60, Nachteil Z. 65, Specs Z. 69, Absatz Z. 185, Kaufkriterien Z. 202, Tabelle Z. 212. Die Aussagen „auch Erwachsene“ und „Eltern mitlaufen“ sind entfernt; in Z. 185 steht jetzt ausdrücklich, dass Erwachsene nicht mitturnen sollen. `answer`, `quick`, Zielgruppen-Karte und Verdict argumentieren mit Höhen, Gummirand und Stapelbarkeit. `ratings.belastung` steht auf 8,0; Gesamtnoten 8,48 / 8,38 / 8,08, Platz 1 bleibt vorn. `produkte.json` enthält den 75-kg-Fakt mit Quelle, Findel und Davies stehen in den `sources`. |
| [mittel] Symbolbild `beampath` | ✔ behoben. Neu gezeichnet als flache Balken und Trittsteine auf einer Bodenfläche, ohne Beine, Rampe oder Pfosten (Screenshot 1440 px: `…/scratchpad/pruef-balanciersteine/r2-beampath-1440.png`). Es passt jetzt zu „flach, 4,5 cm“. |
| [niedrig] Stapelstein/COSTWAY-ASIN | ✔ bewusst beibehalten und unter `offen` begründet. Akzeptiert, weil Titel und Ziel der Links stimmen. |
| [niedrig] Verworfene Sets | ✔ HAPPYMATY B0CLLHL71H, No-Name-Set 11-tlg. B0CTQQHL9T und Sport-Tec 12-tlg. B081D5KN8S stehen jetzt in `verworfen`. |
| [niedrig] „Dänemark“ ohne Quelle | ✔ im Text gestrichen (Z. 32, 190), unter `offen` vermerkt. |
| [niedrig] „gut zwei Meter“ | ✔ jetzt „mit kleinen Abständen rund zwei Meter“ (Z. 263). |
| [niedrig] Drinnen/draußen ohne Quelle | ✔ Fakt zum Nordic-Titel 2820 mit Quelle ergänzt; Text Z. 277 und FAQ Z. 295 sind entsprechend präzisiert, B08C1DY1MH steht in den Quellen. |
| [niedrig] Methodiksatz | ✔ „deren Inhalte wir nur über Suchauszüge einsehen konnten“, wunschkind-community.de ergänzt. |
| [Hinweis] Gummikante Balance-Weg | nicht umgesetzt (optional), weiterhin vorsichtig und korrekt formuliert. |

**Technik:** `node build.mjs` läuft fehlerfrei (in einer isolierten Scratchpad-Kopie gebaut), 3.582 Wörter. Chromium bei 1440 und 390 px: keine Konsolenfehler, keine 4xx, kein horizontales Scrollen, genau eine H1, JSON-LD parsebar.

**Resthinweis (kein Blocker):** Unter `offen` steht, dass die Angabe von Gryphon House (ca. 50 kg, ab 4 Jahren) mangels URL nicht übernommen wurde. Die Quelle ist https://shop.gryphonhouse.com/products/gonge-riverstones (US-Händler, 110 lb). Sie kann ins Archiv aufgenommen werden; am Text ändert das nichts, da die US-Version abweichen kann.
