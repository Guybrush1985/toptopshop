// Kategorie: Schutzraum-Anbieter & Ausrüstung (Krisenvorsorge › Schutzraum & Ausstattung)
// Aufbau siehe src/content/README.md (Content-Modell).
// Hinweis: Schutzraum-Anbieter sind weder bei Amazon noch bei Awin vertreten. Sie stehen deshalb
// in der Top 5 als Übersicht ohne Affiliate-Link (where); die Top 3 sind Ausrüstung für jeden Schutzraum.

export default {
  slug: "schutzraum-anbieter",
  area: "krisenvorsorge",
  group: "schutzraum-ausstattung",
  navLabel: "Schutzraum & Bunker",
  published: "2026-10-07",
  updated: "2026-10-07",

  metaTitle: "Schutzraum & Bunker 2026: Anbieter, Lage und Ausrüstung",
  metaDescription:
    "Schutzraum nachrüsten oder Fertigbunker kaufen? Stand des Schutzraumkonzepts, Anbieter im Überblick und die 3 wichtigsten Geräte für jeden Schutzraum.",

  eyebrow: "Krisenvorsorge · Schutzraum & Ausstattung",
  h1: "Schutzraum und Bunker 2026: Anbieter, Lage und Ausrüstung",
  lead:
    "Öffentliche Schutzräume gibt es in Deutschland kaum noch – der Bund arbeitet an einem neuen, dezentralen Konzept. Wer selbst vorsorgen will, kann einen Keller nachrüsten lassen oder einen Fertigbunker kaufen. Hier findest du die Lage, die Anbieter und die Geräte, die in jeden Schutzraum gehören.",
  answer:
    "Für jeden Schutz- oder Kellerraum empfehlen wir zuerst ein CO₂-Messgerät wie das [**Aranet4 Home**](produkt:1), denn in einem geschlossenen Raum kann die Luft schnell schlecht werden. Für mehrere Tage im Keller braucht jede Person einen Schlafplatz, etwa das [**tectake XL Feldbett**](produkt:2); wer die Strahlung selbst einschätzen will, nutzt ein Messgerät wie den [**RadiaCode 102**](produkt:3). Anbieter für Nachrüstung und Fertigbunker stellen wir weiter unten ohne Werbelink vor.",

  top3Title: "Unsere Top 3 für jeden Schutzraum",
  top3Intro:
    "Schutzräume selbst lassen sich nicht online bestellen. Diese drei Geräte können aber jeden Keller oder Schutzraum sicherer und bewohnbarer machen – unabhängig davon, ob er nachgerüstet ist.",
  comparisonTitle: "CO₂-Messgerät, Feldbett und Strahlungsmessgerät im Vergleich",

  criteria: [
    { key: "nutzen", label: "Nutzen im Schutzraum", weight: 0.35, description: "Wie sehr das Gerät Sicherheit und Aufenthalt über mehrere Tage verbessert." },
    { key: "bedienung", label: "Bedienung", weight: 0.2, description: "Wie einfach die Nutzung für Laien ist." },
    { key: "autark", label: "Unabhängigkeit", weight: 0.2, description: "Funktion ohne Netz, Strom und Internet; Batterie- oder Akkulaufzeit." },
    { key: "preis", label: "Preis-Leistung", weight: 0.25, description: "Preis im Verhältnis zum Nutzen." },
  ],

  method:
    "Grundlage sind Berichte zum Schutzraumkonzept des Bundes (u. a. Behörden Spiegel, ZDFheute, Euronews, Bundestag 2026), die Empfehlungen der Strahlenschutzkommission zu Schutzstrategien, die Verhaltenshinweise des BBK sowie Herstellerangaben. Anbieter für Schutzraumbau haben wir nicht geprüft; wir nennen sie als Übersicht ohne Provision und ohne Qualitätsaussage. Eigene Tests der Geräte führen wir nicht durch; die Bewertungen sind redaktionelle Einschätzungen. Die Geräte der Top 3 sind bei Amazon erhältlich und werden in vier Kriterien von 0 bis 10 eingeordnet; die Gesamtnote ist der gewichtete Mittelwert.",

  products: [
    {
      rank: 1,
      label: "Wichtigstes Gerät",
      name: "Aranet4 Home CO₂-Messgerät",
      brand: "Aranet",
      variant: "NDIR-Sensor, E-Ink, Batterie",
      visual: { kind: "device", tone: "forest" },
      priceTier: 2,
      ratings: { nutzen: 9.0, bedienung: 9.0, autark: 9.0, preis: 6.5 },
      bestFor: "Jeden geschlossenen Raum",
      verdict:
        "In einem geschlossenen Raum steigt der CO₂-Gehalt mit jeder Person. Das Aranet4 zeigt ihn laut Hersteller mit einem NDIR-Sensor auf einem stromsparenden E-Ink-Display an – und warnt per Ampel, wenn gelüftet werden sollte. Laut Hersteller läuft es mit Batterien über lange Zeit.",
      features: [
        "NDIR-Sensor für CO₂, dazu Temperatur, Luftfeuchte und Luftdruck (Herstellerangabe)",
        "Ampelanzeige: grün unter 1.000 ppm, gelb bis 1.400 ppm, rot darüber; optionaler Summer (Herstellerangabe)",
        "E-Ink-Display, Batteriebetrieb, App per Bluetooth (Herstellerangaben)",
      ],
      pros: ["Zeigt, wann Frischluft nötig ist", "Unabhängig von Strom und Netz", "NDIR-Sensor (laut Hersteller präzise)"],
      cons: ["Teurer als einfache CO₂-Ampeln", "Warnt nicht vor Kohlenmonoxid", "Alarmschwellen laut Nutzern nicht frei einstellbar"],
      specs: { aufgabe: "Luftqualität (CO₂) überwachen", energie: "Batterie, mehrjährig", anzeige: "E-Ink, Ampel", wichtig: "kein CO-Melder", alternative: "einfache CO₂-Ampel" },
      asin: "B07KYPL2K3",
      query: "Aranet4 Home CO2 Messgerät",
    },
    {
      rank: 2,
      label: "Schlafplatz",
      name: "tectake XL Aluminium-Feldbett",
      brand: "tectake",
      variant: "190 × 70 cm, bis 150 kg",
      visual: { kind: "pack", tone: "mint" },
      priceTier: 1,
      ratings: { nutzen: 7.0, bedienung: 8.5, autark: 9.0, preis: 9.0 },
      bestFor: "Mehrere Tage im Keller",
      verdict:
        "Wer mehrere Tage im Keller verbringt, braucht einen Schlafplatz über dem kalten Boden. Das Feldbett ist in Minuten aufgebaut, laut Anbieter bis 150 kg belastbar und lässt sich mit Transporttasche platzsparend lagern.",
      features: [
        "Aluminiumgestell, Maße ca. 190 × 70 × 45 cm, Liegefläche 190 × 60 cm (Anbieterangabe)",
        "Belastbar bis 150 kg laut Anbieter, rund 4,5 kg leicht",
        "Mit Transporttasche – lagert flach im Keller",
      ],
      pros: ["Günstig", "Schnell aufgebaut", "Hält Abstand zum kalten Boden"],
      cons: ["Stabilität laut Nutzern unterschiedlich", "Ohne Isomatte im Winter kühl", "Ein Bett pro Person nötig"],
      specs: { aufgabe: "Schlafen über dem Boden", energie: "keine", anzeige: "–", wichtig: "Isomatte und Schlafsack dazu", alternative: "Isomatte" },
      asin: "B00N1RC5FM",
      query: "tectake XL Aluminium Feldbett 150 kg",
    },
    {
      rank: 3,
      label: "Strahlung messen",
      name: "RadiaCode 102",
      brand: "RadiaCode",
      variant: "Szintillationsdetektor mit App",
      visual: { kind: "handheld", tone: "green" },
      priceTier: 3,
      ratings: { nutzen: 7.5, bedienung: 7.0, autark: 7.0, preis: 6.0 },
      bestFor: "Wer Strahlung selbst einschätzen will",
      verdict:
        "Ein Gamma-Messgerät mit Szintillationskristall, das laut Anbieter Dosisleistung und Spektrum anzeigt und bei einstellbaren Schwellen alarmiert. Es ist kein geeichtes Messgerät für amtliche Zwecke. Für die Einschätzung der Lage zählen aber vor allem die amtlichen Messwerte und Behördenhinweise.",
      features: [
        "Szintillationskristall mit Halbleiter-Photomultiplier, misst Zählrate und Dosisleistung (Anbieterangaben)",
        "Energiespektrum und Alarm bei einstellbaren Schwellen, App per Bluetooth (Anbieterangaben)",
        "Laut Nutzerberichten bei Gamma deutlich empfindlicher als Geiger-Müller-Zählrohre, bei Alpha und Beta weniger",
      ],
      pros: ["Laut Nutzerberichten empfindlich für Gammastrahlung", "Kompakt", "Alarmfunktion"],
      cons: ["Ersetzt keine amtlichen Messungen", "Erklärungsbedürftige Messwerte", "Teuer"],
      specs: { aufgabe: "Gamma-Dosisleistung messen", energie: "Akku", anzeige: "Display + App", wichtig: "amtliche Werte haben Vorrang", alternative: "BfS-Messnetz online" },
      asin: "B0CBQKND5W",
      query: "RadiaCode 102 Geigerzähler",
    },
  ],

  comparison: [
    { key: "aufgabe", label: "Aufgabe" },
    { key: "energie", label: "Energie" },
    { key: "anzeige", label: "Anzeige" },
    { key: "wichtig", label: "Wichtig" },
    { key: "alternative", label: "Alternative" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "schutzraum-ausruestung-co2-strahlung-bewertung-vergleich.svg",
      title: "Ausrüstung für jeden Schutzraum",
      alt: "Balkendiagramm: Bewertung von CO2-Messgerät, Feldbett und Strahlungsmessgerät in den Kriterien Nutzen, Bedienung, Unabhängigkeit und Preis",
      caption: "Unsere Bewertung je Kriterium. Das CO₂-Messgerät ist für jeden geschlossenen Raum das wichtigste Gerät.",
    },
    steps: {
      kind: "steps",
      file: "keller-als-schutzraum-vorbereiten-anleitung.svg",
      title: "Den Keller als Schutzraum vorbereiten",
      subtitle: "Ohne Umbau – mit dem, was jeder tun kann",
      alt: "Infografik: Keller als Schutzraum vorbereiten – Raum wählen, Fluchtweg prüfen, Lüftung planen, Vorrat und Ausrüstung lagern, regelmäßig prüfen",
      caption: "Ein vorbereiteter Raum mit zweitem Ausgang, Luft, Licht, Wasser und Vorrat ist mehr wert als ein ungeplanter Bunker.",
      steps: [
        { title: "Raum wählen", text: "Möglichst innen, unter der Erde, mit dicken Wänden und wenig Fenstern." },
        { title: "Zweiten Ausgang prüfen", text: "Notausstieg oder zweiter Weg – und frei von Gerümpel." },
        { title: "Lüftung planen", text: "Wie kommt Frischluft herein? CO₂-Messgerät aufstellen." },
        { title: "Ausrüstung lagern", text: "Wasser, Vorrat, Licht, Radio, Toilette, Erste Hilfe, Schlafplätze." },
        { title: "Regelmäßig prüfen", text: "Einmal im Jahr Vorräte, Batterien und Feuchtigkeit kontrollieren." },
      ],
    },
  },

  editorial: {
    title: "Schutzräume in Deutschland: Lage, Möglichkeiten, Grenzen",
    intro:
      "Wie es um öffentliche Schutzräume steht, was das neue Schutzraumkonzept vorsieht und wann sich ein privater Schutzraum lohnt.",
    sections: [
      {
        id: "lage-deutschland",
        h2: "Gibt es in Deutschland noch Schutzräume?",
        blocks: [
          { quick: "Kaum noch nutzbare. Von rund 2.000 öffentlichen Anlagen aus dem Kalten Krieg sind laut BBK knapp 580 übrig, und nach Medienberichten von 2026 ist keine davon voll einsatzfähig. Der Bund arbeitet seit 2024 an einem dezentralen Schutzraumkonzept. Für jeden Keller gilt: Ein [CO₂-Messgerät](produkt:1), [Schlafplätze](produkt:2) und – wer möchte – ein [Strahlungsmessgerät](produkt:3) gehören dazu." },
          { first: "Nach dem Ende des Kalten Krieges wurden die meisten öffentlichen Schutzräume in Deutschland aufgegeben. Laut BBK sind von einst rund 2.000 Anlagen knapp 580 übrig; Medien berichteten 2026, dass keine davon heute voll einsatzbereit ist. Seit Mai 2024 erarbeitet das BBK ein neues Schutzraumkonzept. Es setzt auf viele dezentrale Zufluchtsorte – öffentliche und private Gebäude, Tiefgaragen, U-Bahnhöfe, Keller –, weil bei kurzen Vorwarnzeiten kaum jemand einen zentralen Bunker rechtzeitig erreichen würde." },
          { p: "Für 2026 ist laut Berichten ein Pilotprogramm vorgesehen, mit dem Kommunen zunächst eine Million Schutzplätze einfach ausstatten sollen – mit Feldbetten, mobilen Sanitäranlagen, Wasser und Lebensmitteln. Förderprogramme für private Schutzräume gibt es nach unserem Kenntnisstand (Oktober 2026) bisher nicht. Das heißt: Der eigene Keller oder ein innenliegender Raum ist für die meisten Menschen die realistische Option." },
          { p: "Die Strahlenschutzkommission betont in ihren Empfehlungen zu Schutzstrategien, dass der Aufenthalt in Gebäuden – möglichst im Keller oder in der Gebäudemitte – die wichtigste Schutzmaßnahme bei radioaktiver Freisetzung ist. Auch bei Gefahrstoffen, Unwettern oder Unruhen kann ein vorbereiteter Raum schützen. Dafür braucht es keinen Bunker, wohl aber Planung." },
          { figure: "scores" },
          { callout: { title: "Lebensgefahr durch schlechte Luft", warn: true, text: "In einem dicht verschlossenen Raum steigt der CO₂-Gehalt schnell, besonders mit mehreren Personen. Kopfschmerzen, Müdigkeit und Atemnot sind Warnzeichen. Ab einer anhaltend roten Anzeige des CO₂-Messgeräts frische Luft zuführen – sofern Behörden keine anderen Anweisungen geben. Verbrennungsgeräte (Kocher, Generatoren) haben in Schutzräumen nichts verloren." } },
        ],
      },
      {
        id: "privater-schutzraum",
        h2: "Lohnt sich ein privater Schutzraum – und worauf kommt es an?",
        blocks: [
          { quick: "Ein professionell nachgerüsteter Schutzraum mit Filteranlage kostet je nach Größe als grobe Orientierung schnell einen fünfstelligen Betrag oder mehr und braucht Statik, Planung und – je nach Bundesland und Vorhaben – oft eine Baugenehmigung. Für die meisten ist ein gut vorbereiteter Keller die sinnvollere Investition." },
          {
            table: {
              caption: "Optionen für den Schutz im eigenen Haus",
              head: ["Option", "Schutz", "Aufwand"],
              rows: [
                ["**Innenraum vorbereiten**", "Grundschutz bei Gefahrstoffen und Strahlung", "gering"],
                ["**Keller ausstatten**", "Besserer Strahlen- und Splitterschutz", "gering bis mittel"],
                ["**Keller nachrüsten (Filter, Türen, Statik)**", "je nach Ausführung, angelehnt an Schutzraum-Normen", "hoch, Fachfirma"],
                ["**Fertigbunker / Fertigkeller-Schutzraum**", "hoher Schutz, je nach Ausführung", "sehr hoch, Neubau"],
              ],
            },
          },
          { h3: "Nachrüstung: Was dazugehört" },
          { p: "Eine Nachrüstung umfasst nach Angaben von Anbietern bauliche Verstärkungen, druckfeste Türen, eine Schutzraumbelüftung mit ABC-Filter (NBC-Filter) und Notausstiege. Die Belüftung sollte auch ohne Strom funktionieren – viele Geräte lassen sich laut Anbietern per Handkurbel betreiben. In der Schweiz, wo grundsätzlich seit Jahrzehnten eine Schutzraumpflicht gilt, gibt es dafür etablierte Komponenten und Normen." },
          { h3: "Vor dem Auftrag" },
          {
            list: [
              "**Statik prüfen lassen** – durch einen unabhängigen Tragwerksplaner.",
              "**Baurecht klären** – beim Bauamt fragen, ob eine Genehmigung nötig ist; die Regeln unterscheiden sich je nach Bundesland und Gemeinde.",
              "**Mehrere Angebote** einholen und Referenzen besichtigen.",
              "**Wartung einplanen** – Filter und Lüftung müssen regelmäßig geprüft werden.",
              "**Realistisch bleiben** – kein Schutzraum hilft ohne Wasser, Vorrat, Luft und Plan.",
            ],
          },
          { callout: { title: "Bauliche Eingriffe nur mit Fachleuten", warn: true, text: "Durchbrüche, Notausstiege, schwere Türen und Lüftungsanlagen greifen in Statik, Brandschutz und Abdichtung des Gebäudes ein. Solche Arbeiten nur nach Planung durch Tragwerksplaner und Fachfirma ausführen lassen und vorab klären, ob eine Baugenehmigung nötig ist. In Eigentümergemeinschaften braucht es in der Regel einen Beschluss, in Mietwohnungen die Zustimmung des Vermieters. Unsere Hinweise sind keine Rechts- oder Bauberatung." } },
        ],
      },
      {
        id: "was-passt",
        h2: "Was passt zu wem?",
        blocks: [
          { quick: "Für fast alle: Keller oder Innenraum vorbereiten und ausstatten. Für Bauherren: Schutzraum im Fertigkeller einplanen. Für Hausbesitzer mit großem Budget: professionelle Nachrüstung nach Beratung." },
          {
            cards: [
              { title: "Luft im Blick", text: "CO₂-Messgerät für jeden geschlossenen Raum: Aranet4.", link: { href: "#platz-1", label: "Zur Empfehlung" } },
              { title: "Schlafen", text: "Feldbett über dem kalten Boden: tectake XL.", link: { href: "#platz-2", label: "Zur Empfehlung" } },
              { title: "Strahlung", text: "Gamma-Messgerät: RadiaCode 102.", link: { href: "#platz-3", label: "Zur Empfehlung" } },
              { title: "Anbieter", text: "Nachrüstung und Fertigbunker im Überblick.", link: { href: "#top5-anbieter", label: "Zur Übersicht" } },
              { title: "Raum abdichten", text: "Folie und Klebeband gegen Außenluft.", link: { href: "/krisenvorsorge/luftfiltration/abdichtung/", label: "Abdichtung" } },
              { title: "Luft filtern", text: "HEPA-Luftreiniger gegen Partikel.", link: { href: "/krisenvorsorge/luftfiltration/luftreiniger-hepa/", label: "Luftreiniger" } },
            ],
          },
        ],
      },
    ],
  },

  top5: {
    id: "top5-anbieter",
    h2: "Anbieter für Schutzraum-Nachrüstung und Fertigbunker im Überblick",
    intro:
      "Diese Unternehmen bieten laut eigenen Angaben Schutzraumbau, Nachrüstung oder Komponenten an. Wir haben ihre Leistungen nicht geprüft und erhalten keine Provision; die Nennung ist keine Empfehlung und keine Bewertung. Die Übersicht soll den Einstieg in die Recherche erleichtern und ist nicht vollständig, Angaben ohne Gewähr (Stand Oktober 2026). Angebote immer individuell einholen und vergleichen.",
    items: [
      { name: "BSSD Defence – Bunker Schutzraum Systeme Deutschland", for: "Nachrüstung & Fertigbunker (DE)", text: "Bietet laut eigener Website die Schutzraum-Nachrüstung „SN“ für bestehende Keller mit baulichen Verstärkungen und NBC-Filteranlage an; Projektanfrage erforderlich.", where: "bunker-bssd.de" },
      { name: "Glatthaar Keller mit BSSD", for: "Schutzraum im Fertigkeller (DE)", text: "Der Fertigkeller-Hersteller bietet laut Anbieterangaben in Zusammenarbeit mit BSSD Keller mit Schutzraum aus Betonfertigteilen an – vor allem für Neubauten relevant.", where: "glatthaar.com" },
      { name: "Deutsches Schutzraum-Zentrum", for: "Beratung & Komponenten (DE)", text: "Laut eigener Website Beratung zum Schutzraumbau, Gutachten zur Reaktivierung bestehender Anlagen und Vertrieb von Schutzraumkomponenten des Schweizer Herstellers Mengeu.", where: "schutzraum-zentrum.de" },
      { name: "KRENN Schutzraumtechnik", for: "Planung & Belüftung (AT)", text: "Laut eigener Website Planung und Errichtung vom Grundschutzraum im Einfamilienhaus bis zu großen Anlagen, dazu Komplettpakete für Schutzraumbelüftung.", where: "schutzraumtechnik-schutzraumbau-krenn.at" },
      { name: "Schutztechnik GmbH", for: "Wartung & Nachrüstung (CH)", text: "Schweizer Betrieb, der laut eigener Website Bau, Nachrüstung und Wartung von Schutzräumen anbietet – interessant für Know-how aus dem Land mit Schutzraumpflicht.", where: "schutztechnik-gmbh.ch" },
    ],
  },

  guide: {
    sections: [
      {
        id: "keller-vorbereiten",
        h2: "Wie bereitet man einen Keller als Schutzraum vor?",
        blocks: [
          { quick: "Wähle einen innenliegenden Kellerraum, sichere einen zweiten Ausgang, plane die Belüftung, lagere Wasser, Vorrat, Licht, Radio, Toilette und Erste Hilfe dort und prüfe alles einmal im Jahr." },
          { p: "Ein Kellerraum bietet durch Erdreich und Mauerwerk in der Regel mehr Schutz als die oberen Etagen – vor Strahlung, Splittern und Druckwellen. Wichtig ist, dass man sich dort einige Tage aufhalten kann: Luft, Licht, Wasser, Toilette, Schlafplatz und Informationen müssen vorhanden sein. Bei Gefahrstoffen gilt allerdings: Viele Gase sind schwerer als Luft – dann sind obere Stockwerke sicherer. Die Anweisungen der Behörden entscheiden." },
          { figure: "steps" },
          { h3: "Checkliste für den Kellerraum" },
          {
            list: [
              "**Wasser:** 2 Liter pro Person und Tag für 10 Tage.",
              "**Vorrat:** Lebensmittel, die ohne Kochen essbar sind.",
              "**Licht und Radio:** Laterne, Stirnlampen, Kurbel- oder Batterieradio.",
              "**Toilette:** Campingtoilette oder Gel-Beutel, Müllbeutel, Desinfektion.",
              "**Erste Hilfe und Medikamente.**",
              "**Schlafen und Wärme:** Feldbetten, Isomatten, Schlafsäcke.",
              "**Luft:** CO₂-Messgerät, Material zum Abdichten, ggf. Luftreiniger mit Powerstation.",
            ],
          },
          {
            facts: [
              { value: "≈ 580", label: "verbliebene öffentliche Schutzräume aus dem Kalten Krieg (BBK)" },
              { value: "1 Mio.", label: "Schutzplätze im geplanten Pilotprogramm für Kommunen (2026)" },
              { value: "1.000 ppm", label: "CO₂-Grenze, ab der das Aranet4 laut Hersteller von Grün auf Gelb wechselt" },
            ],
          },
          { h3: "Informiert bleiben" },
          { p: "Im Keller ist der Radioempfang oft schlecht. Teste den Empfang vorab und lege eine Wurfantenne oder ein Verlängerungskabel bereit. Amtliche Messwerte zur Radioaktivität veröffentlicht das Bundesamt für Strahlenschutz über sein Messnetz – im Ernstfall sind Radio und Behördenhinweise maßgeblich." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Gibt es in Deutschland noch öffentliche Bunker?", a: "Laut BBK sind von einst rund 2.000 öffentlichen Schutzräumen knapp 580 übrig; nach Medienberichten von 2026 ist keiner davon voll einsatzfähig. Der Bund arbeitet an einem dezentralen Schutzraumkonzept mit vielen Zufluchtsorten." },
    { q: "Was kostet ein privater Schutzraum?", a: "Das hängt stark von Größe, Ausstattung und Bauweise ab. Eine professionelle Nachrüstung mit Filteranlage und baulichen Verstärkungen erreicht als grobe Orientierung schnell einen fünfstelligen Betrag oder mehr. Anbieter erstellen individuelle Angebote." },
    { q: "Braucht man für einen Bunker eine Baugenehmigung?", a: "Häufig ja, vor allem bei Neubauten und baulichen Eingriffen in die Statik – die Regeln unterscheiden sich je nach Bundesland, Gemeinde und Vorhaben. Frage vorab beim Bauamt nach und lass die Statik von einem unabhängigen Tragwerksplaner prüfen. Das ist keine Rechtsberatung." },
    { q: "Ist der Keller ein guter Schutzraum?", a: "Bei radioaktiver Freisetzung, Unwettern und Splittergefahr bietet ein Keller deutlich mehr Schutz als obere Etagen. Bei Gasen, die schwerer als Luft sind, können obere Stockwerke sicherer sein. Folge im Ernstfall den Hinweisen der Behörden." },
    { q: "Warum ein CO₂-Messgerät im Schutzraum?", a: "In einem geschlossenen Raum steigt der CO₂-Gehalt mit jeder Person. Ein Messgerät hilft, rechtzeitig zu lüften, bevor Beschwerden wie Kopfschmerzen, Müdigkeit oder Atemnot auftreten. Vor Kohlenmonoxid warnt es nicht – dafür braucht es einen CO-Melder." },
    { q: "Gibt es Förderung für private Schutzräume?", a: "Nach unserem Kenntnisstand (Oktober 2026) nicht. Geplante Programme richten sich an Kommunen. Wer privat vorsorgen will, trägt die Kosten selbst." },
  ],

  sources: [
    { label: "Behörden Spiegel: Dezentrales Schutzraumkonzept in Planung (07/2026)", url: "https://www.behoerden-spiegel.de/2026/07/24/dezentrales-schutzraumkonzept-in-planung/" },
    { label: "ZDFheute: Kein einziger Bunker voll einsatzfähig", url: "https://www.zdfheute.de/politik/deutschland/schutzraeume-deutschland-bbk-konzept-100.html" },
    { label: "Deutscher Bundestag: Zielperspektive für öffentliche Schutzräume", url: "https://www.bundestag.de/presse/hib/kurzmeldungen-1195170" },
    { label: "Strahlenschutzkommission: Schutzstrategien bei Nuklearwaffeneinsatz (PDF)", url: "https://ssk.de/fileadmin/documents/de/2024/2024-10-10_Empf_Schutzstrategien__Nuklearwaffen.pdf" },
    { label: "BSSD: Schutzraum-Nachrüstungen", url: "https://www.bunker-bssd.de/Schutzraum-Nachruestungen" },
  ],

  related: [
    { slug: "abdichtung", text: "Einen Raum gegen Außenluft abdichten." },
    { slug: "hygiene-sanitaer", text: "Toilette und Hygiene ohne Wasser." },
    { slug: "notnahrung", text: "Vorrat, der lange hält." },
    { group: "schutzraum-ausstattung", text: "Alle Ratgeber zu Schutzraum & Ausstattung." },
  ],
};
