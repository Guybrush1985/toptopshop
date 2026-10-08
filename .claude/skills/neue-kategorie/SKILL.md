---
name: neue-kategorie
description: Orchestrator für den Ausbau von toptop.shop mit einem Agententeam (Trend-Scout, Strukturierer, Produkt-Rechercheur, Illustrator, Redakteur, Prüfer). Verwenden, wenn der Nutzer neue Nischen/Trends finden, eine neue Kategorie, Produktgruppe oder einen neuen Bereich anlegen oder bestehende Kategorien ausbauen möchte (z. B. „finde neue Nischen im Bereich Kinder“, „lege eine Kategorie Luftreiniger an“).
---

# Orchestrator: toptop.shop mit dem Agententeam ausbauen

Der Nutzer spricht **nur mit dir**, dem Orchestrator (Hauptsitzung). Du verteilst die Arbeit über das
`Agent`-Tool an die Fachagenten in `.claude/agents/`, sammelst die Ergebnisse, holst an den Freigabepunkten
die Entscheidung des Nutzers ein und lieferst am Ende einen PR. Die Fachagenten reden nie direkt mit dem Nutzer.

Ergebnis ist eine Kategorie **wie die bestehenden** (Content-Modell `src/content/README.md`, Symbolbilder,
Infografiken `scores`/`steps`, Amazon-/Awin-Links) – kein neues Layout.

Grundlage für alle: `CLAUDE.md`, `docs/BRIEFING.md`, `src/content/README.md`.

## Das Team

| Agent (`subagent_type`) | Aufgabe | Ergebnis |
|---|---|---|
| `trend-scout` | Nischen mit wachsender Nachfrage und guter Produktqualität finden | `research/trends/<datum>-<thema>.md` |
| `strukturierer` | Bereich, Unterbereiche, Kategorien, Suchintents, Rollen, FAQ-Kandidaten, Links | `research/<thema>/struktur.json` |
| `produkt-rechercheur` | je Kategorie: Tests, Rückrufe, Top 3/Top 5, ASINs, Awin, Bewertungen mit Quellen | `research/<thema>/<slug>/produkte.json` |
| `illustrator` | Symbolbilder (`visual.kind`, neue Formen), Steps-Grafik, Alt-Texte, OG-Bilder | `research/<thema>/<slug>/bilder.json` |
| `redakteur` | Kategorie-Datei schreiben, Build grün | `src/content/categories/<slug>.mjs` |
| `pruefer` | unabhängige Prüfung von Fakten, Links, Regeln, Technik | `research/<thema>/<slug>/pruefbericht.md` |

Jeder Agent startet ohne Kontext: Gib im Prompt immer Thema, Slug(s), Pfade der Eingabedateien, das heutige
Datum und Besonderheiten aus dem Gespräch mit (z. B. Wünsche des Nutzers, ausgeschlossene Marken).

## Ablauf

### Einstieg wählen
- „Finde neue Nischen / Trends …“ → ab **Schritt 1**.
- „Lege Kategorie/Bereich X an“ → ab **Schritt 2** (kein Scout).
- „Baue Kategorie X aus / aktualisiere X“ → `produkt-rechercheur` mit Auftrag „Aktualisierung“, dann ab Schritt 4.

### 1. Trend-Scout → ✋ Freigabe Nischenauswahl
`trend-scout` mit Themenfeld (Standard: Sport, Kinder, Familie, Outdoor). Preis egal, Qualität wichtig.
Dem Nutzer die Shortlist kompakt zeigen (Tabelle mit Punkten, Empfehlung) und fragen, welche Nischen
umgesetzt werden. **Ohne Auswahl nicht weitermachen.**

### 2. Struktur
`strukturierer` für das gewählte Thema. Ergebnis selbst plausibilisieren (Slugs eindeutig, keine
Überschneidung mit `src/content/categories/`). Nur bei echten Zuschnittsfragen (`offen`) den Nutzer fragen,
sonst weiter.

### 3. Recherche und Bilder (parallel)
In **einer** Nachricht mehrere `Agent`-Aufrufe starten: je Kategorie ein `produkt-rechercheur`, dazu ein
`illustrator` für alle Kategorien des Themas (Formen anhand `produktart`; Steps-Grafik kann er nach der
Recherche ergänzen). Bei vielen Kategorien in Wellen à ca. 5 arbeiten.

**✋ Freigabe nur bei Bedarf:** Melden Rechercheure, dass ein Produkt nur über einen **nicht freigeschalteten
Awin-Händler** zu bekommen ist, dem Nutzer Händler, Awin-ID und Bewerbungstext vorlegen und fragen: bewerben
(und Produkt vorerst ersetzen) oder gleichwertiges Amazon-/Awin-Produkt nehmen. Nie selbst bewerben.

### 4. Texte
Je Kategorie ein `redakteur` (parallel, sobald `produkte.json` und `bilder.json` vorliegen). Neue Bereiche in
`src/site.mjs` vorher von **einem** Redakteur anlegen lassen oder selbst anlegen, damit parallele Agenten nicht
gleichzeitig dieselbe Datei ändern. Danach selbst `node build.mjs` – muss fehlerfrei durchlaufen.
Danach `illustrator` für die OG-Vorschaubilder (`scripts/og-images.mjs`).

### 5. Prüfung
`pruefer` für alle neuen Kategorien. Korrekturaufträge an den genannten Agenten zurückgeben (gezielt, mit
Fundstelle) und erneut prüfen lassen – höchstens zwei Runden, danach Rest als offenen Punkt melden.
Kleine eindeutige Korrekturen (Tippfehler, Link) darfst du selbst machen.

### 6. Abschluss → ✋ Freigabe Merge
- `node build.mjs`, dann Commit auf den Arbeitsbranch (inkl. `research/`), Push, PR gegen `main` mit
  Tabelle der Top 3 je Kategorie und offenen Punkten.
- Mergen nur nach Freigabe des Nutzers; danach Deploy-Now-Lauf prüfen.
- Bericht an den Nutzer (kurz, auf Deutsch): umgesetzte Kategorien, Auswahl, fehlende ASINs,
  nicht freigeschaltete Awin-Programme mit Bewerbungstext, Abweichungen vom Briefing, Prüfergebnis.
- Neue Grundsatzentscheidungen in `docs/BRIEFING.md` → „Entscheidungen & Erfahrungen“ nachtragen.

## Feste Regeln (gelten für alle Agenten, im Prompt bei Bedarf wiederholen)

- Bezugsquellen: **1. Amazon** (eindeutige, aktive ASIN) → **2. Awin-Händler mit Freischaltung** →
  **3. nur nach Rückfrage** neuer Awin-Händler oder gleichwertiges Produkt aus 1./2.
- Für jedes Produkt (Top 3 und Top 5) die amazon.de-ASIN recherchieren; nie raten, sonst `query` + Meldung.
- Keine festen Preise, keine Amazon-Produktbilder, keine externen Ressourcen, keine erfundenen Bewertungen.
- Nur belegbare Aussagen: Herstellerangaben kennzeichnen, Tests mit Institut und Heft.
- Produkte mit Rückrufen/Verkaufsstopps nicht empfehlen.
- Awin-API nur lesend: `curl -sS "https://api.awin.com/publishers/3117711/programmes?relationship=joined"`.
- Symbolbilder: vorhandene `visual.kind`-Werte stehen in `src/content/README.md` und `src/templates/visuals.mjs`;
  neue Formen ergänzt der Illustrator.
- Neue Netzwerke/Tracking → Datenschutz und Impressum vor dem Livegang anpassen.
