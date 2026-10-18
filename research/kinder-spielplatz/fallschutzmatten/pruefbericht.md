# Prüfbericht fallschutzmatten (2026-10-08)

**Ergebnis: Korrektur nötig (gering)**

Technik: Build ok; 1440/390 px ohne Fehler/404/horizontales Scrollen, eine H1, JSON-LD ok, kein AggregateRating, Meta 53/150. Platz 1 höchste Note (7,73 > 7,4 > 6,73). Tests mit Institut + Heft (ÖKO-TEST Jahrbuch Kleinkinder 2016), AGES korrekt eingeordnet. Gartenpirat-Angaben (EN 1177:2008/UIAA, 1,90 m, 1,8 m Zone, „nicht unter 36 Monaten“, ca. 7 kg) per amazon.de-Treffer bestätigt.

## Korrekturaufträge
- [mittel] products[1] EYEPOWER B07BBSNP4X – ASIN ist Variantenfamilie, Standardauswahl laut Treffer 180 × 115 × 5 cm; Link führt evtl. nicht zur 200 × 100 × 5-Variante. Kind-ASIN der 200 × 100 × 5 cm (Treffer nennt B07BBSF81N, 3,25 kg) prüfen und eintragen; dabei Preisklasse 1 (bis 100 €) verifizieren (ein Treffer nannte ca. 144 € – unklar welcher Größe zugeordnet). – produkt-rechercheur
- [mittel] Karte „Pikler-Dreieck & Kleinkind“ – „ohne Altersgrenze ab 36 Monaten“ liest sich wie eine Freigabe. Ändern in „Anbieter nennt keine Altersgrenze“; ebenso im Callout „sie nennt keine solche Altersgrenze“ ergänzen: „eine ausdrückliche Freigabe für Kleinkinder fehlt aber ebenfalls“. – redakteur
- [niedrig] guide normen-en-1177 + FAQ – „ab 60 cm freier Fallhöhe vorgeschrieben“ nur mit Amazon-Listing als Beleg; durch belastbare Quelle (z. B. DGUV/TÜV-Information zu EN 1176-1) ersetzen oder als Herstellerangabe belassen. – produkt-rechercheur
- [niedrig] guide Callout „Sport-Thieme weist bei Weichbodenmatten auf … Aufsicht hin“ – Beleg (amazon.de/dp/B0793N1R96 bzw. B0DDBS43ZG) in sources ergänzen. – redakteur
- [niedrig] ALPIDEX B0793Q4WKQ / Sport-Thieme SL B0DDBS43ZG – Listings nennen in der Detailtabelle andere ASINs (B081PD5ND6 bzw. B0CQ7D4PFZ); SL-Titel 100 × 200 × 4 cm vs. Beschreibung 6 cm. Vor Livegang Variante prüfen. – produkt-rechercheur

## ASIN-Stichprobe
B07RHNWYF2 Gartenpirat ✔ · B07BBSNP4X EYEPOWER ⚠ (Variante) · B0793Q4WKQ ALPIDEX ✔ · B0DDBS43ZG Sport-Thieme SL ✔ (Inkonsistenzen im Listing, im Text bereits erwähnt).

## Korrekturen (Runde 1)
- **EYEPOWER (products[1]) – erledigt:** ASIN B07BBSNP4X → **B07BBSF81N** (amazon.de-/dp/-Seite „EYEPOWER 200x100 Klappbare Turnmatte Zuhause“, Produktdaten 200 × 100 × 5 cm, 3,25 kg, EPE RG 20). Preis der Variante laut Treffern ca. 130–150 € (eBay 129,99 €, Amazon-Übersicht 149,99 €) → **priceTier 1 → 2**. Folgeänderungen: Label „Bestes Preis-Leistungs-Verhältnis“ → „Beste Wahl fürs Pikler-Dreieck“; „günstig“ aus answer, quick, verdict, Pro und Karte entfernt; Pro „Günstig“ → „ca. 3,25 kg sehr leicht (Händlerangabe)“, Contra „Gewichtsangaben uneinheitlich“ → „Für nur 5 cm Dicke nicht günstig“; Spec Gewicht „ca. 3,25 kg“; Quelle angepasst. Bewertung/Reihenfolge unverändert (7,73 > 7,4 > 6,73).
- **Pikler-Karte/Callout – erledigt:** Karte jetzt „Leicht und klappbar, Anbieter nennt keine Altersgrenze“; Callout ergänzt „… eine ausdrückliche Freigabe für Kleinkinder fehlt aber ebenfalls“. Zusätzlich bestFor („auch für Kinder unter 3 Jahren“ → „der Anbieter nennt keine Altersgrenze“).
- **60-cm-Aussage – erledigt:** Guide und FAQ belegen jetzt mit TÜV SÜD (Prüfzeichen Fallschutzböden: stoßdämpfende Böden bei mehr als 60 cm freier Fallhöhe verbindlich); Amazon-Quelle B08YZ7WPH9 durch TÜV-SÜD-Seite ersetzt.
- **Sport-Thieme-Aufsicht – erledigt:** Quelle amazon.de/dp/B0793N1R96 (Sport-Thieme Weichbodenmatte klappbar) in sources ergänzt.
- **ALPIDEX / Sport-Thieme SL – teilweise:** SL: B0DDBS43ZG ist die kanonische /dp/-Seite, B0CQ7D4PFZ steht nur in deren Detailtabelle → beibehalten; Top-5-Text um Hinweis auf 4-/6-cm-Widerspruch und Variantenwahl 200 × 100 × 6 cm ergänzt. ALPIDEX: Weder B0793Q4WKQ noch B081PD5ND6 per Suche erneut auffindbar (Treffer nur 200 × 100 × 20 cm B0787VK999/B073TJSMJW und 200 × 150 × 30 cm). ASIN gemäß Stichprobe des Prüfberichts beibehalten – **vor Livegang manuell prüfen**.
- Build `node build.mjs` fehlerfrei.
