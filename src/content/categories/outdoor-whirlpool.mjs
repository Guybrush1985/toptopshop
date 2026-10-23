// Kategorie: Outdoor-Whirlpools für Garten und Terrasse (aufblasbar und Hartschale)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "outdoor-whirlpool",
  area: "wellness",
  navLabel: "Outdoor-Whirlpools",
  published: "2026-10-23",
  updated: "2026-10-23",

  metaTitle: "Die 3 besten Outdoor-Whirlpools 2026 für Garten & Terrasse",
  metaDescription:
    "Outdoor-Whirlpools von Bestway, Intex und Home Deluxe im Vergleich: aufblasbar oder Acrylschale, Heizung, Frostschutz, Aufstellung, Strom und Wasserpflege.",

  eyebrow: "Whirlpool & Wellness · Outdoor-Whirlpools",
  h1: "Die 3 besten Outdoor-Whirlpools 2026",
  lead:
    "Ein Whirlpool im Garten oder auf der Terrasse muss kein Bauprojekt sein: Aufblasbare Modelle stehen in einer Stunde, Hartschalen-Whirlpools aus Acryl bleiben dauerhaft. Wir zeigen die drei besten Outdoor-Whirlpools, erklären Untergrund, Strom, Heizkosten und Wasserpflege und nennen in der Top 5 große Modelle für sechs bis acht Personen.",
  answer:
    "Unsere beste Gesamtwahl ist der [**Bestway Lay-Z-Spa Bali AirJet**](produkt:1): aufblasbarer Whirlpool für bis zu sechs Personen mit laut Angebot 140 Luftdüsen, Heizung bis 40 °C, Frostwächter, App-Steuerung und Thermoabdeckung. Das beste Preis-Leistungs-Verhältnis bietet der [**Intex PureSpa Greywood Deluxe**](produkt:2) für vier Personen, die Premium-Wahl mit fester Acrylschale ist der [**Home Deluxe Beach Pure**](produkt:3) mit 51 Massagedüsen.",

  priceTiers: {
    1: { symbol: "€", label: "bis 600 €" },
    2: { symbol: "€€", label: "600–1.500 €" },
    3: { symbol: "€€€", label: "über 1.500 €" },
  },

  top3Title: "Unsere Top 3 Outdoor-Whirlpools",
  top3Intro:
    "Zwei aufblasbare Whirlpools, die sich bei Bedarf wieder abbauen lassen, und ein Hartschalen-Whirlpool, der dauerhaft im Garten steht. Sie unterscheiden sich vor allem in Massageart, Heizleistung, Wintertauglichkeit und Aufwand bei Aufstellung und Anschluss.",
  comparisonTitle: "Die 3 besten Outdoor-Whirlpools im Vergleich",

  criteria: [
    { key: "komfort", label: "Platz & Massage", weight: 0.3, description: "Sitzplätze, Innenmaß, Zahl und Art der Düsen, Komfort beim Sitzen." },
    { key: "heizung", label: "Heizung & Ganzjahr", weight: 0.25, description: "Heizleistung, Dämmung, Abdeckung und Frostschutz für die kalte Jahreszeit." },
    { key: "handling", label: "Aufbau & Pflege", weight: 0.2, description: "Aufbau, Anschluss, Filter, Wasserpflege und Bedienung." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zu Ausstattung und Lieferumfang." },
  ],

  method:
    "Grundlage sind Herstellerangaben (Maße, Füllmenge, Düsen, Heizleistung, Frostschutz) und die Angaben auf den Amazon-Produktseiten und bei Händlern. Einen aktuellen Test von Stiftung Warentest oder Öko-Test zu Outdoor-Whirlpools konnten wir nicht finden, daher nennen wir keine Testnoten. Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10; Laborwerte behaupten wir nicht.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl",
      name: "Bestway Lay-Z-Spa Bali AirJet",
      brand: "Bestway",
      variant: "Ø 196 × 71 cm, bis 6 Personen, Rattan-Optik",
      visual: { kind: "hottub", tone: "forest" },
      priceTier: 2,
      ratings: { komfort: 8.5, heizung: 8.5, handling: 8.5, preis: 8.5 },
      bestFor: "Familien und Paare, die auch im Herbst und Winter baden wollen",
      verdict:
        "Der ausgewogenste Outdoor-Whirlpool: Platz für bis zu sechs Personen, Heizung bis 40 °C und ein Frostwächter, der das Wasser bei Kälte automatisch nachheizt. Pumpe, Heizung und Steuerung sitzen in einer kompakten Einheit, die sich per App bedienen lässt. Thermoabdeckung und GS-Zeichen sind laut Angebot inklusive.",
      features: [
        "140 AirJet-Luftdüsen, Heizung bis 40 °C (Herstellerangabe)",
        "Frostwächter heizt bei niedriger Wassertemperatur automatisch nach, solange die Pumpe am Strom ist (Herstellerangabe)",
        "App-Steuerung, UltraFit-Pumpeneinheit, Thermoabdeckung, GS-zertifiziert (laut Amazon-Angebot)",
      ],
      pros: ["Viel Platz für den Preis", "Frostschutz für die kalte Jahreszeit", "Bequem per App vorheizen"],
      cons: ["Luftdüsen sprudeln, massieren aber nicht gezielt", "Aufblasbare Wände dämmen schlechter als eine Hartschale"],
      specs: {
        bauart: "aufblasbar",
        personen: "bis 6",
        masse: "Ø 196 × 71 cm",
        duesen: "140 Luftdüsen",
        heizung: "bis 40 °C, Frostwächter",
        extras: "App, Thermoabdeckung",
      },
      asin: "B0D9YT4LFZ",
      query: "Bestway Lay-Z-Spa Bali AirJet 196 x 71 cm",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Intex PureSpa Greywood Deluxe",
      brand: "Intex",
      variant: "Ø 196 × 71 cm, 4 Personen, 795 Liter",
      visual: { kind: "hottub", tone: "green" },
      priceTier: 1,
      ratings: { komfort: 7.5, heizung: 7.0, handling: 8.5, preis: 9.5 },
      bestFor: "Einsteiger, Paare und kleine Familien mit Sommer-Saison",
      verdict:
        "Der günstigste Weg zum eigenen Sprudelbad: Der Intex-Klassiker in Holzoptik fasst laut Hersteller 795 Liter, hat 140 Luftdüsen und eine 2.200-Watt-Heizung. Aufbau mit integrierter Pumpe geht schnell, ein Kalkschutzsystem ist eingebaut. Für den Betrieb bei Frost ist er weniger ausgelegt als der Bestway.",
      features: [
        "140 Luftdüsen, Wassertemperatur 10–40 °C einstellbar (Herstellerangabe)",
        "2.200-W-Heizung, Umwälzpumpe rund 1.741 l/h (Herstellerangabe)",
        "Integriertes Kalkschutzsystem (Herstellerangabe)",
      ],
      pros: ["Sehr günstig für die Größe", "Schneller Aufbau", "Ersatzteile und Filter leicht erhältlich"],
      cons: ["Eher für vier als für sechs Erwachsene", "Kein ausgewiesener Frostwächter wie bei Bestway"],
      specs: {
        bauart: "aufblasbar",
        personen: "bis 4",
        masse: "Ø 196 × 71 cm",
        duesen: "140 Luftdüsen",
        heizung: "2.200 W, bis 40 °C",
        extras: "Kalkschutz",
      },
      asin: "B07XTYN9VN",
      query: "Intex PureSpa Greywood Deluxe 196 x 71 cm Whirlpool",
    },
    {
      rank: 3,
      label: "Premium-Wahl mit Acrylschale",
      name: "Home Deluxe Beach Pure",
      brand: "Home Deluxe",
      variant: "210 × 155 × 83 cm, 3 Personen, Acryl mit WPC-Verkleidung",
      visual: { kind: "spa", tone: "mint" },
      priceTier: 3,
      ratings: { komfort: 9.5, heizung: 9.0, handling: 6.0, preis: 6.0 },
      bestFor: "Dauerhafte Aufstellung, gezielte Massage, Ganzjahresbetrieb",
      verdict:
        "Ein echter Hartschalen-Whirlpool: geformte Sitze aus Acryl, laut Hersteller 51 einzeln einstellbare Massagedüsen, 24 Lichtquellen und eine 3.000-Watt-Heizung. Er massiert gezielter als jedes aufblasbare Modell, braucht aber ein tragfähiges Fundament, einen passenden Stromanschluss vom Elektriker und Platz für die Anlieferung.",
      features: [
        "51 Massagedüsen, 24 Lichtquellen, Wasserfall (Herstellerangabe)",
        "3.000-W-Heizung, rund 900 Liter Füllmenge, Leergewicht rund 270 kg (Händlerangabe)",
        "Wanne aus Acryl, Verkleidung aus WPC; Thermoabdeckung und Treppe nicht im Lieferumfang (Händlerangabe)",
      ],
      pros: ["Gezielte Düsenmassage", "Feste, ergonomische Sitze", "Bleibt das ganze Jahr stehen"],
      cons: ["Teuer, Abdeckung und Treppe extra", "Fundament und Elektroanschluss nötig"],
      specs: {
        bauart: "Hartschale (Acryl)",
        personen: "bis 3",
        masse: "210 × 155 × 83 cm",
        duesen: "51 Massagedüsen",
        heizung: "3.000 W",
        extras: "LED-Licht, Wasserfall",
      },
      asin: "B0BG7X5DJZ",
      query: "Home Deluxe Outdoor Whirlpool Beach Pure 210 x 155 x 83 cm",
    },
  ],

  comparison: [
    { key: "bauart", label: "Bauart" },
    { key: "personen", label: "Personen" },
    { key: "masse", label: "Maße" },
    { key: "duesen", label: "Düsen" },
    { key: "heizung", label: "Heizung" },
    { key: "extras", label: "Extras" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "beste-outdoor-whirlpools-2026-bewertung.svg",
      title: "Die 3 besten Outdoor-Whirlpools 2026",
      alt: "Balkendiagramm: Bewertung von Bestway Lay-Z-Spa Bali AirJet, Intex PureSpa Greywood Deluxe und Home Deluxe Beach Pure nach Platz und Massage, Heizung, Aufbau und Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Platz und Massage wiegen am schwersten.",
    },
    steps: {
      kind: "steps",
      file: "outdoor-whirlpool-aufstellen.svg",
      title: "Outdoor-Whirlpool aufstellen",
      subtitle: "Vom Untergrund bis zum ersten Bad",
      alt: "Infografik: Outdoor-Whirlpool aufstellen – Untergrund prüfen, Stromanschluss mit FI, aufbauen und füllen, mit Abdeckung aufheizen, Wasser regelmäßig pflegen",
      caption: "Fünf Schritte, bevor das erste Bad beginnt.",
      steps: [
        { title: "Untergrund prüfen", text: "Eben, fest und tragfähig – gefüllt wiegt der Pool über eine Tonne." },
        { title: "Strom planen", text: "Außensteckdose mit FI-Schutz, kein Verlängerungskabel." },
        { title: "Aufbauen & füllen", text: "Bodenschutz unterlegen, aufpumpen, mit Gartenschlauch füllen." },
        { title: "Abgedeckt heizen", text: "Mit Thermoabdeckung aufheizen, das spart Zeit und Strom." },
        { title: "Wasser pflegen", text: "pH und Desinfektion testen, Filter regelmäßig spülen." },
      ],
    },
  },

  editorial: {
    title: "Welcher Outdoor-Whirlpool passt zu deinem Garten?",
    intro: "Aufblasbar oder Hartschale, wie viele Plätze du brauchst und warum Abdeckung und Frostschutz über die Betriebskosten entscheiden.",
    sections: [
      {
        id: "bester-outdoor-whirlpool",
        h2: "Welcher Outdoor-Whirlpool ist der beste?",
        blocks: [
          { quick: "Für die meisten Gärten ist der [Bestway Lay-Z-Spa Bali AirJet](produkt:1) die beste Wahl, weil er Platz für sechs, Heizung, Frostwächter und App-Steuerung zu einem moderaten Preis vereint. Wer günstig einsteigen will, nimmt den [Intex PureSpa Greywood Deluxe](produkt:2), wer dauerhaft und mit echter Düsenmassage baden will, den [Home Deluxe Beach Pure](produkt:3)." },
          { first: "Outdoor-Whirlpools gibt es in zwei Bauarten. **Aufblasbare Whirlpools** bestehen aus einer mehrlagigen PVC-Wanne mit Luftkammern, dazu eine Pumpeneinheit mit Heizung, Filter und Gebläse. Sie sind günstig, in einer Stunde aufgebaut und lassen sich im Winter abbauen. **Hartschalen-Whirlpools** haben eine geformte Acrylwanne mit Sitzen, Verkleidung und Isolierung; sie stehen dauerhaft und massieren mit Wasserdüsen statt nur mit Luftblasen." },
          { p: "Bei aufblasbaren Modellen sprudelt das Wasser über Luftdüsen im Boden – angenehm, aber eher ein Prickeln als eine Massage. Hartschalen-Whirlpools haben Hydrojets, die gezielt Rücken, Nacken oder Füße massieren. Der [Home Deluxe Beach Pure](produkt:3) liegt deshalb beim Komfort vorn, verliert aber bei Preis und Aufwand: Er braucht ein Fundament, eine Anlieferung mit mehreren Helfern und einen Stromanschluss vom Elektriker." },
          { figure: "scores" },
          { p: "Der [Intex PureSpa Greywood Deluxe](produkt:2) hat dieselbe Grundfläche wie der Bestway, ist aber für vier Personen ausgelegt und hat keinen ausgewiesenen Frostwächter. Wer vor allem im Sommer badet, spart hier deutlich." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf achten?",
        blocks: [
          { quick: "Achte auf Bauart, Sitzplätze und Innenmaß, Heizleistung und Frostschutz, eine gut schließende Thermoabdeckung, die Filtergröße und den Stromanschluss. Bei Hartschalen kommen Fundament und Anlieferung dazu." },
          {
            table: {
              caption: "Aufblasbar oder Hartschale: die wichtigsten Unterschiede",
              head: ["", "Aufblasbar", "Hartschale (Acryl)"],
              rows: [
                ["**Aufbau**", "Selbst, ca. 1 Stunde", "Anlieferung, Fundament, oft Elektriker"],
                ["**Massage**", "Luftblasen aus dem Boden", "Einstellbare Wasserdüsen"],
                ["**Sitzen**", "Auf dem Boden, ohne Sitze", "Geformte Sitze und Liegen"],
                ["**Dämmung**", "Mäßig, Abdeckung wichtig", "Besser, Isolierung in der Verkleidung"],
                ["**Winter**", "Mit Frostwächter möglich, sonst abbauen", "Für Ganzjahresbetrieb gebaut"],
                ["**Preis**", "Meist einige hundert Euro", "Meist mehrere tausend Euro"],
              ],
            },
          },
          { h3: "Plätze und Innenmaß" },
          { p: "Die Personenangabe der Hersteller ist großzügig: In einem Whirlpool mit 196 cm Außendurchmesser sitzen vier Erwachsene bequem, sechs nur eng. Entscheidend ist das Innenmaß, weil die aufblasbaren Wände je Seite 20 bis 25 cm breit sind. Wer regelmäßig zu sechst baden will, sollte zu einem der großen Modelle aus unserer [Top 5](#top5-grosse-whirlpools) greifen." },
          { h3: "Heizung, Abdeckung und Frostschutz" },
          { p: "Aufblasbare Whirlpools heizen typischerweise mit rund 2.000 Watt; je nach Außentemperatur dauert es Stunden bis zum ersten Bad. Die Thermoabdeckung hält die Wärme – ohne sie steigen Heizzeit und Stromverbrauch deutlich. Bestway nennt seine Pumpenfunktion **Frostwächter**: Fällt die Wassertemperatur, heizt die Pumpe automatisch nach, solange sie am Strom hängt. Ohne diese Funktion sollte ein aufblasbarer Whirlpool vor dem ersten Frost geleert und abgebaut werden." },
          { list: ["Innenmaß und echte Sitzplätze prüfen", "Heizleistung und Frostschutz vergleichen", "Thermoabdeckung mit Verschlüssen", "Filter und Ersatzkartuschen günstig erhältlich?", "Stromanschluss mit FI-Schutzschalter in Reichweite", "Bei Hartschale: Fundament, Zufahrt und Anlieferung planen"] },
        ],
      },
      {
        id: "zielgruppen",
        h2: "Welcher Outdoor-Whirlpool passt zu wem?",
        blocks: [
          { quick: "Bestway für Familien und Ganzjahres-Badende mit kleinem Budget, Intex für Sommer-Einsteiger, Home Deluxe für alle, die dauerhaft und mit echter Massage baden wollen." },
          {
            cards: [
              { title: "Familie, auch im Winter", text: "Der [Bestway Lay-Z-Spa Bali AirJet](produkt:1) bietet Platz für sechs und heizt dank Frostwächter bei Kälte automatisch nach." },
              { title: "Einstieg für den Sommer", text: "Der [Intex PureSpa Greywood Deluxe](produkt:2) ist günstig, schnell aufgebaut und reicht für zwei bis vier Personen." },
              { title: "Dauerhaft im Garten", text: "Der [Home Deluxe Beach Pure](produkt:3) hat geformte Sitze, 51 Düsen und bleibt das ganze Jahr stehen." },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-grosse-whirlpools",
    h2: "Die 5 besten großen Whirlpools für 6 bis 8 Personen",
    intro:
      "Für Großfamilien, Gäste und Gartenpartys: Diese aufblasbaren Whirlpools bieten laut Hersteller Platz für sechs bis acht Personen. Je größer der Pool, desto länger die Heizzeit und desto wichtiger ein tragfähiger Untergrund – gefüllt wiegen sie deutlich über eine Tonne.",
    items: [
      { name: "Bestway Lay-Z-Spa Hawaii AirJet Ø 236 cm", for: "Bis 8 Personen, Frostwächter", text: "Rund und groß: laut Angebot 190 Luftdüsen, Heizung bis 40 °C, App-Steuerung und Frostwächter.", asin: "B0FMQD22BT", query: "Bestway Lay-Z-Spa Hawaii AirJet 236 x 71 cm" },
      { name: "Intex PureSpa Greywood Deluxe 6 Personen", for: "Salzwasser und Wasserenthärtung", text: "1.098 Liter, 170 Luftdüsen, App-Steuerung und LED-Licht; Salzwassersystem und Wasserenthärtung sind laut Angebot inklusive.", asin: "B09Q1R6XC5", query: "Intex PureSpa Greywood Deluxe 6 Personen Salzwassersystem" },
      { name: "Bestway Lay-Z-Spa Mauritius AirJet", for: "Oval, bis 7 Personen", text: "Ovale Form mit 270 × 180 cm, laut Angebot rund 1.370 Liter und 180 Luftdüsen – passt gut an eine Terrassenkante.", asin: "B095XJKPS4", query: "Bestway Lay-Z-Spa Mauritius AirJet 270 x 180 x 71 cm" },
      { name: "BRAST MSpa Frame Mono Eco", for: "Rahmenbauweise, mehr Innenraum", text: "Ø 192 × 65 cm mit schmaleren, festeren Rahmenwänden und dadurch laut Händlerangabe rund 182 cm Innenmaß; laut Anbieter für bis zu 8 Personen (bequem eher 5–6), 144 Luftdüsen in drei Stufen, App-Steuerung und für den Ganzjahresbetrieb ausgelegt.", asin: "B0F7SLRDJ1", query: "BRAST MSpa Frame Mono Eco 8 Personen" },
      { name: "Bestway Lay-Z-Spa Rome AirJet", for: "Quadratisch, bis 7 Personen", text: "201 × 201 cm in Sandmarmor-Optik, laut Angebot 180 Luftdüsen, App-Steuerung, Frostwächter und Thermoabdeckung; quadratisch mit mehr Platz in den Ecken.", asin: "B0D9YTTTBF", query: "Bestway Lay-Z-Spa Rome AirJet 201 x 201 x 71 cm" },
    ],
  },

  guide: {
    sections: [
      {
        id: "aufstellen",
        h2: "Wo und wie stellt man einen Outdoor-Whirlpool auf?",
        blocks: [
          { quick: "Auf einem ebenen, festen und tragfähigen Untergrund wie Pflaster, Beton oder einer Terrassenplatte, in Reichweite einer FI-geschützten Außensteckdose. Rasen allein ist zu weich, Holzterrassen und Balkone müssen die Last nachweislich tragen." },
          { figure: "steps" },
          { p: "Ein gefüllter Whirlpool mit 800 bis 1.400 Litern Wasser und mehreren Badenden bringt deutlich über eine Tonne auf eine kleine Fläche. Auf Pflaster oder einer Betonplatte ist das kein Problem. Auf einer Holzterrasse oder einem Balkon gehört die Tragfähigkeit vorher geprüft – im Zweifel von einem Statiker. Unter aufblasbare Pools gehört eine Bodenschutzmatte, damit Steinchen den Boden nicht durchscheuern." },
          { p: "Für den Strom gilt: Nur eine fachgerecht installierte Außensteckdose mit Fehlerstrom-Schutzschalter (FI) verwenden, keine Verlängerungskabel oder Mehrfachstecker. Hartschalen-Whirlpools mit 3.000 Watt Heizung und mehr brauchen in der Regel einen eigenen Stromkreis, den eine Elektrofachkraft anschließt." },
          { callout: { title: "Baurecht und Nachbarn", text: "Ein frei aufgestellter Whirlpool braucht in der Regel keine Baugenehmigung. Für Fundamente, Überdachungen oder Aufstellung an der Grundstücksgrenze gelten aber die Regeln der jeweiligen Landesbauordnung – im Zweifel beim Bauamt nachfragen. Pumpe und Gebläse sind hörbar; abends Rücksicht auf die Nachbarn nehmen." } },
        ],
      },
      {
        id: "wasserpflege",
        h2: "Wie pflegt man das Wasser im Whirlpool?",
        blocks: [
          { quick: "pH-Wert und Desinfektionsmittel mehrmals pro Woche mit Teststreifen prüfen, den Filter regelmäßig ausspülen und tauschen und das Wasser je nach Nutzung alle paar Wochen bis Monate komplett wechseln. Die Zielwerte nennt die Anleitung des Herstellers." },
          { p: "Warmes Wasser um 35 bis 40 °C ist ein guter Nährboden für Keime. Bayerns Landesamt für Gesundheit zählt Warmsprudelbecken ausdrücklich zu den Anlagen, in denen sich Legionellen vermehren können, wenn sie schlecht gepflegt werden. Deshalb gilt: vor dem Baden duschen, das Wasser regelmäßig desinfizieren (Chlor, Brom oder Aktivsauerstoff nach Herstellerangabe) und die Abdeckung geschlossen halten, damit kein Laub hineinfällt." },
          { p: "Salzwassersysteme, wie sie manche Whirlpools laut Angebot mitbringen, erzeugen das Chlor per Elektrolyse aus Salz – das ist bequemer, ersetzt aber nicht das Messen. Ein Kalkschutz oder Wasserenthärter lohnt sich bei hartem Leitungswasser, weil Kalk Heizung und Düsen zusetzt." },
          { callout: { title: "Gesundheit", warn: true, text: "Hersteller begrenzen die Wassertemperatur auf 40 °C. Schwangere, Menschen mit Herz-Kreislauf-Erkrankungen und Kinder sollten die Badedauer begrenzen und im Zweifel vorher ärztlich abklären lassen. Kein Alkohol beim Baden, Kinder nie unbeaufsichtigt und die Abdeckung bei Nichtgebrauch verschließen." } },
          { facts: [{ value: "40 °C", label: "Höchsttemperatur bei Bestway und Intex (Herstellerangabe)" }, { value: "> 1 t", label: "Gewicht eines gefüllten 6-Personen-Whirlpools mit Badenden" }, { value: "51", label: "Massagedüsen im Home Deluxe Beach Pure (Herstellerangabe)" }] },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welcher Outdoor-Whirlpool ist der beste?", a: "Unsere beste Gesamtwahl ist der Bestway Lay-Z-Spa Bali AirJet für bis zu sechs Personen mit Heizung, Frostwächter und App-Steuerung. Günstiger ist der Intex PureSpa Greywood Deluxe, eine feste Acrylschale mit Düsenmassage bietet der Home Deluxe Beach Pure." },
    { q: "Kann man einen aufblasbaren Whirlpool im Winter nutzen?", a: "Ja, wenn er dafür ausgelegt ist. Modelle mit Frostwächter wie die Lay-Z-Spa-Reihe von Bestway heizen bei Kälte automatisch nach, solange die Pumpe am Strom ist. Ohne Frostschutz sollte der Whirlpool vor dem ersten Frost geleert, getrocknet und drinnen gelagert werden." },
    { q: "Welcher Untergrund ist für einen Whirlpool geeignet?", a: "Ein ebener, fester Untergrund wie Pflaster, Beton oder eine Terrassenplatte. Gefüllt wiegt ein Whirlpool mit Badenden über eine Tonne. Auf Holzterrassen und Balkonen muss die Tragfähigkeit vorher geprüft werden." },
    { q: "Braucht man für einen Whirlpool einen Elektriker?", a: "Für aufblasbare Whirlpools reicht eine fachgerecht installierte Außensteckdose mit FI-Schutzschalter, ohne Verlängerungskabel. Hartschalen-Whirlpools mit hoher Heizleistung brauchen meist einen eigenen Stromkreis, den eine Elektrofachkraft anschließt." },
    { q: "Wie oft muss man das Wasser im Whirlpool wechseln?", a: "Je nach Nutzung und Pflege alle paar Wochen bis wenige Monate. Dazwischen pH-Wert und Desinfektion mehrmals pro Woche prüfen und den Filter regelmäßig spülen. Die genauen Empfehlungen stehen in der Anleitung des Herstellers." },
    { q: "Aufblasbarer Whirlpool oder Hartschale – was ist besser?", a: "Aufblasbare Whirlpools sind günstig, schnell aufgebaut und im Winter abbaubar, sprudeln aber nur mit Luft. Hartschalen-Whirlpools massieren mit Wasserdüsen, haben Sitze und eine bessere Dämmung, kosten aber ein Vielfaches und brauchen Fundament und Anschluss." },
  ],

  sources: [
    { label: "Intex: PureSpa Greywood Deluxe (Produktseite)", url: "https://intexcorp.com/spas/4-person-purespa-greywood-deluxe-round-bubble-spa-set/" },
    { label: "Testsieger.de: Home Deluxe Outdoor Whirlpool Beach Pure (technische Daten)", url: "https://www.testsieger.de/pools-und-whirlpools-whirlpools/0AE8A93H2WXHM-home-deluxe-outdoor-whirlpool-beach-pure-210-x-155-x-83-cm.html" },
    { label: "Bayerisches Landesamt für Gesundheit und Lebensmittelsicherheit: Legionellen", url: "https://www.lgl.bayern.de/gesundheit/hygiene/wasserhygiene/legionellen/" },
  ],

  related: [
    { slug: "indoor-whirlpool", text: "Indoor-Whirlpools und Sprudelmatten für das Badezimmer." },
    { slug: "kunstrasen", text: "Kunstrasen für den Garten rund um den Whirlpool." },
    { area: "wellness", text: "Alle Ratgeber für Whirlpool & Wellness." },
    { area: "garten-grundstueck", text: "Ratgeber für Garten & Grundstück." },
  ],
};
