# Prüfbericht: kinder-buecherregal

Stand: 2026-10-08 · Prüfer · Ergebnis: **Korrektur nötig** (nur kleinere Punkte)

## Technik
- `node build.mjs` fehlerfrei, 3.067 Wörter. Chromium 1440/390 px: genau eine H1, JSON-LD parsebar, keine Konsolenfehler, keine 404, kein horizontales Scrollen. Symbolbilder (shelf) werden angezeigt.

## ASIN-Prüfung (WebSearch, amazon.de)
- B01N1RW8RK Tidy Books Hellgrau 115 × 77 × 7 cm – Titel passt, Listing aktiv.
- B07NS27JDW PINOLINO Lasse weiß – Titel passt (183405, ab 3 Jahren).
- B0018LUNJI KidKraft Primary Sling 14226 – **in der Suche nicht auffindbar**, nicht live prüfbar. Nur der Rechercheur hat einen Titel-Treffer notiert.
- Top 5: nicht einzeln geprüft (Stichprobe B006MOR3FI Pinolino Natura Standregal taucht als aktives Listing auf).

## Korrekturaufträge
- [mittel] products[1].asin B0018LUNJI – das Listing ist per Suche nicht bestätigbar und laut Recherche ein altes Listing – Verfügbarkeit erneut prüfen. Wenn es sich nicht bestätigen lässt, auf die Natur-Variante B0018MCVH4 (14221) wechseln oder `asin` entfernen und nur `query` behalten, und das dem Nutzer melden – zuständig: produkt-rechercheur
- [gering] guide „kippsicher-einrichten“, Absatz 1 – „Befestigung im oberen Drittel … größte Hebelkraft“ sowie FAQ 4: Das ist allgemeiner Montagerat ohne Quelle. Als Faustregel formulieren („in der Regel oben am Möbel, wie in der Montageanleitung angegeben“) – zuständig: redakteur
- [gering] kaufkriterien – EN 14749 wird hier „Standsicherheit von Wohnmöbeln“ genannt, auf Kinderschrank/Sideboard dagegen „Aufbewahrungsmöbel“ bzw. „Behältnismöbel“. Einheitlich als „Aufbewahrungsmöbel für Wohn- und Küchenbereich“ bezeichnen – zuständig: redakteur
- [gering] Duplicate/Kannibalisierung – Die H2 „Wie befestigt man ein Kinderregal kippsicher?“, das FAQ dazu und die Dübel-Absätze (Gipskarton/Porenbeton/Fachkraft) gibt es inhaltlich fast gleich auch auf /kinderschrank/ und /sideboard-kinderzimmer/. Wörtlich überschneiden sich nur 1–1,6 % (5-Gramme), aber drei Seiten zielen auf dieselbe Suchintention. Vorschlag: hier den Abschnitt auf regalspezifische Punkte kürzen (Frontregal flach an der Wand, Stoffregal leicht, Bücherwagen auf Rollen) und für Dübel/Untergrund auf den ausführlichen Abschnitt bei /kinderschrank/ verlinken. H2 „Worauf sollte man beim Kauf achten?“ ist wortgleich mit /sideboard-kinderzimmer/ – um „eines Kinderbücherregals“ ergänzen – zuständig: redakteur
- [gering] Symbolbild PINOLINO Lasse – Es zeigt ein hohes Regal mit drei Böden; Lasse ist ein niedriger Bücherwagen auf Rollen. Wenn möglich ein niedrigeres Motiv oder eine Variante mit Rollen verwenden – zuständig: illustrator

## In Ordnung
Keine Sterne, keine Bewertungsanzahlen, keine festen Preise. Herstellerangaben und Händlerangaben sind gekennzeichnet. Altersangaben stammen nur vom Hersteller; „ab 1 Jahr“ wurde korrekt vermieden. Es gibt keinen Test und das wird transparent gesagt. Platz 1 hat die höchste Note. Die Top 5 hat einen anderen Intent (Bauformen).

## Korrekturen (Runde 1)
Stand 2026-10-08 · Korrektur-Agent · `node build.mjs` fehlerfrei (3.169 Wörter)

- **[mittel] KidKraft-ASIN – erledigt (Produkt getauscht):** B0018LUNJI (14226) und B0018MCVH4 (14221) per WebSearch (amazon.de, auch direkte ASIN-Suche) nicht als /dp-Seite auffindbar. Platz 2 jetzt das baugleiche Sling-Regal **KidKraft Hängefächerregal, Weiß mit rosa Muster (14233), ASIN B01GRFP970** – aktives Listing (auch in der Bestsellerliste Kinderzimmerregale), 71 × 61 × 30 cm, MDF + Canvas, ab 3 Jahren. Name, answer, Fließtext, Karten, FAQ, Alt-Text, Specs und Quellen angepasst; Bewertung unverändert (gleiche Bauform). Hinweis für den Nutzer: Das Design ist rosa gemustert; neutrale Farbvarianten waren nicht mit aktiver ASIN auffindbar.
- **[gering] Befestigung „oberes Drittel“ – erledigt:** im Guide und in FAQ 4 als Faustregel formuliert („wo genau, steht in der Montageanleitung, in der Regel oben am Regal“).
- **[gering] EN-14749-Bezeichnung – erledigt:** einheitlich „Aufbewahrungsmöbel für den Wohn- und Küchenbereich“ (Kaufkriterien und Quellenlabel).
- **[gering] Kannibalisierung – erledigt:** Guide „kippsicher-einrichten“ auf regalspezifische Punkte gekürzt (Wand-Frontregal flach an der Wand, leichtes Stoffregal, Bücherwagen auf Rollen ohne Feststellbremse); Dübel-/Untergrund-Absatz entfernt und auf `/kinderschrank/#aufstellen-sichern` verlinkt (auch aus den Kaufkriterien). H2 „Worauf sollte man beim Kauf eines Kinderbücherregals achten?“.
- **[gering] Symbolbild Lasse – erledigt:** `visual.kind` von `shelf` auf `sideboard` (niedriges, breites Motiv) umgestellt; ein Motiv mit Rollen gibt es in `visuals.mjs` nicht.
