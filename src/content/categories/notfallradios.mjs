// Kategorie: Notfallradios – Kurbel, Solar, Batterie (Krisenvorsorge › Kommunikation & Technik)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "notfallradios",
  area: "krisenvorsorge",
  group: "kommunikation-technik",
  navLabel: "Notfallradios",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Notfallradios 2026 – Kurbel, Solar, DAB+",
  metaDescription:
    "Die 3 besten Kurbel- und Notfallradios 2026: Sangean MMR-99, ROCAM und Sony XDR-S61D im Vergleich – plus Stiftung-Warentest-Ergebnisse, Empfang und Stromversorgung.",

  eyebrow: "Krisenvorsorge · Kommunikation & Technik",
  h1: "Die 3 besten Notfallradios 2026",
  lead:
    "Fallen Strom, Mobilfunk und Internet aus, informieren die Behörden vor allem über das Radio. Ein Notfallradio mit Kurbel, Solarzelle oder Batterien empfängt Warnungen auch dann – das BBK empfiehlt ein batteriebetriebenes Radio für jeden Haushalt.",
  answer:
    "Unsere beste Gesamtwahl ist das [**Sangean MMR-99 DAB+**](produkt:1): DAB+ und UKW, Kurbel, Solar, USB-C, Powerbank-Funktion und Taschenlampe – laut Berichten zum Test der Stiftung Warentest (10/2023) das beste Kurbelradio mit „gut“. Den größten Akku zum kleinen Preis hat das [**ROCAM DAB+ Kurbelradio mit 12.000 mAh**](produkt:2); wer lieber auf AA-Batterien setzt, nimmt das [**Sony XDR-S61D**](produkt:3).",

  top3Title: "Unsere Top 3 Notfallradios",
  top3Intro:
    "Zwei Kurbelradios mit Solarzelle und eines mit AA-Batterien: Alle drei empfangen DAB+ und UKW und funktionieren ohne Steckdose.",
  comparisonTitle: "Die 3 besten Notfallradios im Vergleich",

  criteria: [
    { key: "empfang", label: "Empfang & Klang", weight: 0.3, description: "DAB+ und UKW, Empfangsleistung, Verständlichkeit, Testergebnisse." },
    { key: "energie", label: "Strom ohne Netz", weight: 0.3, description: "Kurbel, Solar, Batterien, Akkukapazität und Laufzeit." },
    { key: "extras", label: "Notfall-Extras", weight: 0.15, description: "Taschenlampe, Powerbank-Funktion, SOS, Schutzart." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung und Qualität." },
  ],

  method:
    "Grundlage sind der Digitalradio-Test der Stiftung Warentest mit Kurbel- und Batteriegeräten (Heft 10/2023) und darauf beruhende Berichte, Herstellerangaben zu Empfang, Akku und Ausstattung sowie die Empfehlungen des BBK. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Radio wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Sangean MMR-99 DAB+",
      brand: "Sangean",
      variant: "Kurbel, Solar, USB-C, IP55",
      visual: { kind: "radio", tone: "forest" },
      priceTier: 3,
      ratings: { empfang: 9.0, energie: 9.0, extras: 9.0, preis: 6.5 },
      bestFor: "Der Klassiker für jeden Haushalt",
      verdict:
        "Das durchdachteste Notfallradio: guter DAB+- und UKW-Empfang, vier Lademöglichkeiten, Powerbank, Taschenlampe und Spritzwasserschutz. In Berichten zum Stiftung-Warentest-Test 10/2023 das bestbewertete Kurbelradio („gut“).",
      features: [
        "DAB+ und UKW mit RDS, 40 Senderspeicher, Bluetooth, AUX und Kopfhöreranschluss",
        "Laden per Handkurbel, Solar, USB-C; 18650-Lithium-Akku mit 2.600 mAh, Powerbank-Funktion",
        "LED-Taschenlampe mit SOS- und Rotlicht, Gehäuse nach IP55 (Herstellerangaben)",
      ],
      pros: ["Bester Testkandidat mit Kurbel", "Viele Lademöglichkeiten", "Robust und spritzwassergeschützt"],
      cons: ["Teuer", "Kurbeln ist mühsam", "Betriebstemperatur laut Nutzern eingeschränkt"],
      specs: { empfang: "DAB+, UKW", strom: "Kurbel, Solar, USB-C, Akku 2.600 mAh", extras: "Taschenlampe, Powerbank, Bluetooth", schutz: "IP55", test: "„gut“ (Berichte zu Heft 10/2023)" },
      asin: "B09SZ9XSQS",
      query: "Sangean MMR-99 DAB+",
    },
    {
      rank: 2,
      label: "Größter Akku",
      name: "ROCAM DAB+ Kurbelradio 12.000 mAh",
      brand: "ROCAM",
      variant: "Solar, Kurbel, Bluetooth",
      visual: { kind: "radio", tone: "mint" },
      priceTier: 1,
      ratings: { empfang: 7.0, energie: 8.5, extras: 8.0, preis: 9.0 },
      bestFor: "Viel Reserve für Radio und Handy",
      verdict:
        "Viel Akku für wenig Geld: 12.000 mAh speisen Radio, Taschenlampe und Handyladung über Tage. Empfang und Verarbeitung erreichen nicht das Niveau von Sangean, als zusätzliche Reserve ist es aber sehr nützlich.",
      features: [
        "DAB+ und UKW, Bluetooth, Farbdisplay (Anbieterangaben)",
        "12.000-mAh-Akku, Solarpanel und Handkurbel, USB-Ladeausgang fürs Handy",
        "LED-Taschenlampe und SOS-Alarm",
      ],
      pros: ["Sehr großer Akku", "Günstig", "Lädt das Handy"],
      cons: ["Kein unabhängiger Test", "Handkurbel lädt laut Nutzern nur wenig", "Angaben zur Kapazität nicht unabhängig geprüft"],
      specs: { empfang: "DAB+, UKW", strom: "Kurbel, Solar, USB, Akku 12.000 mAh", extras: "Taschenlampe, SOS, Powerbank, Bluetooth", schutz: "–", test: "–" },
      asin: "B0FLQ4H2VW",
      query: "ROCAM DAB+ Kurbelradio 12000 mAh Solar",
    },
    {
      rank: 3,
      label: "Mit AA-Batterien",
      name: "Sony XDR-S61D",
      brand: "Sony",
      variant: "DAB+/UKW, 4 × AA oder Netz",
      visual: { kind: "radio", tone: "green" },
      priceTier: 2,
      ratings: { empfang: 9.0, energie: 7.5, extras: 6.0, preis: 8.0 },
      bestFor: "Batterievorrat statt Kurbel",
      verdict:
        "Ein hervorragendes Digitalradio, das mit vier AA-Batterien oder Akkus läuft – laut Sony bis zu 28 Stunden. Wer Batterien auf Vorrat hat, braucht keine Kurbel. In Berichten zum Test 10/2023 das beste Gerät ohne Kurbel.",
      features: [
        "DAB, DAB+ und UKW mit RDS, Senderspeicher, Wecker",
        "Betrieb mit 4 × AA oder Netzteil, laut Sony bis zu 28 Stunden Laufzeit",
        "Kompakt, guter Klang laut Nutzerberichten",
      ],
      pros: ["Sehr guter Empfang", "Batterien lange lagerbar und überall erhältlich", "Kompakt"],
      cons: ["Keine Kurbel, kein Solar", "Keine Taschenlampe oder Powerbank", "Laufzeit mit Akkus laut Nutzern schwankend"],
      specs: { empfang: "DAB+, UKW", strom: "4 × AA oder Netz", extras: "Wecker", schutz: "–", test: "bestes ohne Kurbel (Berichte zu Heft 10/2023)" },
      asin: "B074DXWK8K",
      query: "Sony XDR-S61D",
    },
  ],

  comparison: [
    { key: "empfang", label: "Empfang" },
    { key: "strom", label: "Stromversorgung" },
    { key: "extras", label: "Extras" },
    { key: "schutz", label: "Schutzart" },
    { key: "test", label: "Unabhängiger Test" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-notfallradios-kurbelradio-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Notfallradios 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Notfallradios 2026 in den Kriterien Empfang, Strom ohne Netz, Notfall-Extras und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Das Sangean MMR-99 ist das beste Gesamtpaket, das ROCAM hat den größten Akku.",
    },
    steps: {
      kind: "steps",
      file: "notfallradio-vorbereiten-warnungen-empfangen-anleitung.svg",
      title: "Notfallradio richtig vorbereiten",
      subtitle: "Damit du Warnungen auch im Blackout hörst",
      alt: "Infografik: Notfallradio vorbereiten – Sender speichern, Akku laden, Batterien bereitlegen, Empfang testen, Warntag nutzen",
      caption: "Ein Radio, das im Schrank leer geworden ist, hilft im Ernstfall nicht.",
      steps: [
        { title: "Regionale Sender speichern", text: "Den öffentlich-rechtlichen Sender deiner Region auf UKW und DAB+ als Favorit." },
        { title: "Akku voll halten", text: "Alle drei Monate laden – Akkus verlieren auch im Schrank Ladung." },
        { title: "Batterien bereitlegen", text: "Passende Batterien mit langem Haltbarkeitsdatum im selben Fach." },
        { title: "Empfangsort testen", text: "Im Keller ist der Empfang oft schlecht – Fensterplätze ausprobieren." },
        { title: "Warntag nutzen", text: "Beim bundesweiten Warntag prüfen, ob Radio und Warn-App funktionieren." },
      ],
    },
  },

  editorial: {
    title: "Radio im Blackout: Die wichtigste Informationsquelle",
    intro:
      "Warum das Radio im Krisenfall unverzichtbar ist, ob UKW oder DAB+ besser ist und welche Stromversorgung sich bewährt.",
    sections: [
      {
        id: "bestes-notfallradio",
        h2: "Welches Notfallradio ist das beste?",
        blocks: [
          { quick: "Das [Sangean MMR-99 DAB+](produkt:1) ist die beste Wahl: DAB+ und UKW, Kurbel, Solar, Powerbank und Taschenlampe. Den größten Akku hat das [ROCAM 12.000 mAh](produkt:2), mit AA-Batterien läuft das [Sony XDR-S61D](produkt:3)." },
          { first: "In Deutschland warnen die Behörden über einen Mix aus Kanälen: Warn-Apps wie NINA, Cell Broadcast aufs Handy, Sirenen, Lautsprecherdurchsagen, Fernsehen – und Radio. Fallen Strom und Mobilfunk aus, bleibt oft nur das Radio. Rundfunksender haben in der Regel eine robuste Notstromversorgung und erreichen ein großes Gebiet. Das BBK nennt ein batteriebetriebenes Radio deshalb als festen Bestandteil der Notfallvorsorge." },
          { p: "Notfallradios gehen einen Schritt weiter: Neben Batterien oder Akku lassen sie sich per Handkurbel oder Solarzelle laden, viele haben eine Taschenlampe und können das Handy laden. Stiftung Warentest hat 2023 Digitalradios mit Batteriefach oder Akku und Kurbel geprüft; die Laufzeiten reichten bis zu 54 Stunden. Nach Berichten zum Test schnitt das Sangean MMR-99 unter den Kurbelradios am besten ab." },
          { p: "Unsere Gesamtwahl ist deshalb das Sangean MMR-99 in der DAB+-Version. Es ist teurer als die vielen No-Name-Kurbelradios, bietet aber den besten Mix aus Empfang, Ausstattung und Robustheit. Als zweites Gerät oder für ein kleines Budget lohnt ein günstiges Kurbelradio mit großem Akku." },
          { figure: "scores" },
          { callout: { title: "Modell genau prüfen", text: "Das Sangean MMR-99 gibt es auch ohne DAB+ (nur AM/FM). Achte beim Kauf auf „DAB“ im Namen, wenn du Digitalradio empfangen willst." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Notfallradios achten?",
        blocks: [
          { quick: "Wichtig sind UKW und DAB+, mindestens zwei Stromquellen (Akku plus Kurbel, Solar oder Batterien), eine verständliche Lautsprecherwiedergabe und eine robuste Bauweise. Taschenlampe und Powerbank sind nützliche Extras." },
          {
            table: {
              caption: "Stromquellen für Notfallradios",
              head: ["Stromquelle", "Vorteil", "Nachteil"],
              rows: [
                ["**Batterien (AA)**", "Lange lagerbar, überall erhältlich", "Vorrat nötig"],
                ["**Akku**", "Wiederaufladbar, oft Powerbank-Funktion", "Entlädt sich im Schrank"],
                ["**Handkurbel**", "Immer verfügbar", "Mühsam, wenig Energie pro Minute"],
                ["**Solarzelle**", "Lädt tagsüber nebenbei", "Klein, langsam, wetterabhängig"],
              ],
            },
          },
          { h3: "UKW oder DAB+?" },
          { p: "Beides. UKW wird von vielen Sendern mit großer Reichweite ausgestrahlt und funktioniert auch mit einfachen Geräten. DAB+ bietet mehr Sender und oft besseren Klang. Ein Gerät mit beiden Empfangswegen ist im Ernstfall am flexibelsten – fällt ein Sendernetz aus, bleibt das andere." },
          { h3: "Kurbel realistisch einschätzen" },
          { p: "Eine Handkurbel ist eine Rückfallebene, kein Hauptantrieb. Nutzer berichten, dass sich der Akku damit nur langsam laden lässt. Wichtiger ist ein voll geladener Akku und ein Vorrat an Batterien. Die Solarzelle hält den Akku bei Tageslicht nebenbei auf Stand." },
          { h3: "Robustheit und Bedienung" },
          { p: "Ein Notfallradio muss auch im Dunkeln und unter Stress bedienbar sein: große Tasten, beleuchtetes Display, gespeicherte Lieblingssender. Spritzwasserschutz wie IP55 beim Sangean hilft, wenn das Radio draußen oder im feuchten Keller steht." },
        ],
      },
      {
        id: "welches-passt",
        h2: "Welches Radio passt zu wem?",
        blocks: [
          { quick: "Wer ein einziges, hochwertiges Notfallradio will, nimmt das Sangean MMR-99. Wer viel Akku für wenig Geld möchte, das ROCAM. Wer Batterien bevorzugt und vor allem guten Empfang will, das Sony XDR-S61D." },
          {
            cards: [
              { title: "Das eine Notfallradio", text: "Bestes Kurbelradio mit DAB+: Sangean MMR-99.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Viel Reserve", text: "12.000 mAh, Solar und Kurbel: ROCAM.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Batterie-Vorrat", text: "Bester Empfang mit AA-Batterien: Sony XDR-S61D.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Weitere Bauformen", text: "Taschenradios und Warnfunktion in der Top 5.", link: { href: "#top5-bauform", label: "Zur Top 5" } },
              { title: "Licht ohne Strom", text: "Stirnlampen und Laternen für den Schutzraum.", link: { href: "/krisenvorsorge/schutzraum-ausstattung/ausstattung-licht/", label: "Ausstattung & Licht" } },
              { title: "Antworten senden", text: "Satelliten-Messenger und Funkgeräte.", link: { href: "/krisenvorsorge/kommunikation-technik/satelliten-kommunikation/", label: "Satelliten-Messenger" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-bauform",
    h2: "Die 5 besten Alternativen – nach Bauform",
    intro:
      "Ob Taschenradio mit AA-Akkus, Gerät mit automatischer Warnfunktion oder Zweitradio für den Notfallrucksack: Diese fünf Geräte ergänzen die Top 3.",
    items: [
      { name: "Sangean DPR-76 DAB+", for: "Taschenradio mit AA-Akkus", text: "Kleines DAB+/UKW-Radio mit 4 × AA; NiMH-Akkus lassen sich laut Nutzern im Gerät laden. In Berichten zum Test 10/2023 ebenfalls mit „gut“.", asin: "B07KCMBDVJ", query: "Sangean DPR-76 DAB+" },
      { name: "TechniSat DIGITRADIO 1A", for: "Mit Warnfunktion", text: "Tragbares DAB+-Radio, das laut Anbieter eine automatische Sicherheitswarnung unterstützt – Details zur Funktion beim Hersteller prüfen.", asin: "B0FMDTW5QF", query: "TechniSat DIGITRADIO 1A" },
      { name: "Sangean MMR-88 DAB", for: "Kleineres Sangean-Kurbelradio", text: "Kompakter Vorgänger mit Kurbel, Taschenlampe und Kopfhöreranschluss.", asin: "B071R3SGZQ", query: "Sangean MMR-88 DAB" },
      { name: "ROCAM DAB+ Kurbelradio 5.000 mAh", for: "Leichteres Zweitradio", text: "DAB+/UKW mit 5.000-mAh-Akku, AAA-Batteriefach, Solar und Kurbel – laut Anbieter bis zu 30 Stunden Radio.", asin: "B0BKRJPQ3P", query: "ROCAM Kurbelradio DAB+ 5000 mAh" },
      { name: "Kurbelradio DAB+/UKW mit Campinglampe 3.000 mAh", for: "Radio plus Laterne", text: "Kombination aus Laterne und Kurbelradio mit DAB+ und UKW, Solarzelle und SOS-Alarm – für den Notfallrucksack.", asin: "B0BNDHHWN6", query: "Kurbelradio DAB+ Campinglampe 3000 mAh" },
    ],
  },

  guide: {
    sections: [
      {
        id: "warnungen-empfangen",
        h2: "Wie empfängt man im Ernstfall die richtigen Informationen?",
        blocks: [
          { quick: "Speichere den öffentlich-rechtlichen Sender deiner Region auf UKW und DAB+, halte das Radio geladen und höre bei einer Warnung regelmäßig zur vollen und halben Stunde die Nachrichten." },
          { p: "Bei großen Lagen senden die regionalen Programme der öffentlich-rechtlichen Rundfunkanstalten Durchsagen der Behörden. Sie enthalten, was zu tun ist: drinnen bleiben, Fenster schließen, Wasser abkochen, wo es Hilfe gibt. Notiere dir die Frequenzen deiner regionalen Sender auf einem Zettel im Radio – im Stress sucht man sonst lange." },
          { figure: "steps" },
          { h3: "Strom sparen" },
          {
            list: [
              "**Lautstärke niedrig halten** – laute Wiedergabe kostet am meisten Strom.",
              "**Gezielt einschalten:** zu den Nachrichten, bei Durchsagen, dann wieder aus.",
              "**Displaybeleuchtung aus**, wenn möglich.",
              "**Tagsüber in die Sonne legen**, damit die Solarzelle nachlädt.",
            ],
          },
          {
            facts: [
              { value: "54 h", label: "längste Laufzeit im Digitalradio-Test der Stiftung Warentest" },
              { value: "28 h", label: "Laufzeit des Sony XDR-S61D mit AA-Batterien laut Sony" },
              { value: "2.600 mAh", label: "Akku des Sangean MMR-99" },
            ],
          },
          { h3: "Warntag" },
          { p: "Beim bundesweiten Warntag, der jedes Jahr im September stattfindet, werden alle Warnkanäle gleichzeitig getestet. Ein guter Anlass, das Notfallradio einzuschalten, den Empfang zu prüfen und den Akku zu laden." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Kurbelradio ist das beste?", a: "Unsere beste Gesamtwahl ist das Sangean MMR-99 in der DAB+-Version. In Berichten zum Digitalradio-Test der Stiftung Warentest (10/2023) war es das bestbewertete Kurbelradio mit „gut“." },
    { q: "Brauche ich DAB+ oder reicht UKW?", a: "Ideal ist ein Gerät mit beidem. UKW wird großflächig ausgestrahlt und funktioniert mit einfachen Geräten, DAB+ bietet mehr Sender. Fällt ein Sendernetz aus, bleibt das andere." },
    { q: "Warum empfiehlt das BBK ein batteriebetriebenes Radio?", a: "Weil Radio bei Strom- und Mobilfunkausfall oft die einzige Informationsquelle ist. Über die regionalen Sender verbreiten die Behörden Warnungen und Verhaltenshinweise." },
    { q: "Wie lange muss man ein Kurbelradio kurbeln?", a: "Das hängt vom Gerät ab. Nutzer berichten, dass sich ein Akku per Kurbel nur langsam laden lässt. Die Kurbel ist eine Rückfallebene; wichtiger sind ein geladener Akku, Batterien und die Solarzelle." },
    { q: "Kann ich mit einem Notfallradio mein Handy laden?", a: "Viele Kurbelradios haben einen USB-Ausgang, etwa das Sangean MMR-99 und das ROCAM. Die Ladung reicht meist für eine Teil- oder volle Ladung, je nach Akkugröße." },
    { q: "Wo bewahre ich das Notfallradio auf?", a: "Griffbereit, trocken und zusammen mit Ersatzbatterien und einem Zettel mit den Frequenzen der regionalen Sender. Lade den Akku alle paar Monate nach." },
  ],

  sources: [
    { label: "Stiftung Warentest: Digitalradios im Test", url: "https://www.test.de/Digitalradios-im-Test-4868028-0/" },
    { label: "produkte-im-test.de: Digitalradio-Testsieger der Stiftung Warentest", url: "https://produkte-im-test.de/digitalradio-test-stiftung-warentest" },
    { label: "netzwelt: Kurbelradios mit DAB+ im Vergleich", url: "https://www.netzwelt.de/lautsprecher/kaufberatung-kurbelradios-dab-plus-vergleich-7-notfallradios-lassen-euch-stromausfall-stich.html" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "funkgeraete-pmr", text: "Walkie-Talkies für Familie und Nachbarn." },
    { slug: "handys-powerbanks", text: "Robuste Zweithandys und große Powerbanks." },
    { slug: "ausstattung-licht", text: "Licht und Notfallrucksack." },
    { group: "kommunikation-technik", text: "Alle Ratgeber zu Kommunikation & Technik." },
  ],
};
