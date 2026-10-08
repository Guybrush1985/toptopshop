# Recherche-Archiv des Agententeams

Arbeitsdateien der Agenten aus `.claude/agents/` – Übergabe zwischen den Schritten und Quellenarchiv für spätere
Aktualisierungen. Wird nicht gebaut und nicht ausgeliefert (der Build liest nur `src/`).

```text
research/
  trends/<datum>-<thema>.md          Trend-Scout: Shortlist neuer Nischen
  <thema>/struktur.json              Strukturierer: Bereich, Kategorien, Suchintents
  <thema>/<slug>/produkte.json       Produkt-Rechercheur: Produkte, ASINs, Fakten mit Quellen
  <thema>/<slug>/bilder.json         Illustrator: Symbolbilder, Steps-Grafik, Alt-Texte
  <thema>/<slug>/pruefbericht.md     Prüfer: Ergebnis und Korrekturaufträge
```

Steuerung: Skill `/kategorie-pipeline` (Orchestrator) in `.claude/skills/kategorie-pipeline/SKILL.md`.
