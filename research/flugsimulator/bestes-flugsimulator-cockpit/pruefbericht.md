# Prüfbericht: /bestes-flugsimulator-cockpit/

Prüfer, 2026-10-23. Geprüft: `src/content/categories/bestes-flugsimulator-cockpit.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`, Änderungen in `sim-racing-cockpits.mjs` (related).

## Ergebnis: **Korrektur nötig** (1 × mittel, 2 × niedrig)

## Prüfliste
- **Fakten:** Herstellerangaben (NLR-Support, Wheel Stand Pro) gekennzeichnet; TweakTown-Test korrekt als Test der **MSFS Edition** (nicht Platz 1) eingeordnet; Verzicht auf Playseat Air Force begründet.
- **ASINs (WebSearch amazon.de):**
  - **B0BFC1WKPJ:** „Next Level Racing Flight Simulator“, NLR-S018, Preis vorhanden, 4,1★/41 – ok.
  - **B0BFBWPLNM:** „Next Level Racing Flight Simulator: Boeing Military Edition“, NLR-S028, 4,6★/223, Preis vorhanden – ok. (Parallel-Listing B0BM4T5PKX zu Recht nicht verwendet.)
  - B00DIQ3168: Wheel Stand Pro Saitek Pro Flight Yoke System, aktiv, 4,3★/646 – ok (siehe Hinweis Variante).
  - Top 5: B0BFBXCSGK (Boeing Commercial) bestätigt; B01NAN0SF3 (Super Warthog) bestätigt; **B0BFRQ7K78 (Trak Racer TR-FS02) im amazon.de-Store als „derzeit nicht verfügbar“** → M1.
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine festen Preise (FAQ nennt nur Preisklassen), keine Amazon-Bilder, kein AggregateRating; Gewichte = 1; Noten 8,08 / 7,38 / 7,95; Top 5 eigener Intent (Steuerung/Platz); 8 FAQs; `quick` je H2; Meta 53/147; Sicherheit (Belastbarkeit, Kinder, VR) zurückhaltend.
- **Qualität:** Rollen nach Bauform statt drei gleicher Rahmen – sinnvoll und in der Methodik begründet. Kein Duplicate Content mit `sim-racing-cockpits` oder den Schwesterseiten (Montage-/Plattform-Abschnitte inhaltlich eigenständig). Verweis auf F-GT Lite stimmt mit `/sim-racing-cockpits/` (Platz 3) überein.
- **Technik:** Build ok; 1440/390 px: 1 × H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen; Symbolbilder `flightrig`/`flightstand` korrekt.

## Korrekturaufträge
- [mittel] Top 5 Nr. 5 „Trak Racer Flight Sim Upgrade-Halterung“ (B0BFRQ7K78) – amazon.de aktuell „derzeit nicht verfügbar“ (Recherche hatte das bereits als offen markiert) – durch aktives Listing ersetzen oder laut Recherche-Fallback als Hinweis ohne Link (`where`) führen; Verweis im Guide-Abschnitt „umbau-sim-racing“ anpassen – **produkt-rechercheur**, danach **redakteur**
- [niedrig] Platz 2 `variant` „Deluxe V2“ und FAQ „Wheel Stand Pro Deluxe V2“ – das Listing B00DIQ3168 (seit 2013) nennt „Deluxe V2“ nicht im Titel; die Herstellerdaten stammen von der Deluxe-V2-Seite – prüfen, ob das Listing die V2 liefert, sonst „Deluxe V2“ streichen – **produkt-rechercheur**
- [niedrig] Platz 1 Cons „Kein Monitorhalter im Lieferumfang“ – Beleg ist der TweakTown-Test der MSFS Edition; für NLR-S018 aus Lieferumfang (Hersteller) bestätigen oder als „laut Test der MSFS Edition“ kennzeichnen – **redakteur**

## Runde 2 (Orchestrator, 2026-10-23)

Korrekturaufträge umgesetzt (Rechercheur/Redakteur), per Diff und `node build.mjs` (grün) nachgeprüft. Offen bleiben nur die im PR genannten Live-Prüfungen der ASINs.
