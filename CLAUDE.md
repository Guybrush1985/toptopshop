# toptop.shop – Arbeitsregeln

- Statische Seite, gebaut mit `node build.mjs` (Ausgabe `dist/`). Inhalte: `src/content/categories/*.mjs`,
  Content-Modell in `src/content/README.md`. Vor jedem Commit `node build.mjs` ausführen – der Build prüft
  Mindestinhalte, interne Links und Anker.
- **Amazon-Links: Für jedes Produkt (Top 3 und Top 5) immer die passende ASIN auf amazon.de recherchieren**
  und als `asin` eintragen. Dabei:
  - nur ASINs aus amazon.de-Produktseiten (`/dp/…`) übernehmen, deren Titel genau zum Produkt passt
    (Marke, Produktlinie, LSF/Farbton, Größe);
  - aktive Listings bevorzugen – keine, die als „derzeit nicht verfügbar“ oder „vom Hersteller eingestellt“
    markiert sind, wenn es eine aktive Alternative gibt;
  - wenn kein eindeutiges Listing auffindbar ist: keine ASIN raten, sondern `query` mit dem exakten
    Produktnamen belassen (führt zur Amazon-Suche) und das dem Nutzer melden.
  - Den Produktnamen im Text an die tatsächliche Amazon-Bezeichnung anpassen, wenn sie abweicht.
- Keine festen Amazon-Preise und keine Amazon-Produktbilder auf der Seite (Partnerprogramm-Richtlinien).
- Produktaussagen nur mit Quelle: Herstellerangaben als solche kennzeichnen, Testergebnisse mit Institut und Heft.
- Partner-Tag: `toptopshop-21` (in `src/site.mjs`).
- Veröffentlichung: IONOS Deploy Now baut bei jedem Push auf `main`.
