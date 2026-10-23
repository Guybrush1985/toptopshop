# Prüfbericht: /bestes-flugsimulator-yoke/

Prüfer, 2026-10-23. Geprüft: `src/content/categories/bestes-flugsimulator-yoke.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **bestanden** (nur Hinweise, niedrig)

## Prüfliste
- **Fakten:** Aussagen belegt (Herstellerangaben gekennzeichnet; Galaxus/Digitec 28.12.2021, TechCrunch 06.03.2023, simulatorhardware.com 03/2026, PC Gamer „laut Berichten“). Sky Yoke klar als „erscheint am 28.10.2026“ gekennzeichnet.
- **ASINs (WebSearch amazon.de):** B07SH2SFLW (Honeycomb Alpha Yoke & Switch Panel, 4,8★/1.345) ok; B01MCXJWD1 (Logitech G Saitek Pro Flight Yoke System, Modell 945-000004) ok; B09JM89QR4 (TCA Yoke Boeing Edition, Xbox/PC) ok. Top 5 stichprobenartig: B0B4BVK8CF (Alpha XPC), B09GRLDWV2 (TCA Yoke Pack), B0DTHTXPKQ (Alpha LITE) in Suchtreffern bestätigt. Sky Yoke PS5: weiterhin kein amazon.de-Listing der PS5-Version → `query` korrekt (an den Nutzer zu melden).
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine Preise/Amazon-Bilder/AggregateRating; Gewichte = 1; Noten 8,30 / 6,48 / 8,05 (Platz 1 höchste); Top 5 eigener Intent (Flugzeugtyp/Paket); 7 FAQs; `quick` je H2; Meta 50/150 Zeichen; Sicherheitshinweise (Klemme, VR, Epilepsie) zurückhaltend.
- **Qualität:** Sehr gute Plattform-Tabelle (PC/Xbox/PS5) – erleichtert die Entscheidung. Kein Duplicate Content mit den Schwesterseiten.
- **Technik:** Build ok; 1440/390 px: 1 × H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen; Symbolbild `yoke` korrekt.

## Hinweise (niedrig)
- [niedrig] Top 5 Nr. 5 „TCA Sky Yoke (PS5-Version)“ – auf amazon.de ist inzwischen ein Sky-Yoke-Listing als „PC Flight Steuerhorn & Schubhebel“ (Windows) sichtbar; die Amazon-Suche über `query` kann daher zuerst die falsche Version zeigen – nach Erscheinen (28.10.) ASIN der PS5-Version nachtragen; bis dahin Text um „auf ‚PS5‘ im Titel achten“ ergänzen (steht sinngemäß im Callout) – **produkt-rechercheur**
- [niedrig] Platz 1 Features/Facts „Pitch-Weg ca. 15 cm (Herstellerangabe)“ – Quelle ist der Galaxus/Digitec-Artikel, nicht der Hersteller direkt – als „laut Galaxus/Herstellerangabe“ kennzeichnen oder Herstellerquelle nachtragen – **redakteur**
- [niedrig] Platz 1 Cons „nicht zu dicke Tischplatte (Kritik bei Clubic)“ – Clubic kritisiert laut `produkte.json` nur das Befestigungssystem allgemein; „nicht zu dicke“ ist nicht belegt – auf „Kritik am Befestigungssystem (Clubic)“ kürzen – **redakteur**

## Runde 2 (Orchestrator, 2026-10-23)

Korrekturaufträge umgesetzt (Rechercheur/Redakteur), per Diff und `node build.mjs` (grün) nachgeprüft. Offen bleiben nur die im PR genannten Live-Prüfungen der ASINs.
