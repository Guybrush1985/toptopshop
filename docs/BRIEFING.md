# toptop.shop – Briefing & Grundsatzentscheidungen

Dieses Dokument ist die verbindliche Grundlage für alle Arbeiten an toptop.shop. Es fasst das Website-Briefing
und alle seither getroffenen Entscheidungen zusammen. Bei Widersprüchen gilt die jüngste Entscheidung
in Abschnitt „Entscheidungen & Erfahrungen“.

Betreiber: TanMeOn GmbH (Jan Rosenbrock), Domain: https://toptop.shop, Hosting: IONOS Deploy Now.

---

## 1. Positionierung

**„The shortcut to the best products.“ – Die Abkürzung zu den besten Produkten.**

toptop.shop ist eine kuratierte Empfehlungsplattform, kein klassischer Shop. **In jeder Kategorie werden die
Top 3 Produkte präsentiert:** beste Gesamtwahl, bestes Preis-Leistungs-Verhältnis, Premium-Wahl (Rollen dürfen
je Kategorie sinnvoll angepasst werden, z. B. „Beste Wahl für empfindliche Haut“, „Beste Wahl als Dreirad“).

Der Nutzer soll in Sekunden verstehen: *Was sind die besten Produkte – und welches passt zu mir?*

- Design vermittelt: Premium · Vertrauen · Klarheit · Technologie
- Content vermittelt: Expertise · Tiefe · Aktualität · Suchrelevanz
- Technik vermittelt: Geschwindigkeit · Skalierbarkeit · Struktur

## 2. Zwei Ebenen jeder Seite

1. **User Experience (oben):** „Zeig mir die besten drei Produkte.“ – schnell, visuell, hochwertig.
   Apple × Premium Editorial × modernes Digital Product. Kein Standard-Affiliate-Look, kein WordPress-Look.
2. **Search Experience (unten):** „Gib mir alles für eine fundierte Entscheidung.“ – ausführlich, strukturiert,
   semantisch. Gestaltet als hochwertiges Magazin, nicht als SEO-Textwand. Es soll sich anfühlen wie
   „Jetzt bekomme ich die ausführliche Beratung dazu“, nicht wie „Jetzt kommt der SEO-Teil“.

## 3. Informationsarchitektur

Home → Bereiche (z. B. Bräunung, Lastenräder, später Elektronik, Haushalt, Garten, Familie, Sport, Reisen …)
→ Kategorie-Landingpages mit flacher URL (`/beste-staubsauger/`, `/bestes-lastenrad-fuer-2-kinder/`).

Jede neue Kategorie entsteht aus dem standardisierten Content-Modell (`src/content/README.md`) –
**keine Kategorie wird individuell programmiert.**

## 4. Aufbau einer Kategorie-Seite (verbindlich)

```
HERO          H1 („Die 3 besten X 2026“), kurze Einordnung, Aktualisierungsdatum,
              „Kurz gesagt“: direkte Antwort mit den 3 Produkten (verlinkt)
TOP 3         Editorial Ranking (01 — BESTE GESAMTWAHL …): Bild, Begründung, Bewertung,
              Eigenschaften, Preisklasse, Vor-/Nachteile, CTA
VERGLEICH     Tabelle inkl. „Jetzt kaufen“-Zeile
REDAKTION     „Welche X sind die besten?“ (answer-first), Bewertungsgrafik mit Kauf-Buttons
KAUFKRITERIEN „Worauf sollte man beim Kauf achten?“
ZIELGRUPPEN   „Welches X passt zu wem?“
TOP 5         anderer Suchintent als die Top 3 (z. B. „für das Gesicht“, „nach Bauform“)
KAUFBERATUNG  Anleitung / Sicherheit / Praxis, zweite Infografik
FAQ           mind. 5 echte Suchfragen, Antwort beginnt mit der direkten Antwort
METHODIK      Kriterien mit Gewichtung, Quellen
VERWANDTES    kontextbezogene interne Links (keine Linkfarm)
```

Mindestumfang je Kategorie: **≥ 1.000 Wörter** (nicht künstlich auffüllen), **≥ 3 Hauptabschnitte**,
**≥ 3 Zwischenüberschriften**, **2 Bilder**, **≥ 5 FAQs**, **1 Top-5-Liste**. Der Build prüft das.

## 5. SEO, GEO & Technik

- Optimiert für Google, AI Overviews, ChatGPT, Gemini, Perplexity, Claude, Copilot: klare, zitierfähige
  Antworten direkt unter jeder Frage-Überschrift, keine langen Einleitungen.
- Semantisches Content-Netz je Bereich (Topical Authority), kontextuelle interne Verlinkung.
- Technisch: saubere URLs, eine H1, korrekte Hierarchie, Meta Title (≤ 65 Zeichen) & Description (≤ 165),
  Canonical, XML-Sitemap, robots.txt, Open Graph (eigene Vorschaubilder), Breadcrumbs, strukturierte Daten
  (`Article`, `ItemList` mit `Product`/`Review`, `FAQPage`, `BreadcrumbList`, `Organization`, `WebSite`).
- Strukturierte Daten nur mit wahren Inhalten – **keine erfundenen `AggregateRating`s**.
- Bilder: sprechende Dateinamen, Alt-Text, Bildunterschrift, Lazy Loading, feste Maße.
- Performance > Animation > Features: vorgerenderte Seiten, kein JavaScript, Critical CSS, selbst gehostete
  Schriften, keine Third-Party-Skripte.
- Sichtbares „Zuletzt aktualisiert“; Rankings und Redaktion sind getrennt aktualisierbar.

## 6. Content-Qualität

- Kein generischer KI-SEO-Content. Jede Seite muss die Entscheidung tatsächlich erleichtern: konkrete
  Vergleiche, nachvollziehbare Kriterien, Vor-/Nachteile, Zielgruppen, Szenarien, Alternativen, klare Empfehlung.
- **Nur belegbare Aussagen.** Herstellerangaben als solche kennzeichnen; Testergebnisse nur mit Institut und
  Ausgabe (Stiftung Warentest, Öko-Test, ADAC …). Keine eigenen Labortests behaupten.
- Bewertungen sind redaktionelle Einschätzungen: 4 gewichtete Kriterien (Summe 1), Skala 0–10,
  Platz 1 hat die höchste Gesamtnote.
- Gesundheits- und Sicherheitsthemen zurückhaltend formulieren, auf Fachleute verweisen, Rechtslage nennen.
- Produkte mit Rückrufen/Verkaufsstopps nicht empfehlen und darauf hinweisen (Beispiel: Babboe).

## 7. Monetarisierung

- **Bezugsquellen: ausschließlich Amazon (Partner-Tag `toptopshop-21`) oder Händler im Awin-Netzwerk
  (Publisher-ID `3117711`).**
- **Priorität (Nutzer-Anweisung):** 1. Amazon, wann immer das Produkt dort eindeutig erhältlich ist –
  2. sonst Awin-Händler, bei denen bereits eine Freischaltung besteht – 3. neue Awin-Händler nur nach
  Rückfrage beim Nutzer (mit Bewerbungstext) oder ein gleichwertiges Produkt aus 1./2. wählen.
- Für jedes Amazon-Produkt die exakte amazon.de-ASIN recherchieren (Regeln in `CLAUDE.md`).
- Awin-Händler stehen in `src/site.mjs`; neue Händler nur mit aktivem Awin-Programm.
- Affiliate-Links überall dort, wo Produkte genannt werden: Produktkarte, „Kurz gesagt“,
  Vergleichstabelle („Jetzt kaufen“), unter der Bewertungsgrafik, Top 5, Fließtext (`produkt:N`).
- Kennzeichnung: `*` + `rel="sponsored nofollow"`, Werbehinweis oben und im Footer.
- **Keine festen Preise** (Amazon-Richtlinien) – Preisklassen sind erlaubt; keine Amazon-Produktbilder.

## 8. Design

- Farben: `#253D2C` (Waldgrün, Hero/Footer), `#2E6F40` (Grün, CTAs/Links), `#68BA7F` (Blattgrün, Akzente),
  `#CFFFDC` (Mint). Hintergrund `#F6FBF7`, Text `#17251B`.
- Schriften: Fraunces (Überschriften), Inter (Text) – selbst gehostet.
- Logo: `src/static/logo.svg` (Original). Auf dunklen Flächen: Mint-Marke mit dunklem T, heller Schriftzug.
- Produktbilder: bis echte Fotos vorliegen, gekennzeichnete Symbolbilder (Flaschen, Tuben, Fahrräder).
- Kategorien mit „Wer fährt mit?“-Logik (z. B. Lastenräder) zeigen ein Personen-Piktogramm (`riders`).

## 9. Recht

- Impressum (DDG, MStV) und Datenschutz liegen in `src/content/legal/`. Neue Partnernetzwerke, Tracking oder
  externe Einbindungen erfordern eine Anpassung der Datenschutzerklärung **vor** dem Livegang.
- Keine externen Ressourcen laden (Schriften, Bilder, Skripte von Dritten), da die Datenschutzerklärung das
  zusichert – Bilder immer selbst hosten.

## 10. Entscheidungen & Erfahrungen (laufend ergänzen)

- 2026-10-07: Tech-Stack: eigener Static-Site-Generator (`build.mjs`), Deploy über IONOS Deploy Now (`dist/`).
- 2026-10-07: Bereich Bräunung: Selbstbräuner, Bräunungsöle mit LSF, After-Sun. Durchbräunende Bademode und
  Gesichtsbräuner zurückgestellt – keine belastbaren Produkte bei Amazon/Awin.
- 2026-10-07: Bereich Lastenräder: 1/2/3 Kinder. Amazon führt keine echten Kinder-Lastenräder → Awin-Händler
  RADWELT-Shop (15088), Fahrradlagerverkauf (39644, aus Tracking-Link abgeleitet – im Awin-Verzeichnis prüfen),
  fahrrad24 (13691). Fahrrad XXL, fahrrad.de, bike24 sind nicht auf Awin.
- 2026-10-07: Kinderhelme nicht als Top 5 genutzt – im Stiftung-Warentest-Test 04/2026 kein Helm „gut“.
- 2026-10-07: Freie Fotos der konkreten Modelle gibt es nicht; geplant sind Bilder aus dem Awin-Produktfeed
  (Programmbedingungen prüfen), selbst gehostet.
- 2026-10-07: Bezugsquellen-Priorität festgelegt: Amazon vor bestehenden Awin-Händlern vor neuen Awin-Händlern
  (neue nur nach Rückfrage).
- 2026-10-07: Awin-API-Token als Network Secret für `api.awin.com` hinterlegt (nur lesend nutzen).
  Vor neuen Awin-Produkten Freischaltungsstatus prüfen; Programme ohne Freischaltung dem Nutzer melden
  und Bewerbungstext vorschlagen. Bewerbungen schickt der Nutzer selbst ab.
- 2026-10-07: Bereich Krisenvorsorge mit 6 Unterbereichen und 23 Kategorien. Auf Wunsch des Nutzers erstmals
  verschachtelte URLs: `/krisenvorsorge/<unterbereich>/<kategorie>/` (Feld `group` in der Kategorie, Unterbereiche
  unter `areas[].groups` in `src/site.mjs`, eigene Unterbereichsseiten). Flache URLs der übrigen Bereiche bleiben.
- 2026-10-07: Awin-API meldet keine aktive Freischaltung (alle 4 Programme `pending`), daher Krisenvorsorge
  vollständig über Amazon. Passende Awin-Programme (nicht beworben): EcoFlow 51793, Anker Solix 32623,
  Anker 30691, BLUETTI 32267, Jackery 30415, Levoit 112902, NordVPN 9399, Bergfreunde 14102, Conrad 11354.
- 2026-10-07: Kategorien mit gemischten Produktarten (z. B. Wärme/Kochen/CO-Melder, Erste Hilfe/Brandschutz)
  zeigen in den Top 3 je Aufgabe ein Produkt mit Rollen-Label statt drei gleichartiger Produkte.
- 2026-10-07: Schutzraum-Anbieter sind weder bei Amazon noch bei Awin – Top 5 als neutrale Anbieterübersicht
  (Feld `where`, kein Link, keine Provision); Top 3 sind Ausrüstung für jeden Schutzraum.
- 2026-10-07: test.de, bbk.bund.de und Herstellerseiten sind aus der Arbeitsumgebung nicht abrufbar; Testergebnisse
  stammen teils aus Sekundärquellen und sind im Text als „laut Berichten“ gekennzeichnet.
- 2026-10-08: Vier neue Bereiche mit 43 Kategorien: Tennis-Ballwand (6), Home-Office (10), Private Sportanlagen
  (11, vor allem Premium mit 1–2 günstigen Einstiegsvarianten je Seite) und Gaming-Room (16). URLs flach (`/slug/`).
- 2026-10-08: Nutzer hat für diese Bereiche keine Awin-Freischaltung → ausschließlich Amazon-ASINs. Produkte,
  die es nur beim Hersteller oder Fachhandel gibt (Sportkunstrasen, Court-Systeme, Padel-Courts, echte Flipper),
  stehen in der Top 5 mit `where` ohne Link. Passende Awin-Programme hat der Nutzer zur Bewerbung erhalten.
- 2026-10-08: Retro-/Arcade-Geräte nur mit offiziell lizenzierten Spielen (Arcade1Up, AtGames, Evercade, Atari);
  keine Geräte mit vorinstallierten ROM-Sammlungen.
- 2026-10-08: Footer listet Bereiche statt aller Kategorien; Startseite zeigt je Bereich zwei Ratgeber. Mobile
  Hauptnavigation ist eine einzeilige, scrollbare Leiste (aktiver Bereich wird per Mini-Skript sichtbar gescrollt).
- 2026-10-08: Agententeam für den Ausbau: Orchestrator (Skill `/kategorie-pipeline`) steuert Trend-Scout, Strukturierer,
  Produkt-Rechercheur, Illustrator, Redakteur und Prüfer (`.claude/agents/`). Der Nutzer spricht nur mit dem
  Orchestrator; Freigaben bei Nischenauswahl, neuen Awin-Händlern und Merge. Nischen gern aus Sport/Kinder/Familie,
  **keine Preisschwelle, aber Fokus auf Produktqualität**. Ergebnis bleibt im heutigen Seitenformat (Symbolbilder,
  `scores`/`steps`). Recherche-Dateien werden in `research/` als Quellenarchiv mit eingecheckt.
