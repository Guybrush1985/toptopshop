# Prüfbericht: /bestes-tischtennisnetz/

Stand: 2026-10-26 · Prüfer · Ergebnis: **Korrektur nötig** (nur Text, keine ASIN-Probleme)

## Geprüft
- Build fehlerfrei (2.911 Wörter, 7 FAQs, Top 5 vollständig, `quick` in allen H2-Abschnitten). Anker `/tischtennisplatten/#top5-beton-indoor` existiert.
- Meta: Title 57, Description 164 Zeichen. Gewichte 1,00. Gesamtnoten 8,22 / 7,40 / 7,83 → Platz 1 höchste.
- Netzhöhe 15,25 cm, Pfosten 15,25 cm außerhalb der Seitenlinie (ITTF 2.2.2/2.2.3) ✔. Keine Preise, Sterne oder Bewertungszahlen.
- ASINs per WebSearch: B088KNR7JF (JOOLA WX Aluminium, Art. 11191, EN 14468-2 C) ✔, B0002VLEHK (Donic-Schildkröt Party 808306, bis 6,5 cm) ✔, B00CRBY15K (JOOLA Libre 31016, Klasse B) ✔, B000JKVE4C (Clipmatic) ✔.
- Darstellung 1440/390 px fehlerfrei. Symbolbild `ttnet` korrekt.

## Befunde
1. **[Mittel]** Widerspruch Baumwollnetz vs. „Indoor & Outdoor“: Platz 1 (Baumwollnetz) läuft als „Beste Gesamtwahl (Indoor & Outdoor)“. Gleichzeitig steht unter Kaufkriterien „Baumwollnetze … gehören eher in Keller und Hobbyraum“ und in der FAQ „Kann ein Tischtennisnetz draußen bleiben?“: „Baumwollnetze und Stahl gehören nach dem Spielen nach drinnen.“ – **Auftrag:**
   - verdict Platz 1: „Einziger Haken: Für sehr dicke Plattenkanten ist sie nicht gebaut.“ → „Haken: Für sehr dicke Plattenkanten ist sie nicht gebaut, und das Baumwollnetz sollte draußen nach dem Spielen abgenommen werden.“
   - editorial: „gewinnt bei uns, weil sie keine echte Schwäche hat“ → „gewinnt bei uns, weil sie in keinem Kriterium deutlich abfällt“.
   - FAQ: „Baumwollnetze und Stahl gehören nach dem Spielen nach drinnen.“ → „Baumwollnetze – auch an Alu-Garnituren wie der JOOLA WX – und Stahl gehören nach dem Spielen nach drinnen.“
   – zuständig: redakteur
2. **[Mittel]** Klemmweiten-Spanne „2,5–6,5 cm“ (editorial 2. Absatz „von rund 2,5 cm bis 6,5 cm“, FAQ „Passt jedes Tischtennisnetz …“, guide `facts`): Die 2,5 cm stammen nur von einem unbestätigten polnischen Händler-Listing zur Libre. Die Seite selbst nennt die Libre „nicht verbindlich angegeben“. – **Auftrag:** in allen drei Stellen „2,5“ → „3,8“ und den Zusatz „(wo angegeben)“ ergänzen, z. B. „reicht in unserer Auswahl, wo angegeben, von rund 3,8 cm bis 6,5 cm“. Facts: value „3,8–6,5 cm“, label „Klemmweiten in unserer Auswahl (wo angegeben)“. – zuständig: redakteur
3. **[Niedrig]** Kaufkriterien „Höhe, Spannung und Norm“: „B für Schul- und Vereinssport … für den Vereinsbetrieb braucht es Klasse A bzw. eine ITTF-Zulassung“ – widerspricht sich. – **Auftrag:** → „für Punktspiele verlangen die Verbände je nach Spielklasse ein Netz der Klasse A bzw. mit ITTF-Zulassung“. – zuständig: redakteur
4. **[Niedrig]** Platz 2 `specs.material: "Nylonnetz, Pfostenmaterial nicht eindeutig angegeben"` – Das Listing nennt einen Metallrahmen. – **Auftrag:** → „Metallrahmen (laut Listing), Nylonnetz“. – zuständig: produkt-rechercheur
5. **[Niedrig]** `sources`: „DIN EN 14468“ verlinkt nur auf die Startseite dinmedia.de. Die drei amazon.de-Quellenlinks sind ohne Partner-Tag und ohne `sponsored`. – **Auftrag:** den DIN-Link entfernen oder auf die Normseite verlinken. Amazon-Quellenlinks optional entfernen, die Produkte sind bereits verlinkt. – zuständig: redakteur

## Runde 2 (2026-10-26)

Ergebnis: **bestanden**

- Befund 1 erledigt: Verdict Platz 1 „Haken: … Baumwollnetz sollte draußen nach dem Spielen abgenommen werden“. Editorial „in keinem Kriterium deutlich abfällt“. FAQ „Baumwollnetze – auch an Alu-Garnituren wie der JOOLA WX – und Stahl …“.
- Befund 2 erledigt: „3,8–6,5 cm (wo angegeben)“ im Editorial, in der FAQ und in den Facts. Im Seitentext steht „2,5 cm“ nicht mehr, es kommt nur noch in `produkte.json` als unbestätigte Händlerangabe vor.
- Befund 3 erledigt („für Punktspiele verlangen die Verbände je nach Spielklasse …“).
- Befund 4 zurückgezogen: `produkte.json` enthält keinen Beleg für einen Metallrahmen der Party-Garnitur. Die bestehende Angabe „nicht eindeutig angegeben“ passt zur Beleglage.
- Befund 5 erledigt: DIN-Link und Amazon-Quellenlinks entfernt.
- Noten 8,225 / 7,40 / 7,825, Platz 1 am höchsten. Meta 57/164 Zeichen. 7 FAQs. `node build.mjs` fehlerfrei. Darstellung 1440/390 px fehlerfrei.
