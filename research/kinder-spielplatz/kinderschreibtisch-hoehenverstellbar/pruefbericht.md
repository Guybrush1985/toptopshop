# Prüfbericht: kinderschreibtisch-hoehenverstellbar

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig**

## Technik
- Build fehlerfrei, 2.893 Wörter. 1440 px ok: eine H1, JSON-LD ok, keine Konsolenfehler/404.
- **390 px: horizontales Scrollen (scrollWidth 425 px).** Ursache ist der Top-5-Eintrag Paidi Diego: `where: "Möbelhandel (z. B. Höffner) und Paidi-Fachhändler"` wird mit `.top5 .where{white-space:nowrap}` nicht umgebrochen und drückt die Grid-Spalte aller Top-5-Zeilen auf 425 px (Screenshot schreibtisch-top5-390.png im Scratchpad).

## ASIN-Prüfung (WebSearch, amazon.de)
- B08BTR7FLP moll Winner Classic weiß – Titel passt (53–82 cm, 10 Stufen, Gruibingen); Preisklasse €€ plausibel.
- B0FT6XF5TY FLEXISPOT Kinderschreibtisch 110 × 52 neigbar – Titel passt (58,5–90,5 cm, 0–40°, ab 6 Jahren, Garantie 5/3 Jahre), aktiv.
- B07S5V78GZ moll Champion Right Up Weiß/Eiche – **in der Suche nicht auffindbar**. Gefunden wurde nur die Variante Weiß/Weiß B07S6V8YTX (121 × 72 × 53, 53–82 cm). Der Rechercheur nennt außerdem Weiß/Rosa B07S5DMNK5.

## Korrekturaufträge
- [hoch] top5.items[4].where – Text kürzen, damit er auf 390 px umbricht, z. B. „Paidi-Fachhandel, Höffner“ (≤ ca. 25 Zeichen). Den Hinweis „Möbelhandel und Paidi-Fachhändler“ steht schon im Fließtext. Zusätzlich an den Orchestrator: `.top5 .where` auf Mobil `white-space:normal` geben (Template, betrifft alle Seiten mit `where`) – zuständig: redakteur (+ Template-Hinweis)
- [mittel] products[2].asin B07S5V78GZ – Das Listing ist nicht bestätigbar. Verfügbarkeit prüfen, sonst auf B07S6V8YTX (Weiß/Weiß) wechseln und Name/Variante anpassen („Korpus Weiß – Seiten Weiß“) – zuständig: produkt-rechercheur
- [gering] products[2] Champion – Die Neigung („rechter Plattenteil stufenlos“) ist ok. Der Rechercheur hat „bis 20°“ nur vom Schwestermodell; bitte nicht ergänzen, solange das unbelegt ist (Hinweis, aktuell korrekt).
- [gering] Callout „Sicherheit“ – „Kollisionsstopp nutzen“ gilt nur für Tische mit Kollisionserkennung (moll e-Champion). Für den FlexiSpot ist sie nicht belegt. Formulieren: „Kindersicherung und – falls vorhanden – Kollisionsstopp nutzen“ – zuständig: redakteur
- [gering] Thematisch passend wäre der Zara-Home-Rückruf eines Kinderschreibtischstuhls auf Rollen (CCPC 21.01.2026, steht bereits auf /kindertisch-mit-stuehlen/) als kurzer Hinweis im Stuhl-Abschnitt. Optional, mit Link statt Duplikat – zuständig: redakteur

## In Ordnung
Keine Bewertungsanzahlen, Sterne oder festen Preise. DIN EN 1729 (Teil 1/2) und GS sind korrekt erklärt; dass EN 71 nicht gilt, steht im Text. Öko-Test ist mit Heft 2/2011 zitiert und als veraltet gekennzeichnet. Prüfzeichen stehen nur als Herstellerangabe. Beim Kinderarzt-Hinweis ist der Gesundheitsbezug zurückhaltend formuliert. Platz 1 (8,33) liegt knapp vor Platz 3 (8,23), Gewichte = 1. Die Top 5 hat einen anderen Intent (Ausstattung/Platz). Keine relevante Textüberschneidung mit den Schwesterseiten (≤ 1,6 %).

## Korrekturen (Runde 1)
- **top5.items[4].where:** auf „Paidi-Fachhandel“ gekürzt (Höffner/Möbelhandel steht weiter im Text). Das CSS (`.top5 .where` mobil) hat der Orchestrator bereits angepasst.
- **Champion-ASIN:** B07S5V78GZ (Weiß/Eiche) ist per WebSearch weder über Titel noch über ASIN auffindbar. Gewechselt auf **B07S6V8YTX** – Titel „moll Champion Right Up … White Body - White Sides, 121 x 72 x 53 cm“, 53–82 cm, rechter Plattenteil neigbar. Name/variant/query auf „Korpus Weiß – Seiten Weiß“ angepasst; Feature um Herstellerangaben aus dem Listing ergänzt (8 Akzentfarben im Lieferumfang, 6–12 Jahre, bis 100 kg). Bewertung unverändert (gleiches Modell). Neigung „bis 20°“ weiterhin nicht ergänzt.
- **Callout Sicherheit:** „Kindersicherung und – falls vorhanden – den Kollisionsstopp nutzen“.
- **Optional umgesetzt:** Kurzer Hinweis auf den Zara-Home-Rückruf (Schreibtischstuhl auf Rollen, Kippgefahr) im Stuhl-Absatz mit Link auf /kindertisch-mit-stuehlen/#aufstellen-und-sicherheit statt Duplikat.
