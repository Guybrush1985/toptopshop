// Kategorie: Atemschutz – FFP3- und Vollmasken (Krisenvorsorge › Luftfiltration)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "atemschutz",
  area: "krisenvorsorge",
  group: "luftfiltration",
  navLabel: "Atemschutz & FFP3",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Atemschutz für den Notfall 2026: Die 3 besten FFP3- & Vollmasken",
  metaDescription:
    "Die 3 besten Atemschutzmasken für den Ernstfall 2026: FFP3-Maske, Mehrweg-Halbmaske und Vollmaske im Vergleich – plus Filterklassen, Dichtsitz und Grenzen.",

  eyebrow: "Krisenvorsorge · Luftfiltration",
  h1: "Die 3 besten Atemschutzmasken für den Notfall 2026",
  lead:
    "Rauch, Asche, Feinstaub oder radioaktive Partikel nach einem Unfall: Wer im Ernstfall nach draußen muss, schützt die Atemwege mit der richtigen Maske. Entscheidend sind Filterklasse und Dichtsitz – und das Wissen, wogegen eine Maske nicht hilft.",
  answer:
    "Für die meisten Haushalte ist die [**3M Aura 9332+ FFP3**](produkt:1) die beste Wahl: hoher Partikelschutz, sofort einsatzbereit und günstig auf Vorrat. Wer Gasfilter einsetzen will, nimmt die Mehrweg-Halbmaske [**3M 6200**](produkt:2); die [**3M Vollmaske 6800**](produkt:3) schützt zusätzlich die Augen.",

  top3Title: "Unsere Top 3 Atemschutzmasken für den Ernstfall",
  top3Intro:
    "Eine Einwegmaske für den Vorrat, eine Halbmaske mit wechselbaren Filtern und eine Vollmaske: Damit sind die drei sinnvollen Schutzstufen für Privathaushalte abgedeckt.",
  comparisonTitle: "Die 3 besten Atemschutzmasken im Vergleich",

  criteria: [
    { key: "schutz", label: "Schutzwirkung", weight: 0.4, description: "Filterklasse nach EN 149 bzw. EN 143/EN 14387, zulässige Leckage, Schutz der Augen." },
    { key: "sitz", label: "Dichtsitz & Komfort", weight: 0.25, description: "Wie zuverlässig die Maske ohne Schulung dicht sitzt, Atemwiderstand, Ausatemventil, Tragedauer." },
    { key: "vielseitig", label: "Vielseitigkeit", weight: 0.15, description: "Wechselbare Partikel- und Gasfilter, Einsatz gegen unterschiedliche Gefahren." },
    { key: "preis", label: "Preis & Vorrat", weight: 0.2, description: "Anschaffungs- und Folgekosten, Lagerfähigkeit für den Vorrat." },
  ],

  method:
    "Grundlage sind die Normen EN 149 (filtrierende Halbmasken), EN 140 (Halbmasken), EN 136 (Vollmasken), EN 143 (Partikelfilter) und EN 14387 (Gasfilter), die Empfehlung der Strahlenschutzkommission zu FFP-Masken (2023), die Verhaltenshinweise des BBK sowie Herstellerangaben von 3M. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jede Maske wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "3M Aura 9332+ FFP3 mit Ventil",
      brand: "3M",
      variant: "FFP3 NR D, 10 Stück",
      visual: { kind: "mask", tone: "mint" },
      priceTier: 1,
      ratings: { schutz: 8.5, sitz: 8.5, vielseitig: 6.0, preis: 9.5 },
      bestFor: "Vorrat für die ganze Familie",
      verdict:
        "Die sinnvollste Maske für den Notvorrat: höchste Schutzstufe für Partikel nach EN 149, faltbar, lange lagerfähig und so günstig, dass für jedes Familienmitglied mehrere bereitliegen können.",
      features: [
        "FFP3 nach EN 149: mindestens 99 % Filterleistung, höchstens 2 % Gesamtleckage",
        "Cool-Flow-Ausatemventil gegen Wärmestau, dreiteiliges Faltdesign mit Nasenbügel (Herstellerangabe)",
        "Schützt vor Feinstaub, Rauchpartikeln und Aerosolen – nicht vor Gasen",
      ],
      pros: ["Sofort einsatzbereit, keine Montage", "Günstig im Mehrfachpack", "Platzsparend zu lagern"],
      cons: ["Einweg – nach Gebrauch entsorgen", "Kein Schutz vor Gasen und Dämpfen", "Mit Ventil: schützt andere weniger als ohne"],
      specs: { typ: "Filtrierende Halbmaske (Einweg)", klasse: "FFP3 (EN 149)", gase: "nein", augen: "nein", filter: "integriert", einsatz: "Rauch, Asche, Feinstaub" },
      asin: "B000VDQL4K",
      query: "3M Aura 9332+ FFP3 Ventil 10 Stück",
    },
    {
      rank: 2,
      label: "Bester Mehrweg-Schutz",
      name: "3M Halbmaske 6200 (Größe M)",
      brand: "3M",
      variant: "EN 140, Bajonettfilter",
      visual: { kind: "mask", tone: "green" },
      priceTier: 1,
      ratings: { schutz: 8.5, sitz: 7.5, vielseitig: 9.0, preis: 7.0 },
      bestFor: "Gase, Dämpfe & längere Einsätze",
      verdict:
        "Die wiederverwendbare Halbmaske nimmt Partikel- und Gasfilter auf. Damit schützt sie – mit dem passenden Filter – auch gegen Gase und Dämpfe, gegen die keine FFP-Maske hilft.",
      features: [
        "Wiederverwendbarer Maskenkörper nach EN 140 mit Bajonettanschluss für die 3M-Filter der Serie 6000 und 2000",
        "Kombinierbar mit P3-Partikelfiltern (z. B. 3M 2135) oder Gasfiltern (z. B. 3M 6059 ABEK1)",
        "Filter einzeln tauschbar, Maskenkörper abwaschbar",
      ],
      pros: ["Gasschutz mit passendem Filter möglich", "Geringe Folgekosten", "Bewährtes System mit großer Filterauswahl"],
      cons: ["Filter separat kaufen", "Augen bleiben ungeschützt", "Dichtsitz vorher üben – Bart verhindert Abdichtung"],
      specs: { typ: "Halbmaske (Mehrweg)", klasse: "EN 140, Filter nach EN 143/14387", gase: "mit Gasfilter", augen: "nein", filter: "Bajonett, 2 Filter", einsatz: "Rauch, Gase, Dämpfe" },
      asin: "B0037OFC0E",
      query: "3M 6200 Halbmaske Größe M",
    },
    {
      rank: 3,
      label: "Premium-Wahl",
      name: "3M Vollmaske 6800 (Größe M)",
      brand: "3M",
      variant: "EN 136, Silikon",
      visual: { kind: "mask", tone: "forest" },
      priceTier: 3,
      ratings: { schutz: 9.5, sitz: 8.0, vielseitig: 9.5, preis: 5.0 },
      bestFor: "Schutz für Augen und Atemwege",
      verdict:
        "Die umfassendste Lösung: Vollmaske nach EN 136 mit großer Sichtscheibe, die Augen und Gesicht vor Rauch, Asche und reizenden Stoffen schützt – mit denselben Filtern wie die Halbmaske.",
      features: [
        "Vollmaske nach EN 136 aus Silikon mit großer Sichtscheibe",
        "Nutzt die Bajonettfilter der 3M-Serie 6000/2000 (Partikel- und Gasfilter)",
        "Cool-Flow-Ausatemventil, Vierpunkt-Kopfband (Herstellerangabe)",
      ],
      pros: ["Schützt Augen und Atemwege", "Höchster Schutz der drei", "Gleiche Filter wie die Halbmaske"],
      cons: ["Teuer", "Für Brillenträger nur mit Masken-Brilleneinsatz", "Ohne Schulung schwerer dicht anzulegen"],
      specs: { typ: "Vollmaske (Mehrweg)", klasse: "EN 136, Filter nach EN 143/14387", gase: "mit Gasfilter", augen: "ja", filter: "Bajonett, 2 Filter", einsatz: "Rauch, Gase, Asche, Reizstoffe" },
      asin: "B0B45FG2ZT",
      query: "3M Vollmaske 6800 Größe M",
    },
  ],

  comparison: [
    { key: "typ", label: "Maskentyp" },
    { key: "klasse", label: "Norm / Klasse" },
    { key: "gase", label: "Gasschutz" },
    { key: "augen", label: "Augenschutz" },
    { key: "filter", label: "Filter" },
    { key: "einsatz", label: "Sinnvoll bei" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-atemschutzmasken-notfall-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Atemschutzmasken für den Notfall 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Atemschutzmasken 2026 in den Kriterien Schutzwirkung, Dichtsitz, Vielseitigkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Die FFP3-Maske punktet bei Preis und Einfachheit, die Vollmaske beim Schutz.",
    },
    steps: {
      kind: "steps",
      file: "atemschutzmaske-richtig-aufsetzen-dichtsitz-pruefen.svg",
      title: "Atemschutzmaske richtig aufsetzen",
      subtitle: "Ohne Dichtsitz schützt auch die beste Maske nicht",
      alt: "Infografik: Atemschutzmaske richtig aufsetzen – Größe wählen, rasieren, Bänder anlegen, Nasenbügel formen, Dichtsitz prüfen",
      caption: "Übe das Anlegen vorher – im Ernstfall bleibt dafür keine Zeit.",
      steps: [
        { title: "Passende Größe wählen", text: "Halb- und Vollmasken gibt es in S, M und L. Probiere die Größe vorher an." },
        { title: "Bart und Haare beachten", text: "Bartstoppeln im Dichtbereich lassen Luft vorbeiströmen – die Maske dichtet dann nicht." },
        { title: "Bänder richtig anlegen", text: "Ein Band über dem Kopf, eines im Nacken. Nicht verdrehen und gleichmäßig straffen." },
        { title: "Nasenbügel formen", text: "Bei FFP-Masken den Bügel mit beiden Händen an die Nase anpassen, nicht kneifen." },
        { title: "Dichtsitz prüfen", text: "Kräftig ein- und ausatmen: Zieht Luft am Rand vorbei, neu ausrichten." },
      ],
    },
  },

  editorial: {
    title: "Atemschutz im Ernstfall: Welche Maske wogegen schützt",
    intro:
      "FFP-Klassen, Partikel- und Gasfilter, Halb- und Vollmasken – und die Grenzen, die jeder kennen sollte, bevor er sich auf eine Maske verlässt.",
    sections: [
      {
        id: "beste-atemschutzmaske",
        h2: "Welche Atemschutzmaske ist für den Notfall die beste?",
        blocks: [
          { quick: "Für den Vorrat ist eine FFP3-Maske wie die [3M Aura 9332+](produkt:1) die beste Wahl: einfach, günstig und hoher Partikelschutz. Gegen Gase brauchst du eine Halbmaske wie die [3M 6200](produkt:2) mit Gasfilter, für Augenschutz die [Vollmaske 6800](produkt:3)." },
          { first: "Die meisten Gefahren, gegen die sich Privathaushalte mit einer Maske schützen können, bestehen aus Partikeln: Ruß und Asche bei Großbränden, Feinstaub, Staub nach Einstürzen, Aerosole mit Krankheitserregern oder radioaktive Partikel nach einem Unfall. Dagegen schützen partikelfiltrierende Masken der Klassen FFP2 und FFP3 gut – vorausgesetzt, sie sitzen dicht." },
          { p: "Die Strahlenschutzkommission (SSK) hat 2023 empfohlen, dass FFP2-Masken die Aufnahme radioaktiver Partikel nach einer Kernwaffenexplosion verringern können, vor allem wenn man ins Freie muss. Sie betont zugleich, dass die Masken nicht zu falscher Sicherheit führen dürfen und nicht vor Gasen schützen. FFP3 filtert noch mehr und lässt weniger Luft am Rand vorbei – deshalb ist sie unsere Wahl für den Vorrat." },
          { p: "Für Gase und Dämpfe, etwa nach einem Chemieunfall, reichen Partikelmasken nicht. Dafür braucht es eine Halb- oder Vollmaske mit Gasfilter. Die Behörden raten in solchen Lagen aber in erster Linie, im Gebäude zu bleiben und Fenster und Türen zu schließen – die Maske ist für den Fall, dass du trotzdem hinaus musst." },
          { figure: "scores" },
          { callout: { title: "Grenzen jeder Filtermaske", warn: true, text: "Filtermasken schützen nicht vor Kohlenmonoxid und nicht bei Sauerstoffmangel – etwa in verrauchten Räumen oder Kellern nach einem Brand. Dort hilft nur umluftunabhängiger Atemschutz, den die Feuerwehr trägt. Bei Brand: raus und 112 rufen." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf von Atemschutz achten?",
        blocks: [
          { quick: "Wichtig sind die Schutzklasse (FFP3 bzw. P3), bei Gasen die passende Filterklasse nach EN 14387, der Dichtsitz und das Ablaufdatum der Filter. Kaufe nur Masken mit CE-Kennzeichnung und Normangabe." },
          { h3: "FFP-Klassen nach EN 149" },
          {
            table: {
              caption: "Schutzklassen filtrierender Halbmasken nach EN 149",
              head: ["Klasse", "Filterleistung", "Max. Gesamtleckage", "Sinnvoll bei"],
              rows: [
                ["**FFP1**", "mind. 80 %", "22 %", "groben Stäuben, nicht für den Ernstfall"],
                ["**FFP2**", "mind. 94 %", "8 %", "Feinstaub, Aerosolen, laut SSK bei radioaktiven Partikeln"],
                ["**FFP3**", "mind. 99 %", "2 %", "Rauchpartikeln, Asche, sehr feinen Partikeln"],
              ],
            },
          },
          { h3: "Gasfilter: Buchstaben und Farben" },
          { p: "Gasfilter nach EN 14387 tragen Buchstaben für die Stoffgruppe: **A** (braun) für organische Gase und Dämpfe, **B** (grau) für anorganische Gase wie Chlor, **E** (gelb) für saure Gase wie Schwefeldioxid und **K** (grün) für Ammoniak. Die Ziffer 1 bis 3 steht für das Aufnahmevermögen. Ein ABEK1-Filter deckt also vier Gruppen in kleiner Kapazität ab – für Privathaushalte die übliche Wahl. Gegen Kohlenmonoxid hilft keiner dieser Filter." },
          { h3: "Dichtsitz, Bart und Brille" },
          { p: "Eine Maske schützt nur so gut, wie sie anliegt. Bartstoppeln im Dichtbereich, falsche Größe oder verdrehte Bänder lassen ungefilterte Luft am Rand vorbei. Probiere die Maske zu Hause an und übe das Anlegen. Bei Vollmasken brauchen Brillenträger einen speziellen Brilleneinsatz, weil Bügel die Dichtung unterbrechen." },
          { h3: "Lagerung und Haltbarkeit" },
          { p: "Masken und Filter haben ein Ablaufdatum auf der Verpackung. Lagere sie verschlossen, trocken und dunkel. Gasfilter in der Originalverpackung halten laut Hersteller einige Jahre; einmal geöffnet beginnt die Aktivkohle Feuchtigkeit und Stoffe aus der Luft zu binden." },
        ],
      },
      {
        id: "welche-passt",
        h2: "Welche Maske passt zu wem?",
        blocks: [
          { quick: "Für jeden Haushalt gehören FFP3-Masken in den Vorrat. Wer zusätzlich gegen Gase vorsorgen will, ergänzt eine Halbmaske mit ABEK-Filter; die Vollmaske lohnt sich für Menschen, die im Ernstfall draußen arbeiten müssen." },
          {
            cards: [
              { title: "Grundvorrat", text: "Mehrere FFP3-Masken pro Person: 3M Aura 9332+.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Gase & Dämpfe", text: "Halbmaske 3M 6200 mit ABEK1-Filter.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Augen schützen", text: "Bei Asche, Rauch und Reizstoffen: Vollmaske 3M 6800.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Passende Filter", text: "Partikel-, Gas- und Kombifilter für die 3M-Masken.", link: { href: "#top5-filter", label: "Zur Top 5" } },
              { title: "Drinnen bleiben", text: "Mit HEPA-Luftreiniger die Raumluft sauber halten.", link: { href: "/krisenvorsorge/luftfiltration/luftreiniger-hepa/", label: "HEPA-Luftreiniger" } },
              { title: "Raum abdichten", text: "Klebeband, Folie und Dichtband für den Schutzraum.", link: { href: "/krisenvorsorge/luftfiltration/abdichtung/", label: "Abdichtung" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-filter",
    h2: "Die 5 besten Filter und Ergänzungen – nach Gefahr",
    intro:
      "Eine Mehrwegmaske ist nur so gut wie ihr Filter. Diese fünf Produkte ergänzen die Top 3 – sortiert nach der Gefahr, gegen die sie schützen.",
    items: [
      { name: "3M 2135 P3R-Partikelfilter (1 Paar)", for: "Partikel: Rauch, Asche, Staub", text: "Leichter P3-Filter mit geringem Atemwiderstand für die Halbmaske 6200 und die Vollmaske 6800.", asin: "B00DY4RMBE", query: "3M 2135 P3R Partikelfilter" },
      { name: "3M 6059 ABEK1-Gasfilter", for: "Gase und Dämpfe", text: "Kombifilter gegen organische, anorganische und saure Gase sowie Ammoniak – kein Schutz vor Kohlenmonoxid.", asin: "B0DH9PFBRD", query: "3M 6059 ABEK1 Filter" },
      { name: "3M 6038 P3R mit Aktivkohle", for: "Partikel plus Gerüche", text: "P3-Partikelfilter mit Aktivkohle gegen niedrige Konzentrationen organischer und saurer Gase sowie Ozon (Herstellerangabe).", asin: "B00BFWAN8Q", query: "3M 6038 Partikelfilter Aktivkohle" },
      { name: "3M Aura 9330+ FFP3 ohne Ventil", for: "Schutz auch für andere", text: "Ohne Ausatemventil wird auch die ausgeatmete Luft gefiltert – sinnvoll bei Infektionsgefahr und in Notunterkünften.", asin: "B0BQJQPXNR", query: "3M Aura 9330+ FFP3 ohne Ventil" },
      { name: "3M Aura 9322+ FFP2", for: "Leichter atmen", text: "FFP2-Maske mit Ventil: geringerer Atemwiderstand, laut SSK geeignet, um die Aufnahme radioaktiver Partikel zu verringern.", asin: "B006CO4H20", query: "3M Aura 9322+ FFP2" },
    ],
  },

  guide: {
    sections: [
      {
        id: "richtig-anwenden",
        h2: "Wie benutzt man eine Atemschutzmaske im Ernstfall richtig?",
        blocks: [
          { quick: "Setze die Maske auf, bevor du in belastete Luft gehst, prüfe den Dichtsitz, halte den Aufenthalt draußen kurz und entsorge Einwegmasken danach. Folge immer den Anweisungen der Behörden über Radio oder Warn-App." },
          { p: "Eine Maske verschafft dir Zeit – etwa um von draußen in ein Gebäude zu kommen, Angehörige abzuholen oder einen Evakuierungspunkt zu erreichen. Sie ist kein Grund, sich länger als nötig im Freien aufzuhalten. Das BBK rät bei Gefahrstofffreisetzungen, das nächste geschlossene Gebäude aufzusuchen und dort Fenster und Türen zu schließen." },
          { figure: "steps" },
          { h3: "Nach dem Einsatz" },
          {
            list: [
              "**Einwegmasken entsorgen** – in einem verschlossenen Beutel, nicht ausklopfen.",
              "**Mehrwegmasken reinigen** nach Herstellerangabe, Filter bei spürbar höherem Atemwiderstand oder Geruch im Inneren wechseln.",
              "**Kleidung wechseln**, wenn du in Asche, Staub oder radioaktiv belasteter Luft warst, und Haut und Haare waschen.",
              "**Vorrat auffüllen** und das Ablaufdatum der neuen Masken notieren.",
            ],
          },
          {
            facts: [
              { value: "99 %", label: "Mindestfilterleistung einer FFP3-Maske" },
              { value: "2 %", label: "maximal zulässige Gesamtleckage bei FFP3" },
              { value: "0 %", label: "Schutz vor Kohlenmonoxid durch Filtermasken" },
            ],
          },
          { h3: "Kinder und Menschen mit Vorerkrankungen" },
          { p: "Atemschutzmasken für Erwachsene passen Kindern meist nicht dicht, und der Atemwiderstand kann für Menschen mit Herz- oder Lungenerkrankungen belastend sein. Hier ist der Schutz im Gebäude – mit abgedichtetem Raum und Luftreiniger – oft die bessere Lösung. Lass dich bei Vorerkrankungen ärztlich beraten." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche Maske schützt im Notfall am besten?", a: "Gegen Partikel wie Rauch, Asche und Feinstaub schützt eine dicht sitzende FFP3-Maske am besten – unsere Empfehlung ist die 3M Aura 9332+. Gegen Gase braucht es eine Halb- oder Vollmaske mit passendem Gasfilter, etwa die 3M 6200 mit ABEK1-Filter." },
    { q: "Schützt eine FFP3-Maske vor Rauch?", a: "Sie filtert Rauchpartikel und Ruß, aber keine Gase wie Kohlenmonoxid. In verrauchten Räumen schützt sie deshalb nicht ausreichend. Bei Brand: Gebäude verlassen und 112 rufen." },
    { q: "Helfen FFP-Masken bei radioaktivem Fallout?", a: "Laut Strahlenschutzkommission (2023) können FFP2-Masken die Aufnahme radioaktiver Partikel verringern, vor allem wenn man ins Freie muss. Sie schützen aber nicht vor Strahlung selbst und nicht vor Gasen. Wichtigste Maßnahme bleibt der Aufenthalt in Gebäuden." },
    { q: "Was bedeutet ABEK1 auf einem Filter?", a: "Die Buchstaben stehen für die Gasgruppen: A organische Gase, B anorganische Gase, E saure Gase, K Ammoniak. Die 1 bezeichnet die kleinste Kapazitätsklasse. Ein ABEK1-Filter ist ein Kombifilter für niedrige Konzentrationen." },
    { q: "Sollte man eine Gasmaske für den Notfall kaufen?", a: "Für die meisten Haushalte reichen FFP3-Masken. Eine Halb- oder Vollmaske mit Gasfilter ist sinnvoll, wenn du in der Nähe von Industrieanlagen wohnst oder im Ernstfall draußen tätig sein musst. Sie bringt nur etwas, wenn du das Anlegen geübt hast und die Filter nicht abgelaufen sind." },
    { q: "Wie lange sind Atemschutzmasken haltbar?", a: "Das Ablaufdatum steht auf der Verpackung und liegt bei ungeöffneten FFP-Masken meist bei einigen Jahren. Gasfilter halten originalverpackt ebenfalls mehrere Jahre, nach dem Öffnen deutlich kürzer." },
  ],

  sources: [
    { label: "Strahlenschutzkommission: Empfehlung zu FFP-Masken (2023, PDF)", url: "https://ssk.de/fileadmin/documents/de/2023/2023-02-07_Empf_FFP_Masken.pdf" },
    { label: "BBK: Verhalten im Freien bei Gefahrstofffreisetzung", url: "https://www.bbk.bund.de/DE/Warnung-Vorsorge/Vorsorge/Schutz-suchen/Gefahrstoff-Freisetzung/_documents/gefahrstoff-im-auto-und-im-freien_dossier3.html" },
    { label: "BBK: Verhalten im Haus bei Gefahrstofffreisetzung", url: "https://www.bbk.bund.de/DE/Warnung-Vorsorge/Vorsorge/Schutz-suchen/Gefahrstoff-Freisetzung/_documents/gefahrstoff-im-haus_dossier2.html" },
    { label: "Strahlenschutzkommission: Schutzstrategien bei Nuklearwaffeneinsatz (2024, PDF)", url: "https://ssk.de/fileadmin/documents/de/2024/2024-10-10_Empf_Schutzstrategien__Nuklearwaffen.pdf" },
  ],

  related: [
    { slug: "luftreiniger-hepa", text: "Saubere Luft drinnen mit H13-Filter." },
    { slug: "abdichtung", text: "Einen Raum gegen Außenluft abdichten." },
    { slug: "erste-hilfe-brandschutz", text: "Erste-Hilfe-Koffer, Feuerlöscher und Löschdecke." },
    { group: "luftfiltration", text: "Alle Ratgeber zur Luftfiltration." },
  ],
};
