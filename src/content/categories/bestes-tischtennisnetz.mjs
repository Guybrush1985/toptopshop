// Kategorie: Tischtennisnetze (Netzgarnituren mit Pfosten, ausziehbare Netze, Ersatznetze)
// Aufbau siehe src/content/README.md (Content-Modell). Recherche: research/tischtennis/bestes-tischtennisnetz/

export default {
  slug: "bestes-tischtennisnetz",
  area: "tischtennis",
  navLabel: "Tischtennisnetze",
  published: "2026-10-26",
  updated: "2026-10-26",

  metaTitle: "Die 3 besten Tischtennisnetze 2026: Garnitur & ausziehbar",
  metaDescription:
    "Tischtennisnetze im Vergleich: Klemm- oder Schraubgarnitur, wetterfest oder ausziehbar für den Esstisch – die 3 besten Netze und worauf es bei der Passform ankommt.",

  eyebrow: "Tischtennis · Netzgarnitur",
  h1: "Die 3 besten Tischtennisnetze 2026",
  lead:
    "Das Netz ist gerissen, die Klemme gebrochen oder die Garnitur nach dem Umzug verschwunden? Ein neues Tischtennisnetz kostet wenig – entscheidend ist, dass es an deine Plattenkante passt und draußen nicht rostet.",
  answer:
    "Unsere beste Gesamtwahl ist die [**JOOLA Tischtennisnetz WX Aluminium**](produkt:1)-Garnitur mit eloxiertem Alurahmen und feiner Höhenverstellung für drinnen und draußen. Das beste Preis-Leistungs-Verhältnis bietet die [**Donic-Schildkröt Tischtennisnetz Party (808306)**](produkt:2), die laut Hersteller an Platten bis 6,5 cm Stärke passt; für ganzjährig draußen stehende Platten empfehlen wir die [**JOOLA Tischtennis-Netzgarnitur Libre (31016)**](produkt:3) aus wetterfestem Polymer.",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 25 €" },
    2: { symbol: "€€", label: "ca. 25–45 €" },
    3: { symbol: "€€€", label: "über ca. 45 €" },
  },

  top3Title: "Unsere Top 3 Tischtennisnetze",
  top3Intro:
    "Alle drei sind komplette Netzgarnituren – Netz, zwei Pfosten und Befestigung – für handelsübliche Klappplatten. Sie unterscheiden sich vor allem darin, wie dick die Plattenkante sein darf und wie gut sie Regen vertragen.",
  comparisonTitle: "Die 3 besten Tischtennisnetze im Vergleich",

  criteria: [
    { key: "passform", label: "Befestigung & Passform", weight: 0.3, description: "Schraub- oder Klemmmechanik, maximale Plattenstärke laut Hersteller- bzw. Händlerangabe, Halt an der Plattenkante, Eignung für verschiedene Plattenmarken." },
    { key: "einstellung", label: "Höhe, Spannung & Norm", weight: 0.25, description: "Lässt sich die Regelhöhe von 15,25 cm einstellen und das Netz straff spannen? Normklasse nach EN 14468-2 laut Herstellerangabe." },
    { key: "wetterfest", label: "Wetterfestigkeit", weight: 0.25, description: "Material von Netz, Pfosten und Schrauben – kann die Garnitur draußen bleiben?" },
    { key: "handhabung", label: "Handhabung & Verarbeitung", weight: 0.2, description: "Montage ohne Werkzeug, Abnehmen beim Klappen, Haltbarkeit von Spannschnur und Klemmen laut Erfahrungsberichten." },
  ],

  method:
    "Wir testen Tischtennisnetze nicht selbst, und unabhängige Tests (Stiftung Warentest, Öko-Test, Fachmagazine) zu Netzgarnituren haben wir nicht gefunden. Vergleichsportale, die „Testsieger“ küren, ranken nach Kundenbewertungen oder Verkaufsrang – das übernehmen wir nicht als Testergebnis. Grundlage unserer Einordnung sind Hersteller- und Händlerangaben (Befestigung, maximale Plattenstärke, Material, Normklasse nach EN 14468-2), die Regelmaße der ITTF und Erfahrungsberichte aus Kundenrezensionen, die wir nur als Tendenz werten. Jede Garnitur wird in vier gewichteten Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert. Rückrufe oder Safety-Gate-Meldungen zu Tischtennis-Netzgarnituren haben wir bei unserer Recherche (Stand 26.10.2026) nicht gefunden.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl (Indoor & Outdoor)",
      name: "JOOLA Tischtennisnetz WX Aluminium",
      brand: "JOOLA",
      variant: "Art.-Nr. 11191, blau eloxiert, 183 × 15,25 cm",
      visual: { kind: "ttnet", tone: "forest" },
      priceTier: 2,
      ratings: { passform: 7.5, einstellung: 9.0, wetterfest: 8.5, handhabung: 8.0 },
      bestFor: "Ein Netz für Keller und Garten zugleich",
      verdict:
        "Die ausgewogenste Garnitur im Feld: Der Rahmen aus eloxiertem Aluminium ist laut Hersteller für Indoor- und Outdoor-Platten gedacht, die Höhenverstellschraube bringt das Netz präzise auf 15,25 cm. Haken: Für sehr dicke Plattenkanten ist sie nicht gebaut, und das Baumwollnetz sollte draußen nach dem Spielen abgenommen werden.",
      features: [
        "Rahmen aus eloxiertem Aluminium, laut Hersteller robust und wetterfest für Indoor- und Outdoor-Platten",
        "Höhenverstellschraube mit Arretierung der Netzstange, gepolsterte Klemmen (Herstellerangabe)",
        "Netz aus verstärktem Baumwollgarn, 183 × 15,25 cm; Norm EN 14468-2 Klasse C (Händlerangabe)",
      ],
      pros: ["Alu-Rahmen rostet nicht – drinnen wie draußen nutzbar (Herstellerangabe)", "Feine Höheneinstellung auf die Regelhöhe", "Markenhersteller mit Ersatznetzen im Sortiment"],
      cons: ["Baumwollnetz verträgt Dauerregen schlechter als Nylon oder Polymer", "Klemmweite nur rund 3,8 cm laut US-Händlerangabe – vorher Kante messen", "Einzelne Käuferberichte über reißende Spannschnur"],
      specs: {
        befestigung: "Schraubklemme, gepolstert",
        staerke: "ca. 3,8 cm (Händlerangabe, unbestätigt)",
        material: "Aluminium eloxiert, Netz Baumwolle",
        norm: "EN 14468-2 Klasse C",
        einsatz: "Indoor & Outdoor",
      },
      asin: "B088KNR7JF",
      query: "JOOLA Tischtennisnetz WX Aluminium",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Donic-Schildkröt Tischtennisnetz Party (808306)",
      brand: "Donic-Schildkröt",
      variant: "Schraubgarnitur mit Nylonnetz",
      visual: { kind: "ttnet", tone: "green" },
      priceTier: 1,
      ratings: { passform: 9.0, einstellung: 6.5, wetterfest: 7.5, handhabung: 6.0 },
      bestFor: "Günstiger Ersatz für fast jede Platte",
      verdict:
        "Wenn das Original-Netz kaputt ist und du nicht weißt, wie dick deine Plattenkante ist, ist die Party-Garnitur die sicherste Wette: Der Schraubmechanismus fasst laut Hersteller bis 6,5 cm – mehr als jede andere Garnitur in unserer Auswahl. Bei Spannung und Feineinstellung musst du dafür Abstriche machen.",
      features: [
        "Schraubmechanismus für Plattenstärken bis 6,5 cm (Herstellerangabe)",
        "Längenverstellbares Netz aus wetterfestem Nylon (Herstellerangabe)",
        "Auch als „Classic“ mit derselben Artikelnummer 808306 gelistet",
      ],
      pros: ["Größte Klemmweite im Feld – passt laut Hersteller auch an dicke Kanten", "Wetterfestes Nylonnetz", "Günstige Markengarnitur"],
      cons: ["Keine Normklasse angegeben, einfache Spannung", "Laut einzelnen Käuferberichten wackeln die Pfosten", "Keine Mikro-Höhenverstellung angegeben"],
      specs: {
        befestigung: "Schraubklemme",
        staerke: "bis 6,5 cm (Herstellerangabe)",
        material: "Nylonnetz (wetterfest, Herstellerangabe), Pfosten Kunststoff/Metall – nicht eindeutig angegeben",
        norm: "nicht angegeben",
        einsatz: "Indoor & Outdoor (Netz wetterfest)",
      },
      asin: "B0002VLEHK",
      query: "Donic Schildkröt Party 808306 Tischtennisnetz",
    },
    {
      rank: 3,
      label: "Beste wetterfeste Outdoor-Garnitur",
      name: "JOOLA Tischtennis-Netzgarnitur Libre (31016)",
      brand: "JOOLA",
      variant: "Art.-Nr. 31016, Polymer, 183 × 15,25 cm",
      visual: { kind: "ttnet", tone: "mint" },
      priceTier: 1,
      ratings: { passform: 6.5, einstellung: 8.0, wetterfest: 9.5, handhabung: 7.5 },
      bestFor: "Outdoor-Platten, deren Netz draußen bleiben soll",
      verdict:
        "Die Garnitur für den Garten: Netz und Konstruktion bestehen laut Hersteller aus wetterfestem, massivem Polymer – kein rostendes Metall, keine Baumwolle. Dazu kommt die Normklasse B, höher als bei den meisten Freizeitnetzen. Wie dick die Plattenkante sein darf, gibt JOOLA allerdings nicht verbindlich an.",
      features: [
        "Netz aus wetterfestem, massivem Polymer; laut Hersteller kann die Outdoor-Platte damit ganzjährig draußen bleiben",
        "Norm EN 14468-2 Klasse B (Schul- und Vereinssport), Klemmmontage, Höhenverstellschraube (Herstellerangabe)",
        "Höhen- und Spannungseinstellung; passt laut Hersteller auf die meisten Tischtennisplatten",
      ],
      pros: ["Kein Metall, kein Baumwollnetz – für den Außeneinsatz gemacht (Herstellerangabe)", "Normklasse B statt C", "Günstig"],
      cons: ["Maximale Plattenstärke nicht verbindlich angegeben – vor dem Kauf Kante messen", "Kunststoffklemme weniger steif als Metall", "Farbangaben in den Listings uneinheitlich"],
      specs: {
        befestigung: "Klemme mit Höhenverstellschraube",
        staerke: "nicht verbindlich angegeben",
        material: "wetterfestes Polymer",
        norm: "EN 14468-2 Klasse B",
        einsatz: "Outdoor, auch Indoor",
      },
      asin: "B00CRBY15K",
      query: "JOOLA Tischtennis Netzgarnitur Libre 31016",
    },
  ],

  comparison: [
    { key: "befestigung", label: "Befestigung" },
    { key: "staerke", label: "Max. Plattenstärke" },
    { key: "material", label: "Material" },
    { key: "norm", label: "Norm" },
    { key: "einsatz", label: "Einsatz" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "bestes-tischtennisnetz-2026-bewertung.svg",
      title: "Die 3 besten Tischtennisnetze 2026",
      alt: "Balkendiagramm: Bewertung der drei besten Tischtennisnetze 2026 in den Kriterien Befestigung und Passform, Höhe, Spannung und Norm, Wetterfestigkeit sowie Handhabung und Verarbeitung",
      caption: "Unsere Bewertung je Kriterium: JOOLA WX überzeugt in der Summe, Donic-Schildkröt Party bei der Passform, JOOLA Libre bei der Wetterfestigkeit.",
    },
    steps: {
      kind: "steps",
      file: "tischtennisnetz-montieren-anleitung.svg",
      title: "Netzgarnitur richtig montieren",
      subtitle: "Sitz, Höhe und Spannung",
      alt: "Infografik: Netzgarnitur richtig montieren – Plattenstärke messen, mittig ansetzen, festklemmen, Höhe einstellen, Netz spannen, abnehmen und verstauen",
      caption: "Regelhöhe: Die Netzoberkante liegt 15,25 cm über der Spielfläche (ITTF-Regel 2.2.3).",
      steps: [
        { title: "Plattenstärke messen", text: "Prüfen, ob die Klemmen zur Dicke und zum Kantenprofil der Platte passen." },
        { title: "Mittig ansetzen", text: "Die Pfosten genau auf Höhe der Mittellinie an beiden Seiten der Platte anbringen." },
        { title: "Festklemmen", text: "Klemmen oder Schrauben gleichmäßig anziehen, aber nicht überdrehen." },
        { title: "Höhe einstellen", text: "Netzoberkante auf 15,25 cm bringen – an beiden Pfosten und in der Mitte nachmessen." },
        { title: "Netz spannen", text: "Spannband straffen, bis das Netz gerade hängt und unten nah an der Platte abschließt." },
        { title: "Abnehmen und verstauen", text: "Vor dem Hochklappen oder bei Nässe draußen abbauen bzw. nach Herstellerangabe mitklappen." },
      ],
    },
  },

  editorial: {
    title: "Passt, hält, spannt: was ein gutes Tischtennisnetz ausmacht",
    intro:
      "Warum die Plattenkante wichtiger ist als die Marke, was Schraub- und Klemmgarnituren unterscheidet und welches Material draußen durchhält.",
    sections: [
      {
        id: "bestes-tischtennisnetz",
        h2: "Welches Tischtennisnetz ist das beste?",
        blocks: [
          { quick: "Für die meisten ist die [JOOLA WX Aluminium](produkt:1) nach unserer Einschätzung die beste Netzgarnitur: rostfreier Alurahmen, feine Höhenverstellung, drinnen wie draußen nutzbar. Wer eine dicke Plattenkante oder ein kleines Budget hat, nimmt die [Donic-Schildkröt Party](produkt:2); wer das Netz ganzjährig draußen lässt, die [JOOLA Libre](produkt:3) aus Polymer." },
          { first: "Ein Tischtennisnetz sieht unspektakulär aus, aber es entscheidet mit darüber, ob ein Ballwechsel fair ist. Hängt es durch, rutschen Bälle knapp drüber, die eigentlich ins Netz gehören; sitzt die Klemme locker, wandert der Pfosten nach ein paar harten Schmetterbällen zur Seite. Und draußen zeigt sich schnell, ob die Garnitur für Regen gebaut ist: Stahlschrauben rosten fest, Baumwollnetze werden schwer und schlaff." },
          { p: "Die Frage nach dem „besten“ Netz hat deshalb keine Antwort ohne deine Platte. Der wichtigste Wert ist die **maximale Plattenstärke**, die eine Garnitur greifen kann – sie reicht in unserer Auswahl, wo angegeben, laut Hersteller- und Händlerangaben von rund 3,8 cm bis 6,5 cm. Danach kommen Material (Aluminium und Polymer für draußen, Stahl und Baumwolle eher für drinnen) und die Frage, wie präzise sich Höhe und Spannung einstellen lassen." },
          { figure: "scores" },
          { p: "Die [JOOLA WX Aluminium](produkt:1) gewinnt bei uns, weil sie in keinem Kriterium deutlich abfällt: Der eloxierte Rahmen ist laut Hersteller wetterfest, die Höhenverstellschraube erlaubt eine genaue Einstellung, und die gepolsterten Klemmen schonen die Plattenkante. Ihre Klemmweite liegt laut einem US-Händlerportal bei rund 3,8 cm (1,5 Zoll) – JOOLA Deutschland nennt dazu keinen Wert, deshalb gilt: vor dem Kauf die Kante messen. Die [Donic-Schildkröt Party](produkt:2) ist das Gegenteil eines Präzisionsnetzes, passt aber laut Hersteller an Platten bis 6,5 cm und ist damit der unkomplizierteste Ersatz. Die [JOOLA Libre](produkt:3) setzt komplett auf Polymer und ist nach unserer Einschätzung die beste Wahl, wenn das Netz an einer Outdoor-Platte ganzjährig montiert bleiben soll." },
          { quote: "Erst die Plattenkante messen, dann das Netz kaufen – das erspart die meisten Rücksendungen." },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf eines Tischtennisnetzes achten?",
        blocks: [
          { quick: "Entscheidend sind fünf Punkte: Die Klemmweite muss zur Plattenstärke passen, die Höhe muss sich auf 15,25 cm einstellen lassen, das Netz muss straff spannbar sein, das Material muss zum Einsatzort passen – und die Normklasse zum Anspruch." },
          {
            table: {
              caption: "Schraub-, Klemm- und ausziehbare Netze im Vergleich",
              head: ["Bauart", "Stärken", "Schwächen"],
              rows: [
                ["**Schraubgarnitur**", "Sehr fester Halt, oft große Klemmweite, verrutscht kaum", "Montage dauert länger, Schraube kann draußen festrosten (bei Stahl)"],
                ["**Klemm-/Clipgarnitur**", "Schnell ohne Werkzeug an- und abgebaut, ideal für Klappplatten", "Kunststoffklemmen weniger steif, oft kleinere Klemmweite"],
                ["**Ausziehbares Netz**", "Passt an Esstisch, Gartentisch und Mini-Platten, kompakt verstaut", "Spannt meist weniger straff, nicht für Turniermaß gedacht"],
                ["**Fest montiertes Metallnetz**", "Für Betonplatten, vandalismusfest", "Dauerhaft montiert, nur für Beton-/Stationärplatten"],
              ],
            },
          },
          { h3: "Plattenstärke und Kantenprofil" },
          { p: "Indoor-Platten aus Holz sind in der Regel dicker als die dünnen Melaminharz-Deckplatten vieler Outdoor-Tische – bei Outdoor-Modellen kommt aber oft ein umlaufender Rahmen dazu, der die Kante deutlich dicker macht. Miss deshalb dort, wo die Klemme sitzen soll: an der Seitenkante auf Höhe der Mittellinie, inklusive Rahmen. Ein abgerundetes oder abgeschrägtes Kantenprofil kann den Halt verschlechtern; Garnituren mit gepolsterten Klemmen verzeihen hier mehr. Für die dicken Kanten von Beton- und Steinplatten sind Klemmgarnituren aus Kunststoff laut Käuferberichten oft nicht geeignet – dafür gibt es eigene Metallnetze, die wir auf der Seite [Tischtennisplatten](/tischtennisplatten/#top5-beton-indoor) vorstellen." },
          { h3: "Höhe, Spannung und Norm" },
          { p: "Die Oberkante des Netzes muss nach den Regeln des Weltverbands ITTF auf ganzer Länge 15,25 cm über der Spielfläche liegen; auch die Pfosten sind 15,25 cm hoch und stehen 15,25 cm außerhalb der Seitenlinie (ITTF-Regeln 2.2.2 und 2.2.3). Eine Höhenverstellschraube hilft, das genau einzustellen. Ob ein Netz für Wettkampf, Schule oder Freizeit gedacht ist, zeigt die Normklasse nach **EN 14468-2**: Klasse A steht für Hochleistungssport, B für Schul- und Vereinssport, C für Freizeit. Viele Garnituren erfüllen laut Herstellerangaben nur Klasse C – für das Spiel zu Hause reicht das, für Punktspiele verlangen die Verbände je nach Spielklasse ein Netz der Klasse A bzw. mit ITTF-Zulassung." },
          { h3: "Material und Wetterfestigkeit" },
          { p: "Für Platten im Garten zählen rostfreie Pfosten und ein Netz, das sich nicht vollsaugt. Eloxiertes Aluminium und Kunststoff bzw. Polymer halten Feuchtigkeit gut aus, Nylonnetze trocknen schnell. Baumwollnetze und verchromter oder lackierter Stahl gehören eher in Keller und Hobbyraum. Manche Indoor-Garnituren sind ausdrücklich nicht für draußen freigegeben – JOOLA etwa nennt sein Modell Snapper-Indoor laut Hersteller nicht für den Außeneinsatz geeignet. Wer eine Outdoor-Platte im Winter abdeckt, sollte das Netz ohnehin abnehmen oder nach Herstellerangabe mitklappen; passende Hüllen findest du unter [Abdeckhüllen für Tischtennisplatten](/beste-tischtennisplatten-abdeckhuelle/)." },
        ],
      },
      {
        id: "welches-netz-passt",
        h2: "Welches Tischtennisnetz passt zu wem?",
        blocks: [
          { quick: "Wer drinnen und draußen spielt, nimmt eine Aluminium-Garnitur; wer eine dicke oder unbekannte Plattenkante hat, eine Schraubgarnitur mit großer Klemmweite; wer das Netz ganzjährig draußen lässt, eine Polymer-Garnitur; wer am Esstisch spielt, ein ausziehbares Netz." },
          {
            cards: [
              { title: "Keller und Garten", text: "Alu-Rahmen, feine Höhenverstellung: JOOLA WX Aluminium.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Dicke Kante, kleines Budget", text: "Schraubgarnitur bis 6,5 cm laut Hersteller: Donic-Schildkröt Party.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Platte bleibt draußen", text: "Komplett aus Polymer, Normklasse B: JOOLA Libre.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Esstisch und Mini-Platte", text: "Ausziehbare Netze passen an fast jeden Tisch.", link: { href: "#top5-nach-tisch", label: "Zur Top 5" } },
              { title: "Betonplatte", text: "Fest montierte Metallnetze stellen wir bei den Platten vor.", link: { href: "/tischtennisplatten/#top5-beton-indoor", label: "Tischtennisplatten" } },
              { title: "Komplett ausstatten", text: "Schläger und Bälle für die ganze Familie im Set.", link: { href: "/bestes-tischtennis-set/", label: "Tischtennis-Sets" } },
            ],
          },
          { p: "Ein typisches Szenario: Die Outdoor-Platte im Garten ist zehn Jahre alt, das Original-Netz ist mürbe, und die Herstellerangaben zur Platte findet niemand mehr. Hier ist eine Garnitur mit großer Klemmweite wie die [Donic-Schildkröt Party](produkt:2) die pragmatischste Lösung. Steht dagegen eine neue Indoor-Platte im Keller und soll im Sommer auch mal auf die Terrasse, spielt die [JOOLA WX Aluminium](produkt:1) ihre Stärke aus – vorausgesetzt, die Kante ist nicht dicker als die angegebene Klemmweite. Familien, die die Platte von Frühjahr bis Herbst draußen stehen lassen und das Netz nicht jedes Mal abbauen wollen, sind mit der [JOOLA Libre](produkt:3) am besten bedient." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-nach-tisch",
    h2: "Die 5 besten Tischtennisnetze nach Tisch und Einsatzort",
    intro:
      "Nicht jede Platte braucht dieselbe Garnitur. Diese fünf Netze lösen konkrete Fälle: Esstisch, häufiges Klappen, dicke Outdoor-Platte, Vereinstraining und reiner Netztausch.",
    items: [
      { name: "Donic-Schildkröt FLEXnet Tischtennisnetz (808334)", for: "Esstisch & Mini-Platte", text: "Ausziehbares, selbstspannendes Nylonnetz mit Aufrollmechanismus in den Kunststoffpfosten, für Tische bis ca. 175 cm Breite und 4,0 cm Stärke, mit Reißverschlusstasche (Herstellerangabe).", asin: "B0753JVFLT", query: "Donic-Schildkröt FLEXnet Tischtennisnetz 808334" },
      { name: "Donic-Schildkröt Tischtennisnetz Clipmatic (808335)", for: "Ohne Werkzeug, oft geklappt", text: "Clip-Befestigung wie eine Leimzwinge mit Gummipads statt Schrauben, klappbare Metallpfosten, wetterfestes Nylonnetz, Plattenstärke bis 4,0 cm (Herstellerangabe).", asin: "B000JKVE4C", query: "Donic-Schildkröt Clipmatic Tischtennisnetz 808335" },
      { name: "Donic-Schildkröt Tischtennisnetz Team (808311)", for: "Dicke Outdoor-Platte", text: "Klappbare Netzgarnitur mit Metallrahmen, wetterfestem Nylonnetz und Spannschnur, Schraubmechanismus für bis zu 6,0 cm Plattenstärke (Herstellerangabe).", asin: "B08MKNDQ1Q", query: "Donic-Schildkröt Tischtennisnetz Team 808311" },
      { name: "JOOLA Tischtennisnetz WM Ultra (31035)", for: "Vereinsniveau im Keller", text: "Laut Hersteller ITTF-zugelassen, Norm EN 14468-2 Klasse A, verstärkter Metallkörper, Mikro-Höhenverstellung und große 14-mm-Befestigungsschraube – als Indoor-Set gelistet, nicht für draußen.", asin: "B00LX1KBZ4", query: "JOOLA Tischtennisnetz WM Ultra 31035" },
      { name: "Kettler Tischtennisnetz Nylon für drinnen und draußen", for: "Nur das Netz tauschen", text: "Ersatznetz ohne Pfosten aus Nylon, laut Händler passend für Kettler-Tischtennisplatten; Pfosten separat erhältlich. Laut einer Rezension fehlen Netzspanner – vorher prüfen, ob die alten noch vorhanden sind.", asin: "B000FYXZNK", query: "Kettler Tischtennisnetz Nylon Drinnen Draußen" },
    ],
  },

  guide: {
    sections: [
      {
        id: "netz-montieren",
        h2: "Wie montiert man ein Tischtennisnetz richtig?",
        blocks: [
          { quick: "Pfosten mittig an beiden Seitenkanten ansetzen, Klemmen gleichmäßig anziehen, Netzoberkante auf 15,25 cm einstellen und an beiden Pfosten sowie in der Mitte nachmessen, dann das Netz straff spannen." },
          { p: "Die meisten Probleme mit neuen Netzen entstehen nicht durch das Produkt, sondern durch die Montage: Eine schief angesetzte Klemme zieht das Netz aus der Mittellinie, eine zu fest angezogene Schraube kann die Plattenkante eindrücken oder ein Kunststoffgewinde beschädigen. Gehe deshalb in Ruhe vor und ziehe beide Seiten abwechselnd an." },
          { figure: "steps" },
          { h3: "Höhe und Spannung prüfen" },
          { p: "Zum Nachmessen genügt ein Zollstock: an beiden Pfosten und in der Netzmitte jeweils von der Spielfläche bis zur Oberkante. Hängt das Netz in der Mitte durch, ist die Spannschnur zu locker. Unten soll das Netz möglichst nah an der Platte abschließen, damit kein Ball darunter durchrollt. Spannschnüre und Gummis altern, besonders draußen – kontrolliere sie zu Saisonbeginn und tausche sie, bevor sie reißen." },
          { h3: "Pflege und Lagerung" },
          { p: "Nach Regen das Netz trocknen lassen, bevor du es zusammenlegst, sonst können sich Stockflecken bilden. Schrauben aus Stahl gelegentlich gangbar halten. Im Winter Netz und Pfosten am besten trocken lagern – auch bei wetterfesten Garnituren verlängert das die Lebensdauer von Spannschnur und Klemmen." },
          { callout: { title: "Sicherheit", warn: true, text: "Beim Klappen einer Platte mit montiertem Netz können sich Pfosten verkanten oder Finger zwischen Klemme und Platte geraten. Netze, die nicht ausdrücklich zum Mitklappen freigegeben sind, vorher abnehmen. Kleinteile wie Schrauben und Klemmen von kleinen Kindern fernhalten und die Montagehinweise des Herstellers beachten." } },
          {
            facts: [
              { value: "15,25 cm", label: "Netzhöhe über der Spielfläche (ITTF-Regel 2.2.3)" },
              { value: "183 cm", label: "Netzlänge üblicher Garnituren" },
              { value: "3,8–6,5 cm", label: "Klemmweiten in unserer Auswahl (wo angegeben)" },
            ],
          },
        ],
      },
    ],
  },

  faqs: [
    { q: "Wie hoch muss ein Tischtennisnetz sein?", a: "15,25 cm. Die Netzoberkante muss nach ITTF-Regel 2.2.3 auf ganzer Länge 15,25 cm über der Spielfläche liegen; die Pfosten sind ebenfalls 15,25 cm hoch und stehen 15,25 cm außerhalb der Seitenlinie." },
    { q: "Passt jedes Tischtennisnetz auf jede Platte?", a: "Nein. Jede Garnitur hat eine maximale Klemmweite – in unserer Auswahl reicht sie, wo angegeben, laut Hersteller- und Händlerangaben von rund 3,8 bis 6,5 cm. Miss die Plattenkante an der Mittellinie inklusive Rahmen, bevor du bestellst. Für Betonplatten gibt es eigene, fest montierte Metallnetze." },
    { q: "Schraub- oder Klemmbefestigung – was ist besser?", a: "Für eine Platte, die selten geklappt wird, ist eine Schraubgarnitur meist besser, weil sie fester sitzt und oft dickere Kanten greift. Wird die Platte häufig geklappt oder weggeräumt, ist eine Klemm- oder Clipgarnitur praktischer, weil sie ohne Werkzeug in Sekunden ab ist." },
    { q: "Kann ein Tischtennisnetz draußen bleiben?", a: "Nur, wenn Netz und Pfosten dafür gemacht sind. Garnituren aus Polymer wie die JOOLA Libre sind laut Hersteller für den ganzjährigen Außeneinsatz gedacht; Aluminium und Nylon vertragen Regen gut. Baumwollnetze – auch an Alu-Garnituren wie der JOOLA WX – und Stahl gehören nach dem Spielen nach drinnen." },
    { q: "Funktioniert ein ausziehbares Netz auf dem Esstisch?", a: "Ja, für das Freizeitspiel. Ausziehbare Netze wie das Donic-Schildkröt FLEXnet passen laut Hersteller an Tische bis ca. 175 cm Breite und 4 cm Stärke. Sie spannen meist weniger straff als feste Garnituren; Klemmen mit Gummipads schützen die Tischplatte vor Kratzern." },
    { q: "Wie spannt man ein Tischtennisnetz richtig?", a: "Über die Spannschnur oder das Spannband am Pfosten, bis das Netz gerade hängt und die Oberkante an beiden Pfosten und in der Mitte 15,25 cm erreicht. Danach die Höhe noch einmal nachmessen, weil sich das Netz beim Spannen leicht hebt." },
    { q: "Kann man nur das Netz ohne Pfosten tauschen?", a: "Ja, wenn die Pfosten intakt sind. Viele Hersteller bieten Ersatznetze an, etwa Kettler für die eigenen Platten. Prüfe, ob Länge, Befestigungsart und Spanner zu den vorhandenen Pfosten passen – sonst ist eine komplette Garnitur oft die einfachere Lösung." },
  ],

  sources: [
    { label: "Table Tennis England: Laws of Table Tennis 2026/27 (übernimmt die ITTF-Regeln, Regel 2.2)", url: "https://www.tabletennisengland.co.uk/content/uploads/2026/07/Laws-of-Table-Tennis-2026-27.pdf" },
    { label: "JOOLA: Net WX Aluminum (Herstellerseite)", url: "https://joola.de/en/products/joola-net-wx-aluminum" },
    { label: "JOOLA: Net Libre (Herstellerseite)", url: "https://joola.de/en/products/joola-net-libre" },
    { label: "JOOLA: Netz WM Ultra (Herstellerseite)", url: "https://joola.de/en/products/joola-netz-wm-ultra" },
    { label: "RevSpin: JOOLA WX Aluminum (Klemmweite)", url: "https://revspin.net/net/joola-wx-aluminum.html" },
  ],

  related: [
    { slug: "tischtennisplatten", text: "Outdoor-, Beton- und Indoor-Platten – inklusive Metallnetz für Betonplatten." },
    { slug: "beste-tischtennisplatten-abdeckhuelle", text: "Abdeckhüllen, die die Outdoor-Platte über den Winter schützen." },
    { slug: "bestes-tischtennis-set", text: "Schläger und Bälle im Set für die ganze Familie." },
    { slug: "bestes-pickleball-netz", text: "Netze für Pickleball – größer und mit eigenen Regelmaßen." },
    { area: "tischtennis", text: "Alle Ratgeber für Tischtennis zu Hause." },
  ],
};
