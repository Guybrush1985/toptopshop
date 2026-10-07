// Zentrale Konfiguration für toptop.shop.
// Gilt für alle Seiten; Kategorien liegen in src/content/categories/.

export const site = {
  name: "toptop.shop",
  url: "https://toptop.shop",
  lang: "de-DE",
  locale: "de_DE",
  claim: "Die Abkürzung zu den besten Produkten.",
  description:
    "toptop.shop reduziert jede Kategorie auf die drei besten Produkte – mit nachvollziehbarer Begründung, ausführlicher Kaufberatung und regelmäßiger Aktualisierung.",

  amazon: {
    domain: "www.amazon.de",
    partnerTag: "toptopshop-21",
  },

  // Awin-Partnerprogramme. publisherId = eigene Awin-Publisher-ID (awinaffid).
  // Ohne publisherId verlinken Produkte direkt auf den Shop (ohne Provision).
  awin: {
    publisherId: "3117711",
    merchants: {
      radwelt: { name: "RADWELT-Shop", mid: 15088, domain: "radwelt-shop.de" },
      fahrradlagerverkauf: { name: "Fahrradlagerverkauf", mid: 39644, domain: "fahrradlagerverkauf.com" },
      fahrrad24: { name: "fahrrad24", mid: 13691, domain: "fahrrad24.de" },
    },
  },

  organization: {
    name: "TanMeOn GmbH",
    street: "Deichstraße 8",
    zip: "25826",
    city: "Sankt Peter-Ording",
    country: "DE",
    email: "info@tanmeon.de",
    phone: "+49 40 46993066",
    phoneDisplay: "040 46993066",
    managingDirector: "Jan Rosenbrock",
    register: "Amtsgericht Flensburg, HRB 12499",
    vatId: "DE 284 630 274",
  },

  // Redaktion, die in Artikeln und strukturierten Daten als Autor erscheint.
  editorial: {
    name: "Redaktion toptop.shop",
  },
};

// Bereiche (oberste Ebene der Informationsarchitektur). Jede Kategorie-Datei
// verweist über `area` auf einen dieser Bereiche.
export const areas = [
  {
    slug: "braeunung",
    name: "Bräunung & Sonne",
    short: "Bräunung",
    intro:
      "Selbstbräuner, Sonnenöle mit Lichtschutzfaktor und After-Sun-Pflege: Für jedes Thema zeigen wir die drei Produkte, die sich für die meisten Menschen lohnen – und erklären, worauf es ankommt.",
    metaTitle: "Bräunung & Sonne: Die besten Produkte im Überblick",
    metaDescription:
      "Die besten Selbstbräuner, Bräunungsöle mit LSF und After-Sun-Produkte – je Kategorie auf drei Empfehlungen reduziert, mit Kaufberatung und FAQ.",
    // Redaktioneller Text unter den Ratgeber-Kacheln (HTML).
    article: `
  <h2>Schön braun – mit Verstand</h2>
  <p class="quick">Bräune entsteht entweder durch UV-Strahlung oder durch Selbstbräuner. Wer in die Sonne geht, braucht ausreichenden Lichtschutz und gute Pflege danach; wer UV-Strahlung meiden will, setzt auf Selbstbräuner.</p>
  <p>Die Haut bildet unter UV-Strahlung den Farbstoff Melanin, um sich zu schützen. Diese natürliche Bräune braucht Zeit – und ein Sonnenbrand bringt sie nicht schneller, sondern schadet der Haut dauerhaft. Deshalb empfehlen wir für das Sonnenbad ausschließlich Produkte mit Lichtschutzfaktor und raten zu einer langsamen Steigerung.</p>
  <p>Selbstbräuner funktionieren völlig anders: Der Wirkstoff DHA färbt die oberste Hautschicht, ganz ohne UV-Strahlung. Das Ergebnis hält einige Tage und lässt sich gezielt steuern – schützt aber nicht vor der Sonne.</p>
  <aside class="callout warn"><p class="ct">Hinweis</p><p>UV-Strahlung – durch die Sonne wie durch Solarien – kann die Haut schädigen und das Hautkrebsrisiko erhöhen. In Deutschland ist die Nutzung von Solarien für Minderjährige gesetzlich verboten. Bei Fragen zu deiner Haut hilft eine Hautärztin oder ein Hautarzt.</p></aside>`,
  },
  {
    slug: "lastenraeder",
    name: "Lastenräder für Familien",
    short: "Lastenräder",
    intro:
      "E-Lastenräder für den Kindertransport – sortiert nach der Zahl der Kinder. Für ein, zwei oder drei Kinder zeigen wir die drei Modelle, die sich am meisten lohnen, und erklären Bauformen, Sicherheit und Rechtslage.",
    metaTitle: "Lastenräder für Kinder: Die besten Modelle für 1, 2 und 3 Kinder",
    metaDescription:
      "Die besten E-Lastenräder für den Kindertransport – je drei Empfehlungen für ein, zwei und drei Kinder, mit Kaufberatung, Sicherheit und Rechtslage.",
    article: `
  <h2>Das richtige Lastenrad für deine Familie</h2>
  <p class="quick">Die wichtigste Frage beim Lastenradkauf ist: Wie viele Kinder sollen mitfahren – heute und in ein paar Jahren? Danach richten sich Bauform, Zuladung und Preis.</p>
  <p>Für ein Kind reichen meist kompakte Longtails, die kaum größer als ein normales Fahrrad sind. Für zwei Kinder kommen Frontlader mit Sitzbank und Regenverdeck oder längere Longtails infrage. Für drei Kinder braucht es eine große Box mit ausdrücklicher Herstellerfreigabe oder ein Dreirad.</p>
  <p>Wir empfehlen ausschließlich Räder, die bei Amazon oder bei Fahrradhändlern aus dem Awin-Partnernetzwerk erhältlich sind, und berücksichtigen die Sicherheitshinweise von Stiftung Warentest, ADAC und DGUV.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Nimm nur Kinder mit, die selbstständig sitzen und den Kopf halten können. Jedes Kind braucht einen eigenen Sitzplatz mit Gurt und einen Helm. Wer Kinder unter sieben Jahren transportiert, muss mindestens 16 Jahre alt sein.</p></aside>`,
  },
];
