// Kategorie: Lastenrad für 3 Kinder
// Aufbau siehe src/content/README.md (Content-Modell).

import { BIKE_PRICE_TIERS, BIKE_CRITERIA } from "./bestes-lastenrad-fuer-1-kind.mjs";

export default {
  slug: "bestes-lastenrad-fuer-3-kinder",
  area: "lastenraeder",
  navLabel: "Lastenrad für 3 Kinder",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Lastenräder für 3 Kinder 2026 – Vergleich & Ratgeber",
  metaDescription:
    "Die 3 besten E-Lastenräder für drei Kinder 2026: große Frontlader und Dreirad im Vergleich – plus Herstellerfreigaben, Sicherheit, Babboe-Rückruf und FAQ.",

  riders: { adults: 1, kids: 3, label: "1 Erwachsener + 3 Kinder" },
  eyebrow: "Lastenräder · 3 Kinder",
  h1: "Die 3 besten Lastenräder für 3 Kinder 2026",
  lead:
    "Drei Kinder in einem Lastenrad sind möglich – aber nur mit dem richtigen Rad und der passenden Freigabe des Herstellers. Diese drei Modelle sind dafür gemacht.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Riese & Müller Packster2 70 family**](produkt:1), weil der Hersteller es ausdrücklich für bis zu drei Kinder freigibt und es sich trotz großer Box zweirädrig agil fährt. Die stabilste Lösung ist das Dreirad [**Winora F.U.B. 3W**](produkt:2) mit Platz für bis zu vier Kinder; die Premium-Wahl ist das [**Urban Arrow FamilyNext2 Pro+**](produkt:3).",

  top3Title: "Unsere Top 3 Lastenräder für drei Kinder",
  top3Intro:
    "Zwei große Frontlader und ein Dreirad – alle drei sind laut Hersteller für drei oder mehr Kinder ausgelegt.",
  comparisonTitle: "Die 3 besten Lastenräder für 3 Kinder im Vergleich",

  priceTiers: BIKE_PRICE_TIERS,
  criteria: BIKE_CRITERIA,

  method:
    "Grundlage sind Herstellerangaben (Freigabe für die Zahl der Kinder, Zuladung, Antrieb), Angaben der Händler, Fachtests aus Fahrradmagazinen sowie die Hinweise von Stiftung Warentest, ADAC und DGUV zum Kindertransport. Wir empfehlen ausschließlich Modelle, die bei Amazon oder bei Händlern aus dem Awin-Partnernetzwerk erhältlich sind, und nur solche, für die der Hersteller drei Kinder ausdrücklich vorsieht. Jedes Rad wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Riese & Müller Packster2 70 family",
      brand: "Riese & Müller",
      variant: "625 Wh, 10-Gang",
      visual: { kind: "box", tone: "forest" },
      priceTier: 3,
      ratings: { kinder: 9.0, fahren: 9.0, alltag: 9.0, preis: 7.5 },
      bestFor: "Familien mit drei kleinen Kindern",
      verdict:
        "Die beste Wahl für die meisten großen Familien: laut Hersteller für bis zu drei Kinder bis zum vollendeten siebten Lebensjahr freigegeben – und dabei ein Frontlader, der sich ausgesprochen ausgewogen fährt.",
      features: [
        "Bis zu drei Kinder bis 7 Jahre laut Riese & Müller; Zubehör „Drei Kindersitze“ laut Hersteller für 289,90 €",
        "Bosch Cargo Line mit PowerTube 625 Wh, optional DualBattery mit 1.500 Wh",
        "Box ca. 70 × 60 cm, Ladefläche bis 70 kg, zulässiges Gesamtgewicht 200 kg, Gewicht 41,1 kg (Herstellerangaben)",
      ],
      pros: ["Ausdrückliche Herstellerfreigabe für drei Kinder", "Für einen großen Frontlader vergleichsweise leicht", "Babyschalen-Halterung im Fachhandel erhältlich"],
      cons: ["Altersgrenze: Kinder nur bis zum vollendeten 7. Lebensjahr", "Ladefläche auf 70 kg begrenzt", "Drei-Sitz-Zubehör kostet extra"],
      specs: { bauform: "Frontlader (zweirädrig)", kinder: "bis 3 (bis 7 Jahre)", zuladung: "Box 70 kg, gesamt 200 kg", antrieb: "Bosch Cargo Line", akku: "625 Wh", gewicht: "41,1 kg" },
      shop: "fahrradlagerverkauf",
      url: "https://www.fahrradlagerverkauf.com/riese-muller-packster2-70-family-20-26-zoll-625wh-10k-lastenrad-chili-matt-1102662c",
    },
    {
      rank: 2,
      label: "Beste Wahl als Dreirad",
      name: "Winora F.U.B. 3W",
      brand: "Winora",
      variant: "500 Wh",
      visual: { kind: "trike", tone: "mint" },
      priceTier: 2,
      ratings: { kinder: 9.0, fahren: 7.0, alltag: 7.0, preis: 8.5 },
      bestFor: "maximale Standsicherheit",
      verdict:
        "Die stabilste Lösung: dreirädriges E-Lastenrad, das im Stand nicht kippt und laut Hersteller Platz für bis zu vier Kinder bietet.",
      features: [
        "Transportbox für bis zu vier Kinder mit Sicherheitsgurten und Seitenaufprallschutz (Herstellerangabe)",
        "Bosch Performance CX Cargo Line mit 85 Nm, 500-Wh-Akku, optional zweiter Akku",
        "Bis zu 250 kg Gesamtgewicht, hydraulische Scheibenbremsen und Shimano-Nexus-5-Gang-Nabe",
      ],
      pros: ["Kippt im Stand nicht – entspanntes Ein- und Aussteigen", "Platz für bis zu vier Kinder", "Hohes zulässiges Gesamtgewicht"],
      cons: ["Breit und träge in engen Kurven", "Schwer – braucht einen ebenerdigen Stellplatz", "Kleiner Akku für dieses Gewicht"],
      specs: { bauform: "Dreirad (Trike)", kinder: "bis 4", zuladung: "gesamt bis 250 kg", antrieb: "Bosch Performance CX Cargo Line, 85 Nm", akku: "500 Wh (+ optional 2. Akku)", gewicht: "–" },
      shop: "fahrrad24",
      url: "https://www.fahrrad24.de/winora-f-u-b-3w-lastenfahrrad-e-bike-20-26-500wh-dunkelgrau.html",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Urban Arrow FamilyNext2 Pro+",
      brand: "Urban Arrow",
      variant: "800 Wh, Modell 2027",
      visual: { kind: "box", tone: "green" },
      priceTier: 3,
      ratings: { kinder: 9.5, fahren: 9.0, alltag: 8.0, preis: 6.5 },
      bestFor: "Vielfahrer mit großer Familie",
      verdict:
        "Für alle, die keine Kompromisse wollen: die neueste Generation des Frontlader-Klassikers mit großem Akku und 250 kg zulässigem Gesamtgewicht – mit Zusatzbank für drei Kinder.",
      features: [
        "Sitzbank für zwei Kinder ab Werk, mit der FamilyNext-Zusatzbank laut Hersteller Platz für ein drittes Kind",
        "Geräumige EPP-Box mit Dreipunktgurten",
        "800-Wh-Akku, 250 kg zulässiges Gesamtgewicht bei maximal 125 kg Fahrergewicht (Herstellerangabe)",
      ],
      pros: ["Höchstes Gesamtgewicht im Vergleich", "Große, leichte EPP-Box", "Großes Zubehörprogramm (Regenverdeck, Babyschalen-Adapter)"],
      cons: ["Teuerstes Rad im Vergleich", "Zusatzbank für das dritte Kind kostet extra", "Lang und schwer zu rangieren"],
      specs: { bauform: "Frontlader (zweirädrig)", kinder: "2, mit Zusatzbank 3", zuladung: "gesamt 250 kg", antrieb: "Bosch-Mittelmotor", akku: "800 Wh", gewicht: "–" },
      shop: "radwelt",
      url: "https://www.radwelt-shop.de/urban-arrow-familynext2-pro-800-wh-schwarz-2027/750211",
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
      file: "beste-lastenraeder-3-kinder-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Lastenräder für 3 Kinder 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Lastenräder für drei Kinder 2026 in den Kriterien Kindertransport, Fahrverhalten, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Das Packster2 70 ist am ausgewogensten, das Winora-Dreirad am günstigsten, das Urban Arrow beim Kindertransport vorn.",
    },
    steps: {
      kind: "steps",
      file: "lastenrad-mit-drei-kindern-sicher-fahren-anleitung.svg",
      title: "Sicher losfahren mit drei Kindern",
      subtitle: "Fünf Regeln für die volle Box",
      alt: "Infografik: Fünf Regeln für sicheres Fahren mit drei Kindern im Lastenrad – Freigabe prüfen, jedes Kind anschnallen, Last tief und mittig, Helme, Kurven und Bremsweg",
      caption: "Was bei voller Box anders ist als mit einem oder zwei Kindern.",
      steps: [
        { title: "Freigabe prüfen", text: "Nur so viele Kinder mitnehmen, wie der Hersteller freigibt – inklusive Alters- und Gewichtsgrenzen." },
        { title: "Jedes Kind anschnallen", text: "Drei Kinder brauchen drei Sitzplätze mit eigenem Gurt. Erst anschnallen, dann aufsteigen." },
        { title: "Last tief und richtig verteilen", text: "Schwere Taschen nach unten; bei Riese & Müller soll der Schwerpunkt im hinteren Drittel der Box liegen." },
        { title: "Helme für alle", text: "Die Box schützt bei einem Aufprall gut – kippt das Rad, schützt nur der Helm den Kopf." },
        { title: "Kurven und Bremsweg", text: "Mit voller Box langsamer in Kurven, früher bremsen – Dreiräder können in schnellen Kurven kippen." },
      ],
    },
  },

  editorial: {
    title: "Drei Kinder an Bord: was ein Lastenrad dafür können muss",
    intro:
      "Warum die Herstellerfreigabe wichtiger ist als die Boxgröße, wann ein Dreirad die bessere Wahl ist und was du über den Babboe-Rückruf wissen solltest.",
    sections: [
      {
        id: "bestes-lastenrad-3-kinder",
        h2: "Welches Lastenrad ist für drei Kinder am besten?",
        blocks: [
          { quick: "Das beste Lastenrad für drei Kinder ist das [Riese & Müller Packster2 70 family](produkt:1): ausdrücklich für drei Kinder freigegeben und trotzdem agil. Die stabilste Lösung ist das Dreirad [Winora F.U.B. 3W](produkt:2), die Premium-Wahl das [Urban Arrow FamilyNext2 Pro+](produkt:3)." },
          { first: "Drei Kinder auf einem Fahrrad – vor wenigen Jahren klang das noch nach Ausnahme. Heute bieten mehrere Hersteller Lastenräder an, die genau dafür ausgelegt sind. Entscheidend ist dabei nicht, ob drei Kinder irgendwie in die Box passen, sondern ob der Hersteller drei Sitzplätze mit Gurten vorsieht und die Zuladung dafür reicht. Genau das war für uns das wichtigste Auswahlkriterium." },
          { p: "Grundsätzlich gibt es zwei Wege: große zweirädrige Frontlader und dreirädrige Lastenräder. Zweirädrige Frontlader wie das Packster2 70 oder das Urban Arrow fahren sich dynamischer, legen sich in die Kurve und sind schmal genug für Radwege. Dreiräder kippen im Stand nicht, bieten mehr Platz und sind beim Einsteigen der Kinder entspannter – dafür sind sie breiter, schwerer und reagieren in schnellen Kurven empfindlicher." },
          { p: "Bei drei Kindern lohnt ein genauer Blick auf die Altersgrenzen. Riese & Müller gibt das Packster2 70 für bis zu drei Kinder bis zum vollendeten siebten Lebensjahr frei. Wer ältere Kinder transportieren möchte, braucht ein Rad mit höherer Freigabe oder plant, dass das älteste Kind bald selbst fährt." },
          { figure: "scores" },
          { quote: "Bei drei Kindern zählt nicht, ob sie in die Box passen, sondern ob der Hersteller drei Sitzplätze mit Gurten vorsieht." },
          { callout: { title: "Hinweis zu Babboe", warn: true, text: "Babboe-Lastenräder sind bei Familien mit mehreren Kindern verbreitet. Nach Rahmenbrüchen hat die niederländische Behörde NVWA 2024 einen Verkaufsstopp verhängt; mehrere Modelle wurden zurückgerufen. Wir empfehlen Babboe deshalb derzeit nicht. Besitzer können unter kontrollieredeinlastenrad.de prüfen, ob ihr Rad betroffen ist." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Lastenrads für drei Kinder achten?",
        blocks: [
          { quick: "Achte auf eine ausdrückliche Herstellerfreigabe für drei Kinder, drei Sitzplätze mit eigenen Gurten, ausreichend Zuladung mit Reserve, starke Bremsen und einen Stellplatz, der zur Größe des Rads passt." },
          { h3: "Zweirädriger Frontlader oder Dreirad?" },
          {
            table: {
              caption: "Frontlader und Dreirad für drei Kinder im Vergleich",
              head: ["Kriterium", "Frontlader (zweirädrig)", "Dreirad (Trike)"],
              rows: [
                ["**Standsicherheit**", "Braucht den Ständer", "Kippt im Stand nicht"],
                ["**Fahrgefühl**", "Agil, legt sich in die Kurve", "Träge, in schnellen Kurven kippgefährdet"],
                ["**Breite**", "Schmal, passt auf Radwege", "Breit, enge Durchfahrten schwierig"],
                ["**Platz**", "Drei Kinder mit Zusatzsitz", "Oft bis zu vier Kinder"],
                ["**Stellplatz**", "Lang, aber schmal", "Lang und breit"],
              ],
            },
          },
          { h3: "Freigabe und Altersgrenzen" },
          { p: "Lies vor dem Kauf genau, wofür der Hersteller das Rad freigibt: Zahl der Kinder, maximales Alter, Gewicht auf der Ladefläche und zulässiges Gesamtgewicht. Diese Angaben stehen im Datenblatt oder in der Bedienungsanleitung. Ein Rad, das drei Kinder nur mit nachgerüsteten Fremdsitzen aufnehmen soll, ist keine gute Wahl." },
          { h3: "Zuladung und Ladefläche" },
          { p: "Drei Kinder bringen schnell 50 bis 70 Kilogramm auf die Waage, dazu kommen Taschen. Neben dem zulässigen Gesamtgewicht ist deshalb die Grenze für die Ladefläche wichtig – beim Packster2 70 sind es laut Hersteller 70 Kilogramm. Mit wachsenden Kindern wird diese Grenze früher erreicht, als viele denken." },
          { h3: "Bremsen, Antrieb und Akku" },
          { p: "Mit voller Box und erwachsenem Fahrer bewegt das Rad leicht 200 Kilogramm und mehr. Kräftige hydraulische Scheibenbremsen sind Pflicht. Cargo-Antriebe mit 85 Nm sorgen für sicheres Anfahren. Beim Akku gilt: Je schwerer die Fuhre, desto geringer die Reichweite – ein großer Akku oder ein Zweitakku verhindert, dass der Familienausflug mit leerer Batterie endet." },
        ],
      },
      {
        id: "welches-rad-passt",
        h2: "Welches Lastenrad passt zu wem?",
        blocks: [
          { quick: "Mit drei kleinen Kindern ist das Packster2 70 die ausgewogenste Wahl; wer maximale Stabilität will, nimmt das Winora-Dreirad; wer viel fährt und das höchste Gesamtgewicht braucht, das Urban Arrow." },
          {
            cards: [
              { title: "Drei Kinder unter 7", text: "Ausdrücklich freigegeben und agil zu fahren: Riese & Müller Packster2 70 family.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Sicherheit beim Einsteigen", text: "Kippt im Stand nicht, Platz für bis zu vier Kinder: Winora F.U.B. 3W.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Täglich viele Kilometer", text: "Großer Akku und 250 kg Gesamtgewicht: Urban Arrow FamilyNext2 Pro+.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Etwas günstiger", text: "Vorjahresmodelle und Basisversionen großer Frontlader sparen oft viel Geld.", link: { href: "#top5-grossfamilie", label: "Zur Top 5" } },
              { title: "Ältestes Kind fährt bald selbst", text: "Dann reicht vielleicht ein Rad für zwei Kinder.", link: { href: "/bestes-lastenrad-fuer-2-kinder/", label: "Lastenräder für 2 Kinder" } },
              { title: "Nur ein Kind im Lastenrad", text: "Kompakte Longtails sind leichter und günstiger.", link: { href: "/bestes-lastenrad-fuer-1-kind/", label: "Lastenräder für 1 Kind" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-grossfamilie",
    h2: "Die 5 besten Alternativen für große Familien",
    intro:
      "Diese fünf Modelle bieten ebenfalls Platz für drei Kinder – als günstigere Basisversion, Vorjahresmodell oder mit mehr Komfort.",
    items: [
      { name: "Urban Arrow Family Cargo Line", for: "Günstigerer Klassiker", text: "Sitzbank für zwei Kinder ab Werk, mit Zusatzbank laut Hersteller bis zu drei; 250 kg zulässiges Gesamtgewicht.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/urban-arrow-family-cargo-line-20-26-zoll-545wh-enviolo-lastenrad-black-1098610c" },
      { name: "Urban Arrow FamilyNext Advanced (545 Wh)", for: "FamilyNext zum kleineren Preis", text: "Die vorherige FamilyNext-Generation mit Automatikschaltung; mit Zusatzbank ebenfalls für ein drittes Kind geeignet.", shop: "radwelt", url: "https://www.radwelt-shop.de/urban-arrow-familynext-advanced-autom.-545-wh-schwarz-2025/750202" },
      { name: "Riese & Müller Packster2 70 CT vario", for: "Mit Federung", text: "Die gefederte CT-Version unserer Gesamtwahl mit 750-Wh-Akku und stufenloser Schaltung; laut Hersteller ebenfalls für bis zu drei Kinder bis 7 Jahre.", shop: "fahrradlagerverkauf", url: "https://www.fahrradlagerverkauf.com/riese-und-muller-packster2-70-ct-vario-20-26-zoll-750wh-enviolo-lastenrad-white-1102663c" },
      { name: "Carqon Cruise Smart E2", for: "Zwei plus eins", text: "Laut Händler Platz für zwei, optional drei Kinder; Bosch Cargo Line mit 85 Nm und 800-Wh-Akku, 200 kg Gesamtgewicht.", shop: "fahrrad24", url: "https://www.fahrrad24.de/carqon-cruise-smart-e2-e-lastenrad-20-26-800wh-bosch-cx-cargo-line-schwarz.html" },
      { name: "Urban Arrow Family Performance Plus (2024)", for: "Vorjahresmodell", text: "Älteres Modelljahr des Urban Arrow Family mit Automatikschaltung – oft günstiger, mit Zusatzbank für drei Kinder.", shop: "radwelt", url: "https://www.radwelt-shop.de/urban-arrow-family-performance-plus-automatic-schwarz-2024/750199" },
    ],
  },

  guide: {
    sections: [
      {
        id: "sicher-unterwegs",
        h2: "So bist du mit drei Kindern sicher unterwegs",
        blocks: [
          { quick: "Freigabe einhalten, jedes Kind anschnallen, schwere Last tief verstauen, Helme für alle – und in Kurven sowie beim Bremsen deutlich mehr Abstand einplanen als mit einem leeren Rad." },
          { p: "Mit drei Kindern verändert sich das Fahrverhalten eines Lastenrads spürbar. Das Gewicht in der Box macht die Lenkung träger, der Bremsweg wird länger, und beim Rangieren im Stand ist mehr Kraft nötig. Wer die folgenden Regeln verinnerlicht, fährt trotzdem entspannt." },
          { figure: "steps" },
          { h3: "Rechtliches in Kürze" },
          {
            list: [
              "**Mindestalter Fahrende:** Wer Kinder unter sieben Jahren mitnimmt, muss mindestens 16 Jahre alt sein.",
              "**Räder zur Personenbeförderung:** Seit der StVO-Novelle 2020 gilt dort keine feste Altersgrenze für Mitfahrende mehr – die Freigaben des Herstellers sind trotzdem bindend.",
              "**Eigene Sitzplätze:** Jedes Kind braucht einen eigenen Sitz; die Füße dürfen nicht in die Speichen geraten.",
              "**Pedelec bleibt Fahrrad:** Mit Unterstützung bis 25 km/h und 250 Watt Nenndauerleistung brauchst du weder Führerschein noch Versicherungskennzeichen.",
            ],
          },
          {
            facts: [
              { value: "3 Gurte", label: "drei Kinder brauchen drei eigene Sitzplätze" },
              { value: "200–250 kg", label: "zulässiges Gesamtgewicht der Empfehlungen" },
              { value: "bis 7 Jahre", label: "Altersgrenze laut Riese & Müller beim Packster2 70" },
            ],
          },
          { h3: "Stellplatz und Diebstahlschutz" },
          { p: "Große Frontlader und Dreiräder brauchen einen ebenerdigen, möglichst überdachten Stellplatz – ein Fahrradkeller mit Treppe scheidet praktisch aus. Prüfe vor dem Kauf, ob Hof, Garage oder Carport genug Platz bieten. Wegen des hohen Werts sind ein stabiles Schloss und eine Diebstahlversicherung Pflicht. Viele Kommunen fördern zudem Lastenräder – das lohnt sich gerade bei den höheren Preisen dieser Klasse." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Lastenrad ist für drei Kinder am besten?", a: "Unsere beste Gesamtwahl ist das Riese & Müller Packster2 70 family, weil der Hersteller es ausdrücklich für bis zu drei Kinder bis zum vollendeten siebten Lebensjahr freigibt. Die stabilste Lösung ist das Dreirad Winora F.U.B. 3W mit Platz für bis zu vier Kinder, die Premium-Wahl das Urban Arrow FamilyNext2 Pro+." },
    { q: "Darf man drei Kinder im Lastenrad transportieren?", a: "Ja, wenn das Lastenrad dafür gebaut ist und der Hersteller drei Sitzplätze freigibt. Jedes Kind braucht einen eigenen Sitzplatz mit Gurt, und die fahrende Person muss mindestens 16 Jahre alt sein, wenn Kinder unter sieben Jahren mitfahren." },
    { q: "Dreirad oder zweirädriges Lastenrad – was ist mit drei Kindern besser?", a: "Ein Dreirad kippt im Stand nicht und bietet viel Platz, ist aber breit und in schnellen Kurven kippgefährdet. Ein zweirädriger Frontlader fährt sich agiler und ist schmaler. Wer viel in der Stadt unterwegs ist, kommt mit einem Zweirad meist besser zurecht; wer Wert auf Standsicherheit beim Ein- und Aussteigen legt, mit einem Dreirad." },
    { q: "Bis zu welchem Alter dürfen Kinder im Lastenrad mitfahren?", a: "Gesetzlich gibt es für Räder, die zur Personenbeförderung gebaut sind, seit 2020 keine feste Altersgrenze mehr. Viele Hersteller setzen aber eigene Grenzen: Riese & Müller gibt das Packster2 70 etwa für Kinder bis zum vollendeten siebten Lebensjahr frei. Diese Freigaben sind einzuhalten." },
    { q: "Sind Babboe-Lastenräder noch empfehlenswert?", a: "Derzeit nicht. Nach Meldungen über Rahmenbrüche hat die niederländische Behörde NVWA 2024 einen Verkaufsstopp verhängt, mehrere Modelle wurden zurückgerufen. Besitzer sollten unter kontrollieredeinlastenrad.de prüfen, ob ihr Rad betroffen ist." },
    { q: "Wie viel kostet ein Lastenrad für drei Kinder?", a: "Große E-Lastenräder für drei Kinder kosten meist zwischen etwa 5.500 und 8.000 Euro. Das Riese & Müller Packster2 70 family startet laut Hersteller bei 6.699 Euro, das Urban Arrow FamilyNext2 Pro+ wird beim Händler für rund 7.100 Euro angeboten. Vorjahresmodelle und kommunale Förderprogramme können den Preis deutlich senken." },
  ],

  sources: [
    { label: "Riese & Müller: Packster2 70", url: "https://www.r-m.de/de/bikes/packster2-70/" },
    { label: "Urban Arrow Service Center: Wie viele Kinder passen in die Box?", url: "https://servicecenter.urbanarrow.com/en/how-many-children-can-i-carry-in-the-box" },
    { label: "Stiftung Warentest: Babboe – Verkaufsstopp und Rückruf wegen Rahmenbrüchen", url: "https://www.test.de/Lastenfahrraeder-von-Babboe-Verkaufsstopp-und-Rueckruf-wegen-Rahmenbruechen-6098753-0/" },
    { label: "ADAC: Test E-Lastenfahrräder", url: "https://www.adac.de/rund-ums-fahrzeug/tests/fahrrad/e-lastenfahrrad/" },
    { label: "DGUV: Kinder sicher mit dem Lastenrad befördern", url: "https://www.dguv.de/de/mediencenter/pm/pressemitteilung_622211.jsp" },
  ],

  related: [
    { slug: "bestes-lastenrad-fuer-2-kinder", text: "Frontlader und Longtails für zwei Kinder." },
    { slug: "bestes-lastenrad-fuer-1-kind", text: "Kompakte Longtails für ein Kind." },
    { area: "lastenraeder", text: "Alle Lastenrad-Ratgeber im Überblick." },
  ],
};
