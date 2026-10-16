// Kopiert den statischen Export (out/) nach src/static/firsty/ der Website.
// Danach baut `node build.mjs` im Hauptordner die Seite mit /firsty/.
import { cp, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../out", import.meta.url));
const target = fileURLToPath(new URL("../../src/static/firsty", import.meta.url));
await rm(target, { recursive: true, force: true });
await cp(out, target, { recursive: true });
console.log("Firsty nach src/static/firsty/ kopiert.");
