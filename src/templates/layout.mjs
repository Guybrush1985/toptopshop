import { site, areas } from "../site.mjs";
import { esc, absUrl } from "./util.mjs";
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

function header(current) {
  const links = [
    ...areas.map((a) => ({ href: `/${a.slug}/`, label: a.short })),
    { href: "/methodik/", label: "So wählen wir aus", cls: "opt" },
  ];
  return `<a class="skip" href="#inhalt">Zum Inhalt springen</a>
<div class="ad-note">Werbung: Links mit * sind Affiliate-Links (Amazon und Partnershops). Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</div>
<header class="top"><div class="wrap">
  <a class="logo" href="/" aria-label="toptop.shop – Startseite">${logoSvg({ height: 46 })}</a>
  <nav class="nav" aria-label="Hauptnavigation">${links
    .map(
      (l) =>
        `<a href="${l.href}"${l.cls ? ` class="${l.cls}"` : ""}${current && current.startsWith(l.href) ? ' aria-current="page"' : ""}>${esc(l.label)}</a>`
    )
    .join("")}</nav>
</div></header>`;
}

function footer(categories) {
  const o = site.organization;
  return `<footer class="foot"><div class="wrap">
  <div class="cols">
    <div>
      <a class="logo" href="/" aria-label="toptop.shop – Startseite">${logoSvg({ height: 54 })}</a>
      <p>${esc(site.claim)} Wir reduzieren jede Kategorie auf drei Empfehlungen – und erklären ausführlich, warum.</p>
    </div>
    <div>
      <h2>Ratgeber</h2>
      <ul>${categories
        .map((c) => `<li><a href="/${c.slug}/">${esc(c.navLabel)}</a></li>`)
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
    <span>* Affiliate-Link: Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Bei Links zu weiteren Partnershops (über das Awin-Netzwerk) erhalten wir ebenfalls eine Provision. Für dich ändert sich der Preis nicht. Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner verbundenen Unternehmen.</span>
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
${header(opts.path)}
<main id="inhalt">
${opts.body}
</main>
${footer(opts.categories || [])}
</body>
</html>
`;
}
