// Kategorie: Lastenrad für 2 Kinder
// Aufbau siehe src/content/README.md (Content-Modell).

import { BIKE_PRICE_TIERS, BIKE_CRITERIA } from "./bestes-lastenrad-fuer-1-kind.mjs";

export default {
  slug: "bestes-lastenrad-fuer-2-kinder",
  area: "lastenraeder",
  navLabel: "Lastenrad für 2 Kinder",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Lastenräder für 2 Kinder 2026 – Vergleich & Ratgeber",
  metaDescription:
    "Die 3 besten E-Lastenräder für zwei Kinder 2026: Frontlader und Longtail im Vergleich – plus Zuladung berechnen, Bauformen, Wetterschutz und FAQ.",

  riders: { adults: 1, kids: 2, label: "1 Erwachsener + 2 Kinder" },
  eyebrow: "Lastenräder · 2 Kinder",
  h1: "Die 3 besten Lastenräder für 2 Kinder 2026",
  lead:
    "Zwei Kinder, Kita-Taschen und der Wocheneinkauf: Hier zeigt sich, ob ein Lastenrad das Auto ersetzen kann. Diese drei Modelle schaffen es nach unserer Einschätzung am besten.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Cube Cargo Hybrid Comfort Pro Family 800**](produkt:1), weil es Sitzbank, Gurte und Regenverdeck ab Werk mitbringt und dabei vergleichsweise günstig ist. Die größte Reichweite bietet das [**Tenways Cargo One**](produkt:2) mit 960-Wh-Akku; die Premium-Wahl ist das Longtail [**Tern GSD S10**](produkt:3).",

  top3Title: "Unsere Top 3 Lastenräder für zwei Kinder",
  top3Intro:
    "Zwei Frontlader mit Box und ein Longtail: Damit sind die beiden wichtigsten Bauformen für zwei Kinder abgedeckt.",
  comparisonTitle: "Die 3 besten Lastenräder für 2 Kinder im Vergleich",

  priceTiers: BIKE_PRICE_TIERS,
  criteria: BIKE_CRITERIA,

  method:
    "Wir testen die Räder nicht selbst; die Bewertungen sind redaktionelle Einschätzungen. Grundlage sind Herstellerangaben (Zuladung, Sitzplätze, Antrieb), Angaben der Händler, Fachtests aus Fahrradmagazinen sowie die Hinweise von Stiftung Warentest, ADAC und DGUV zum Kindertransport. Wir empfehlen ausschließlich Modelle, die bei Amazon oder bei Händlern aus dem Awin-Partnernetzwerk erhältlich sind. Jedes Rad wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Cube Cargo Hybrid Comfort Pro Family 800",
      brand: "Cube",
      variant: "800 Wh, 5-Gang-Nabe",
      visual: { kind: "box", tone: "forest" },
      priceTier: 1,
      ratings: { kinder: 9.0, fahren: 8.5, alltag: 8.5, preis: 9.0 },
      bestFor: "Familien, die alles ab Werk wollen",
      verdict:
        "Nach unserer Einschätzung die beste Wahl für die meisten Familien mit zwei Kindern: Frontlader mit Kindersitzbank, Gurten und Regenverdeck ab Werk – zum Recherchezeitpunkt für unter 5.000 Euro gelistet.",
      features: [
        "Herausnehmbare Kindersitzbank mit Anschnallgurten in einer Transportbox aus EPP-Schaum, inklusive Regenverdeck (Herstellerangabe)",
        "800-Wh-Akku und bis zu 95 Nm Drehmoment laut Cube",
        "Bis zu 200 kg Systemgewicht (Herstellerangabe); ohne Sitzbank auch als Transporter für Einkäufe nutzbar",
      ],
      pros: ["Komplette Kinderausstattung ab Werk", "Großer Akku", "Sehr gutes Preis-Leistungs-Verhältnis"],
      cons: ["Mit rund 49 kg laut Datenblatt schwer", "Lang – braucht einen ebenerdigen Stellplatz"],
      specs: { bauform: "Frontlader", kinder: "2 auf der Sitzbank", zuladung: "200 kg Systemgewicht", antrieb: "Mittelmotor, bis 95 Nm", akku: "800 Wh", gewicht: "ca. 49 kg" },
      shop: "fahrradlagerverkauf",
      url: "https://www.fahrradlagerverkauf.com/cube-cargo-hybrid-comfort-pro-family-800-20-26-zoll-800wh-5n-lastenrad-smaragdgrey-n-reflex-1110736c",
    },
    {
      rank: 2,
      label: "Größte Reichweite",
      name: "Tenways Cargo One",
      brand: "Tenways",
      variant: "960 Wh, Modell 2026",
      visual: { kind: "box", tone: "mint" },
      priceTier: 1,
      ratings: { kinder: 8.5, fahren: 8.0, alltag: 7.5, preis: 9.5 },
      bestFor: "lange Wege & viel Gepäck",
      verdict:
        "Für lange Wege: Frontlader mit großer Box, zwei Sitzplätzen samt Regenverdeck und dem größten Akku im Vergleich.",
      features: [
        "960-Wh-Akku, laut Hersteller bis zu 90 km Reichweite",
        "Bafang M600 Cargo Mittelmotor mit 100 Nm (Herstellerangabe)",
        "Laut Fachberichten rund 194 kg Zuladung bei 250 kg Systemgewicht (Herstellerangabe); zwei Sitzplätze in der Box, Regenabdeckung inklusive",
      ],
      pros: ["Größter Akku im Vergleich", "Hohe Zuladung", "Günstiger Einstiegspreis"],
      cons: ["Mit rund 56 kg sehr schwer", "Laut Hersteller für Fahrende zwischen 160 und 190 cm", "Kleineres Service- und Händlernetz als bei etablierten Marken – Service vor Ort vorab klären"],
      specs: { bauform: "Frontlader", kinder: "2 in der Box", zuladung: "ca. 194 kg (laut Fachberichten)", antrieb: "Bafang M600, 100 Nm", akku: "960 Wh", gewicht: "ca. 56 kg" },
      shop: "radwelt",
      url: "https://www.radwelt-shop.de/tenways-cargo-one-960-wh-schwarz-2026/770049",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Tern GSD S10",
      brand: "Tern",
      variant: "545 Wh, 10-Gang",
      visual: { kind: "longtail", tone: "green" },
      priceTier: 3,
      ratings: { kinder: 8.5, fahren: 9.5, alltag: 9.5, preis: 6.5 },
      bestFor: "Pendeln & enge Städte",
      verdict:
        "Für alle, die keine Kompromisse wollen: kompaktes Longtail mit Cargo-Antrieb und ABS, das zwei Kinder trägt und laut Hersteller trotzdem in viele Aufzüge passt.",
      features: [
        "Bosch Cargo Line mit 85 Nm und 545-Wh-Akku, Zweitakku möglich (Händlerangabe)",
        "210 kg zulässiges Gesamtgewicht, bis zu 100 kg auf dem Heck (Herstellerangabe)",
        "Laut Händler passen zwei Thule-Yepp-Maxi-Sitze ohne Adapter; in der aktuellen Version mit Magura-ABS-Bremsen",
      ],
      pros: ["Fährt sich agil wie ein normales Rad", "Sehr kompakt und hochkant abstellbar", "Großes Zubehörsystem (Clubhouse, Sidekick)"],
      cons: ["Teuerstes Rad im Vergleich", "Kein Wetterschutz für die Kinder ab Werk", "Modelljahr beim Kauf prüfen – ältere Versionen ohne ABS"],
      specs: { bauform: "Longtail", kinder: "2 hintereinander", zuladung: "Heck 100 kg, gesamt 210 kg", antrieb: "Bosch Cargo Line, 85 Nm", akku: "545 Wh", gewicht: "–" },
      shop: "fahrradlagerverkauf",
      url: "https://www.fahrradlagerverkauf.com/tern-gsd-s10-20-zoll-545wh-10k-lastenrad-satin-beige-1116066c",
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
      file: "beste-lastenraeder-2-kinder-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Lastenräder für 2 Kinder 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Lastenräder für zwei Kinder 2026 in den Kriterien Kindertransport, Fahrverhalten, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Cube punktet beim Kindertransport ab Werk, Tenways beim Preis, das Tern GSD bei Fahrverhalten und Alltag.",
    },
    steps: {
      kind: "steps",
      file: "lastenrad-zuladung-berechnen-anleitung.svg",
      title: "Zuladung richtig berechnen",
      subtitle: "So prüfst du, ob zwei Kinder und Gepäck passen",
      alt: "Infografik: Zuladung beim Lastenrad berechnen – zulässiges Gesamtgewicht ablesen, Eigengewicht und Fahrergewicht abziehen, Kinder und Gepäck addieren, Reserve einplanen",
      caption: "Die Rechnung, die vor dem Kauf jedes Lastenrads stehen sollte.",
      steps: [
        { title: "Zulässiges Gesamtgewicht ablesen", text: "Steht im Datenblatt, z. B. 200 kg. Es umfasst Rad, Fahrende, Kinder und Gepäck." },
        { title: "Eigengewicht abziehen", text: "Ein Frontlader wiegt oft 45 bis 55 kg – das bleibt für alles andere übrig." },
        { title: "Dein Gewicht abziehen", text: "Inklusive Kleidung und Rucksack. Viele Hersteller begrenzen zusätzlich das Fahrergewicht." },
        { title: "Kinder und Gepäck addieren", text: "Kinder wachsen: Plane mit dem Gewicht in zwei, drei Jahren, nicht mit heute." },
        { title: "Box- und Heckgrenze prüfen", text: "Auch die Ladefläche selbst hat eine Grenze – sie darf nicht überschritten werden." },
      ],
    },
  },

  editorial: {
    title: "Zwei Kinder im Lastenrad: Bauform, Gewicht, Wetterschutz",
    intro:
      "Frontlader oder Longtail? Wie viel Zuladung du wirklich brauchst und worauf es ankommt, wenn das Lastenrad das Familienauto ersetzen soll.",
    sections: [
      {
        id: "bestes-lastenrad-2-kinder",
        h2: "Welches Lastenrad ist für zwei Kinder am besten?",
        blocks: [
          { quick: "Für die meisten Familien mit zwei Kindern ist das [Cube Cargo Hybrid Comfort Pro Family 800](produkt:1) nach unserer Einschätzung die beste Wahl: Frontlader mit Sitzbank, Gurten und Regenverdeck ab Werk. Mehr Reichweite bietet das [Tenways Cargo One](produkt:2), das wendigste Rad ist das Longtail [Tern GSD S10](produkt:3)." },
          { first: "Mit dem zweiten Kind wird das Lastenrad vom praktischen Extra zum Alltagsfahrzeug. Kita, Schule, Einkauf, Wochenendausflug – alles passiert jetzt mit zwei Kindern an Bord. Dabei steigt nicht nur das Gewicht, sondern auch die Bedeutung von Details: Wie schnell sind beide Kinder angeschnallt? Sitzen sie im Regen trocken? Kann man das Rad mit 150 Kilogramm Gesamtgewicht noch sicher an der Ampel anfahren?" },
          { p: "Für zwei Kinder gibt es zwei bewährte Bauformen. Beim Frontlader sitzen die Kinder nebeneinander in einer Box vor dem Lenker – gut im Blick, mit Regenverdeck geschützt und mit viel Platz für Taschen. Beim Longtail sitzen sie hintereinander auf einem verlängerten Heck. Das Rad bleibt kompakt und fährt sich agiler, bietet aber weniger Wetterschutz." },
          { p: "Unsere Gesamtwahl ist ein Frontlader, weil die meisten Familien mit zwei kleinen Kindern Wetterschutz, Blickkontakt und Stauraum höher gewichten als Wendigkeit. Wer in einer engen Altbauwohnung lebt oder das Rad auch zum Pendeln nutzt, ist mit einem Longtail wie dem Tern GSD oft besser bedient." },
          { figure: "scores" },
          { quote: "Mit dem zweiten Kind wird das Lastenrad vom praktischen Extra zum Familienauto auf zwei Rädern." },
          { callout: { title: "Wichtig", warn: true, text: "Jedes Kind braucht einen eigenen Sitzplatz mit eigenem Gurt. Zwei Kinder auf einem Platz oder ungesichert in der Box sind tabu – auch für kurze Strecken." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Lastenrads für zwei Kinder achten?",
        blocks: [
          { quick: "Entscheidend sind ausreichende Zuladung mit Reserve, zwei vollwertige Sitzplätze mit Gurten, guter Wetterschutz, starke Bremsen und ein Antrieb, der mit rund 150 Kilogramm Gesamtgewicht noch kräftig anfährt." },
          { h3: "Frontlader oder Longtail?" },
          {
            table: {
              caption: "Frontlader und Longtail für zwei Kinder im Vergleich",
              head: ["Kriterium", "Frontlader", "Longtail"],
              rows: [
                ["**Sitzposition**", "Nebeneinander, vor dir", "Hintereinander, hinter dir"],
                ["**Wetterschutz**", "Regenverdeck oft ab Werk oder als Zubehör", "Meist nur mit Zusatzlösungen"],
                ["**Fahrgefühl**", "Gewöhnungsbedürftig, träge Lenkung", "Fast wie ein normales Fahrrad"],
                ["**Platzbedarf**", "Lang, ebenerdiger Stellplatz nötig", "Kompakt, teils hochkant abstellbar"],
                ["**Stauraum**", "Box für Taschen und Einkauf", "Packtaschen am Heck"],
              ],
            },
          },
          { h3: "Zuladung mit Reserve" },
          { p: "Die wichtigste Zahl im Datenblatt ist das zulässige Gesamtgewicht. Davon gehen das Eigengewicht des Rads und das Gewicht der fahrenden Person ab – was übrig bleibt, teilen sich Kinder und Gepäck. Bei einem Frontlader mit 200 Kilogramm Gesamtgewicht, 50 Kilogramm Eigengewicht und einem 80 Kilogramm schweren Fahrer bleiben 70 Kilogramm. Für zwei Kindergartenkinder reicht das, für zwei Grundschulkinder mit Ranzen wird es knapp." },
          { h3: "Bremsen und Antrieb" },
          { p: "Mit zwei Kindern bewegt ein Lastenrad das Gewicht eines Kleinkraftrads. Hydraulische Scheibenbremsen sind aus unserer Sicht ein Muss, ABS kann auf nassem Untergrund zusätzliche Sicherheit bringen. Beim Motor sind Cargo-Antriebe mit 85 bis 100 Nm die richtige Wahl: Sie unterstützen kräftig beim Anfahren und regeln an Steigungen sanfter." },
          { h3: "Wetterschutz und Sitzkomfort" },
          { p: "Ein Regenverdeck entscheidet im Herbst und Winter darüber, ob das Lastenrad genutzt wird oder stehen bleibt. Achte darauf, ob es im Lieferumfang ist, wie schnell es sich auf- und abbauen lässt und ob die Kinder darunter genug Kopffreiheit haben. Gepolsterte Sitzbänke und Fußstützen machen längere Strecken für die Kinder angenehmer." },
        ],
      },
      {
        id: "welches-rad-passt",
        h2: "Welches Lastenrad passt zu wem?",
        blocks: [
          { quick: "Wer alles ab Werk möchte, nimmt das Cube; wer weite Strecken fährt, das Tenways; wer wenig Platz hat und agil fahren will, das Tern GSD." },
          {
            cards: [
              { title: "Kita & Einkauf", text: "Sitzbank, Gurte und Regenverdeck ab Werk – sofort startklar: Cube Cargo Hybrid Family 800.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Weite Wege", text: "Der größte Akku im Vergleich und viel Zuladung: Tenways Cargo One.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Enge Stadt & Pendeln", text: "Kompakt, agil und mit ABS: Tern GSD S10.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Großer Altersunterschied", text: "Ältere Geschwister sitzen auf einem Longtail bequemer als in einer Box.", link: { href: "#top5-bauform", label: "Zur Top 5" } },
              { title: "Ein Kind (noch)", text: "Kompakte Longtails reichen für ein Kind und sind deutlich günstiger.", link: { href: "/bestes-lastenrad-fuer-1-kind/", label: "Lastenräder für 1 Kind" } },
              { title: "Drittes Kind?", text: "Dann lohnt sich gleich eine große Box oder ein Dreirad.", link: { href: "/bestes-lastenrad-fuer-3-kinder/", label: "Lastenräder für 3 Kinder" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-bauform",
    h2: "Die 5 besten Alternativen für zwei Kinder – nach Bauform",
    intro:
      "Nicht jede Familie passt zu derselben Bauform. Diese fünf Modelle decken kompakte Longtails, klassische Frontlader und ein Dreirad ab.",
    items: [
      { name: "Urban Arrow Breeze", for: "Kompaktes Longtail", text: "Laut Fachpresse rund 35 kg leicht, laut Hersteller bis zu 80 kg auf dem Heck und zwei Sitzplätze – ideal, wenn das Rad in den Keller muss.", shop: "radwelt", url: "https://www.radwelt-shop.de/urban-arrow-breeze-545-wh-schwarz-2026/750207" },
      { name: "Riese & Müller Multitinker2 vario", for: "Premium-Longtail", text: "Mit dem Family Kit Plus laut Händler für bis zu zwei Kinder (max. 50 kg) freigegeben; stufenlose Enviolo-Schaltung.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/riese-muller-multitinker2-vario-20-zoll-625wh-enviolo-wave-lava-black-matt-1114627c" },
      { name: "Urban Arrow Family Cargo Line", for: "Frontlader-Klassiker", text: "EPP-Box mit Sitzbank und Dreipunktgurten für zwei Kinder, mit Zusatzbank laut Hersteller bis zu drei; 250 kg Gesamtgewicht (Herstellerangabe).", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/urban-arrow-family-cargo-line-20-26-zoll-545wh-enviolo-lastenrad-black-1098610c" },
      { name: "Carqon Cruise Smart E2", for: "Frontlader mit großem Akku", text: "Bosch Cargo Line mit 85 Nm und 800-Wh-Akku; laut Händler Platz für zwei, optional drei Kinder und bis zu 200 kg Gesamtgewicht.", shop: "fahrrad24", url: "https://www.fahrrad24.de/carqon-cruise-smart-e2-e-lastenrad-20-26-800wh-bosch-cx-cargo-line-schwarz.html" },
      { name: "Winora F.U.B. 3W", for: "Dreirad", text: "Kippt im Stand nicht und bietet laut Hersteller Platz für bis zu vier Kinder – sinnvoll, wenn Stabilität im Stand wichtiger ist als Wendigkeit. In schnellen Kurven können Dreiräder kippen, daher langsam fahren.", shop: "fahrrad24", url: "https://www.fahrrad24.de/winora-f-u-b-3w-lastenfahrrad-e-bike-20-26-500wh-dunkelgrau.html" },
    ],
  },

  guide: {
    sections: [
      {
        id: "zuladung-und-alltag",
        h2: "Zuladung berechnen und sicher unterwegs sein",
        blocks: [
          { quick: "Rechne vor dem Kauf: zulässiges Gesamtgewicht minus Eigengewicht minus dein Gewicht ergibt, was für Kinder und Gepäck bleibt – und plane mit dem Gewicht der Kinder in ein paar Jahren." },
          { p: "Viele Familien kaufen ein Lastenrad, wenn die Kinder klein sind, und nutzen es noch, wenn sie in die Schule kommen. Wer die Zuladung zu knapp plant, stößt schnell an Grenzen – oder fährt dauerhaft über der Freigabe, was Rahmen, Bremsen und Gewährleistung gefährdet." },
          { figure: "steps" },
          { h3: "Sicher fahren mit zwei Kindern" },
          {
            list: [
              "**Beide Kinder anschnallen, bevor du aufsteigst** – und das Rad dabei auf dem Ständer lassen.",
              "**Langsamer in Kurven.** Mit zwei Kindern liegt der Schwerpunkt anders; Frontlader reagieren träger auf Lenkbewegungen.",
              "**Bremsweg einplanen.** Mit 150 Kilogramm Gesamtgewicht und mehr verlängert sich der Bremsweg spürbar, besonders bei Nässe.",
              "**Helme für beide.** Auch in der Box: Kippt das Rad um, schützt der Helm den Kopf.",
              "**Regelmäßig warten lassen.** Bremsen, Reifen und Speichen werden bei Lastenrädern stärker beansprucht.",
              "**Akku richtig behandeln.** Nur mit dem Original-Ladegerät laden, beschädigte Akkus nicht weiterverwenden und die Ladehinweise des Herstellers beachten – Lithium-Akkus können bei Schäden in Brand geraten.",
            ],
          },
          {
            facts: [
              { value: "200–250 kg", label: "zulässiges Gesamtgewicht typischer Familien-Lastenräder" },
              { value: "45–56 kg", label: "Eigengewicht der Frontlader im Vergleich" },
              { value: "85–100 Nm", label: "Drehmoment der Cargo-Antriebe" },
            ],
          },
          { callout: { title: "Recht und Herstellerfreigaben", warn: true, text: "Nach § 21 StVO muss mindestens 16 Jahre alt sein, wer Kinder unter sieben Jahren auf dem Fahrrad mitnimmt. Auf Rädern, die zur Personenbeförderung gebaut und eingerichtet sind, dürfen seit 2020 in der Regel auch ältere Kinder mitfahren. Unsere Zusammenfassung ersetzt keine Rechtsberatung; verbindlich sind der aktuelle Gesetzestext und die Freigaben des Herstellers für Alter, Gewicht und Sitzplätze." } },
          { h3: "Diebstahlschutz" },
          { p: "Ein E-Lastenrad ist ein Wertgegenstand. Ein stabiles Ketten- oder Bügelschloss, mit dem du den Rahmen an einem festen Gegenstand anschließen kannst, gehört genauso dazu wie eine Versicherung, die auch Diebstahl und Akku abdeckt. Einige Hersteller bieten GPS-Ortung als Zubehör an." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Lastenrad ist für zwei Kinder am besten?", a: "Unsere beste Gesamtwahl ist das Cube Cargo Hybrid Comfort Pro Family 800, weil es Sitzbank, Gurte und Regenverdeck ab Werk mitbringt und zum Recherchezeitpunkt unter 5.000 Euro kostete. Die größte Reichweite bietet das Tenways Cargo One mit 960-Wh-Akku, die Premium-Wahl ist das Longtail Tern GSD S10." },
    { q: "Frontlader oder Longtail – was ist für zwei Kinder besser?", a: "Ein Frontlader bietet Wetterschutz, Blickkontakt und Stauraum, ist aber lang und schwer. Ein Longtail ist kompakter und fährt sich agiler, die Kinder sitzen jedoch hintereinander und weniger geschützt. Für kleine Kinder empfehlen wir meist einen Frontlader, für ältere Geschwister oder enge Wohnverhältnisse ein Longtail." },
    { q: "Wie viel Zuladung brauche ich für zwei Kinder?", a: "Rechne mit dem zulässigen Gesamtgewicht abzüglich Eigengewicht des Rads und deinem eigenen Gewicht. Für zwei Kindergartenkinder plus Gepäck sollten mindestens 60 bis 80 Kilogramm übrig bleiben, für Schulkinder deutlich mehr." },
    { q: "Dürfen Kinder über sieben Jahre im Lastenrad mitfahren?", a: "Seit der StVO-Novelle 2020 dürfen auf Fahrrädern, die zur Personenbeförderung gebaut und eingerichtet sind, in der Regel auch ältere Kinder mitfahren. Wer Kinder unter sieben Jahren mitnimmt, muss mindestens 16 Jahre alt sein. Zusätzlich gelten die Freigaben des Herstellers für Alter, Gewicht und Sitzplätze." },
    { q: "Brauche ich ein Regenverdeck?", a: "Wer das Lastenrad das ganze Jahr nutzen möchte, sollte nicht darauf verzichten. Bei Frontladern ist es oft im Lieferumfang oder als passendes Zubehör erhältlich – beim Cube Cargo Hybrid Family 800 und beim Tenways Cargo One ist es laut Hersteller- bzw. Händlerangaben bereits dabei." },
    { q: "Wie schwer ist ein Lastenrad für zwei Kinder?", a: "Frontlader für zwei Kinder wiegen meist zwischen 45 und 56 Kilogramm, Longtails deutlich weniger. Das Gewicht ist vor allem beim Abstellen, Rangieren und Tragen relevant – beim Fahren gleicht der Motor es aus." },
  ],

  sources: [
    { label: "Stiftung Warentest: E-Lastenräder im Test (ADAC-Test 2022)", url: "https://www.test.de/E-Lastenraeder-im-Test-Nur-wenige-Packesel-ueberzeugen-5817572-0/" },
    { label: "Stiftung Warentest: Kindertransport mit dem Fahrrad", url: "https://www.test.de/Sicherer-Kindertransport-mit-dem-Fahrrad-5776176-0/" },
    { label: "Cube: Cargo Hybrid Comfort Pro Family 800", url: "https://www.cube.eu/de-de/cube-cargo-hybrid-comfort-pro-family-800-smaragdgrey-n-reflex/124201" },
    { label: "nimms-rad.de: Tenways Cargo One vorgestellt", url: "https://www.nimms-rad.de/news/?p=47929" },
  ],

  related: [
    { slug: "bestes-lastenrad-fuer-1-kind", text: "Kompakte Longtails für ein Kind." },
    { slug: "bestes-lastenrad-fuer-3-kinder", text: "Große Boxen und Dreiräder für drei Kinder." },
    { area: "lastenraeder", text: "Alle Lastenrad-Ratgeber im Überblick." },
  ],
};
