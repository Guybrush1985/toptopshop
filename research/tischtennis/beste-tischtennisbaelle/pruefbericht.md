# Prüfbericht: /beste-tischtennisbaelle/

Stand: 2026-10-26 · Prüfer · Ergebnis: **bestanden** (kleine Hinweise)

## Geprüft
- Build fehlerfrei (3.073 Wörter, 9 FAQs, Top 5 vollständig, `quick` in allen H2-Abschnitten).
- Meta: Title 59, Description 145 Zeichen. Gewichte 1,00. Gesamtnoten 8,28 / 7,03 / 7,95 → Platz 1 höchste.
- Fakten: 40 mm / 2,7 g (ITTF 2.3) ✔, Toleranz 40,00–40,60 mm (T3) ✔. Die Zelluloid→Plastik-Umstellung steht ohne falsche Jahreszahl. Sterne werden korrekt als Herstellerstufe erklärt, ITTF-Zulassung durchgehend „laut Hersteller/Händler“. Keine Preise, Sterne oder Bewertungszahlen.
- ASINs per WebSearch: B08632FN6J (Butterfly R40+ 3er, Modell 95820, auf Lager) ✔, B0895LNJXR (Nittaku Premium 40+ 6er) ✔, B00TDO40E6 (JOOLA Training 120) ✔ mit Hinweis (Befund 1).
- Darstellung 1440/390 px fehlerfrei. Symbolbild `ttballs` korrekt.

## Befunde
1. **[Niedrig]** Platz 2 `asin: "B00TDO40E6"` – Variantenlisting: Titel „Orange“, URL-Slug „…-120-White“, interne ASIN B00CCS7D3U, Modell 44280 (die Research nennt für die 120er-Box Art. 44230). Der Text weist die Farbwahl bereits aus. – **Auftrag:** prüfen, ob es eine eigene Kind-ASIN für Weiß gibt. Wenn nicht, so lassen. – zuständig: produkt-rechercheur
2. **[Niedrig]** Platz 1 `verdict`: „Der Ball, mit dem auch die Profis spielen“ – zu pauschal, weil auf der Profitour auch andere Bälle gespielt werden. – **Auftrag:** → „Der Ball der aktuellen Tischtennis-Weltmeisterschaften:“. – zuständig: redakteur
3. **[Niedrig]** Platz 3 `cons[0]`: „Teuerster Ball je Stück in diesem Vergleich“ – ohne Preisbeleg, und Preise ändern sich. – **Auftrag:** → „Einer der teureren Bälle je Stück“. – zuständig: redakteur

## Runde 2 (2026-10-26)

Ergebnis: **bestanden**

- Befund 1: `produkte.json` dokumentiert jetzt die Farbwahl im Listing (Titel Orange, Weiß wählbar). Im Text steht der Hinweis „beim Kauf Variante prüfen“. Das reicht.
- Befund 2 erledigt: „Der Ball der aktuellen Tischtennis-Weltmeisterschaften: …“. Der Zusatz „Spielball der Mannschafts-WM-Finals 2026 in London“ ist in `produkte.json` belegt (ITTF-Mitteilung, Butterfly-Shop).
- Befund 3 erledigt: „Einer der teureren Bälle je Stück“.
- `node build.mjs` fehlerfrei. Darstellung 1440/390 px fehlerfrei.
