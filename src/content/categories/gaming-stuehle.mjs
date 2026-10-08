// Kategorie: Gaming-Stühle
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "gaming-stuehle",
  area: "gaming-room",
  navLabel: "Gaming-Stühle",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "Die 3 besten Gaming-Stühle 2026",
  metaDescription:
    "Secretlab, noblechairs oder Budget-Modell: Die 3 besten Gaming-Stühle 2026 im Vergleich – mit Lordosenstütze, 4D-Armlehnen und Tipps zu Größe und Ergonomie.",

  eyebrow: "Gaming-Room · Gaming-Stühle",
  h1: "Die 3 besten Gaming-Stühle 2026",
  lead:
    "Ein guter Gaming-Stuhl stützt den Rücken auch nach Stunden. Wir zeigen die drei besten Modelle – vom Preis-Leistungs-Tipp bis zum Premium-Stuhl in drei Größen – und in der Top 5 weitere Alternativen.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Secretlab Titan Evo**](produkt:1) mit verstellbarer Lordosenstütze, 4D-Armlehnen und drei Größen. Das beste Preis-Leistungs-Verhältnis bietet der [**Corsair TC100 Relaxed**](produkt:2), die Wahl für schwere und große Spieler ist der [**noblechairs HERO**](produkt:3) mit bis zu 150 kg Belastbarkeit.",

  priceTiers: {
    1: { symbol: "€", label: "bis 250 €" },
    2: { symbol: "€€", label: "250–400 €" },
    3: { symbol: "€€€", label: "über 400 €" },
  },

  top3Title: "Unsere Top 3 Gaming-Stühle",
  top3Intro: "Alle drei haben eine Wippmechanik, verstellbare Armlehnen und eine Lendenstütze. Entscheidend sind die passende Größe und wie fein sich der Stuhl einstellen lässt.",
  comparisonTitle: "Die 3 besten Gaming-Stühle im Vergleich",

  criteria: [
    { key: "ergonomie", label: "Ergonomie & Einstellung", weight: 0.35, description: "Lordosenstütze, Armlehnen, Sitztiefe, Neigung." },
    { key: "qualitaet", label: "Verarbeitung & Material", weight: 0.25, description: "Polster, Bezug, Gestell, Garantie." },
    { key: "komfort", label: "Sitzkomfort", weight: 0.15, description: "Polsterhärte, Sitzbreite, Langzeitkomfort." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung und Qualität." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Größen, Belastbarkeit, Verstellmöglichkeiten, Garantie), Händlerangaben und die ergonomischen Empfehlungen der Deutschen Gesetzlichen Unfallversicherung (DGUV) für Bürostühle. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Secretlab Titan Evo",
      brand: "Secretlab",
      variant: "Größe R, Kunstleder schwarz",
      visual: { kind: "chair", tone: "forest" },
      priceTier: 3,
      ratings: { ergonomie: 9.5, qualitaet: 9.0, komfort: 9.0, preis: 7.5 },
      bestFor: "Vielspieler, die lange sitzen",
      verdict:
        "Der am besten einstellbare Gaming-Stuhl: Die integrierte Lordosenstütze lässt sich in Höhe und Tiefe verstellen, die Armlehnen in vier Richtungen – und es gibt ihn in drei Größen.",
      features: [
        "Integrierte, 4-fach verstellbare Lordosenstütze (Herstellerangabe)",
        "4D-Armlehnen mit magnetischen Auflagen",
        "Drei Größen (S, R, XL), XL bis 180 kg (Herstellerangabe)",
      ],
      pros: ["Sehr gute Einstellbarkeit", "Passende Größe wählbar", "Hochwertige Verarbeitung"],
      cons: ["Teuer", "Sitzfläche eher fest gepolstert"],
      specs: { lordose: "integriert, verstellbar", armlehnen: "4D", neigung: "bis 165°", belastbar: "je nach Größe, XL bis 180 kg", groessen: "S, R, XL" },
      asin: "B0B3RL6YFG",
      query: "Secretlab Titan Evo Gaming Stuhl",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Corsair TC100 Relaxed",
      brand: "Corsair",
      variant: "Stoff, schwarz",
      visual: { kind: "chair", tone: "mint" },
      priceTier: 1,
      ratings: { ergonomie: 7.5, qualitaet: 8.0, komfort: 8.5, preis: 9.5 },
      bestFor: "Einstieg und Gelegenheitsspieler",
      verdict:
        "Solider Einstieg: breite Sitzfläche, atmungsaktiver Stoffbezug, Lendenkissen und Wippmechanik zu einem günstigen Preis – die Armlehnen lassen sich aber nur in zwei Richtungen verstellen.",
      features: [
        "Breite Sitzfläche für entspanntes Sitzen (Herstellerangabe)",
        "Stoffbezug, Nacken- und Lendenkissen",
        "2D-Armlehnen, Rückenlehne neigbar",
      ],
      pros: ["Günstig", "Atmungsaktiver Stoff", "Breite Sitzfläche"],
      cons: ["Nur 2D-Armlehnen", "Lendenstütze nur als Kissen"],
      specs: { lordose: "Kissen", armlehnen: "2D", neigung: "laut Hersteller", belastbar: "laut Hersteller", groessen: "eine Größe" },
      asin: "B0BN6RRD5V",
      query: "Corsair TC100 Relaxed Gaming Stuhl",
    },
    {
      rank: 3,
      label: "Für große Spieler",
      name: "noblechairs HERO",
      brand: "noblechairs",
      variant: "Kunstleder schwarz",
      visual: { kind: "chair", tone: "green" },
      priceTier: 3,
      ratings: { ergonomie: 8.5, qualitaet: 9.0, komfort: 8.5, preis: 7.5 },
      bestFor: "Große und schwere Spieler",
      verdict:
        "Der Stuhl für Kräftige: breite Sitzfläche, integrierte verstellbare Lendenstütze und eine Belastbarkeit bis 150 kg – dafür fest gepolstert und recht teuer.",
      features: [
        "Integrierte, verstellbare Lendenstütze (Herstellerangabe)",
        "Belastbar bis 150 kg (Herstellerangabe)",
        "4D-Armlehnen, Kaltschaumpolsterung",
      ],
      pros: ["Hohe Belastbarkeit", "Sehr stabil", "Integrierte Lendenstütze"],
      cons: ["Sehr feste Polsterung", "Schwer"],
      specs: { lordose: "integriert, verstellbar", armlehnen: "4D", neigung: "laut Hersteller", belastbar: "150 kg", groessen: "eine Größe" },
      asin: "B079X2771H",
      query: "noblechairs HERO Gaming Stuhl",
    },
  ],

  comparison: [
    { key: "lordose", label: "Lendenstütze" },
    { key: "armlehnen", label: "Armlehnen" },
    { key: "neigung", label: "Neigung" },
    { key: "belastbar", label: "Belastbarkeit" },
    { key: "groessen", label: "Größen" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-gaming-stuehle-2026-bewertung.svg",
      title: "Die 3 besten Gaming-Stühle 2026",
      alt: "Balkendiagramm: Bewertung von Secretlab Titan Evo, Corsair TC100 Relaxed und noblechairs HERO",
      caption: "Unsere Bewertung je Kriterium. Die Einstellbarkeit wiegt am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "gaming-stuhl-richtig-einstellen.svg",
      title: "Gaming-Stuhl richtig einstellen",
      subtitle: "In fünf Schritten zur gesunden Sitzhaltung",
      alt: "Infografik: Gaming-Stuhl einstellen – Sitzhöhe, Sitztiefe, Lendenstütze, Armlehnen, Neigung",
      caption: "Die Reihenfolge ist wichtig: erst Höhe, dann Rücken und Arme.",
      steps: [
        { title: "Sitzhöhe", text: "Füße flach am Boden, Knie etwa im rechten Winkel." },
        { title: "Sitztiefe", text: "Zwei bis drei Finger Platz zwischen Kniekehle und Sitz." },
        { title: "Lendenstütze", text: "Auf Höhe des Hohlkreuzes, nicht zu stark drücken." },
        { title: "Armlehnen", text: "Auf Tischhöhe, Schultern locker, Unterarme aufgelegt." },
        { title: "Neigung", text: "Zum Spielen leicht zurück, Wippe nicht blockieren." },
      ],
    },
  },

  editorial: {
    title: "Was macht einen guten Gaming-Stuhl aus?",
    intro: "Warum die Größe wichtiger ist als das Design, was 4D-Armlehnen bringen und wann ein Bürostuhl die bessere Wahl ist.",
    sections: [
      {
        id: "bester-gaming-stuhl",
        h2: "Welcher Gaming-Stuhl ist der beste?",
        blocks: [
          { quick: "Für die meisten ist der [Secretlab Titan Evo](produkt:1) die beste Wahl, weil er sich am feinsten einstellen lässt. Günstiger ist der [Corsair TC100](produkt:2), für große und schwere Spieler der [noblechairs HERO](produkt:3)." },
          { first: "Gaming-Stühle sehen aus wie Rennsitze, doch entscheidend ist, was man nicht sieht: eine Lendenstütze, die das Hohlkreuz hält, Armlehnen in der richtigen Höhe und eine Sitzfläche, die zur Körpergröße passt. Wer täglich mehrere Stunden spielt, merkt den Unterschied schnell im Rücken und in den Schultern." },
          { p: "Die Schalensitz-Optik hat einen Nachteil: Die hochgezogenen Seitenwangen schränken Sitzhaltung und Beinfreiheit ein. Moderne Modelle wie der Secretlab Titan Evo oder der noblechairs HERO haben deshalb flachere Sitzflächen. Wer vor allem arbeitet und nur nebenbei spielt, ist mit einem ergonomischen Bürostuhl oft besser beraten – passend zum [Gaming-Tisch](/gaming-tische/) oder [höhenverstellbaren Schreibtisch](/hoehenverstellbare-schreibtische/)." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind die passende Größe, eine verstellbare Lendenstütze, mindestens 3D-Armlehnen, eine Wippmechanik mit Arretierung und ein Bezug, der zu deinem Raumklima passt." },
          {
            table: {
              caption: "Ausstattung und was sie bringt",
              head: ["Merkmal", "Wozu", "Worauf achten"],
              rows: [
                ["**Lendenstütze**", "Hält das Hohlkreuz", "Integriert und verstellbar besser als Kissen"],
                ["**4D-Armlehnen**", "Arme auf Tischhöhe", "Höhe, Tiefe, Breite, Winkel"],
                ["**Wippmechanik**", "Bewegung beim Sitzen", "Arretierbar, Gegendruck einstellbar"],
                ["**Größen**", "Passform", "Körpergröße und Gewicht beachten"],
              ],
            },
          },
          { h3: "Kunstleder oder Stoff?" },
          { p: "**Kunstleder** ist leicht zu reinigen, wird im Sommer aber schnell warm. **Stoff** atmet besser, nimmt jedoch Flecken an. Secretlab bietet zusätzlich ein eigenes Hybrid-Leder und Stoff an. Für warme Dachzimmer ist Stoff die angenehmere Wahl." },
          { h3: "Welche Größe passt?" },
          { p: "Die Hersteller geben Größen- und Gewichtsbereiche an – diese solltest du ernst nehmen. Ist die Sitzfläche zu tief, drückt die Kante in die Kniekehlen; ist die Lehne zu kurz, fehlt die Nackenstütze. Bei Secretlab gibt es den Titan Evo in S, R und XL; die XL-Version ist laut Hersteller bis 180 kg belastbar." },
          { list: ["Größe und Belastbarkeit passend zum Körper", "Verstellbare, möglichst integrierte Lendenstütze", "Armlehnen in mindestens drei Richtungen verstellbar", "Gasdruckfeder der Klasse 4 (Angabe beim Hersteller prüfen)", "Rollen passend zum Boden: weich für Parkett, hart für Teppich"] },
        ],
      },
    ],
  },

  top5: {
    id: "top5-alternativen",
    h2: "Die 5 besten Alternativen",
    intro: "Weitere bewährte Gaming-Stühle für unterschiedliche Budgets und Körpergrößen.",
    items: [
      { name: "Secretlab Titan Evo Stealth", for: "Dezent im Büro", text: "Gleicher Stuhl wie unser Testsieger, aber komplett schwarz ohne auffälliges Logo – passt auch ins Home-Office.", asin: "B0B3RDWTDD", query: "Secretlab Titan Evo Stealth" },
      { name: "DXRacer King K99", for: "Für Große", text: "Breiter Rennsitz mit 4D-Armlehnen, laut Hersteller für große Spieler ausgelegt.", asin: "B095WRTD18", query: "DXRacer King K99" },
      { name: "AKRacing Master Premium", for: "Breite Sitzfläche", text: "Gaming-Stuhl mit 4D-Armlehnen und breiter, flacher Sitzfläche.", asin: "B07B42GM7H", query: "AKRacing Master Premium" },
      { name: "AKRacing Core EX", for: "Solider Einstieg", text: "Günstiger Rennsitz mit 3D-Armlehnen, Nacken- und Lendenkissen.", asin: "B07B3XNHQ8", query: "AKRacing Core EX" },
      { name: "Corsair TC200 Kunstleder", for: "Mehr Ausstattung von Corsair", text: "Größerer Bruder des TC100 mit integrierter Schaumstoff-Lendenstütze und 4D-Armlehnen (Herstellerangabe).", asin: "B09VHCKG82", query: "Corsair TC200 Gaming Stuhl Kunstleder" },
    ],
  },

  guide: {
    sections: [
      {
        id: "einstellen",
        h2: "Gaming-Stuhl richtig einstellen",
        blocks: [
          { quick: "Erst die Sitzhöhe, dann Sitztiefe, Lendenstütze und Armlehnen einstellen. Die Wippe nicht dauerhaft blockieren – Bewegung entlastet den Rücken." },
          { figure: "steps" },
          { p: "Auch der beste Stuhl ersetzt keine Pausen. Die DGUV empfiehlt, die Sitzhaltung regelmäßig zu wechseln und zwischendurch aufzustehen. Ein [höhenverstellbarer Tisch](/hoehenverstellbare-schreibtische/) hilft, zwischendurch im Stehen zu arbeiten oder zu spielen." },
          { callout: { title: "Achtung bei Billigmodellen", warn: true, text: "Achte auf geprüfte Gasdruckfedern (Klasse 4) und eine angegebene Belastbarkeit. Bei sehr günstigen Stühlen sind Gasfedern und Fußkreuze die häufigsten Schwachstellen." } },
          { facts: [{ value: "3", label: "Größen beim Titan Evo" }, { value: "4D", label: "Armlehnen beim Testsieger" }, { value: "150 kg", label: "Belastbarkeit noblechairs HERO" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Gaming-Stuhl ist der beste?", a: "Unsere beste Gesamtwahl ist der Secretlab Titan Evo mit verstellbarer Lordosenstütze und drei Größen. Günstiger ist der Corsair TC100, für große Spieler der noblechairs HERO." },
    { q: "Ist ein Gaming-Stuhl besser als ein Bürostuhl?", a: "Nicht automatisch. Gute Gaming-Stühle sind ergonomisch, viele Bürostühle aber ebenso. Entscheidend sind Lendenstütze, Armlehnen und die passende Größe." },
    { q: "Was bedeutet 4D-Armlehne?", a: "Die Armlehne lässt sich in vier Richtungen verstellen: Höhe, Tiefe, Breite und Winkel." },
    { q: "Kunstleder oder Stoff – was ist besser?", a: "Kunstleder ist pflegeleicht, Stoff atmungsaktiver. In warmen Räumen ist Stoff angenehmer." },
    { q: "Wie viel sollte man für einen Gaming-Stuhl ausgeben?", a: "Solide Einstiegsmodelle gibt es unter 250 Euro. Für viele Stunden täglich lohnen sich Modelle mit integrierter Lendenstütze und 4D-Armlehnen, die meist mehr kosten." },
  ],

  sources: [
    { label: "Secretlab: Titan Evo", url: "https://secretlab.eu/de/products/titan-evo" },
    { label: "noblechairs: HERO", url: "https://www.noblechairs.de/" },
    { label: "DGUV: Büro- und Bildschirmarbeit", url: "https://www.dguv.de/" },
  ],

  related: [
    { slug: "gaming-tische", text: "Der passende Gaming-Tisch." },
    { slug: "sitzsaecke", text: "Sitzsäcke für die Konsole." },
    { slug: "hoehenverstellbare-schreibtische", text: "Höhenverstellbare Schreibtische." },
    { area: "gaming-room", text: "Alle Ratgeber für den Gaming-Room." },
  ],
};
