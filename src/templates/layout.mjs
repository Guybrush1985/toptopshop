import { site, areas } from "../site.mjs";
import { esc, absUrl, catPath, groupPath } from "./util.mjs";
import { logoSvg } from "./logo.mjs";

let CSS = "";
export function setCss(css) {
  CSS = css;
}

/** Sichtbare Brotkrümel; der erste Eintrag ist immer die Startseite. */
export function crumbs(items) {
  return `<nav class="crumbs" aria-label="Brotkrümelnavigation"><ol>${items
    .map((c, i) =>
      i === items.length - 1
        ? `<li aria-current="page">${esc(c.name)}</li>`
        : `<li><a href="${c.path}">${esc(c.name)}</a></li>`
    )
    .join("")}</ol></nav>`;
}

export function breadcrumbLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

export function organizationLd() {
  const o = site.organization;
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: o.name,
    url: site.url,
    email: o.email,
    telephone: o.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.street,
      postalCode: o.zip,
      addressLocality: o.city,
      addressCountry: o.country,
    },
    logo: absUrl("/logo.svg"),
    brand: { "@type": "Brand", name: site.name },
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: site.lang,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

/** Bereich der aktuellen Seite (für Hervorhebung und Startzustand des Menüs). */
function currentArea(path, categories) {
  if (!path) return null;
  const direct = areas.find((a) => path.startsWith(`/${a.slug}/`));
  if (direct) return direct.slug;
  const cat = categories.find((c) => path === catPath(c));
  return cat ? cat.area : null;
}

const byLabel = (a, b) => a.navLabel.localeCompare(b.navLabel, "de");

/** Unterpunkte eines Bereichs im Flyout: Unterbereiche mit ihren Ratgebern oder direkt die Ratgeber. */
function flyoutSub(area, cats, current) {
  const link = (c) =>
    `<li><a href="${catPath(c)}"${current === catPath(c) ? ' aria-current="page"' : ""}>${esc(c.navLabel)}</a></li>`;
  const own = cats.filter((c) => c.area === area.slug);
  const lists = area.groups
    ? area.groups
        .map((g) => {
          const list = own.filter((c) => c.group === g.slug).sort(byLabel);
          return `<div class="fly-group"><a class="fly-gh" href="${groupPath(area, g)}">${esc(g.name)}</a><ul>${list.map(link).join("")}</ul></div>`;
        })
        .join("")
    : `<ul>${own.sort(byLabel).map(link).join("")}</ul>`;
  return `<div class="fly-sub${area.groups ? " has-groups" : ""}" id="fly-${area.slug}">
      <a class="fly-all" href="/${area.slug}/">Alle ${own.length} Ratgeber: ${esc(area.name)} <span aria-hidden="true">→</span></a>
      ${lists}
    </div>`;
}

function header(current, categories) {
  const active = currentArea(current, categories);
  const start = active || areas[0].slug;
  const items = areas
    .map(
      (a) => `<li class="fly-a${a.slug === start ? " on" : ""}" data-area="${a.slug}">
    <div class="fly-h"><a href="/${a.slug}/"${a.slug === active ? ' aria-current="true"' : ""}>${esc(a.short)}</a><button type="button" class="fly-t" aria-expanded="false" aria-controls="fly-${a.slug}"><span class="sr">Unterkategorien von ${esc(a.name)}</span></button></div>
    ${flyoutSub(a, categories, current)}
  </li>`
    )
    .join("");
  const method = current && current.startsWith("/methodik/") ? ' aria-current="page"' : "";
  return `<a class="skip" href="#inhalt">Zum Inhalt springen</a>
<div class="ad-note">Werbung: Links mit * sind Affiliate-Links zu Amazon und Partnershops. Beim Klick wirst du weitergeleitet, und der Partner kann deinen Besuch erfassen. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. <a href="/datenschutz/#amazon">Mehr dazu</a></div>
<header class="top"><div class="wrap">
  <a class="logo" href="/" aria-label="toptop.shop – Startseite">${logoSvg({ height: 46 })}</a>
  <nav class="nav" aria-label="Hauptnavigation">
    <button type="button" class="nav-btn" aria-expanded="false" aria-controls="fly"><span class="nav-ico" aria-hidden="true"></span>Themen</button>
    <a class="nav-link" href="/methodik/"${method}>So wählen wir aus</a>
    <div class="fly" id="fly">
      <div class="fly-top"><b>Themen</b><button type="button" class="fly-x">Schließen</button></div>
      <ul class="fly-list">${items}</ul>
      <a class="fly-method" href="/methodik/"${method}>So wählen wir aus</a>
    </div>
  </nav>
</div></header>
<div class="fly-bg" hidden></div>
<script>${NAV_JS}</script>`;
}

// Flyout: Desktop öffnet per Hover oder Klick, links Bereiche, rechts deren Ratgeber.
// Mobil fährt das Menü von rechts aus, Bereiche klappen per Plus-Schalter auf.
const NAV_JS = `(function(){
var d=document,h=d.documentElement,b=d.querySelector(".nav-btn"),f=d.getElementById("fly"),bg=d.querySelector(".fly-bg"),nav=d.querySelector(".nav");
if(!b||!f)return;h.classList.add("js");
var mq=matchMedia("(max-width:860px)"),hov=matchMedia("(hover:hover) and (pointer:fine)"),t;
function set(o){h.classList.toggle("nav-open",o);b.setAttribute("aria-expanded",o);bg.hidden=!(o&&mq.matches);}
function isOpen(){return h.classList.contains("nav-open")}
function pick(li){if(mq.matches)return;[].forEach.call(f.querySelectorAll(".fly-a"),function(x){x.classList.toggle("on",x===li)});}
b.addEventListener("click",function(){set(!isOpen())});
f.querySelector(".fly-x").addEventListener("click",function(){set(false);b.focus()});
bg.addEventListener("click",function(){set(false)});
nav.addEventListener("mouseenter",function(){if(hov.matches&&!mq.matches){clearTimeout(t);t=setTimeout(function(){set(true)},90)}});
nav.addEventListener("mouseleave",function(){if(hov.matches&&!mq.matches){clearTimeout(t);t=setTimeout(function(){set(false)},250)}});
[].forEach.call(f.querySelectorAll(".fly-a"),function(li){
li.addEventListener("mouseenter",function(){pick(li)});
li.addEventListener("focusin",function(){pick(li)});
var tg=li.querySelector(".fly-t");tg.addEventListener("click",function(){
if(mq.matches){var o=!li.classList.contains("open");li.classList.toggle("open",o);tg.setAttribute("aria-expanded",o)}else pick(li)});
});
d.addEventListener("keydown",function(e){if(e.key==="Escape"&&isOpen()){set(false);b.focus()}});
d.addEventListener("click",function(e){if(isOpen()&&!mq.matches&&!nav.contains(e.target))set(false)});
nav.addEventListener("focusout",function(e){if(!mq.matches&&isOpen()&&e.relatedTarget&&!nav.contains(e.relatedTarget))set(false)});
mq.addEventListener&&mq.addEventListener("change",function(){set(false)});
var on=f.querySelector(".fly-a [aria-current]");if(on){var li=on.closest(".fly-a");li.classList.add("open");li.querySelector(".fly-t").setAttribute("aria-expanded","true")}
})()`;

function footer(categories) {
  const o = site.organization;
  return `<footer class="foot"><div class="wrap">
  <div class="cols">
    <div>
      <a class="logo" href="/" aria-label="toptop.shop – Startseite">${logoSvg({ height: 54 })}</a>
      <p>${esc(site.claim)} Wir reduzieren jede Kategorie auf drei Empfehlungen – und erklären ausführlich, warum.</p>
    </div>
    <div>
      <h2>Bereiche</h2>
      <ul>${areas
        .map((a) => `<li><a href="/${a.slug}/">${esc(a.name)}</a> <small>(${categories.filter((c) => c.area === a.slug).length})</small></li>`)
        .join("")}</ul>
    </div>
    <div>
      <h2>toptop.shop</h2>
      <ul>
        <li><a href="/methodik/">So wählen wir aus</a></li>
        <li><a href="/impressum/">Impressum</a></li>
        <li><a href="/datenschutz/">Datenschutz</a></li>
      </ul>
    </div>
  </div>
  <div class="legalnote">
    <span>* Affiliate-Link: Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Bei Links zu weiteren Partnershops (über das Awin-Netzwerk) erhalten wir ebenfalls eine Provision. Für dich ändert sich der Preis nicht. Klickst du auf einen solchen Link, verlässt du toptop.shop und wirst zu Amazon bzw. über Awin zum jeweiligen Shop weitergeleitet. Dort können Cookies oder ähnliche Techniken eingesetzt werden, um den Kauf unserer Website zuzuordnen; dafür sind Amazon, Awin und der Shop verantwortlich (<a href="/datenschutz/#amazon">Datenschutzerklärung</a>). toptop.shop selbst setzt keine Cookies und zählt keine Klicks. Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner verbundenen Unternehmen.</span>
    <span>Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine ärztliche oder dermatologische Beratung.</span>
    <span>© ${new Date().getFullYear()} ${esc(o.name)} · ${esc(site.name)}</span>
  </div>
</div></footer>`;
}

/**
 * Vollständiges HTML-Dokument.
 * opts: path, title, description, body, breadcrumbs, jsonld[], ogType, ogImage,
 *       noindex, categories (für Footer), modified
 */
export function page(opts) {
  const url = absUrl(opts.path);
  const ogImage = absUrl(opts.ogImage || "/og/toptop-shop.png");
  const graph = [organizationLd(), websiteLd(), ...(opts.jsonld || [])];
  if (opts.breadcrumbs) graph.push(breadcrumbLd(opts.breadcrumbs));
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(opts.title)}</title>
<meta name="description" content="${esc(opts.description)}">
${opts.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#253D2C">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/fraunces-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<meta property="og:type" content="${opts.ogType || "website"}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:title" content="${esc(opts.title)}">
<meta property="og:description" content="${esc(opts.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
${opts.modified ? `<meta property="article:modified_time" content="${opts.modified}">` : ""}
<meta name="twitter:card" content="summary_large_image">
<style>${CSS}</style>
<script type="application/ld+json">${ld}</script>
</head>
<body>
${header(opts.path, opts.categories || [])}
<main id="inhalt">
${opts.body}
</main>
${footer(opts.categories || [])}
</body>
</html>
`;
}
