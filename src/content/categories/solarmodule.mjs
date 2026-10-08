// Kategorie: Solarmodule für Powerstations (Krisenvorsorge › Energie & Wärme)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "solarmodule",
  area: "krisenvorsorge",
  group: "energie-waerme",
  navLabel: "Solarmodule",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Solarmodule für Powerstations 2026",
  metaDescription:
    "Die 3 besten faltbaren Solarmodule für Powerstations 2026: EcoFlow 220 W, Anker SOLIX PS200 und PS400 – plus feste Module, Anschluss und Winterertrag.",

  eyebrow: "Krisenvorsorge · Energie & Wärme",
  h1: "Die 3 besten Solarmodule für Powerstations 2026",
  lead:
    "Eine Powerstation ist irgendwann leer – mit Solarmodulen lädt sie sich im Blackout selbst wieder auf. Faltbare Panels lassen sich in Minuten auf Balkon, Terrasse oder Garten aufstellen, feste Module bleiben dauerhaft montiert. Diese drei sind nach unserer Einschätzung die beste Wahl.",
  answer:
    "Unsere beste Gesamtwahl ist das [**EcoFlow 220 W bifaziale Solarpanel**](produkt:1): laut Hersteller beidseitig aktiv, IP68, mit Ständer und XT60-Kabel direkt für Powerstations. Leichter und laut Anker mit 5 Jahren Garantie ist das [**Anker SOLIX PS200**](produkt:2); die meiste Leistung pro Aufbau liefert das [**Anker SOLIX PS400 Gen 2**](produkt:3) mit 400 W.",

  top3Title: "Unsere Top 3 Solarmodule für den Notfall",
  top3Intro:
    "Drei faltbare, bifaziale Module in drei Leistungsklassen. Alle drei lassen sich ohne Montage aufstellen und – passende Stecker und Spannung vorausgesetzt – an gängige Powerstations anschließen.",
  comparisonTitle: "Die 3 besten Solarmodule im Vergleich",

  criteria: [
    { key: "leistung", label: "Leistung", weight: 0.3, description: "Nennleistung, Wirkungsgrad, bifaziale Zusatzleistung, Ertrag bei diffusem Licht." },
    { key: "mobil", label: "Mobilität", weight: 0.2, description: "Gewicht, Packmaß, Aufbauzeit und Ständer." },
    { key: "robust", label: "Robustheit", weight: 0.25, description: "Schutzart, Material, Garantie und Kundenberichte zur Haltbarkeit." },
    { key: "preis", label: "Preis pro Watt", weight: 0.25, description: "Anschaffung im Verhältnis zur Nennleistung." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Nennleistung, Wirkungsgrad, Schutzart und Gewicht, Kundenberichte zu Haltbarkeit und realem Ertrag sowie Kompatibilitätsangaben der Powerstation-Hersteller. Unabhängige Tests faltbarer Solarmodule haben wir nicht gefunden; eigene Tests führen wir nicht durch, die Bewertungen sind redaktionelle Einschätzungen. Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind. Jedes Modul wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "EcoFlow 220 W bifaziales Solarpanel",
      brand: "EcoFlow",
      variant: "faltbar, IP68",
      visual: { kind: "panel", tone: "forest" },
      priceTier: 2,
      ratings: { leistung: 8.5, mobil: 8.0, robust: 8.5, preis: 7.0 },
      bestFor: "1-kWh-Powerstations",
      verdict:
        "Aus unserer Sicht das ausgewogenste faltbare Modul: Laut Hersteller nehmen Vorder- und Rückseite Licht auf, der integrierte Ständer stellt den Winkel ein, und das XT60-Kabel passt ohne Adapter an EcoFlow-Powerstations.",
      features: [
        "220 W auf der Vorderseite, bifazial; laut EcoFlow bis zu 243 W unter Testbedingungen",
        "Verstellbarer Ständer mit 30–60° und Winkelhilfe, Schutzart IP68 (Herstellerangabe)",
        "Integriertes XT60-Kabel, laut Anbieter mit allen EcoFlow-Powerstations kompatibel",
      ],
      pros: ["Beidseitig aktiv", "Ständer und Winkelhilfe integriert", "Laut Hersteller wasser- und staubdicht (IP68)"],
      cons: ["Teurer als No-Name-Module", "Gewichtsangaben schwanken je nach Listing", "Für andere Marken ggf. Adapter nötig"],
      specs: { leistung: "220 W (bifazial)", gewicht: "ca. 5–10 kg (Angaben schwanken)", schutz: "IP68", anschluss: "XT60", garantie: "2 Jahre (Listing)" },
      asin: "B0B12CKM3C",
      query: "EcoFlow 220W bifaziales Solarpanel",
    },
    {
      rank: 2,
      label: "Am leichtesten",
      name: "Anker SOLIX PS200",
      brand: "Anker",
      variant: "200 W bifazial, faltbar",
      visual: { kind: "panel", tone: "mint" },
      priceTier: 2,
      ratings: { leistung: 7.5, mobil: 9.0, robust: 9.0, preis: 6.5 },
      bestFor: "Balkon, Camping & Notfallrucksack-Auto",
      verdict:
        "Laut Anker rund 5 Kilogramm inklusive Ständer: Das PS200 lässt sich bequem tragen und schnell aufstellen. Anker gibt 5 Jahre Garantie und 10 Jahre Lebensdauer an.",
      features: [
        "200 W, bifazial, laut Anker über 25 % Wirkungsgrad",
        "Rund 5 kg inklusive Ständer, Rahmen aus verstärktem Aluminium (Herstellerangabe)",
        "Schutzart IP68, 5 Jahre Garantie (Herstellerangabe)",
      ],
      pros: ["Leicht und kompakt", "Lange Herstellergarantie", "Laut Anker hoher Wirkungsgrad"],
      cons: ["Weniger Leistung als 220–400-W-Module", "Preis schwankt stark zwischen Angeboten"],
      specs: { leistung: "200 W (bifazial)", gewicht: "ca. 5 kg inkl. Ständer", schutz: "IP68", anschluss: "laut Anker für SOLIX-Powerstations", garantie: "5 Jahre" },
      asin: "B0GFWNB2V7",
      query: "Anker SOLIX PS200 bifazial Solarpanel",
    },
    {
      rank: 3,
      label: "Meiste Leistung",
      name: "Anker SOLIX PS400 Gen 2",
      brand: "Anker",
      variant: "400 W bifazial, faltbar",
      visual: { kind: "panel", tone: "green" },
      priceTier: 3,
      ratings: { leistung: 9.5, mobil: 6.5, robust: 8.5, preis: 6.5 },
      bestFor: "Große Powerstations, schnelles Nachladen",
      verdict:
        "Doppelte Nennleistung in einem Aufbau: Das PS400 Gen 2 kann eine 1-kWh-Powerstation an einem guten Sommertag in wenigen Stunden laden – der reale Ertrag hängt von Wetter und Ausrichtung ab. Anker empfiehlt es ausdrücklich für die SOLIX C1000.",
      features: [
        "400 W, bifazial, laut Anker über 25 % Wirkungsgrad und 10 Jahre Lebensdauer",
        "Laut Anbieter unter 10 kg – deutlich leichter als das ältere, einseitige PS400",
        "Passend für Powerstations mit großem Solareingang (z. B. SOLIX C1000, DELTA 3 Plus mit Adapter; Spannungsbereich vorab prüfen)",
      ],
      pros: ["Höchste Nennleistung in unserer Top 3", "Bifazial", "Gutes Verhältnis von Preis zu Watt"],
      cons: ["Groß aufgeklappt – braucht viel Platz", "Schwerer als 200-W-Module", "Nicht mit dem älteren PS400 (21 kg) verwechseln"],
      specs: { leistung: "400 W (bifazial)", gewicht: "unter 10 kg (Anbieter)", schutz: "laut Anker wetterfest", anschluss: "laut Anker für SOLIX-Powerstations", garantie: "Herstellerangabe prüfen" },
      asin: "B0GYPKWFFF",
      query: "Anker SOLIX PS400 Gen 2 bifazial",
    },
  ],

  comparison: [
    { key: "leistung", label: "Nennleistung" },
    { key: "gewicht", label: "Gewicht" },
    { key: "schutz", label: "Schutzart" },
    { key: "anschluss", label: "Anschluss" },
    { key: "garantie", label: "Garantie" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-solarmodule-powerstation-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Solarmodule für Powerstations 2026",
      alt: "Balkendiagramm: Bewertung der drei besten faltbaren Solarmodule 2026 in den Kriterien Leistung, Mobilität, Robustheit und Preis pro Watt",
      caption: "Unsere Bewertung je Kriterium. EcoFlow ist am ausgewogensten, das PS400 liefert am meisten Leistung.",
    },
    steps: {
      kind: "steps",
      file: "solarmodul-powerstation-richtig-aufstellen-anleitung.svg",
      title: "Solarmodul richtig aufstellen",
      subtitle: "So holst du im Notfall das Maximum heraus",
      alt: "Infografik: Solarmodul aufstellen – Kompatibilität prüfen, Richtung Süden, Winkel einstellen, Schatten vermeiden, Kabel sichern, Ertrag kontrollieren",
      caption: "Schon ein schmaler Schatten auf einer Zellreihe kann den Ertrag deutlich senken.",
      steps: [
        { title: "Kompatibilität prüfen", text: "Stecker (XT60, MC4, DC 8 mm) und Spannungsbereich des Solareingangs der Powerstation." },
        { title: "Nach Süden ausrichten", text: "Im Tagesverlauf nachdrehen bringt spürbar mehr, wenn du zu Hause bist." },
        { title: "Winkel einstellen", text: "Im Sommer flacher, im Winter steiler – der Ständer hilft dabei." },
        { title: "Schatten vermeiden", text: "Geländer, Äste und Kabel dürfen keine Zellen verdecken." },
        { title: "Sichern und kontrollieren", text: "Gegen Wind beschweren, Kabel stolperfrei verlegen, Ertrag am Display prüfen." },
      ],
    },
  },

  editorial: {
    title: "Strom aus der Sonne: Solarmodule für die Notstromversorgung",
    intro:
      "Faltbar oder fest, bifazial oder einseitig: welches Modul zu welcher Powerstation passt und was es im Winter wirklich liefert.",
    sections: [
      {
        id: "bestes-solarmodul",
        h2: "Welches Solarmodul ist für eine Powerstation am besten?",
        blocks: [
          { quick: "Für die meisten ist das [EcoFlow 220 W bifazial](produkt:1) die beste Wahl: IP68, Ständer, XT60. Am leichtesten ist das [Anker SOLIX PS200](produkt:2), am leistungsstärksten das [Anker SOLIX PS400 Gen 2](produkt:3)." },
          { first: "Eine Powerstation speichert Strom, sie erzeugt ihn nicht. Wer einen Stromausfall über mehrere Tage überbrücken will, braucht deshalb einen Weg zum Nachladen – und Solar ist der naheliegendste Weg, der ohne Kraftstoff, Lärm und Abgase auskommt. Faltbare Module sind dafür ideal: Sie liegen im Schrank, bis man sie braucht, und stehen in wenigen Minuten." },
          { p: "Bifaziale Module nehmen auch auf der Rückseite Licht auf, das vom Boden oder einer hellen Wand reflektiert wird. EcoFlow gibt für sein 220-W-Modul bis zu 243 Watt unter Testbedingungen an. In der Praxis hängt der Zusatzertrag stark vom Untergrund ab – heller Kies oder Schnee bringen mehr als dunkler Rasen." },
          { p: "Unsere Gesamtwahl ist das EcoFlow-Modul, weil es nach unserer Einschätzung Leistung, Robustheit und einfache Handhabung am besten kombiniert. Für eine 1-kWh-Powerstation ist ein 200- bis 220-W-Modul ein guter Start, zwei Module oder ein 400-W-Modul laden deutlich schneller. Feste Module sind günstiger pro Watt, brauchen aber eine Halterung und passende Kabel." },
          { figure: "scores" },
          { callout: { title: "Realistisch rechnen", text: "Die Nennleistung gilt unter Laborbedingungen. Im Alltag liefern Module meist deutlich weniger – Kundenberichten zufolge bei 100-W-Modulen etwa 75 bis 86 W in voller Sonne. Im Winter, bei Bewölkung und flachem Sonnenstand ist es oft nur ein Bruchteil davon." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind Nennleistung, Gewicht, Schutzart, der passende Stecker und vor allem der Spannungsbereich des Solareingangs der Powerstation. Mehrere Module müssen richtig in Reihe oder parallel geschaltet werden." },
          {
            table: {
              caption: "Faltbare und feste Solarmodule im Vergleich",
              head: ["", "Faltbar", "Fest (mit Rahmen)"],
              rows: [
                ["**Aufbau**", "In Minuten, mit Ständer", "Halterung, Montage nötig"],
                ["**Lagerung**", "Kompakt im Schrank", "Dauerhaft draußen"],
                ["**Preis pro Watt**", "Höher", "Niedriger"],
                ["**Haltbarkeit**", "Gelenke und Stoff empfindlicher", "In der Regel robuster, Glas und Alurahmen"],
                ["**Anschluss**", "Oft XT60 oder Herstellerstecker", "Meist MC4, Adapter nötig"],
              ],
            },
          },
          { h3: "Spannung und Stecker" },
          { p: "Jede Powerstation hat einen erlaubten Spannungsbereich am Solareingang und eine maximale Eingangsleistung. Die Leerlaufspannung der Module – bei Reihenschaltung addiert – darf diesen Bereich nicht überschreiten, sonst drohen Schäden. Prüfe im Datenblatt beider Geräte die Werte und nutze die vom Hersteller empfohlenen Kabel. Stecker nur trocken und möglichst ohne Last verbinden oder trennen; beschädigte Kabel nicht verwenden. Feste Module haben meist MC4-Stecker; für Powerstations mit XT60-Eingang gibt es Adapterkabel." },
          { h3: "Robustheit" },
          { p: "Faltbare Module sind mobil, aber empfindlicher als gerahmte Glasmodule. Kundenberichte erwähnen bei manchen faltbaren Modulen Risse in der Beschichtung oder defekte Kabel. Achte auf IP67 oder IP68, verstärkte Kanten und eine Garantie von mehreren Jahren – Anker gibt beim PS200 laut eigener Angabe fünf Jahre." },
          { h3: "Feste Module als Dauerlösung" },
          { p: "Wer Platz auf Garage, Gartenhaus oder Flachdach hat, kann ein festes Modul dauerhaft montieren und über ein Kabel zur Powerstation führen. Das ist günstiger pro Watt und immer einsatzbereit. Für mehr als ein, zwei Module lohnt sich der Blick auf ein Balkonkraftwerk mit Speicher." },
          { callout: { title: "Montage, Statik und Hausnetz", warn: true, text: "Feste Module sind schwer und bieten Wind viel Angriffsfläche. Halterung, Dachlast und Absturzsicherung sorgfältig planen; Arbeiten auf dem Dach oder in der Höhe besser Fachleuten überlassen. Je nach Bundesland, Gemeinde und Gebäude können Bauordnungsrecht, Denkmalschutz, Mietvertrag oder Eigentümergemeinschaft betroffen sein – vorab klären. Solarstrom nie selbst ins Hausnetz einspeisen: Netzgekoppelte Anlagen brauchen zugelassene Wechselrichter, die Anmeldung im Marktstammdatenregister und, über ein Balkonkraftwerk hinaus, eine Elektrofachkraft." } },
        ],
      },
      {
        id: "welches-passt",
        h2: "Welches Modul passt zu wem?",
        blocks: [
          { quick: "Für eine 1-kWh-Powerstation reicht ein 200- bis 220-W-Modul zum Nachladen über den Tag. Wer schnell laden oder eine größere Powerstation betreiben will, nimmt 400 W oder zwei Module." },
          {
            cards: [
              { title: "EcoFlow-Powerstation", text: "Direkt per XT60, beidseitig aktiv: EcoFlow 220 W.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Tragen & Camping", text: "Leicht mit langer Garantie: Anker SOLIX PS200.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Schnell nachladen", text: "400 W in einem Aufbau: Anker SOLIX PS400 Gen 2.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Fest montiert", text: "Gerahmte Module und Zubehör in der Top 5.", link: { href: "#top5-bauart", label: "Zur Top 5" } },
              { title: "Der Speicher dazu", text: "Powerstations mit 1 bis 4 kWh.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
              { title: "Dauerhaft Solar", text: "Balkonkraftwerk mit Speicher und Notstromsteckdose.", link: { href: "/krisenvorsorge/energie-waerme/balkonkraftwerk-speicher/", label: "Balkonkraftwerk" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-bauart",
    h2: "Die 5 besten Alternativen – feste Module, kleine Panels, Zubehör",
    intro:
      "Ein festes Modul für das Dach, kleine Panels für Handy und Powerbank und das passende Kabel: Diese fünf Produkte ergänzen die Top 3.",
    items: [
      { name: "Offgridtec 200 W Mono Solarpanel Black Frame V2", for: "Festes Modul", text: "Starres Glasmodul mit Rahmen und MC4-Steckern, laut Anbieter über 22 % Wirkungsgrad – für die dauerhafte Montage auf Garage oder Gartenhaus.", asin: "B0CLY3HSRJ", query: "Offgridtec 200W Mono Solarpanel Black Frame" },
      { name: "Jackery SolarSaga 100", for: "Für Jackery-Powerstations", text: "Faltbares 100-W-Modul mit DC-8-mm-Stecker sowie USB-A und USB-C für Handys direkt am Panel (Herstellerangabe).", asin: "B0DQW43YGR", query: "Jackery SolarSaga 100" },
      { name: "EcoFlow 110 W faltbar", for: "Kleine Powerstations", text: "Leichtes 110-W-Modul mit Tragetasche und laut Hersteller IP68 – passend für die EcoFlow RIVER 3.", asin: "B0DPX15G6R", query: "EcoFlow 110W faltbares Solarpanel" },
      { name: "EcoFlow 45 W faltbar", for: "Rucksack & Powerbank", text: "Sehr kompaktes Panel für unterwegs, kleine Powerstations und Powerbanks.", asin: "B0DPTRD689", query: "EcoFlow 45W faltbares Solarpanel" },
      { name: "EcoFlow MC4-Verlängerungskabel 3 m", for: "Mehr Abstand zur Sonne", text: "Verlängert das Solarkabel um 3 m – damit das Modul in der Sonne und die Powerstation im Schatten stehen kann.", asin: "B096RPBTZD", query: "EcoFlow MC4 Verlängerungskabel 3 m" },
    ],
  },

  guide: {
    sections: [
      {
        id: "ertrag-und-winter",
        h2: "Wie viel Strom liefert ein Solarmodul im Notfall?",
        blocks: [
          { quick: "Im Sommer kann ein 200-W-Modul an einem sonnigen Tag grob geschätzt rund 0,6 bis 1 kWh liefern, im Winter oft nur einen kleinen Bruchteil davon. Plane für die kalte Jahreszeit mehr Modulfläche ein und spare Strom." },
          { p: "Der Ertrag hängt von Sonnenstunden, Sonnenstand, Ausrichtung und Temperatur ab. Kühle, klare Tage sind für Solarzellen ideal, kurze Wintertage mit tiefstehender Sonne und Bewölkung dagegen schwach. Wer im Winter vorsorgen will, sollte steilere Winkel wählen, Schnee abräumen und lieber zwei Module als eines einplanen." },
          { figure: "steps" },
          { h3: "Praxis im Blackout" },
          {
            list: [
              "**Morgens aufstellen, abends einräumen:** So bleiben Modul und Kabel trocken und vor Diebstahl geschützt.",
              "**Gegen Wind sichern:** Aufgestellte Module können umkippen oder vom Balkon wehen – beschweren oder festbinden, besonders in der Höhe.",
              "**Tagsüber verbrauchen:** Geräte bevorzugt laufen lassen, während die Sonne scheint – das schont den Akku.",
              "**Ertrag beobachten:** Die meisten Powerstations zeigen die Eingangsleistung an. Ein Nachdrehen alle paar Stunden lohnt sich.",
              "**Nicht hinter Glas:** Fensterglas schluckt einen Teil des Lichts, besonders bei beschichteten Scheiben.",
            ],
          },
          {
            facts: [
              { value: "30–60°", label: "Verstellbereich des EcoFlow-Ständers (Herstellerangabe)" },
              { value: "IP68", label: "Schutzart von EcoFlow 220 W und Anker PS200 laut Hersteller" },
              { value: "5 Jahre", label: "Herstellergarantie auf das Anker SOLIX PS200 laut Anker" },
            ],
          },
          { h3: "Pflege und Lagerung" },
          { p: "Module trocken und flach lagern, nicht knicken und keine schweren Gegenstände darauf stellen. Staub und Pollen mit Wasser und einem weichen Tuch entfernen. Stecker vor Feuchtigkeit schützen und vor dem Verbinden auf Korrosion prüfen." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welches Solarmodul passt zu meiner Powerstation?", a: "Entscheidend sind Stecker, Spannungsbereich und maximale Eingangsleistung des Solareingangs. Module derselben Marke passen meist direkt; bei anderen Marken helfen Adapterkabel, wenn die Spannung im erlaubten Bereich liegt. Unsere Gesamtwahl ist das EcoFlow 220 W bifazial." },
    { q: "Wie lange dauert es, eine Powerstation mit Solar zu laden?", a: "Grob: Kapazität geteilt durch die reale Modulleistung. Eine 1-kWh-Powerstation braucht mit einem 200-W-Modul bei realen 150 W rund 7 Sonnenstunden, mit 400 W etwa halb so lange. Im Winter dauert es deutlich länger." },
    { q: "Was bedeutet bifazial?", a: "Bifaziale Module nehmen Licht auf Vorder- und Rückseite auf. Die Rückseite nutzt reflektiertes Licht vom Boden; der Mehrertrag hängt stark vom Untergrund ab." },
    { q: "Funktionieren Solarmodule im Winter?", a: "Ja, aber mit deutlich weniger Ertrag. Kurze Tage, tiefer Sonnenstand und Wolken senken die Leistung stark. Steilere Ausrichtung und mehr Modulfläche helfen." },
    { q: "Faltbares oder festes Solarmodul?", a: "Faltbare Module sind mobil und schnell aufgebaut, aber teurer pro Watt und empfindlicher. Feste Module sind günstiger und robuster, brauchen aber eine Halterung und eignen sich für die dauerhafte Montage." },
    { q: "Kann ich zwei Solarmodule zusammenschließen?", a: "Ja, in Reihe oder parallel – je nach Spannungsbereich der Powerstation. Bei Reihenschaltung addiert sich die Spannung, bei Parallelschaltung der Strom. Beide Werte müssen innerhalb der Grenzen des Solareingangs bleiben." },
  ],

  sources: [
    { label: "Utopia: Stromausfall – taugt ein Balkonkraftwerk als Notstromlösung?", url: "https://utopia.de/ratgeber/stromausfall-taugt-ein-balkonkraftwerk-als-notstromloesung-v3_893950/" },
    { label: "Stadt Karlsbad: Vorsorge für den Stromausfall (PDF)", url: "https://www.karlsbad.de/resources/ecics_8051_uyys2n.pdf" },
    { label: "BBK: Ratgeber „Vorsorgen für Krisen und Katastrophen“ (PDF)", url: "https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/feuerwehr-rettungsdienst-und-bevoelkerungsschutz/downloads/bbk-vorsorgen-fuer-krisen-und-katastrophen.pdf" },
  ],

  related: [
    { slug: "powerstations", text: "Der passende Akku: Powerstations mit 1 bis 4 kWh." },
    { slug: "balkonkraftwerk-speicher", text: "Dauerhafte Solaranlage mit Speicher." },
    { slug: "handys-powerbanks", text: "Große Powerbanks zum Laden per Solar." },
    { group: "energie-waerme", text: "Alle Ratgeber zu Energie & Wärme." },
  ],
};
