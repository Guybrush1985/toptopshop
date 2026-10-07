import { site, areas } from "../site.mjs";
import { page, crumbs } from "./layout.mjs";
import { esc, md, productUrl, shopName, dateDe, scoreDe, absUrl, PRICE_TIERS } from "./util.mjs";
import { productVisual } from "./visuals.mjs";
import { ridersBadge } from "./icons.mjs";

const pad = (n) => String(n).padStart(2, "0");

/** Kleiner Kauf-Button für Tabellen, Grafiken usw. */
function buy(p, label = "Jetzt kaufen") {
  return `<a class="buy" href="${productUrl(p)}" target="_blank" rel="sponsored nofollow noopener">${esc(label)}*</a>`;
}

/** Ersetzt Platzhalter (produkt:N) in Texten durch den Affiliate-Link des Produkts. */
function productLinks(cat, text) {
  return text.replace(/\(produkt:(\d)\)/g, (_, n) => {
    const p = cat.products.find((x) => x.rank === Number(n));
    if (!p) throw new Error(`${cat.slug}: produkt:${n} existiert nicht`);
    return `(${productUrl(p)})`;
  });
}
const strip = (s) => String(s).replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

// ---------------------------------------------------------------------------
// Bausteine
// ---------------------------------------------------------------------------

function glance(cat) {
  return `<div class="glance"><div class="wrap"><ol>${cat.products
    .map(
      (p) => `<li><a href="#platz-${p.rank}"><span class="n">${pad(p.rank)}</span><span><small>${esc(p.label)}</small><b>${esc(p.name)}</b></span></a></li>`
    )
    .join("")}</ol></div></div>`;
}

function pick(cat, p) {
  const tier = (cat.priceTiers || PRICE_TIERS)[p.priceTier];
  const media = p.image
    ? `<img src="${p.image.src}" alt="${esc(p.image.alt)}" width="${p.image.width}" height="${p.image.height}" ${p.rank === 1 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`
    : `${productVisual(p, `${cat.slug}-${p.rank}`)}<figcaption>Symbolbild – ${esc(p.name)}</figcaption>`;
  return `<article class="pick" id="platz-${p.rank}" aria-labelledby="p${p.rank}-name">
  <figure class="pick-media">${media}</figure>
  <div>
    <div class="rankline"><span class="rank">${pad(p.rank)}</span><span class="tag">${esc(p.label)}</span></div>
    <h3 id="p${p.rank}-name">${esc(p.name)}</h3>
    <p class="brand">${esc(p.brand)}${p.variant ? ` · ${esc(p.variant)}` : ""}</p>
    <p class="verdict">${md(p.verdict)}</p>
    <ul class="facts">
      <li class="score"><small>Bewertung</small><b>${scoreDe(p.score)}</b><span>von 10</span></li>
      <li><small>Preisklasse</small><b>${tier.symbol}</b><span>${tier.label}</span></li>
      <li><small>Ideal für</small><b>${esc(p.bestFor)}</b></li>
    </ul>
    <ul class="feat">${p.features.map((f) => `<li>${md(f)}</li>`).join("")}</ul>
    <div class="pc">
      <div class="pro"><h4>Vorteile</h4><ul>${p.pros.map((x) => `<li>${md(x)}</li>`).join("")}</ul></div>
      <div class="con"><h4>Nachteile</h4><ul>${p.cons.map((x) => `<li>${md(x)}</li>`).join("")}</ul></div>
    </div>
    <a class="cta" href="${productUrl(p)}" target="_blank" rel="sponsored nofollow noopener">Aktuellen Preis bei ${esc(shopName(p))} ansehen*</a>
    <p class="fine">Preis und Verfügbarkeit ändern sich laufend – maßgeblich ist die Angabe bei ${esc(shopName(p))}.</p>
  </div>
</article>`;
}

function comparison(cat) {
  const head = cat.products
    .map((p) => `<th scope="col"><small>${pad(p.rank)} · ${esc(p.label)}</small>${esc(p.name)}</th>`)
    .join("");
  const rows = [
    ["Bewertung", cat.products.map((p) => `<b>${scoreDe(p.score)}</b> / 10`)],
    ...cat.comparison.map((r) => [r.label, cat.products.map((p) => md(p.specs[r.key] ?? "–"))]),
    ["Preisklasse", cat.products.map((p) => { const t = (cat.priceTiers || PRICE_TIERS)[p.priceTier]; return `${t.symbol} (${t.label})`; })],
    ["Ideal für", cat.products.map((p) => esc(p.bestFor))],
    ["Kaufen", cat.products.map((p) => buy(p))],
  ];
  return `<section class="section cmp" id="vergleich" aria-labelledby="vergleich-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">Vergleich</span><h2 id="vergleich-h">${esc(cat.comparisonTitle)}</h2><p>Die wichtigsten Unterschiede auf einen Blick.</p></div>
    <div class="tablewrap" role="region" aria-label="Vergleichstabelle" tabindex="0"><table>
      <thead><tr><th scope="col">Kriterium</th>${head}</tr></thead>
      <tbody>${rows
        .map(([label, cells]) => `<tr><th scope="row">${esc(label)}</th>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`)
        .join("")}</tbody>
    </table></div>
  </div>
</section>`;
}

function figure(cat, key) {
  const f = cat.figures[key];
  const links =
    f.kind === "scores"
      ? `<ul class="figbuy" aria-label="Produkte aus der Grafik">${cat.products
          .map((p) => `<li><span><small>${pad(p.rank)} · ${scoreDe(p.score)}</small>${esc(p.name)}</span>${buy(p)}</li>`)
          .join("")}</ul>`
      : "";
  return `<figure class="fig"><img src="/${cat.slug}/${f.file}" alt="${esc(f.alt)}" width="${f.width}" height="${f.height}" loading="lazy" decoding="async"><figcaption>${md(f.caption)}</figcaption>${links}</figure>`;
}

/** Markdown mit aufgelösten Produktlinks (produkt:N). */
const mdp = (cat, text) => md(productLinks(cat, text));

function block(cat, b) {
  if (b.p) return `<p>${mdp(cat, b.p)}</p>`;
  if (b.first) return `<p class="first">${mdp(cat, b.first)}</p>`;
  if (b.quick) return `<p class="quick">${mdp(cat, b.quick)}</p>`;
  if (b.h3) return `<h3${b.id ? ` id="${b.id}"` : ""}>${esc(b.h3)}</h3>`;
  if (b.list) {
    const tag = b.ordered ? "ol" : "ul";
    return `<${tag}>${b.list.map((li) => `<li>${mdp(cat, li)}</li>`).join("")}</${tag}>`;
  }
  if (b.quote) return `<blockquote class="quote"><p>${mdp(cat, b.quote)}</p></blockquote>`;
  if (b.callout)
    return `<aside class="callout${b.callout.warn ? " warn" : ""}"><p class="ct">${esc(b.callout.title)}</p><p>${mdp(cat, b.callout.text)}</p></aside>`;
  if (b.facts)
    return `<div class="facts-grid">${b.facts.map((f) => `<div><b>${esc(f.value)}</b><span>${mdp(cat, f.label)}</span></div>`).join("")}</div>`;
  if (b.table)
    return `<div class="tablewrap" role="region" aria-label="${esc(b.table.caption)}" tabindex="0"><table><caption class="sr">${esc(b.table.caption)}</caption><thead><tr>${b.table.head
      .map((h) => `<th scope="col">${esc(h)}</th>`)
      .join("")}</tr></thead><tbody>${b.table.rows
      .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${mdp(cat, c)}</th>` : `<td>${mdp(cat, c)}</td>`)).join("")}</tr>`)
      .join("")}</tbody></table></div>`;
  if (b.cards)
    return `<div class="cards">${b.cards
      .map((c) => `<div><h3>${esc(c.title)}</h3><p>${mdp(cat, c.text)}</p>${c.link ? `<a href="${c.link.href}">${esc(c.link.label)} →</a>` : ""}</div>`)
      .join("")}</div>`;
  if (b.figure) return figure(cat, b.figure);
  throw new Error(`Unbekannter Block in ${cat.slug}: ${JSON.stringify(b).slice(0, 80)}`);
}

function sections(cat, list) {
  return list
    .map((s) => `<h2 id="${s.id}">${esc(s.h2)}</h2>\n${s.blocks.map((b) => block(cat, b)).join("\n")}`)
    .join("\n");
}

function top5(cat) {
  const t = cat.top5;
  return `<section class="top5" id="${t.id}" aria-labelledby="${t.id}-h">
  <span class="kicker">Top 5</span>
  <h2 id="${t.id}-h">${esc(t.h2)}</h2>
  <p>${md(t.intro)}</p>
  <ol>${t.items
    .map(
      (it, i) => `<li>
      <span class="n">${i + 1}</span>
      <div><span class="for">${esc(it.for)}</span><h3>${esc(it.name)}</h3><p>${md(it.text)}</p></div>
      ${
        it.query || it.asin || it.shop
          ? `<a class="go" href="${productUrl(it)}" target="_blank" rel="sponsored nofollow noopener">Bei ${esc(shopName(it))}*</a>`
          : `<span class="where">${esc(it.where)}</span>`
      }
    </li>`
    )
    .join("")}</ol>
</section>`;
}

function faq(cat) {
  return `<section class="section" id="faq" aria-labelledby="faq-h"><div class="wrap">
  <div class="faq">
    <div class="shead"><span class="kicker">FAQ</span><h2 id="faq-h">Häufige Fragen</h2></div>
    ${cat.faqs
      .map(
        (f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}</summary><div class="a">${[]
          .concat(f.a)
          .map((p) => `<p>${md(p)}</p>`)
          .join("")}</div></details>`
      )
      .join("\n")}
  </div>
  <aside class="method" aria-labelledby="methode-h">
    <h2 id="methode-h">So ist diese Empfehlung entstanden</h2>
    <p>${md(cat.method)}</p>
    <ul>${cat.criteria.map((c) => `<li><strong>${esc(c.label)}</strong> (${Math.round(c.weight * 100)} %): ${esc(c.description)}</li>`).join("")}</ul>
    <p>Wir führen keine eigenen Labortests durch. Mehr dazu unter <a href="/methodik/">So wählen wir aus</a>.</p>
  </aside>
  ${
    cat.sources?.length
      ? `<div class="sources"><h2>Quellen &amp; weiterführende Informationen</h2><ul>${cat.sources
          .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
          .join("")}</ul></div>`
      : ""
  }
</div></section>`;
}

function related(cat, all) {
  const items = cat.related.map((r) => {
    if (r.slug) {
      const target = all.find((c) => c.slug === r.slug);
      if (!target) throw new Error(`${cat.slug}: verwandte Kategorie "${r.slug}" existiert nicht`);
      return { href: `/${target.slug}/`, kicker: "Ratgeber", title: target.navLabel, text: r.text };
    }
    const area = areas.find((a) => a.slug === r.area);
    if (!area) throw new Error(`${cat.slug}: Bereich "${r.area}" existiert nicht`);
    return { href: `/${area.slug}/`, kicker: "Bereich", title: area.name, text: r.text };
  });
  return `<section class="related" aria-labelledby="rel-h"><div class="wrap">
  <div class="shead"><span class="kicker">Weiterlesen</span><h2 id="rel-h">Passt dazu</h2></div>
  <div class="rel">${items
    .map((i) => `<a href="${i.href}"><small>${i.kicker}</small><b>${esc(i.title)}</b><span>${esc(i.text)}</span></a>`)
    .join("")}</div>
</div></section>`;
}

// ---------------------------------------------------------------------------
// Strukturierte Daten
// ---------------------------------------------------------------------------

function jsonld(cat) {
  const url = absUrl(`/${cat.slug}/`);
  return [
    {
      "@type": "Article",
      "@id": `${url}#artikel`,
      headline: cat.h1,
      description: cat.metaDescription,
      inLanguage: site.lang,
      datePublished: cat.published,
      dateModified: cat.updated,
      mainEntityOfPage: url,
      image: absUrl(`/og/${cat.slug}.png`),
      author: { "@type": "Organization", name: site.editorial.name, url: absUrl("/methodik/") },
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#top3`,
      name: cat.h1,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: cat.products.length,
      itemListElement: cat.products.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        url: `${url}#platz-${p.rank}`,
        item: {
          "@type": "Product",
          name: p.name,
          brand: { "@type": "Brand", name: p.brand },
          description: strip(p.verdict),
          category: cat.navLabel,
          review: {
            "@type": "Review",
            name: `${p.label}: ${p.name}`,
            author: { "@type": "Organization", name: site.editorial.name },
            datePublished: cat.updated,
            reviewBody: strip(p.verdict),
            positiveNotes: { "@type": "ItemList", itemListElement: p.pros.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: strip(x) })) },
            negativeNotes: { "@type": "ItemList", itemListElement: p.cons.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: strip(x) })) },
            reviewRating: { "@type": "Rating", ratingValue: p.score, bestRating: 10, worstRating: 0 },
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: cat.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: [].concat(f.a).map(strip).join(" ") },
      })),
    },
  ];
}

// ---------------------------------------------------------------------------
// Seite
// ---------------------------------------------------------------------------

export function categoryPage(cat, all, readingMinutes) {
  const area = areas.find((a) => a.slug === cat.area);
  const trail = [
    { name: "Startseite", path: "/" },
    { name: area.short, path: `/${area.slug}/` },
    { name: cat.navLabel, path: `/${cat.slug}/` },
  ];

  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    ${crumbs(trail)}
    <span class="eyebrow">${esc(cat.eyebrow)}</span>
    ${cat.riders ? `<div class="hero-riders">${ridersBadge(cat.riders, { tone: "dark", height: 40 })}</div>` : ""}
    <h1 id="h1">${esc(cat.h1)}</h1>
    <p class="lead">${md(cat.lead)}</p>
    <div class="meta">
      <span>Zuletzt aktualisiert: <time datetime="${cat.updated}">${dateDe(cat.updated)}</time></span>
      <span>${cat.products.length} Empfehlungen</span>
      <span>${readingMinutes} Min. Lesezeit für die ganze Beratung</span>
    </div>
    <div class="answer"><span class="k">Kurz gesagt</span><p>${md(productLinks(cat, cat.answer))}</p></div>
  </div>
</section>
${glance(cat)}
<section class="section" id="top3" aria-labelledby="top3-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">Top 3</span><h2 id="top3-h">${esc(cat.top3Title)}</h2><p>${md(cat.top3Intro)}</p></div>
    <div class="picks">${cat.products.map((p) => pick(cat, p)).join("\n")}</div>
  </div>
</section>
${comparison(cat)}
<div class="mag">
  <header class="mag-intro wrap">
    <span class="kicker">Die ausführliche Beratung</span>
    <h2>${esc(cat.editorial.title)}</h2>
    <p>${md(cat.editorial.intro)}</p>
  </header>
  <article class="wrap">
    <div class="prose">${sections(cat, cat.editorial.sections)}</div>
    ${top5(cat)}
    <div class="prose">${sections(cat, cat.guide.sections)}</div>
  </article>
</div>
${faq(cat)}
${related(cat, all)}`;

  return page({
    path: `/${cat.slug}/`,
    title: cat.metaTitle,
    description: cat.metaDescription,
    body,
    breadcrumbs: trail,
    jsonld: jsonld(cat),
    ogType: "article",
    ogImage: `/og/${cat.slug}.png`,
    modified: cat.updated,
    categories: all,
  });
}
