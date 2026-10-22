# Prüfbericht: bestes-spielsofa-kinder

Stand: 2026-10-22 · Prüfer · Geprüft: `src/content/categories/bestes-spielsofa-kinder.mjs`, `produkte.json`, `bilder.json`,
`dist/kinder-spielplatz/indoor/bestes-spielsofa-kinder/index.html`

## Ergebnis: **Korrektur nötig** (2 mittlere, mehrere geringe Punkte – nichts Kritisches)

Die Seite ist sauber aufgebaut und gut belegt. Kennzeichnungen (Herstellerangabe, Händlerangabe, laut Bericht) sind
durchgängig gesetzt. Es gibt keine erfundenen Testnoten, keine festen Preise und keine Amazon-Bilder. Offen sind zwei
Faktenlücken in Top 5 und Top 3 sowie einige Aussagen ohne Entsprechung in `produkte.json`.

## Was geprüft wurde und in Ordnung ist

- **Build:** `node build.mjs` läuft fehlerfrei (135 Seiten, Spielsofa 3.630 Wörter). Mindestinhalte, Links und Anker sind ok.
- **Regeln:**
  - Gewichte 0,3 + 0,25 + 0,25 + 0,2 = 1.
  - Gesamtnoten 8,7 / 7,9 / 8,3, Platz 1 hat die höchste.
  - 7 FAQs, `quick`-Block in allen 5 H2-Abschnitten.
  - metaTitle 47, metaDescription 152 Zeichen.
  - Kein `AggregateRating`, keine €-Beträge im HTML.
  - Rückruf-/Safety-Gate-Hinweis vorhanden. Eine Websuche hat ebenfalls keine Rückrufe zu Funzy oder Linodino gefunden.
  - Brandschutz und Aufsicht sind zurückhaltend formuliert.
- **Bezugsquellen:** Alle 8 Produkte laufen über Amazon mit ASIN und `tag=toptopshop-21`. Kein `shop`/Awin, also keine
  Awin-Prüfung nötig. Die Reihenfolge aus CLAUDE.md ist eingehalten, es wurde kein neuer Händler eingebaut.
- **ASINs (WebSearch, allowed_domains amazon.de):** Für alle 8 gibt es einen `/dp/`-Treffer mit passendem Titel.
  - B0D81GWB6K: Funzy Original, Arktis Blau, 168 × 84 × 54 cm, 120 kg
  - B0C4VYTL89: Linodino Spielsofa, Honigwaben-Gelb, Chenille, 30 °C, 100 kg
  - B0D94NSPT2: Funzy Mini, Velours Erdnuss Beige, 130 × 65 × 46 cm, 1–6 J.
  - B0D5FKY4Z6: Linodino Cord Fantasiewelt, Elefantengrau, 8 Teile
  - B0D618Z4X8: Linodino Cord, Avocado Grün
  - B0DJSLVG55: tectake Spielsofa 120 cm, Beige, 8 Teile
  - B0F6VXV289: Bunky! Spielsofa – Made in Germany
  - B0DSPQCYLK: COSTWAY 7 tlg. Schaumstoffbausteine, Blau, ab 18 Monaten

  **Nicht prüfbar:** Ob die Listings live aktiv sind, ließ sich nicht prüfen, weil amazon.de nicht direkt abrufbar ist.
  Laut Suchindex sind B0D81GWB6K, B0C4VYTL89, B0D94NSPT2 und B0F6VXV289 vorrätig bzw. haben einen Preis. Vor dem Merge
  einmal im Browser öffnen.
- **Preisklassen plausibel:** Laut Suchindex kostet Funzy Original ca. 399–449 € (€€€), Linodino Chenille ca. 229 € (€),
  Funzy Mini ca. 329–369 € (€€).
- **Darstellung** (Chromium, 1440 px und 390 px):
  - keine Konsolenfehler, keine 404
  - kein horizontales Scrollen; die Vergleichstabelle scrollt in ihrem eigenen Container
  - genau eine H1
  - JSON-LD parsebar (Organization, WebSite, Article, ItemList, FAQPage, BreadcrumbList)
  - beide SVG-Grafiken laden
  - Symbolbilder `playsofa` in drei Tönen korrekt dargestellt und als „Symbolbild“ gekennzeichnet

  Hinweis: In ganzseitigen Screenshots erscheint die Bildspalte leer, weil sie `position: sticky` hat. Das liegt am
  Screenshot und ist kein Fehler.
- **Duplicate Content:** Stichproben gegen Hüpfpolster, Spielhöhle und Spielteppich ergeben keine übernommenen Absätze,
  nur übliche Formulierungen wie „Safety Gate“ und „auslüften“.

## Korrekturaufträge

1. **[Mittel] `top5.items[3]` (Bunky!) – „8 Elemente“ ist unbelegt.**
   - Problem: `produkte.json` nennt die 8 Elemente nur im Feld `warum`, nicht in `fakten`. Laut amazon.de-Suchindex
     (B0F6VXV289) enthält das Set 2 Armlehnen, 2 Dreieckskissen sowie eine Basis- und eine Stützmatratze. Das wären
     6 Teile, bei 168 × 84 × 59 cm, 150 kg und 1 Jahr Herstellergarantie.
   - Korrektur: Teilezahl am Listing bzw. Herstellerseite prüfen und als `fakt` mit Quelle anlegen. Danach den Text
     anpassen, also die Zahl korrigieren oder streichen.
   - Zuständig: produkt-rechercheur, danach redakteur.
2. **[Mittel] `products[2]` (Funzy Mini) – Specs unvollständig bzw. widersprüchlich.**
   - Problem: `specs.belastbarkeit` steht auf „–“, das Listing B0D94NSPT2 nennt aber 120 kg. Beim Gewicht steht „ca. 10 kg“,
     die Produktdaten im Listing nennen 12,8 kg (der Marketingtext 10 kg).
   - Korrektur: Fakten in `produkte.json` ergänzen. Dann Belastbarkeit „120 kg (Händlerangabe)“ und Gewicht
     „ca. 10–12,8 kg (Angaben schwanken)“ eintragen, wie bei den anderen Produkten. Das Facts-Kästchen
     „100–120 kg“ gegebenenfalls nachziehen.
   - Zuständig: produkt-rechercheur, danach redakteur.
3. **[Gering] `editorial.sections[0]`, 2. Absatz `p` – Schaum-Lob von kribbelbunt nicht belegt.**
   - Problem: Im Text heißt es: „In den Praxisberichten von kribbelbunt und papa-kompass wird der Schaum als fest und
     formstabil beschrieben“. Der kribbelbunt-Fakt in `produkte.json` deckt aber nur Bezug, Tragen und Gästebett ab.
   - Korrektur: Den Fakt ergänzen oder kribbelbunt aus diesem Satz streichen. Gleiches gilt für `verdict` „Mehrere
     Praxisberichte loben …“.
   - Zuständig: produkt-rechercheur bzw. redakteur.
4. **[Gering] `products[2]` (verdict und pros) – Aussagen ohne Quelle.**
   - Problem: „Mit rund 10 kg Gesamtgewicht schieben auch Kleinkinder die Teile selbst“, „Leicht genug, dass Kleinkinder
     die Teile bewegen“, „unter Hochbetten“ und „Gleiche Schaum- und Bezugsqualität wie das Original (Herstellerangabe)“
     haben keinen Fakt in `produkte.json`. kribbelbunt nennt für das Original „ab ca. 4 Jahren tragen Kinder die leichteren
     Teile“.
   - Korrektur: Die Aussagen belegen oder abschwächen bzw. streichen. „Herstellerangabe“ nur mit Quelle verwenden.
   - Zuständig: redakteur, bei Bedarf produkt-rechercheur.
5. **[Gering] `editorial.sections[2]`, h3 „Sicherheit und Service“ – Pauschalaussage.**
   - Problem: „Hartteile im Inneren haben die empfohlenen Modelle laut Händler nicht“ ist nur für Linodino belegt.
   - Korrektur: Auf Linodino einschränken oder einen Beleg für Funzy ergänzen.
   - Zuständig: redakteur.
6. **[Gering] `guide.sections[0]`, „Waschen, Lüften, Geruch“ – Quelle fehlt.**
   - Problem: „Linodino wird in Berichten ausdrücklich dafür gelobt, kaum zu riechen“. Die Quelle testsieger-online.de
     steht nur als Text in `warnungen`, ohne URL, und fehlt in `sources`.
   - Korrektur: URL in `produkte.json` und `sources` ergänzen oder den Satz streichen.
   - Zuständig: produkt-rechercheur, danach redakteur.
7. **[Gering] `products[0].specs.gewicht` „ca. 12–14,7 kg“ und `products[1].specs.gewicht` „ca. 9–12 kg“ – Untergrenzen ohne Fakt.**
   - Korrektur: Fakten mit Quelle ergänzen. Vorhanden sind etwa Funzy 12 kg bei mooris.de sowie Linodino 8,9 kg
     (B0C4VYTL89) bzw. 11,5 kg (Cord-Listing). Den Bereich danach angleichen, z. B. Linodino „ca. 9–11,5 kg“.
   - Zuständig: produkt-rechercheur.
8. **[Gering] `editorial.sections[0]`, Absatz zu Linodino – Preisklasse falsch angegeben.**
   - Problem: Im Text steht „kostet aber eine bis zwei Preisklassen weniger“. Das empfohlene Chenille-Modell ist € gegenüber
     €€€, also genau zwei Preisklassen.
   - Korrektur: „zwei Preisklassen weniger“ schreiben.
   - Zuständig: redakteur.
9. **[Gering] `guide`, Callout „Brandschutz …“ – Rechtsaussage ohne Quelle.**
   - Problem: „Für private Polstermöbel gibt es in Deutschland keine verpflichtende Brandschutznorm“ hat keine Quelle.
   - Korrektur: Eine Quelle ergänzen oder vorsichtiger formulieren, etwa „Eine verpflichtende Brandschutznorm für private
     Polstermöbel ist uns in Deutschland nicht bekannt“.
   - Zuständig: redakteur.
10. **[Hinweis] `faqs[5]` – Faustregel nicht gekennzeichnet.**
    - Problem: „etwa ein Meter Bewegungsraum“ ist eine redaktionelle Faustregel.
    - Korrektur: Als solche kennzeichnen, z. B. „als Faustregel“.
    - Zuständig: redakteur.
11. **[Hinweis] `products[0]`, Feature „Cordbezug abnehmbar …“ – Stoffart der verlinkten Variante unklar.**
    - Problem: Eine Zusammenfassung im Suchindex beschreibt die verlinkte Variante Arktis Blau als Velours.
    - Korrektur: Die Stoffart der Variante prüfen und gegebenenfalls „Bezug“ statt „Cordbezug“ schreiben.
    - Zuständig: produkt-rechercheur.
12. **[Hinweis] `top5.items[1]` (Linodino Cord) – schwacher eigener Suchintent.**
    - Problem: Der Eintrag ist das Top-3-Produkt Nr. 2 mit anderem Bezug.
    - Bewertung: Zulässig, ein eigenständiges Produkt (z. B. ein weiteres Markenmodell) wäre aber stärker.
    - Zuständig: redakteur (optional).
13. **[Hinweis] `bilder.json` – Archiv veraltet.**
    - Problem: `scoresAlt` nennt fünf Entwurfskriterien, der Schritt heißt dort „Rutschfest aufstellen“, und der
      `offen`-Vermerk ist veraltet. Die Seite selbst nutzt die finalen Texte aus der `.mjs`.
    - Korrektur: Für das Quellenarchiv angleichen.
    - Zuständig: illustrator.

---

## Runde 2 (Nachprüfung, 2026-10-22)

Nachgeprüft wurden nur die geänderten Punkte 1–11 und 13 sowie der Build. Punkt 12 wurde bewusst nicht umgesetzt; das ist
zulässig.

**Ergebnis: bestanden**

| Nr. | Stand |
|---|---|
| 1 | ✓ Bunky: „8 Elemente“ ist gestrichen. Neu steht dort „laut Listing u. a. Basis- und Stützmatratze, 2 Armlehnen, 2 Dreieckskissen, 168 × 84 × 59 cm, 150 kg, 1 Jahr Garantie“; der Fakt in `produkte.json` ist ergänzt. |
| 2 | ✓ Funzy Mini: Belastbarkeit „120 kg (Händlerangabe)“ und Gewicht „ca. 10–12,8 kg (Angaben schwanken)“ in Specs, Features und Verdict; Fakt ergänzt. Faktenbox jetzt „Linodino, Funzy Original und Mini“. |
| 3 | ✓ Das Schaum-Lob ist jetzt nur noch papa-kompass zugeordnet (fest, hohe Stauchhärte), passend zum Fakt. kribbelbunt wird nur noch für die Bezugsabnutzung genannt. Verdict und Pros sind angepasst. |
| 4 | ✓ Bei Funzy Mini sind die Aussagen zu Kleinkindern und zum Hochbett sowie zur „gleichen Qualität“ entfernt. Die Pros stützen sich nur noch auf belegte Händler- und Herstellerangaben. |
| 5 | ✓ „Keine Hartteile“ gilt jetzt nur noch für Linodino, bei anderen Modellen wird zur Nachfrage geraten. |
| 6 | ✓ Das Lob für den geringen Geruch ist gestrichen und in `warnungen` dokumentiert. |
| 7 | ✓ Gewicht Funzy Original „ca. 14,7 kg (Händlerangabe)“, Linodino „ca. 8,9 kg (Händlerangabe)“, beide mit Fakt. |
| 8 | ✓ „zwei Preisklassen darunter“. |
| 9 | ✓ „… ist uns in Deutschland nicht bekannt“. |
| 10 | ✓ Die FAQ-Antwort ist jetzt als „Faustregel“ gekennzeichnet. |
| 11 | ✓ Feature jetzt „Bezug abnehmbar …“. Die Stoffart der Variante ist im Fakt als offen vermerkt. |
| 13 | ✓ `bilder.json` ist an die `.mjs` angeglichen (`scoresAlt`, „Sicher aufstellen“, Vermerk unter `offen`). |

**Build:** `node build.mjs` fehlerfrei (135 Seiten, Spielsofa 3.692 Wörter). In der gebauten Seite gibt es genau eine H1,
alle JSON-LD-Blöcke lassen sich parsen, und die neuen Formulierungen sind enthalten.

**Weiterhin offen (kein Blocker):** Ob die 8 ASINs live aktiv sind, ließ sich nicht prüfen, weil amazon.de aus der Umgebung
nicht abrufbar ist. Vor dem Merge einmal im Browser öffnen.
