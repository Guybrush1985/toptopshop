# Prüfbericht: /beste-ruderpedale-flugsimulator/

Prüfer, 2026-10-23. Geprüft: `src/content/categories/beste-ruderpedale-flugsimulator.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **bestanden** (nur Hinweise, niedrig)

## Prüfliste
- **Fakten:** Aussagen belegt (Thrustmaster-Support/Handbücher, Honeycomb, Turtle-Beach-Support, CGMagazine als „englischsprachiges Online-Magazin“). TFRP-Federwiderstand wird – wie empfohlen – nicht behauptet. Top-5-Dopplung (TFRP) wurde durch das T.16000M FCS Flight Pack ersetzt, Intro verweist für PS5 auf Platz 2 – sauber gelöst.
- **ASINs (WebSearch amazon.de):**
  - B0B2KFVYPR: „Honeycomb Aeronautical Charlie Rudder Pedals … kompatibel mit Xbox und PC“ ok.
  - B01649IVI8: „Thrustmaster TFRP T.Flight Rudder Pedals - PS5, XBOX & PC“ ok.
  - **B07DK8N8JG:** deutsche Produktseite „Thrustmaster TPR - Profi-Rudersystem für die Flugsimulation - PC“, Modell 2960809, 4,8★/627, Preis vorhanden; nur die englische Sprachansicht derselben ASIN zeigt fälschlich „Thrustmaster TFRP Rudder, Black 60“ (Amazon-Datenfehler). Inhalt, Bewertungen und Fragen gehören eindeutig zum TPR → ASIN **korrekt, beibehalten**.
  - Top 5: B099XLFW95 (Full Kit X), B0FJSCV24G (R1-FALCON, 4 Bewertungen), B01HZ2APKU (T16000M FCS Flight Pack) bestätigt; B0B7NTLKF2, B01MQ0N57Q in Suchtreffern sichtbar.
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine Preise/Amazon-Bilder/AggregateRating; Gewichte = 1; Noten 8,05 / 7,68 / 7,75 (Platz 1 höchste; Platz 3 > Platz 2 ist zulässig); Top 5 eigener Intent; 9 FAQs; `quick` je H2; Meta 51/145; Gesundheit zurückhaltend, keine Rückrufe.
- **Qualität:** Plattform-/Anschluss-Logik (RJ12, Hub) ist der stärkste Teil der Seite. Kein Duplicate Content mit den Schwesterseiten.
- **Technik:** Build ok; 1440/390 px: 1 × H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen; Symbolbild `pedals` korrekt.

## Hinweise (niedrig)
- [niedrig] Zielgruppen-Karte „Helikopter“: „Pedale ohne Mittenrastung wie das VIRPIL R1-FALCON oder das TPR“ – für das TPR gibt es in `produkte.json` keinen Beleg zu fehlender Mittenrastung bzw. einer No-Center-Option – „oder das TPR“ streichen oder belegen – **redakteur** (ggf. **produkt-rechercheur**)
- [niedrig] Platz 1 „Hall-Sensoren“ – eine amazon.de-Kundenrezension behauptet Potentiometer; Hersteller- und Händlerangabe sagen Hall. Text kennzeichnet korrekt als Herstellerangabe – optional Herstellerseite erneut prüfen – **produkt-rechercheur**
- [niedrig] Platz 3 (TPR, B07DK8N8JG) – Nutzer im PR darauf hinweisen, dass die englische Sprachansicht des Listings einen falschen TFRP-Titel zeigt (kein Fehler unserer Seite) – **Orchestrator**

## Runde 2 (Orchestrator, 2026-10-23)

Korrekturaufträge umgesetzt (Rechercheur/Redakteur), per Diff und `node build.mjs` (grün) nachgeprüft. Offen bleiben nur die im PR genannten Live-Prüfungen der ASINs.
