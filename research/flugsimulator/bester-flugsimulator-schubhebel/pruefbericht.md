# Prüfbericht: /bester-flugsimulator-schubhebel/

Prüfer, 2026-10-23. Geprüft: `src/content/categories/bester-flugsimulator-schubhebel.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **bestanden** (nur Hinweise, niedrig)

## Prüfliste
- **Fakten:** Aussagen belegt; Bravo-Xbox-Widerspruch transparent („Angaben uneinheitlich“); simulatorhardware.com korrekt als affiliate-finanziertes Vergleichsportal offengelegt; Captain-Pack-X-Lieferumfang vorsichtig formuliert.
- **ASINs (WebSearch amazon.de):**
  - B07SK43CJ6: Honeycomb Bravo mit Autopilot & Annunciator Panel (AER-HONEYQUAD), 4,5★/1.609 ok.
  - **B01MG4DCMD:** Logitech G Saitek Pro Flight Throttle Quadrant, Modell 945-000015 (passt zur Variante auf der Seite und zur Logitech-Quelle). Der Amazon-Titel nennt fälschlich ein „LCD display“ (Listing-Fehler, wird auf unserer Seite nicht übernommen). Zweites Listing **B01M00UHE3** (Modell 945-000032, 4,4★/1.607) ist ebenfalls aktiv. Beide passen; B01MG4DCMD ist vertretbar, weil die Modellnummer zur Quelle passt.
  - B086J7D78J: TCA Quadrant Airbus Edition (2960840) ok.
  - Top 5: B0B4SS2DNS, B086J6KWTZ, B08BKNBYLP, B0FDGP595K in Suchtreffern bestätigt. TCA Quadrant Boeing Edition: weiterhin nur B0BFJG2SDK mit Mischtitel „… & TFRP - Rudder Pedals“ → `query` korrekt (an den Nutzer zu melden).
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine Preise/Amazon-Bilder/AggregateRating; Gewichte = 1; Noten 8,43 / 6,28 / 7,68; Top 5 eigener Intent; 8 FAQs; `quick` je H2; Meta 55/144; keine Rückrufe.
- **Qualität:** Gute Einordnung nach Flugzeugtyp; kein Duplicate Content (einzige Überlappung: Bildunterschrift des Bewertungsdiagramms fast gleich wie bei den Ruderpedalen – unkritisch).
- **Technik:** Build ok; 1440/390 px: 1 × H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen; Symbolbild `throttle` korrekt.

## Hinweise (niedrig)
- [niedrig] Redaktion, Absatz 3: „Laut Berichten von Clubic und God is a Geek ist er solide verarbeitet, aber recht sperrig“ – „solide/sperrig“ ist laut `produkte.json` nur God is a Geek belegt – Clubic aus diesem Satz nehmen – **redakteur**
- [niedrig] Vergleichstabelle Zeile „Garantie“: Platz 2 und 3 zeigen nur „laut Hersteller“ (ohne Wert) – Zeile ohne Informationsgehalt; konkreten Wert nachtragen oder Zeile streichen – **produkt-rechercheur** / **redakteur**
- [niedrig] Platz 2 (B01MG4DCMD) – laut Recherche zeitweise Amazon-Hinweis „Preis höher als üblich“; vor Merge im Browser prüfen und ggf. auf B01M00UHE3 wechseln – **produkt-rechercheur**

## Runde 2 (Orchestrator, 2026-10-23)

Korrekturaufträge umgesetzt (Rechercheur/Redakteur), per Diff und `node build.mjs` (grün) nachgeprüft. Offen bleiben nur die im PR genannten Live-Prüfungen der ASINs.
