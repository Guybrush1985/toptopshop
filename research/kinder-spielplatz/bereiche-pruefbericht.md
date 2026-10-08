# Prüfbericht: Bereichs- und Unterbereichsseiten Kinder-Spielplatz und Spielzimmer

Prüfer, Stand 2026-10-08. Seiten: `/kinder-spielplatz/`, `/kinder-spielplatz/indoor/`, `/kinder-spielplatz/outdoor/`, `/spielzimmer/` (Texte in `src/site.mjs`).
Ergebnis: **Korrektur nötig**

## Geprüft
- Build ok. Alle vier Seiten bei 1440 und 390 px geprüft: keine Konsolenfehler, keine 404, kein horizontales Scrollen, genau eine H1, JSON-LD parsebar.
- Die Meta-Titel und Meta-Beschreibungen haben eine passende Länge. Die Listen in den Intros stimmen mit den vorhandenen Kategorien überein.

## Korrekturaufträge
1. **[hoch] `kinder-spielplatz` › article `quick`: „Geräte für den Hausgebrauch sollten nach EN 71 (Spielzeug) oder für den Garten nach EN 71-8 geprüft sein.“**
   - Fachlich falsch eingeordnet: Die DIN EN 71-8 heißt „Schaukeln, Rutschen und ähnliches Aktivitätsspielzeug für den häuslichen Gebrauch (Innen- und Außenbereich)“ (DIN Media). Sie gilt also nicht nur für den Garten. Außerdem ist sie Teil von EN 71 und keine Alternative dazu.
   - Die Aussage widerspricht auch den eigenen Empfehlungen: Für die meisten Top-3-Produkte (Sandkästen, Hüpfburgen, small foot und Slackers bei den Seilbahnen) wurde keine Normangabe gefunden.
   - Umformulieren, etwa so: „Schaukeln, Rutschen und ähnliche Spielgeräte für zu Hause fallen unter die Spielzeugnorm EN 71-8 (drinnen und draußen); öffentliche Spielplätze unter EN 1176. Wo Hersteller eine Norm angeben, nennen wir sie.“ Quelle: https://www.dinmedia.de/en/standard/en-71-8/66479486. – redakteur
2. **[mittel] `kinder-spielplatz` › groups › outdoor › article, 2. Absatz: „Für Spielgeräte im privaten Garten gilt die Norm EN 71-8 …“**: Zu pauschal formuliert. EN 71-8 betrifft Aktivitätsspielzeug wie Schaukeln, Rutschen und Klettergeräte, nicht automatisch jeden Sandkasten oder jede Hüpfburg. Außerdem gilt sie drinnen wie draußen. Ändern in „Schaukeln, Rutschen und Klettergeräte für den Privatgebrauch fallen unter EN 71-8 …“. – redakteur
3. **[mittel] `kinder-spielplatz` › article, 3. Absatz: „Wir empfehlen nur Produkte, die bei Amazon erhältlich sind“**: Das stimmt nicht. In den Top 5 von `indoor-rutsche` (bio-kinder.de), `kletterwand-kinderzimmer` (ehrenkind.de) und `sprossenwand-kinder` (Decathlon-Marktplatz) stehen Produkte mit `where` ohne Amazon-Link. Ändern in etwa: „Unsere Top 3 sind bei Amazon erhältlich; wenige Spezialprodukte nennen wir mit Bezugsquelle ohne Link.“ – redakteur
4. **[niedrig] `spielzimmer` › Callout „Kippschutz“: „immer mit dem mitgelieferten Kippschutz“**: Nicht jedes Möbel wird mit Kippschutz geliefert. Ändern in „mit Kippschutz an der Wand befestigen – liegt keiner bei, passendes Kippschutz-Set nachkaufen“. – redakteur
5. **[niedrig] `kinder-spielplatz` › groups › outdoor › article `quick`: „Seilbahn und Hüpfburg sind etwas für größere Kinder“**: Bei Hüpfburgen nennen die Hersteller ab 3 Jahre (Top 3 der Kategorie). Präziser formulieren: „Seilbahnen sind etwas für Schulkinder; Hüpfburgen brauchen viel Platz und ständige Aufsicht.“ – redakteur

Die Indoor-Seite hat keine Beanstandung.
