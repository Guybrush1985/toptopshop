# Firsty – Sicherheit für den Livebetrieb

Stand 27.10.2026. Abgleich des CISO-Reports vom selben Tag mit dem Code. Was der Report behauptet und was der Code
tatsächlich tut, steht hier nebeneinander.

## Umgesetzt

### Security Headers (`public/.htaccess`, `scripts/csp.mjs`)

Die Website ist ein statischer Export auf IONOS (Apache, kein Node-Server). `headers()` in `next.config.mjs` wirkt bei
`output: "export"` nicht, deshalb:

- **Content Security Policy als `<meta>` in jeder HTML-Datei.** `npm run site` berechnet für jede Seite die SHA-256-Hashes
  der Next.js-Inline-Skripte. Erlaubt sind nur Skripte von toptop.shop und genau diese Inline-Skripte. Verbindungen nur zu
  toptop.shop, Supabase und OpenStreetMap (Nominatim), Bilder zusätzlich von OSM-Kacheln und dem Supabase-Fotospeicher,
  Iframes nur von openstreetmap.org. `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`.
- **Als HTTP-Header** (`.htaccess`): `frame-ancestors 'none'` und `X-Frame-Options: DENY` (kein Einbetten, Clickjacking),
  `Strict-Transport-Security: max-age=31536000` (ohne `includeSubDomains`), `Permissions-Policy` (Kamera und Standort nur
  für Firsty selbst, Mikrofon/Payment/USB aus), `Cross-Origin-Opener-Policy: same-origin`. `nosniff` und
  `Referrer-Policy: strict-origin-when-cross-origin` gab es schon.
- Geprüft im Browser (Chromium, alle Seiten und Client-Navigation): keine CSP-Verstöße.
- **App (iOS/Android):** bekommt die CSP vorerst nicht. Capacitor spritzt auf Android eigenes Inline-Skript ein, das
  würde ohne Test auf echten Geräten blockiert. Nachziehen, sobald die App auf Geräten getestet wird.
- Hinweis: HSTS gilt für den ganzen Host toptop.shop, sobald ein Browser /firsty/ einmal über HTTPS geladen hat. Das ist
  gewollt, die ganze Seite läuft über HTTPS.

### XSS bei Eingaben und Ausgaben

- Namen, Hinweise, Allergien, Beschreibungen, Speisekarten: werden überall als React-Text ausgegeben, also automatisch
  escaped. Kein `dangerouslySetInnerHTML` mit Nutzerdaten. Die Restaurant-Pins auf der Karte (Leaflet-HTML) escapen den
  Text bereits (`esc()` in `CityMap.tsx`).
- **Gefunden und behoben:** Die Restaurant-Website wurde ungeprüft als Link ausgegeben. Ein Restaurant (oder die KI-Hilfe,
  die Websites aus der Websuche übernimmt) konnte `javascript:…` eintragen. React 19 blockiert solche Links zwar, jetzt
  werden aber zusätzlich nur `http(s)`-Adressen verlinkt (`src/lib/url.ts`, `safeUrl`). Gleiches für Belege und
  Rechnungen von Stripe sowie Instagram-Namen (nur erlaubte Zeichen).
- **Gefunden und behoben:** Offene Weiterleitung nach dem Login. `?weiter=//fremde-seite.de` wurde akzeptiert, weil nur
  auf `/` am Anfang geprüft wurde. Jetzt nur Pfade innerhalb von Firsty (`localPath`), auch nach Stripe-Rücksprung.

### Datenschutzerklärung

Links zu den Datenschutzerklärungen von Google und Apple im Abschnitt „Anmeldung mit Google oder Apple“.

## Session-Token („Local Storage mit Anmeldeschlüssel“)

**Stimmt.** Supabase legt die Sitzung im `localStorage` unter `thirsty-auth` ab (`src/lib/supabase.ts`): ein kurzlebiges
Access-Token (JWT, Standard 1 Stunde) und ein Refresh-Token. Wer per XSS Skript auf der Seite ausführen kann, kann beides
auslesen.

Bewertung und Gegenmaßnahmen:

- **Token-Rotation gibt es schon.** Supabase tauscht das Refresh-Token bei jeder Erneuerung aus und sperrt die ganze
  Sitzung, wenn ein altes Token wiederverwendet wird (Standard „Refresh token rotation“ / „reuse detection“). Im Dashboard
  unter Authentication → Sessions prüfen, dass das an ist.
- **Das eigentliche Risiko ist XSS**, und das ist jetzt mehrfach abgesichert: React escaped Ausgaben, gefährliche Links
  sind gefiltert, und die CSP verhindert fremde und eingeschleuste Skripte sowie das Absenden von Daten an fremde Server.
- **HttpOnly-Cookies (Vorschlag, nicht umgesetzt):** Braucht eine Server-Komponente, die das Token im Cookie hält und
  Anfragen an Supabase weiterreicht (z. B. Next.js mit Server auf einem Node-Host oder eine Supabase Edge Function als
  Proxy auf derselben Domain). IONOS Deploy Now liefert Firsty rein statisch aus, und die App nutzt denselben Code ohne
  Domain-Cookies. Aufwand: mittel bis groß, betrifft jede Datenbankabfrage. Empfehlung: erst nach dem Start, wenn es einen
  Anlass gibt. Mit CSP und Rotation ist das Risiko für den Start vertretbar.

## Was am Report nicht stimmt

- **„Kamera-Verifikation mit Fotos/Gesichtserkennung“:** Gibt es nicht. Die Kamera liest im Restaurant nur den QR-Code
  der Buchung (`QrScanner.tsx`, BarcodeDetector bzw. jsQR auf dem Gerät). Es wird kein Bild gespeichert oder übertragen,
  keine Gesichtserkennung, keine Biometrie. So steht es auch in der Datenschutzerklärung. Eine Biometrie-Policy und ein
  Anbieter-DPA sind nur nötig, wenn ein Foto-Check-in neu gebaut werden soll.
- **„Supabase in Irland“:** Die Datenbank liegt in Frankfurt (eu-central-1). Supabase Inc. ist ein US-Unternehmen, daher
  bleiben DPA und SCCs trotzdem relevant.
- **„PCI-DSS-Audit jetzt starten“:** Kartendaten gibt man ausschließlich auf der Stripe-Checkout-Seite ein; Firsty sieht
  nur Marke, letzte vier Ziffern und Ablaufdatum. Damit fällt Firsty unter den einfachsten PCI-Fall (SAQ A,
  Selbstauskunft). Ein externes PCI-Audit ist dafür nicht nötig.
- **„Nur E-Mail + Passwort“:** Es gibt zusätzlich Google- und Apple-Anmeldung. 2FA fehlt aber tatsächlich.

## Offene Entscheidungen (nicht im Code)

- 2FA für Gast-Konten (Supabase bietet TOTP-MFA; Pflicht oder freiwillig, vor oder nach dem Start).
- Supabase Auth: „Leaked password protection“ (Abgleich mit HaveIBeenPwned) ist laut Supabase-Advisor aus. Einschalten
  unter Authentication → Providers → Email (Dashboard, Pro-Plan nötig).
- DPA mit Supabase und Stripe, SCCs für Anthropic (USA, nur Restaurantdaten), Restaurant-Pflichten zum Umgang mit
  Gästedaten (AGB/Vertrag für Restaurants).
- Externes Security-Audit und Incident-Response-Policy.
