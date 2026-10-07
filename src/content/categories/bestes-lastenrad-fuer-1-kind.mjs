// Kategorie: Lastenrad für 1 Kind
// Aufbau siehe src/content/README.md (Content-Modell).

export const BIKE_PRICE_TIERS = {
  1: { symbol: "€", label: "bis 5.000 €" },
  2: { symbol: "€€", label: "5.000–6.500 €" },
  3: { symbol: "€€€", label: "über 6.500 €" },
};

export const BIKE_CRITERIA = [
  { key: "kinder", label: "Kindertransport & Sicherheit", weight: 0.35, description: "Sitzplätze, Gurte, Freigaben des Herstellers, Bremsen und Schutz bei Stürzen." },
  { key: "fahren", label: "Fahrverhalten & Antrieb", weight: 0.25, description: "Handling, Motorleistung bei Last, Akkukapazität und Schaltung." },
  { key: "alltag", label: "Alltag & Ausstattung", weight: 0.2, description: "Größe, Gewicht, Abstellen, Wetterschutz und mitgelieferte Ausstattung." },
  { key: "preis", label: "Preis-Leistung", weight: 0.2, description: "Preis im Verhältnis zu Ausstattung, Qualität und Einsatzbereich." },
];

export default {
  slug: "bestes-lastenrad-fuer-1-kind",
  area: "lastenraeder",
  navLabel: "Lastenrad für 1 Kind",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Lastenräder für 1 Kind 2026 – Vergleich & Ratgeber",
  metaDescription:
    "Die 3 besten E-Lastenräder für ein Kind 2026: kompakte Longtails im Vergleich – plus Tipps zu Alter, Babyschale, Rechtslage und Modellen, die mitwachsen.",

  riders: { adults: 1, kids: 1, label: "1 Erwachsener + 1 Kind" },
  eyebrow: "Lastenräder · 1 Kind",
  h1: "Die 3 besten Lastenräder für 1 Kind 2026",
  lead:
    "Für ein Kind brauchst du kein riesiges Transportrad. Kompakte Longtails sind wendiger, leichter und passen in jeden Fahrradkeller. Wir zeigen die drei besten.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Urban Arrow Breeze**](produkt:1), weil es als kompaktes Longtail mit kräftigem Cargo-Antrieb und nur rund 35 kg Gewicht den Alltag mit einem Kind am leichtesten macht. Am günstigsten ist das [**Tern Quick Haul P5i**](produkt:2); die Premium-Wahl ist das [**Riese & Müller Multitinker2 vario**](produkt:3).",

  top3Title: "Unsere Top 3 Lastenräder für ein Kind",
  top3Intro:
    "Alle drei sind kompakte Longtails: Das Kind sitzt hinten auf einem verlängerten Gepäckträger, das Rad bleibt kaum länger als ein normales Fahrrad.",
  comparisonTitle: "Die 3 besten Lastenräder für 1 Kind im Vergleich",

  priceTiers: BIKE_PRICE_TIERS,
  criteria: BIKE_CRITERIA,

  method:
    "Grundlage sind Herstellerangaben (Zuladung, Freigaben für den Kindertransport, Antrieb), Angaben der Händler, Fachtests aus Fahrradmagazinen sowie die Hinweise von Stiftung Warentest, ADAC und DGUV zum Kindertransport. Wir empfehlen ausschließlich Modelle, die bei Amazon oder bei Händlern aus dem Awin-Partnernetzwerk erhältlich sind. Jedes Rad wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Urban Arrow Breeze",
      brand: "Urban Arrow",
      variant: "545 Wh, Modell 2026",
      visual: { kind: "longtail", tone: "forest" },
      priceTier: 2,
      ratings: { kinder: 8.5, fahren: 9.0, alltag: 9.5, preis: 7.5 },
      bestFor: "Stadt, enge Keller, ein Kind",
      verdict:
        "Die beste Wahl für die meisten Familien mit einem Kind: kompaktes Longtail mit Bosch-Cargo-Antrieb, rund 35 kg leicht und trotzdem bis zu 80 kg auf dem Heck.",
      features: [
        "Bosch Cargo Line Mittelmotor mit 85 Nm, Akku mit 545 Wh (Herstellerangabe; 400 und 800 Wh als Varianten)",
        "Heckträger bis 80 kg – Platz für einen Kindersitz, laut Hersteller auch für zwei Kinder",
        "Zulässiges Gesamtgewicht 200 kg, Gewicht laut Test rund 35 kg",
      ],
      pros: ["Fährt sich fast wie ein normales Rad", "Leicht genug für Keller und Treppen", "Wächst bis zum zweiten Kind mit"],
      cons: ["Kein Wetterschutz wie bei einer Box", "Kindersitz und Zubehör kosten extra"],
      specs: { bauform: "Longtail", kinder: "1–2 auf dem Heck", zuladung: "Heck 80 kg, gesamt 200 kg", antrieb: "Bosch Cargo Line, 85 Nm", akku: "545 Wh", gewicht: "ca. 35 kg" },
      shop: "radwelt",
      url: "https://www.radwelt-shop.de/urban-arrow-breeze-545-wh-schwarz-2026/750207",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Tern Quick Haul P5i",
      brand: "Tern",
      variant: "500 Wh, 5-Gang-Nabe",
      visual: { kind: "longtail", tone: "mint" },
      priceTier: 1,
      ratings: { kinder: 7.5, fahren: 8.0, alltag: 9.0, preis: 9.0 },
      bestFor: "Einstieg & kurze Wege",
      verdict:
        "Das beste Preis-Leistungs-Verhältnis: kompaktes Alltagsrad mit kurzem Heck, auf dem ein Kindersitz Platz findet – deutlich günstiger als klassische Lastenräder.",
      features: [
        "Bosch Performance Line mit 65 Nm und 500-Wh-Akku (Händlerangabe)",
        "Heckträger bis 50 kg, optionaler Frontträger bis 20 kg; zulässiges Gesamtgewicht 150 kg (Herstellerangabe)",
        "Sehr niedriger Durchstieg und kompakte Maße – passt in Aufzug und Keller",
      ],
      pros: ["Günstigstes Rad im Vergleich", "Sehr wendig und handlich", "Für Fahrende verschiedener Größen einstellbar"],
      cons: ["Nur für ein Kind ausgelegt", "Geringere Zuladung als echte Lastenräder", "Schwächerer Motor als Cargo-Antriebe"],
      specs: { bauform: "Kompaktes Longtail", kinder: "1 im Kindersitz", zuladung: "Heck 50 kg, gesamt 150 kg", antrieb: "Bosch Performance Line, 65 Nm", akku: "500 Wh", gewicht: "–" },
      shop: "fahrradlagerverkauf",
      url: "https://www.fahrradlagerverkauf.com/tern-quick-haul-p5i-20-zoll-500wh-5n-compact-black-nimbus-203610c",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Riese & Müller Multitinker2 vario",
      brand: "Riese & Müller",
      variant: "625 Wh, Enviolo",
      visual: { kind: "longtail", tone: "green" },
      priceTier: 3,
      ratings: { kinder: 9.0, fahren: 9.0, alltag: 9.0, preis: 6.5 },
      bestFor: "anspruchsvolle Vielfahrer",
      verdict:
        "Für alle, die keine Kompromisse wollen: hochwertiges Kompakt-Longtail mit stufenloser Schaltung, das sich mit dem Family Kit zum sicheren Kindertaxi umbauen lässt.",
      features: [
        "Bosch Cargo Line mit 625-Wh-Akku und stufenloser Enviolo-Nabe (Herstellerangabe)",
        "Family Kit bzw. Family Kit Plus als Zubehör; mit dem Family Kit Plus laut Händler für bis zu zwei Kinder (max. 50 kg) freigegeben",
        "Zulässiges Gesamtgewicht 200 kg, Gewicht ab 35,8 kg (Herstellerangabe)",
      ],
      pros: ["Sehr hochwertige Verarbeitung", "Stufenlose Schaltung, ideal im Stadtverkehr", "Durchdachtes Zubehörsystem"],
      cons: ["Teuerstes Rad im Vergleich", "Family Kit kostet extra (laut Hersteller ab 169,90 €)"],
      specs: { bauform: "Kompaktes Longtail", kinder: "1–2 mit Family Kit", zuladung: "gesamt 200 kg", antrieb: "Bosch Cargo Line", akku: "625 Wh", gewicht: "ab 35,8 kg" },
      shop: "fahrradlagerverkauf",
      url: "https://www.fahrradlagerverkauf.com/riese-muller-multitinker2-vario-20-zoll-625wh-enviolo-wave-lava-black-matt-1114627c",
    },
  ],

  comparison: [
    { key: "bauform", label: "Bauform" },
    { key: "kinder", label: "Kinder" },
    { key: "zuladung", label: "Zuladung" },
    { key: "antrieb", label: "Antrieb" },
    { key: "akku", label: "Akku" },
    { key: "gewicht", label: "Gewicht" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-lastenraeder-1-kind-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Lastenräder für 1 Kind 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Lastenräder für ein Kind 2026 in den Kriterien Kindertransport, Fahrverhalten, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Das Breeze punktet im Alltag, das Quick Haul beim Preis, das Multitinker2 bei Kindertransport und Fahrgefühl.",
    },
    steps: {
      kind: "steps",
      file: "kind-im-lastenrad-ab-wann-alter-anleitung.svg",
      title: "Ab wann darf mein Kind mitfahren?",
      subtitle: "Die wichtigsten Stationen – vom Baby bis zum Schulkind",
      alt: "Infografik: Ab wann Kinder im Lastenrad mitfahren können – Babyschale mit Adapter, selbstständiges Sitzen, Kindersitz mit Gurt, Helm, Wechsel aufs eigene Rad",
      caption: "Welche Lösung in welchem Alter passt. Maßgeblich sind immer die Freigaben des Herstellers.",
      steps: [
        { title: "Baby: nur mit Babyschalen-Adapter", text: "Einige Hersteller bieten Halterungen für Babyschalen an. Ohne solchen Adapter fährt ein Baby nicht mit." },
        { title: "Sitzt selbstständig: Kindersitz", text: "Erst wenn das Kind sicher allein sitzen und den Kopf halten kann, kommt ein Kindersitz mit Gurt infrage." },
        { title: "Immer angeschnallt", text: "Jedes Kind braucht einen eigenen Sitzplatz mit Gurt – auch auf kurzen Strecken." },
        { title: "Immer mit Helm", text: "Fällt ein Rad um, kann der Kopf des Kindes auf den Boden schlagen. Ein passender Helm gehört dazu." },
        { title: "Herstellergrenzen beachten", text: "Maximales Kindergewicht und Alter laut Hersteller einhalten – danach aufs eigene Rad oder Folgemodell wechseln." },
      ],
    },
  },

  editorial: {
    title: "Ein Kind, ein Lastenrad: worauf es wirklich ankommt",
    intro:
      "Warum für ein Kind meist ein Longtail die bessere Wahl ist, ab welchem Alter dein Kind mitfahren darf und wann sich doch ein größeres Rad lohnt.",
    sections: [
      {
        id: "bestes-lastenrad-1-kind",
        h2: "Welches Lastenrad ist für ein Kind am besten?",
        blocks: [
          { quick: "Für die meisten Familien mit einem Kind ist das [Urban Arrow Breeze](produkt:1) die beste Wahl: kompakt, rund 35 kg leicht und mit kräftigem Cargo-Antrieb. Wer sparen will, nimmt das [Tern Quick Haul P5i](produkt:2), wer das Beste möchte, das [Riese & Müller Multitinker2 vario](produkt:3)." },
          { first: "Mit einem Kind ändert sich die Frage, die man sich beim Lastenradkauf stellt. Es geht nicht darum, möglichst viel Platz zu haben, sondern darum, ein Rad zu finden, das im Alltag nicht stört: das in den Fahrradkeller passt, das man notfalls eine Stufe hochschieben kann und das sich auf dem Weg zur Kita so selbstverständlich fährt wie ein normales Fahrrad. Genau hier spielen kompakte Longtails ihre Stärken aus." },
          { p: "Bei einem Longtail sitzt das Kind hinten auf einem verlängerten, besonders stabilen Gepäckträger. Das Rad ist dadurch nur wenig länger als ein gewöhnliches Fahrrad, der Schwerpunkt bleibt nah am Fahrenden, und das Lenkverhalten ändert sich kaum. Ein Frontlader mit großer Box bietet zwar mehr Wetterschutz und Blickkontakt, ist aber deutlich länger, schwerer und braucht einen ebenerdigen Stellplatz." },
          { p: "Alle drei Empfehlungen sind Pedelecs: Der Motor unterstützt bis 25 km/h, es braucht weder Führerschein noch Versicherungskennzeichen. Mit Kind und Einkauf summiert sich das Gewicht schnell auf weit über 100 Kilogramm – ohne Motor würde man ein Lastenrad im Alltag kaum nutzen." },
          { figure: "scores" },
          { quote: "Für ein Kind zählt nicht der größte Laderaum, sondern ein Rad, das im Alltag nicht im Weg steht." },
          { callout: { title: "Sicherheit zuerst", warn: true, text: "Die DGUV empfiehlt, nur Kinder mitzunehmen, die selbstständig sitzen und den Kopf sicher halten können. Jedes Kind braucht einen eigenen Sitzplatz mit Gurt und einen passenden Helm. Wer Kinder unter sieben Jahren mitnimmt, muss mindestens 16 Jahre alt sein." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Lastenrads für ein Kind achten?",
        blocks: [
          { quick: "Entscheidend sind die Bauform, die Freigabe des Herstellers für den Kindertransport, das passende Sitzsystem, das Gewicht des Rads und ein Antrieb, der auch mit Kind am Berg zieht." },
          { h3: "Longtail oder Frontlader?" },
          {
            table: {
              caption: "Longtail und Frontlader für ein Kind im Vergleich",
              head: ["Bauform", "Stärken", "Schwächen"],
              rows: [
                ["**Longtail**", "Kompakt, leicht, fährt sich wie ein normales Rad, wächst bis zum zweiten Kind mit", "Kaum Wetterschutz, Kind sitzt hinter dir"],
                ["**Frontlader (Long John)**", "Kind im Blick, Box mit Regenverdeck, Babyschale oft möglich", "Lang, schwer, braucht viel Stellplatz"],
                ["**Dreirad (Trike)**", "Kippt im Stand nicht, viel Platz", "Breit und träge – für ein Kind meist überdimensioniert"],
              ],
            },
          },
          { h3: "Freigabe für den Kindertransport" },
          { p: "Nicht jeder Gepäckträger ist für einen Kindersitz zugelassen. Achte auf die Herstellerfreigabe und die zulässige Last auf dem Heck. Kindersitze sollten nach der Norm EN 14344 geprüft sein und dürfen nur auf Gepäckträgern montiert werden, die dafür ausgelegt sind. Viele Hersteller bieten eigene Systeme mit Haltebügeln, Fußstützen und Speichenschutz an – etwa das Family Kit bei Riese & Müller." },
          { h3: "Gewicht und Stellplatz" },
          { p: "Ein kompaktes Longtail wiegt rund 30 bis 40 Kilogramm, ein großer Frontlader schnell 50 Kilogramm und mehr. Das ist kein Detail: Wer sein Rad in den Keller tragen oder im Hausflur abstellen muss, entscheidet sich mit dem Gewicht auch dafür, wie oft das Rad tatsächlich genutzt wird." },
          { h3: "Antrieb und Akku" },
          { p: "Cargo-Motoren wie der Bosch Cargo Line liefern mehr Drehmoment beim Anfahren – spürbar, wenn an der Ampel ein Kind hinten sitzt. Für flache Stadtwege reicht auch ein normaler Mittelmotor. Beim Akku gilt: Mit Kind, Gepäck und Winterkälte sinkt die Reichweite deutlich; wer täglich längere Strecken fährt, plant lieber etwas Reserve ein." },
        ],
      },
      {
        id: "welches-rad-passt",
        h2: "Welches Lastenrad passt zu wem?",
        blocks: [
          { quick: "Stadtfamilien mit wenig Platz fahren am besten mit einem kompakten Longtail; wer ein Baby mitnehmen oder bald ein zweites Kind transportieren will, sollte über einen Frontlader nachdenken." },
          {
            cards: [
              { title: "Wenig Platz zu Hause", text: "Kompakt, leicht und trotzdem tragfähig: Urban Arrow Breeze.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kleines Budget", text: "Kinder-Shuttle für die Kita zum Preis eines guten E-Bikes: Tern Quick Haul P5i.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Vielfahrer", text: "Hochwertige Technik, stufenlose Schaltung und Family Kit: Riese & Müller Multitinker2.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Baby unterwegs", text: "Für Babyschalen sind Frontlader mit passendem Adapter meist die bessere Lösung.", link: { href: "#top5-mitwachsen", label: "Zur Top 5" } },
              { title: "Zweites Kind geplant", text: "Wer bald zwei Kinder transportiert, kauft besser gleich ein Rad mit zwei Sitzplätzen.", link: { href: "/bestes-lastenrad-fuer-2-kinder/", label: "Lastenräder für 2 Kinder" } },
              { title: "Großfamilie", text: "Für drei Kinder braucht es eine große Box oder ein Dreirad.", link: { href: "/bestes-lastenrad-fuer-3-kinder/", label: "Lastenräder für 3 Kinder" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-mitwachsen",
    h2: "Die 5 besten Lastenräder, die mitwachsen – vom ersten zum zweiten Kind",
    intro:
      "Wenn ein zweites Kind geplant ist oder du zusätzlich viel Gepäck transportierst, lohnt sich ein Rad mit mehr Sitzplätzen. Diese fünf Modelle starten mit einem Kind und haben Platz für mehr.",
    items: [
      { name: "Cube Cargo Hybrid Comfort Pro Family 800", for: "Frontlader mit Komplettausstattung", text: "Box aus EPP-Schaum mit herausnehmbarer Kindersitzbank, Gurten und Regenverdeck ab Werk, 800-Wh-Akku. Unsere Gesamtwahl für zwei Kinder.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/cube-cargo-hybrid-comfort-pro-family-800-20-26-zoll-800wh-5n-lastenrad-smaragdgrey-n-reflex-1110736c" },
      { name: "Tern GSD S10", for: "Longtail für zwei", text: "Longtail mit 210 kg zulässigem Gesamtgewicht und bis zu 100 kg auf dem Heck; laut Händler passen zwei Kindersitze ohne Adapter.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/tern-gsd-s10-20-zoll-545wh-10k-lastenrad-satin-beige-1116066c" },
      { name: "Tenways Cargo One", for: "Große Box, großer Akku", text: "Frontlader mit zwei Sitzplätzen und Regenverdeck, 960-Wh-Akku und laut Test 194 kg Zuladung – zu einem vergleichsweise günstigen Preis.", shop: "radwelt", url: "https://www.radwelt-shop.de/tenways-cargo-one-960-wh-schwarz-2026/770049" },
      { name: "Urban Arrow Family Cargo Line", for: "Der Frontlader-Klassiker", text: "Sitzbank für zwei Kinder ab Werk, mit Zusatzbank laut Hersteller bis zu drei Kinder; zulässiges Gesamtgewicht 250 kg.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/urban-arrow-family-cargo-line-20-26-zoll-545wh-enviolo-lastenrad-black-1098610c" },
      { name: "Riese & Müller Packster2 70 family", for: "Mitwachsend bis drei Kinder", text: "Laut Hersteller für bis zu drei Kinder bis zum vollendeten siebten Lebensjahr; für Babys gibt es eine Babyschalen-Halterung im Fachhandel.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/riese-muller-packster2-70-family-20-26-zoll-625wh-10k-lastenrad-chili-matt-1102662c" },
    ],
  },

  guide: {
    sections: [
      {
        id: "kindertransport-recht",
        h2: "Rechtslage und Sicherheit beim Kindertransport",
        blocks: [
          { quick: "Wer Kinder unter sieben Jahren auf dem Fahrrad mitnimmt, muss mindestens 16 Jahre alt sein; das Kind braucht einen eigenen Sitz, und die Füße dürfen nicht in die Speichen geraten. Für Räder, die zur Personenbeförderung gebaut sind, gilt seit 2020 keine feste Altersgrenze für Mitfahrende mehr." },
          { p: "Auf einem normalen Fahrrad mit Kindersitz dürfen nach der Straßenverkehrs-Ordnung Kinder bis zum vollendeten siebten Lebensjahr mitfahren – vorausgesetzt, der Fahrende ist mindestens 16 Jahre alt, es gibt einen besonderen Sitz und eine Verkleidung oder Vorrichtung schützt die Füße vor den Speichen. Seit der StVO-Novelle 2020 dürfen auf Fahrrädern, die für die Personenbeförderung gebaut und eingerichtet sind, auch ältere Kinder mitgenommen werden. Maßgeblich sind dann zusätzlich die Freigaben des Herstellers – manche begrenzen Alter oder Gewicht der Mitfahrenden ausdrücklich." },
          { figure: "steps" },
          { h3: "Die wichtigsten Regeln im Alltag" },
          {
            list: [
              "**Gurt immer schließen** – auch auf kurzen Strecken. Die Stiftung Warentest empfiehlt, fehlende Gurte nachzurüsten.",
              "**Helm aufsetzen.** Im ADAC-Crashtest schützte die Transportbox beim Erstaufprall gut; kippt das Rad aber um, kann der Kopf des Kindes auf den Boden schlagen.",
              "**Erst üben, dann losfahren.** Das veränderte Fahrverhalten am besten zuerst ohne Kind und in einer ruhigen Straße ausprobieren.",
              "**Ständer und Aufsteigen beachten.** Das Kind erst hineinsetzen, wenn das Rad sicher auf dem Ständer steht – und erst danach aufsteigen.",
              "**Zuladung nicht überschreiten.** Gepäck und Kind zusammen dürfen die Freigabe für den Gepäckträger nicht überschreiten.",
            ],
          },
          {
            facts: [
              { value: "16 Jahre", label: "Mindestalter für Fahrende, die Kinder unter 7 mitnehmen" },
              { value: "1 Gurt", label: "pro Kind – jedes Kind braucht einen eigenen Sitzplatz" },
              { value: "25 km/h", label: "Unterstützungsgrenze bei Pedelecs" },
            ],
          },
          { h3: "Förderung prüfen" },
          { p: "Viele Bundesländer und Kommunen fördern den Kauf von Lastenrädern, teils mit mehreren Hundert Euro. Die Programme ändern sich häufig und haben oft begrenzte Budgets – ein Blick auf die Website deiner Stadt oder deines Landes lohnt sich vor dem Kauf." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Lastenrad ist für ein Kind am besten?", a: "Unsere beste Gesamtwahl ist das Urban Arrow Breeze: ein kompaktes Longtail mit Bosch-Cargo-Antrieb, rund 35 kg Gewicht und bis zu 80 kg Zuladung auf dem Heck. Am günstigsten ist das Tern Quick Haul P5i, die Premium-Wahl das Riese & Müller Multitinker2 vario." },
    { q: "Ab welchem Alter darf ein Kind im Lastenrad mitfahren?", a: "Sobald es selbstständig sitzen und den Kopf sicher halten kann – das ist meist ab etwa neun Monaten der Fall. Jüngere Babys dürfen nur in einer Babyschale mitfahren, die mit einem vom Hersteller freigegebenen Adapter befestigt ist. Maßgeblich sind immer die Angaben des Rad- und Sitzherstellers." },
    { q: "Lohnt sich ein Lastenrad für nur ein Kind?", a: "Ja, wenn das Rad im Alltag regelmäßig genutzt wird – etwa für Kita, Einkauf und Arbeitsweg. Für ein Kind sind kompakte Longtails ideal, weil sie kaum größer als ein normales Rad sind. Wer nur gelegentlich fährt, kann auch mit einem Kindersitz am eigenen E-Bike oder einem Anhänger auskommen." },
    { q: "Longtail oder Frontlader – was ist für ein Kind besser?", a: "Für ein Kind ist ein Longtail meist praktischer: kompakter, leichter und wendiger. Ein Frontlader lohnt sich, wenn ein Baby in der Babyschale mitfahren soll, wenn guter Wetterschutz wichtig ist oder bald ein zweites Kind dazukommt." },
    { q: "Muss mein Kind im Lastenrad einen Helm tragen?", a: "Eine Helmpflicht gibt es in Deutschland nicht, Fachleute raten aber dringend dazu. Bei einem Sturz oder wenn das Rad umkippt, kann der Kopf des Kindes auf den Boden schlagen." },
    { q: "Wie viel kostet ein gutes Lastenrad für ein Kind?", a: "Kompakte E-Lastenräder für ein Kind beginnen bei rund 3.300 Euro (Tern Quick Haul P5i, Herstellerpreis je nach Akku). Hochwertige Kompakt-Longtails wie das Riese & Müller Multitinker2 kosten ab etwa 6.500 Euro plus Zubehör. Viele Kommunen fördern den Kauf." },
  ],

  sources: [
    { label: "Stiftung Warentest: Kindertransport mit dem Fahrrad", url: "https://www.test.de/Sicherer-Kindertransport-mit-dem-Fahrrad-5776176-0/" },
    { label: "DGUV: Kinder sicher mit dem Lastenrad befördern", url: "https://www.dguv.de/de/mediencenter/pm/pressemitteilung_622211.jsp" },
    { label: "ADAC: Test E-Lastenfahrräder", url: "https://www.adac.de/rund-ums-fahrzeug/tests/fahrrad/e-lastenfahrrad/" },
    { label: "Riese & Müller: Multitinker2", url: "https://www.r-m.de/de/bikes/multitinker2/" },
  ],

  related: [
    { slug: "bestes-lastenrad-fuer-2-kinder", text: "Mehr Platz für Geschwister – Frontlader und Longtails für zwei." },
    { slug: "bestes-lastenrad-fuer-3-kinder", text: "Große Boxen und Dreiräder für die ganze Familie." },
    { area: "lastenraeder", text: "Alle Lastenrad-Ratgeber im Überblick." },
  ],
};
