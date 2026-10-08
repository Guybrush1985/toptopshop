// Kategorie: Kinderschrank (Kleider- und Spielzeugschrank)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "kinderschrank",
  area: "spielzimmer",
  navLabel: "Kinderschrank",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Kinderschrank: Die 3 besten Kleider- & Spielzeugschränke 2026",
  metaDescription:
    "Kleiderschrank oder Spielzeugschrank mit Klappe: die 3 besten Kinderschränke 2026 – mit Tipps zu Aufteilung, Kippschutz und unbedenklichem Material.",

  eyebrow: "Spielzimmer · Kinderschrank",
  h1: "Die 3 besten Kinderschränke 2026",
  lead:
    "Ein Kinderschrank ist das größte und schwerste Möbel im Kinderzimmer – und damit auch das, bei dem Sicherheit am meisten zählt. Wir zeigen die drei besten Kleiderschränke fürs Kinderzimmer und in der Top 5 Alternativen vom Spielzeugschrank mit Klappe bis zum offenen Montessori-Schrank.",
  answer:
    "Unsere beste Gesamtwahl ist der [**PINOLINO Kleiderschrank Linje**](produkt:1) mit drei Soft-Close-Türen, offenem Fach und vier verstellbaren Böden. Das beste Preis-Leistungs-Verhältnis bietet der nur 80 cm breite [**Forte WINNIE Kleiderschrank 80**](produkt:2), die Premium-Wahl ist der [**PINOLINO Kleiderschrank Natura**](produkt:3) aus massiver, geölter Buche. Jeder dieser Schränke muss an der Wand befestigt werden.",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 300 €" },
    2: { symbol: "€€", label: "ca. 300–700 €" },
    3: { symbol: "€€€", label: "über 700 €" },
  },

  top3Title: "Unsere Top 3 Kinderschränke",
  top3Intro:
    "Alle drei sind hohe Kleiderschränke mit Türen, Kleiderstange und Einlegeböden. Sie unterscheiden sich in Breite, Ausstattung und vor allem im Material: Holzwerkstoff mit Dekor oder Massivholz mit Ölfinish.",
  comparisonTitle: "Die 3 besten Kinderschränke im Vergleich",

  criteria: [
    { key: "sicherheit", label: "Kippschutz & Türen", weight: 0.3, description: "Wandbefestigung vorgeschrieben bzw. im Lieferumfang, Soft-Close oder Fingerklemmschutz an Türen, Garantie." },
    { key: "stauraum", label: "Innenaufteilung", weight: 0.25, description: "Kleiderstange(n), verstellbare Böden, offene Fächer laut Herstellerangabe." },
    { key: "material", label: "Material & Emissionen", weight: 0.25, description: "Massivholz oder Holzwerkstoff, Oberfläche (Öl/Dekor), Angaben zu Zertifikaten; Verarbeitung laut Kundenberichten." },
    { key: "kindgerecht", label: "Maße & Kinderhöhe", weight: 0.2, description: "Breite, Höhe und Tiefe fürs Kinderzimmer, erreichbare Fächer, Eignung zum Mitwachsen." },
  ],

  method:
    "Wir testen die Schränke nicht selbst. Grundlage sind Herstellerangaben (Maße, Ausstattung, Material, Beschläge), Händlerangaben und Kundenberichte, Montageanleitungen der Hersteller zur Wandbefestigung sowie die Norm EN 14749 zur Standsicherheit von Aufbewahrungsmöbeln. Einen aktuellen Test von Kinderkleiderschränken durch Stiftung Warentest oder Öko-Test haben wir nicht gefunden; Vergleichsportale ohne eigene Prüfung zitieren wir nicht als Test. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "PINOLINO Kleiderschrank Linje",
      brand: "PINOLINO",
      variant: "groß, 3 Türen, 1 offenes Fach (Modell 140009)",
      visual: { kind: "wardrobe", tone: "forest" },
      priceTier: 2,
      ratings: { sicherheit: 8.5, stauraum: 8.0, material: 7.0, kindgerecht: 7.5 },
      bestFor: "Familien, die einen geräumigen Markenschrank mit Soft-Close-Türen für viele Jahre suchen",
      verdict:
        "Der ausgewogenste Schrank im Vergleich: drei Türen mit Soft-Close-Beschlägen, ein offenes Fach für Lieblingssachen, vier verstellbare Böden und eine Kleiderstange. Das schlichte Design passt auch dann noch, wenn das Kinderzimmer längst anders aussieht.",
      features: [
        "B 110 × T 52 × H 188 cm, 3 Türen, 1 offenes Fach (Herstellerangabe)",
        "4 höhenverstellbare Einlegeböden, 1 Kleiderstange (Herstellerangabe)",
        "Soft-Close-Beschläge an den Türen, sollen das Einklemmen kleiner Finger verhindern (Herstellerangabe)",
        "Uni weiß oder Eiche mit Echtholzstruktur, Holzwerkstoff (Herstellerangabe)",
      ],
      pros: ["Soft-Close-Türen gegen geklemmte Finger", "Offenes Fach plus vier verstellbare Böden", "Zeitloses Design, wächst mit", "Lange Garantie laut Händlerangaben"],
      cons: ["Holzwerkstoff ohne veröffentlichte Emissionswerte", "Sehr schwer (83,5 kg) – Aufbau nur zu zweit", "Neues Modell mit noch wenigen Kundenbewertungen"],
      specs: {
        masse: "110 × 52 × 188 cm",
        tueren: "3 Türen, Soft-Close",
        innen: "4 Böden, 1 Stange, 1 offenes Fach",
        material: "Holzwerkstoff, weiß / Eiche-Struktur",
        garantie: "10 Jahre (laut Händlerangaben)",
      },
      asin: "B0DXVYPSGR",
      query: "PINOLINO Kleiderschrank Linje",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Forte WINNIE Kleiderschrank 80",
      brand: "Forte",
      variant: "80 cm, 2 Türen, Sonoma Eiche/Weiß (WNS92-Q45)",
      visual: { kind: "wardrobe", tone: "green" },
      priceTier: 1,
      ratings: { sicherheit: 6.5, stauraum: 7.0, material: 6.0, kindgerecht: 7.5 },
      bestFor: "Kleine Kinderzimmer und knappes Budget",
      verdict:
        "Kein spezielles Kindermöbel, aber ein schmaler, klassischer Zweitürer mit zwei Kleiderstangen und mehreren Fächern – auf nur 80 cm Breite. Wer wenig Platz und Budget hat, bekommt hier viel Stauraum; beim Kippschutz und bei den Türen muss man selbst mehr mitdenken.",
      features: [
        "Ca. 80 × 189 × 53 cm (B × H × T), 2 Türen (Herstellerangabe)",
        "6 Fächer und 2 Kleiderstangen (Herstellerangabe)",
        "Für die WINNIE-Serie schreibt Forte die Wandmontage vor (belegt für die 170er-Variante)",
        "2 Jahre Herstellergarantie (Herstellerangabe)",
      ],
      pros: ["Nur 80 cm breit", "Zwei Kleiderstangen plus Fächer", "Viele Kundenbewertungen", "Günstigster Schrank im Vergleich"],
      cons: ["Holzwerkstoff ohne Emissionsangaben", "Kein Soft-Close angegeben", "Angaben zur Fächerzahl im Listing uneinheitlich", "Nicht speziell für Kinder entwickelt"],
      specs: {
        masse: "ca. 80 × 53 × 189 cm",
        tueren: "2 Drehtüren",
        innen: "6 Fächer, 2 Stangen",
        material: "Holzwerkstoff, Sonoma-Eiche-Dekor/Weiß",
        garantie: "2 Jahre (Hersteller)",
      },
      asin: "B0085HMUPS",
      query: "Forte WINNIE Kleiderschrank 80",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "PINOLINO Kleiderschrank Natura",
      brand: "PINOLINO",
      variant: "2-türig, Buche massiv geölt (Art.-Nr. 142174)",
      visual: { kind: "wardrobe", tone: "mint" },
      priceTier: 3,
      ratings: { sicherheit: 8.0, stauraum: 7.5, material: 9.0, kindgerecht: 6.0 },
      bestFor: "Eltern, die Massivholz mit Ölfinish statt Spanplatte wollen",
      verdict:
        "Der Schrank für alle, die beim Material keine Kompromisse machen: massive Buche, geölt mit Hartöl auf Leinölbasis, Soft-Close-Türen, zwei Kleiderstangen und fünf Böden. Er ist teuer und mit 63 cm sehr tief – dafür auf viele Jahre ausgelegt.",
      features: [
        "Massive Buche, Hartöl auf Leinölbasis (Herstellerangabe)",
        "B 94 × T 63 × H 182 cm (Herstellerangabe)",
        "5 teils höhenverstellbare Böden, 2 Kleiderstangen, Soft-Close-Türen (Herstellerangabe)",
        "10 Jahre Pinolino-Plus-Garantie (laut Händlerangaben)",
      ],
      pros: ["Massivholz mit Ölfinish statt Dekorfolie", "Soft-Close-Türen", "Zwei Kleiderstangen plus fünf Böden", "Lange Garantie laut Händlerangaben"],
      cons: ["Teuerster Schrank im Vergleich", "63 cm tief – braucht Stellfläche", "Aufbau laut Kundenberichten anspruchsvoll", "Nur wenige Kundenbewertungen"],
      specs: {
        masse: "94 × 63 × 182 cm",
        tueren: "2 Türen, Soft-Close",
        innen: "5 Böden, 2 Stangen",
        material: "Buche massiv, Hartöl auf Leinölbasis",
        garantie: "10 Jahre (laut Händlerangaben)",
      },
      asin: "B004CR5AFC",
      query: "PINOLINO Kleiderschrank Natura",
    },
  ],

  comparison: [
    { key: "masse", label: "Maße (B × T × H)" },
    { key: "tueren", label: "Türen" },
    { key: "innen", label: "Innenaufteilung" },
    { key: "material", label: "Material" },
    { key: "garantie", label: "Garantie" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-kinderschraenke-2026-bewertung.svg",
      title: "Die 3 besten Kinderschränke 2026",
      alt: "Balkendiagramm: Bewertung von PINOLINO Linje, Forte WINNIE 80 und PINOLINO Natura in Kippschutz & Türen, Innenaufteilung, Material & Emissionen sowie Maße & Kinderhöhe",
      caption: "Unsere Bewertung je Kriterium. Linje punktet bei Türen und Aufteilung, Natura beim Material, WINNIE bei Breite und Preis.",
    },
    steps: {
      kind: "steps",
      file: "kinderschrank-sicher-aufstellen.svg",
      title: "Kinderschrank sicher aufstellen",
      subtitle: "Aufbau, Kippschutz und Ordnung",
      alt: "Infografik: Kinderschrank sicher aufstellen – zu zweit aufbauen, Kippschutz anbringen, Fingerschutz beachten, Ordnung auf Kinderhöhe, nachjustieren",
      caption: "Das Wichtigste ist die Wandbefestigung gegen Umkippen – mit Dübeln, die zur Wand passen.",
      steps: [
        { title: "Zu zweit aufbauen", text: "Nach Anleitung montieren, Türen und Scharniere zum Schluss einstellen." },
        { title: "Kippschutz anbringen", text: "Schrank mit dem mitgelieferten Beschlag an der Wand sichern." },
        { title: "Fingerschutz beachten", text: "Türen und Schubladen auf leichtgängiges, sanftes Schließen prüfen." },
        { title: "Ordnung auf Kinderhöhe", text: "Alltagskleidung unten, Saisonsachen oben einräumen." },
        { title: "Nachjustieren", text: "Scharniere und Schrauben gelegentlich nachziehen." },
      ],
    },
  },

  editorial: {
    title: "Kleiderschrank fürs Kinderzimmer: sicher, geräumig, langlebig",
    intro: "Welcher Kinderschrank der beste ist, worauf es bei Aufteilung, Türen und Material ankommt und welcher Schrank zu welchem Zimmer passt.",
    sections: [
      {
        id: "bester-kinderschrank",
        h2: "Welcher Kinderschrank ist der beste?",
        blocks: [
          { quick: "Für die meisten Familien ist der [PINOLINO Kleiderschrank Linje](produkt:1) die beste Wahl: drei Soft-Close-Türen, offenes Fach, vier verstellbare Böden. Für kleine Zimmer und kleines Budget passt der [Forte WINNIE 80](produkt:2), wer Massivholz möchte, greift zum [PINOLINO Natura](produkt:3)." },
          { first: "Ein Kinderschrank muss mehr aushalten als ein Schrank im Elternschlafzimmer: Türen werden aufgerissen und zugeknallt, Schubladen und Böden dienen gelegentlich als Treppe, und der Inhalt wechselt alle paar Monate, weil Kleidung zu klein wird. Deshalb haben wir nicht nur auf Stauraum geschaut, sondern vor allem auf zwei Dinge: ob der Hersteller eine Wandbefestigung vorsieht und wie die Türen schließen." },
          { p: "Der [PINOLINO Linje](produkt:1) liegt vorn, weil er beides gut löst. Er ist 3-türig und 110 cm breit; Pinolino stattet die Türen laut Hersteller mit Soft-Close-Beschlägen aus, die das Einklemmen kleiner Finger verhindern sollen. Innen gibt es eine Kleiderstange, vier höhenverstellbare Böden und ein offenes Fach – praktisch für Kuscheltier, Lieblingsbuch oder die Kleidung für morgen. Schwächen: Er besteht aus Holzwerkstoff, zu dem keine Emissionswerte veröffentlicht sind, und wiegt laut Hersteller 83,5 kg." },
          { p: "Der [Forte WINNIE 80](produkt:2) ist eigentlich ein gewöhnlicher Kleiderschrank, der als Kinderzimmerschrank angeboten wird. Gerade das macht ihn interessant: Mit 80 cm Breite passt er in kleine Zimmer, zwei Kleiderstangen und mehrere Fächer bieten viel Platz, und das Design wirkt nicht kindlich. Soft-Close-Türen gibt der Hersteller nicht an – deshalb liegt er bei Sicherheit hinter den Pinolino-Schränken." },
          { p: "Der [PINOLINO Natura](produkt:3) ist der Schrank für Eltern, die Massivholz statt Spanplatte möchten. Massive Buche mit Hartöl auf Leinölbasis (Herstellerangabe), Soft-Close-Türen, zwei Stangen und fünf Böden – dazu laut Händlerangaben 10 Jahre Garantie. Er kostet deutlich mehr und ist mit 63 cm sehr tief, was in schmalen Kinderzimmern stören kann." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Kinderschranks achten?",
        blocks: [
          { quick: "Entscheidend sind fünf Punkte: eine Wandbefestigung gegen Kippen, Türen mit Soft-Close oder Klemmschutz, eine flexible Innenaufteilung, Maße passend zum Zimmer und ein Material, zu dem der Hersteller klare Angaben macht." },
          { h3: "Kippschutz: das wichtigste Kriterium" },
          { p: "Ein hoher, schmaler Schrank kann umfallen, wenn ein Kind an offenen Türen zieht oder auf Böden klettert. Die europäische Norm **EN 14749** beschreibt Sicherheitsanforderungen und Prüfverfahren für die Standsicherheit von Aufbewahrungsmöbeln. Wichtig: Wand und Dübel sind laut BSI nicht Teil dieser Prüfung – die Befestigung muss also immer zur eigenen Wand passen. Pinolino schreibt in seinen Montageanleitungen die Befestigung mit einem mitgelieferten Winkel an der Wand vor (dokumentiert etwa für das Modell Viktoria), Forte für die WINNIE-Serie ebenfalls." },
          { callout: { title: "Kippschutz ist Pflicht", warn: true, text: "Jeden Kinderschrank an der Wand befestigen – auch wenn er schwer und stabil wirkt. Dübel und Schrauben müssen zum Untergrund passen: Beton, Ziegel, Porenbeton und Gipskarton brauchen unterschiedliche Befestigungen. Bei Leichtbauwänden oder Unsicherheit über die Statik eine Fachkraft fragen. Kinder nicht an Türen hängen oder in den Schrank klettern lassen." } },
          { h3: "Türen: Soft-Close und Fingerklemmschutz" },
          { p: "Gedämpfte Scharniere schließen die Tür auf den letzten Zentimetern langsam. Das schützt Finger und Möbel. Die beiden Pinolino-Schränke haben laut Hersteller Soft-Close-Türen, beim Forte WINNIE ist das nicht angegeben. Wer einen Schrank ohne Dämpfung kauft, kann Türstopper oder Klemmschutz aus dem Kindersicherheits-Zubehör nachrüsten." },
          { h3: "Innenaufteilung: Stange, Böden, offenes Fach" },
          { p: "Kinderkleidung ist kurz – eine durchgehende Stange auf Erwachsenenhöhe verschenkt viel Platz. Gut sind zwei Stangen übereinander (WINNIE, Natura) oder verstellbare Böden (Linje: vier, Natura: fünf), die man mit dem Kind mitwachsen lässt. Ein offenes Fach wie beim Linje macht Lieblingssachen sichtbar und lädt Kinder ein, selbst etwas herauszunehmen." },
          { h3: "Material und Ausdünstungen" },
          { p: "Die meisten Kinderschränke bestehen aus Holzwerkstoffen wie Span- oder MDF-Platten mit Dekor. Massivholz mit Ölfinish wie beim Natura gilt als Alternative für Eltern, die Kunstharz-Bindemittel vermeiden möchten. Als allgemeiner Hintergrund: Öko-Test hat in einem Test kompletter Kinderzimmermöbel (online aktualisiert 12/2019) festgestellt, dass Kleiderschrank und Stuhl in den ersten Tagen problematische Verbindungen ausdünsteten, und im Wickelkommoden-Test 2010 gasten die meisten Kommoden deutlich Formaldehyd aus. Für unsere drei Schränke gibt es keine solchen Prüfergebnisse – neue Möbel sollten in jedem Fall einige Tage gut gelüftet werden, bevor das Kind im Zimmer schläft." },
          {
            table: {
              caption: "Die drei Schränke nach Material und Ausstattung",
              head: ["Schrank", "Material", "Türen", "Aufteilung"],
              rows: [
                ["**PINOLINO Linje**", "Holzwerkstoff", "3, Soft-Close", "4 Böden, 1 Stange, offenes Fach"],
                ["**Forte WINNIE 80**", "Holzwerkstoff", "2, ohne Angabe zu Soft-Close", "Fächer, 2 Stangen"],
                ["**PINOLINO Natura**", "Buche massiv, geölt", "2, Soft-Close", "5 Böden, 2 Stangen"],
              ],
            },
          },
        ],
      },
      {
        id: "welcher-schrank-passt",
        h2: "Welcher Kinderschrank passt zu wem?",
        blocks: [
          { quick: "Viel Stauraum und Komfort: Linje. Kleines Zimmer oder kleines Budget: WINNIE 80. Massivholz und Langlebigkeit: Natura. Für Spielzeug statt Kleidung sind niedrige Schränke mit Klappe oder offene Fächer besser – siehe Top 5." },
          {
            cards: [
              { title: "Geräumig mit Soft-Close", text: "Der [PINOLINO Linje](produkt:1) bietet auf 110 cm drei Türen, ein offenes Fach und vier verstellbare Böden." },
              { title: "Schmal und günstig", text: "Der [Forte WINNIE 80](produkt:2) passt mit 80 cm Breite auch neben Bett und Schreibtisch." },
              { title: "Massivholz statt Spanplatte", text: "Der [PINOLINO Natura](produkt:3) aus geölter Buche ist die Wahl für Materialbewusste." },
            ],
          },
          { p: "Kinderschrank ist nicht gleich Aufbewahrung: Für niedrige Möbel mit Schubladen, auf denen auch eine Lampe oder Kiste Platz findet, lohnt der Blick auf unsere [Sideboards fürs Kinderzimmer](/sideboard-kinderzimmer/). Bücher präsentieren Kinder am liebsten mit dem Cover nach vorn – dafür gibt es eigene [Kinderbücherregale](/kinder-buecherregal/). Ein hoher Schrank mit Türen bleibt die beste Lösung für Kleidung, Bettwäsche und alles, was nicht offen herumstehen soll." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-schranktypen",
    h2: "Die 5 besten Alternativen: Spielzeugschrank, niedriger Kleiderschrank und Montessori-Schrank",
    intro: "Nicht jedes Kinderzimmer braucht einen hohen Zweitürer. Diese fünf Möbel decken andere Nutzungen ab – vom Spielzeugschrank mit Klappe bis zur ökologischen Massivholz-Variante.",
    items: [
      { name: "HOCSOK Kinderregal mit Rollen und Spielzeugkiste mit Klappdeckel", for: "Spielzeugschrank mit Klappe", text: "Bauform-Beispiel für Spielzeug: offene Fächer für Bücher und Spiele plus eine Kiste mit Klappdeckel, der laut Hersteller zwischen 0° und 75° arretiert und hydraulisch gedämpft schließt; dazu vier Schwenkrollen. Bei allen Klappen gilt: auf gedämpften Deckel bzw. Klappenhalter achten – sonst drohen Quetschungen.", asin: "B09ZNXRLD5", query: "HOCSOK Kinderregal mit Rollen Spielzeugkiste Holz" },
      { name: "en.casa Sandnes Kinderkleiderschrank mit 2 Türen und 1 Schublade", for: "Niedriger Kinderkleiderschrank", text: "Nur 123 cm hoch, 60 cm breit, 40 cm tief, Hängeraum 104,5 cm (Herstellerangabe) – Kinder erreichen Stange und Schublade selbst. MDF/Spanplatte, Stange laut Hersteller bis 10 kg belastbar.", asin: "B0FMF3ZT9S", query: "en.casa Sandnes Kinderkleiderschrank 2 Türen Schublade" },
      { name: "SoBuy KMB40-W Kindergarderobe mit 3 Haken und Boxen", for: "Offener Montessori-Kleiderschrank", text: "Offene Kleiderstange auf ca. 108 cm Höhe, drei Fächer, eine Stoffbox und drei Haken; MDF (E1) laut Hersteller. Kinder sehen ihre Kleidung und wählen selbst aus.", asin: "B0BCG6HS2W", query: "SoBuy KMB40-W Kindergarderobe" },
      { name: "Hoppekids GAIA Kleiderschrank", for: "Schmaler Schrank für kleine Zimmer", text: "80 × 160 × 50 cm, zwei Türen und eine Schublade auf Metallschiene, Füße aus massiver Eiche, FSC-zertifiziert und in Dänemark hergestellt (Herstellerangabe). Mit 160 cm niedriger als übliche Kleiderschränke.", asin: "B0859XZ4FD", query: "Hoppekids GAIA Kleiderschrank" },
      { name: "BioKinder Lina Kleiderschrank 2-türig, Erle massiv", for: "Ökologische Massivholz-Alternative", text: "Erle natur geölt, 190 × 110 × 55 cm, verstellbare Stange, fünf Böden, Soft-Close an Türen und Schubladen (Herstellerangabe). Mit Aufsatz laut Hersteller auf 228 cm erweiterbar.", asin: "B073QT1NRV", query: "BioKinder Lina Kleiderschrank 2-türig Erle" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen-sichern",
        h2: "Wie sichert man einen Kinderschrank gegen Umkippen?",
        blocks: [
          { quick: "Den Schrank mit dem mitgelieferten Winkel oder Gurt oben an der Wand verschrauben – mit Dübeln, die zum Mauerwerk passen. Danach Türen einstellen und die Befestigung regelmäßig prüfen." },
          { figure: "steps" },
          { p: "Kippbeschläge gehören in den oberen Bereich des Schranks, weil dort die Hebelwirkung am größten ist. Vor dem Bohren prüfen, wo Leitungen verlaufen. In Gipskartonwänden halten normale Dübel nicht zuverlässig – hier Hohlraumdübel verwenden oder in ein Ständerprofil schrauben; bei Altbau, Porenbeton oder Unklarheiten über die Wand lieber eine Fachkraft hinzuziehen." },
          { p: "Beim Einräumen hilft eine einfache Regel: Schweres nach unten, Leichtes nach oben. Alltagskleidung auf Kinderhöhe, Saisonsachen und Bettwäsche in die oberen Fächer. Bei verstellbaren Böden die Belastungsgrenzen des Herstellers beachten – Forte nennt für die WINNIE-Serie etwa 5 kg je Boden und 15 kg je Stange." },
          { facts: [{ value: "EN 14749", label: "Norm für Standsicherheit von Aufbewahrungsmöbeln" }, { value: "83,5 kg", label: "Gewicht PINOLINO Linje (Herstellerangabe)" }, { value: "80 cm", label: "Breite Forte WINNIE – schmalster Top-3-Schrank" }] },
        ],
      },
      {
        id: "klappe-oder-fach",
        h2: "Spielzeugschrank mit Klappe oder offene Fächer?",
        blocks: [
          { quick: "Offene Fächer sind für Kinder leichter zu nutzen und sicherer. Klappen und Deckel halten Ordnung und Staub fern, sollten aber gedämpft sein oder in jeder Position stehen bleiben, damit sie nicht auf Finger oder Kopf fallen." },
          { p: "Ein Kleiderschrank mit Türen eignet sich nur bedingt für Spielzeug: Was hinter Türen verschwindet, wird seltener gespielt und schwerer aufgeräumt. Für Bausteine, Puzzles und Spiele sind niedrige Möbel mit offenen Fächern, Boxen oder einer gedämpften Klappe praktischer. Bei Spielzeugkisten mit Deckel besteht zusätzlich eine Einschlussgefahr – deshalb auf Klappenhalter, Dämpfer und Lüftungsöffnungen achten und Kinder beim Spielen mit Truhen nicht unbeaufsichtigt lassen." },
          { p: "Der offene Montessori-Ansatz – niedrige Stange, sichtbare Kleidung, wenige Teile zur Auswahl – fördert, dass Kinder sich selbst anziehen. Er ersetzt aber meist keinen geschlossenen Schrank für Wechselkleidung, Bettzeug und Saisonsachen. Viele Familien kombinieren deshalb einen hohen Schrank mit einer offenen Kindergarderobe." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Kinderschrank ist der beste?", a: "Unsere beste Gesamtwahl ist der PINOLINO Kleiderschrank Linje mit drei Soft-Close-Türen, offenem Fach und vier verstellbaren Böden. Günstiger und schmaler ist der Forte WINNIE 80, die Premium-Wahl aus massiver Buche ist der PINOLINO Natura." },
    { q: "Wie groß sollte ein Kinderkleiderschrank sein?", a: "Für die meisten Kinderzimmer reichen 80 bis 110 cm Breite. Wichtiger als die Höhe ist eine flexible Aufteilung mit zwei Stangen oder verstellbaren Böden. Auf die Tiefe achten: Schränke mit über 60 cm Tiefe wie der Natura brauchen viel Stellfläche." },
    { q: "Wie sichert man einen Kinderschrank gegen Umkippen?", a: "Mit dem mitgelieferten Winkel oder Gurt oben an der Wand verschrauben, mit Dübeln passend zum Mauerwerk. Bei Gipskarton oder unklarem Untergrund eine Fachkraft fragen. Hersteller wie Pinolino und Forte schreiben die Wandbefestigung in ihren Anleitungen vor." },
    { q: "Was ist ein Montessori-Kleiderschrank?", a: "Ein offener, niedriger Kleiderschrank mit Stange und Fächern auf Kinderhöhe, an dem Kinder ihre Kleidung selbst auswählen und aufhängen. Ein Beispiel ist die SoBuy KMB40-W mit Stange auf rund 108 cm Höhe." },
    { q: "Spielzeugschrank mit Klappe oder offene Fächer?", a: "Offene Fächer sind für Kinder einfacher und sicherer. Klappen halten Ordnung, sollten aber gedämpft sein oder in jeder Position stehen bleiben, damit sie keine Finger einklemmen." },
    { q: "Welche Materialien sind für Kindermöbel unbedenklich?", a: "Eine pauschale Antwort gibt es nicht. Massivholz mit Öl- oder Wachsfinish kommt ohne Spanplatten-Bindemittel aus; bei Holzwerkstoffen helfen Herstellerangaben wie E1 oder FSC bei der Einordnung. Neue Möbel vor der Nutzung einige Tage gut lüften." },
  ],

  sources: [
    { label: "amazon.de: PINOLINO Kleiderschrank Linje (Herstellerangaben)", url: "https://www.amazon.de/dp/B0DXVYPSGR" },
    { label: "amazon.de: Forte WINNIE Kleiderschrank 80 (Herstellerangaben)", url: "https://www.amazon.de/dp/B0085HMUPS" },
    { label: "amazon.de: Forte WINNIE 170 – Hinweis zur Wandmontage", url: "https://www.amazon.de/dp/B0DT1BFR8D" },
    { label: "amazon.de: PINOLINO Kleiderschrank Natura (Herstellerangaben)", url: "https://www.amazon.de/dp/B004CR5AFC" },
    { label: "babyartikel.de: Pinolino-Kleiderschrank, Garantieangaben", url: "https://www.babyartikel.de/prod/pinolino-kleiderschrank-hope-3-tuerig" },
    { label: "Pinolino Viktoria: Montageanleitung mit Wandbefestigung", url: "https://manuall.de/pinolino-viktoria-kleiderschrank/?page=2" },
    { label: "BSI: EN 14749 – Aufbewahrungsmöbel, Sicherheitsanforderungen", url: "https://knowledge.bsigroup.com/products/furniture-domestic-and-kitchen-storage-units-and-kitchen-worktops-safety-requirements-and-test-methods" },
    { label: "Öko-Test: Kinderzimmermöbel und Raumluft (online, 12/2019)", url: "https://www.oekotest.de/bauen-wohnen/Ikea-Kinderzimmer-im-Test-Wie-stark-Kinderbett-Co-die-Raumluft-belasten_111621_1.html" },
    { label: "amazon.de: HOCSOK Kinderregal mit Spielzeugkiste", url: "https://www.amazon.de/dp/B09ZNXRLD5" },
    { label: "amazon.de: BioKinder Lina Kleiderschrank Erle", url: "https://www.amazon.de/dp/B073QT1NRV" },
  ],

  related: [
    { slug: "sideboard-kinderzimmer", text: "Niedrige Sideboards und Kommoden fürs Kinderzimmer." },
    { slug: "kinder-buecherregal", text: "Bücherregale mit Frontfächern auf Kinderhöhe." },
    { area: "spielzimmer", text: "Alle Ratgeber fürs Spielzimmer." },
  ],
};
