# Prüfbericht schaukeltuch (2026-10-08)

**Ergebnis: Korrektur nötig**

Technik: Build ok; 1440/390 px ohne Konsolenfehler, ohne 404, kein horizontales Scrollen (Tabellen scrollen im eigenen Container), genau eine H1, JSON-LD parsebar, kein AggregateRating, Meta 55/155 Zeichen. Gewichte = 1, Platz 1 höchste Note (7,95 > 7,6 > 7,05 berechnet aus ratings).

## Warn-/Rückrufaussagen – Prüfung gegen Quellen (WebSearch, Direktabruf gesperrt)
| Aussage | Befund |
|---|---|
| NVWA 04/2023 Verkaufsverbot + Rückrufe, Tod eines Kindes (Tuch um den Hals), Unfallmodell + 3 weitere geprüft, keines sicher | bestätigt (DutchNews 04/2023, Consumentenbond, Hart van Nederland) |
| Australien 2020 / USA 2021, jeweils 12-Jährige | bestätigt (DutchNews) |
| TheKiddoSpace: OPSS 31.08.2025 (ernst), CCPC 22.07.2025, CPSC 26.02.2026 (26-301), Kanada 2026 | bestätigt; Health-Canada-Seite Stand 14.05.2026, Bericht CP24 29.05.2026 |
| Milo & Moon NL 11/2025 nach NVWA-Warnung | bestätigt (NVWA ließ zurückrufen, Art. MM-BB-HC001, verkauft 04–09/2025) |
| 4Little NL 05/2025 „nach NVWA-Warnung“ | nur teilweise: Webshop-Rückruf in eigener Verantwortung (Hart van Nederland 05/2025), trotz seit 04/2023 geltendem Verbot – keine eigene NVWA-Warnung gefunden; Quelle fehlt auf der Seite |
| YONGIAGA, Safety Gate NL, nicht konform mit Spielzeugrichtlinie, EN 71-1, EN 71-8, Schlaufe | bestätigt: Marke + A12/00955/23 über DGC-Aviso 46/2023; Meldeland NL + EN 71-1/-8 über STC-Zusammenstellung Safety Gate 05/2023 (A12/00951–00955/23) |

## Korrekturaufträge
- [hoch] products[0]/[1], answer, Karten, Tabelle – Preisrolle stimmt nicht: Kid's Relax laut amazon.de-Treffer ca. 39,80 € (Herstellershop 42,50 €), Kid's Swinger 49,95 € → Relax ist günstiger als der „Preis-Leistungs“-Sitz. `priceTier` Relax = 1 statt 2; Aussagen „Am günstigsten ist der Kid's Swinger“, „Günstigster Markensitz/Markenartikel der Auswahl“, Karte „Kindergarten & Budget“ korrigieren bzw. Rolle von Platz 2 neu begründen (z. B. „Kompakt für Kindergartenkinder, drinnen & draußen“). – produkt-rechercheur (Preis live prüfen) + redakteur
- [mittel] editorial „warum-kein-elastisches-schaukeltuch“, Callout – 4Little umformulieren: „Der Webshop 4Little rief im Mai 2025 eine Therapieschaukel zurück, die trotz des Verbots von 2023 verkauft worden war“; Quelle ergänzen (hartvannederland.nl …/therapieschommels-verbod-verkocht-webshop-4little). – redakteur
- [mittel] sources – Beleg für Meldeland NL/EN 71-8 bei YONGIAGA ergänzen (STC „EU Safety Gate Alerts May 2023“, Alert A12/00955/23) und Health-Canada-Rückruf (recalls-rappels.canada.ca/…thekiddospace-children-s-sensory-swing…) sowie Hart-van-Nederland-Artikel zu Milo & Moon/4Little. – redakteur
- [mittel] top5 „small foot Nestschaukel XL 110“ – „bis 150 kg“ widerspricht amazon.de-Listing B0B42W2NTP (dort 120 kg, ab 3 J.); Produkt hat keinen Eintrag in produkte.json (unbelegt) und steht identisch auch in der Top 5 von deckenschaukel (Dopplung). Last auf 120 kg (Herstellerangabe Amazon) korrigieren, in produkte.json belegen oder hier durch anderes Produkt ersetzen. – produkt-rechercheur
- [niedrig] editorial „Für die Hersteller unserer Empfehlungen (AMAZONAS, LA SIESTA, Diabolo) …“ – small foot fehlt in der Liste (oder Satz auf alle Top-5-Marken erweitern, nach Prüfung). – redakteur
- [niedrig] guide „Die Meldungen in unserer Quellenliste nennen Modell und Verkaufszeitraum“ – trifft nicht für alle Quellen zu (DutchNews/Consumentenbond nennen keine Modelle) → „Die behördlichen Meldungen nennen …“. – redakteur
- [niedrig] products[2].specs.masse „keine Angabe gefunden“ – amazon.de-Listing B07M6GHW44 nennt 210 × 110 cm (Liegefläche) und 79,4 kg in den Sicherheitshinweisen. – produkt-rechercheur
- [niedrig] Diabolo-Listing B0BHDHM6BD nennt in der Produkttabelle zusätzlich ASIN B00YEV5XV2 – vor Livegang Variante (6 m, blau) prüfen. – produkt-rechercheur

## ASIN-Stichprobe (WebSearch amazon.de)
B00FDS9JQU Kid's Relax ✔ · B00FDS3MPO Kid's Swinger Green ✔ (nicht eingestellt) · B07M6GHW44 Moki Lilly ✔ · B07M6GHXTY Moki Max ✔ (lieferbar) · B000OY3DVU Power Hook ✔ · B0BHDHM6BD Diabolo 6 m blau ✔ (s. o.) · B0B42W2NTP small foot 12002 ✔ (Detailtabelle nennt B07MVD9G8Z). Joki nur `query` – korrekt, weil kein aktives Listing.

## Korrekturen (Runde 1)
- [hoch] Preisrolle: amazon.de-Suchtreffer bestätigen Kid's Relax ca. 38,67–44,15 € vs. Kid's Swinger 49,95 €. Relax `priceTier` 1; Relax bleibt Platz 1 (höchste Note 7,95) und wird in answer, verdict, pros und Quick-Antwort als zugleich günstigster Sitz benannt. Platz 2 umbenannt in „Kompakt für Kindergartenkinder“ (statt „Bestes Preis-Leistungs-Verhältnis“); verdict/bestFor/pros/cons (neu: „Teurer als der größere Kid's Relax“) und Karte („Kindergarten & draußen“) angepasst. Reihenfolge unverändert.
- [mittel] 4Little im Callout umformuliert (Webshop-Rückruf trotz Verbot von 2023); Milo & Moon „nach Eingreifen der NVWA“. Quelle Hart van Nederland ergänzt.
- [mittel] Quellen ergänzt: Hart van Nederland (4Little), Health Canada (TheKiddoSpace), STC „EU Safety Gate Alerts (May 2023)“.
- [mittel] small foot Nestschaukel XL 110 (B0B42W2NTP): Last auf 120 kg (Herstellerangabe amazon.de), „für draußen gedacht“; guenstiger.de-Quelle durch amazon.de ersetzt; Produkt in produkte.json (top5) belegt. Dopplung mit deckenschaukel bleibt bewusst (andere Seite, andere Funktion) – ggf. Orchestrator entscheiden.
- [niedrig] small foot in Herstellerliste ergänzt; „Die behördlichen Meldungen nennen …“ umformuliert.
- [niedrig] Moki Lilly Maße: „ca. 210 × 110 cm (Liegefläche)“; 79,4 kg in produkte.json vermerkt (Seite behält gerundet 80 kg).
- [niedrig] Diabolo: B00YEV5XV2 ist laut amazon.de dasselbe Set (6 m, blau, Dreieckhalterung) – B0BHDHM6BD beibehalten.
- Build `node build.mjs` fehlerfrei.
