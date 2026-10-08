// Kategorie: Balkonkraftwerk mit Speicher (Krisenvorsorge › Energie & Wärme)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "balkonkraftwerk-speicher",
  area: "krisenvorsorge",
  group: "energie-waerme",
  navLabel: "Balkonkraftwerk mit Speicher",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Die 3 besten Balkonkraftwerk-Speicher mit Notstrom 2026",
  metaDescription:
    "Die 3 besten Speicher für Balkonkraftwerke mit Notstromsteckdose 2026: Anker Solarbank 3 Pro, EcoFlow STREAM Ultra, Zendure SolarFlow 800 Pro – plus Rechtslage.",

  eyebrow: "Krisenvorsorge · Energie & Wärme",
  h1: "Die 3 besten Balkonkraftwerk-Speicher mit Notstrom 2026",
  lead:
    "Ein Balkonkraftwerk mit Speicher spart im Alltag Stromkosten – und kann bei einem Stromausfall über eine eigene Steckdose Router, Licht und Kleingeräte versorgen. Wichtig: Die normale Einspeisung ins Hausnetz schaltet bei einem Blackout ab. Diese drei Speicher haben laut Hersteller eine Notstromsteckdose.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Anker SOLIX Solarbank 3 E2700 Pro**](produkt:1): laut Hersteller 2,7 kWh Speicher, erweiterbar auf 16 kWh, und eine 1.200-W-Off-Grid-Steckdose für den Notfall. Das beste Preis-Leistungs-Verhältnis bietet der [**EcoFlow STREAM Ultra**](produkt:2) mit 1,92 kWh und Notstromsteckdose; eine solide Alternative ist der [**Zendure SolarFlow 800 Pro**](produkt:3) mit 1.000 W Off-Grid-Ausgang.",

  top3Title: "Unsere Top 3 Balkonkraftwerk-Speicher mit Notstrom",
  top3Intro:
    "Alle drei sind All-in-One-Speicher mit integriertem Wechselrichter, LiFePO4-Akku und einer Steckdose, die auch ohne Netz Strom liefert. Solarmodule und Halterungen sind je nach Angebot dabei oder separat erhältlich.",
  comparisonTitle: "Die 3 besten Balkonkraftwerk-Speicher im Vergleich",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 700 €" },
    2: { symbol: "€€", label: "ca. 700–1.100 €" },
    3: { symbol: "€€€", label: "über 1.100 €" },
  },

  criteria: [
    { key: "notstrom", label: "Notstromfunktion", weight: 0.3, description: "Leistung der Off-Grid-Steckdose, Laden per Solar während des Ausfalls, Bedienung im Notfall." },
    { key: "speicher", label: "Speicher", weight: 0.25, description: "Nutzbare Kapazität, Erweiterbarkeit, Zyklen und Garantie." },
    { key: "alltag", label: "Alltag & Ersparnis", weight: 0.25, description: "Solareingang, MPPT-Tracker, Steuerung nach Verbrauch (Smart Meter), App." },
    { key: "preis", label: "Preis-Leistung", weight: 0.2, description: "Preis pro Kilowattstunde Speicher und Ausstattung." },
  ],

  method:
    "Grundlage sind Herstellerangaben zu Kapazität, Solareingang und Off-Grid-Leistung, Herstellervergleiche und Ratgeber zum Notstrombetrieb von Balkonkraftwerken sowie die seit 2024 geltenden Regeln aus dem Solarpaket I. Wir haben die Geräte nicht selbst getestet; technische Daten sind Herstellerangaben. Wir empfehlen ausschließlich Geräte, die bei Amazon erhältlich sind. Jedes Gerät wird in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Anker SOLIX Solarbank 3 E2700 Pro",
      brand: "Anker",
      variant: "2,688 kWh, 1.200 W bidirektional",
      visual: { kind: "station", tone: "forest" },
      priceTier: 2,
      ratings: { notstrom: 8.5, speicher: 9.5, alltag: 9.0, preis: 7.0 },
      bestFor: "Großer Speicher mit Notstrom-Reserve",
      verdict:
        "Nach unserer Einschätzung der vielseitigste Speicher: laut Hersteller 2,7 kWh, erweiterbar auf über 16 kWh, vier MPPT-Eingänge und eine 1.200-W-Off-Grid-Steckdose. Aus unserer Sicht bietet er die größte Reserve für längere Stromausfälle, kostet dafür aber am meisten.",
      features: [
        "2,688 kWh LiFePO4, mit bis zu fünf Erweiterungsakkus BP2700 auf 16,128 kWh ausbaubar (Herstellerangabe)",
        "Bidirektionaler Wechselrichter mit 1.200 W, vier MPPT-Eingänge (eine Einheit bis 1.800 W PV, Herstellerangabe); die Einspeisung ins Hausnetz muss auf das zulässige Maß begrenzt sein",
        "1.200-W-Off-Grid-Steckdose für Router, Laptop, Licht; laut Anker nicht für Geräte mit hohem Anlaufstrom wie Kühlschränke",
      ],
      pros: ["Größte Kapazität und Erweiterbarkeit im Vergleich", "Notstromsteckdose integriert", "Laut Anker 10 Jahre Garantie"],
      cons: ["Teuerster Speicher im Vergleich", "Kühlschrank an der Off-Grid-Steckdose laut Anker nicht unterstützt", "Solarmodul-Verlängerungskabel separat"],
      specs: { kapazitaet: "2,688 kWh (bis 16,1 kWh)", notstrom: "1.200 W Off-Grid-Steckdose", pv: "4 MPPT, bis 1.800 W je Einheit", erweiterbar: "bis 5 × BP2700", test: "–" },
      asin: "B0FF4SLXHN",
      query: "Anker SOLIX Solarbank 3 E2700 Pro",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "EcoFlow STREAM Ultra",
      brand: "EcoFlow",
      variant: "1,92 kWh, 4 MPPT",
      visual: { kind: "station", tone: "mint" },
      priceTier: 1,
      ratings: { notstrom: 8.5, speicher: 8.0, alltag: 8.5, preis: 8.5 },
      bestFor: "Einstieg mit Notstromsteckdose",
      verdict:
        "Viel Ausstattung für vergleichsweise wenig Geld: laut Anbieter 1,92 kWh LiFePO4, vier MPPT-Eingänge für bis zu 2.000 W Solar und eine integrierte Steckdose, die laut Anbieter im Notfall bis zu 1.200 W liefert.",
      features: [
        "1,92 kWh LiFePO4, erweiterbar auf 11,52 kWh; laut Anbieter 6.000 Ladezyklen",
        "4 MPPT mit 2.000 W Solar plus 800 W über angeschlossene Mikrowechselrichter (Herstellerangabe)",
        "Integrierte Notstromsteckdose mit bis zu 1.200 W; Schutzart IP65, Betrieb bis −20 °C (Herstellerangabe)",
      ],
      pros: ["Günstig pro kWh", "Hoher Solareingang", "Auch mit vorhandenen Balkonkraftwerken nutzbar"],
      cons: ["Kleinere Grundkapazität", "Umschaltzeit im Stromausfall nicht angegeben", "Modellvarianten (Ultra, Ultra X, Pro) leicht verwechselbar"],
      specs: { kapazitaet: "1,92 kWh (bis 11,52 kWh)", notstrom: "bis 1.200 W Steckdose", pv: "4 MPPT, 2.000 W", erweiterbar: "ja", test: "–" },
      asin: "B0F5B93DTV",
      query: "EcoFlow STREAM Ultra Balkonkraftwerk Speicher",
    },
    {
      rank: 3,
      label: "Solide Alternative",
      name: "Zendure SolarFlow 800 Pro",
      brand: "Zendure",
      variant: "1,92 kWh, 2.640 W Solar",
      visual: { kind: "station", tone: "green" },
      priceTier: 2,
      ratings: { notstrom: 8.0, speicher: 8.0, alltag: 8.5, preis: 8.0 },
      bestFor: "Viel Solarfläche, Laden im Winter",
      verdict:
        "Laut Hersteller großer Solareingang mit 2.640 W, KI-Energiemanagement und ein Off-Grid-Ausgang mit 1.000 W. Bei wenig Sonne kann er im Alltag auch aus dem Netz nachladen – im Blackout hilft das allerdings nicht.",
      features: [
        "1,92 kWh LiFePO4, mit AB-Akkus auf 11,52 kWh erweiterbar (Herstellerangabe)",
        "4 MPPT mit bis zu 2.640 W Solar, 1.000 W AC-Laden, 800 W Einspeisung (Herstellerangabe)",
        "Off-Grid-Backup-Ausgang mit 1.000 W (230-V-Steckdose am Gerät, Herstellerangabe)",
      ],
      pros: ["Großer Solareingang", "Off-Grid-Steckdose", "Netzladung bei Dunkelflaute im Alltag"],
      cons: ["Etwas weniger Notstromleistung", "Ladestand im Off-Grid-Betrieb laut einem Kundenbericht schwer abzulesen", "Viele Modellvarianten (Pro, Pro 2)"],
      specs: { kapazitaet: "1,92 kWh (bis 11,52 kWh)", notstrom: "1.000 W Off-Grid-Ausgang", pv: "4 MPPT, 2.640 W", erweiterbar: "ja", test: "–" },
      asin: "B0FT8CFKP3",
      query: "Zendure SolarFlow 800 Pro",
    },
  ],

  comparison: [
    { key: "kapazitaet", label: "Speicher" },
    { key: "notstrom", label: "Notstrom" },
    { key: "pv", label: "Solareingang" },
    { key: "erweiterbar", label: "Erweiterbar" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-balkonkraftwerk-speicher-notstrom-2026-bewertung-vergleich.svg",
      title: "Die 3 besten Balkonkraftwerk-Speicher mit Notstrom 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Balkonkraftwerk-Speicher 2026 in den Kriterien Notstromfunktion, Speicher, Alltag und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Anker hat den größten Speicher, EcoFlow das beste Preis-Leistungs-Verhältnis.",
    },
    steps: {
      kind: "steps",
      file: "balkonkraftwerk-notstrom-stromausfall-anleitung.svg",
      title: "Balkonkraftwerk im Stromausfall nutzen",
      subtitle: "Was passiert – und was du tun musst",
      alt: "Infografik: Balkonkraftwerk im Stromausfall – Einspeisung schaltet ab, Off-Grid-Steckdose nutzen, Verbraucher priorisieren, tagsüber laden, nach Rückkehr des Netzes zurückstellen",
      caption: "Ins Hausnetz speist ein Balkonkraftwerk im Blackout nie ein – nur die eigene Steckdose am Speicher liefert Strom.",
      steps: [
        { title: "Einspeisung stoppt automatisch", text: "Der Netzschutz trennt den Wechselrichter vom Hausnetz – das ist vorgeschrieben und schützt Monteure." },
        { title: "Off-Grid-Steckdose nutzen", text: "Verbraucher direkt am Speicher anschließen, ggf. per Verlängerung in die Wohnung führen." },
        { title: "Verbraucher priorisieren", text: "Router, Licht, Handys zuerst; Geräte mit hohem Anlaufstrom meiden." },
        { title: "Tagsüber laden", text: "Die Module laden den Speicher weiter – Verbrauch in die Sonnenstunden legen." },
        { title: "Nach dem Ausfall zurückstellen", text: "App prüfen: Einspeisung und Lademodus wieder auf Normalbetrieb." },
      ],
    },
  },

  editorial: {
    title: "Balkonkraftwerk mit Speicher: Sparen im Alltag, Reserve im Notfall",
    intro:
      "Was ein Speicher für das Balkonkraftwerk leistet, warum die Einspeisung im Blackout abschaltet und welche Regeln seit 2024 gelten.",
    sections: [
      {
        id: "bester-speicher",
        h2: "Welcher Balkonkraftwerk-Speicher ist für den Notfall am besten?",
        blocks: [
          { quick: "Die [Anker SOLIX Solarbank 3 E2700 Pro](produkt:1) ist nach unserer Einschätzung die beste Wahl: großer, erweiterbarer Speicher und 1.200-W-Notstromsteckdose. Günstiger ist der [EcoFlow STREAM Ultra](produkt:2), eine Alternative mit 1.000 W Off-Grid-Ausgang ist der [Zendure SolarFlow 800 Pro](produkt:3)." },
          { first: "Laut Marktstammdatenregister sind in Deutschland inzwischen weit über eine Million Balkonkraftwerke gemeldet. Mit einem Speicher nutzen sie den Solarstrom auch abends und nachts, statt ihn tagsüber ins Netz zu verschenken. Für die Krisenvorsorge kommt ein zweiter Nutzen hinzu: Viele neue Speicher haben eine eigene Steckdose, die auch ohne Netz Strom liefert." },
          { p: "Das ist wichtig, weil ein normales Balkonkraftwerk bei einem Stromausfall nichts bringt. Der Wechselrichter muss sich nach den Netzanschlussregeln sofort vom Hausnetz trennen, sobald das Netz ausfällt – sonst könnten Monteure an vermeintlich spannungsfreien Leitungen einen Schlag bekommen. Die Steckdosen in der Wohnung bleiben also dunkel. Nur Speicher mit Off-Grid-Steckdose versorgen dann direkt angeschlossene Geräte." },
          { p: "Wie relevant das ist, zeigte Anfang Januar 2026 ein mehrtägiger Stromausfall in Teilen Berlins, über den Utopia berichtete. Unsere Gesamtwahl ist die Anker Solarbank 3 E2700 Pro: Sie hat den größten Speicher, lässt sich auf über 16 kWh erweitern und bringt laut Hersteller vier MPPT-Eingänge sowie eine 1.200-W-Off-Grid-Steckdose mit. Aus unserer Sicht ist das die beste Kombination aus Alltagsnutzen und Notstrom-Reserve – allerdings auch die teuerste. Wer weniger ausgeben will, bekommt beim EcoFlow STREAM Ultra laut Anbieter ebenfalls bis zu 1.200 W an der Notstromsteckdose, aber weniger Erweiterungsspielraum. Alle Angaben in diesem Vergleich beruhen auf Herstellerangaben und unserer redaktionellen Einschätzung; eigene Messungen haben wir nicht durchgeführt." },
          { figure: "scores" },
          { callout: { title: "Kein Ersatz für eine Hausnotstromanlage", warn: true, text: "Die Off-Grid-Steckdose versorgt nur Geräte, die direkt angeschlossen sind. Laut Anker eignet sie sich bei der Solarbank 3 Pro für Router, Laptops, Fernseher und Lampen, nicht für Kühlschränke wegen des hohen Anlaufstroms. Eine Versorgung des ganzen Hauses braucht eine fest installierte Anlage mit Umschalteinrichtung durch eine Elektrofachkraft. Niemals einen Speicher oder eine Powerstation über einen „Stecker-zu-Stecker“-Adapter in die Hausinstallation einspeisen – Lebensgefahr." } },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Wichtig sind eine Off-Grid- oder Notstromsteckdose, genug Kapazität für den Abendverbrauch, ein großer Solareingang mit mehreren MPPT-Trackern, Erweiterbarkeit und eine Steuerung, die sich am tatsächlichen Verbrauch orientiert." },
          {
            table: {
              caption: "Regeln für Balkonkraftwerke nach dem Solarpaket I (2024) – vereinfachte Übersicht, Stand Oktober 2026, keine Rechtsberatung",
              head: ["Regel", "Was gilt"],
              rows: [
                ["**Einspeiseleistung**", "in der Regel Wechselrichterleistung bzw. Einspeisung bis 800 VA für die vereinfachten Regeln; darüber gelten die Regeln für normale PV-Anlagen"],
                ["**Modulleistung**", "bis 2.000 Watt-Peak für die vereinfachte Anmeldung"],
                ["**Anmeldung**", "im Marktstammdatenregister der Bundesnetzagentur; eine gesonderte Anmeldung beim Netzbetreiber ist für steckerfertige Anlagen in der Regel entfallen – ggf. tauscht er einen alten Zähler. Ob ein Speicher eigens einzutragen ist, im Register bzw. beim Netzbetreiber klären"],
                ["**Mieter und Eigentümer**", "Balkonkraftwerke sind seit Oktober 2024 privilegierte Maßnahmen – Vermieter und WEG können sie in der Regel nur noch eingeschränkt ablehnen, aber über die Art der Anbringung mitbestimmen"],
                ["**Netzausfall**", "Einspeisung schaltet automatisch ab (Netz- und Anlagenschutz)"],
              ],
            },
          },
          { callout: { title: "Rechtslage vorab prüfen", warn: true, text: "Die Übersicht ist vereinfacht und ersetzt keine Rechtsberatung. Maßgeblich sind die jeweils aktuellen Regeln (EEG, Vorgaben der Bundesnetzagentur, VDE-Normen) und die Bedingungen deines Netzbetreibers. Prüfe insbesondere, ob die Wechselrichterleistung des gewählten Geräts im Einspeisebetrieb auf das zulässige Maß begrenzt ist. Bei Unsicherheiten zu Anschluss oder Hausinstallation eine Elektrofachkraft hinzuziehen." } },
          { h3: "Notstromsteckdose" },
          { p: "Nicht jeder Speicher hat eine. Achte auf Begriffe wie Off-Grid-Steckdose, Backup-Ausgang oder Notstromfunktion und auf die Leistung: 1.000 bis 1.200 W reichen für Router, Licht, Laptop und Ladegeräte. Kühlschränke und Pumpen mit hohem Anlaufstrom überfordern manche Ausgänge – die Herstellerangaben sagen, was unterstützt wird." },
          { h3: "Kapazität und Erweiterbarkeit" },
          { p: "Für den Alltag sollte der Speicher den Abend- und Nachtverbrauch decken, den das Balkonkraftwerk tagsüber nicht direkt nutzt. Für den Notfall gilt: mehr ist besser. Die Anker Solarbank 3 Pro startet mit 2,7 kWh, EcoFlow und Zendure mit 1,92 kWh. Alle drei lassen sich mit Zusatzakkus erweitern." },
          { h3: "Solareingang und Winterbetrieb" },
          { p: "Mehrere MPPT-Tracker holen auch dann noch Ertrag, wenn einzelne Module verschattet sind. Bis zu 2.000 Watt-Peak Modulleistung sind nach den vereinfachten Regeln zulässig; im Winter hilft jede zusätzliche Fläche, den Speicher wenigstens teilweise zu füllen." },
        ],
      },
      {
        id: "welcher-passt",
        h2: "Welcher Speicher passt zu wem?",
        blocks: [
          { quick: "Wer viel Speicher will und später erweitern möchte, nimmt Anker. Wer mit kleinem Budget eine Notstromsteckdose möchte, EcoFlow STREAM Ultra. Wer viel Modulfläche hat, Zendure." },
          {
            cards: [
              { title: "Haus & großer Verbrauch", text: "2,7 kWh bis 16 kWh: Anker Solarbank 3 E2700 Pro.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Einstieg mit Notstrom", text: "Günstig und mit Steckdose: EcoFlow STREAM Ultra.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Viel Solarfläche", text: "2.640 W Solareingang: Zendure SolarFlow 800 Pro.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Komplettsets", text: "Speicher mit Modulen und Erweiterungen in der Top 5.", link: { href: "#top5-sets", label: "Zur Top 5" } },
              { title: "Mobil statt fest", text: "Powerstations für Wohnung, Camping und Blackout.", link: { href: "/krisenvorsorge/energie-waerme/powerstations/", label: "Powerstations" } },
              { title: "Wärme ohne Strom", text: "Gaskocher, Schlafsack und CO-Melder.", link: { href: "/krisenvorsorge/energie-waerme/waerme-kochen-sicherheit/", label: "Wärme & Kochen" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-sets",
    h2: "Die 5 besten Sets und Erweiterungen",
    intro:
      "Wer noch keine Module hat, startet mit einem Komplettset; wer mehr Reserve will, mit einem Zusatzakku. Diese fünf Angebote bauen auf der Top 3 auf.",
    items: [
      { name: "Anker SOLIX Solarbank 3 E2700 Pro mit 4 × 445 W", for: "Komplettset", text: "Speicher mit vier Solarmodulen – alles für den Start aus einer Hand, Kabel und Halterungen je nach Angebot prüfen.", asin: "B0FF4PHRVB", query: "Anker SOLIX Solarbank 3 E2700 Pro 4 x 445W" },
      { name: "Anker SOLIX Solarbank 3 Pro + BP2700", for: "Doppelte Reserve", text: "Speicher plus Erweiterungsakku: rund 5,4 kWh für längere Ausfälle.", asin: "B0FBFP33JH", query: "Anker Solarbank 3 Pro BP2700" },
      { name: "EcoFlow STREAM Ultra mit 4 × 400 W", for: "Komplettset EcoFlow", text: "STREAM Ultra mit vier Modulen und 1,92 kWh – laut Anbieter auf 11,52 kWh erweiterbar.", asin: "B0FHH9CRGJ", query: "EcoFlow STREAM Ultra 4x 400W Solarpanel" },
      { name: "EcoFlow STREAM Ultra X", for: "Mehr Speicher ab Werk", text: "Variante mit 3,84 kWh – doppelte Kapazität für Haushalte mit hohem Abendverbrauch.", asin: "B0FDKBKX2C", query: "EcoFlow STREAM Ultra X 3,84 kWh" },
      { name: "EcoFlow DELTA 3 Plus mit Stream Mikrowechselrichter", for: "Mobile Alternative", text: "Powerstation plus 800-W-Mikrowechselrichter: im Alltag Balkonkraftwerk-Speicher, im Notfall tragbarer Akku mit Steckdosen.", asin: "B0FJY66BBQ", query: "EcoFlow DELTA 3 Plus Stream Mikrowechselrichter" },
    ],
  },

  guide: {
    sections: [
      {
        id: "notstrombetrieb",
        h2: "Wie funktioniert der Notstrombetrieb in der Praxis?",
        blocks: [
          { quick: "Bei einem Stromausfall trennt sich das Balkonkraftwerk vom Hausnetz. Strom gibt es dann nur noch aus der Off-Grid-Steckdose des Speichers. Die Module laden den Speicher tagsüber weiter." },
          { p: "Plane vorab, wie die Geräte zur Steckdose kommen: Der Speicher steht meist auf dem Balkon oder an der Wand neben den Modulen. Eine Verlängerung mit Mehrfachsteckdose, die du im Notfall in die Wohnung legst, ist die einfachste Lösung. Teste die Notstromfunktion einmal im Jahr, indem du sie in der App aktivierst und einen Verbraucher anschließt." },
          { figure: "steps" },
          { h3: "Was du vorbereiten solltest" },
          {
            list: [
              "**Verlängerungskabel bereithalten:** wetterfest und lang genug, damit Router und Licht erreicht werden.",
              "**App offline verstehen:** Prüfe, ob sich die Notstromfunktion auch ohne Internet am Gerät aktivieren lässt.",
              "**Mindestladestand einstellen:** Viele Speicher erlauben eine Reserve, die im Alltag nicht entladen wird – ideal für den Notfall.",
              "**Kühlung bedenken:** Kühlschränke mit hohem Anlaufstrom laufen nicht an jeder Off-Grid-Steckdose – eine Powerstation ist dafür oft besser.",
            ],
          },
          {
            facts: [
              { value: "800 VA", label: "Wechselrichter- bzw. Einspeisegrenze für die vereinfachten Regeln" },
              { value: "2.000 Wp", label: "Modulleistung für die vereinfachte Anmeldung (Solarpaket I)" },
              { value: "1.200 W", label: "Off-Grid-Leistung laut Hersteller bei Anker Solarbank 3 Pro und EcoFlow STREAM Ultra" },
            ],
          },
          { h3: "Anmelden und anschließen" },
          { p: "Balkonkraftwerke werden nach aktueller Rechtslage im Marktstammdatenregister der Bundesnetzagentur angemeldet; eine eigene Anmeldung beim Netzbetreiber ist für steckerfertige Anlagen in der Regel nicht mehr nötig. Regeln und Normen ändern sich jedoch – prüfe vor dem Kauf die aktuellen Vorgaben der Bundesnetzagentur und frage im Zweifel deinen Netzbetreiber, etwa zu Zählertausch, Speicher mit Netzladung oder Anlagen über 800 VA. Der Anschluss über eine Schutzkontaktsteckdose ist für steckerfertige Geräte verbreitet; ob Stromkreis, Leitung und Absicherung geeignet sind, sollte im Zweifel – besonders in Altbauten – eine Elektrofachkraft prüfen. Installation, Montage am Geländer und Kabelführung nach Herstellerangaben ausführen; Module sturmsicher befestigen. Wer zur Miete wohnt oder in einer Eigentümergemeinschaft lebt, informiert Vermieter bzw. Verwaltung vorab." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Funktioniert ein Balkonkraftwerk bei Stromausfall?", a: "Die Einspeisung ins Hausnetz schaltet bei einem Netzausfall automatisch ab. Strom gibt es nur, wenn der Speicher eine eigene Notstrom- bzw. Off-Grid-Steckdose hat. Daran angeschlossene Geräte laufen weiter, die Steckdosen in der Wohnung nicht." },
    { q: "Welcher Balkonkraftwerk-Speicher hat eine Notstromsteckdose?", a: "Unter anderem die Anker SOLIX Solarbank 3 E2700 Pro (1.200 W), der EcoFlow STREAM Ultra (bis 1.200 W) und der Zendure SolarFlow 800 Pro (1.000 W). Unsere Gesamtwahl ist die Anker Solarbank 3 Pro." },
    { q: "Kann ich mit dem Balkonkraftwerk-Speicher meinen Kühlschrank betreiben?", a: "Das hängt vom Anlaufstrom ab. Anker gibt für die Off-Grid-Steckdose der Solarbank 3 Pro an, dass Kühlschränke nicht unterstützt werden. Für den Kühlschrank ist eine Powerstation mit hoher Spitzenleistung die sicherere Wahl." },
    { q: "Wie viel Speicher brauche ich?", a: "Für den Alltag sollte der Speicher den Abend- und Nachtverbrauch abdecken, oft 1,5 bis 3 kWh. Für den Notfall gilt: Router, Licht und Handys brauchen nur wenige hundert Wattstunden pro Tag, alles darüber ist Reserve." },
    { q: "Muss ich das Balkonkraftwerk anmelden?", a: "Ja, im Marktstammdatenregister der Bundesnetzagentur. Eine gesonderte Anmeldung beim Netzbetreiber ist seit dem Solarpaket I für steckerfertige Anlagen in der Regel nicht mehr nötig. Ob für den Speicher zusätzliche Angaben nötig sind und ob dein Zähler getauscht werden muss, klärst du am besten vorab beim Netzbetreiber; die Rechtslage kann sich ändern." },
    { q: "Darf ich als Mieter ein Balkonkraftwerk mit Speicher betreiben?", a: "Seit Oktober 2024 gelten Balkonkraftwerke als privilegierte bauliche Veränderung. Vermieter und Eigentümergemeinschaften können sie in der Regel nicht mehr grundsätzlich ablehnen, aber über die Art der Anbringung mitentscheiden. Sprich vor der Montage mit dem Vermieter." },
  ],

  sources: [
    { label: "Utopia: Stromausfall – taugt ein Balkonkraftwerk als Notstromlösung?", url: "https://utopia.de/ratgeber/stromausfall-taugt-ein-balkonkraftwerk-als-notstromloesung-v3_893950/" },
    { label: "elektronik-zeit.de: Balkonkraftwerk-Speicher im Herstellervergleich", url: "https://elektronik-zeit.de/balkonkraftwerk/mit-speicher/hersteller-vergleich/" },
    { label: "Strom-Report: Balkonkraftwerk-Vergleich", url: "https://strom-report.com/balkonkraftwerk-vergleich/" },
  ],

  related: [
    { slug: "powerstations", text: "Mobile Akkus mit 1 bis 4 kWh." },
    { slug: "solarmodule", text: "Faltbare Module für Powerstations." },
    { slug: "notfallradios", text: "Informiert bleiben, wenn der Strom weg ist." },
    { group: "energie-waerme", text: "Alle Ratgeber zu Energie & Wärme." },
  ],
};
