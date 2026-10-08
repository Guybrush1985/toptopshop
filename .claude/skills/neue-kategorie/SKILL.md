---
name: neue-kategorie
description: Neue Kategorie oder neuen Bereich auf toptop.shop anlegen – Recherche, Top 3/Top 5 mit Amazon-ASINs oder Awin-Händlern, Content nach Briefing, Build, Prüfung, PR. Verwenden, wenn der Nutzer eine neue Kategorie, Produktgruppe oder einen neuen Bereich auf toptop.shop möchte (z. B. „lege eine Kategorie Luftreiniger an“).
---

# Neue Kategorie auf toptop.shop anlegen

Grundlage: `docs/BRIEFING.md` (Positionierung, Seitenaufbau, Qualität, Monetarisierung, Design, Recht)
und `src/content/README.md` (Content-Modell). Beides zuerst lesen.

## 1. Zuschnitt klären

- Passt die Kategorie in einen bestehenden Bereich (`areas` in `src/site.mjs`) oder braucht es einen neuen?
  Neuer Bereich: Eintrag mit `slug`, `name`, `short`, `intro`, `metaTitle`, `metaDescription`, `article`.
- URL-Slug nach Suchintent: `beste-…` / `bestes-…-fuer-…`. Bereiche mit Unterbereichen (`areas[].groups`) nutzen `group` und verschachtelte URLs (`/bereich/gruppe/slug/`). Unterteilungen (z. B. nach Personenzahl,
  Größe, Budget) als eigene Kategorien anlegen, wenn sie eigene Suchanfragen haben.
- Nur nachfragen, wenn der Zuschnitt wirklich unklar ist.

## 2. Recherche (WebSearch)

- Unabhängige Tests zuerst: Stiftung Warentest, Öko-Test, ADAC, Fachmagazine. Datum/Heft notieren.
- Rückrufe, Verkaufsstopps, Sicherheitswarnungen prüfen – betroffene Produkte nicht empfehlen.
- Rechtslage/Sicherheitsregeln bei sensiblen Themen (Gesundheit, Kinder, Verkehr).
- Je Produkt nur belegbare Fakten sammeln (Herstellerangaben kennzeichnen). Widersprüche nennen statt glätten.

## 3. Bezugsquelle je Produkt

Nur **Amazon** oder **Awin-Händler** (siehe `CLAUDE.md`). **Feste Reihenfolge je Produkt:**

1. **Amazon zuerst prüfen.** Eindeutige, aktive ASIN gefunden → Amazon-Link, auch wenn es Awin-Angebote gibt.
2. **Sonst Awin-Händler mit bestehender Freischaltung** (`joined` laut Awin-API bzw. schon in
   `site.awin.merchants` genutzt).
3. **Sonst nicht eigenmächtig neue Händler einbauen:** entweder ein gleichwertiges Produkt aus 1./2. wählen
   (transparent begründen) oder dem Nutzer den neuen Awin-Händler mit Bewerbungstext vorschlagen und fragen.

- **Amazon:** exakte amazon.de-ASIN suchen (WebSearch mit `allowed_domains: ["amazon.de"]`), nur eindeutige,
  aktive Listings. Kein Treffer → `query` mit exaktem Namen und dem Nutzer melden.
- **Awin:** Produktseite beim Händler suchen (WebSearch mit den Händler-Domains), `shop` + `url` eintragen.
  Neue Händler: Awin-Programm und `mid` prüfen, in `site.awin.merchants` ergänzen.
- **Awin-Status prüfen**, wenn `api.awin.com` erreichbar ist (Token wird vom Proxy als Bearer gesetzt):
  `curl -sS "https://api.awin.com/publishers/3117711/programmes?relationship=joined"` (analog `pending`,
  `notjoined`). Händler ohne Freischaltung dem Nutzer melden und je einen Bewerbungstext vorschlagen
  (Website, Zielgruppe, Kategorie, Einbindung). Nie selbst Bewerbungen abschicken.
- Produktnamen an die Bezeichnung beim Händler/Amazon anpassen.

## 4. Auswahl & Bewertung

- Top 3 mit Rollen (Gesamtwahl / Preis-Leistung / Premium oder passende Spezialrolle).
- 4 Kriterien mit Gewichten (Summe 1), Bewertungen 0–10; Platz 1 muss die höchste Gesamtnote haben.
- Top 5 mit **anderem Suchintent** als die Top 3; Produkte dürfen aus anderen Kategorien stammen.
- Preisklassen statt Preise; bei teuren Produkten eigene `priceTiers` mit Euro-Spannen.

## 5. Content schreiben

Datei `src/content/categories/<slug>.mjs` nach Content-Modell (bestehende Kategorie als Vorlage kopieren).

- „Kurz gesagt“ (`answer`) nennt alle drei Produkte als `[**Name**](produkt:1)` usw.
- Jede H2 beginnt mit einem `quick`-Block (direkte Antwort), dann Erklärung.
- Zwei Figuren: `scores` (automatisch) und `steps` (Anleitung/Checkliste), beide im Text eingebunden.
- Mind. 5 FAQs aus echten Suchfragen, Quellenliste, kontextuelle `related`-Links.
- Kein Duplicate Content zwischen ähnlichen Kategorien – eigene Schwerpunkte setzen.
- Optional: `riders` (Personen-Piktogramm), `visual.kind` passend wählen
  (`foam`, `drops`, `oilspray`, `lotion`, `gel`, `longtail`, `box`, `trike`, `device`, `station`, `panel`, `canister`, `mask`, `radio`, `handheld`, `pack`, `roll`, `lamp`, `stove`, `cylinder`) – neue Produktarten bei Bedarf
  in `src/templates/visuals.mjs` ergänzen.

## 6. Bauen & prüfen

```sh
node build.mjs                                  # muss ohne Fehler durchlaufen
ln -sfn <playwright node_modules> node_modules  # nur lokal für Vorschaubilder
CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/og-images.mjs
```

- Seiten im Headless-Chromium bei 1440 px und 390 px ansehen: keine Konsolenfehler, keine 404,
  kein horizontales Scrollen, Bilder/Icons korrekt.
- JSON-LD parsebar, genau eine H1, keine Sprünge in der Überschriften-Hierarchie.
- Neue Netzwerke/Tracking → Datenschutz und Impressum anpassen.

## 7. Abschluss

- Commit auf den Arbeitsbranch, PR gegen `main` mit Tabelle der Top 3 und offenen Punkten.
- Mergen nur, wenn der Nutzer es für diese Änderung freigegeben hat; danach Deploy-Now-Lauf prüfen.
- Dem Nutzer berichten: Auswahl, fehlende ASINs, nicht freigeschaltete Awin-Programme (mit Bewerbungstext),
  Abweichungen vom Briefing mit Begründung, Quellen.
- Neue Grundsatzentscheidungen in `docs/BRIEFING.md` → „Entscheidungen & Erfahrungen“ nachtragen.
