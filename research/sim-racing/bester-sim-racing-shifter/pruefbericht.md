# Prüfbericht: /bester-sim-racing-shifter/

Prüfer, 2026-10-25. Geprüft: `src/content/categories/bester-sim-racing-shifter.mjs`, `produkte.json`, `bilder.json`, Build, `dist/`.

## Ergebnis: **Korrektur nötig** (1 × mittel, 1 × niedrig; Widersprüche direkt behoben)

## Prüfliste
- **Fakten:** Aussagen belegt (Thrustmaster-Produktseiten, Handbuch, Support KB 1735/1801; Logitech Driving Force Shifter/Racing Adapter; B&H/bsimracing zum RS H-Shifter; MOZA- und Fanatec-Support; GTPlanet, Sim Racing Garage, OC Sim Racing, PCG Garage als „laut Berichten“). TH8S ohne sequenziellen Modus korrekt (Hersteller), Struktur-Fehler sauber korrigiert.
- **ASINs (WebSearch amazon.de):**
  - B005L0Z2BQ: „ThrustMaster 4060059 – TH8A Gear Shifter“, ~8.000 Bewertungen, Titel teils mit altem Plattform-Mix – ok.
  - B0BRQFQVJX: TH8S laut Recherche „Thrustmaster TH8S Shifter Add-On – 8-Gang-Schaltung – PS5, XBOX & PC“ (nicht erneut geprüft).
  - B00ZWOUH4S: „Logitech Driving Force Schalthebel … 941-000130“, ~38.400 Bewertungen – ok.
  - Top 5: B0GHP9117Z „Logitech G RS H-SHIFTER“ (7+R, Hall, PRO/RS50, Racing Adapter für G-Serie) – ok; B0DD3LN886 „Logitech G RS Shifter and Handbrake“ – ok; B0FN6RRMSB (MOZA SGP RS059) im Suchergebnis aktiv; B0H5XBBZFQ „FANATEC ClubSport Shifter SQ V1.5 with USB Adapter“ existiert (laut Recherche zeitweise nicht verfügbar – im Text offen benannt); **B0C2PS6S85 (MOZA HGP): Drittanbieter Mokarzone-de, 3,6★/18, Rezensionen melden gebrauchte Ware, Hinweis „kann nicht an den gewählten Lieferort versendet werden“** → M1.
- **Bezugsquellen:** nur Amazon – ok.
- **Regeln:** keine Preise/Amazon-Bilder/AggregateRating; Gewichte = 1; Noten 8,30 / 7,85 / 6,50 (absteigend); Top 5 eigener Intent (Bauform/Ökosystem); 8 FAQs; `quick` je H2; Meta 52/165 (an der Obergrenze, ok); Rückrufe recherchiert; Gesundheit zurückhaltend.
- **Qualität:** Anschluss-Tabelle je Plattform ist die zentrale Entscheidungshilfe. Kein Duplicate Content außer Kriterien-/Bildunterschrift-Floskeln.
- **Technik:** Build grün; 1440/390 px: 1 × H1, JSON-LD ok, keine Konsolenfehler/404, kein horizontales Scrollen; Symbolbild `shifter` korrekt.

## Direkt korrigiert (Prüfer)
- Top 5 Nr. 5 Logitech RS Shifter & Handbrake: „… auch am G923 nutzbar“ widersprach der Handbremsen-Seite (an G29/G920/G923 auf der Konsole nur per Racing Adapter, dann ohne Handbremsen-/Sequenzfunktion, Logitech-Support). Satz ergänzt.
- TH8S: „Gehäuse überwiegend aus Kunststoff“ stammt nur aus OC Sim Racing – in Verdict und Redaktionstext als „laut OC Sim Racing“ gekennzeichnet.

## Korrekturaufträge
- [mittel] Top 5 Nr. 1 „MOZA HGP Shifter“ (B0C2PS6S85) – Angebot nur über Drittanbieter mit Lieferhinweis und Gebrauchtware-Beschwerden (3,6★). Alternativlisting B0FM89ZZMC (5,0★/8) live prüfen und, wenn aktiv mit Neuware, tauschen – **produkt-rechercheur**
- [niedrig] Top 5 Nr. 3 Fanatec ClubSport Shifter SQ V1.5 (B0H5XBBZFQ) – Verfügbarkeit vor Merge live prüfen – **Orchestrator** (PR-Hinweis)

## Korrekturrunde 1 (produkt-rechercheur, 2026-10-25)
- **M1 MOZA HGP:** ASIN B0C2PS6S85 → **B0FM89ZZMC** getauscht (Titel „MOZA Racing HGP Shifter …“, Hersteller Gudsen = MOZA-Herstellerfirma; gleiche ASIN auf amazon.com als „MOZA Racing HGP Shifter“, Aluminium, 1,8 kg – passt eindeutig). Lagerstatus aus der Sandbox nicht live abrufbar (amazon.de per Fetch gesperrt) → vor Merge im Browser prüfen. Text unverändert, keine Verfügbarkeitsaussage.
- `produkte.json`: `asin`, `asinGeprueft`, offener Punkt und Quellen-URL nachgezogen.
