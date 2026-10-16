# MyShotCoach – App für iPhone und Android

Eine Codebasis (React Native mit Expo SDK 58, Expo Router) für iOS, Android und eine Web-Vorschau.
Backend ist dasselbe Supabase-Projekt wie der Coach-Bereich der Website (`htibyxvxryraooarkwjg`, Frankfurt).

## Was die App heute kann

- **Spieler:innen:** Schlag wählen (8 Schläge), Filmanleitung (rundherum, je 5 Schläge von der Seite, von hinten, von der anderen Seite),
  Video aufnehmen oder aus der Mediathek wählen, Trainer:in nach Level (C/B/A) oder direkt wählen (Filter DTB C/B/A, Ex-Profi),
  Bezahlen (Apple Pay, Google Pay, PayPal, Karte, Guthaben), Anfragen mit Status und Video-Antwort, Bewertung, Guthaben.
- **Trainer:innen:** echtes Konto (Registrierung mit Level, Ex-Profi-Angaben, Heimatverein aus der Vereinsliste, Nachweis jetzt oder später),
  Login, Status (Infos fehlen / in Prüfung / live), Nachweis nachreichen, Ratgeber für Video-Antworten, Beispiel-Anfragen mit Video-Antwort.

**Vorschau-Stand:** Spieler-Anfragen bleiben auf dem Gerät, es wird nichts hochgeladen und nichts abgebucht.
Coach-Profile, Bewertungen und Coach-Anfragen sind als „Beispiel“ gekennzeichnet. Echt sind nur die Coach-Konten.

## Entwickeln

```bash
cd apps/myshotcoach-app
npm install
npx expo start          # QR-Code mit Expo Go (iPhone/Android) scannen
npx tsc --noEmit        # Typprüfung
```

## Web-Vorschau auf toptop.shop

```bash
npm run export:preview  # baut die Web-Version nach src/static/myshotcoach/app/
```

Danach wie gewohnt `node build.mjs` im Repo-Hauptordner. Die Vorschau liegt unter https://toptop.shop/myshotcoach/app/.
Sie speichert nichts im Browser (kein Local Storage, keine Cookies).

## In die App Stores

Gebaut wird mit EAS (Expo Application Services), siehe `eas.json`:

```bash
npx eas-cli login
npx eas-cli build --platform all --profile preview      # Testversionen (Android-APK, iOS intern)
npx eas-cli build --platform all --profile production
npx eas-cli submit --platform ios                         # TestFlight / App Store
npx eas-cli submit --platform android                     # Google Play
```

Dafür nötig: Apple Developer Program (Firma TanMeOn GmbH, D-U-N-S-Nummer), Google Play Console (Organisationskonto),
ein Expo-Konto sowie Datenschutzangaben in beiden Stores. Bundle-ID / Paketname: `de.tanmeon.myshotcoach`.

## Bevor echtes Geld fließt

- Spieler-Konten und Video-Speicher in Supabase (Tabellen für Anfragen, privater Bucket für Videos, RLS)
- Zahlungen: Stripe (Reservierung bei Anfrage, Abbuchung bei Annahme, Freigabe nach 72 Stunden), Auszahlung an Coaches per Stripe Connect
- Push-Benachrichtigungen (Anfrage angenommen, Antwort da)
- AGB, Widerrufsbelehrung, Datenschutzerklärung für die App
