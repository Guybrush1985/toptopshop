# Prüfbericht: /beste-sim-racing-pedale/

Stand: 2026-10-26 · Prüfer

## Ergebnis: **Korrektur nötig** (nur geringe Punkte, schnell behebbar)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build | fehlerfrei, 4.323 Wörter |
| Gewichte | 0,35 + 0,25 + 0,20 + 0,20 = 1,0 |
| Gesamtnoten | P1 8,25 · P2 8,03 · P3 8,10 – P1 höchste; P2 < P3 im Text transparent begründet („Preis-Leistung wegen Preisabstand“) – zulässig |
| Meta | Title 59, Description 154 |
| FAQs / quick | 9 FAQs; alle 7 H2 mit `quick` |
| Top 5 | „nach Lenkrad-Basis und Budget“ – anderer Intent; 2 von 5 Einträgen sind RS-Pedals-Bundles (Adapter bzw. Kupplung) – mit eigener Zielgruppe begründet, vertretbar |
| Preisklassen | RS 149,99 € UVP (€), CSL Elite V2 299,95 € (€€), PRO 349 € (€€€) – stimmig |
| Fakten | alle Aussagen in `produkte.json` belegt; Hersteller-/Händlerangaben gekennzeichnet; keine dt. Tests vorhanden, transparent |
| Technik 1440/390 px | 1 H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen, `racepedals` korrekt |

### ASIN-Gegenprüfung

| Produkt | ASIN | Ergebnis |
|---|---|---|
| Fanatec CSL Elite Pedals V2 | B0F94F27XV | ✔ passt; ein Snapshot „derzeit nicht verfügbar“, andere mit Angebot 299,95 € – live prüfen |
| Logitech G RS Pedals | B0FKGWRQ29 | ✔ passt, aktiv |
| Logitech G PRO Racing Pedals | B07W5JKTTH | ✔ passt (Modell 941-000187) – trotz alter ASIN korrektes Listing |
| Raceline Pedals III | B0DPXFT28V | ✔ |
| RS Pedals + Racing Adapter | B0FMYGNT2F | ✔ Bundle aus 2 Artikeln |
| Raceline LC Upgrade | B0G3PZ8KGW | ✔ |
| MOZA SR-P Load Cell | B0B73X6N4K | ✔ Titel; Verfügbarkeit widersprüchlich (ein Snapshot nicht verfügbar) |
| RS Pedals + Kupplungsmodul | B0FMYH5936 | ✔ Titel; Lieferumfang laut Quellen uneinheitlich |

## Korrekturaufträge

- [mittel] Abschnitt „alternativen“, Absatz High-End: „… Podium-Pedale … auf Q3 2026 verschoben worden“ – Aussage ist zum Stand Ende Oktober 2026 veraltet (Q3 ist vorbei), Quelle ist nur die allgemeine ComputerBase-News-Übersicht ohne konkreten Artikel. – Aktuellen Stand recherchieren und mit konkretem Artikel belegen oder den Satz streichen (für die Kaufentscheidung entbehrlich). – zuständig: produkt-rechercheur → redakteur
- [gering] Top 5 „RS Pedals mit Racing Adapter“ / „RS Pedals mit RS Kupplungsmodul“ – Text verweist Leser auf „Lieferumfang/Lieferstatus vor dem Kauf prüfen“. – Lieferumfang beider Bundles live klären und den Hinweis durch eine Tatsachenaussage ersetzen; falls Kupplung im B0FMYH5936 nicht sicher enthalten ist, Eintrag ersetzen (z. B. Raceline Pedals III LC, falls ASIN auftaucht). – zuständig: produkt-rechercheur
- [gering] Callout „Kauf und Verfügbarkeit“: MOZA SR-P und Fanatec V2 schwanken in der Verfügbarkeit – vor Merge live prüfen; bei dauerhaft „nicht verfügbar“ MOZA SR-P auf `query` umstellen. – zuständig: produkt-rechercheur

## Runde 2 (2026-10-26)

### Ergebnis: **bestanden**

| Auftrag Runde 1 | Umsetzung |
|---|---|
| [mittel] Podium-Pedale „Q3 2026“ veraltet | ✔ aktualisiert: 3-Pedal-Konfiguration mehrfach verschoben, laut GTPlanet (16.10.2026) für Q4 2026 angekündigt; konkreter Artikel als Quelle in `sources` und `produkte.json`, alte ComputerBase-Sammelquelle entfernt |
| [gering] Lieferumfang RS-Bundles | ✔ B0FMYGNT2F: Tatsachenaussage (zwei Artikel, ggf. getrennte Lieferung). B0FMYH5936: Widerspruch im Listing jetzt als Fakt benannt (Titel mit Kupplungsmodul, Beschreibung teils „optional“); Ersatzsuche dokumentiert (Raceline III LC ohne /dp/, Kupplungsmodul nicht einzeln gelistet). Vertretbar, da transparent und kein gleichwertiger Ersatz mit eindeutiger ASIN existiert. Bei der nächsten Aktualisierung erneut prüfen. |
| [gering] Verfügbarkeit MOZA SR-P / Fanatec V2 | ✔ Callout präzisiert („teils geringe Stückzahl, teils derzeit nicht verfügbar“); ASIN beibehalten, da Listing aktiv mit Marktplatzangeboten – ok |

**Build/Technik:** fehlerfrei (4.378 Wörter); 1 H1, JSON-LD parsebar; nur Preisklassen-Spannen im Text. Keine neuen ASINs, keine neuen Widersprüche.
