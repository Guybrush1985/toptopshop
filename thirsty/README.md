# Thirsty – Vorschau unter toptop.shop/thirsty/

Restaurants schreiben Early-Bird-Plätze für die erste Stunde nach Öffnung aus (z. B. 8 Plätze, 50 % auf die Karte und
ein Getränk aufs Haus). Gäste buchen, zeigen im Restaurant ihren QR-Code und zahlen vor Ort.

Konzept: [Thirsty – Produktkonzept](https://claude.ai/code/artifact/66454646-8209-4897-967b-aa839813e4c8)

## Entwickeln und veröffentlichen

```bash
cd thirsty
npm install
npm run dev     # http://localhost:3000/thirsty/
npm run site    # statischer Export nach ../src/static/thirsty/
cd .. && node build.mjs
```

Der exportierte Stand liegt im Repository unter `src/static/thirsty/`, weil IONOS Deploy Now nur `node build.mjs`
ausführt. Nach Änderungen in `thirsty/` also immer `npm run site` laufen lassen und beides committen.

Demo-Konten (Passwort `thirsty123`): `gast@thirsty.test`, `wirt@thirsty.test`. Auf der Anmeldeseite per Klick.

## Aufbau

- `src/lib/store.ts`: Datenmodell, Speicherung im Local Storage, Beispieldaten.
- `src/lib/actions.ts`: alle Änderungen mit den Regeln aus dem Konzept (Buchungsgrenzen, Check-in-Fenster, No-Show).
- `src/lib/reliability.ts`: Zuverlässigkeitswert (Start 80, +3 Besuch, −10 späte Absage, −25 No-Show, Stufen, Verfall nach 90 Tagen).
- `src/app/`: Seiten. Gäste: Entdecken, Restaurant, Buchung mit QR-Code, Konto. Portal: Restaurant anlegen, Heute,
  Angebote, Check-in (Kamera oder Code), Profil mit Öffnungszeiten und Standort, Fotos, Speisekarte, Bewertungen, Team.

## Vorschau-Grenzen

Alle Daten liegen nur im Browser: Ein Restaurant sieht die Buchung eines Gastes nur, wenn beide im selben Browser
angemeldet waren. Für echten Betrieb `store.ts`/`actions.ts` auf eine Datenbank umstellen (Vorschlag: Supabase in der
EU), dann Datenschutz, AGB und Plattformpflichten ergänzen. Zahlungen, Kaution, Abos, Promotion und Erinnerungen fehlen noch.
