# toptop.shop – Arbeitsregeln

- **Briefing lesen:** `docs/BRIEFING.md` ist die verbindliche Grundlage (Positionierung, Seitenaufbau,
  SEO/GEO, Content-Qualität, Monetarisierung, Design, Recht, bisherige Entscheidungen).
- **Neue Kategorie, neuer Bereich oder Nischen-/Trendsuche:** Skill `/kategorie-pipeline` verwenden – er ist der
  Orchestrator des Agententeams (`.claude/agents/`: trend-scout, strukturierer, produkt-rechercheur, illustrator,
  redakteur, pruefer). Der Nutzer spricht nur mit dem Orchestrator; Arbeitsdateien liegen in `research/`.
  `neue-kategorie` leitet für Einzelkategorien dorthin weiter.
- Antworten an den Nutzer auf Deutsch.

- Statische Seite, gebaut mit `node build.mjs` (Ausgabe `dist/`). Inhalte: `src/content/categories/*.mjs`,
  Content-Modell in `src/content/README.md`. Vor jedem Commit `node build.mjs` ausführen – der Build prüft
  Mindestinhalte, interne Links und Anker.
- **Reihenfolge der Bezugsquellen (Anweisung des Nutzers, immer einhalten):**
  1. **Amazon bevorzugt.** Ist das Produkt auf amazon.de mit eindeutiger, aktiver ASIN erhältlich, wird der
     Amazon-Link verwendet – auch wenn es das Produkt zusätzlich bei Awin-Händlern gibt.
  2. **Sonst ein Awin-Händler, bei dem der Nutzer bereits freigeschaltet ist** (Status `joined` laut Awin-API
     bzw. bereits in `src/site.mjs` unter `awin.merchants` genutzt).
  3. **Erst wenn beides nicht geht:** einen neuen Awin-Händler vorschlagen – nicht selbst einbauen, sondern
     den Nutzer fragen und einen Bewerbungstext liefern. Alternativ ein gleichwertiges Produkt wählen, das
     über 1. oder 2. erhältlich ist, und das transparent begründen.
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
