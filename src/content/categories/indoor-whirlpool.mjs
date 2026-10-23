// Kategorie: Indoor-Whirlpools (Whirlpool-Badewannen) und Sprudelmatten fürs Badezimmer
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "indoor-whirlpool",
  area: "wellness",
  navLabel: "Indoor-Whirlpools",
  published: "2026-10-23",
  updated: "2026-10-23",

  metaTitle: "Die 3 besten Indoor-Whirlpools 2026: Whirlpool-Badewannen",
  metaDescription:
    "Whirlpool-Badewannen von Basera im Vergleich, Rechteck- und Eckwanne: Düsen, Heizung, Hygiene, Einbau und Elektroanschluss – plus Sprudelmatten zum Nachrüsten.",

  eyebrow: "Whirlpool & Wellness · Indoor-Whirlpools",
  h1: "Die 3 besten Indoor-Whirlpools 2026",
  lead:
    "Ein Indoor-Whirlpool ersetzt im Badezimmer die normale Wanne und massiert mit Wasser- und Luftdüsen. Wir zeigen die drei besten Whirlpool-Badewannen, erklären Düsenarten, Heizung, Hygiene und Einbau und nennen in der Top 5 Sprudelmatten und Alternativen, die ganz ohne Umbau auskommen.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Basera Premium Naxos**](produkt:1): Whirlpool-Badewanne im Standardmaß 180 × 90 cm mit laut Anbieter 24 Massagedüsen, Heizung, Ozongenerator und Bodenansaugung. Das beste Preis-Leistungs-Verhältnis bietet die [**Basera Basic Naxos**](produkt:2) mit 16 Düsen, die beste Eckwanne ist die [**Basera Premium Futuna**](produkt:3) mit Wasser- und Luftdüsen.",

  priceTiers: {
    1: { symbol: "€", label: "bis 1.500 €" },
    2: { symbol: "€€", label: "1.500–2.500 €" },
    3: { symbol: "€€€", label: "über 2.500 €" },
  },

  top3Title: "Unsere Top 3 Indoor-Whirlpools",
  top3Intro:
    "Alle drei sind Whirlpool-Badewannen aus Acryl für den Einbau im Badezimmer. Zwei passen auf den Platz einer normalen Rechteckwanne, die dritte ist eine Eckwanne für Bäder mit freier Ecke. Sie unterscheiden sich vor allem in Düsenzahl, Heizung und Hygiene-Ausstattung.",
  comparisonTitle: "Die 3 besten Indoor-Whirlpools im Vergleich",

  criteria: [
    { key: "massage", label: "Massage", weight: 0.3, description: "Zahl, Art und Verteilung der Wasser- und Luftdüsen, Regelbarkeit." },
    { key: "ausstattung", label: "Heizung & Hygiene", weight: 0.25, description: "Wasserheizung, Restentleerung, Desinfektion und Bedienung." },
    { key: "einbau", label: "Einbau & Maße", weight: 0.2, description: "Standardmaße, Platzbedarf, Anschlüsse und Zugänglichkeit der Technik." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung und Lieferumfang." },
  ],

  method:
    "Grundlage sind Hersteller- und Anbieterangaben (Maße, Düsen, Pumpen- und Heizleistung, Ausstattung) auf den Amazon-Produktseiten und bei Händlern. Einen aktuellen Test von Stiftung Warentest oder Öko-Test zu Whirlpool-Badewannen konnten wir nicht finden, daher nennen wir keine Testnoten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10; Laborwerte behaupten wir nicht.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Basera Premium Naxos",
      brand: "Basera",
      variant: "180 × 90 × 62 cm, Rechteckwanne",
      visual: { kind: "bathtub", tone: "forest" },
      priceTier: 3,
      ratings: { massage: 9.0, ausstattung: 9.5, einbau: 8.0, preis: 7.0 },
      bestFor: "Bad-Renovierung mit Wanne im Standardmaß und vollem Komfort",
      verdict:
        "Die vollständigste Whirlpool-Wanne im Vergleich: laut Anbieter 24 Massagedüsen an Seiten, Boden und Rücken, eine 1.000-Watt-Heizung, die das Wasser warm hält, ein Ozongenerator und eine Bodenansaugung, damit das Leitungssystem besser leerläuft. Im Standardmaß 180 × 90 cm passt sie dort, wo vorher eine normale Wanne stand.",
      features: [
        "24 Massagedüsen: je 8 an Seiten, Boden und Rücken; Pumpe 750 W (Anbieterangabe)",
        "1.000-W-Heizung, Ozongenerator, Bodenansaugung für die Restentleerung (Anbieterangabe)",
        "Wasserfall-Einlauf, LED-Licht, Touchpanel, Bluetooth und Radio (Anbieterangabe)",
      ],
      pros: ["Massage von drei Seiten", "Heizung hält das Badewasser warm", "Durchdachte Hygiene-Ausstattung"],
      cons: ["Teuerste Wanne im Vergleich", "Einbau durch Installateur und Elektriker nötig"],
      specs: {
        masse: "180 × 90 × 62 cm",
        form: "Rechteckwanne",
        duesen: "24 Wasserdüsen",
        heizung: "ja, 1.000 W",
        hygiene: "Ozon, Bodenansaugung",
        extras: "LED, Bluetooth, Radio",
      },
      asin: "B0BRJWP959",
      query: "Basera Premium Indoor Whirlpool Badewanne Naxos 180 x 90",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Basera Basic Naxos",
      brand: "Basera",
      variant: "180 × 90 × 62 cm, Rechteckwanne",
      visual: { kind: "bathtub", tone: "green" },
      priceTier: 2,
      ratings: { massage: 7.5, ausstattung: 6.5, einbau: 8.5, preis: 8.5 },
      bestFor: "Whirlpool-Einstieg im Standardmaß ohne Extras",
      verdict:
        "Dieselbe Wannenform wie die Premium-Version, aber mit dem Wesentlichen: laut Anbieter 16 Massagedüsen an Seiten und Rücken, eine 750-Watt-Pumpe mit Trockenlaufschutz und ein Drehventil, über das sich Luft zumischen lässt. Heizung und Ozon fehlen – wer nicht lange badet, vermisst sie kaum.",
      features: [
        "16 Massagedüsen: 8 an den Seiten, 8 im Rücken (Anbieterangabe)",
        "750-W-Pumpe mit Trockenlaufschutz, Luftzumischung per Drehventil (Anbieterangabe)",
        "Wasserfall-Einlauf und LED-Licht (Anbieterangabe)",
      ],
      pros: ["Deutlich günstiger als Premium", "Standardmaß für den Wannentausch", "Einfache, robuste Technik"],
      cons: ["Keine Wasserheizung", "Keine Bodendüsen"],
      specs: {
        masse: "180 × 90 × 62 cm",
        form: "Rechteckwanne",
        duesen: "16 Wasserdüsen",
        heizung: "nein",
        hygiene: "Trockenlaufschutz",
        extras: "LED, Wasserfall",
      },
      asin: "B0BQGFD2LX",
      query: "Basera Basic Indoor Whirlpool Badewanne Naxos 180 x 90",
    },
    {
      rank: 3,
      label: "Beste Eckwanne",
      name: "Basera Premium Futuna",
      brand: "Basera",
      variant: "Eck-Whirlpool 140 × 140 × 62 cm",
      visual: { kind: "bathtub", tone: "mint" },
      priceTier: 3,
      ratings: { massage: 9.0, ausstattung: 9.5, einbau: 7.0, preis: 6.5 },
      bestFor: "Bäder mit freier Ecke und alle, die Wasser- und Luftmassage wollen",
      verdict:
        "Die Eckwanne aus der Premium-Reihe von Basera: laut Anbieter 21 Massagedüsen an Seiten, Boden und Rücken, dazu eine eigene Luftpumpe für die Bodendüsen, 1.000-Watt-Heizung, Ozongenerator und Bodenansaugung. Mit 140 × 140 cm braucht sie eine freie Ecke und fasst mit rund 220 Litern mehr Wasser als die Rechteckwannen.",
      features: [
        "21 Massagedüsen: 5 flache Seitendüsen, 8 Bodendüsen, 8 Rückendüsen (Anbieterangabe)",
        "750-W-Wasserpumpe plus 300-W-Luftpumpe, 1.000-W-Heizung (Anbieterangabe)",
        "Ozongenerator, Bodenansaugung, Wasserfall, LED, Touchpanel, Bluetooth und Radio (Anbieterangabe)",
      ],
      pros: ["Wasser- und Luftmassage kombiniert", "Heizung und Ozon an Bord", "Nutzt eine freie Ecke gut aus"],
      cons: ["Teuer", "Mehr Wasser pro Bad als eine Rechteckwanne"],
      specs: {
        masse: "140 × 140 × 62 cm",
        form: "Eckwanne",
        duesen: "21 Düsen (Wasser + Luft)",
        heizung: "ja, 1.000 W",
        hygiene: "Ozon, Bodenansaugung",
        extras: "LED, Bluetooth, Radio",
      },
      asin: "B0BWN9WQW5",
      query: "Basera Premium Indoor Eck-Whirlpool Badewanne Futuna 140 x 140",
    },
  ],

  comparison: [
    { key: "masse", label: "Maße" },
    { key: "form", label: "Form" },
    { key: "duesen", label: "Düsen" },
    { key: "heizung", label: "Wasserheizung" },
    { key: "hygiene", label: "Hygiene/Technik" },
    { key: "extras", label: "Extras" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-indoor-whirlpools-2026-bewertung.svg",
      title: "Die 3 besten Indoor-Whirlpools 2026",
      alt: "Balkendiagramm: Bewertung von Basera Premium Naxos, Basera Basic Naxos und Basera Premium Futuna nach Massage, Heizung und Hygiene, Einbau und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Die Massage wiegt am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "whirlpool-badewanne-einbauen.svg",
      title: "Whirlpool-Badewanne einbauen",
      subtitle: "Was vor dem ersten Sprudelbad geklärt sein muss",
      alt: "Infografik: Whirlpool-Badewanne einbauen – Maße und Transportweg prüfen, Revisionsöffnung planen, Elektroanschluss vom Fachbetrieb, Wasser und Abfluss anschließen, Leitungen regelmäßig reinigen",
      caption: "Fünf Schritte von der Planung bis zur Pflege.",
      steps: [
        { title: "Maße prüfen", text: "Einbaumaß, Türbreiten und Treppen für den Transport messen." },
        { title: "Technik zugänglich", text: "Revisionsöffnung für Pumpe und Heizung einplanen." },
        { title: "Strom vom Profi", text: "Eigener Stromkreis mit FI, Anschluss durch Elektrofachkraft." },
        { title: "Wasser anschließen", text: "Armatur, Ab- und Überlauf vom Installateur." },
        { title: "Leitungen pflegen", text: "Düsensystem regelmäßig mit Systemreiniger spülen." },
      ],
    },
  },

  editorial: {
    title: "Welcher Indoor-Whirlpool passt in dein Bad?",
    intro: "Wasser- oder Luftdüsen, mit oder ohne Heizung, Rechteck oder rund – und warum die Hygiene-Technik wichtiger ist als die Zahl der Düsen.",
    sections: [
      {
        id: "bester-indoor-whirlpool",
        h2: "Welcher Indoor-Whirlpool ist der beste?",
        blocks: [
          { quick: "Für die meisten Bäder ist die [Basera Premium Naxos](produkt:1) die beste Wahl, weil sie im Standardmaß 180 × 90 cm viele Düsen, Heizung und eine gute Hygiene-Ausstattung vereint. Günstiger ist die [Basera Basic Naxos](produkt:2) ohne Heizung, wer eine freie Ecke hat, nimmt die [Basera Premium Futuna](produkt:3)." },
          { first: "Ein Indoor-Whirlpool ist im Kern eine Acryl-Badewanne mit eingebautem Düsensystem. Eine **Wasserpumpe** saugt Badewasser an und drückt es durch die Düsen in den Seiten, im Rücken oder im Boden – das ist die eigentliche Massage. Viele Wannen mischen über ein Ventil Luft bei, manche haben zusätzlich ein **Luftgebläse** mit Bodendüsen, das wie eine Sprudelmatte prickelt." },
          { p: "Wichtiger als die reine Düsenzahl ist, wo die Düsen sitzen und wie gut das System leerläuft. Nach jedem Bad bleibt Wasser in Leitungen und Pumpe stehen. Eine **Bodenansaugung** wie bei der [Basera Premium Naxos](produkt:1) sorgt für eine bessere Restentleerung, ein Ozongenerator unterstützt die Hygiene – ersetzt aber laut Anbieter nicht die regelmäßige Reinigung." },
          { figure: "scores" },
          { p: "Die [Basera Premium Futuna](produkt:3) bietet dieselbe Hygiene-Technik wie die Naxos und zusätzlich eine Luftpumpe für Bodendüsen, braucht aber eine freie Ecke. Die [Basera Basic Naxos](produkt:2) liegt dahinter, weil Heizung und Bodendüsen fehlen – dafür ist sie deutlich günstiger." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf Maße und Form, Zahl und Lage der Düsen, eine Wasserheizung für lange Bäder, Restentleerung und Reinigung des Leitungssystems, die Lautstärke der Pumpe und darauf, dass Pumpe und Technik nach dem Einbau zugänglich bleiben." },
          {
            table: {
              caption: "Welche Wannenform für welches Bad",
              head: ["Form", "Typisches Maß", "Passt für"],
              rows: [
                ["**Rechteckwanne**", "170–190 × 75–90 cm", "Wannentausch im normalen Bad"],
                ["**Eckwanne**", "ca. 140–160 cm Schenkellänge", "Bad mit freier Ecke, oft 2 Personen"],
                ["**Rund/oval**", "ca. 140 × 140 cm und mehr", "Großes Bad oder Wellness-Raum"],
                ["**Sprudelmatte**", "in jeder Wanne", "Mietwohnung, kein Umbau möglich"],
              ],
            },
          },
          { h3: "Heizung oder nicht?" },
          { p: "Eine Whirlpool-Heizung erwärmt kein kaltes Wasser, sie hält das eingelassene warme Wasser auf Temperatur. Wer gern länger als eine Viertelstunde sprudelt, merkt den Unterschied: Durch Düsen und Luft kühlt Badewasser schneller ab als in einer normalen Wanne." },
          { h3: "Gewicht und Untergrund" },
          { p: "Eine Rechteckwanne mit 180 Litern Wasser und einer Person ist für normale Wohnungsdecken unproblematisch. Große Zwei-Personen-Wannen bringen mit Füllung und Badenden deutlich mehr auf die Fläche – bei Altbauten mit Holzbalkendecken lohnt vorher ein Blick auf die Tragfähigkeit." },
          { list: ["Einbaumaß und Transportweg messen", "Düsen an Rücken, Seiten und Boden vergleichen", "Wasserheizung für lange Bäder", "Restentleerung oder Bodenansaugung", "Revisionsöffnung für Pumpe und Heizung", "Elektroanschluss und Installateur einplanen"] },
        ],
      },
      {
        id: "zielgruppen",
        h2: "Welcher Indoor-Whirlpool passt zu wem?",
        blocks: [
          { quick: "Basera Premium für die Bad-Renovierung mit vollem Komfort, Basera Basic für den günstigen Wannentausch, Basera Premium Futuna für Bäder mit freier Ecke. Mieter ohne Umbaumöglichkeit greifen zur Sprudelmatte." },
          {
            cards: [
              { title: "Bad-Renovierung", text: "Die [Basera Premium Naxos](produkt:1) passt ins Standardmaß und bringt Heizung, Ozon und Bodendüsen mit." },
              { title: "Günstiger Wannentausch", text: "Die [Basera Basic Naxos](produkt:2) bietet Whirlpool-Massage im selben Maß, ohne Heizung und Extras." },
              { title: "Bad mit freier Ecke", text: "Die [Basera Premium Futuna](produkt:3) nutzt die Ecke aus und kombiniert Wasser- und Luftmassage mit Heizung." },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-whirlpool-ohne-umbau",
    h2: "Whirlpool ohne Umbau: die 5 besten Sprudelmatten und Alternativen",
    intro:
      "Nicht jeder kann oder will die Badewanne tauschen. Sprudelmatten werden in die vorhandene Wanne gelegt und blasen Luft durch viele kleine Löcher – das prickelt wie ein Luftsprudelbad, massiert aber nicht wie Wasserdüsen. Dazu ein Indoor-tauglicher Whirlpool für Keller oder Wintergarten und ein Nachrüstsatz für Heimwerker.",
    items: [
      { name: "medisana BBS Luftsprudelbad", for: "Beste Sprudelmatte", text: "Matte rund 120 × 36 cm, drei Intensitätsstufen, zuschaltbare Luftheizung, Timer 10/20/30 Minuten, Duftstoffträger und Fernbedienung (Herstellerangabe).", asin: "B07V47NGLC", query: "medisana BBS Luftsprudelbad" },
      { name: "medisana MBH Luftsprudelbad", for: "Günstigere Medisana-Variante", text: "Mehrere Intensitätsstufen und ein Intervallprogramm, Bedienung am Gerät oder per Infrarot-Fernbedienung (Herstellerangabe).", asin: "B08D9KGFKC", query: "medisana MBH Luftsprudelbad" },
      { name: "Newgen Medicals Sprudelmatte", for: "Preiswerter Einstieg", text: "Einfache Luftsprudelmatte für die Badewanne mit Gebläse; vor dem Kauf Mattenmaß mit der eigenen Wanne vergleichen.", asin: "B006K0XKSS", query: "Newgen Medicals Sprudelmatte Whirlpoolmatte Badewanne" },
      { name: "Intex PureSpa Chevron Deluxe (Indoor & Outdoor)", for: "Keller, Wintergarten, 6 Personen", text: "Aufblasbarer Whirlpool, laut Angebot für drinnen und draußen: 196 × 196 cm, 1.098 Liter, 170 Luftdüsen, Salzwassersystem und Wasserenthärtung. Drinnen Bodenlast, Abfluss und Lüftung einplanen.", asin: "B0DVCCTSBX", query: "Intex PureSpa Chevron Deluxe 28472NP" },
      { name: "AQUADE Whirlpool-Selbstbausatz", for: "Nachrüsten beim Wannenneubau", text: "Düsen, Pumpe und Zubehör zum Einbau in eine neue Acrylwanne; erfordert Bohrungen in der Wanne und den Anschluss durch Fachleute.", asin: "B078NM8ZZQ", query: "AQUADE Whirlpool Badewanne Selbstbausatz" },
    ],
  },

  guide: {
    sections: [
      {
        id: "einbau",
        h2: "Was muss man beim Einbau einer Whirlpool-Badewanne beachten?",
        blocks: [
          { quick: "Eine Whirlpool-Badewanne braucht einen eigenen, fest installierten Stromanschluss mit Fehlerstrom-Schutzschalter, den eine Elektrofachkraft nach DIN VDE 0100-701 ausführt, dazu Wasser- und Abwasseranschluss vom Installateur und eine Revisionsöffnung, über die Pumpe und Heizung erreichbar bleiben." },
          { figure: "steps" },
          { p: "Für Elektroinstallationen im Badezimmer gilt die Norm DIN VDE 0100-701 mit ihren Schutzbereichen rund um Wanne und Dusche. Ein Whirlpool braucht laut Fachinformation von Baunetz Wissen einen separaten elektrischen Anschluss; eine Steckdose neben der Wanne ist dafür nicht gedacht. Plane das früh in der Bad-Renovierung ein, damit Leitungen unter Putz verlegt werden können." },
          { p: "Pumpe, Heizung und Steuerung sitzen unter der Wanne. Wird die Wanne komplett eingefliest, muss eine **Revisionsöffnung** in der Wannenschürze bleiben – sonst wird jede Reparatur zur Baustelle. Vor dem Kauf außerdem Türbreiten und Treppenhaus messen: Große Zwei-Personen-Wannen passen nicht durch jede Tür." },
          { callout: { title: "Sicherheit", warn: true, text: "Elektro- und Sanitärarbeiten an einem Whirlpool gehören in die Hand von Fachbetrieben. Selbst angeschlossene Wannen gefährden nicht nur dich, sondern können auch Gewährleistung und Versicherungsschutz kosten." } },
        ],
      },
      {
        id: "pflege",
        h2: "Wie reinigt man das Düsensystem eines Whirlpools?",
        blocks: [
          { quick: "Das Leitungssystem regelmäßig mit einem Whirlpool-Systemreiniger durchspülen: Wanne über die Düsen füllen, Reiniger zugeben, die Pumpe einige Minuten laufen lassen, ablassen und mit klarem Wasser nachspülen. Die Häufigkeit nennt der Hersteller." },
          { p: "Nach jedem Bad bleibt etwas Wasser mit Hautschuppen, Seifen- und Ölresten in Leitungen und Pumpe zurück. Bayerns Landesamt für Gesundheit zählt Warmsprudelbecken zu den Anlagen, in denen sich Legionellen vermehren können, wenn sie schlecht gepflegt werden. Eine gute Restentleerung, eine Bodenansaugung und regelmäßige Reinigung halten das System sauber. Badezusätze, die stark schäumen oder ölen, setzen die Düsen schneller zu – viele Hersteller raten von Schaumbädern im Whirlpool-Betrieb ab." },
          { p: "Bei Sprudelmatten ist die Pflege einfacher: Nach dem Bad das Gebläse noch kurz laufen lassen, damit Restwasser aus der Matte geblasen wird, und die Matte trocken lagern." },
          { facts: [{ value: "180 × 90 cm", label: "Standardmaß der Basera Naxos (Anbieterangabe)" }, { value: "24", label: "Massagedüsen der Basera Premium Naxos (Anbieterangabe)" }, { value: "FI + eigener Kreis", label: "Elektroanschluss für Whirlpool-Wannen" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Indoor-Whirlpool ist der beste?", a: "Unsere beste Gesamtwahl ist die Basera Premium Naxos im Standardmaß 180 × 90 cm mit laut Anbieter 24 Düsen, Heizung, Ozongenerator und Bodenansaugung. Günstiger ist die Basera Basic Naxos, als Eckwanne die Basera Premium Futuna." },
    { q: "Kann man eine normale Badewanne durch eine Whirlpool-Wanne ersetzen?", a: "Ja, wenn die neue Wanne ins vorhandene Maß passt, etwa 180 × 90 cm. Zusätzlich braucht der Whirlpool einen eigenen Stromanschluss mit FI-Schutzschalter vom Elektriker und eine Revisionsöffnung für die Technik." },
    { q: "Braucht eine Whirlpool-Badewanne einen eigenen Stromanschluss?", a: "Ja. Ein Whirlpool im Bad braucht einen separaten, fest installierten Anschluss mit Fehlerstrom-Schutzschalter nach DIN VDE 0100-701. Den Anschluss übernimmt eine Elektrofachkraft." },
    { q: "Was ist der Unterschied zwischen Whirlpool und Sprudelbad?", a: "Ein Whirlpool massiert mit Wasserdüsen, durch die eine Pumpe Badewasser drückt. Ein Sprudelbad oder eine Sprudelmatte bläst nur Luft ins Wasser – das prickelt, massiert aber kaum. Sprudelmatten passen dafür ohne Umbau in jede Wanne." },
    { q: "Ist ein Whirlpool hygienisch?", a: "Ja, wenn er gepflegt wird. Weil in Leitungen und Pumpe Restwasser stehen bleibt, sollte das Düsensystem regelmäßig mit einem Systemreiniger gespült werden. Bodenansaugung, gute Restentleerung und Ozon helfen, ersetzen die Reinigung aber nicht." },
    { q: "Kann man einen aufblasbaren Whirlpool drinnen aufstellen?", a: "Manche Modelle sind laut Hersteller für drinnen und draußen geeignet, etwa der Intex PureSpa Chevron Deluxe. Drinnen müssen die Bodenlast von über einer Tonne, ein Wasserablauf in der Nähe und eine gute Lüftung gegen Feuchtigkeit eingeplant werden." },
  ],

  sources: [
    { label: "Baunetz Wissen: Elektroanschlüsse im Bad", url: "https://www.baunetzwissen.de/bad-und-sanitaer/fachwissen/elektroinstallationen/elektroanschluesse-im-bad-172832" },
    { label: "Hornbach: Basera Premium Indoor-Whirlpool Naxos (technische Daten)", url: "https://www.hornbach.de/p/premium-indoor-whirlpool-naxos/12398209/" },
    { label: "medisana: BBS Luftsprudelbad", url: "https://www.medisana.de/en/BBS-Luftsprudelbad/88388" },
    { label: "medisana: MBH Luftsprudelbad", url: "https://www.medisana.de/en/MBH-Bath-spa/88379" },
    { label: "Bayerisches Landesamt für Gesundheit und Lebensmittelsicherheit: Legionellen", url: "https://www.lgl.bayern.de/gesundheit/hygiene/wasserhygiene/legionellen/" },
  ],

  related: [
    { slug: "outdoor-whirlpool", text: "Outdoor-Whirlpools für Garten und Terrasse." },
    { area: "wellness", text: "Alle Ratgeber für Whirlpool & Wellness." },
    { slug: "luftreiniger-hepa", text: "Luftreiniger mit HEPA-Filter für Wohnräume." },
  ],
};
