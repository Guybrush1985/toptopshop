# Werbung lohnt sich – lokal

Die Plattform ist seit dem 27.10.2026 nicht mehr auf toptop.shop online (Wunsch von Rosi).
Der Code liegt hier außerhalb von `src/static/`, deshalb baut `node build.mjs` ihn nicht mehr mit.

## Starten

```bash
python3 -m http.server 8080 --directory werbunglohntsich/app
```

Dann im Browser http://localhost:8080/ öffnen. Kein Build nötig, Änderungen an `app/` sind nach dem Neuladen sichtbar.

- Die App spricht weiter mit der Supabase-Datenbank (Projekt Firsty.app, Schema `wls`). Konten und Punkte
  sind also dieselben wie vorher.
- Links auf `/impressum/` und `/datenschutz/` führen lokal ins Leere.
- Der Passwortschutz steht in `app/.htaccess` und gilt nur auf einem Apache-Server, nicht lokal.

## Wieder online stellen

Ordner zurück nach `src/static/werbunglohntsich/` verschieben, die Weiterleitung in `src/static/.htaccess`
entfernen und `OUT` in `scripts/werbunglohntsich-spots.mjs` zurückstellen.
