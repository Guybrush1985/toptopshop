# Firsty in App Store und Google Play

Die App ist eine Capacitor-Hülle um dieselbe Oberfläche wie toptop.shop/firsty. Alle Seiten liegen in der App
(kein Laden einer Website), Daten kommen aus Supabase, Zahlungen laufen über Stripe.

- App-ID (beide Stores): `de.tanmeon.firsty`, Name „Firsty“, Version 1.0.0
- URL-Schema für Rücksprünge von Stripe: `firsty://`
- Nur Hochformat, nur iPhone (kein iPad-Layout), Android ab 7.0 (API 24)

## Bauen

```bash
cd thirsty
npm ci
npm run app            # Web-Teil für die App bauen und in ios/ und android/ kopieren
npm run app:ios        # zusätzlich Xcode öffnen (nur auf dem Mac)
npm run app:android    # zusätzlich Android Studio öffnen
npm run app:icons      # Icons und Splash neu erzeugen (Vorlagen in app-assets/)
```

Bei jedem Push mit Änderungen in `thirsty/` baut GitHub Actions (`.github/workflows/firsty-app.yaml`) automatisch eine
Android-Test-APK und prüft den iOS-Build. Die Dateien liegen im jeweiligen Lauf unter „Artifacts“.

## Checkliste bis zum Store-Start

### 1. Konten
- [ ] Apple Developer Program als Organisation (TanMeOn GmbH, D-U-N-S-Nummer nötig), 99 $/Jahr
- [ ] Google Play Console als Organisation, einmalig 25 $; Identitätsprüfung der Firma
- [ ] Stripe-Konto für TanMeOn GmbH, Connect aktivieren (Typ „Express“, Land Deutschland)

### 2. Stripe einrichten
1. Dashboard → Entwickler → API-Schlüssel: geheimen Schlüssel kopieren (erst `sk_test_…`, zum Start `sk_live_…`).
2. Supabase → Edge Functions → Secrets:
   - `STRIPE_SECRET_KEY` = geheimer Schlüssel
   - `STRIPE_WEBHOOK_SECRET` = Signatur-Secret des Webhooks aus Schritt 3
   - `STRIPE_CONNECT_WEBHOOK_SECRET` = Signatur-Secret des Connect-Webhooks aus Schritt 3
3. Stripe → Entwickler → Webhooks, zwei Endpunkte auf
   `https://pkfvbyawkgjdktduqlxb.supabase.co/functions/v1/stripe-webhook`:
   - „Dein Konto“: `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
     `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`,
     `invoice.paid`, `invoice.payment_failed`, `payment_intent.succeeded`, `payment_intent.payment_failed`,
     `charge.refunded`
   - „Verbundene Konten“: `account.updated`
4. Stripe → Einstellungen → Connect → Branding: Name „Firsty“, Icon `app-assets/icon.svg`, Farbe `#d4ff3a`.
5. Stripe → Einstellungen → Zahlungsmethoden: Karte, Apple Pay, Google Pay aktiv. Für Apple Pay im Web die Domain
   `toptop.shop` verifizieren.
6. Stripe → Einstellungen → E-Mails: Belege an Kunden für erfolgreiche Zahlungen und Erstattungen einschalten.
7. Testlauf mit Testkarte `4242 4242 4242 4242`: Karte hinterlegen, Buchung, Rechnung zahlen, No-Show, Abo,
   Werbeplatz. Danach auf Live-Schlüssel umstellen.

### 3. Supabase
- [ ] Authentication → URL Configuration: Site URL `https://toptop.shop/firsty/`, Redirect URLs
      `https://toptop.shop/firsty/**`
- [ ] Eigenen SMTP-Server eintragen (z. B. IONOS-Postfach), damit Bestätigungs- und Passwort-Mails an alle gehen,
      danach „Confirm email“ einschalten
- [ ] Die Beispiel-Restaurants („Beispiel“) vor dem Start durch echte ersetzen oder ausblenden

### 4. Rechtliches
- [ ] AGB, Datenschutz und Impressum von einer Anwältin oder einem Anwalt prüfen lassen (Entwürfe liegen unter
      /agb, /datenschutz, /impressum)
- [ ] Auftragsverarbeitung: Supabase-DPA abschließen; Stripe-Bedingungen gelten mit Kontoeröffnung

### 5. Apple App Store
1. App Store Connect → Neue App: Plattform iOS, Name „Firsty – Essen zur Öffnung“, Sprache Deutsch,
   Bundle-ID `de.tanmeon.firsty`, SKU `firsty-ios`.
2. Am Mac: `npm run app:ios`, in Xcode unter „Signing & Capabilities“ das Team wählen,
   Product → Archive → Distribute App → App Store Connect.
3. Texte, Screenshots und Datenschutzangaben aus den Abschnitten unten eintragen.
4. Altersfreigabe: 4+ (keine bedenklichen Inhalte). Kategorie: Essen und Trinken, Zweitkategorie: Reisen.
5. Prüfhinweise für Apple (App Review Information): Demo-Zugänge aus „Zugänge für die Prüfung“ eintragen und
   diesen Text:
   > Firsty vermittelt Tischreservierungen in Restaurants. Zahlungen in der App betreffen Restaurantrechnungen
   > und No-Show-Gebühren, also Dienstleistungen außerhalb der App (Richtlinie 3.1.3(e) / 3.1.5), und laufen
   > über Stripe. Restaurant-Abos und Werbeplätze werden in der App nicht verkauft.

### 6. Google Play
1. Upload-Schlüssel erzeugen (einmalig, gut sichern):
   `keytool -genkey -v -keystore firsty.jks -keyalg RSA -keysize 2048 -validity 10000 -alias firsty`
2. GitHub → Settings → Secrets → Actions: `FIRSTY_KEYSTORE_BASE64` (Inhalt von `base64 -w0 firsty.jks`),
   `FIRSTY_KEYSTORE_PASSWORD`, `FIRSTY_KEY_ALIAS` (`firsty`), `FIRSTY_KEY_PASSWORD`.
   Danach erzeugt jeder Lauf ein signiertes App Bundle `firsty-android-release`.
3. Play Console → App erstellen: Name „Firsty – Essen zur Öffnung“, Deutsch, App, kostenlos.
4. Play App Signing aktivieren, App Bundle in den internen Test hochladen, dann geschlossener Test
   (Neue Entwicklerkonten brauchen 12 Tester über 14 Tage, bevor sie in Produktion gehen dürfen.)
5. Store-Eintrag, Datensicherheit, Inhaltseinstufung (IARC-Fragebogen: keine Gewalt, keine Glücksspiele; Nutzer
   können Bewertungen schreiben) und Zielgruppe (ab 16) ausfüllen.

## Zugänge für die Prüfung

Vor der Einreichung in der Live-Datenbank anlegen:
- Gast: `review-gast@tanmeon.de`. Im Live-Modus lassen sich keine Testkarten hinterlegen, deshalb mindestens ein
  Angebot ohne Kartenpflicht bereithalten.
- Restaurant: `review-wirt@tanmeon.de`, Mitglied eines Prüf-Restaurants mit Angeboten für die nächsten Tage

## Store-Texte

**Name:** Firsty – Essen zur Öffnung
**Untertitel (iOS, 30 Zeichen):** Bis 75 % sparen zur Öffnung
**Kurzbeschreibung (Android, 80 Zeichen):** Restaurants zur Öffnung buchen: bis 75 % Rabatt oder Drink und Dessert gratis.

**Beschreibung:**
Sei der erste Gast. Firsty zeigt dir Restaurants in deiner Stadt, die dich in der ersten Stunde nach Öffnung mit
einem Vorteil begrüßen: 25, 50 oder 75 % auf die Rechnung, ein Getränk oder ein Dessert aufs Haus.

So geht’s:
• Stadt wählen und Angebot aussuchen
• Platz kostenlos buchen, bis zwei Stunden vorher kostenlos absagen
• Im Restaurant den QR-Code zeigen
• Rechnung direkt in der App bezahlen, Rabatt schon abgezogen, Trinkgeld geht ans Team, oder klassisch vor Ort

Für Restaurants:
• Leere Tische zur Öffnung füllen
• Angebote in Minuten anlegen, Gäste per QR-Code einchecken
• Zahlungen in der App mit wöchentlicher Auszahlung über Stripe
• Schutz vor No-Shows mit hinterlegter Karte
• Monatliche Abrechnung mit Export

**Schlüsselwörter (iOS, 100 Zeichen):** restaurant,rabatt,reservierung,essen gehen,happy hour,tisch buchen,deal,dessert,early bird

**Support-URL:** https://toptop.shop/firsty/hinweise/
**Datenschutz-URL:** https://toptop.shop/firsty/datenschutz/

## Datenschutzangaben

### Apple „App-Datenschutz“
Tracking: Nein. Erhobene Daten, alle mit der Identität verknüpft, Zweck „App-Funktionalität“:
- Kontaktinformationen: Name, E-Mail-Adresse, Telefonnummer (optional)
- Finanzinformationen: Zahlungsinformationen (nur Kartenmarke und letzte vier Ziffern; Kartendaten verarbeitet Stripe)
- Käufe: Kaufverlauf (Buchungen und Zahlungen)
- Nutzerinhalte: Fotos (Restaurants), andere Nutzerinhalte (Bewertungen, Hinweise zu Allergien)
- Kennungen: Benutzer-ID

Nicht erhoben: Standort, Kontakte, Browserverlauf, Nutzungsdaten, Diagnose.

### Google „Datensicherheit“
- Daten werden bei der Übertragung verschlüsselt: Ja
- Nutzer können die Löschung anfordern: Ja, direkt in der App unter „Konto → Konto löschen“, Web-Link
  https://toptop.shop/firsty/konto/
- Erhobene Daten (nicht geteilt, außer an Auftragsverarbeiter): Name, E-Mail, Telefonnummer, Nutzer-IDs,
  Zahlungsinformationen, Kaufverlauf, Fotos, sonstige Nutzerinhalte; Zweck: App-Funktionen, Kontoverwaltung,
  Betrugsprävention (Zahlungen)
- Gesundheitsangaben: Hinweise zu Allergien sind freiwillig; Zweck App-Funktionen

### Berechtigungen
- Kamera: nur für den QR-Scanner beim Check-in im Restaurant-Portal
- Internet

## Screenshots

`app-assets/store/` enthält Screenshots in 1290 × 2796 (iPhone 6,9″, von Apple auch für kleinere Geräte genutzt)
und 1080 × 1920 (Google Play). Neu erzeugen: `node scripts/store-screenshots.mjs` bei laufendem App-Build.

## Was in der App bewusst anders ist als auf der Website

- Restaurant-Abos und Werbeplätze kann man in der App nicht kaufen (Apple und Google verlangen dafür sonst ihr
  eigenes Bezahlsystem). Das Portal zeigt dort einen Hinweis auf die Website.
- Unten gibt es eine Tab-Leiste, der Hinweis-Banner der Website entfällt.
- Stripe öffnet sich in einem sicheren Browserfenster und springt danach per `firsty://` zurück in die App.
