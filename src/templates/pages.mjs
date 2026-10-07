import { site, areas } from "../site.mjs";
import { page, crumbs } from "./layout.mjs";
import { esc, md, absUrl, dateDe } from "./util.mjs";

const pad = (n) => String(n).padStart(2, "0");

function guideCard(cat) {
  return `<a class="guide" href="/${cat.slug}/">
  <small>Top 3 · aktualisiert ${dateDe(cat.updated)}</small>
  <h3>${esc(cat.h1)}</h3>
  <ol>${cat.products.map((p) => `<li><span>${pad(p.rank)}</span><div><b>${esc(p.name)}</b><br><small>${esc(p.label)}</small></div></li>`).join("")}</ol>
  <span class="more">Zur Empfehlung →</span>
</a>`;
}

function collectionLd(path, name, cats) {
  return [
    {
      "@type": "CollectionPage",
      "@id": `${absUrl(path)}#seite`,
      url: absUrl(path),
      name,
      inLanguage: site.lang,
      isPartOf: { "@id": `${site.url}/#website` },
    },
    {
      "@type": "ItemList",
      name,
      itemListElement: cats.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(`/${c.slug}/`), name: c.h1 })),
    },
  ];
}

// ---------------------------------------------------------------------------

export function homePage(cats) {
  const body = `
<section class="hero home-hero" aria-labelledby="h1">
  <div class="wrap">
    <span class="eyebrow">Kuratierte Produktempfehlungen</span>
    <h1 id="h1">Die Abkürzung zu den <em>besten Produkten.</em></h1>
    <p class="lead">Wir vergleichen die relevanten Produkte einer Kategorie und reduzieren sie auf drei Empfehlungen: die beste Gesamtwahl, das beste Preis-Leistungs-Verhältnis und die Wahl ohne Kompromisse. Mit nachvollziehbarer Begründung – und ausführlicher Beratung für alle, die es genau wissen wollen.</p>
    <a class="cta" href="#ratgeber">Zu den Empfehlungen</a>
  </div>
</section>
<div class="wrap principle" role="list">
  <div role="listitem"><b>01</b><h2>Wir vergleichen</h2><p>Herstellerangaben, unabhängige Tests, Inhaltsstoffe und Erfahrungen vieler Käufer.</p></div>
  <div role="listitem"><b>02</b><h2>Wir reduzieren auf drei</h2><p>Statt hunderter Produkte zeigen wir nur die drei, die sich für die meisten lohnen.</p></div>
  <div role="listitem"><b>03</b><h2>Wir halten es aktuell</h2><p>Jede Empfehlung trägt ein Aktualisierungsdatum und wird regelmäßig überprüft.</p></div>
</div>
<section class="section" id="ratgeber" aria-labelledby="ratgeber-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">Aktuelle Ratgeber</span><h2 id="ratgeber-h">Die Top 3 – auf einen Blick</h2><p>In wenigen Sekunden sehen, was sich lohnt. Die ausführliche Beratung folgt auf jeder Seite.</p></div>
    <div class="guides">${cats.map(guideCard).join("")}</div>
  </div>
</section>
<section class="section cmp" aria-labelledby="bereiche-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">Bereiche</span><h2 id="bereiche-h">Kategorien</h2></div>
    <div class="areas">
      ${areas
        .map(
          (a) => `<a class="area" href="/${a.slug}/"><small>${cats.filter((c) => c.area === a.slug).length} Ratgeber</small><h3>${esc(a.name)}</h3><p>${esc(a.intro)}</p><span>Bereich öffnen →</span></a>`
        )
        .join("")}
      <div class="area soon"><small>In Vorbereitung</small><h3>Weitere Kategorien</h3><p>Neue Bereiche entstehen nach demselben Prinzip: drei Empfehlungen, ausführlich begründet.</p></div>
    </div>
  </div>
</section>
<section class="section" aria-labelledby="warum-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">Transparenz</span><h2 id="warum-h">Wie unsere Empfehlungen entstehen</h2>
      <p>Wir testen nicht im Labor, sondern werten aus, was es bereits gibt: unabhängige Testergebnisse, Herstellerangaben, Inhaltsstoffe und Kundenerfahrungen. Jede Kategorie hat eigene, gewichtete Bewertungskriterien – sichtbar auf jeder Seite. Wir finanzieren uns über Affiliate-Provisionen; die Reihenfolge der Empfehlungen ist davon unabhängig.</p>
    </div>
    <a class="cta" href="/methodik/">So wählen wir aus</a>
  </div>
</section>`;

  return page({
    path: "/",
    title: `${site.name} – ${site.claim}`,
    description: site.description,
    body,
    jsonld: collectionLd("/", "Aktuelle Top-3-Ratgeber auf toptop.shop", cats),
    categories: cats,
  });
}

// ---------------------------------------------------------------------------

export function areaPage(area, cats, all) {
  const trail = [
    { name: "Startseite", path: "/" },
    { name: area.short, path: `/${area.slug}/` },
  ];
  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    ${crumbs(trail)}
    <span class="eyebrow">Bereich</span>
    <h1 id="h1">${esc(area.name)}</h1>
    <p class="lead">${esc(area.intro)}</p>
  </div>
</section>
<section class="section" aria-labelledby="g-h">
  <div class="wrap">
    <div class="shead"><span class="kicker">${cats.length} Ratgeber</span><h2 id="g-h">Unsere Empfehlungen</h2></div>
    <div class="guides">${cats.map(guideCard).join("")}</div>
  </div>
</section>
<div class="mag"><div class="wrap"><div class="prose">
${area.article}
</div></div></div>`;

  return page({
    path: `/${area.slug}/`,
    title: area.metaTitle,
    description: area.metaDescription,
    body,
    breadcrumbs: trail,
    jsonld: collectionLd(`/${area.slug}/`, area.name, cats),
    categories: all,
  });
}

// ---------------------------------------------------------------------------

export function methodPage(all) {
  const trail = [
    { name: "Startseite", path: "/" },
    { name: "So wählen wir aus", path: "/methodik/" },
  ];
  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    ${crumbs(trail)}
    <span class="eyebrow">Transparenz</span>
    <h1 id="h1">So wählen wir aus</h1>
    <p class="lead">Wie aus vielen Produkten drei Empfehlungen werden – und was unsere Bewertungen bedeuten.</p>
  </div>
</section>
<div class="mag"><div class="wrap"><div class="prose">
  <h2>Unser Prinzip: drei statt dreihundert</h2>
  <p class="quick">Für jede Kategorie empfehlen wir genau drei Produkte: die beste Gesamtwahl, das beste Preis-Leistungs-Verhältnis und eine Premium- oder Spezialwahl. So findest du in Sekunden das passende Produkt.</p>
  <p>Die meisten Menschen brauchen keine Liste mit fünfzig Produkten, sondern eine klare Empfehlung mit nachvollziehbarer Begründung. Deshalb treffen wir eine Vorauswahl und erklären ausführlich, warum genau diese drei Produkte es auf die Liste geschafft haben – und für wen sie nicht die richtige Wahl sind.</p>

  <h2>Woher unsere Informationen stammen</h2>
  <ul>
    <li><strong>Unabhängige Tests:</strong> Ergebnisse von Prüfinstituten wie Stiftung Warentest und Öko-Test, sofern verfügbar und aktuell.</li>
    <li><strong>Herstellerangaben:</strong> Technische Daten, Inhaltsstoffe und Anwendungshinweise – als solche gekennzeichnet.</li>
    <li><strong>Inhaltsstoffe:</strong> Bewertung der Rezepturen anhand öffentlich verfügbarer Inhaltsstofflisten.</li>
    <li><strong>Kundenerfahrungen:</strong> Auswertung vieler Bewertungen, um wiederkehrende Stärken und Schwächen zu erkennen.</li>
  </ul>
  <aside class="callout"><p class="ct">Wichtig</p><p>Wir führen <strong>keine eigenen Labortests</strong> durch und behaupten das auch nicht. Unsere Bewertungen sind redaktionelle Einschätzungen auf Basis der genannten Quellen.</p></aside>

  <h2>Wie die Bewertung entsteht</h2>
  <p>Jede Kategorie hat vier eigene, gewichtete Kriterien – etwa Sonnenschutz, Textur und Preis-Leistung bei Sonnenölen. Jedes Produkt wird in jedem Kriterium auf einer Skala von 0 bis 10 eingeordnet. Die Gesamtnote ist der gewichtete Mittelwert. Kriterien und Gewichtung stehen auf jeder Ratgeberseite unter „So ist diese Empfehlung entstanden“.</p>
  <p>Die Platzierung folgt der Rolle, nicht nur der Note: Die Preis-Leistungs-Wahl kann eine etwas niedrigere Gesamtnote haben als die Premium-Wahl – sie ist trotzdem für viele die bessere Entscheidung.</p>

  <h2>Unabhängigkeit und Finanzierung</h2>
  <p>toptop.shop finanziert sich über Affiliate-Provisionen: Kaufst du über einen mit * gekennzeichneten Link, erhalten wir von Amazon oder dem jeweiligen Partnershop (vermittelt über das Awin-Netzwerk) eine Provision. Für dich ändert sich der Preis nicht. Hersteller können sich keine Platzierung kaufen, und die Reihenfolge der Empfehlungen hängt nicht von der Höhe einer Provision ab. Preise zeigen wir bewusst nicht fest an, weil sie sich laufend ändern – maßgeblich ist der aktuelle Preis beim jeweiligen Händler.</p>

  <h2>Aktualität</h2>
  <p>Jede Ratgeberseite zeigt, wann sie zuletzt aktualisiert wurde. Wir überprüfen unsere Empfehlungen regelmäßig und passen sie an, wenn neue Testergebnisse erscheinen, Produkte vom Markt verschwinden oder sich Rezepturen ändern.</p>

  <h2>Gesundheitsthemen</h2>
  <p>Gerade bei Themen wie Sonne und Haut gilt: Unsere Inhalte dienen der allgemeinen Information und ersetzen keine ärztliche oder dermatologische Beratung. Wir empfehlen für das Sonnenbad ausschließlich Produkte mit Lichtschutzfaktor.</p>

  <h2>Kontakt</h2>
  <p>Fehler entdeckt oder einen Produktvorschlag? Schreib uns an <a href="mailto:${site.organization.email}">${site.organization.email}</a>.</p>
</div></div></div>`;

  return page({
    path: "/methodik/",
    title: "So wählen wir aus – Methodik | toptop.shop",
    description: "Wie toptop.shop Produkte auswählt und bewertet: Quellen, gewichtete Kriterien, Unabhängigkeit, Finanzierung und Aktualisierung.",
    body,
    breadcrumbs: trail,
    jsonld: [{ "@type": "AboutPage", "@id": `${absUrl("/methodik/")}#seite`, url: absUrl("/methodik/"), name: "So wählen wir aus", inLanguage: site.lang }],
    categories: all,
  });
}

// ---------------------------------------------------------------------------

export function legalPage({ path, name, title, description, html }, all) {
  const trail = [
    { name: "Startseite", path: "/" },
    { name, path },
  ];
  const body = `<div class="legal"><div class="wrap">${crumbs(trail)}<div class="prose">${html}</div></div></div>`;
  return page({ path, title, description, body, breadcrumbs: trail, noindex: true, categories: all });
}

export function notFoundPage(all) {
  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="wrap">
    <span class="eyebrow">Fehler 404</span>
    <h1 id="h1">Diese Seite gibt es nicht.</h1>
    <p class="lead">Vielleicht findest du hier, was du suchst:</p>
    <a class="cta" href="/">Zur Startseite</a>
  </div>
</section>
<section class="section" aria-labelledby="r-h"><div class="wrap"><div class="shead"><h2 id="r-h">Unsere Ratgeber</h2></div><div class="guides">${all.map(guideCard).join("")}</div></div></section>`;
  return page({ path: "/404.html", title: "Seite nicht gefunden | toptop.shop", description: "Diese Seite existiert nicht.", body, noindex: true, categories: all });
}
