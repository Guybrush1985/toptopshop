// Kategorie: LEGO-LED-Beleuchtung (Lichtsets für LEGO-Sets)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "lego-led-beleuchtung",
  area: "lego-sammler",
  navLabel: "LEGO-LED-Beleuchtung",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "LEGO LED-Beleuchtung: Die 3 besten Lichtsets für LEGO 2026",
  metaDescription:
    "LED-Lichtset für LEGO nachrüsten: die 3 besten Kits 2026 für Modular-Haus, Ideas-Set und Hogwarts – mit Tipps zu Einbau, USB-Strom, Fernbedienung und Vitrine.",

  eyebrow: "LEGO® ausstellen · LED-Beleuchtung",
  h1: "Die 3 besten LED-Lichtsets für LEGO 2026",
  lead:
    "Ein beleuchtetes Modell wirkt abends wie ein kleines Diorama: Fenster leuchten, Straßenlaternen brennen, Innenräume werden sichtbar. Wichtig vorab: Ein LED-Lichtset passt immer nur zu einem bestimmten LEGO-Set. Kauf also das Kit für dein Set. Unsere Top 3 zeigen drei typische Fälle – Modular-Haus, kleines Ideas-Set und großes Schloss – und die Top 5 weitere Kits nach Themenwelt.",
  answer:
    "Unsere beste Gesamtwahl ist das [**LED Light Kit for LEGO® Icons Tudor Corner 10350**](produkt:1), das laut Shop vier Innenräume des Modular-Hauses beleuchtet. Das beste Preis-Leistungs-Verhältnis bietet das [**LED Light Kit for LEGO® Ideas Disney Pixar Luxo Jr. 21357**](produkt:2), das der Lampe ein echtes Leuchten gibt. Für große Sets steht das [**Light Kit Compatible with LEGO® Hogwarts™ Castle Set 71043**](produkt:3), auch mit Fernbedienung erhältlich.",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 70 €" },
    2: { symbol: "€€", label: "ca. 70–100 €" },
    3: { symbol: "€€€", label: "über ca. 100 €" },
  },

  top3Title: "Unsere Top 3 LED-Lichtsets für LEGO",
  top3Intro:
    "Alle drei Kits stammen vom britischen Zubehörshop BrickZoneHub, laufen über USB und sind laut Shop ohne Bohren, Schneiden oder Kleben nachrüstbar. Sie stehen stellvertretend für drei Anwendungsfälle: Gebäude mit Innenräumen, kleines Display-Modell und großes Sammlerstück. Für dein eigenes Set wählst du das Kit mit genau dieser Setnummer.",
  comparisonTitle: "Die 3 besten LEGO-Lichtsets im Vergleich",

  criteria: [
    { key: "lichtwirkung", label: "Passgenauigkeit & Lichtwirkung", weight: 0.35, description: "Ist das Kit auf eine Setnummer zugeschnitten, welche Bereiche werden laut Shop beleuchtet, wie stark verändert Licht die Wirkung des Modells?" },
    { key: "einbau", label: "Einbau & Rückbau", weight: 0.25, description: "Nachrüstbar am fertigen Modell, Anleitung, kein Bohren/Kleben, rückstandsfreies Entfernen; Aufwand steigt mit der Größe des Sets." },
    { key: "strom_bedienung", label: "Strom & Bedienung", weight: 0.2, description: "USB-Versorgung, Wahl zwischen Classic- und Fernbedienungsversion, Alltagstauglichkeit beim Ein- und Ausschalten." },
    { key: "preis_shop", label: "Preis & Shop-Transparenz", weight: 0.2, description: "Preis im Verhältnis zum Set und zum Umfang, Klarheit von Lieferumfang, Versand und Verfügbarkeit auf der Produktseite." },
  ],

  method:
    "Wir haben die Lichtsets nicht selbst eingebaut. Grundlage sind die Produktseiten, die FAQ und die Versandbedingungen von BrickZoneHub (Stand Oktober 2026), die Trustpilot-Seite des Shops sowie der unabhängige Praxisbericht von Brick Fanatics zu einem LEGO-Lichtset eines anderen Herstellers. Tests von LEGO-Lichtsets durch Stiftung Warentest oder Öko-Test haben wir nicht gefunden. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl (Modular-Haus)",
      name: "LED Light Kit for LEGO® Icons Tudor Corner 10350",
      brand: "BrickZoneHub",
      variant: "Classic Version; Fernbedienungsversion für dieses Kit nicht bestätigt",
      visual: { kind: "ledkit", tone: "forest" },
      priceTier: 2,
      ratings: { lichtwirkung: 8.5, einbau: 8.0, strom_bedienung: 7.0, preis_shop: 8.0 },
      bestFor: "Modular-Häuser mit eingerichteten Innenräumen",
      verdict:
        "Bei Modular-Häusern bringt Licht am meisten: Die Innenräume sind liebevoll eingerichtet, aber hinter den Fenstern meist dunkel. Das Kit beleuchtet laut Shop Restaurant, Kurzwarenladen, Uhrmacherwerkstatt und Dachwohnung der Tudor Corner – also jede Etage. Eine Fernbedienungsversion haben wir für dieses Kit nicht gefunden.",
      features: [
        "Passend nur für LEGO® Icons Tudor Corner 10350 (laut Shop)",
        "Beleuchtet Restaurant, Kurzwarenladen, Uhrmacherwerkstatt und Dachwohnung (laut Shop)",
        "USB-Stromversorgung über Netzteil, Powerbank oder USB-Hub (laut Shop)",
        "Mit Schritt-für-Schritt-Anleitung, meist am fertigen Modell nachrüstbar, kein Bohren oder Kleben (laut Shop)",
      ],
      pros: ["Licht in allen vier Etagen – größter Effekt bei Häusern mit Inneneinrichtung", "Rückstandsfrei entfernbar laut Shop", "Mittlere Preisklasse für ein großes Modular-Set"],
      cons: ["Keine Fernbedienungsversion bestätigt", "Produktseite zeigt teils „Sold out“ – Verfügbarkeit prüfen", "Netzteil nicht ausdrücklich im Lieferumfang", "Versand aus Großbritannien"],
      specs: { set: "Icons Tudor Corner 10350", beleuchtet: "Restaurant, Kurzwarenladen, Uhrmacherwerkstatt, Dachwohnung (laut Shop)", versionen: "Classic", strom: "USB (Netzteil, Powerbank oder Hub)", einbau: "meist am fertigen Modell, ohne Kleben (laut Shop)", lieferumfang: "nur Lichtset, kein LEGO-Set" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/products-lego-icons-tudor-corner-10350-led-light-kit",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "LED Light Kit for LEGO® Ideas Disney Pixar Luxo Jr. 21357",
      brand: "BrickZoneHub",
      variant: "Classic Version oder Remote Control Version (Fernbedienung)",
      visual: { kind: "ledkit", tone: "green" },
      priceTier: 1,
      ratings: { lichtwirkung: 7.5, einbau: 8.5, strom_bedienung: 7.5, preis_shop: 8.0 },
      bestFor: "Einstieg ins Thema Licht mit einem kleinen Set",
      verdict:
        "Das günstigste Kit unserer Auswahl und ein besonders dankbares Motiv: Die Pixar-Lampe Luxo Jr. hat ab Werk keinen Leuchtstein. Das Kit beleuchtet laut Shop Lampe, Arm, Sockel und den Pixar-Ball. Weil das Modell klein ist, bleibt auch der Einbau überschaubar.",
      features: [
        "Passend nur für LEGO® Ideas Disney Pixar Luxo Jr. 21357 (laut Shop)",
        "Beleuchtet Lampenkopf, Arm, Sockel und Pixar-Ball mit warmem Licht (laut Shop)",
        "Classic Version oder Version mit Fernbedienung (laut Shop)",
        "USB-Stromversorgung, Kabel laufen zwischen den Steinen ohne Kleber (laut Shop)",
      ],
      pros: ["Niedrigste Preisklasse im Vergleich", "Kleines Modell – kurzer, übersichtlicher Einbau", "Wahl zwischen Classic und Fernbedienung"],
      cons: ["Wirkt vor allem als Akzentlicht, nicht als Raumbeleuchtung", "Fernbedienungsversion war zuletzt als nicht vorrätig markiert", "USB-Kabel muss vom Sockel weggeführt werden"],
      specs: { set: "Ideas Disney Pixar Luxo Jr. 21357", beleuchtet: "Lampe, Arm, Sockel, Pixar-Ball (laut Shop)", versionen: "Classic, Fernbedienung", strom: "USB (Netzteil, Powerbank oder Hub)", einbau: "meist am fertigen Modell, ohne Kleben (laut Shop)", lieferumfang: "nur Lichtset, kein LEGO-Set" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/products-lego-ideas-pixar-luxo-jr-21357-led-light-kit",
    },
    {
      rank: 3,
      label: "Premium: großes Sammlerset",
      name: "Light Kit Compatible with LEGO® Hogwarts™ Castle Set 71043",
      brand: "BrickZoneHub",
      variant: "Classic Version oder Remote Control Version (Fernbedienung)",
      visual: { kind: "ledkit", tone: "mint" },
      priceTier: 3,
      ratings: { lichtwirkung: 8.5, einbau: 6.5, strom_bedienung: 8.0, preis_shop: 6.5 },
      bestFor: "Große Schloss- und Burgmodelle als Mittelpunkt im Raum",
      verdict:
        "Für das große Hogwarts-Schloss 71043 lohnt sich Licht besonders, weil Türme, Große Halle und Fenster abends sonst im Dunkeln verschwinden. Das Kit ist das teuerste im Vergleich, und der Einbau in ein Modell dieser Größe braucht Geduld. Dafür gibt es eine Fernbedienungsversion.",
      features: [
        "Passend nur für LEGO® Harry Potter™ Hogwarts™ Castle 71043 (laut Shop)",
        "Beleuchtet Türme, Große Halle, Fenster, Brücken und Innenräume (laut Shop)",
        "Classic Version oder Version mit Fernbedienung (laut Shop)",
        "USB-Stromversorgung, ohne Bohren oder Schneiden, rückstandsfrei entfernbar (laut Shop)",
      ],
      pros: ["Großer Effekt bei einem großen Modell", "Fernbedienung erhältlich – praktisch, wenn der Schalter schwer erreichbar ist", "Rückbau ohne Spuren laut Shop"],
      cons: ["Höchste Preisklasse", "Viele Kabelwege – Einbau dauert entsprechend länger", "Produktseite zeigt teils „Sold out“", "Netzteil nicht ausdrücklich im Lieferumfang"],
      specs: { set: "Harry Potter Hogwarts Castle 71043", beleuchtet: "Türme, Große Halle, Fenster, Brücken (laut Shop)", versionen: "Classic, Fernbedienung", strom: "USB (Netzteil, Powerbank oder Hub)", einbau: "am fertigen Modell möglich, ohne Bohren (laut Shop)", lieferumfang: "nur Lichtset, kein LEGO-Set" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/products-lego-harry-potter-hogwarts-castle-71043-led-light-kit",
    },
  ],

  comparison: [
    { key: "set", label: "Passend für Set" },
    { key: "beleuchtet", label: "Beleuchtete Bereiche" },
    { key: "versionen", label: "Versionen" },
    { key: "strom", label: "Stromversorgung" },
    { key: "einbau", label: "Einbau" },
    { key: "lieferumfang", label: "Lieferumfang" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "lego-led-beleuchtung-beste-lichtsets-2026-bewertung.svg",
      title: "Die 3 besten LED-Lichtsets für LEGO 2026",
      alt: "Balkendiagramm: Bewertung der LED-Lichtsets für LEGO Tudor Corner 10350, Luxo Jr. 21357 und Hogwarts Castle 71043 in den Kriterien Passgenauigkeit & Lichtwirkung, Einbau & Rückbau, Strom & Bedienung sowie Preis & Shop-Transparenz",
      caption: "Unsere Bewertung je Kriterium. Passgenauigkeit und Lichtwirkung zählen am meisten.",
    },
    steps: {
      kind: "steps",
      file: "lego-led-beleuchtung-lichtset-einbauen.svg",
      title: "LED-Lichtset einbauen",
      subtitle: "Am fertigen LEGO-Modell nachrüsten",
      alt: "Infografik: LED-Lichtset für LEGO einbauen – Kit zur Setnummer wählen, Teile prüfen und testen, Abschnitt für Abschnitt einbauen, Kabel verstecken, Strom und Schaltung planen",
      caption: "Erst testen, dann Abschnitt für Abschnitt einbauen und die Kabel zwischen den Steinen verstecken.",
      steps: [
        { title: "Kit zur Setnummer wählen", text: "Nur das Lichtset mit genau der Nummer deines LEGO-Sets passt." },
        { title: "Teile prüfen und testen", text: "Alle LEDs vor dem Einbau einmal am USB-Strom anschließen." },
        { title: "Abschnittsweise einbauen", text: "Der Anleitung folgen, Etage für Etage abnehmen und wieder aufsetzen." },
        { title: "Kabel verstecken", text: "Flachkabel zwischen Steinen und unter Platten führen, nicht knicken." },
        { title: "Strom planen", text: "Kabel zur Steckdose führen, Zeitschaltuhr oder Fernbedienung nutzen." },
      ],
    },
  },

  editorial: {
    title: "Welches Lichtset für welches LEGO-Set?",
    intro: "Warum es kein Universal-Lichtset gibt, wie die Kits technisch aufgebaut sind und worauf du beim Kauf achten solltest.",
    sections: [
      {
        id: "bestes-lego-lichtset",
        h2: "Welches LED-Lichtset für LEGO ist das beste?",
        blocks: [
          { quick: "Das beste Lichtset ist immer das für dein Set. Als Beispiel überzeugt das [Kit für die Tudor Corner 10350](produkt:1), weil es alle vier Etagen beleuchtet. Günstig ist das [Kit für Luxo Jr. 21357](produkt:2), für große Modelle das [Kit für Hogwarts Castle 71043](produkt:3) mit optionaler Fernbedienung." },
          { first: "Anders als bei Vitrinen oder Wandrahmen gibt es bei der Beleuchtung keine Lösung, die zu mehreren Modellen passt. Ein Lichtset besteht aus LEDs, Kabeln und Verteilern, deren Längen und Positionen auf ein bestimmtes Modell abgestimmt sind. BrickZoneHub schreibt auf jeder Produktseite, dass jedes Kit für eine bestimmte LEGO-Setnummer entwickelt wurde. **Prüfe deshalb vor dem Kauf die Setnummer im Produkttitel.** Unsere Top 3 sind Beispiele für drei typische Anwendungsfälle – wenn du ein anderes Set besitzt, suchst du das Kit mit dessen Nummer." },
          { p: "Das [Kit für die Tudor Corner 10350](produkt:1) steht für die Kategorie, in der Licht am meisten verändert: Gebäude mit eingerichteten Innenräumen. Laut Shop beleuchtet es Restaurant, Kurzwarenladen, Uhrmacherwerkstatt und Dachwohnung. Tagsüber sieht man diese Räume kaum, abends werden sie durch die Fenster sichtbar. Für dieses Kit fanden wir nur die Classic Version, eine Fernbedienung ist nicht bestätigt. Es liegt in der mittleren Preisklasse; im Shop werden die Preise in Pfund ausgewiesen." },
          { p: "Das [Kit für Luxo Jr. 21357](produkt:2) ist der günstige Einstieg. Die Pixar-Lampe ist ein kleines Modell, der Einbau entsprechend übersichtlich. Interessant: LEGO hat bewusst keinen Leuchtstein eingebaut. Laut Brick Fanatics begründete der Ideas-Designmanager das damit, dass Leuchtsteine wenig Licht abgeben, das Set die Figur und ihre Beweglichkeit in den Mittelpunkt stellt und ein Leuchtstein einen Warnhinweis auf der Verpackung erfordert hätte. Das Lichtset füllt genau diese Lücke: Es beleuchtet laut Shop Lampenkopf, Arm, Sockel und Ball." },
          { p: "Das [Kit für Hogwarts Castle 71043](produkt:3) ist die Premiumwahl für ein großes Modell. Türme, Große Halle, Fenster und Brücken werden laut Shop ausgeleuchtet. Je größer das Set, desto mehr Kabel müssen verlegt werden – rechne mit deutlich mehr Zeit als bei einem kleinen Modell. Dafür gibt es hier eine Version mit Fernbedienung, die bei einem großen Schloss im Regal praktisch ist." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines LEGO-Lichtsets achten?",
        blocks: [
          { quick: "Zuerst auf die exakte Setnummer, dann auf die beleuchteten Bereiche, die Stromversorgung (USB oder Batteriebox), die Bedienung (Schalter oder Fernbedienung) und den Lieferumfang – Netzteil und LEGO-Set sind oft nicht enthalten." },
          { h3: "Wie funktionieren LED-Lichtsets?" },
          { p: "Die meisten Lichtsets für LEGO arbeiten mit **kleinen LED-Punkten oder kurzen LED-Streifen**, die an sehr dünnen Kabeln hängen. Diese Kabel werden zu Verteiler- oder Erweiterungsplatinen geführt, von denen ein Hauptkabel zur Stromquelle läuft. Die dünnen Kabel lassen sich zwischen zwei Steinen einklemmen, ohne dass das Modell sichtbar auseinandersteht. Wie viele Platinen und welche Kabellängen ein BrickZoneHub-Kit enthält, haben wir auf den Produktseiten nicht gefunden; laut Shop-FAQ enthält das Paket LEDs, Kabel und Zubehör." },
          { h3: "USB oder Batteriebox?" },
          { p: "BrickZoneHub-Kits laufen laut Shop über **USB** – an einem USB-Netzteil, einer Powerbank oder einem USB-Hub. Ein Netzteil wird dabei als Möglichkeit genannt, nicht ausdrücklich als Teil des Lieferumfangs; plane also eines ein. Andere Hersteller legen teils eine Batteriebox bei. Brick Fanatics beschreibt diese in einem Test eines Lichtsets von Light My Bricks als recht klobig und weist auf eine USB-Alternative hin. Für Modelle, die dauerhaft im Regal stehen, ist USB meist die bequemere Lösung." },
          { h3: "Classic oder Fernbedienung?" },
          { p: "Viele Kits gibt es in einer **Classic Version** und einer **Remote Control Version**. Die Fernbedienung lohnt sich vor allem, wenn das Modell hoch im Regal oder in einer geschlossenen Vitrine steht. Ob eine Fernbedienung angeboten wird, ist je Kit verschieden: beim Luxo-Jr.- und Hogwarts-Kit ja, bei der Tudor Corner haben wir sie nicht gefunden." },
          {
            table: {
              caption: "Lichtset-Varianten im Überblick",
              head: ["Merkmal", "Vorteil", "Worauf achten"],
              rows: [
                ["**USB-Versorgung**", "Dauerbetrieb, kein Batteriewechsel", "Netzteil oft nicht enthalten, Kabel zur Steckdose"],
                ["**Batteriebox**", "Kabellos aufstellbar", "Box ist sichtbar, Batterien wechseln"],
                ["**Classic Version**", "Günstiger, einfacher Aufbau", "Schalter muss erreichbar sein"],
                ["**Fernbedienung**", "Bequem bei hohem Regal oder Vitrine", "Aufpreis, nicht für jedes Kit erhältlich"],
              ],
            },
          },
          { h3: "Shop und Alternativen" },
          { p: "BrickZoneHub ist ein britischer Shop, die Kits sind Zubehör eines Drittanbieters und nicht von LEGO autorisiert. Auf Amazon gibt es weitere Anbieter von LEGO-Lichtsets, etwa Briksmax oder Lightailing. Wir empfehlen hier gezielt BrickZoneHub-Kits, weil sie über unseren Partnershop erhältlich sind und Aufbau, Lieferumfang und Stromversorgung transparent beschreiben. Unabhängige Tests der BrickZoneHub-Kits haben wir nicht gefunden." },
          { list: ["Setnummer im Produkttitel stimmt mit deinem Set überein", "Beleuchtete Bereiche passen zu dem, was du zeigen willst", "USB-Netzteil oder Powerbank vorhanden", "Classic oder Fernbedienung – je nach Aufstellort", "Verfügbarkeit, Versandart und Einfuhrkosten im Checkout prüfen"] },
        ],
      },
      {
        id: "welches-lichtset-passt",
        h2: "Welches LEGO-Lichtset passt zu wem?",
        blocks: [
          { quick: "Modular-Häuser und Gebäude mit Inneneinrichtung profitieren am meisten. Für den Einstieg eignet sich ein kleines Set wie Luxo Jr., für große Schlösser eine Version mit Fernbedienung." },
          {
            cards: [
              { title: "Modular-Sammler", text: "Das [Kit für die Tudor Corner](produkt:1) bringt Licht in alle Etagen; für eine Straßenzeile gibt es passende Kits wie für die Shopping Street." },
              { title: "Erster Versuch mit Licht", text: "Das [Kit für Luxo Jr.](produkt:2) ist günstig und schnell eingebaut." },
              { title: "Großes Schloss im Wohnzimmer", text: "Das [Kit für Hogwarts Castle](produkt:3) mit Fernbedienung spart den Griff hinters Modell." },
              { title: "Modell in der Vitrine", text: "Fernbedienung wählen und Kabelweg durch oder hinter der Bodenplatte planen – mehr dazu im Ratgeber [LEGO-Vitrine](/lego-vitrine/)." },
            ],
          },
          { p: "Licht und Staubschutz ergänzen sich: Ein beleuchtetes Modell in einer [Acrylvitrine](/lego-vitrine/) bleibt sauber und wirkt abends noch stärker. Für flache Modelle an der Wand gibt es [Wandrahmen](/lego-wandrahmen/), teils mit eigener USB-LED-Leiste; Rennwagen und Technic-Modelle stellst du in einer [Technic-Vitrine](/lego-technic-vitrine/) aus." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-themenwelten",
    h2: "Die 5 besten LEGO-Lichtsets nach Themenwelt",
    intro: "Stadt, Zauberwelt, Mittelerde, Schiff oder Botanik – für jede Themenwelt ein Beispiel-Kit. Auch hier gilt: Jedes Kit passt nur zu der genannten Setnummer.",
    items: [
      { name: "LED Light Kit for LEGO® Icons Shopping Street 11371", for: "Stadt und Modular-Häuser", text: "Lichtset für die Shopping Street 11371, passend zur Tudor Corner in einer Straßenzeile. USB-Versorgung, LEDs, Kabel und Zubehör, kein LEGO-Set (laut Shop). Untere Preisklasse.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/products-lego-icons-shopping-street-11371-led-light-kit" },
      { name: "LED Light Kit for LEGO® Harry Potter™ Diagon Alley™ Shops 76444", for: "Harry-Potter-Winkelgasse", text: "Lichtset für die Läden der Winkelgasse 76444, laut Shop als Classic Version und mit Fernbedienung erhältlich. Für Sammler, die neben dem Schloss auch die Straßenzüge zeigen.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/products-lego-harry-potter-diagon-alley-76444-led-light-kit" },
      { name: "LED Light Kit for LEGO® Icons The Lord of the Rings: The Shire™ 10354", for: "Mittelerde und Fantasy", text: "Lichtset für das Auenland-Set 10354. Warmes Licht hinter runden Hobbit-Fenstern gehört zu den stimmungsvollsten Effekten. Preis und Versionen im Shop prüfen.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/products-lego-icons-the-shire-10354-led-light-kit" },
      { name: "LED Light Kit for LEGO® Icons The Endurance 10335", for: "Schiffe und Display-Modelle", text: "Lichtset für Shackletons Schiff Endurance 10335, laut Shop auch als Remote Control Version. Bei Display-Modellen setzt Licht Akzente statt Räume zu füllen.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/products-lego-icons-the-endurance-10335-led-light-kit" },
      { name: "LED Light Kit for LEGO® Botanicals Woodland Mushrooms 11505", for: "Botanicals und Deko", text: "Lichtset für die Waldpilze 11505 – macht aus dem Deko-Set ein kleines Nachtlicht-Objekt fürs Regal. USB-Versorgung (laut Shop), untere Preisklasse.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/products-lego-botanicals-woodland-mushrooms-11505-led-light-kit" },
    ],
  },

  guide: {
    sections: [
      {
        id: "lichtset-einbauen",
        h2: "Wie baut man ein LED-Lichtset in ein LEGO-Set ein?",
        blocks: [
          { quick: "Alle LEDs zuerst testen, dann der Anleitung folgend Abschnitt für Abschnitt einbauen: Etage abnehmen, LEDs setzen, Kabel zwischen den Steinen verlegen, wieder aufsetzen. Laut Shop geht das bei den meisten Kits am fertigen Modell, ohne Bohren und Kleben." },
          { figure: "steps" },
          { p: "**Am fertigen Modell oder beim Bauen?** BrickZoneHub schreibt, dass sich die meisten Kits am bereits gebauten Modell nachrüsten lassen. Bei Modular-Häusern ist das einfach, weil sich die Etagen abheben lassen. Bei geschlossenen Modellen müssen einzelne Bereiche teilweise zerlegt werden. Wer ein Set gerade neu baut, kann die Lichtpunkte auch gleich mit einsetzen und spart sich das Zerlegen. Brick Fanatics beschreibt den Einbau eines Lichtsets eines anderen Herstellers als fummelig – mit teilweisem Zerlegen, Wiederaufbauen und dem Durchfädeln dünner Kabel –, das Ergebnis aber als sehr wirkungsvoll; die Kabel seien kaum zu sehen." },
          { h3: "Kabel verstecken" },
          { p: "Die dünnen Kabel laufen laut Shop zwischen den Steinen, ohne Kleber. Bewährt hat sich: Kabel an Innenkanten, hinter Säulen und unter Fliesen führen, nicht über sichtbare Flächen. Kabel nicht scharf knicken und nicht zwischen zwei Steinen einquetschen, die du später oft abnimmst. Das Hauptkabel verlässt das Modell am besten an der Rückseite. Lass am Ende etwas Reserve, damit du Etagen später noch abnehmen kannst." },
          { h3: "Strom und Dauerbetrieb" },
          { p: "USB liefert 5 Volt; LEDs brauchen wenig Strom und werden im Betrieb in der Regel nur wenig warm. Trotzdem solltest du LEDs nicht dauerhaft gegen sehr dünne transparente Teile pressen und das Licht nicht rund um die Uhr laufen lassen. Praktisch ist eine **Zeitschaltuhr** oder eine schaltbare Steckdose am USB-Netzteil – so geht das Licht abends automatisch an. Eine Powerbank eignet sich für den kurzen Einsatz, etwa für Fotos oder eine Ausstellung." },
          { callout: { title: "Sicherheit", warn: true, text: "Lichtsets enthalten Kleinteile und dünne Kabel und gehören nicht in die Hände kleiner Kinder. Powerbanks nicht unbeaufsichtigt über lange Zeit laden oder dauerhaft am Ladegerät lassen. Nur intakte USB-Netzteile verwenden und Kabel nicht unter Teppiche oder hinter heiße Geräte legen." } },
          { facts: [{ value: "5 V", label: "USB-Spannung (Standard)" }, { value: "4", label: "Räume im Tudor-Corner-Kit (laut Shop)" }, { value: "2", label: "Versionen: Classic und Fernbedienung (je Kit unterschiedlich)" }] },
        ],
      },
      {
        id: "bestellen-vitrine",
        h2: "Was sollte man vor der Bestellung und beim Kombinieren mit einer Vitrine wissen?",
        blocks: [
          { quick: "BrickZoneHub ist ein britischer Shop: Preise in Pfund, Lieferzeit laut Produktseiten 10–20 Werktage, Einfuhrkosten im Checkout prüfen. Bei einer Vitrine den Kabelweg planen – am einfachsten hinter der Bodenplatte nach hinten heraus." },
          { p: "Laut FAQ liefert BrickZoneHub unter anderem nach Deutschland, laut Shop kostenlos. Die Produktseiten nennen für internationale Lieferungen 10–20 Werktage; teils kann man zwischen Luftfracht (10–15 Tage) und teurerem Express mit DHL oder UPS (3–7 Tage) wählen. Ob beim Import Einfuhrumsatzsteuer oder Zoll anfallen, solltest du im Checkout prüfen – zusichern können wir das nicht. Der Shop nennt 30 Tage Rückgabe. Viele Produktseiten zeigen „Sold out“, während die Strukturdaten der Seite „in stock“ melden; prüfe die Verfügbarkeit daher im Warenkorb." },
          { p: "Auf Trustpilot hat BrickZoneHub im Oktober 2026 einen TrustScore von 3,4 bei nur 10 Bewertungen – eine dünne Datenbasis, aus der sich wenig ableiten lässt. Unabhängige Praxisberichte gibt es von Brick Fanatics (britisches LEGO-Magazin, das selbst Vitrinen verkauft) zu Vitrinen und Rahmen des Shops, nicht aber zu den Lichtsets." },
          { p: "**Lichtset und Vitrine kombinieren:** Die Vitrinen des Shops bestehen laut Shop aus 3 mm Acryl und einer 5 mm Bodenplatte. Das USB-Kabel muss nach draußen; ob eine Bodenplatte eine Kabelöffnung hat, ist je Vitrine verschieden – keine allgemeine Angabe gefunden. Ohne Öffnung führst du das flache Kabel an der Rückseite unter der Haube hindurch. Eine Fernbedienung erspart dir dann das Öffnen der Vitrine. Wie du die passende Vitrine findest, steht im Ratgeber [LEGO-Vitrine](/lego-vitrine/); für Figurensammlungen gibt es die [Minifiguren-Vitrine](/lego-minifiguren-vitrine/)." },
          { callout: { title: "Gut zu wissen", text: "Lichtsets von BrickZoneHub sind Zubehör eines Drittanbieters, nicht von LEGO gesponsert oder autorisiert. Geliefert wird nur das Lichtset – das LEGO-Set ist nicht enthalten. Preise werden im Shop in Pfund ausgewiesen." } },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches LED-Lichtset für LEGO ist das beste?", a: "Das beste Lichtset ist das für dein Set, denn jedes Kit passt nur zu einer Setnummer. Als Beispiele empfehlen wir das Kit für die Tudor Corner 10350 (beste Gesamtwahl), für Luxo Jr. 21357 (Preis-Leistung) und für Hogwarts Castle 71043 (großes Set, mit Fernbedienung erhältlich)." },
    { q: "Passt ein LEGO-Lichtset zu jedem Set?", a: "Nein. Lichtsets sind auf ein bestimmtes Set zugeschnitten – Kabellängen und LED-Positionen passen nur dort. Prüfe die Setnummer im Produkttitel, bevor du bestellst." },
    { q: "Kann man LEGO-Beleuchtung am fertigen Modell nachrüsten?", a: "Ja, meistens. Laut BrickZoneHub lassen sich die meisten Kits am bereits gebauten Modell einbauen, ohne Bohren, Schneiden oder Kleben. Bei manchen Modellen musst du einzelne Bereiche teilweise zerlegen." },
    { q: "Wie wird ein LEGO-Lichtset mit Strom versorgt?", a: "Über USB – an einem USB-Netzteil, einer Powerbank oder einem USB-Hub. Ein Netzteil ist nicht ausdrücklich im Lieferumfang genannt. Andere Anbieter liefern teils eine Batteriebox." },
    { q: "Werden LEDs im LEGO-Modell heiß?", a: "LEDs werden im Betrieb in der Regel nur wenig warm. Trotzdem empfehlen wir, das Licht nicht dauerhaft laufen zu lassen und eine Zeitschaltuhr zu nutzen." },
    { q: "Lohnt sich die Version mit Fernbedienung?", a: "Ja, wenn das Modell hoch im Regal oder in einer Vitrine steht und der Schalter schwer erreichbar ist. Nicht jedes Kit gibt es mit Fernbedienung – beim Tudor-Corner-Kit haben wir sie nicht gefunden." },
    { q: "Ist BrickZoneHub seriös und liefert nach Deutschland?", a: "BrickZoneHub ist ein britischer Shop und liefert laut FAQ unter anderem nach Deutschland. Die Lieferzeit liegt laut Produktseiten bei 10–20 Werktagen; Einfuhrkosten im Checkout prüfen. Auf Trustpilot hat der Shop 3,4 Punkte bei nur 10 Bewertungen (Oktober 2026) – zu wenige für ein belastbares Urteil." },
    { q: "Ist das LEGO-Set beim Lichtset dabei?", a: "Nein. Geliefert werden nur LEDs, Kabel und Zubehör. Die Kits sind Zubehör eines Drittanbieters und nicht von LEGO autorisiert." },
  ],

  sources: [
    { label: "BrickZoneHub: LED Light Kit Tudor Corner 10350 (Shopangaben)", url: "https://brickzonehub.co.uk/products/products-lego-icons-tudor-corner-10350-led-light-kit" },
    { label: "BrickZoneHub: LED Light Kit Luxo Jr. 21357 (Shopangaben)", url: "https://brickzonehub.co.uk/products/products-lego-ideas-pixar-luxo-jr-21357-led-light-kit" },
    { label: "BrickZoneHub: Light Kit Hogwarts Castle 71043 (Shopangaben)", url: "https://brickzonehub.co.uk/products/products-lego-harry-potter-hogwarts-castle-71043-led-light-kit" },
    { label: "BrickZoneHub: LED Light Kit Shopping Street 11371 (FAQ zu Lieferumfang und Strom)", url: "https://brickzonehub.co.uk/products/products-lego-icons-shopping-street-11371-led-light-kit" },
    { label: "BrickZoneHub: FAQ", url: "https://brickzonehub.co.uk/pages/faq" },
    { label: "BrickZoneHub: Shipping Policy", url: "https://brickzonehub.co.uk/policies/shipping-policy" },
    { label: "Trustpilot: BrickZoneHub (Stand Oktober 2026)", url: "https://www.trustpilot.com/review/brickzonehub.co.uk" },
    { label: "Brick Fanatics: Elegant Bricks / Light My Bricks Lichtset im Test", url: "https://www.brickfanatics.com/elegant-bricks-lego-lighting-kit-review-and-exclusive-discount" },
    { label: "Brick Fanatics: Warum LEGO Ideas 21357 Luxo Jr. keinen Leuchtstein hat", url: "https://www.brickfanatics.com/why-lego-ideas-21357-luxo-jr-no-light-brick" },
  ],

  related: [
    { slug: "lego-vitrine", text: "Acrylvitrinen für LEGO-Sets – Staubschutz für beleuchtete Modelle." },
    { slug: "lego-wandrahmen", text: "Wandrahmen für flache LEGO-Modelle, teils mit USB-LED." },
    { slug: "lego-minifiguren-vitrine", text: "Wandvitrinen für Minifiguren-Sammlungen." },
    { area: "lego-sammler", text: "Alle Ratgeber zum Ausstellen von LEGO-Sets." },
  ],
};
