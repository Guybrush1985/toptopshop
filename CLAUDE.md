# toptop.shop – Arbeitsregeln

- **Briefing lesen:** `docs/BRIEFING.md` ist die verbindliche Grundlage (Positionierung, Seitenaufbau,
  SEO/GEO, Content-Qualität, Monetarisierung, Design, Recht, bisherige Entscheidungen).
- **Neue Kategorie oder neuer Bereich:** Skill `neue-kategorie` verwenden (`.claude/skills/neue-kategorie/`).
- Antworten an den Nutzer auf Deutsch.

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
- **Bezugsquellen: nur Amazon oder Händler aus dem Awin-Netzwerk.** Awin-Händler stehen in `src/site.mjs`
  unter `awin.merchants` (Name, Awin-ID `mid`, Domain). Produkte bei Awin-Händlern bekommen `shop` (Schlüssel aus
  `awin.merchants`) und `url` (konkrete Produktseite beim Händler, ohne Tracking-Parameter). Der Awin-Deeplink wird
  automatisch erzeugt, sobald `awin.publisherId` gesetzt ist. Neue Händler nur aufnehmen, wenn ihr Programm auf
  Awin aktiv ist; die Awin-ID im Awin-Verzeichnis prüfen.
- Keine festen Amazon-Preise und keine Amazon-Produktbilder auf der Seite (Partnerprogramm-Richtlinien).
- Produktaussagen nur mit Quelle: Herstellerangaben als solche kennzeichnen, Testergebnisse mit Institut und Heft.
- Partner-Tag: `toptopshop-21` (in `src/site.mjs`).
- Veröffentlichung: IONOS Deploy Now baut bei jedem Push auf `main`.
