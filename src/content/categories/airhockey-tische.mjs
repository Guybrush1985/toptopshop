// Kategorie: Airhockey-Tische
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "airhockey-tische",
  area: "gaming-room",
  navLabel: "Airhockey-Tische",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Airhockey-Tische 2026",
  metaDescription:
    "Airhockey-Tische mit starkem Gebläse und elektronischem Zähler: Die 3 besten Airhockey-Tische 2026 für Partykeller und Gaming-Room im Vergleich.",

  eyebrow: "Gaming-Room · Airhockey",
  h1: "Die 3 besten Airhockey-Tische 2026",
  lead:
    "Airhockey ist schnell, laut und macht sofort Spaß – auch ohne Übung. Wir zeigen die drei besten Tische für den Partykeller und in der Top 5 kompakte und günstige Alternativen.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Sportime Airhockey Blizzard 7 ft**](produkt:1) mit kräftigem Gebläse und elektronischem Zähler. Das beste Preis-Leistungs-Verhältnis bietet der [**VEVOR Airhockey-Tisch 214 cm**](produkt:2), die Premium-Wahl ist der [**Sportime Airhockey Turnier 2.0 8 ft**](produkt:3) mit Infrarot-Torerkennung.",

  priceTiers: {
    1: { symbol: "€", label: "bis 500 €" },
    2: { symbol: "€€", label: "500–1.000 €" },
    3: { symbol: "€€€", label: "über 1.000 €" },
  },

  top3Title: "Unsere Top 3 Airhockey-Tische",
  top3Intro: "Alle drei sind Standtische mit Gebläse und rund 7 bis 8 Fuß Länge. Das Gebläse entscheidet, wie gleichmäßig der Puck gleitet – die Größe, wie schnell und taktisch gespielt wird.",
  comparisonTitle: "Die 3 besten Airhockey-Tische im Vergleich",

  criteria: [
    { key: "spiel", label: "Spielgefühl & Gebläse", weight: 0.35, description: "Luftstrom, Spielfläche, Puckgleiten." },
    { key: "bau", label: "Stabilität & Verarbeitung", weight: 0.25, description: "Gewicht, Beine, Banden, Material." },
    { key: "ausstattung", label: "Ausstattung", weight: 0.15, description: "Torzähler, Licht, Zubehör." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Größe und Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Gewicht, Gebläseleistung, Ausstattung) und Händlerangaben. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Sportime Airhockey Blizzard 7 ft",
      brand: "Sportime",
      variant: "7 Fuß, elektronischer Zähler",
      visual: { kind: "gametable", tone: "forest" },
      priceTier: 2,
      ratings: { spiel: 9.0, bau: 9.0, ausstattung: 8.5, preis: 8.0 },
      bestFor: "Partykeller und Familien",
      verdict:
        "Schwer, stabil und mit kräftigem Gebläse: Der Blizzard bietet echtes Spielhallen-Gefühl, elektronische Punktezählung und eine Größe, die noch in viele Keller passt.",
      features: [
        "Gebläse mit 108 Watt (Herstellerangabe)",
        "Elektronischer Punktezähler (Herstellerangabe)",
        "Rund 116 kg schwer, dadurch sehr standfest (Herstellerangabe)",
      ],
      pros: ["Kräftiges Gebläse", "Sehr stabil", "Elektronischer Zähler"],
      cons: ["Sehr schwer", "Braucht viel Platz"],
      specs: { groesse: "7 Fuß", geblaese: "108 W", zaehler: "elektronisch", gewicht: "ca. 116 kg", extras: "Pucks und Schläger" },
      asin: "B0F9Y157H3",
      query: "Sportime Airhockey Blizzard 7 ft",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "VEVOR Airhockey-Tisch 214 cm",
      brand: "VEVOR",
      variant: "214 cm, elektronischer Zähler",
      visual: { kind: "gametable", tone: "mint" },
      priceTier: 1,
      ratings: { spiel: 8.0, bau: 7.5, ausstattung: 8.0, preis: 9.5 },
      bestFor: "Gelegenheitsspieler mit Budget",
      verdict:
        "Großer Tisch zum kleinen Preis: rund 2,14 m Länge, Gebläse und elektronischer Zähler – leichter gebaut als der Sportime, für den Familienkeller aber völlig ausreichend.",
      features: [
        "Rund 214 cm lang (Herstellerangabe)",
        "Gebläse und elektronischer Punktezähler (Herstellerangabe)",
        "Pucks und Schläger im Lieferumfang",
      ],
      pros: ["Günstig für die Größe", "Elektronischer Zähler", "Komplettes Zubehör"],
      cons: ["Leichter, weniger stabil", "Einfachere Bauweise als der Sportime"],
      specs: { groesse: "ca. 214 cm", geblaese: "laut Hersteller", zaehler: "elektronisch", gewicht: "laut Hersteller", extras: "Pucks und Schläger" },
      asin: "B0DZMKFXBD",
      query: "VEVOR Airhockey Tisch 214 cm",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "Sportime Airhockey Turnier 2.0 8 ft",
      brand: "Sportime",
      variant: "8 Fuß, Infrarot-Torerkennung",
      visual: { kind: "gametable", tone: "green" },
      priceTier: 3,
      ratings: { spiel: 9.5, bau: 9.0, ausstattung: 9.0, preis: 6.5 },
      bestFor: "Ambitionierte Spieler mit viel Platz",
      verdict:
        "Der große Turniertisch: 8 Fuß Spielfläche, zwei Lüfter für gleichmäßigen Luftstrom und Torerkennung per Infrarot – teuer und riesig, aber aus unserer Sicht das beste Spielgefühl im Vergleich.",
      features: [
        "8 Fuß Spielfläche (Herstellerangabe)",
        "Zwei Lüfter für gleichmäßigen Luftstrom (Herstellerangabe)",
        "Infrarot-Torerkennung, elektronischer Zähler (Herstellerangabe)",
      ],
      pros: ["Bestes Spielgefühl", "Präzise Torerkennung", "Turniergröße"],
      cons: ["Teuer", "Sehr großer Platzbedarf"],
      specs: { groesse: "8 Fuß", geblaese: "2 Lüfter", zaehler: "elektronisch, IR", gewicht: "laut Hersteller", extras: "Pucks und Schläger" },
      asin: "B0FJ5LXVM1",
      query: "Sportime Airhockey Turnier 2.0 8 ft",
    },
  ],

  comparison: [
    { key: "groesse", label: "Größe" },
    { key: "geblaese", label: "Gebläse" },
    { key: "zaehler", label: "Zähler" },
    { key: "gewicht", label: "Gewicht" },
    { key: "extras", label: "Zubehör" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-airhockey-tische-2026-bewertung.svg",
      title: "Die 3 besten Airhockey-Tische 2026",
      alt: "Balkendiagramm: Bewertung von Sportime Blizzard 7 ft, VEVOR 214 cm und Sportime Turnier 2.0 8 ft",
      caption: "Unsere Bewertung je Kriterium. Gebläse und Spielfläche wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "airhockey-tisch-aufstellen.svg",
      title: "Airhockey-Tisch aufstellen",
      subtitle: "Platz, Ausrichtung und Pflege",
      alt: "Infografik: Airhockey-Tisch aufstellen – Platz messen, ausrichten, Strom, Spielfläche reinigen, Pucks",
      caption: "So gleitet der Puck gleichmäßig.",
      steps: [
        { title: "Platz messen", text: "Tischlänge plus je rund 1 m an den Stirnseiten." },
        { title: "Waagerecht ausrichten", text: "Mit Wasserwaage, Stellfüße nachjustieren." },
        { title: "Strom", text: "Steckdose in der Nähe, Kabel nicht als Stolperfalle." },
        { title: "Spielfläche reinigen", text: "Staub verstopft Luftlöcher – regelmäßig abwischen." },
        { title: "Pucks ersetzen", text: "Abgenutzte Pucks gleiten schlechter." },
      ],
    },
  },

  editorial: {
    title: "Welche Größe passt?",
    intro: "Wie viel Platz ein Airhockey-Tisch braucht, warum das Gebläse entscheidend ist und was ein elektronischer Zähler bringt.",
    sections: [
      {
        id: "bester-airhockey-tisch",
        h2: "Welcher Airhockey-Tisch ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [Sportime Blizzard 7 ft](produkt:1) die beste Wahl, weil er stabil ist und ein starkes Gebläse hat. Günstiger ist der [VEVOR 214 cm](produkt:2), für ambitionierte Spieler der [Sportime Turnier 2.0](produkt:3)." },
          { first: "Beim Airhockey bläst ein Gebläse Luft durch hunderte kleine Löcher in der Spielfläche. Der Puck schwebt auf einem Luftpolster und gleitet fast reibungsfrei. Je stärker und gleichmäßiger der Luftstrom, desto schneller und berechenbarer das Spiel. Billige Tische mit schwachem Gebläse fühlen sich deshalb schnell zäh an." },
          { p: "Die **Größe** wird in Fuß angegeben: 5 bis 6 Fuß sind kompakte Tische für Kinder und kleine Räume, 7 Fuß ist das beliebteste Format für den Partykeller, 8 Fuß entspricht großen Spielhallen- und Turniertischen. Mit der Größe steigt auch das Gewicht – und das ist gut: Schwere Tische rutschen bei schnellen Schlägen nicht weg." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf ein kräftiges Gebläse, ein hohes Gewicht für Stabilität, verstellbare Füße, einen elektronischen Zähler und ausreichend Platz an den Stirnseiten." },
          {
            table: {
              caption: "Tischgrößen im Überblick",
              head: ["Größe", "Für wen", "Platzbedarf (ca.)"],
              rows: [
                ["**5–6 Fuß**", "Kinder, kleine Räume", "Rund 3,5 × 2,5 m"],
                ["**7 Fuß**", "Familien, Partykeller", "Rund 4 × 3 m"],
                ["**8 Fuß**", "Ambitionierte, Turnier", "Rund 4,5 × 3 m"],
              ],
            },
          },
          { p: "Der Platzbedarf in der Tabelle ist eine grobe Faustregel: Tischlänge plus rund einen Meter an jeder Stirnseite zum Ausholen, plus etwas Raum an den Seiten. Bei Multigame-Tischen mit Billard oder Tischtennis-Auflage ist das Spielgefühl beim Airhockey meist schlechter – wer vor allem Airhockey spielen will, kauft besser einen reinen Airhockey-Tisch." },
          { list: ["Gebläseleistung und Zahl der Lüfter", "Gewicht und stabile Beine mit Stellfüßen", "Elektronischer Zähler oder Infrarot-Torerkennung", "Ersatzpucks und Schläger im Lieferumfang", "Bei Kindern: Höhe und Kantenschutz"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen: Kompakt, LED und Zubehör",
    intro: "Für kleinere Räume, Kinder und Partyabende mit Licht.",
    items: [
      { name: "Sportime Airhockey LED 5,5 ft", for: "Kompakt mit Licht", text: "Kleinerer Tisch mit LED-Beleuchtung – passt in Kinderzimmer und kleine Keller.", asin: "B0B7RSBP9C", query: "Sportime Airhockey LED 5,5 ft" },
      { name: "Cougar Super Scoop 7 ft", for: "Solider 7-Fuß-Tisch", text: "Airhockey-Tisch in 7 Fuß mit Gebläse und Punktezähler.", asin: "B002X6716U", query: "Cougar Super Scoop Airhockey 7 ft" },
      { name: "Bison Loft Airhockey 7 ft", for: "Modernes Design", text: "Airhockey-Tisch mit schlichtem Design, der auch im Wohnbereich gut aussieht.", asin: "B097418Q5G", query: "Bison Loft Airhockey 7 ft" },
      { name: "Pegasi Elite Kicker", for: "Lieber Kicker?", text: "Stabiler Kickertisch – mehr dazu im Ratgeber Kickertische.", asin: "B0BFDB1HMT", query: "Pegasi Elite Kicker" },
      { name: "AtGames Legends Pinball", for: "Lieber Flipper?", text: "Virtueller Flipper mit lizenzierten Tischen – mehr im Ratgeber Flipper.", asin: "B09YHKM36H", query: "AtGames Legends Pinball" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Aufstellen, Pflege und Sicherheit",
        blocks: [
          { quick: "Tisch waagerecht ausrichten, Spielfläche regelmäßig abwischen, damit die Luftlöcher frei bleiben, und abgenutzte Pucks ersetzen." },
          { figure: "steps" },
          { p: "Verstopfte Luftlöcher sind eine häufige Ursache für ein zähes Spiel. Ein weiches Tuch und gelegentlich ein Zahnstocher für einzelne Löcher helfen. Silikon- oder Polierspray solltest du nur verwenden, wenn der Hersteller es ausdrücklich erlaubt. Wer den Spielkeller weiter ausbauen will, findet Ideen bei [Kickertischen](/kickertische/) und [Dartautomaten](/dartautomaten/)." },
          { callout: { title: "Sicherheit", warn: true, text: "Pucks können bei schnellen Schlägen vom Tisch springen. Kleine Kinder nicht in Augenhöhe an der Stirnseite stehen lassen und Getränke vom Tisch fernhalten. Die Tische wiegen teils über 100 kg: Aufbau und Transport zu zweit nach Anleitung des Herstellers, Kabel des Gebläses nicht als Stolperfalle verlegen und nur an einer intakten Steckdose betreiben." } },
          { facts: [{ value: "108 W", label: "Gebläse Sportime Blizzard (Herstellerangabe)" }, { value: "116 kg", label: "Gewicht Blizzard 7 ft (Herstellerangabe)" }, { value: "7 Fuß", label: "beliebteste Tischgröße" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Airhockey-Tisch ist der beste?", a: "Unsere beste Gesamtwahl ist der Sportime Blizzard 7 ft mit laut Hersteller 108-Watt-Gebläse und elektronischem Zähler. Günstiger ist der VEVOR 214 cm, die Premium-Wahl der Sportime Turnier 2.0 mit 8 Fuß." },
    { q: "Wie viel Platz braucht ein Airhockey-Tisch?", a: "Als Faustregel Tischlänge plus rund einen Meter an jeder Stirnseite. Für einen 7-Fuß-Tisch sind das etwa 4 × 3 m." },
    { q: "Welche Größe ist für zu Hause ideal?", a: "7 Fuß ist der beliebteste Kompromiss aus Spielgefühl und Platzbedarf. Für Kinder und kleine Räume reichen 5 bis 6 Fuß." },
    { q: "Lohnen sich Multigame-Tische?", a: "Für Gelegenheitsspieler ja. Das Airhockey-Spielgefühl ist bei Kombitischen aber meist schwächer als bei reinen Airhockey-Tischen." },
    { q: "Wie reinigt man einen Airhockey-Tisch?", a: "Spielfläche regelmäßig mit einem weichen Tuch abwischen, damit die Luftlöcher frei bleiben. Pflegemittel nur nach Herstellerangabe verwenden." },
  ],

  sources: [
    { label: "Sportime: Airhockey", url: "https://www.sportime.de/" },
    { label: "VEVOR Deutschland", url: "https://www.vevor.de/" },
  ],

  related: [
    { slug: "kickertische", text: "Kickertische für den Partykeller." },
    { slug: "billardtische", text: "Billardtische." },
    { slug: "shuffleboard-shufflepuck", text: "Shuffleboard und Shufflepuck." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
