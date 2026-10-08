// Kategorie: Lagerung & Konservierung (Krisenvorsorge › Lebensmittel & Lagerung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "lagerung-konservierung",
  area: "krisenvorsorge",
  group: "lebensmittel-lagerung",
  navLabel: "Lagerung & Konservierung",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Lebensmittel haltbar machen: Die 3 besten Helfer 2026",
  metaDescription:
    "Vorräte selbst haltbar machen: Mylar-Beutel mit Sauerstoffabsorber, Einkochautomat WECK WAT 15 und KoMo-Handmühle im Vergleich – plus BfR-Regeln zum Einkochen.",

  eyebrow: "Krisenvorsorge · Lebensmittel & Lagerung",
  h1: "Lebensmittel haltbar machen: Die 3 besten Helfer 2026",
  lead:
    "Ein Vorrat ist nur so gut wie seine Lagerung. Mit Mylar-Beuteln, Einkochautomat, Vakuumierer und Getreidemühle lassen sich viele Lebensmittel deutlich länger haltbar machen – und Getreide wird erst dann zu Mehl, wenn man es braucht. Diese drei Helfer lohnen sich nach unserer Einschätzung am meisten.",
  answer:
    "Für die Langzeitlagerung trockener Lebensmittel sind [**Mylar-Beutel mit Sauerstoffabsorbern**](produkt:1) nach unserer Einschätzung die beste Wahl: laut Anbietern luft-, licht- und feuchtigkeitsdicht und laut Anbietern für Trockenware über viele Jahre geeignet. Zum Einkochen von Obst, Gemüse und Fertiggerichten empfehlen wir den [**WECK Einkochautomaten WAT 15**](produkt:2); ganz ohne Strom mahlt die [**KoMo Handmühle**](produkt:3) Getreide frisch zu Mehl.",

  top3Title: "Unsere Top 3 zum Haltbarmachen",
  top3Intro:
    "Drei Wege zu einem länger haltbaren Vorrat: verpacken, einkochen, unverarbeitet lagern und bei Bedarf mahlen. Sie ergänzen sich – und machen dich unabhängiger vom Kühlschrank, wenn der Strom weg ist.",
  comparisonTitle: "Mylar-Beutel, Einkochautomat und Handmühle im Vergleich",

  criteria: [
    { key: "haltbar", label: "Haltbarkeitsgewinn", weight: 0.3, description: "Wie stark das Produkt die Lagerdauer der Lebensmittel verlängert." },
    { key: "krise", label: "Krisentauglichkeit", weight: 0.25, description: "Nutzbarkeit und Nutzen ohne Strom und Kühlung." },
    { key: "handhabung", label: "Handhabung", weight: 0.2, description: "Aufwand, Zubehör, Fehlerrisiko." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Menge und Lebensdauer." },
  ],

  method:
    "Grundlage sind die Hinweise des Bundesinstituts für Risikobewertung (BfR) zum Botulismus bei selbst eingekochten Lebensmitteln, die Vorsorgeempfehlungen des BBK, Herstellerangaben zu Material, Leistung und Lieferumfang sowie Kundenerfahrungen. Wir haben die Produkte nicht selbst getestet. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Mylar-Beutel 25 × 40 cm mit 300-cc-Sauerstoffabsorbern",
      brand: "Mylar",
      variant: "Set mit Absorbern",
      visual: { kind: "pack", tone: "forest" },
      priceTier: 1,
      ratings: { haltbar: 9.5, krise: 9.0, handhabung: 6.5, preis: 8.0 },
      bestFor: "Reis, Nudeln, Getreide, Hülsenfrüchte",
      verdict:
        "Aluminiumbeschichtete Beutel halten laut Anbieter Licht, Feuchtigkeit und Sauerstoff weitgehend fern, die Absorber binden den Restsauerstoff. Trockenware ist darin besser vor Oxidation und Schädlingen geschützt – laut Anbieter über viele Jahre.",
      features: [
        "Mylar-Beutel im Format 10 × 16 Zoll (ca. 25 × 40 cm), laut Anbieter für rund 3,5 Liter je Beutel",
        "Mit 300-cc-Sauerstoffabsorbern (Anbieterangabe), Verschweißen per Folienschweißgerät oder Bügeleisen",
        "Laut Anbieter bei korrekter Lagerung 20 Jahre und mehr für getrocknete Lebensmittel",
      ],
      pros: ["Sehr lange Lagerung von Trockenware (laut Anbieter)", "Hält Licht und Feuchtigkeit fern, erschwert Insektenbefall", "Kein Strom zur Lagerung nötig"],
      cons: ["Nur für trockene Lebensmittel", "Absorber nach dem Öffnen schnell verarbeiten", "Inhalt ist nicht sichtbar – beschriften"],
      specs: { methode: "Sauerstoffarm verpacken", geeignet: "trockene Lebensmittel", strom: "nur zum Verschweißen (oder Bügeleisen)", haltbarkeit: "viele Jahre (Anbieter)", zubehoer: "Absorber inklusive" },
      asin: "B004PRY5QY",
      query: "Mylar Beutel 10x16 300cc Sauerstoffabsorber",
    },
    {
      rank: 2,
      label: "Zum Einkochen",
      name: "WECK Einkochautomat WAT 15",
      brand: "WECK",
      variant: "29 Liter, 2.000 W, Zeitschaltuhr",
      visual: { kind: "canister", tone: "mint" },
      priceTier: 2,
      ratings: { haltbar: 9.0, krise: 7.0, handhabung: 8.5, preis: 7.5 },
      bestFor: "Obst, Tomaten, Suppen, Eintöpfe",
      verdict:
        "Ein verbreiteter Einkochautomat: laut Hersteller 29 Liter, Präzisionsthermostat und Zeitschaltuhr. Eingekochtes lagert ohne Kühlschrank – der Strom wird nur beim Einkochen gebraucht, nicht bei der Lagerung.",
      features: [
        "29 Liter Fassungsvermögen, 2.000 W, Zwei-Schicht-Emaillierung (Herstellerangaben)",
        "Präzisionsthermostat, Überhitzungsschutz, Zeitschaltuhr (Herstellerangaben)",
        "Auch als Glühwein- und Saftbereiter nutzbar; Variante WAT 15-A mit Auslaufhahn",
      ],
      pros: ["Viele Gläser auf einmal", "Präzise Temperatur", "Eingekochtes braucht keine Kühlung"],
      cons: ["Braucht Strom beim Einkochen", "Basisversion ohne Auslaufhahn", "Bohnen und Fleisch nur nach BfR-Regeln einkochen"],
      specs: { methode: "Einkochen bis 100 °C", geeignet: "Obst, Tomaten, Fertiggerichte", strom: "ja, beim Einkochen", haltbarkeit: "Monate bis Jahre (je nach Lebensmittel)", zubehoer: "Gläser, Ringe, Klammern separat" },
      asin: "B004GBUS2Y",
      query: "WECK Einkochautomat WAT 15",
    },
    {
      rank: 3,
      label: "Ohne Strom",
      name: "KoMo Handmühle",
      brand: "KoMo",
      variant: "Holz, Tischbefestigung",
      visual: { kind: "device", tone: "green" },
      priceTier: 2,
      ratings: { haltbar: 7.0, krise: 10.0, handhabung: 6.0, preis: 7.0 },
      bestFor: "Getreidevorrat in ganzen Körnern",
      verdict:
        "Ganze Körner halten viel länger als Mehl. Mit der Handmühle wird daraus frisches Mehl, Schrot oder Grieß – ganz ohne Strom. Ein Stück Unabhängigkeit, das auch im Alltag Freude macht.",
      features: [
        "Handbetriebene Getreidemühle mit Holzgehäuse und Tischbefestigung (Anbieterangabe)",
        "Mahlgrad einstellbar von fein bis grob (Anbieterangabe)",
        "Für Weizen, Dinkel, Roggen und andere trockene Getreidesorten",
      ],
      pros: ["Funktioniert ohne Strom", "Ganze Körner lagern länger als Mehl", "Solide Holzbauweise (Anbieterangabe)"],
      cons: ["Mahlen kostet Kraft und Zeit", "Ölsaaten und feuchte Ware ungeeignet", "Braucht eine stabile Tischkante"],
      specs: { methode: "Ganzkorn lagern, frisch mahlen", geeignet: "trockenes Getreide", strom: "nein", haltbarkeit: "Körner: deutlich länger als Mehl", zubehoer: "Tischklemme" },
      asin: "B004XCFBZK",
      query: "KoMo Handmühle Getreidemühle Holz",
    },
  ],

  comparison: [
    { key: "methode", label: "Methode" },
    { key: "geeignet", label: "Geeignet für" },
    { key: "strom", label: "Strom nötig" },
    { key: "haltbarkeit", label: "Haltbarkeit" },
    { key: "zubehoer", label: "Zubehör" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "lebensmittel-haltbar-machen-mylar-einkochen-bewertung-vergleich.svg",
      title: "Lebensmittel haltbar machen: Die 3 besten Helfer",
      alt: "Balkendiagramm: Bewertung von Mylar-Beuteln, Einkochautomat und Handmühle in den Kriterien Haltbarkeitsgewinn, Krisentauglichkeit, Handhabung und Preis",
      caption: "Unsere Bewertung je Kriterium. Mylar-Beutel bringen den größten Haltbarkeitsgewinn, die Handmühle ist am krisenfestesten.",
    },
    steps: {
      kind: "steps",
      file: "mylar-beutel-sauerstoffabsorber-anleitung.svg",
      title: "Trockenware in Mylar-Beuteln lagern",
      subtitle: "So hält Reis, Getreide und Co. jahrelang",
      alt: "Infografik: Mylar-Beutel befüllen – nur trockene Lebensmittel, Beutel füllen, Absorber zugeben, verschweißen, beschriften und kühl lagern",
      caption: "Absorber erst kurz vor dem Verschweißen aus der Verpackung nehmen – sie arbeiten sofort.",
      steps: [
        { title: "Nur trockene Lebensmittel", text: "Reis, Nudeln, Getreide, Hülsenfrüchte, Zucker – nichts Feuchtes oder Fettiges." },
        { title: "Beutel befüllen", text: "Bis etwa 5 cm unter den Rand, Rand sauber halten." },
        { title: "Absorber zugeben", text: "Passende Größe zum Volumen, Restpackung sofort luftdicht verschließen." },
        { title: "Verschweißen", text: "Mit Folienschweißgerät oder heißem Bügeleisen auf einer harten Unterlage." },
        { title: "Beschriften und lagern", text: "Inhalt und Datum notieren, kühl, dunkel und vor Nagern geschützt lagern." },
      ],
    },
  },

  editorial: {
    title: "Vorräte selbst haltbar machen: verpacken, einkochen, mahlen",
    intro:
      "Welche Methode für welche Lebensmittel taugt, was beim Einkochen zu beachten ist und warum ganze Körner der bessere Vorrat sind.",
    sections: [
      {
        id: "beste-methode",
        h2: "Womit macht man Lebensmittel am besten haltbar?",
        blocks: [
          { quick: "Trockenware lagert am längsten in [Mylar-Beuteln mit Sauerstoffabsorbern](produkt:1). Obst, Tomaten und Fertiggerichte kocht man im [WECK WAT 15](produkt:2) ein. Getreide bleibt als ganzes Korn am längsten frisch und wird mit der [KoMo Handmühle](produkt:3) ohne Strom gemahlen." },
          { first: "Lebensmittel verderben durch Sauerstoff, Feuchtigkeit, Licht, Wärme, Mikroorganismen und Schädlinge. Jede Konservierungsmethode setzt an einem oder mehreren dieser Faktoren an. Mylar-Beutel mit Sauerstoffabsorbern schließen Luft, Licht und Feuchtigkeit aus. Einkochen tötet viele Mikroorganismen durch Hitze ab und verschließt das Glas luftdicht – Sporen überstehen 100 °C aber teilweise. Vakuumieren entzieht Luft, ersetzt aber bei feuchten Lebensmitteln nicht die Kühlung." },
          { p: "Für die Krisenvorsorge zählt vor allem, was ohne Kühlschrank lagert. Eingekochtes und in Mylar verpackte Trockenware brauchen keinen Strom zur Lagerung. Vakuumierte Frischware dagegen schon – sie hält im Kühlschrank länger, aber nicht im warmen Keller. Deshalb steht der Vakuumierer bei uns in der Top 5 und nicht in den Top 3." },
          { p: "Unsere Gesamtwahl sind Mylar-Beutel, weil sie nach unserer Einschätzung für wenig Geld die größte Wirkung haben: Ein Sack Reis, aufgeteilt und mit Absorbern verschweißt, ist deutlich besser vor Mehlmotten, Feuchtigkeit und Ranzigwerden geschützt. Laut Anbietern sind so verpackte Trockenwaren viele Jahre lagerfähig." },
          { figure: "scores" },
          { callout: { title: "Botulismus-Gefahr beim Einkochen", warn: true, text: "Das BfR weist darauf hin, dass ein großer Teil der Botulismusfälle auf selbst Eingekochtes zurückgeht. Bei 100 °C werden Sporen von Clostridium botulinum nicht sicher abgetötet. Säurearme Lebensmittel wie Bohnen, anderes Gemüse und Fleisch sollten unter Druck auf 121 °C erhitzt werden – oder nach BfR-Empfehlung zweimal im Abstand von ein bis zwei Tagen auf 100 °C. Aufgewölbte Deckel: Glas nicht öffnen, nicht essen." } },
          { callout: { title: "Sicher arbeiten", text: "Einkochautomaten arbeiten mit kochendem Wasser und hoher Leistung: auf stabiler, hitzefester Fläche aufstellen, Kinder fernhalten, Verbrühungsgefahr beim Herausnehmen der Gläser beachten. Druck-Einkochgeräte nur nach Anleitung des Herstellers nutzen. Sauerstoffabsorber sind nicht zum Verzehr bestimmt und gehören außer Reichweite von Kindern und Haustieren. Unsere Hinweise ersetzen nicht die Empfehlungen des BfR und die Anleitungen der Hersteller." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Bei Mylar-Beuteln zählen Materialstärke, passende Absorbergröße und Verschweißbarkeit. Beim Einkochautomaten Volumen, Thermostat und Zeitschaltuhr. Bei Getreidemühlen der Antrieb (Hand oder Strom), das Mahlwerk und die Befestigung." },
          {
            table: {
              caption: "Welche Methode für welches Lebensmittel",
              head: ["Lebensmittel", "Methode", "Lagerung ohne Strom"],
              rows: [
                ["**Reis, Nudeln, Getreide, Hülsenfrüchte**", "Mylar-Beutel mit Absorber", "ja"],
                ["**Obst, Marmelade, Tomaten**", "Einkochen (100 °C)", "ja"],
                ["**Bohnen, Gemüse, Fleisch**", "Druck-Einkochen (121 °C) oder zweimal einkochen (BfR)", "ja"],
                ["**Fleisch, Käse, frisches Gemüse**", "Vakuumieren", "nein – Kühlung nötig"],
                ["**Mehl**", "besser als ganzes Korn lagern und frisch mahlen", "ja"],
              ],
            },
          },
          { h3: "Sauerstoffabsorber richtig dosieren" },
          { p: "Absorber gibt es in Größen von etwa 100 bis 2.500 cc. Kleine Beutel brauchen kleine, große Beutel große Absorber; zu wenig Absorber lässt Restsauerstoff zurück. Absorber reagieren sofort mit Luft – nimm nur so viele aus der Packung, wie du in den nächsten Minuten verarbeitest, und verschließe den Rest luftdicht." },
          { h3: "Nicht alles gehört in Mylar" },
          { p: "Feuchte oder fettreiche Lebensmittel sind für die sauerstoffarme Lagerung ungeeignet: Fett wird trotz Absorber ranzig, und in feuchten Lebensmitteln ohne Sauerstoff können sich gefährliche Keime vermehren. Nüsse, Vollkornmehl und Ölsaaten halten auch in Mylar nur begrenzt." },
          { h3: "Getreidemühle: Hand oder elektrisch" },
          { p: "Elektrische Mühlen wie die Mockmill 100 mahlen schnell und bequem, brauchen aber Strom. Handmühlen kosten Kraft, funktionieren dafür auch ohne Strom. Wer Getreide als Vorrat einplant, sollte mindestens eine handbetriebene Möglichkeit haben." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Mylar-Beutel lohnen sich für jeden, der Trockenware lagert. Ein Einkochautomat für alle mit Garten oder Lust auf eigene Vorräte. Eine Handmühle für alle, die Getreide als Kern ihres Vorrats planen." },
          {
            cards: [
              { title: "Trockenware lagern", text: "Mit Absorbern verschweißt: Mylar-Beutel.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Garten & Ernte", text: "29 Liter mit Thermostat: WECK WAT 15.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Getreide-Vorrat", text: "Mehl ohne Strom: KoMo Handmühle.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Vakuumieren & mehr", text: "Vakuumierer, Absorber und elektrische Mühle in der Top 5.", link: { href: "#top5-zubehoer", label: "Zur Top 5" } },
              { title: "Fertige Reserve", text: "Notnahrung mit 10 bis 20 Jahren Haltbarkeit.", link: { href: "/krisenvorsorge/lebensmittel-lagerung/notnahrung/", label: "Notnahrung" } },
              { title: "Wasser dazu", text: "Kanister für 20 Liter pro Person.", link: { href: "/krisenvorsorge/wasserversorgung/wasserspeicher/", label: "Wasserspeicher" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-zubehoer",
    h2: "Die 5 besten Ergänzungen – Vakuumierer, Absorber, Mühle",
    intro:
      "Vakuumieren für den Kühlschrank, Absorber in großen Mengen, größere Beutel, eine elektrische Mühle und ein zweiter Einkochautomat: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "CASO VC300 Vakuumierer mit Folienrollen", for: "Frisches länger frisch", text: "Vakuumierer, laut Hersteller mit 30-cm-Schweißnaht und herausnehmbarer Vakuumkammer, im Set mit Folienrollen – verlängert die Haltbarkeit im Kühlschrank und Gefrierfach.", asin: "B0D58X4W24", query: "CASO VC300 Vakuumierer" },
      { name: "Wallaby Mylar-Beutel 1 Gallone (30 Stück)", for: "Mit Zipper, robust", text: "Stand-up-Beutel, laut Anbieter mit 7,5 mil Stärke, Zipper, Etiketten und 400-cc-Absorbern – wiederverschließbar für den laufenden Verbrauch.", asin: "B08SLGBGXV", query: "Wallaby Mylar Beutel 1 Gallone 30" },
      { name: "Sauerstoffabsorber 500 cc (50 Stück, einzeln verpackt)", for: "Absorber nachkaufen", text: "Einzeln verpackte Absorber – praktisch, weil nur geöffnet wird, was gerade gebraucht wird; auch für Einmachgläser.", asin: "B0C4638YP9", query: "Sauerstoffabsorber 500cc einzeln verpackt" },
      { name: "Mockmill 100 Getreidemühle", for: "Elektrisch mahlen", text: "Elektrische Mühle, laut Anbieter mit Korund-Keramik-Mahlsteinen und 360 W, Made in Germany und 6 Jahre Garantie.", asin: "B075S2J7T7", query: "Mockmill 100 Getreidemühle" },
      { name: "ROMMELSBACHER KA 1801 Einkochautomat", for: "Mit Auslaufhahn", text: "Laut Anbieter 27-Liter-Einkoch- und Glühweinautomat mit Ablasshahn und Einlegerost, Made in Germany.", asin: "B000KNFBXI", query: "Rommelsbacher KA 1801 Einkochautomat" },
    ],
  },

  guide: {
    sections: [
      {
        id: "sicher-einkochen",
        h2: "Wie kocht man sicher ein?",
        blocks: [
          { quick: "Saubere Gläser, frische Zutaten, korrekte Temperatur und Zeit – und bei säurearmen Lebensmitteln wie Bohnen und Fleisch die Regeln des BfR beachten: 121 °C unter Druck oder zweimal auf 100 °C im Abstand von ein bis zwei Tagen." },
          { p: "Einkochen ist eine bewährte Methode, deren Ergebnis ohne Kühlschrank lagert. Bei sauren Lebensmitteln wie Obst, Marmelade oder Tomaten mit Zitronensaft reichen 100 °C. Bei säurearmen Lebensmitteln können Sporen von Clostridium botulinum überleben und im luftdichten Glas das gefährliche Botulinumtoxin bilden – deshalb gelten hier strengere Regeln." },
          { figure: "steps" },
          { h3: "Checkliste Einkochen" },
          {
            list: [
              "**Gläser, Deckel und Ringe** heiß ausspülen; beschädigte Ringe und Gläser aussortieren.",
              "**Nur frische, einwandfreie Zutaten** verwenden.",
              "**Rand sauber halten**, damit die Gläser dicht schließen.",
              "**Zeit erst ab Erreichen der Temperatur** zählen.",
              "**Nach dem Abkühlen prüfen:** Deckel fest? Wölbt sich ein Deckel später, Glas entsorgen.",
              "**Kein Öl-Einlegen auf Vorrat:** Das BfR rät davon ab, in Öl eingelegtes Gemüse und Kräuter selbst für die Lagerung herzustellen.",
            ],
          },
          {
            facts: [
              { value: "121 °C", label: "Temperatur unter Druck, die das BfR für säurearme Lebensmittel nennt" },
              { value: "2 ×", label: "auf 100 °C im Abstand von 1–2 Tagen, wenn kein Druck-Einkochen möglich ist" },
              { value: "29 l", label: "Fassungsvermögen des WECK WAT 15 (Herstellerangabe)" },
            ],
          },
          { h3: "Warnzeichen" },
          { p: "Botulismus äußert sich laut BfR nach 12 bis 36 Stunden mit Übelkeit, Durchfall oder Verstopfung und neurologischen Symptomen wie Seh- oder Schluckstörungen. Bei Verdacht sofort ärztliche Hilfe suchen. Aufgewölbte Deckel oder Dosen nicht öffnen, sondern entsorgen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Wie lange halten Lebensmittel in Mylar-Beuteln?", a: "Trockene Lebensmittel wie Reis, Nudeln, Getreide und Hülsenfrüchte halten mit Sauerstoffabsorber laut Anbietern viele Jahre, teils werden 20 Jahre und mehr genannt. Voraussetzung sind trockene Ware, die richtige Absorbergröße und kühle, dunkle Lagerung." },
    { q: "Kann man Bohnen und Fleisch einkochen?", a: "Ja, aber mit besonderer Vorsicht. Das BfR empfiehlt für säurearme Lebensmittel das Erhitzen unter Druck auf 121 °C oder, wenn das nicht möglich ist, zweimaliges Erhitzen auf 100 °C im Abstand von ein bis zwei Tagen." },
    { q: "Lohnt sich ein Vakuumierer für die Krisenvorsorge?", a: "Für frische Lebensmittel im Kühlschrank und Gefrierfach ja. Für die Lagerung ohne Strom ist er weniger wichtig, weil vakuumierte Frischware trotzdem gekühlt werden muss. Für Trockenware sind Mylar-Beutel die bessere Wahl." },
    { q: "Warum Getreide statt Mehl lagern?", a: "Ganze Körner sind deutlich länger haltbar als Mehl, weil die Schale den fetthaltigen Keimling vor Sauerstoff schützt. Gemahlen wird erst bei Bedarf – mit einer Handmühle auch ohne Strom." },
    { q: "Welche Lebensmittel eignen sich nicht für Mylar und Absorber?", a: "Feuchte und fettreiche Lebensmittel wie Nüsse, Vollkornmehl, Trockenfleisch mit Restfeuchte oder Ölsaaten. Sie werden ranzig oder können ohne Sauerstoff gefährliche Keime entwickeln." },
    { q: "Brauche ich zum Verschweißen ein spezielles Gerät?", a: "Nein. Mylar-Beutel lassen sich mit einem Folienschweißgerät, aber auch mit einem heißen Bügeleisen oder Glätteisen auf einer harten Unterlage verschließen. Wichtig ist eine durchgehende, faltenfreie Naht." },
  ],

  sources: [
    { label: "BfR: Fragen und Antworten zum Botulismus", url: "https://www.bfr.bund.de/de/selten__aber_vermeidbar__fragen_und_antworten_zum_botulismus-70355.html" },
    { label: "BfR: Hinweise für Verbraucher zum Botulismus durch Lebensmittel (PDF)", url: "https://www.bfr.bund.de/cm/350/hinweise_fuer_verbraucher_zum_botulismus_durch_lebensmittel.pdf" },
    { label: "Utopia: Botulismus – Gefahr beim Einkochen vermeiden", url: "https://utopia.de/ratgeber/botulismus-so-vermeidest-du-die-gefahr-der-lebensmittelvergiftung-beim-einkochen_298125" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "notnahrung", text: "Fertige Langzeit-Notverpflegung." },
    { slug: "wasserspeicher", text: "Wasservorrat für 10 Tage." },
    { slug: "powerstations", text: "Strom für Kühlschrank und Einkochautomat." },
    { group: "lebensmittel-lagerung", text: "Alle Ratgeber zu Lebensmitteln & Lagerung." },
  ],
};
