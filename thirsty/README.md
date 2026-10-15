# Thirsty – Web-App (Prototyp)

Restaurants schreiben Early-Bird-Plätze für die erste Stunde nach Öffnung aus (z. B. 8 Plätze, 50 % auf die Karte
und ein Getränk aufs Haus). Gäste buchen, zeigen im Restaurant ihren QR-Code und zahlen vor Ort.

Konzept: [Thirsty – Produktkonzept](https://claude.ai/code/artifact/66454646-8209-4897-967b-aa839813e4c8)

## Lokal starten

```bash
cd thirsty
cp .env.example .env      # SESSION_SECRET setzen (mind. 32 Zeichen)
npm install
npm run setup             # Datenbank anlegen + Demo-Daten
npm run dev               # http://localhost:3000
```

Demo-Logins (Passwort `thirsty123`): `gast@thirsty.test` (Gast), `wirt@thirsty.test` (Betreiber von zwei Restaurants).

## Was drin ist

**Gäste:** Angebote entdecken (Filter Tag, Stadt, Küche), Restaurantseite mit Fotos, Karte inkl. Rabattpreisen,
Öffnungszeiten, OpenStreetMap-Karte und Bewertungen; Buchen mit Personenzahl; Buchung mit QR-Code und
sechsstelligem Code, Kalender, Route, Stornierung; Bewertung nach dem Check-in; Profil mit Zuverlässigkeitswert,
Favoriten.

**Restaurant-Portal:** Restaurant anlegen; Profil (Stammdaten, Merkmale, Kapazität, Adresse mit automatischer
Geokodierung, Kontakt, Rechnungsdaten), Öffnungszeiten mit zwei Zeiträumen pro Tag, Foto-Upload (Titelbild, Logo,
Galerie, Karte als Bild), strukturierte Speisekarte, Angebote (auch wöchentlich wiederholt) ausschreiben und absagen,
Tagesliste mit Gästen, Check-in per Kamera oder Code, No-Show melden, Gast-Feedback, Bewertungen beantworten,
Team mit Rollen (Inhaber, Manager, Service), veröffentlichen und pausieren.

**Regeln:** Malus-System laut Konzept (`src/lib/reliability.ts`): Start 80, +3 pro Besuch, −10 späte Absage,
−25 No-Show, Stufen mit Buchungsgrenzen, Verfall nach 90 Tagen. Eine Buchung pro Tag, eine pro Restaurant und
Woche, Überbuchungsschutz per Transaktion.

## Bewusst noch nicht drin

Zahlungen und Kaution (Stripe), Abos, Promotion, E-Mail/Push-Erinnerungen, SMS-Verifizierung, Widerspruch gegen
No-Shows im Produkt, iPhone-App. Siehe Roadmap im Konzept.

## Technik

Next.js 15 (App Router, Server Actions), TypeScript, Tailwind CSS, Prisma. Lokal SQLite; für Produktion in
`prisma/schema.prisma` den Provider auf `postgresql` stellen. Hochgeladene Bilder liegen in `uploads/` (für
Produktion auf S3-kompatiblen Speicher umstellen). Die App braucht einen Node-Server und wird **nicht** über
IONOS Deploy Now (toptop.shop) ausgeliefert; der Ordner hat keinen Einfluss auf den Build der Website.
