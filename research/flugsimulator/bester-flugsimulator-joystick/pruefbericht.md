# Prüfbericht: /bester-flugsimulator-joystick/

Prüfer, 2026-10-23. Geprüft: `src/content/categories/bester-flugsimulator-joystick.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **Korrektur nötig** (2 × mittel, 2 × niedrig)

## Prüfliste
- **Fakten:** Produkt- und Testaussagen haben Entsprechungen in `produkte.json` (Hersteller-, Händler- und Testangaben gekennzeichnet; TweakTown 88 %, Windows Central und PCGH korrekt zugeordnet). Ausnahme: siehe M2.
- **ASINs (WebSearch amazon.de):**
  - B01H6KXGDY: „Thrustmaster T16000M FCS HOTAS“, aktiv, ok.
  - B0GJSZ4YV1: „T.Flight Hotas 5 Microsoft Flight Simulator Edition - PS5 & PC“, Erscheinungsdatum 12.06.2026, Preis vorhanden, ok.
  - B0H3PW546V: „Thrustmaster Hotas Warthog MKII - Offizielle U.S. Air Force Replika - PC“, Erscheinungsdatum 16.09.2026, ok.
  - Top 5: B0H2ZC5TTB (Hotas Neo Ace Combat 8, PS5/PS4/PC) ok; B0H8PZH1P3 (VelocityOne H.O.T.A.S., Xbox/PC; Snapshot noch „Vorbestellung“, Erscheinen 12.10.2026) ok; B079Z3DSBK (X56) ok, Amazon zeigt „neueres Modell verfügbar“; **B0GVS6MRGQ (VIRPIL Cadet Bundle) „derzeit nicht verfügbar“** → M1; B0DMSTP1YG (Sol-R 2) im Suchergebnis bestätigt.
- **Bezugsquellen:** nur Amazon, kein Awin nötig – ok.
- **Regeln:** keine Preise, keine Amazon-Bilder, kein AggregateRating; Gewichte = 1; Gesamtnoten 8,00 / 7,58 / 7,35 (Platz 1 höchste); Top 5 mit eigenem Intent (Plattform/Spielstil); 8 FAQs; `quick` in jedem H2; Meta Title 57 / Description 150 Zeichen; Gesundheitshinweis zurückhaltend; keine Rückrufe.
- **Qualität:** Klare Plattform-Logik, gute Entscheidungshilfe. Kein Duplicate Content mit den Schwesterseiten (5-Wort-Shingles, max. Überlappung 27 % nur bei Methodik-/Gesundheits-Floskeln).
- **Technik:** `node build.mjs` fehlerfrei; Chromium 1440/390 px: 1 × H1, JSON-LD parsebar, keine Konsolenfehler, keine 404, kein horizontales Scrollen; Symbolbilder `joystick` korrekt. OG-Bild wird parallel erzeugt (nicht gewertet).

## Korrekturaufträge
- [mittel] Top 5 Nr. 4 „VIRPIL Controls AEROMAX Cadet HOTAS Bundle“ (B0GVS6MRGQ) – amazon.de-Listing aktuell „derzeit nicht verfügbar“ – durch aktive Alternative ersetzen (z. B. Einzelstick CDT-AEROMAX-R B0F9L8DTHY mit angepasstem Text, oder anderes verfügbares DCS-Enthusiasten-HOTAS); Satz „Verfügbarkeit schwankt“ entsprechend anpassen – **produkt-rechercheur**, danach **redakteur**
- [mittel] Kaufkriterien, Absatz „Seitenruder: Twist-Achse oder Pedale“: „Das T16000M FCS und das Hotas 5 lassen sich … mit den Thrustmaster-TFRP-Pedalen erweitern, die direkt am Schubregler angeschlossen werden“ – beim Hotas 5/4 sitzt der RJ12-Port laut Thrustmaster-Support am Joystick, nicht am Schubregler (`produkte.json` Pedale: „Anschluss am RJ12-Port des Joysticks“) – umformulieren: „… beim T16000M FCS am Schubregler TWCS, beim Hotas 5 am Stick“ – **redakteur**
- [niedrig] Quellen „Thrustmaster: T.Flight Hotas Neo Ace Combat 8“ – URL endet auf `…-xbox-pc.html`, beschrieben wird aber die PS5/PS4/PC-Version – Link auf die PlayStation-Version ändern oder Label anpassen – **produkt-rechercheur**
- [niedrig] Top 5 Nr. 3 „Logitech G X56“ (B079Z3DSBK) – amazon.de weist auf ein neueres Modell-Listing hin – prüfen, ob das neuere Listing (gleiches Produkt, aktiv) bevorzugt werden sollte – **produkt-rechercheur**

## Runde 2 (Orchestrator, 2026-10-23)

Korrekturaufträge umgesetzt (Rechercheur/Redakteur), per Diff und `node build.mjs` (grün) nachgeprüft. Offen bleiben nur die im PR genannten Live-Prüfungen der ASINs.
