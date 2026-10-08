// Kategorie: Notnahrung & Langzeitverpflegung (Krisenvorsorge › Lebensmittel & Lagerung)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "notnahrung",
  area: "krisenvorsorge",
  group: "lebensmittel-lagerung",
  navLabel: "Notnahrung",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Notnahrung-Vorräte 2026 – 10 bis 20 Jahre haltbar",
  metaDescription:
    "Die 3 besten Produkte für den Notvorrat 2026: NRG-5 Notration, Trek'n Eat Emergency Line und ein 10-Tage-Notfallpaket – plus BBK-Vorratsplan, Kalorien und Lagerung.",

  eyebrow: "Krisenvorsorge · Lebensmittel & Lagerung",
  h1: "Die 3 besten Notnahrung-Vorräte 2026",
  lead:
    "Das BBK empfiehlt einen Lebensmittelvorrat für zehn Tage. Den größten Teil bilden Lebensmittel, die man ohnehin isst. Langzeit-Notnahrung ist die Reserve dahinter: einmal kaufen, einlagern und – je nach aufgedrucktem Mindesthaltbarkeitsdatum – erst nach vielen Jahren austauschen. Diese drei Produkte eignen sich nach unserer Einschätzung am besten.",
  answer:
    "Unsere beste Gesamtwahl ist die [**NRG-5 Notverpflegung im 24er-Karton**](produkt:1): sofort essbar, ohne Wasser und Kochen, laut Anbieter je nach Packung 15 bis 20 Jahre haltbar. Warme Mahlzeiten mit rund 15 Jahren Haltbarkeit liefert der [**Trek'n Eat Emergency Line Jägertopf**](produkt:2); ein fertiges Paket für zehn Tage ist das [**Notfallpaket 10T mit Fertiggerichten**](produkt:3).",

  top3Title: "Unsere Top 3 Notnahrung-Vorräte",
  top3Intro:
    "Drei Arten der Langzeitverpflegung: kompakte Riegel ohne Zubereitung, gefriergetrocknete Mahlzeiten zum Aufgießen und ein Komplettpaket mit Fertiggerichten für zehn Tage.",
  comparisonTitle: "Die 3 besten Notnahrung-Vorräte im Vergleich",

  criteria: [
    { key: "haltbar", label: "Haltbarkeit", weight: 0.3, description: "Mindesthaltbarkeit laut Hersteller, Verpackung, Lagerbedingungen." },
    { key: "naehrwert", label: "Energie & Abwechslung", weight: 0.25, description: "Kalorien pro Portion, Nährstoffe, Abwechslung über zehn Tage." },
    { key: "zubereitung", label: "Zubereitung", weight: 0.25, description: "Ob Wasser, Kocher oder Strom nötig sind." },
    { key: "preis", label: "Preis pro Tagesration", weight: 0.2, description: "Kosten für den Bedarf einer Person über einen Tag." },
  ],

  method:
    "Grundlage sind die Vorratsempfehlungen des BBK, Herstellerangaben zu Haltbarkeit, Energiegehalt und Zubereitung sowie Kundenerfahrungen zu Geschmack und Verpackung. Wir haben die Produkte nicht verkostet und nicht selbst getestet; die Bewertungen sind redaktionelle Einschätzungen. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Produkt wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "NRG-5 Notverpflegung, 24 × 500 g",
      brand: "NRG-5",
      variant: "Notration, vegan, laktosefrei",
      visual: { kind: "pack", tone: "forest" },
      priceTier: 2,
      ratings: { haltbar: 9.0, naehrwert: 7.0, zubereitung: 10.0, preis: 8.0 },
      bestFor: "Reserve ohne Wasser und Kocher",
      verdict:
        "Aus unserer Sicht die einfachste Reserve: kompakte Riegel, die laut Anbieter ohne Wasser, Strom und Kocher sofort essbar sind. Im Karton mit 24 Packungen liegen 12 Kilogramm Notration – genug Energie-Reserve für mehrere Personen über Tage.",
      features: [
        "Notration in 500-g-Packungen mit mehreren Riegeln, vegan und laktosefrei (Anbieterangaben)",
        "Laut Anbietern je nach Packung 15 bis 20 Jahre haltbar bei trockener, kühler Lagerung – MHD auf der Packung prüfen",
        "Sofort essbar, erzeugt laut Hersteller kaum Durst",
      ],
      pros: ["Keine Zubereitung", "Laut Anbieter sehr lange haltbar", "Platzsparend"],
      cons: ["Wenig Abwechslung", "Kein Ersatz für warme Mahlzeiten über viele Tage", "Haltbarkeitsangaben je nach Packung unterschiedlich"],
      specs: { art: "Riegel (Notration)", haltbarkeit: "15–20 Jahre (Anbieter)", zubereitung: "keine", menge: "24 × 500 g", ernaehrung: "vegan, laktosefrei" },
      asin: "B00AGUZAC2",
      query: "NRG-5 Notverpflegung 24 x 500 g",
    },
    {
      rank: 2,
      label: "Warme Mahlzeiten",
      name: "Trek'n Eat Emergency Line Jägertopf mit Rindfleisch und Nudeln",
      brand: "Trek'n Eat",
      variant: "Dose, 6 Mahlzeiten",
      visual: { kind: "canister", tone: "mint" },
      priceTier: 2,
      ratings: { haltbar: 8.5, naehrwert: 9.0, zubereitung: 6.5, preis: 7.0 },
      bestFor: "Richtige Mahlzeiten im Ernstfall",
      verdict:
        "Ein warmes Essen hebt die Stimmung in einer Krise wie kaum etwas anderes. Die gefriergetrockneten Mahlzeiten der Emergency Line sind laut Hersteller rund 15 Jahre haltbar und brauchen nur heißes Wasser.",
      features: [
        "Gefriergetrocknet, 6 Mahlzeiten pro Dose, rund 417 kcal pro 100 g (Herstellerangabe)",
        "Laut Anbieter bis zu 15 Jahre haltbar in der Dose",
        "Zubereitung mit heißem Wasser nach Packungsangabe; weitere Gerichte der Emergency Line verfügbar",
      ],
      pros: ["Sättigende warme Mahlzeit", "Laut Anbieter lange haltbar", "Mehrere Sorten kombinierbar"],
      cons: ["Braucht Wasser und Kocher", "Teurer pro Tag als Riegel", "Dose nach Öffnung zügig verbrauchen; Allergene laut Packung prüfen"],
      specs: { art: "gefriergetrocknete Mahlzeit", haltbarkeit: "bis 15 Jahre (Anbieter)", zubereitung: "heißes Wasser", menge: "6 Mahlzeiten", ernaehrung: "mit Rindfleisch" },
      asin: "B07CJMQMPL",
      query: "Trek'n Eat Emergency Line Jägertopf Rindfleisch Nudeln",
    },
    {
      rank: 3,
      label: "Komplettpaket 10 Tage",
      name: "Notfallpaket 10T mit Fertiggerichten (Fleisch)",
      brand: "Notfallpaket",
      variant: "10 Tage, eine Person",
      visual: { kind: "station", tone: "green" },
      priceTier: 3,
      ratings: { haltbar: 6.5, naehrwert: 9.0, zubereitung: 8.0, preis: 6.5 },
      bestFor: "Alles auf einmal, ohne Planen",
      verdict:
        "Ein Karton, zehn Tage: laut Anbieter Fertiggerichte, Brot, Zwieback, Käse, Wurst und Schokolade in einem Paket. Wer keine Zeit hat, einen Vorrat selbst zusammenzustellen, ist damit schnell versorgt.",
      features: [
        "Komplettpaket mit Fertiggerichten und Beilagen für zehn Tage (Anbieterangaben)",
        "Laut Anbietern meist 6 bis 10 Jahre haltbar",
        "Viele Bestandteile auch kalt essbar (Anbieterangabe)",
      ],
      pros: ["Komplett ohne Planung", "Abwechslungsreich", "Viele Teile ohne Kochen essbar"],
      cons: ["Kürzere Haltbarkeit als Riegel", "Teuer", "Sperriger Karton"],
      specs: { art: "Komplettpaket", haltbarkeit: "ca. 6–10 Jahre (Anbieter)", zubereitung: "teils keine, teils erwärmen", menge: "10 Tage", ernaehrung: "mit Fleisch" },
      asin: "B08886HF7K",
      query: "Notfallpaket 10T Fleisch Fertiggerichte",
    },
  ],

  comparison: [
    { key: "art", label: "Art" },
    { key: "haltbarkeit", label: "Haltbarkeit" },
    { key: "zubereitung", label: "Zubereitung" },
    { key: "menge", label: "Inhalt" },
    { key: "ernaehrung", label: "Ernährung" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-notnahrung-notvorrat-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Notnahrung-Vorräte 2026",
      alt: "Balkendiagramm: Bewertung von Notration, gefriergetrockneten Mahlzeiten und Notfallpaket in den Kriterien Haltbarkeit, Energie, Zubereitung und Preis",
      caption: "Unsere Bewertung je Kriterium. NRG-5 ist am einfachsten, Trek'n Eat bietet die besten Mahlzeiten.",
    },
    steps: {
      kind: "steps",
      file: "lebensmittelvorrat-10-tage-anlegen-anleitung.svg",
      title: "Vorrat für 10 Tage anlegen",
      subtitle: "Alltagsvorrat plus Langzeit-Reserve",
      alt: "Infografik: Lebensmittelvorrat anlegen – Bedarf berechnen, Alltagsvorrat aufbauen, Langzeit-Reserve ergänzen, Rotationsprinzip, Kochen ohne Strom einplanen",
      caption: "Der beste Vorrat ist der, den man ohnehin isst – Notnahrung ist die Reserve dahinter.",
      steps: [
        { title: "Bedarf berechnen", text: "Etwa 2.200 kcal pro Person und Tag; der Vorratskalkulator des BBK hilft." },
        { title: "Alltagsvorrat aufbauen", text: "Nudeln, Reis, Konserven, Haferflocken, Nüsse – was ihr ohnehin esst." },
        { title: "Langzeit-Reserve ergänzen", text: "Notrationen und gefriergetrocknete Mahlzeiten mit 10 bis 20 Jahren MHD." },
        { title: "Rotieren", text: "Neues nach hinten, Altes nach vorn – „first in, first out“." },
        { title: "Kochen ohne Strom einplanen", text: "Gaskocher draußen, Thermoskanne, und Lebensmittel, die auch kalt schmecken." },
      ],
    },
  },

  editorial: {
    title: "Notvorrat mit System: Was wirklich in den Keller gehört",
    intro:
      "Wie viel ein Haushalt nach BBK-Empfehlung lagern sollte, welche Rolle Langzeit-Notnahrung spielt und worauf es bei Haltbarkeit und Zubereitung ankommt.",
    sections: [
      {
        id: "beste-notnahrung",
        h2: "Welche Notnahrung ist die beste?",
        blocks: [
          { quick: "Als Reserve ohne Zubereitung ist die [NRG-5 Notverpflegung](produkt:1) die beste Wahl. Für warme Mahlzeiten empfehlen wir den [Trek'n Eat Jägertopf](produkt:2), für einen kompletten 10-Tage-Vorrat ohne Planung das [Notfallpaket 10T](produkt:3)." },
          { first: "Supermärkte haben nur für wenige Tage Ware im Lager. Fallen Strom, Logistik oder Kassensysteme aus, sind die Regale schnell leer. Das BBK empfiehlt deshalb jedem Haushalt einen Vorrat für zehn Tage – möglichst aus Lebensmitteln, die ohne Kühlung lagern und zur Not auch kalt gegessen werden können." },
          { p: "Den Kern des Vorrats bilden Dinge, die man im Alltag verbraucht und regelmäßig nachkauft: Nudeln, Reis, Haferflocken, Konserven, Hülsenfrüchte, Nüsse, Trockenobst. So bleibt der Vorrat frisch. Langzeit-Notnahrung ist die zweite Ebene: Sie liegt jahrelang unberührt und springt ein, wenn der Alltagsvorrat aufgebraucht ist oder man schnell mit wenig Gepäck aufbrechen muss." },
          { p: "Unsere Gesamtwahl ist die NRG-5 Notverpflegung, weil sie nach unserer Einschätzung die beiden wichtigsten Anforderungen an eine Reserve erfüllt: laut Anbieter sehr lange Haltbarkeit und keine Zubereitung. Allerdings gehen die Haltbarkeitsangaben je nach Packung und Anbieter auseinander – von 10 über 15 bis 20 Jahren. Maßgeblich ist das Datum auf der Packung." },
          { figure: "scores" },
          { callout: { title: "Ohne Wasser kein Vorrat", warn: true, text: "Gefriergetrocknete Mahlzeiten brauchen heißes Wasser, und selbst Riegel machen durstig. Plane zusätzlich zum Lebensmittelvorrat 2 Liter Wasser pro Person und Tag ein – laut BBK 20 Liter für zehn Tage." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf von Notnahrung achten?",
        blocks: [
          { quick: "Achte auf das aufgedruckte Mindesthaltbarkeitsdatum, den Energiegehalt pro Portion, die Zubereitung (mit oder ohne Wasser und Kocher), Unverträglichkeiten und den Preis pro Tagesration." },
          {
            table: {
              caption: "Arten von Notnahrung im Vergleich",
              head: ["Art", "Haltbarkeit (Anbieter)", "Zubereitung", "Geeignet für"],
              rows: [
                ["**Notration-Riegel**", "10–20 Jahre", "keine", "Reserve, Notfallrucksack"],
                ["**Gefriergetrocknete Mahlzeiten**", "bis ca. 15 Jahre", "heißes Wasser", "warme Mahlzeiten"],
                ["**Komplettpakete**", "ca. 6–10 Jahre", "teils keine", "schneller Komplettvorrat"],
                ["**Supermarkt-Vorrat**", "Monate bis Jahre", "unterschiedlich", "Alltagsvorrat mit Rotation"],
              ],
            },
          },
          { h3: "Haltbarkeit richtig lesen" },
          { p: "Das Mindesthaltbarkeitsdatum ist kein Verfallsdatum – anders als das Verbrauchsdatum („zu verbrauchen bis“) bei leicht verderblichen Lebensmitteln. Trockene Lebensmittel sind oft länger genießbar, wenn die Verpackung intakt ist und sie richtig gelagert wurden; eine Garantie gibt es dafür nicht. Für die Planung zählt trotzdem das aufgedruckte Datum. Notiere es auf einer Liste oder direkt auf dem Karton und plane den Austausch rechtzeitig." },
          { h3: "Energie und Abwechslung" },
          { p: "Ein Erwachsener braucht grob 2.000 bis 2.500 Kilokalorien am Tag, bei Kälte und körperlicher Arbeit mehr. Notrationen sind darauf ausgelegt, viel Energie auf wenig Raum zu liefern. Über zehn Tage wird ein einziges Produkt aber eintönig – kombiniere Riegel, warme Mahlzeiten und Alltagsvorrat." },
          { h3: "Besondere Bedürfnisse" },
          { p: "Denke an Babynahrung, Diäten, Allergien und Unverträglichkeiten, an Medikamente, die mit Mahlzeiten eingenommen werden, und an Haustiere. NRG-5 ist laut Anbieter vegan und laktosefrei; es gibt auch eine laut Anbieter glutenfreie Variante (NRG-5 Zero). Verlass dich bei Allergien nicht auf diese Übersicht: Zutatenliste und Allergenkennzeichnung auf jeder Packung prüfen, denn Rezepturen können sich ändern." },
        ],
      },
      {
        id: "was-passt",
        h2: "Welche Notnahrung passt zu wem?",
        blocks: [
          { quick: "Riegel für alle als Grundreserve, gefriergetrocknete Mahlzeiten für Haushalte mit Kocher, Komplettpakete für alle, die schnell und ohne Planung vorsorgen wollen." },
          {
            cards: [
              { title: "Grundreserve", text: "Ohne Zubereitung, sehr lange haltbar: NRG-5.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Warme Mahlzeiten", text: "Gefriergetrocknet mit 15 Jahren MHD: Trek'n Eat.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Schnell komplett", text: "Zehn Tage in einem Karton: Notfallpaket 10T.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Alternativen", text: "Glutenfrei, 5-Tage-Paket und Einzeldosen in der Top 5.", link: { href: "#top5-bedarf", label: "Zur Top 5" } },
              { title: "Selbst haltbar machen", text: "Vakuumierer, Mylar-Beutel und Einkochautomat.", link: { href: "/krisenvorsorge/lebensmittel-lagerung/lagerung-konservierung/", label: "Lagerung & Konservierung" } },
              { title: "Kochen ohne Strom", text: "Gaskocher, CO-Melder und Wärme.", link: { href: "/krisenvorsorge/energie-waerme/waerme-kochen-sicherheit/", label: "Wärme & Kochen" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-bedarf",
    h2: "Die 5 besten Alternativen – nach Bedarf",
    intro:
      "Glutenfrei, besonders lange haltbar, als kleineres Paket oder als einzelne Mahlzeit: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "BP ER Elite Emergency Food", for: "Riegel-Alternative", text: "Kompakte Notverpflegung, vom Anbieter mit sehr langer Haltbarkeit beworben; Kundenberichten zufolge kann das aufgedruckte MHD kürzer ausfallen – Aufdruck prüfen.", asin: "B013Q01BF8", query: "BP ER Emergency Food" },
      { name: "NRG-5 Zero glutenfrei", for: "Glutenfrei", text: "Glutenfreie Variante der NRG-5 in 500-g-Packungen, laut Anbieter mindestens 15 Jahre haltbar.", asin: "B07DX92V1X", query: "NRG-5 Zero glutenfrei" },
      { name: "Trek'n Eat Emergency Line Ungarntopf", for: "Zweite Sorte", text: "Gefriergetrockneter Ungarntopf mit Rindfleisch und Nudeln in der 600-g-Dose, laut Anbieter rund 15 Jahre haltbar.", asin: "B07CJFK1YV", query: "Trek'n Eat Emergency Line Ungarntopf" },
      { name: "Trek'n Eat Emergency Kartoffeleintopf", for: "Dritte Sorte", text: "Kartoffeleintopf mit Rind und Bohnen in der 500-g-Dose (Anbieterangabe) – für Abwechslung im Vorrat.", asin: "B08WLZ6J37", query: "Trek'n Eat Emergency Kartoffeleintopf" },
      { name: "Notfallpaket 5T mit Fertiggerichten (Fleisch)", for: "Halber Vorrat", text: "Das kleinere Paket für fünf Tage – als Ergänzung zum eigenen Alltagsvorrat.", asin: "B0888MR39L", query: "Notfallpaket 5T Fleisch" },
    ],
  },

  guide: {
    sections: [
      {
        id: "vorrat-anlegen",
        h2: "Wie legt man einen Vorrat für zehn Tage an?",
        blocks: [
          { quick: "Berechne den Bedarf, baue einen Alltagsvorrat aus haltbaren Lebensmitteln auf, ergänze eine Langzeit-Reserve und rotiere regelmäßig. Lagere alles kühl, trocken, dunkel und geschützt vor Schädlingen." },
          { p: "Das BBK stellt einen Vorratskalkulator bereit, der für jede Haushaltsgröße die Mengen je Lebensmittelgruppe ausrechnet: Getreide und Kartoffeln, Gemüse und Hülsenfrüchte, Obst und Nüsse, Milchprodukte, Fisch, Fleisch und Eier sowie Fette. Wer sich daran orientiert und Langzeit-Notnahrung als Puffer ergänzt, ist gut vorbereitet." },
          { figure: "steps" },
          { h3: "Richtig lagern" },
          {
            list: [
              "**Kühl, trocken, dunkel:** Wärme und Feuchtigkeit verkürzen die Haltbarkeit deutlich.",
              "**Vor Schädlingen schützen:** Trockenwaren in dichten Behältern oder Mylar-Beuteln lagern.",
              "**Nicht direkt auf dem Boden:** Regale schützen bei Wasserschäden im Keller.",
              "**Liste führen:** Produkt, Menge, Mindesthaltbarkeit – und regelmäßig prüfen.",
              "**Dosenöffner nicht vergessen** – ein manueller Öffner gehört zum Vorrat.",
            ],
          },
          { callout: { title: "Lebensmittelsicherheit", warn: true, text: "Beschädigte, aufgeblähte oder undichte Dosen und Beutel nicht verzehren. Geöffnete Packungen nach Herstellerangabe lagern und zügig verbrauchen, zubereiten nur mit Wasser in Trinkwasserqualität. Allergene und Zutaten auf jeder Packung prüfen. Für Säuglinge, Schwangere, Kranke und Menschen mit besonderer Ernährung ärztlich oder fachlich abklären, was in den Vorrat gehört – diese Übersicht ersetzt keine Ernährungs- oder ärztliche Beratung." } },
          {
            facts: [
              { value: "10 Tage", label: "Vorrat, den das BBK empfiehlt" },
              { value: "≈ 2.200 kcal", label: "Richtwert pro Erwachsenem und Tag" },
              { value: "15–20 Jahre", label: "Haltbarkeit der NRG-5-Notration laut Anbietern" },
            ],
          },
          { h3: "Im Ernstfall" },
          { p: "Verbrauche zuerst, was im Kühlschrank und in der Tiefkühltruhe verderben würde, dann den Alltagsvorrat und zuletzt die Langzeit-Reserve. Ein voller, geschlossener Gefrierschrank hält die Kälte je nach Gerät oft einen Tag oder länger (siehe „Lagerzeit bei Störung“ in der Bedienungsanleitung) – öffne ihn so selten wie möglich. Aufgetaute Lebensmittel zügig verbrauchen und im Zweifel entsorgen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Wie viel Notvorrat sollte man haben?", a: "Das BBK empfiehlt einen Lebensmittelvorrat für zehn Tage und 2 Liter Wasser pro Person und Tag. Der BBK-Vorratskalkulator rechnet die Mengen für deinen Haushalt aus." },
    { q: "Welche Notnahrung ist am längsten haltbar?", a: "Notration-Riegel wie NRG-5 werden mit 15 bis 20 Jahren angeboten, gefriergetrocknete Mahlzeiten wie Trek'n Eat Emergency Line mit rund 15 Jahren. Maßgeblich ist das aufgedruckte Mindesthaltbarkeitsdatum." },
    { q: "Kann man Notnahrung nach dem MHD noch essen?", a: "Trockene, gut verpackte Lebensmittel sind oft länger genießbar. Prüfe Verpackung, Geruch, Aussehen und Geschmack. Ist die Verpackung beschädigt oder aufgebläht, nicht mehr essen – im Zweifel lieber entsorgen." },
    { q: "Braucht man für Notnahrung Wasser?", a: "Riegel sind ohne Zubereitung essbar, gefriergetrocknete Mahlzeiten brauchen heißes Wasser. Plane in jedem Fall Trinkwasser ein – laut BBK 2 Liter pro Person und Tag." },
    { q: "Ist Notnahrung für Kinder geeignet?", a: "Notrationen und Fertiggerichte sind für Erwachsene gedacht. Für Säuglinge und Kleinkinder gehört passende Babynahrung in den Vorrat; im Zweifel die Kinderarztpraxis fragen. Bei Allergien und Unverträglichkeiten die Zutatenliste und Allergenkennzeichnung prüfen." },
    { q: "Lohnen sich Notfallpakete?", a: "Sie sind praktisch, wenn man schnell und ohne Planung vorsorgen will, aber teurer als ein selbst zusammengestellter Vorrat und oft kürzer haltbar als Riegel. Kombiniert mit einem Alltagsvorrat sind sie eine gute Ergänzung." },
  ],

  sources: [
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
    { label: "Feuerwehr Heilbronn: Essen und Trinken bevorraten (PDF)", url: "https://feuerwehr.heilbronn.de/fileadmin/daten/feuerwehr/intern/berufsfeuerwehr/dateien/Flyer_Essen_u._Trinken_bevorraten.pdf" },
    { label: "infranken.de: Notfall-Vorrat – offizielle Checkliste des Bundesamts", url: "https://www.infranken.de/ratgeber/verbraucher/notfall-vorraete-diese-offizielle-checkliste-zeigt-was-du-brauchst-art-5310710" },
  ],

  related: [
    { slug: "lagerung-konservierung", text: "Lebensmittel selbst haltbar machen." },
    { slug: "wasserspeicher", text: "20 Liter Wasser pro Person lagern." },
    { slug: "waerme-kochen-sicherheit", text: "Kochen ohne Strom – sicher." },
    { group: "lebensmittel-lagerung", text: "Alle Ratgeber zu Lebensmitteln & Lagerung." },
  ],
};
