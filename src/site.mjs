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
  },
];
