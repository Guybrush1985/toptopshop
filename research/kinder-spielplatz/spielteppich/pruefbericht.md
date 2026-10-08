# Prüfbericht: spielteppich

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig**

## Technik
- Build fehlerfrei, 2.872 Wörter. Chromium 1440/390 px: eine H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen. Die Symbolbilder (rug) werden angezeigt.

## ASIN-Prüfung (WebSearch, amazon.de)
- B0CL9ZXK35 Entrando XXL Straße 133 × 190 – Titel passt, auf Lager. Das Listing nennt aber **Florhöhe 10 mm** und **„ab ca. 3 Jahren“; Kinder unter 3 Jahren beaufsichtigen**.
- B07XVMV23Q Carpet Studio Big City 140 × 200 – in der Suche nicht auffindbar. Die Linie existiert (Big City als Größenoption auf anderen Carpet-Studio-ASINs). Nicht live prüfbar.
- B0CBLY3537 Toddlekind 200 × 140 × 1,4 – in der Suche nicht auffindbar. Ein Toddlekind-Händlertreffer zeigt die Matte in 200 × 140 × 1,4 cm (Farbe Wheat). Nicht live prüfbar, Farbe Fog unbestätigt.

## Korrekturaufträge
- [hoch] top5.items[2] Hakuna Matte – „laut Hersteller ohne Formamid, BPA und Phthalate“ ist in produkte.json **nicht belegt** (dort nur GS laut Titel und EN 71 laut Beschreibung). Gerade bei Formamid in EVA-Matten ist das eine zentrale Sicherheitsaussage: belegen oder streichen – zuständig: produkt-rechercheur, danach redakteur
- [mittel] products[1] Entrando – Laut Listing beträgt die Florhöhe 10 mm, der Text sagt „Kurzflor, dünn“ und „sehr dünn“. Klären (die Dünn-Aussage stammt aus Kundenberichten). Außerdem die Herstellerangabe „ab ca. 3 Jahren / unter 3 Jahren beaufsichtigen“ in specs bzw. Text aufnehmen; der Teppich steht derzeit ohne Altersangabe neben einer Baby-Empfehlung – zuständig: produkt-rechercheur, redakteur
- [mittel] products[0].asin B07XVMV23Q und products[2].asin B0CBLY3537 – per Suche nicht bestätigbar. Laut CLAUDE.md vor Veröffentlichung Variante und Verfügbarkeit klären (Big City 140 × 200; Toddlekind Fog, Recherche-Hinweis auf B0CBLXCN2Y). Falls das nicht geht, dem Nutzer melden – zuständig: produkt-rechercheur
- [gering] products[2] Toddlekind – „Rund 4,9 kg“ (cons) steht nicht in produkte.json. Belegen oder streichen. „Laut Hersteller ab 0 Monaten“ ist in der Recherche eine Händlerangabe, angleichen – zuständig: redakteur
- [gering] Callout „Sicherheit“ – „Teppiche mit Bommeln … für Kinder unter 3 Jahren nicht geeignet“ als eigene Vorsichtsempfehlung formulieren („raten wir … ab“), da es dafür keine Norm- oder Herstellerquelle gibt – zuständig: redakteur

## In Ordnung
Keine Bewertungsanzahlen, Sterne oder festen Preise. Öko-Test ist mit Ausgabe 9/2015 genannt und als älter bzw. „laut Berichten“ gekennzeichnet. ANSES und AGES sind mit Quelle belegt. OEKO-TEX-Angaben sind sauber nach „mit/ohne Nummer“ getrennt. Fallschutz wird klar abgegrenzt (Link auf /fallschutzmatten/). Platz 1 hat die höchste Note. Die Top 5 hat einen anderen Intent (Motiv/Form). Keine relevante Textüberschneidung mit den Schwesterseiten (≤ 1 %).

## Korrekturen (Runde 1)
- **Hakuna Matte (top5.items[2]):** Formamid-/BPA-/Phthalat-Aussage gestrichen. Eine Formamid-Angabe fand sich nur für andere Hakuna-Modelle (Safari bei baby-walz.ch, Wald XXL bei testsieger.de), nicht für die City-Matte. Text jetzt: GS laut Titel, EN 71 laut Beschreibung, „Eine Herstellerangabe zu Formamid haben wir für dieses Modell nicht gefunden – vor dem Kauf nachfragen und gut auslüften“.
- **Entrando:** Florhöhe 10 mm (Händlerangabe) in Feature/specs; „dünn“ jetzt als Käuferempfinden gekennzeichnet; Altersangabe „ab ca. 3 Jahren, unter 3 Jahren beaufsichtigen“ (Herstellerangabe) in verdict, features und cons; Vergleichstabelle Flor „ca. 3–10 mm“; editorial angepasst.
- **Toddlekind:** „Rund 4,9 kg“ gestrichen (cons jetzt „Als große einteilige Matte unhandlich zum Verstauen“), Gewicht aus produkte.json-specs entfernt; „laut Hersteller ab 0 Monaten“ → „laut Händlerangabe“.
- **Callout Sicherheit:** Bommel-Hinweis als eigene Vorsichtsempfehlung („raten wir … ab“, keine Norm-/Herstellerangabe).
- **ASINs NICHT abschließend geklärt:**
  - B07XVMV23Q (Carpet Studio 140 × 200): erneut nicht auffindbar (Titel- und ASIN-Suche). Indizien: Schwester-ASINs B07XVLYQWH (95 × 200) und B07XVKRJP1 (95 × 133) gehören zur selben ASIN-Familie, das Big-City-Listing B08TX5T2B4 bietet 140 × 200 als Größenoption, die Specs sind dort bestätigt. ASIN beibehalten – Nutzer sollte sie vor Veröffentlichung im Browser prüfen.
  - B0CBLY3537 (Toddlekind 200 × 140 Fog): nicht auffindbar. Im amazon.de-Sortiment von Toddlekind erscheinen nur EVA-Puzzlematten, die EVO-Matte (Material PVC/PU widersprüchlich) und Baumwollmatten. Ersatzkandidaten geprüft und verworfen: Kinderkraft Matty B08KHYDGL3 (derzeit nicht verfügbar, Material widersprüchlich), Zukunftskinder B0CJYXPMNY (nicht verfügbar), Ehrenkind PRO (Material widersprüchlich), Toddlekind Premium-Puzzlematte B0BVZ51J3F (EVA, keine Formamid-Angabe, passt nicht zur Begründung „einteilig“). ASIN vorerst beibehalten – **Nutzerentscheidung nötig**: im Browser prüfen, sonst auf `query` umstellen oder Platz 3 ersetzen.
