# Thirsty – toptop.shop/thirsty/

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

## Zwei Betriebsarten

- **Vorschau** (keine Supabase-Werte gesetzt): alles im Local Storage des Browsers, mit Demo-Konten
  (Passwort `thirsty123`): `gast@thirsty.test`, `wirt@thirsty.test`.
- **Live** (Supabase): `thirsty/.env.production` mit `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  (Vorlage: `.env.example`). Beide Werte sind öffentlich und landen im JavaScript; geschützt wird über Row Level Security.
  Niemals den `service_role`-Schlüssel oder das Datenbank-Passwort eintragen.

### Supabase einrichten

1. Projekt in der Region Central EU (Frankfurt) anlegen.
2. SQL Editor → `supabase/schema.sql` einfügen → Run. Das Skript legt Tabellen, Regeln, Funktionen, den Foto-Speicher und
   drei Beispiel-Restaurants an und kann gefahrlos erneut ausgeführt werden.
3. Authentication → URL Configuration: Site URL `https://toptop.shop/thirsty/`, Redirect URL `https://toptop.shop/thirsty/**`.
4. Authentication → Sign In / Providers → Email: „Confirm email“ ausschalten, solange kein eigener SMTP-Server eingetragen ist
   (der eingebaute Mailversand von Supabase schickt nur an Mitglieder des Supabase-Teams und ist stark begrenzt).
5. Auftragsverarbeitungsvertrag (DPA) im Supabase-Dashboard abschließen.

## Aufbau

- `src/lib/store.ts`: Datenmodell, Speicherung im Local Storage, Beispieldaten.
- `src/lib/actions.ts`: alle Änderungen mit den Regeln aus dem Konzept (Buchungsgrenzen, Check-in-Fenster, No-Show).
  Im Live-Betrieb leiten die Funktionen an `src/lib/remote.ts` weiter.
- `src/lib/remote.ts`: Supabase-Anbindung. Lädt alles, was der Nutzer sehen darf, in dieselbe Datenform wie die Vorschau.
- `supabase/schema.sql`: Tabellen, Row Level Security und Datenbankfunktionen. Die Regeln (Buchen, Storno, Check-in,
  No-Show, Bewertungen, Zuverlässigkeitswert) gelten dort serverseitig und spiegeln `actions.ts` und `reliability.ts`.
- `src/lib/reliability.ts`: Zuverlässigkeitswert (Start 80, +3 Besuch, −10 späte Absage, −25 No-Show, Stufen, Verfall nach 90 Tagen).
- `src/app/`: Seiten. Gäste: Entdecken, Restaurant, Buchung mit QR-Code, Konto. Portal: Restaurant anlegen, Heute,
  Angebote, Check-in (Kamera oder Code), Profil mit Öffnungszeiten und Standort, Fotos, Speisekarte, Bewertungen, Team.

## Noch offen

AGB und Plattformpflichten, Passwort vergessen, Konto selbst löschen, Zahlungen, Kaution, Abos, Promotion und Erinnerungen.
