# Prüfbericht: /bester-sim-racing-shifter/

Stand: 2026-10-26 · Prüfer

## Ergebnis: **Korrektur nötig** (zwei ASINs auf nicht verfügbare Listings)

## Geprüft

| Punkt | Ergebnis |
|---|---|
| Build | fehlerfrei, 4.417 Wörter |
| Gewichte | 0,30 + 0,30 + 0,20 + 0,20 = 1,0 |
| Gesamtnoten | P1 8,50 > P2 7,25 > P3 6,90 |
| Meta | Title 63, Description 162 |
| FAQs / quick | 9 FAQs; alle 7 H2 mit `quick` |
| Top 5 | „nach Lenkrad-Ökosystem und Einsatz“ – anderer Intent ✔ |
| Abgrenzung | Kombigeräte Shifter+Handbremse korrekt nur verwiesen; TH8A nur hier ✔ |
| Simagic DS-8X mit `where` | zulässig (kein amazon.de-Listing); Caseking = Awin 28817 `notjoined` → Bewerbung nur nach Nutzerfreigabe (offener Punkt im PR) |
| Fakten | belegt in `produkte.json`; widersprüchliche Herstellerangaben (TH8A Xbox, RS H-Shifter Adapter, MOZA Xbox) offen benannt ✔ |
| Technik 1440/390 px | 1 H1, JSON-LD ok, keine Fehler/404, kein horizontales Scrollen, `shifter` korrekt |

### ASIN-Gegenprüfung

| Produkt | ASIN | Ergebnis |
|---|---|---|
| Thrustmaster TH8A | B005L0Z2BQ | ✔ passt (4060059), aktiv (ca. 130 €) |
| **MOZA SGP Sequential Shifter** | B0CWL91SHH | ✘ **„Derzeit nicht verfügbar, unbekannt ob wieder lieferbar“** – aktives Zweitlisting **B0FN6RRMSB** (RS059, Verkauf MOZA RACING, ca. 159 €) |
| Logitech Driving Force Schalthebel | B00ZWOUH4S | ✔ passt, aktiv (viele Angebote ab ca. 31 €) |
| Logitech RS H-Shifter (Top 5) | B0GHP9117Z | ✔ aktiv |
| Fanatec ClubSport SQ V1.5 + USB-Adapter (Top 5) | B0H5XBBZFQ | ✔ aktiv (ca. 270 €) |
| **MOZA HGP Shifter (Top 5)** | B0C2PS6S85 | ✘ **„Derzeit nicht verfügbar“**, Titel verstümmelt („MOZA Sim Emulator HGP Rennen …“) – aktive Alternative **B0FM89ZZMC** („MOZA Racing HGP Shifter …“) |
| TH8S (Top 5) | B0BRQFQVJX | ✔ |

## Korrekturaufträge

- [hoch] Platz 2 `asin: "B0CWL91SHH"` – Listing nicht verfügbar (CLAUDE.md: aktive Listings bevorzugen). – Auf **B0FN6RRMSB** umstellen (Titel „Moza SGP Sequential Shifter“, RS059) und in `produkte.json` nachtragen; Con „Noch sehr wenige Bewertungen“ bleibt zutreffend (4 Bewertungen). – zuständig: produkt-rechercheur
- [mittel] Top 5 „MOZA HGP Shifter“ `asin: "B0C2PS6S85"` – nicht verfügbar. – Auf **B0FM89ZZMC** umstellen (Titel prüfen: „MOZA Racing HGP Shifter Video Game Controller for Simulation Scenarios“), Satz „Die Bewertungslage auf amazon.de ist gemischt …“ an das neue Listing anpassen bzw. streichen. – zuständig: produkt-rechercheur → redakteur
- [gering] Platz 3 Driving Force: Amazon-Listing nennt im englischen Titel nur G29/G920, der deutsche Titel auch G923; Logitech nennt G923 – Text ist korrekt, kein Handlungsbedarf außer Live-Blick. – zuständig: produkt-rechercheur
- [Info] Simagic DS-8X (Top 5, `where: caseking.de`): als offener Punkt „Caseking-Bewerbung (Awin 28817) nur nach Freigabe“ in den PR übernehmen. – zuständig: Orchestrator

## Runde 2 (2026-10-26)

### Ergebnis: **bestanden**

| Auftrag Runde 1 | Umsetzung |
|---|---|
| [hoch] MOZA SGP B0CWL91SHH nicht verfügbar | ✔ auf **B0FN6RRMSB** umgestellt – WebSearch amazon.de: „MOZA SGP Sequential Shifter PC, Sequential Gear Lever Metal Gaming“, Modell RS059, aktiv; Alt-Listing weiterhin „derzeit nicht verfügbar“. `produkte.json` nachgetragen |
| [mittel] MOZA HGP B0C2PS6S85 nicht verfügbar | ✔ auf **B0FM89ZZMC** umgestellt – „MOZA Racing HGP Shifter Video Game Controller for Simulation Scenarios“, Modell MOZA HGP, 7+R, 5,0★/8 Bewertungen; Satz zur „gemischten Bewertungslage“ ersetzt durch „bisher nur wenige Bewertungen“ – passt zum Listing |
| [Info] Simagic DS-8X / Caseking | bleibt offener PR-Punkt (Bewerbung nur nach Nutzerfreigabe) |

**Build/Technik:** fehlerfrei (4.417 Wörter); beide neuen ASINs im HTML verlinkt; 1 H1, JSON-LD parsebar; keine festen Preise.
