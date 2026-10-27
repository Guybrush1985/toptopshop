// Kopiert den statischen Export (out/) nach src/static/firsty/ der Website.
// Vorher bekommt jede HTML-Datei eine Content Security Policy (scripts/csp.mjs).
// Danach baut `node build.mjs` im Hauptordner die Seite mit /firsty/.
import { cp, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { addCsp } from "./csp.mjs";

const project = fileURLToPath(new URL("..", import.meta.url));
const out = fileURLToPath(new URL("../out", import.meta.url));
const target = fileURLToPath(new URL("../../src/static/firsty", import.meta.url));
console.log(`CSP in ${await addCsp(out, project)} HTML-Dateien gesetzt.`);
await rm(target, { recursive: true, force: true });
await cp(out, target, { recursive: true });
console.log("Firsty nach src/static/firsty/ kopiert.");
