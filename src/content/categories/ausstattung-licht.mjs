// Kategorie: Ausstattung & Licht (Krisenvorsorge › Schutzraum & Ausstattung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "ausstattung-licht",
  area: "krisenvorsorge",
  group: "schutzraum-ausstattung",
  navLabel: "Licht & Notfallrucksack",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Licht & Notfallrucksack: Die 3 besten für den Ernstfall 2026",
  metaDescription:
    "Die 3 besten Produkte für Licht und Notgepäck 2026: Ledlenser H7R Core, Laterne ML6 und ein gepackter Notfallrucksack – plus BBK-Checkliste und Tipps für den Keller.",

  eyebrow: "Krisenvorsorge · Schutzraum & Ausstattung",
  h1: "Licht und Notfallrucksack: Die 3 besten für den Ernstfall 2026",
  lead:
    "Im Blackout ist es abends sofort stockdunkel – im Keller sogar tagsüber. Eine gute Stirnlampe hält die Hände frei, eine Laterne macht einen Raum hell, und ein fertig gepackter Notfallrucksack spart im Ernstfall wertvolle Minuten. Diese drei Produkte sind die beste Wahl.",
  answer:
    "Unsere beste Gesamtwahl ist die Stirnlampe [**Ledlenser H7R Core**](produkt:1): 1.000 Lumen, fokussierbar, IP67 und mit wechselbarem Akku. Für Raumlicht empfehlen wir die Laterne [**Ledlenser ML6**](produkt:2) mit 750 Lumen und Powerbank-Funktion; als Grundlage fürs Notgepäck den gepackten [**AdLuWa Fluchtrucksack**](produkt:3).",

  top3Title: "Unsere Top 3 für Licht und Notgepäck",
  top3Intro:
    "Eine Stirnlampe für jede Person, eine Laterne pro Raum und ein Rucksack, der fertig an der Tür steht: Mit diesen drei Produkten ist die Grundausstattung für Keller und Evakuierung komplett.",
  comparisonTitle: "Stirnlampe, Laterne und Notfallrucksack im Vergleich",

  criteria: [
    { key: "nutzen", label: "Nutzen im Notfall", weight: 0.3, description: "Wie sehr das Produkt im Blackout, im Keller oder bei einer Evakuierung hilft." },
    { key: "laufzeit", label: "Energie & Laufzeit", weight: 0.25, description: "Akku, Batterien, Leuchtdauer, Lademöglichkeiten." },
    { key: "robust", label: "Robustheit", weight: 0.2, description: "Schutzart, Verarbeitung, Garantie." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Leistung und Lebensdauer." },
  ],

  method:
    "Grundlage sind die Vorsorgeempfehlungen des BBK zu Licht und Notgepäck, Tests von Stirnlampen (u. a. Auto Bild 2026, outdoor-magazin.com), Herstellerangaben zu Leuchtkraft, Laufzeit und Schutzart sowie Kundenerfahrungen. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Ledlenser H7R Core",
      brand: "Ledlenser",
      variant: "1.000 lm, 21700-Akku, IP67",
      visual: { kind: "lamp", tone: "forest" },
      priceTier: 2,
      ratings: { nutzen: 9.0, laufzeit: 8.5, robust: 9.0, preis: 7.0 },
      bestFor: "Jede Person im Haushalt",
      verdict:
        "Eine Stirnlampe hält die Hände frei – zum Kochen, Tragen, Erste Hilfe leisten. Die H7R Core leuchtet laut Ledlenser bis 250 Meter weit, lässt sich von breit auf fokussiert stellen und läuft im Sparmodus bis zu 65 Stunden.",
      features: [
        "Bis 1.000 Lumen, bis 250 m Leuchtweite, fokussierbar, Kopf um 130° schwenkbar (Herstellerangaben)",
        "Wechselbarer 21700-Lithium-Ionen-Akku (4.800 mAh), magnetisches Ladekabel",
        "Schutzart IP67, im Sparmodus bis zu 65 Stunden",
      ],
      pros: ["Sehr hell und fokussierbar", "Wechselakku – Ersatz möglich", "Wasser- und staubdicht"],
      cons: ["Relativ schwer (ca. 259 g)", "Teurer als einfache Stirnlampen", "Magnetkabel nicht verlieren"],
      specs: { licht: "bis 1.000 lm", energie: "21700-Akku, magnetisch laden", laufzeit: "bis 65 h (Sparmodus)", schutz: "IP67", besonderheit: "fokussierbar, schwenkbar" },
      asin: "B08F2LB5LS",
      query: "Ledlenser H7R Core Stirnlampe",
    },
    {
      rank: 2,
      label: "Bestes Raumlicht",
      name: "Ledlenser ML6",
      brand: "Ledlenser",
      variant: "750 lm, Powerbank",
      visual: { kind: "lamp", tone: "mint" },
      priceTier: 2,
      ratings: { nutzen: 8.5, laufzeit: 8.5, robust: 8.0, preis: 7.0 },
      bestFor: "Wohnzimmer, Keller, Zelt",
      verdict:
        "Eine Laterne macht einen ganzen Raum hell – angenehmer als jede Taschenlampe. Die ML6 liefert bis zu 750 Lumen, hängt an Haken oder Magnet und lädt im Notfall auch das Handy.",
      features: [
        "Bis 750 Lumen, laut Ledlenser im niedrigsten Modus bis zu 70 Stunden",
        "Wechselbarer Li-Ionen-Akku (3,6 V, 3.200 mAh), Powerbank-Funktion per USB",
        "Gummihaken, Magnet und Standfuß; Variante mit warmem Licht erhältlich",
      ],
      pros: ["Helles, blendfreies Raumlicht", "Lädt Handys", "Vielseitig aufhängbar"],
      cons: ["Angaben zur Schutzart schwanken je nach Variante", "Einzelne Berichte über defekte Powerbank-Funktion"],
      specs: { licht: "bis 750 lm", energie: "Akku 3.200 mAh, USB", laufzeit: "bis 70 h (niedrig)", schutz: "IP54–IP66 (je nach Angabe)", besonderheit: "Powerbank, Magnet" },
      asin: "B07FD2VPJ3",
      query: "Ledlenser ML6 Laterne",
    },
    {
      rank: 3,
      label: "Notgepäck",
      name: "AdLuWa Fluchtrucksack – Notfallrucksack gefüllt",
      brand: "AdLuWa",
      variant: "72-Stunden-Notvorsorge",
      visual: { kind: "pack", tone: "green" },
      priceTier: 2,
      ratings: { nutzen: 9.0, laufzeit: 6.5, robust: 7.0, preis: 7.0 },
      bestFor: "Evakuierung & schneller Aufbruch",
      verdict:
        "Muss man das Haus schnell verlassen, zählt jede Minute. Ein gepackter Rucksack mit Licht, Erster Hilfe, Wasser- und Wärmeausrüstung steht bereit – laut Anbieter nach BBK-Empfehlungen für 72 Stunden zusammengestellt.",
      features: [
        "Fertig gepackter Rucksack für die 72-Stunden-Notvorsorge (Anbieterangabe)",
        "Inhalt laut Anbieter an BBK-Empfehlungen orientiert",
        "Mit persönlichen Dingen ergänzen: Medikamente, Dokumentenkopien, Bargeld, Kleidung",
      ],
      pros: ["Sofort einsatzbereit", "Spart Zeit beim Zusammenstellen", "Gute Basis zum Ergänzen"],
      cons: ["Inhalt vor dem Kauf genau prüfen", "Persönliches muss man selbst ergänzen", "Kein unabhängiger Test"],
      specs: { licht: "laut Packliste", energie: "–", laufzeit: "72-Stunden-Konzept", schutz: "–", besonderheit: "fertig gepackt" },
      asin: "B0GZHZBN5R",
      query: "AdLuWa Fluchtrucksack Notfallrucksack gefüllt",
    },
  ],

  comparison: [
    { key: "licht", label: "Licht" },
    { key: "energie", label: "Energie" },
    { key: "laufzeit", label: "Laufzeit" },
    { key: "schutz", label: "Schutzart" },
    { key: "besonderheit", label: "Besonderheit" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "stirnlampe-laterne-notfallrucksack-bewertung-vergleich.svg",
      title: "Licht und Notgepäck: Die 3 besten für den Ernstfall",
      alt: "Balkendiagramm: Bewertung von Stirnlampe, Laterne und Notfallrucksack in den Kriterien Nutzen, Energie, Robustheit und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Die H7R Core ist am vielseitigsten, der Rucksack am wichtigsten für die Evakuierung.",
    },
    steps: {
      kind: "steps",
      file: "notfallrucksack-packen-checkliste.svg",
      title: "Notfallrucksack richtig packen",
      subtitle: "Was zusätzlich zum fertigen Set hineingehört",
      alt: "Infografik: Notfallrucksack packen – Dokumente, Medikamente, Licht und Radio, Wasser und Verpflegung, Kleidung und Schlafsack, Bargeld",
      caption: "Ein Rucksack pro Person, griffbereit an einem festen Platz.",
      steps: [
        { title: "Dokumente", text: "Kopien von Ausweis, Versicherungen, Medikationsplan – wasserdicht verpackt." },
        { title: "Medikamente und Erste Hilfe", text: "Persönliche Medikamente für einige Tage, Verbandmaterial, Brille." },
        { title: "Licht und Radio", text: "Stirnlampe, Ersatzbatterien, kleines Kurbel- oder Batterieradio." },
        { title: "Wasser und Verpflegung", text: "Trinkflasche, Wasserfilter, Notration für zwei bis drei Tage." },
        { title: "Kleidung und Wärme", text: "Wechselkleidung, Regenschutz, Rettungsdecke oder Schlafsack." },
      ],
    },
  },

  editorial: {
    title: "Licht und Notgepäck: Die Grundausstattung für jeden Haushalt",
    intro:
      "Warum Kerzen keine gute Lösung sind, welche Lampe wofür taugt und was in einen Notfallrucksack gehört.",
    sections: [
      {
        id: "beste-ausstattung",
        h2: "Welche Lampen und welcher Notfallrucksack sind die besten?",
        blocks: [
          { quick: "Die [Ledlenser H7R Core](produkt:1) ist die beste Stirnlampe für den Notfall, die [Ledlenser ML6](produkt:2) die beste Laterne. Als Basis fürs Notgepäck eignet sich der gepackte [AdLuWa Fluchtrucksack](produkt:3)." },
          { first: "Licht ist im Stromausfall das erste, was fehlt – und das, was am meisten Sicherheit gibt. Kerzen sind dabei die schlechteste Lösung: Sie erhöhen das Brandrisiko erheblich, gerade wenn viele Menschen im Dunkeln hantieren. Feuerwehren warnen nach Stromausfällen regelmäßig vor Bränden durch Kerzen. LED-Lampen mit Akku oder Batterien sind sicherer, heller und sparsamer." },
          { p: "Für jeden Haushalt empfehlen wir zwei Lampentypen: eine Stirnlampe pro Person, damit die Hände frei bleiben, und eine Laterne pro genutztem Raum. Dazu kommen Ersatzbatterien oder eine Möglichkeit zum Laden, etwa über eine Powerbank oder Powerstation." },
          { p: "Für die Evakuierung empfiehlt das BBK ein Notgepäck pro Person: einen Rucksack mit Dokumenten, Medikamenten, Erster Hilfe, Radio, Licht, Verpflegung und Kleidung. Fertig gepackte Rucksäcke sind eine gute Basis – persönliche Dinge wie Medikamente und Dokumente muss man aber immer selbst ergänzen." },
          { figure: "scores" },
          { callout: { title: "Kerzen nur mit Vorsicht", warn: true, text: "Kerzen und Teelichter nie unbeaufsichtigt lassen, nicht in die Nähe von Vorhängen stellen und nicht im Kinderzimmer nutzen. Ein Rauchwarnmelder ist Pflicht – gerade im Blackout, wenn mehr offenes Feuer brennt." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Bei Stirnlampen zählen Helligkeit, Leuchtdauer, Akku oder Batterie, Schutzart und Tragekomfort. Bei Laternen blendfreies Raumlicht und Aufhängemöglichkeiten. Beim Notfallrucksack der Inhalt, die Qualität und das Gewicht." },
          {
            table: {
              caption: "Lampentypen für den Notfall",
              head: ["Lampe", "Stärke", "Schwäche"],
              rows: [
                ["**Stirnlampe**", "Hände frei, leuchtet, wohin man schaut", "Blendet andere, nur Spot"],
                ["**Laterne**", "Hellt ganze Räume auf", "Nicht zum Gehen geeignet"],
                ["**Taschenlampe**", "Große Reichweite", "Eine Hand belegt"],
                ["**Kerze**", "Ohne Strom", "Brandgefahr, wenig Licht"],
              ],
            },
          },
          { h3: "Akku oder Batterie" },
          { p: "Akkulampen sind im Alltag günstiger und umweltfreundlicher, brauchen im Blackout aber eine Lademöglichkeit. Batterielampen lassen sich mit gelagerten Batterien sofort betreiben. Ideal ist eine Mischung – oder Lampen, die beides können. Bei der H7R Core lässt sich der Akku wechseln; ein zweiter Akku verdoppelt die Laufzeit." },
          { h3: "Helligkeit realistisch wählen" },
          { p: "Für den Alltag im Haus reichen meist 50 bis 200 Lumen – höhere Stufen kosten viel Akku. Die maximale Helligkeit braucht man draußen, beim Suchen oder in großen Räumen. Gute Lampen bieten mehrere Stufen und ein rotes Licht, das die Nachtsicht schont." },
          { h3: "Notfallrucksack" },
          { p: "Prüfe bei fertigen Rucksäcken die Packliste: Wie viel Wasser und Verpflegung, welche Erste-Hilfe-Ausstattung, welche Lichtquelle, welcher Wärmeschutz? Viele Sets setzen auf einfache Komponenten. Tausche Schwachstellen aus, etwa die Lampe gegen eine gute Stirnlampe." },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Jede Person braucht eine Stirnlampe und einen eigenen Rucksack. Für jeden Raum, in dem man sich im Ernstfall aufhält, gehört eine Laterne dazu." },
          {
            cards: [
              { title: "Licht für unterwegs", text: "Hell, fokussierbar, IP67: Ledlenser H7R Core.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Licht für den Raum", text: "750 Lumen und Powerbank: Ledlenser ML6.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Schnell raus", text: "Gepackter Rucksack als Basis: AdLuWa.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Mit Batterien & günstiger", text: "Weitere Lampen und Sets in der Top 5.", link: { href: "#top5-alternativen", label: "Zur Top 5" } },
              { title: "Ins Gepäck", text: "Erste-Hilfe-Koffer nach DIN.", link: { href: "/krisenvorsorge/schutzraum-ausstattung/erste-hilfe-brandschutz/", label: "Erste Hilfe" } },
              { title: "Informationen", text: "Kurbel- und Solarradios für den Rucksack.", link: { href: "/krisenvorsorge/kommunikation-technik/notfallradios/", label: "Notfallradios" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen – Batterie, Warmlicht, Familien-Sets",
    intro:
      "Batterie-Stirnlampe, Laterne mit warmem Licht, günstige Laterne mit Powerbank und Notfall-Sets für mehrere Personen: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "Ledlenser H7 SE", for: "Mit AAA-Batterien", text: "Batteriebetriebene Stirnlampe mit 300 Lumen, 160 m Leuchtweite und Rücklicht – laut Ledlenser bis 30 Stunden.", asin: "B08XXGRP77", query: "Ledlenser H7 SE Stirnlampe" },
      { name: "Ledlenser ML6 Warm Light", for: "Gemütliches Licht", text: "Die ML6 mit warmweißem Licht – angenehmer für lange Abende, laut Anbieter bis zu 200 Stunden im kleinsten Modus.", asin: "B07Y3XG9LM", query: "Ledlenser ML6 Warm Light" },
      { name: "Daffodil LEC600 Campinglampe", for: "Günstige Laterne", text: "Wiederaufladbare Laterne mit 3.600-mAh-Powerbank, Rotlicht und Schutzklasse IPX6.", asin: "B0CP29RWDH", query: "Daffodil LEC600 Campinglampe" },
      { name: "First My Family Notfall-Set für 2 Personen", for: "Für Paare", text: "Survival- und Erste-Hilfe-Set für zwei Personen – Inhalt mit der BBK-Checkliste abgleichen.", asin: "B09VTM8P2Z", query: "First My Family Notfall Set 2 Personen" },
      { name: "Fluchtrucksack für 1 Person – Komplettset", for: "Alternative zum AdLuWa", text: "Gefüllter Rucksack für Notfälle und Katastrophen; laut Anbieter auch für zwei Personen und Familien erhältlich.", asin: "B0D18P7DBP", query: "Fluchtrucksack 1 Person Komplettset" },
    ],
  },

  guide: {
    sections: [
      {
        id: "licht-im-blackout",
        h2: "Wie organisiert man Licht im Blackout?",
        blocks: [
          { quick: "Lampen an festen Orten griffbereit lagern, Akkus geladen halten, Batterien in passender Größe bevorraten und Licht sparsam einsetzen: Laterne für den gemeinsamen Raum, Stirnlampe für Wege und Arbeiten." },
          { p: "Der wichtigste Moment ist der erste: Fällt abends der Strom aus, muss man im Dunkeln die erste Lampe finden. Lege deshalb an mehreren Stellen eine Lampe bereit – im Flur, in der Küche, am Bett. Leuchtende Markierungen oder Lampen mit Fluoreszenz-Elementen wie die ML6 helfen dabei." },
          { figure: "steps" },
          { h3: "Checkliste Licht" },
          {
            list: [
              "**Eine Stirnlampe pro Person** – auch für Kinder.",
              "**Eine Laterne pro Raum**, in dem ihr euch aufhaltet.",
              "**Ersatzbatterien** in den richtigen Größen, Haltbarkeitsdatum notieren.",
              "**Ladeweg** über Powerbank, Powerstation oder Solar einplanen.",
              "**Rauchmelder prüfen** – mehr offenes Licht heißt mehr Brandgefahr.",
            ],
          },
          {
            facts: [
              { value: "1.000 lm", label: "maximale Helligkeit der Ledlenser H7R Core" },
              { value: "750 lm", label: "maximale Helligkeit der Ledlenser ML6" },
              { value: "72 h", label: "Konzept vieler gepackter Notfallrucksäcke" },
            ],
          },
          { h3: "Den Rucksack aktuell halten" },
          { p: "Einmal im Jahr – etwa zum bundesweiten Warntag im September – Rucksack ausräumen, Lebensmittel und Medikamente auf Haltbarkeit prüfen, Batterien tauschen, Kleidung an die Jahreszeit und das Wachstum der Kinder anpassen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Stirnlampe ist für den Notfall am besten?", a: "Unsere Empfehlung ist die Ledlenser H7R Core: bis 1.000 Lumen, fokussierbar, IP67 und mit wechselbarem Akku. Wer lieber Batterien nutzt, nimmt die Ledlenser H7 SE mit AAA-Batterien." },
    { q: "Was gehört in einen Notfallrucksack?", a: "Laut BBK gehören ins Notgepäck unter anderem Dokumentenkopien, persönliche Medikamente, Erste-Hilfe-Material, ein Radio, eine Lampe, Verpflegung und Wasser für einige Tage, Wechselkleidung, Schlafsack oder Decke und etwas Bargeld." },
    { q: "Lohnt sich ein fertig gepackter Notfallrucksack?", a: "Als Basis ja, weil er Zeit spart. Prüfe aber die Packliste und ergänze persönliche Dinge wie Medikamente, Brille, Dokumente und passende Kleidung. Schwache Komponenten, etwa einfache Lampen, lassen sich austauschen." },
    { q: "Sind Kerzen im Stromausfall eine gute Idee?", a: "Nur mit großer Vorsicht. Kerzen erhöhen das Brandrisiko. LED-Lampen mit Akku oder Batterie sind sicherer und heller. Wer Kerzen nutzt, lässt sie nie unbeaufsichtigt und hat Rauchmelder und Feuerlöscher griffbereit." },
    { q: "Wie viele Lampen braucht ein Haushalt?", a: "Mindestens eine Stirnlampe pro Person und eine Laterne pro genutztem Raum, dazu Ersatzbatterien oder eine Lademöglichkeit." },
    { q: "Wie lange halten Stirnlampen im Notfall?", a: "Das hängt von der Stufe ab. Die H7R Core läuft laut Ledlenser im Sparmodus bis zu 65 Stunden, auf voller Leistung deutlich kürzer. Für den Alltag im Haus reicht meist eine niedrige Stufe." },
  ],

  sources: [
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Auto Bild: Stirnlampen im Test", url: "https://www.autobild.de/produkttests/stirnlampen-test-20705499.html" },
    { label: "outdoor-magazin.com: Stirnlampen-Vergleich", url: "https://www.outdoor-magazin.com/wanderausruestung/stirnlampen-test-2023/" },
  ],

  related: [
    { slug: "hygiene-sanitaer", text: "Campingtoilette und Hygienevorrat für den Keller." },
    { slug: "erste-hilfe-brandschutz", text: "Erste-Hilfe-Koffer und Feuerlöscher." },
    { slug: "notfallradios", text: "Radio für Warnungen der Behörden." },
    { group: "schutzraum-ausstattung", text: "Alle Ratgeber zu Schutzraum & Ausstattung." },
  ],
};
