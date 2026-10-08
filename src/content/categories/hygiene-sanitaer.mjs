// Kategorie: Hygiene & Sanitär (Krisenvorsorge › Schutzraum & Ausstattung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "hygiene-sanitaer",
  area: "krisenvorsorge",
  group: "schutzraum-ausstattung",
  navLabel: "Hygiene & Notfall-WC",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Hygiene im Notfall: Campingtoilette, WC-Beutel & Desinfektion",
  metaDescription:
    "Die 3 besten Produkte für Hygiene ohne Wasser 2026: Thetford Porta Potti, Toilettenbeutel mit Geliermittel und Sterillium – plus Notfall-WC, Müll und Hygienevorrat.",

  eyebrow: "Krisenvorsorge · Schutzraum & Ausstattung",
  h1: "Hygiene im Notfall: Die 3 besten Produkte 2026",
  lead:
    "Fällt die Wasserversorgung aus, funktioniert auch die Toilettenspülung nicht mehr – und mit fehlender Hygiene steigt das Risiko für Infektionen. Eine Campingtoilette, Toilettenbeutel mit Geliermittel und Händedesinfektion lösen die drängendsten Probleme.",
  answer:
    "Unsere beste Gesamtwahl ist die Campingtoilette [**Thetford Porta Potti Qube 145**](produkt:1): geschlossen, geruchsarm und mit eigener Spülung aus dem Frischwassertank. Als einfachste Notlösung für Eimer oder Toilette empfehlen wir [**Toilettenbeutel mit Geliermittel**](produkt:2); für saubere Hände ohne Wasser [**Sterillium classic pure**](produkt:3).",

  top3Title: "Unsere Top 3 für Hygiene ohne Wasser",
  top3Intro:
    "Eine richtige Toilette, eine platzsparende Notlösung und Händedesinfektion: Damit bleibt die Hygiene auch dann gewahrt, wenn tagelang kein Wasser aus der Leitung kommt.",
  comparisonTitle: "Campingtoilette, Toilettenbeutel und Desinfektion im Vergleich",

  criteria: [
    { key: "hygiene", label: "Hygiene & Geruch", weight: 0.35, description: "Wie zuverlässig das Produkt Keime, Geruch und Kontakt mit Ausscheidungen verhindert." },
    { key: "handhabung", label: "Handhabung", weight: 0.25, description: "Aufbau, Benutzung, Entleerung, Entsorgung." },
    { key: "vorrat", label: "Lagerfähigkeit", weight: 0.15, description: "Platzbedarf und Haltbarkeit im Vorrat." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis pro Nutzung bzw. Tag." },
  ],

  method:
    "Grundlage sind die Vorsorgeempfehlungen des BBK zu Hygiene und Hausapotheke, Herstellerangaben zu Tankvolumen, Geliermittel und Wirkspektrum sowie Kundenerfahrungen. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Thetford Porta Potti Qube 145",
      brand: "Thetford",
      variant: "12 l Fäkalientank, 15 l Frischwasser",
      visual: { kind: "station", tone: "forest" },
      priceTier: 2,
      ratings: { hygiene: 9.0, handhabung: 8.0, vorrat: 8.0, preis: 7.0 },
      bestFor: "Familie, mehrere Tage, Schutzraum",
      verdict:
        "Eine vollwertige Toilette ohne Wasseranschluss: geschlossener Fäkalientank, eigene Spülung aus dem Frischwassertank, kompakt genug für Keller oder Abstellraum. Mit Sanitärzusatz bleibt sie über Tage geruchsarm.",
      features: [
        "Fäkalientank 12 l, Frischwassertank 15 l, Sitzhöhe ca. 32 cm (Anbieterangaben)",
        "Maße ca. 330 × 383 × 427 mm, rund 3,6 kg leer",
        "Mit Sanitärzusätzen (Flüssig oder Tabs) geruchsarm; Entleerung über Drehausguss",
      ],
      pros: ["Geschlossenes, geruchsarmes System", "Eigene Spülung", "Bewährtes Campingprodukt"],
      cons: ["Niedrige Sitzhöhe", "Entleerung muss geplant werden", "Sanitärzusatz separat"],
      specs: { typ: "Chemietoilette", wasser: "eigener 15-l-Tank", nutzung: "mehrere Tage (je nach Personen)", entsorgung: "Tank in Toilette oder nach Behördenhinweis", extra: "Sanitärzusatz nötig" },
      asin: "B00L4KV1XU",
      query: "Thetford Porta Potti Qube 145",
    },
    {
      rank: 2,
      label: "Einfachste Notlösung",
      name: "CareBag Toilettenbeutel mit Geliermittel (20 Stück)",
      brand: "CareBag",
      variant: "für Eimer, Toilette oder Campingklo",
      visual: { kind: "pack", tone: "mint" },
      priceTier: 1,
      ratings: { hygiene: 7.5, handhabung: 8.0, vorrat: 9.0, preis: 8.0 },
      bestFor: "Wohnung ohne Platz für eine Campingtoilette",
      verdict:
        "Beutel in die Toilettenschüssel oder einen Eimer einsetzen, benutzen, verschließen: Eine Gel-Schicht verwandelt Flüssigkeit laut Anbieter in eine feste, geruchsarme Masse. Platzsparend und jahrelang lagerfähig.",
      features: [
        "Beutel mit GelMax-Schicht, laut Anbieter für bis zu etwa 600 ml Flüssigkeit",
        "Passt in Toilette, Eimer oder Campingtoilette",
        "20 Stück pro Packung – auch als 2er- und 3er-Pack erhältlich",
      ],
      pros: ["Kein Wasser nötig", "Sehr platzsparend", "Einfache Entsorgung im Restmüll (Herstellerhinweise beachten)"],
      cons: ["Einweg – Vorrat einplanen", "Pro Tag und Person mehrere Beutel nötig", "Nicht biologisch abbaubar"],
      specs: { typ: "Gel-Toilettenbeutel", wasser: "keins", nutzung: "1 Beutel pro Benutzung", entsorgung: "verschlossen im Restmüll", extra: "Eimer oder Toilette als Sitz" },
      asin: "B01IY0Y6A2",
      query: "CareBag Toilettenbeutel 20 Stück Gel",
    },
    {
      rank: 3,
      label: "Hände ohne Wasser",
      name: "Sterillium classic pure 500 ml",
      brand: "Hartmann / Bode",
      variant: "farbstoff- und parfümfrei",
      visual: { kind: "gel", tone: "green" },
      priceTier: 1,
      ratings: { hygiene: 8.0, handhabung: 9.0, vorrat: 6.0, preis: 8.5 },
      bestFor: "Händehygiene ohne Waschbecken",
      verdict:
        "Ohne fließendes Wasser ist Händedesinfektion der wichtigste Schutz vor Durchfall- und Atemwegserkrankungen. Sterillium classic pure ist ein bewährtes Händedesinfektionsmittel aus dem Klinikalltag – farbstoff- und parfümfrei.",
      features: [
        "Wirkstoffe Propan-2-ol, Propan-1-ol und Mecetroniumetilsulfat (Anbieterangabe)",
        "Laut Anbieter wirksam gegen Bakterien, Hefepilze und behüllte Viren",
        "Für hygienische und chirurgische Händedesinfektion, mit Hautpflegekomplex",
      ],
      pros: ["Wirkt ohne Wasser", "Hautfreundlich formuliert", "Günstig"],
      cons: ["Entzündlich – kühl und fern von Flammen lagern", "Nicht gegen alle Erreger (z. B. unbehüllte Viren) voll wirksam", "Verursacht schwere Augenreizung"],
      specs: { typ: "Händedesinfektion", wasser: "keins", nutzung: "3 ml je Anwendung (Packungsangabe beachten)", entsorgung: "–", extra: "entzündlich" },
      asin: "B0026UXMUW",
      query: "Sterillium classic pure 500 ml",
    },
  ],

  comparison: [
    { key: "typ", label: "Produkt" },
    { key: "wasser", label: "Wasser nötig" },
    { key: "nutzung", label: "Nutzung" },
    { key: "entsorgung", label: "Entsorgung" },
    { key: "extra", label: "Wichtig" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "hygiene-notfall-campingtoilette-desinfektion-bewertung-vergleich.svg",
      title: "Hygiene im Notfall: Die 3 besten Produkte",
      alt: "Balkendiagramm: Bewertung von Campingtoilette, Toilettenbeuteln und Händedesinfektion in den Kriterien Hygiene, Handhabung, Lagerfähigkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Die Campingtoilette ist am hygienischsten, die Beutel sind am platzsparendsten.",
    },
    steps: {
      kind: "steps",
      file: "notfall-toilette-ohne-wasser-anleitung.svg",
      title: "Notfall-Toilette ohne Wasser",
      subtitle: "So bleibt es hygienisch, wenn die Spülung nicht geht",
      alt: "Infografik: Notfall-Toilette einrichten – Wasser abstellen und Toilette nicht spülen, Beutel einsetzen, nach Gebrauch verschließen, getrennt lagern, Hände desinfizieren",
      caption: "Bei gestörter Abwasserentsorgung nicht spülen – sonst droht Rückstau in tieferen Etagen.",
      steps: [
        { title: "Hinweise der Behörden beachten", text: "Bei Wasserausfall oder Problemen im Abwassersystem nicht spülen." },
        { title: "Beutel einsetzen", text: "Gel-Beutel in Toilettenschüssel oder Eimer, Rand umschlagen." },
        { title: "Nach Gebrauch verschließen", text: "Luft herausdrücken, verknoten, in zweiten Beutel geben." },
        { title: "Getrennt lagern", text: "In einer verschließbaren Tonne, kühl und außerhalb der Wohnräume." },
        { title: "Hände desinfizieren", text: "Nach jedem Toilettengang und vor dem Essen." },
      ],
    },
  },

  editorial: {
    title: "Hygiene ohne fließendes Wasser: Was im Ernstfall hilft",
    intro:
      "Warum Hygiene in einer Krise schnell zum Gesundheitsthema wird, welche Toilettenlösung zu welcher Wohnung passt und was in den Hygienevorrat gehört.",
    sections: [
      {
        id: "beste-hygiene",
        h2: "Welche Hygieneprodukte braucht man für den Notfall?",
        blocks: [
          { quick: "Am wichtigsten sind eine Toilettenlösung ohne Wasser – die [Thetford Porta Potti Qube 145](produkt:1) oder [Toilettenbeutel mit Geliermittel](produkt:2) – und Händedesinfektion wie [Sterillium classic pure](produkt:3). Dazu kommen Müllbeutel, Feuchttücher und ein Hygienevorrat." },
          { first: "Ohne Strom fallen in vielen Gebäuden die Wasserpumpen aus, in Hochhäusern oft schon nach kurzer Zeit. Ohne Wasser funktionieren weder Spülung noch Waschbecken. In einer mehrtägigen Krise ist das nicht nur unangenehm, sondern ein Gesundheitsrisiko: Durchfallerkrankungen breiten sich dort am schnellsten aus, wo Händewaschen und Toilettenhygiene fehlen." },
          { p: "Das BBK empfiehlt deshalb einen Hygienevorrat als festen Teil der Notfallvorsorge: Seife, Zahnbürste und Zahnpasta, Toilettenpapier, Müllbeutel, Haushaltshandschuhe, Desinfektionsmittel – und für längere Ausfälle eine Campingtoilette mit Ersatzbeuteln und Hygienezusätzen." },
          { p: "Unsere Gesamtwahl ist die Thetford Porta Potti Qube 145, weil sie für eine Familie über mehrere Tage die hygienischste Lösung ist: geschlossen, mit Spülung und geruchsarm. Wer keinen Platz hat oder nur ein, zwei Tage überbrücken muss, ist mit Gel-Toilettenbeuteln gut versorgt – sie passen in jede Schublade." },
          { figure: "scores" },
          { callout: { title: "Nicht spülen, wenn das Abwasser gestört ist", warn: true, text: "Wenn Pumpwerke oder Kläranlagen ausfallen, kann Spülen zu Rückstau führen – bis hin zu Abwasser in tiefer gelegenen Wohnungen und Kellern. Achte auf die Hinweise von Stadtwerken und Behörden und nutze dann eine Notfall-Toilette." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man achten?",
        blocks: [
          { quick: "Bei Campingtoiletten zählen Tankgröße, Sitzhöhe, Geruchsdichtheit und Entleerung. Bei Toilettenbeuteln das Geliermittel, die Reißfestigkeit und die Menge. Bei Desinfektionsmitteln das Wirkspektrum und die Zulassung." },
          {
            table: {
              caption: "Toilettenlösungen für den Notfall",
              head: ["Lösung", "Vorteil", "Nachteil"],
              rows: [
                ["**Campingtoilette (Chemie)**", "Geschlossen, Spülung, geruchsarm", "Platz, Entleerung, Zusätze"],
                ["**Gel-Toilettenbeutel**", "Kein Wasser, sehr platzsparend", "Einweg, viel Müll"],
                ["**Eimer mit Müllbeutel + Katzenstreu**", "Billig, sofort improvisierbar", "Geruch, wenig hygienisch"],
                ["**Trenntoilette**", "Wenig Geruch, kein Chemiezusatz", "Teurer, Einarbeitung nötig"],
              ],
            },
          },
          { h3: "Händedesinfektion: auf die Wirksamkeit achten" },
          { p: "Händedesinfektionsmittel auf Alkoholbasis wirken gegen Bakterien und behüllte Viren wie Influenza- oder Coronaviren. Gegen unbehüllte Viren wie Noroviren braucht es Mittel mit erweitertem Wirkspektrum – die Angaben „begrenzt viruzid PLUS“ oder „viruzid“ auf dem Etikett zeigen das. Wenn Wasser verfügbar ist, bleibt gründliches Händewaschen mit Seife die Grundlage." },
          { h3: "Hygienevorrat" },
          {
            list: [
              "**Toilettenpapier und Feuchttücher** für mindestens zehn Tage",
              "**Müllbeutel** in verschiedenen Größen und eine verschließbare Tonne",
              "**Einweghandschuhe und Haushaltshandschuhe**",
              "**Seife, Zahnpasta, Zahnbürsten, Shampoo**, Monatshygiene, Windeln",
              "**Flächendesinfektion und Putzmittel**",
            ],
          },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Für Familien und Häuser mit Keller: Campingtoilette. Für kleine Wohnungen und den Notfallrucksack: Gel-Toilettenbeutel. Für alle: Händedesinfektion und ein Hygienevorrat." },
          {
            cards: [
              { title: "Familie & Keller", text: "Geschlossene Toilette mit Spülung: Thetford Porta Potti 145.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Kleine Wohnung", text: "Platzsparend, ohne Wasser: Gel-Toilettenbeutel.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Saubere Hände", text: "Ohne Waschbecken: Sterillium classic pure.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Zubehör", text: "Sanitärzusatz, Müllbeutel und mehr in der Top 5.", link: { href: "#top5-zubehoer", label: "Zur Top 5" } },
              { title: "Wasser filtern", text: "Brauchwasser aus Regentonne aufbereiten.", link: { href: "/krisenvorsorge/wasserversorgung/mobile-wasserfilter/", label: "Mobile Wasserfilter" } },
              { title: "Erste Hilfe", text: "Erste-Hilfe-Koffer nach DIN 13157.", link: { href: "/krisenvorsorge/schutzraum-ausstattung/erste-hilfe-brandschutz/", label: "Erste Hilfe & Brandschutz" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-zubehoer",
    h2: "Die 5 besten Ergänzungen für den Hygienevorrat",
    intro:
      "Sanitärzusatz für die Campingtoilette, robuste Müllbeutel, kompostierbare Beutel, ein Desinfektions-Vorrat und eine Lösung für unterwegs.",
    items: [
      { name: "AQAHY Campingtoiletten-Zusatz Tabs", for: "Geruch binden", text: "Tabs für Chemietoiletten, laut Anbieter kompatibel mit gängigen Campingtoiletten wie Thetford Porta Potti.", asin: "B0FBLDP3GZ", query: "AQAHY Campingtoilette Zusatz Tabs" },
      { name: "WADEO Toilettenbeutel 50 l (80 Stück)", for: "Robuste Müllbeutel", text: "Reißfeste Beutel für Campingtoilette, Eimer und Müll – als Zweitbeutel für verschlossene Gel-Beutel.", asin: "B0CDGMQJCR", query: "WADEO Toilettenbeutel 80 Stück 50 L" },
      { name: "Kompostierbare WC-Beutel (20 Stück)", for: "Umweltfreundlicher", text: "Laut Anbieter nach ASTM D6400 und OK Compost Home zertifiziert – für Trenntoiletten und Eimerlösungen.", asin: "B07JW5NHKS", query: "kompostierbare WC Beutel 20 Stück" },
      { name: "Sterillium 1.000 ml", for: "Desinfektions-Vorrat", text: "Großflasche zum Nachfüllen – für Familien und längere Ausfälle.", asin: "B000VJTQZK", query: "Sterillium 1000 ml" },
      { name: "Gel-Urinbeutel für unterwegs (2 Stück)", for: "Auto & Rucksack", text: "Einweg-Urinbeutel mit Gel für Stau, Evakuierung oder lange Wartezeiten.", asin: "B0D2CPX1SS", query: "Gel Urinbeutel Notfall Reisetoilette" },
    ],
  },

  guide: {
    sections: [
      {
        id: "notfall-wc",
        h2: "Wie richtet man eine Notfall-Toilette ein?",
        blocks: [
          { quick: "Bestimme einen festen Ort, setze Gel-Beutel in Toilette oder Eimer ein bzw. stelle die Campingtoilette auf, verschließe benutzte Beutel doppelt, lagere sie getrennt und desinfiziere nach jedem Gang die Hände." },
          { p: "Am einfachsten ist es, die normale Toilette als Sitz zu verwenden: Wasser im Spülkasten abstellen, Schüssel auspumpen oder trocken wischen, Beutel einsetzen. Alternativ dient ein stabiler Eimer mit Deckel als Basis. Die Campingtoilette steht am besten in einem Raum, der sich lüften lässt." },
          { figure: "steps" },
          { h3: "Müll und Abfälle" },
          {
            list: [
              "**Doppelt verpacken** und in einer verschließbaren Tonne sammeln.",
              "**Kühl und außerhalb der Wohnräume** lagern, etwa auf Balkon oder im Hof.",
              "**Getrennt von Lebensmitteln** – Schädlinge werden angelockt.",
              "**Hinweise der Kommune beachten,** wie Abfälle in einer Krise entsorgt werden.",
            ],
          },
          {
            facts: [
              { value: "12 l", label: "Fäkalientank der Porta Potti Qube 145" },
              { value: "≈ 600 ml", label: "Aufnahme eines Gel-Toilettenbeutels laut Anbieter" },
              { value: "10 Tage", label: "Vorsorgezeitraum, den das BBK empfiehlt" },
            ],
          },
          { h3: "Körperpflege mit wenig Wasser" },
          { p: "Waschlappen und eine Schüssel mit einem Liter Wasser reichen für eine Katzenwäsche. Feuchttücher ergänzen. Zähneputzen mit einem Becher Wasser. Das Brauchwasser – etwa aus Regentonne oder Badewanne – eignet sich für Körperpflege und Putzen, aber nicht zum Trinken ohne Aufbereitung." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Was tun, wenn die Toilettenspülung im Notfall nicht funktioniert?", a: "Nutze eine Campingtoilette oder setze Toilettenbeutel mit Geliermittel in die Toilettenschüssel oder einen Eimer. Wenn das Abwassersystem gestört ist, nicht spülen, um Rückstau zu vermeiden." },
    { q: "Welche Campingtoilette ist für den Notfall am besten?", a: "Unsere Empfehlung ist die Thetford Porta Potti Qube 145 mit 12-Liter-Fäkalientank und eigener Spülung aus einem 15-Liter-Frischwassertank. Sie ist geschlossen, geruchsarm und kompakt." },
    { q: "Wie viele Toilettenbeutel braucht man?", a: "Rechne mit mehreren Beuteln pro Person und Tag. Für eine Familie mit vier Personen und zehn Tagen kommen schnell über hundert Beutel zusammen – deshalb lohnt sich bei längeren Ausfällen eine Campingtoilette." },
    { q: "Wirkt Händedesinfektion gegen alle Erreger?", a: "Alkoholische Händedesinfektion wirkt gegen Bakterien und behüllte Viren. Gegen unbehüllte Viren wie Noroviren braucht es Mittel mit erweitertem Wirkspektrum. Wenn Wasser verfügbar ist, ist Händewaschen mit Seife die Grundlage." },
    { q: "Was gehört in den Hygienevorrat?", a: "Laut BBK unter anderem Seife, Zahnpasta und Zahnbürsten, Toilettenpapier, Müllbeutel, Haushaltshandschuhe und Desinfektionsmittel, für längere Ausfälle auch eine Campingtoilette mit Ersatzbeuteln und Hygienezusätzen." },
    { q: "Wie entsorgt man Toilettenbeutel in einer Krise?", a: "Doppelt verschlossen in einer dichten Tonne, kühl und außerhalb der Wohnräume lagern, bis die Müllabfuhr wieder läuft. Hinweise der Kommune beachten." },
  ],

  sources: [
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "BBK: Ratgeber in Leichter Sprache (PDF)", url: "https://www.ottweiler.de/pdf-dateien/sonstiges/ratgeber-leichte-sprache-download.pdf?cid=3km" },
    { label: "Stadt Karlsbad: Vorsorge für den Stromausfall (PDF)", url: "https://www.karlsbad.de/resources/ecics_8051_uyys2n.pdf" },
  ],

  related: [
    { slug: "erste-hilfe-brandschutz", text: "Erste-Hilfe-Koffer, Feuerlöscher, Löschdecke." },
    { slug: "wasserspeicher", text: "Wasser für Hygiene und Trinken lagern." },
    { slug: "ausstattung-licht", text: "Licht für Keller und Bad." },
    { group: "schutzraum-ausstattung", text: "Alle Ratgeber zu Schutzraum & Ausstattung." },
  ],
};
