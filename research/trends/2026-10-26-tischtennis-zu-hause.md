# Trend-Scout 2026-10-26 – Spätherbst/Winter & Weihnachten: Tischtennis zu Hause

Themenfeld: Standard (Sport, Kinder, Familie, Outdoor, Freizeit), Saison Spätherbst/Winter 2026, beginnendes Weihnachtsgeschäft.
Ausgeschlossen: alle Slugs in `src/content/categories/`; offener PR #62 (Sim-Racing-Ausbau im `gaming-room`:
bestes-direct-drive-lenkrad, beste-sim-racing-pedale, bester-sim-racing-shifter, beste-sim-racing-handbremse,
bester-lenkradstaender) → laut Auftrag möglichst **nichts im Bereich `gaming-room`** (daher Triple-Monitor-Ständer und HOSAS
heute nicht gewählt). Frühere Scout-Läufe beachtet: `2026-10-21-darts-zu-hause.md`, `2026-10-22-bewegung-drinnen-kinder.md`,
`2026-10-23-flugsimulator-zu-hause.md`, `2026-10-25-sim-racing-ausbau.md` (letzterer nur im Branch `origin/claude/taeglich-2026-10-25`).
Dort verworfene Ideen werden nicht wiederholt.

Awin-Status (API 2026-10-26, `relationship=joined`): nur **Rewe DE (11652), Radwelt-shop (15088), brickzonehub (121692)**.
Keiner passt → **alle Ideen über Amazon (ASINs)**. amazon.de ist aus der Sandbox nicht direkt abrufbar; Listings wurden per
Websuche (Domain amazon.de) gefunden. Alle ASINs unten sind **Kandidaten, prüfen** – der Produkt-Rechercheur bestätigt Titel,
Packungsgröße/Variante, Verfügbarkeit und Verkäufer je Produkt.

## 1. Kurzfazit

Stärkste Idee ist ein neuer Bereich **„Tischtennis zu Hause“**: Tischtennis ist der klassische Winter-Kellersport für die
ganze Familie, die Nachfrage steigt messbar (DTTB laut Presseberichten 2025 über 542.000 Mitglieder, +2,8 %, drittes Plus in Folge;
Kinofilm „Marty Supreme“ mit Timo Boll seit 26.02.2026 in deutschen Kinos), und die bestehende Seite `/tischtennisplatten/`
(Outdoor) hat bisher keine Nachbarseiten für Roboter, Schläger-Sets, Bälle, Netze und Abdeckhüllen. Je Kategorie gibt es
mehrere seriöse Marken auf amazon.de (Butterfly, JOOLA, Donic-Schildkröt, Nittaku, Kettler, Cornilleau, Sponeta, GEWO),
während deutsche Vergleiche fast nur von Affiliate-/Preisportalen stammen und Roboter, Netzgarnituren und Abdeckhüllen kaum
redaktionell verglichen werden. **Empfehlung: heute 5 Kategorien als neuen Bereich `tischtennis` bauen** (Alternative:
in `private-sportanlagen`), mit `/tischtennisplatten/` als Hub-Nachbar – kein Konflikt mit PR #62.

## 2. Ideen-Tabelle

Punkte: N = Nachfrage-Trend · K = Konkurrenz (5 = kaum Vergleiche) · Q = Produktqualität/Auswahl · M = Monetarisierung · P = Passung

| # | Idee | Bereich | Kategorien (Slugs) | N | K | Q | M | P | Σ | Quelle | Beispielprodukte |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Tischtennis zu Hause** | **neu `tischtennis`** (oder bestehend `private-sportanlagen`), Hub `/tischtennisplatten/` | bester-tischtennis-roboter, bestes-tischtennis-set, beste-tischtennisbaelle, bestes-tischtennisnetz, beste-tischtennisplatten-abdeckhuelle; Reserven: beste-mini-tischtennisplatte, bester-tischtennisschlaeger-fortgeschrittene | 4 | 4 | 5 | 4 | 5 | **22** | Amazon | Butterfly, JOOLA, Donic-Schildkröt, Nittaku, Kettler, Cornilleau |
| 2 | Sim-Racing-Monitor / HOSAS (Reste) | bestehend `gaming-room` | bester-triple-monitor-staender, beste-hosas-weltraum-sim | 3 | 4 | 3 | 4 | 5 | **19** | Amazon | Next Level Racing, Playseat, Thrustmaster |
| 3 | Fußball-Solotraining für Kinder | bestehend `private-sportanlagen` oder `tennis-ballwand` (Solo-Training) | bester-fussball-rebounder, bester-fussball-kicktrainer, beste-fussball-torwand | 3 | 3 | 3 | 4 | 4 | **17** | Amazon | Quickplay, Stiga, SKLZ, Hudora |
| 4 | Winterdienst ums Haus | bestehend `garten-grundstueck` | bester-schneeschieber, bester-streuwagen | 4 | 2 | 4 | 3 | 3 | **16** | Amazon | Fiskars, Gardena, Wolf-Garten |
| 5 | Bouldern/Klettertraining zu Hause | neu oder `private-sportanlagen` | bestes-fingerboard, bestes-crashpad | 3 | 4 | 4 | 3 | 3 | **17** | Amazon (Marktplatz-Risiko) | Metolius, Beastmaker, Black Diamond |
| 6 | Winterspaß ohne Schlitten | `kinder-spielplatz/outdoor` | beste-kinderschlittschuhe-verstellbar | 4 | 3 | 3 | 4 | 3 | **17** | Amazon | K2, Roces |

## 3. Begründungen

**1 Tischtennis zu Hause.**
- *Nachfrage:* DTTB 2025 laut Bericht über 542.000 Mitglieder, +2,8 %, drittes Wachstumsjahr in Folge (Sekundärquelle,
  DTTB-Mitteilung selbst nicht gefunden – nur als Indiz verwenden:
  [heidelberg24/leinetal24](https://www.heidelberg24.de/produktempfehlung/dieser-schulhof-sport-koennte-bald-wieder-voll-im-trend-liegen-zr-94182713.html);
  Vergleichswert 2024 ≈ 512.000 laut [IAT-Factsheet DTTB 2024](https://sport-iat.de/fileadmin/user_upload/IAT-HUB/Wissen/Factsheet-Sportarten/Tischtennis/Factsheet_DTTB_2024.pdf)).
  Filmeffekt „Marty Supreme“ (Kinostart DE 26.02.2026, Timo Boll in einer Nebenrolle;
  [netzwelt](https://www.netzwelt.de/news/251555-marty-supreme-deutsche-spitzenathlet-oscar-favoriten-sehen.html),
  [SRF](https://www.srf.ch/kultur/film-serien/neu-im-kino-marty-supreme-vom-schuhverkaeufer-zum-pingpong-profi)); in New York
  meldet PingPod deutlich mehr Neuanmeldungen ([West Side Spirit](https://www.westsidespirit.com/news/marty-supreme-helps-ignite-table-tennis-boom-in-nyc-BI5695740)).
  Öffentliche Platten in Berlin oft belegt ([Berliner Zeitung](https://www.berliner-zeitung.de/article/rundlauf-ohne-rundreise-wie-man-in-berlin-immer-eine-freie-tischtennisplatte-findet-10032326)).
  Saison: Platten wandern im Winter in Keller/Garage (Abdeckhülle für Outdoor-Platten, Indoor-Spiel), Sets/Roboter als
  Weihnachtsgeschenk. Neue Roboter-Generation mit App (PONGBOT Nova S Pro, im [GameStar-Erfahrungsbericht](https://www.gamestar.de/artikel/um-meinen-besten-kumpel-endlich-im-tischtennis-zu-schlagen-trainiere-ich-jetzt-mit-einem-roboter,3455145.html)).
- *Konkurrenz:* Schläger/Sets und Bälle werden von Affiliate-/Preisportalen gelistet ([testsieger.de Schläger](https://www.testsieger.de/tischtennisschlaeger/),
  [testbericht.de](https://www.testbericht.de/tischtennisschlaeger/), [test-vergleiche.com](https://test-vergleiche.com/produkte/joola-tischtennisschlaeger-set/),
  [dadslife Bälle](https://dadslife.de/tischtennisball/), [testberichte.de Bälle](https://www.testberichte.de/sportartikel/tischtennisbaelle.html)) → K=3 für diese beiden.
  Netze nur bei [vergleich.org](https://www.vergleich.org/tischtennisnetz-ausziehbar), Abdeckhüllen bei [which.one](https://de.which.one/tischtennisplatten-abdeckung),
  Roboter: kein deutscher Vergleich gefunden, nur Forum ([tabletennisdaily](https://www.tabletennisdaily.com/forum/goto/post?id=498904)) und Einzelerfahrung (GameStar).
  Keine Stiftung-Warentest-/Öko-Test-Tests gefunden.
- *Qualität/Monetarisierung:* Viele aktive amazon.de-Listings mit großen Bewertungszahlen (z. B. Butterfly R40+ ≈ 840, JOOLA
  Training Advanced ≈ 2.000, JOOLA-Tischabdeckung ≈ 1.560 Bewertungen laut Suchsnapshots). Preisspanne 5 € (Bälle) bis 300–400 €
  (Roboter) → Warenkorb-Effekt (Set + Bälle + Netz + Hülle).
- *Risiken für die Redaktion:* Roboter-Rezensionen gemischt (JOOLA iPong: Qualitätsmängel laut Käufern; PONGBOT 3,8★ mit
  App-Problemen; Donic/Newgy Robo-Pong 1055/2050 nur 2,6–3,0★ → nicht in die Top 3). Abdeckhüllen sind teils markengebunden
  (Cornilleau Premium+ nur für Cornilleau/Tectonic-Rollaway, Sponeta-Hülle für Sponeta-Modelle) → Passform als Hauptkriterium,
  Top 3 ggf. mit Rollen-Labels („universell“, „für Cornilleau“, „flach für Spielfläche“). JOOLA-Abdeckungen laut Hersteller nur
  mit Outdoor-Platten draußen verwenden – Hinweis aufnehmen. Bälle: ITTF-Zulassung und Packungsgröße (Preis je Ball) erklären.

**2 Sim-Racing-Monitor / HOSAS.** Unverändert aus den Vorläufen tragfähig als Einzelseiten, aber im `gaming-room` – laut Auftrag
heute wegen PR #62 vermeiden. Später als Ergänzung (Triple-Monitor: NLR B07MSHGQRJ, B0BWXKWBXV, Playseat B08BLFSLHZ).

**3 Fußball-Solotraining.** Rebounder von Quickplay und Stiga (Kicker 150 mit > 1.300 Bewertungen laut
[topratgeber24](https://www.topratgeber24.de/ball-rebounder/stiga-rebounder-kicker-150-fussball)) sind seriös, aber
[dadslife](https://dadslife.de/rebounder/), testsieger.de und test-vergleiche.com vergleichen bereits; Saison (Winter) passt schlecht,
viel No-Name. Eher Frühjahrs-Lauf.

**4 Winterdienst ums Haus.** Stärkt `garten-grundstueck` (bisher nur 2 Seiten), aber Schneeschieber wurden mit VPA Remscheid
getestet ([selbst.de](https://www.selbst.de/schneeschieber-test-die-besten-schneeschaufeln-im-vergleich-1217.html)) und von
[testsieger.de](https://www.testsieger.de/schneeschieber/) gelistet → K=2; Streuwagen ohne klaren Vergleich, trägt aber keine
5 Seiten und liegt außerhalb des Themenfelds.

**5–6 Bouldern, Winterspaß ohne Schlitten.** Lage unverändert zu den Vorläufen (Marktplatz-/Verletzungsrisiko bzw. keine 5 Seiten).

## 4. Verworfen

- Alle Sim-Racing-Slugs aus PR #62 und weitere `gaming-room`-Themen heute – Konfliktvermeidung laut Auftrag.
- `beste-indoor-tischtennisplatte` – überschneidet sich mit der Top 5 von `/tischtennisplatten/` (Kettler K5 Indoor, JOOLA Inside 13);
  Indoor-Platten werden von testberichte.de, topratgeber24, test-vergleiche.com breit verglichen. Besser: bestehende Seite später um Indoor erweitern.
- `bestes-tischtennis-fangnetz` als eigene Seite – nur JOOLA (B0BMG91LLK) und Tibhar seriös, Rest No-Name (YIWENG); als Zubehör in der Roboter-Seite.
- Donic/Newgy Robo-Pong als Empfehlung – schwache Bewertungen auf amazon.de (2,6–3,0★), Robo-Pong 2055 nur über Suchseite.
- Tischtennis-Ballsammler (Röhre/Korb) – fast nur No-Name.
- Schneeschieber/Streuwagen – Konkurrenz (VPA-Test, testsieger.de), außerhalb des Themenfelds.
- Darts, Indoor-Bewegung Kinder, Flugsimulator, Schlitten, Kinder-Skihelm, Smart-Trainer, Eisbaden, Air-Track, Turnmatten,
  Softbausteine, Kletterbogen, Adventskalender, Bass-Shaker, Button-Boxen, Gaming-Lenkrad – wie in den Vorläufen.

## Auswahl für den Tageslauf

**Ziel-Bereich (Empfehlung):** neuer Bereich **`tischtennis`** – Name „Tischtennis zu Hause“, short „Tischtennis“, flache URLs
`/<slug>/`, `area: "tischtennis"`, keine Gruppe (Präzedenz: `darts`, `pickleball`). Intro-Vorschlag: „Tischtennis im Keller, in der
Garage oder im Garten: Schläger-Sets für die ganze Familie, Bälle für Training und Wettkampf, Netzgarnituren, Abdeckhüllen für den
Winter und Ballroboter fürs Solotraining – je Kategorie die drei besten Produkte.“ Im Bereichsartikel auf `/tischtennisplatten/`
verlinken (bleibt in `private-sportanlagen`). Intro von `private-sportanlagen` nennt bereits „Tischtennis“ → dort einen Link auf den
neuen Bereich ergänzen. *Alternative ohne neuen Bereich:* alle 5 in `private-sportanlagen`.

Interne Links (alle Seiten): `/tischtennisplatten/` (Hub), gegenseitig untereinander; zusätzlich Roboter ↔ `/ballmaschinen/` und
`/padel-ballmaschinen/` (Solo-Training-Logik), Set ↔ `/beste-pickleball-schlaeger/` (Familien-Rückschlagspiele),
Abdeckhülle ↔ `/tischtennisplatten/` (Outdoor-Platten überwintern), Bereich ↔ `/shuffleboard-shufflepuck/`, `/kickertische/`,
`/airhockey-tische/` (Hobbyraum). ASINs = **Kandidaten, prüfen**.

### Bauen (5)

1. **`bester-tischtennis-roboter`** – Bereich `tischtennis`. Zielgruppe: Vereins- und ambitionierte Hobbyspieler, Eltern
   trainierender Kinder; Intent „allein Tischtennis trainieren“, „Tischtennis-Roboter kaufen“. Kriterien: Spinarten
   (Topspin/Unterschnitt/Seitenschnitt), Ballfrequenz, Programme/App, Rückführung (Fangnetz), Lautstärke, Service.
   - Butterfly Amicus Start (3 Räder, Fangnetz + Tasche) – B0CFL8M9PT (zweites Listing B07L4RMZVS; ein Listing „derzeit nicht verfügbar“, aktives wählen)
   - Butterfly Amicus Expert/Prime (Premium) – B07DW8CX4C (Listing-Titel „AEXPERT“, nur 8 Bewertungen – Modell prüfen)
   - JOOLA iPong V300 (Einstieg, Fernbedienung) – B08T845HCB
   - JOOLA Buddy V200 – B08RKLPTCX; Buddy Pro V300 im Bundle mit 120 Bällen – B098BJ1Q7X
   - PONGBOT Nova S Pro (App, 264 Drills, ≈ 300 €) – B0CTXY6NVQ (3,8★, App-Probleme laut Käufern); Version mit Netz – B0CVWQW2DX
   - Zubehör: JOOLA Fangnetz für Roboter (21128) – B0BMG91LLK (mit 120 Bällen: B0BK99JY4Z)

2. **`bestes-tischtennis-set`** – Bereich `tischtennis`. Zielgruppe: Familien, Hobbyspieler, Geschenkkäufer; Intent
   „Tischtennisschläger-Set für Familie/Anfänger“. Kriterien: Schwammstärke/Belag (ITTF-Zulassung), Griff, Anzahl Schläger + Bälle,
   Hülle/Tasche, Eignung für Kinder.
   - JOOLA Family Advanced (4 Schläger + 6 Bälle 3★ + Tasche) – B0BLTRFHMS
   - Donic-Schildkröt Hobby 4-Player-Set (4 Schläger, 5 Bälle, Tasche) – B07DPSXKWV
   - Butterfly Timo Boll Set 85106 (2 Schläger, 6 Bälle) – B00K7NYXVM
   - Butterfly Timo Boll Bronze 2er-Set mit Hüllen + 3★-Bällen (ambitioniert) – B08Y91GMZM
   - JOOLA Neon-Set (4 Schläger, 8 Bälle) – B0F9L29PYB; JOOLA Team School – B0HCV49VS2 (älteres Listing B0824TTR8J)
   - Donic-Schildkröt Champs Line 400 (2 Schläger, FSC-Holz) – B089YV2YXB; JOOLA Duo – B0824VBJHD

3. **`beste-tischtennisbaelle`** – Bereich `tischtennis`. Zielgruppe: alle Spieler, Roboter-Nutzer (Trainingsbälle in Mengen);
   Intent „welche Tischtennisbälle“, „3-Stern-Bälle 40+“. Kriterien: ITTF-Zulassung, Rundlauf/Haltbarkeit, nahtlos vs. Naht,
   Preis je Ball, Eignung für Roboter/Outdoor. Top 3 ggf. nach Rolle (Wettkampf / Training / Familie & Outdoor).
   - Nittaku Premium 40+ 3★ (Made in Japan) – B0895LNJXR (6er), B012WAQVYE (12er), B01N0KPYBQ
   - Butterfly R40+ 3★ (ITTF, 3er) – B08632FN6J
   - JOOLA Tournament 40+ 3★ selektiert (12er) – B0DVH2MS58 (weiteres Listing B0FBMK1W84)
   - JOOLA Training Advanced 40+ (Trainingsmenge) – B0D6NGMKKR; JOOLA 3-Star PRO 12er – B0DVGHB54Y
   - Donic P40+ 3★ (12er) – B0747R5GHG; Donic-Schildkröt Exclusive 3★ Poly 40+ – B0CW9TLH18 (ITTF-Status prüfen)
   - GEWO Select PRO 40+ (ITTF) – ASIN nicht ermittelt → `query`

4. **`bestes-tischtennisnetz`** – Bereich `tischtennis`. Zielgruppe: Besitzer von Platten mit defektem/verlorenem Netz,
   Outdoor-Platten, Esstisch-Spieler (ausziehbar); Intent „Tischtennisnetz Garnitur“, „Tischtennisnetz ausziehbar“, „wetterfest“.
   Kriterien: Befestigung (Schraub-/Klemm-), max. Plattenstärke, Höhen-/Spannungseinstellung, Wetterfestigkeit, Norm EN 14468.
   - JOOLA WX Aluminium-Garnitur (indoor/outdoor) – B088KNR7JF
   - JOOLA Outdoor-Netzgarnitur wetterfest (31007) – B0CQYYGR2Y
   - Donic-Schildkröt Netzgarnitur Friend (wetterfest, bis 5 cm) – B000JKZGPA
   - JOOLA Easy Indoor (31008, Spannung einstellbar) – B09DBHWYB8; JOOLA Avanti – B002HWPJ3C
   - Ausziehbar (für Esstisch/Mini-Platte): GEWO FleXX – `query`; Relaxdays bis 176 cm – B07QD4S9N4; Best Sporting Flexi – B07PNMVF5L (Budget, Markenqualität prüfen)
   - Ersatznetz ohne Pfosten nur als Hinweis: Kettler B000FYXZNK, Cornilleau Hobby Primo B000WTO55K

5. **`beste-tischtennisplatten-abdeckhuelle`** – Bereich `tischtennis`. Zielgruppe: Besitzer von Outdoor-Platten (Verlinkung
   von `/tischtennisplatten/`), saisonal jetzt (Überwinterung); Intent „Abdeckhülle Tischtennisplatte“, „Schutzhülle wetterfest“.
   Kriterien: Passform (geklappt/flach, Herstellerbindung), Material/UV-Beständigkeit, Verschluss, Belüftung, Garantie.
   - Kettler Premium-Abdeckhaube (grau, universell) – B0014D6RAO
   - Cornilleau Premium+ Schutzhülle (für Cornilleau/Tectonic-Rollaway) – B0CL6FZGYH
   - JOOLA 19900 Abdeckhülle (150 × 160 × 50–80 cm, geklappt) – B006LYGWWE (gemischte Rezensionen zu UV-/Wasserfestigkeit)
   - JOOLA Tischabdeckung flach 274 × 137 cm (Spielfläche) – B0B936BWVH (3,6★ bei ≈ 1.560 Bewertungen)
   - Sponeta Abdeckhülle Design (DL) – B0D4J5WTSM (Listing unter „Generisch“ – Verkäufer/Originalität prüfen)
   - Donic-Schildkröt Tischhülle PE – `query`

### Reserven (2)

6. **`beste-mini-tischtennisplatte`** – Bereich `tischtennis`. Kinder, kleine Wohnungen, Weihnachtsgeschenk; Midi-/Mini-Platten.
   - JOOLA Mini (90 × 45 cm, klappbar) – B0D5XS6KZZ; JOOLA Mini pink – B072BXDTH1
   - JOOLA Midsize (168 × 84 cm) inkl. Family-Set – B0D6LBR1H7; JOOLA Midsize FA-X (Koffer-Design) – B0C1C78S6Z; JOOLA Freizeittisch 22 kg – B0BZQ25YCD
   - Donic-Schildkröt Midi – `query`; Juskys Flexi Mini – B0D72ZH6JL (Budget)
   - Risiko: stark JOOLA-lastig → Top 3 nach Größe mit Rollen-Labels.

7. **`bester-tischtennisschlaeger-fortgeschrittene`** – Bereich `tischtennis`. Einzelschläger für Vereinseinsteiger/ambitionierte Hobbyspieler.
   - Butterfly Timo Boll Vision 3000 – B0CL7NJGSG; Timo Boll Platinum – B0CLB92C2B; Timo Boll Black – B0BJW59DYD
   - JOOLA Rosskopf/Mega Carbon – `query`; Donic Waldner 3000 – `query`
   - Risiko: Konkurrenz durch testsieger.de/testbericht.de; Profi-Spieler kaufen Holz + Beläge einzeln im Fachhandel.
