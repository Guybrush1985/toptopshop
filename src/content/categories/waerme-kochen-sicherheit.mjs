// Kategorie: Wärme, Kochen & Sicherheit ohne Strom (Krisenvorsorge › Energie & Wärme)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "waerme-kochen-sicherheit",
  area: "krisenvorsorge",
  group: "energie-waerme",
  navLabel: "Wärme, Kochen & CO-Melder",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Wärme & Kochen ohne Strom: Die 3 wichtigsten Produkte 2026",
  metaDescription:
    "Sicher durch den Blackout: CO-Melder, Winterschlafsack und Gaskocher im Vergleich – plus Regeln für Kochen und Heizen ohne Strom und die Gefahr durch Kohlenmonoxid.",

  eyebrow: "Krisenvorsorge · Energie & Wärme",
  h1: "Wärme und Kochen ohne Strom: Die 3 wichtigsten Produkte 2026",
  lead:
    "Fällt im Winter der Strom aus, steht meist auch die Heizung still – und der Herd sowieso. Wer improvisiert, riskiert schnell eine Kohlenmonoxidvergiftung. Diese drei Produkte sorgen dafür, dass es warm, satt und sicher bleibt.",
  answer:
    "Die wichtigste Anschaffung ist ein CO-Melder wie der [**Ei Electronics Ei208D**](produkt:1), der vor dem geruchlosen Kohlenmonoxid warnt. Gegen Kälte hilft ein Winterschlafsack wie der [**deuter Orbit −5°**](produkt:2); zum Kochen empfehlen wir den Gaskocher [**Campingaz Camp Bistro 3**](produkt:3) mit Kartuschen – ausschließlich im Freien.",

  top3Title: "Unsere Top 3 für Wärme, Kochen und Sicherheit",
  top3Intro:
    "Drei Produkte, drei Aufgaben: warnen, wärmen, kochen. Zusammen decken sie die größten Risiken und Bedürfnisse bei einem Stromausfall in der kalten Jahreszeit ab.",
  comparisonTitle: "CO-Melder, Schlafsack und Gaskocher im Vergleich",

  criteria: [
    { key: "sicherheit", label: "Sicherheit", weight: 0.35, description: "Schutz vor Kohlenmonoxid, Brand und Unterkühlung; Risiko bei falscher Anwendung." },
    { key: "nutzen", label: "Nutzen im Blackout", weight: 0.3, description: "Wie sehr das Produkt einen mehrtägigen Stromausfall erleichtert." },
    { key: "handhabung", label: "Handhabung", weight: 0.15, description: "Bedienung, Lagerung, Wartung und Haltbarkeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.2, description: "Anschaffung und Folgekosten (Kartuschen, Batterie)." },
  ],

  method:
    "Grundlage sind Herstellerangaben, die Norm DIN EN 50291 für CO-Melder, die Temperaturangaben nach Schlafsack-Norm, Vorsorgehinweise von BBK und Kommunen zum Kochen und Heizen ohne Strom sowie Kundenerfahrungen. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Weil die drei Produkte unterschiedliche Aufgaben haben, bewerten wir sie nach gemeinsamen Kriterien für den Notfall; jedes Produkt wird von 0 bis 10 eingeordnet, die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Wichtigste Anschaffung",
      name: "Ei Electronics Ei208D CO-Melder",
      brand: "Ei Electronics",
      variant: "mit Display, 10-Jahres-Batterie",
      visual: { kind: "device", tone: "forest" },
      priceTier: 1,
      ratings: { sicherheit: 10.0, nutzen: 7.5, handhabung: 9.0, preis: 9.0 },
      bestFor: "Jeden Haushalt mit Feuer, Gas oder Ofen",
      verdict:
        "Kohlenmonoxid riecht man nicht, sieht man nicht und schmeckt man nicht. Der Ei208D misst laut Hersteller alle vier Sekunden die CO-Konzentration, zeigt sie im Display an und warnt laut, bevor es gefährlich wird – zehn Jahre lang ohne Batteriewechsel.",
      features: [
        "Elektrochemischer Sensor, Zulassung nach DIN EN 50291-1 für Wohnungen und EN 50291-2 für Wohnmobile und Boote",
        "LCD-Display mit CO-Konzentration, Ereignisspeicher nach einem Alarm",
        "Fest eingebaute 10-Jahres-Lithiumbatterie, Herstellung in Irland (Herstellerangabe)",
      ],
      pros: ["Warnt vor unsichtbarer Lebensgefahr", "Display zeigt auch niedrige Werte", "Kein Batteriewechsel"],
      cons: ["Ersetzt keinen Rauchmelder", "Nach 10 Jahren komplett tauschen", "Anleitung nur auf Deutsch"],
      specs: { aufgabe: "Warnen vor Kohlenmonoxid", energie: "10-Jahres-Batterie", einsatz: "Wohnräume, Schlafzimmer, Heizungsraum", achtung: "Rauchmelder trotzdem nötig" },
      asin: "B00Y8DOSXA",
      query: "Ei Electronics Ei208D CO-Melder",
    },
    {
      rank: 2,
      label: "Beste Wärme ohne Heizung",
      name: "deuter Orbit −5° Kunstfaserschlafsack",
      brand: "deuter",
      variant: "Komfort +1 °C, Limit −5 °C",
      visual: { kind: "pack", tone: "green" },
      priceTier: 2,
      ratings: { sicherheit: 9.0, nutzen: 8.5, handhabung: 8.0, preis: 7.0 },
      bestFor: "Kalte Nächte im Blackout",
      verdict:
        "Die sicherste Wärmequelle ist die eigene Körperwärme. Ein guter Schlafsack hält sie fest – ohne Brennstoff, Abgase oder Brandgefahr. Der Orbit −5° hat laut deuter eine Komforttemperatur von +1 °C.",
      features: [
        "Kunstfaserfüllung (High-Loft Hollowfibre), wärmt auch bei Feuchtigkeit",
        "Komforttemperatur +1 °C, Limit −5 °C, Extrem −23 °C (Herstellerangabe)",
        "Koppelbarer 2-Wege-Reißverschluss, Außenmaterial aus recycelten Materialien",
      ],
      pros: ["Wärme ohne Energie und Risiko", "Pflegeleichter als Daune", "Auch für Camping nutzbar"],
      cons: ["Größeres Packmaß als Daune", "Komforttemperatur liegt über dem Namenswert", "Ein Schlafsack pro Person nötig"],
      specs: { aufgabe: "Warm halten", energie: "keine", einsatz: "Schlafen in kalter Wohnung", achtung: "Isomatte gegen Bodenkälte" },
      asin: "B0BN26NHCM",
      query: "deuter Orbit -5 Kunstfaser Schlafsack",
    },
    {
      rank: 3,
      label: "Bester Kocher (nur im Freien)",
      name: "Campingaz Camp Bistro 3 mit 4 Kartuschen",
      brand: "Campingaz",
      variant: "2.200 W, CP 250",
      visual: { kind: "stove", tone: "mint" },
      priceTier: 1,
      ratings: { sicherheit: 6.0, nutzen: 9.0, handhabung: 8.5, preis: 8.5 },
      bestFor: "Kochen auf Balkon, Terrasse, Garten",
      verdict:
        "Kochen wie am Herd: ein Liter Wasser kocht laut Angaben in gut sechs Minuten, eine Kartusche reicht für rund 75 Minuten. Aber: Kartuschenkocher gehören nach draußen – in Innenräumen drohen Kohlenmonoxid und Brand.",
      features: [
        "Einflammiger Gaskocher mit 2.200 W, Piezozündung und Kartuschen-Sicherheitsverriegelung",
        "Rund 160 g Gas pro Stunde, eine CP-250-Kartusche hält etwa 1 h 15 min (Anbieterangaben)",
        "Set mit vier Ventilkartuschen CP 250, Tragekoffer",
      ],
      pros: ["Kocht wie ein Herd", "Kartuschen lange lagerfähig", "Günstig"],
      cons: ["Nur im Freien benutzen", "Kartuschenvorrat einplanen", "Bei Frost sinkt die Leistung von Butangas"],
      specs: { aufgabe: "Kochen, Wasser abkochen", energie: "Gaskartusche CP 250", einsatz: "nur im Freien", achtung: "Kohlenmonoxid- und Brandgefahr in Räumen" },
      asin: "B0B2176M7W",
      query: "Campingaz Camp Bistro 3 mit 4 Kartuschen CP250",
    },
  ],

  comparison: [
    { key: "aufgabe", label: "Aufgabe" },
    { key: "energie", label: "Energie" },
    { key: "einsatz", label: "Einsatzort" },
    { key: "achtung", label: "Wichtig" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "waerme-kochen-co-melder-stromausfall-bewertung-vergleich.svg",
      title: "Wärme, Kochen und Sicherheit im Blackout",
      alt: "Balkendiagramm: Bewertung von CO-Melder, Winterschlafsack und Gaskocher in den Kriterien Sicherheit, Nutzen im Blackout, Handhabung und Preis",
      caption: "Unsere Bewertung je Kriterium. Der CO-Melder ist das wichtigste Sicherheitsprodukt, der Gaskocher der größte Komfortgewinn.",
    },
    steps: {
      kind: "steps",
      file: "warm-bleiben-stromausfall-winter-anleitung.svg",
      title: "Warm bleiben im Winter-Blackout",
      subtitle: "Ohne Risiko durch Kohlenmonoxid",
      alt: "Infografik: Warm bleiben bei Stromausfall – einen Raum wählen, Fenster abdichten, Kleidung in Schichten, Schlafsack und Wärmflasche, keine Grills oder Kocher drinnen, kurz stoßlüften",
      caption: "Körperwärme halten ist sicherer als improvisiertes Heizen.",
      steps: [
        { title: "Einen Raum bewohnen", text: "Am besten klein und gut gedämmt, Türen zu den übrigen Räumen schließen." },
        { title: "Kälte draußen halten", text: "Rollläden und Vorhänge zu, Zugluft an Türen mit Decken oder Stoppern abdichten." },
        { title: "Schichten und Schlafsack", text: "Mütze, Socken, mehrere Lagen; nachts Schlafsack auf Isomatte, dazu eine Wärmflasche." },
        { title: "Kein Grill und kein Kocher drinnen", text: "Holzkohle, Gas und Heizpilze für draußen erzeugen in Räumen tödliches Kohlenmonoxid." },
        { title: "Kurz stoßlüften", text: "Einige Minuten weit öffnen, statt Fenster dauerhaft gekippt zu lassen." },
      ],
    },
  },

  editorial: {
    title: "Ohne Strom durch den Winter: wärmen, kochen, sicher bleiben",
    intro:
      "Warum Kohlenmonoxid die größte Gefahr im Blackout ist, wie man ohne Heizung warm bleibt und wo man ohne Strom kochen darf.",
    sections: [
      {
        id: "wichtigste-produkte",
        h2: "Was braucht man für Wärme und Kochen ohne Strom?",
        blocks: [
          { quick: "Am wichtigsten ist ein CO-Melder wie der [Ei208D](produkt:1). Dazu kommen ein warmer Schlafsack pro Person wie der [deuter Orbit −5°](produkt:2) und ein Gaskocher wie der [Campingaz Camp Bistro 3](produkt:3), der ausschließlich im Freien benutzt wird." },
          { first: "Bei einem Stromausfall im Winter wird es schneller kalt, als viele denken: Die meisten Gas- und Ölheizungen brauchen Strom für Zündung, Steuerung und Umwälzpumpe. Wärmepumpen ohnehin. Nach ein bis zwei Tagen sinkt die Temperatur in schlecht gedämmten Wohnungen deutlich. Gleichzeitig fehlt der Herd – und damit warmes Essen, heiße Getränke und die Möglichkeit, Wasser abzukochen." },
          { p: "In dieser Lage greifen Menschen zu Lösungen, die für draußen gedacht sind: Holzkohlegrill, Gasheizpilz, Campingkocher. In geschlossenen Räumen entsteht dabei Kohlenmonoxid. Das Gas ist geruchlos, verdrängt den Sauerstoff im Blut und führt zu Kopfschmerzen, Schwindel, Bewusstlosigkeit und Tod. Nach Stromausfällen und Unwettern kommt es immer wieder zu solchen Vergiftungen." },
          { p: "Deshalb steht der CO-Melder bei uns auf Platz 1, obwohl er weder wärmt noch kocht. Kommunale Ratgeber empfehlen geprüfte CO-Melder ausdrücklich, und sie raten, Kartuschenkocher und Grills nur im Freien zu verwenden. Drinnen sind nur Geräte erlaubt, die ausdrücklich für Innenräume zugelassen sind." },
          { figure: "scores" },
          { callout: { title: "Lebensgefahr durch Kohlenmonoxid", warn: true, text: "Grills, Kartuschenkocher, Heizpilze und Stromerzeuger nie in Wohnung, Keller, Garage oder Zelt betreiben – auch nicht bei offenem Fenster. Bei Kopfschmerzen, Schwindel oder Übelkeit sofort an die frische Luft und 112 rufen. Ein CO-Melder ersetzt keinen Rauchmelder." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "CO-Melder: Norm DIN EN 50291, Langzeitbatterie, idealerweise Display. Schlafsack: Komforttemperatur passend zur Raumtemperatur, Kunstfaser oder Daune. Kocher: stabiler Stand, Sicherheitsverriegelung, verfügbare Kartuschen – und ein Platz im Freien." },
          { h3: "CO-Melder richtig platzieren" },
          { p: "Ein CO-Melder gehört in Räume mit Feuerstätte (Kamin, Gastherme, Ofen) und in Schlafräume, wo eine Vergiftung im Schlaf unbemerkt bliebe. Herstellerangaben zur Montagehöhe und zum Abstand zur Feuerstätte beachten. Rauchwarnmelder sind in allen Bundesländern Pflicht, CO-Melder nicht – sie ergänzen sich, weil Rauchmelder kein Kohlenmonoxid erkennen." },
          { h3: "Schlafsack: auf die Komforttemperatur achten" },
          { p: "Schlafsäcke tragen drei Temperaturen: Komfort, Limit und Extrem. Maßgeblich ist der Komfortwert – bei ihm schläft eine Person in entspannter Haltung warm. Der Name „−5°“ beim deuter Orbit bezieht sich auf das Limit, die Komforttemperatur liegt laut deuter bei +1 °C. Für eine ungeheizte Wohnung mit 5 bis 12 °C ist das gut ausreichend, im Freien im Winter nicht." },
          {
            table: {
              caption: "Kochen ohne Strom: was wo erlaubt ist",
              head: ["Gerät", "Drinnen", "Draußen", "Hinweis"],
              rows: [
                ["**Kartuschen-Gaskocher**", "nein (außer ausdrücklich für Innenräume zugelassen)", "ja", "Kohlenmonoxid, Brandgefahr"],
                ["**Holzkohle- und Gasgrill**", "nie", "ja", "Häufigste Ursache von CO-Vergiftungen"],
                ["**Esbit- und Trockenbrennstoff**", "nein", "ja", "Für kleine Mengen Wasser"],
                ["**Fondue-Set, Stövchen**", "mit Vorsicht", "ja", "Nur zum Warmhalten kleiner Mengen"],
                ["**Powerstation + Wasserkocher**", "ja", "ja", "Braucht viel Akku: ca. 2.000 W"],
              ],
            },
          },
          { h3: "Kartuschen lagern" },
          { p: "Gaskartuschen kühl, trocken und nicht in Wohnräumen lagern, fern von Hitze und Zündquellen. Ventilkartuschen wie die CP 250 lassen sich vom Kocher abnehmen, bevor sie leer sind. Plane für zehn Tage mehrere Kartuschen ein: Bei rund 75 Minuten Brenndauer reicht eine Kartusche für einige Mahlzeiten und etwas abgekochtes Wasser." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Jeder Haushalt mit Kamin, Gastherme oder Ofen braucht einen CO-Melder. Jede Person braucht einen warmen Schlafsack. Ein Gaskocher lohnt sich für alle, die einen Balkon, eine Terrasse oder einen Garten haben." },
          {
            cards: [
              { title: "Sicherheit zuerst", text: "CO-Melder mit Display und 10-Jahres-Batterie: Ei208D.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Warm bleiben", text: "Kunstfaserschlafsack mit Komfort +1 °C: deuter Orbit −5°.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Kochen draußen", text: "Gaskocher mit Kartuschen: Campingaz Camp Bistro 3.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Kleine Helfer", text: "Kartuschen, Esbit, Wärmflasche und Rauchmelder in der Top 5.", link: { href: "#top5-ergaenzung", label: "Zur Top 5" } },
              { title: "Strom für Licht & Router", text: "Powerstations für den Blackout.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
              { title: "Essen ohne Kochen", text: "Notnahrung, die auch kalt schmeckt.", link: { href: "/krisenvorsorge/lebensmittel-lagerung/notnahrung/", label: "Notnahrung" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-ergaenzung",
    h2: "Die 5 besten Ergänzungen für Wärme und Kochen",
    intro:
      "Brennstoff auf Vorrat, ein zweiter Kocher, Wärme für die Nacht und Schutz vor Brand: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "Campingaz CP 250 Ventilkartuschen (6er-Pack)", for: "Brennstoff-Vorrat", text: "Isobutan-Mix für Camp Bistro und Festivo; die Ventilkartusche lässt sich vor dem Leerwerden abnehmen.", asin: "B0743CRYF8", query: "Campingaz CP 250 Ventilkartusche 6er" },
      { name: "Esbit Taschenkocher klein mit 6 × 14 g", for: "Zweiter Kocher, sehr klein", text: "Faltbarer Kocher mit Trockenbrennstoff, eine Tablette brennt laut Anbieter etwa 12 Minuten – nur im Freien.", asin: "B001C1UGVO", query: "Esbit Taschenkocher klein Trockenbrennstoff" },
      { name: "Fashy Wärmflasche 2 L mit Fleecebezug", for: "Wärme für die Nacht", text: "Mit heißem (nicht kochendem) Wasser gefüllt, wärmt sie den Schlafsack vor – laut Fashy nach britischem Standard BS 1970:2012.", asin: "B0B1QL7SCG", query: "Fashy Wärmflasche 2 Liter Fleecebezug" },
      { name: "Ei Electronics Ei650 Rauchwarnmelder", for: "Brandschutz", text: "Rauchmelder mit 10-Jahres-Batterie – Kerzen und Kocher erhöhen im Blackout das Brandrisiko.", asin: "B007IGQ5SK", query: "Ei Electronics Ei650 Rauchwarnmelder" },
      { name: "deuter Orbit SQ −5° Deckenschlafsack", for: "Als Decke oder gekoppelt", text: "Lässt sich als Decke öffnen oder mit einem zweiten Schlafsack koppeln – praktisch für Paare und Kinder.", asin: "B09MQRGD5M", query: "deuter Orbit SQ -5 Deckenschlafsack" },
    ],
  },

  guide: {
    sections: [
      {
        id: "sicher-heizen-kochen",
        h2: "Wie heizt und kocht man ohne Strom sicher?",
        blocks: [
          { quick: "Halte Körperwärme fest statt improvisiert zu heizen, koche nur im Freien oder mit für Innenräume zugelassenen Geräten und installiere einen CO-Melder. Im Zweifel helfen Notunterkünfte und Wärmestuben der Kommune." },
          { p: "Die Stadt Karlsbad rät in ihrem Vorsorgeratgeber: Ohne Heizung helfen warme Kleidung, Decken und Schlafsäcke, Fenster und Türen bleiben geschlossen, gelüftet wird kurz und weit geöffnet. Für Innenräume zugelassene Gasheizer, Ethanolkamine oder Petroleumöfen funktionieren ohne Strom – sie verbrauchen aber Sauerstoff und erzeugen Abgase, weshalb ein CO-Melder dann Pflicht sein sollte." },
          { figure: "steps" },
          { h3: "Kochen mit wenig Energie" },
          {
            list: [
              "**Topf mit Deckel:** spart einen großen Teil der Energie.",
              "**Einweichen statt lange kochen:** Linsen, Reis und Nudeln garen in vorgeweichtem Zustand schneller.",
              "**Thermoskanne nutzen:** Einmal Wasser kochen, für Tee, Instantgerichte und Babyflasche warmhalten.",
              "**Notfallkochbuch:** Das BBK hat ein Notfallkochbuch mit Rezepten ohne Strom und ohne Leitungswasser herausgegeben.",
            ],
          },
          {
            facts: [
              { value: "+1 °C", label: "Komforttemperatur des deuter Orbit −5°" },
              { value: "10 Jahre", label: "Batterielaufzeit des Ei208D" },
              { value: "≈ 75 min", label: "Brenndauer einer CP-250-Kartusche im Camp Bistro 3" },
            ],
          },
          { h3: "Wenn es zu kalt wird" },
          { p: "Ältere Menschen, Kleinkinder und Kranke kühlen schneller aus. Achte auf Nachbarn, die allein leben. Bei längeren Ausfällen richten Kommunen Wärmeinseln oder Notunterkünfte ein; Informationen gibt es über Radio, Lautsprecherdurchsagen und die Warn-App NINA, solange das Handy noch Akku hat." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Wie kocht man bei Stromausfall?", a: "Am einfachsten mit einem Gaskartuschenkocher wie dem Campingaz Camp Bistro 3 – aber nur im Freien, etwa auf Balkon oder Terrasse. Drinnen sind nur Geräte erlaubt, die ausdrücklich für Innenräume zugelassen sind. Zum Warmhalten kleiner Mengen eignen sich Stövchen oder Fondue-Set." },
    { q: "Darf man einen Gaskocher in der Wohnung benutzen?", a: "Kartuschenkocher für Camping sind in der Regel nur für den Außenbereich vorgesehen. In Innenräumen besteht die Gefahr einer Kohlenmonoxidvergiftung und eines Brandes. Beachte immer die Gebrauchsanweisung des Herstellers." },
    { q: "Brauche ich einen CO-Melder?", a: "Ja, wenn du einen Kamin, Ofen, eine Gastherme oder im Notfall andere Verbrennungsgeräte nutzt. Kohlenmonoxid ist geruchlos und wird von Rauchmeldern nicht erkannt. Unsere Empfehlung ist der Ei Electronics Ei208D mit Display." },
    { q: "Wie hält man die Wohnung ohne Heizung warm?", a: "Einen Raum gemeinsam bewohnen, Türen zu den übrigen Räumen schließen, Rollläden und Vorhänge zu, Zugluft abdichten. Mehrere Kleidungsschichten, Mütze und Socken tragen und nachts im Schlafsack auf einer Isomatte schlafen." },
    { q: "Welcher Schlafsack eignet sich für den Stromausfall?", a: "Einer mit einer Komforttemperatur um 0 °C, etwa der deuter Orbit −5° mit +1 °C Komfort. Für eine ungeheizte Wohnung reicht das in der Regel. Wichtig ist eine Isomatte gegen die Bodenkälte." },
    { q: "Welche Symptome hat eine Kohlenmonoxidvergiftung?", a: "Typisch sind Kopfschmerzen, Schwindel, Übelkeit, Müdigkeit und Verwirrtheit – oft bei mehreren Personen gleichzeitig. Sofort an die frische Luft, Fenster öffnen, Gerät abschalten (wenn gefahrlos möglich) und 112 rufen." },
  ],

  sources: [
    { label: "Stadt Karlsbad: Vorsorge für den Stromausfall (PDF)", url: "https://www.karlsbad.de/resources/ecics_8051_uyys2n.pdf" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Stiftung Warentest: CO-Warnmelder – Schutz vor Kohlenmonoxid", url: "https://www.test.de/CO-Warnmelder-Schutz-vor-Kohlenmonoxid-5085584-0/" },
    { label: "heidelberg24: Kochen trotz Stromausfall", url: "https://www.heidelberg24.de/verbraucher/stromausfall-blackout-kochen-gas-ohne-strom-essen-blackout-campingkocher-haushalt-zr-91721284.html" },
  ],

  related: [
    { slug: "powerstations", text: "Strom für Licht, Router und Kühlschrank." },
    { slug: "notnahrung", text: "Vorrat, der auch ohne Kochen satt macht." },
    { slug: "erste-hilfe-brandschutz", text: "Feuerlöscher, Löschdecke und Erste Hilfe." },
    { group: "energie-waerme", text: "Alle Ratgeber zu Energie & Wärme." },
  ],
};
