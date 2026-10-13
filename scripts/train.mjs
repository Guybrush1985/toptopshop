// Passwortgeschütztes Lerntraining unter /train/.
//
// Das Repository ist öffentlich. Deshalb liegen hier weder Passwort noch Klartext:
// Die Quellen stehen im (git-ignorierten) Ordner train-src/, dieses Skript verschlüsselt sie
// (PBKDF2-SHA256 + AES-256-GCM) und schreibt eine Login-Seite mit dem verschlüsselten Inhalt nach
// src/static/train/index.html. build.mjs kopiert sie wie jede statische Datei nach dist/train/.
//
//   TRAIN_PASSWORD=… node scripts/train.mjs build    train-src/ → src/static/train/index.html
//   TRAIN_PASSWORD=… node scripts/train.mjs unpack   src/static/train/index.html → train-src/
//
// Inhalte bearbeiten: unpack, Dateien in train-src/ ändern, build, dann node build.mjs.

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { webcrypto as crypto } from "node:crypto";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "train-src");
const OUT = join(ROOT, "src", "static", "train", "index.html");
const ITERATIONS = 600000;

const password = process.env.TRAIN_PASSWORD;
const cmd = process.argv[2];
if (!password || !["build", "unpack"].includes(cmd)) {
  console.error("Aufruf: TRAIN_PASSWORD=… node scripts/train.mjs build|unpack");
  process.exit(1);
}

const b64 = (buf) => Buffer.from(buf).toString("base64");
const unb64 = (s) => new Uint8Array(Buffer.from(s, "base64"));

async function deriveKey(salt) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function build() {
  const files = {};
  for (const f of (await readdir(SRC)).sort()) {
    if (/\.(html|css|js)$/.test(f)) files[f] = await readFile(join(SRC, f), "utf8");
  }
  if (!files["app.html"]) throw new Error("train-src/app.html fehlt");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(salt);
  const data = new TextEncoder().encode(JSON.stringify(files));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
  const payload = { v: 1, iter: ITERATIONS, salt: b64(salt), iv: b64(iv), ct: b64(ct) };
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, shell(payload));
  console.log(`✓ ${Object.keys(files).length} Dateien verschlüsselt → ${OUT.replace(ROOT + "/", "")} (${Math.round(payload.ct.length / 1024)} KB)`);
}

async function unpack() {
  const html = await readFile(OUT, "utf8");
  const payload = JSON.parse(html.match(/<script type="application\/json" id="payload">([\s\S]*?)<\/script>/)[1]);
  const key = await deriveKey(unb64(payload.salt));
  let plain;
  try {
    plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(payload.iv) }, key, unb64(payload.ct));
  } catch {
    console.error("Falsches Passwort.");
    process.exit(1);
  }
  const files = JSON.parse(new TextDecoder().decode(plain));
  await mkdir(SRC, { recursive: true });
  for (const [name, content] of Object.entries(files)) await writeFile(join(SRC, name), content);
  console.log(`✓ ${Object.keys(files).length} Dateien nach train-src/ entpackt`);
}

// Login-Seite. Nach erfolgreicher Entschlüsselung ersetzt sie sich selbst durch die App.
function shell(payload) {
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>Nachhaltigkeits-Kompass · Training</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
@font-face{font-family:"Fraunces";src:url(/fonts/fraunces-latin-wght.woff2) format("woff2");font-weight:300 900;font-display:swap}
@font-face{font-family:"Inter";src:url(/fonts/inter-latin-wght.woff2) format("woff2");font-weight:100 900;font-display:swap}
:root{--bg:#F6FBF7;--card:#fff;--ink:#17251B;--muted:#55665A;--forest:#253D2C;--green:#2E6F40;--leaf:#68BA7F;--mint:#CFFFDC;--line:#DDEBE1;--err:#B4432C}
@media (prefers-color-scheme:dark){:root{--bg:#0E1711;--card:#16231A;--ink:#E6F1E9;--muted:#9DB3A3;--green:#7CCB93;--line:#26392C;--err:#F08F78}}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%}
body{background:var(--bg);color:var(--ink);font:16px/1.55 Inter,system-ui,sans-serif;display:flex;flex-direction:column;min-height:100vh}
main{flex:1;display:grid;place-items:center;padding:32px 16px}
.card{width:100%;max-width:420px;background:var(--card);border:1px solid var(--line);border-radius:24px;padding:36px 28px 28px;box-shadow:0 20px 50px -30px rgba(23,37,27,.45)}
.mark{width:64px;height:64px;border-radius:20px;background:var(--forest);display:grid;place-items:center;margin-bottom:20px}
h1{font:600 28px/1.15 Fraunces,Georgia,serif;margin:0 0 8px;letter-spacing:-.01em}
p{margin:0 0 20px;color:var(--muted)}
label{display:block;font-weight:600;font-size:14px;margin-bottom:6px}
input[type=password]{width:100%;font:inherit;padding:12px 14px;border-radius:12px;border:1.5px solid var(--line);background:var(--bg);color:var(--ink)}
input[type=password]:focus{outline:none;border-color:var(--green);box-shadow:0 0 0 4px color-mix(in srgb,var(--leaf) 30%,transparent)}
.remember{display:flex;gap:10px;align-items:center;font-weight:400;margin:14px 0 20px;color:var(--muted)}
.remember input{width:18px;height:18px;accent-color:var(--green)}
button{width:100%;font:600 16px Inter,system-ui,sans-serif;padding:13px 18px;border:0;border-radius:999px;background:var(--green);color:#fff;cursor:pointer}
@media (prefers-color-scheme:dark){button{color:#0E1711}}
button:disabled{opacity:.6;cursor:progress}
.err{color:var(--err);font-size:14px;min-height:1.4em;margin:10px 0 0}
.fine{font-size:13px;margin:18px 0 0}
footer{text-align:center;font-size:13px;color:var(--muted);padding:16px}
footer a{color:inherit}
</style>
</head>
<body>
<main>
<form class="card" id="login" autocomplete="off">
  <div class="mark" aria-hidden="true"><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#CFFFDC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z" fill="#68BA7F" stroke="#68BA7F"/></svg></div>
  <h1>Hallo Lisa!</h1>
  <p>Hier geht es zu deinem persönlichen Training <strong>„Nachhaltigkeits-Kompass“</strong>. Bitte gib dein Passwort ein.</p>
  <label for="pw">Passwort</label>
  <input type="password" id="pw" name="pw" required autofocus>
  <label class="remember"><input type="checkbox" id="remember" checked> Auf diesem Gerät angemeldet bleiben</label>
  <button type="submit" id="go">Training öffnen</button>
  <div class="err" id="err" role="alert" aria-live="polite"></div>
  <p class="fine">Dein Lernfortschritt wird nur lokal in diesem Browser gespeichert. Keine Cookies, kein Tracking.</p>
</form>
</main>
<footer><a href="/impressum/">Impressum</a> · <a href="/datenschutz/#training">Datenschutz</a></footer>
<script type="application/json" id="payload">${JSON.stringify(payload)}</script>
<script>
(function () {
  var KEY = "kompass.key";
  var P = JSON.parse(document.getElementById("payload").textContent);
  var form = document.getElementById("login"), err = document.getElementById("err"), btn = document.getElementById("go");
  function bytes(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
  function b64(buf) { var s = "", a = new Uint8Array(buf); for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return btoa(s); }
  function store(fn) { try { return fn(); } catch (e) { return null; } }

  function open(key) {
    return crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(P.iv) }, key, bytes(P.ct)).then(function (buf) {
      var f = JSON.parse(new TextDecoder().decode(buf));
      var html = f["app.html"];
      Object.keys(f).forEach(function (name) {
        if (name === "app.html") return;
        html = html.split("<!--@" + name + "-->").join(name.slice(-4) === ".css" ? f[name] : f[name].replace(/<\\/script/gi, "<\\\\/script"));
      });
      // Erst ersetzen, wenn die Login-Seite fertig geladen ist – sonst ignoriert der Browser document.open().
      return new Promise(function (done) {
        function swap() { setTimeout(function () { document.open(); document.write(html); document.close(); done(); }, 0); }
        if (document.readyState === "complete") swap(); else addEventListener("load", swap);
      });
    });
  }

  function derive(pw) {
    return crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]).then(function (base) {
      return crypto.subtle.deriveKey({ name: "PBKDF2", salt: bytes(P.salt), iterations: P.iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, true, ["decrypt"]);
    });
  }

  if (!window.crypto || !crypto.subtle) {
    err.textContent = "Dein Browser unterstützt die nötige Verschlüsselung nicht. Bitte nutze einen aktuellen Browser über https.";
    btn.disabled = true;
    return;
  }

  var saved = store(function () { return localStorage.getItem(KEY); });
  if (saved) {
    form.style.visibility = "hidden";
    crypto.subtle.importKey("raw", bytes(saved), "AES-GCM", false, ["decrypt"]).then(open).catch(function () {
      store(function () { localStorage.removeItem(KEY); });
      form.style.visibility = "";
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.textContent = "";
    btn.disabled = true;
    btn.textContent = "Öffne …";
    var remember = document.getElementById("remember").checked;
    derive(document.getElementById("pw").value).then(function (key) {
      return crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(P.iv) }, key, bytes(P.ct)).then(function () {
        if (!remember) return key;
        return crypto.subtle.exportKey("raw", key).then(function (raw) {
          store(function () { localStorage.setItem(KEY, b64(raw)); });
          return key;
        });
      });
    }).then(open).catch(function () {
      err.textContent = "Das Passwort stimmt leider nicht. Versuch es noch einmal.";
      btn.disabled = false;
      btn.textContent = "Training öffnen";
    });
  });
})();
</script>
</body>
</html>
`;
}

(cmd === "build" ? build() : unpack()).catch((e) => {
  console.error(e);
  process.exit(1);
});
