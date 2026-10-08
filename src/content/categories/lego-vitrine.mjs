// Kategorie: LEGO-Vitrine (Acrylvitrinen für große und mittlere Sets)
// Aufbau siehe src/content/README.md (Content-Modell).

export default {
  slug: "lego-vitrine",
  area: "lego-sammler",
  navLabel: "LEGO-Vitrine",
  published: "2026-10-08",
  updated: "2026-10-08",

  metaTitle: "LEGO-Vitrine: Die 3 besten Acrylvitrinen für LEGO-Sets 2026",
  metaDescription:
    "Acrylvitrinen für WALL-E, Architecture und den UCS Millennium Falcon: die 3 besten LEGO-Vitrinen 2026 – mit Tipps zu Passform, Staubschutz, UV und Aufbau.",

  eyebrow: "LEGO-Sammler · LEGO-Vitrine",
  h1: "Die 3 besten LEGO-Vitrinen 2026",
  lead:
    "Ein fertig gebautes LEGO-Set sammelt in wenigen Wochen sichtbar Staub. Eine Acrylvitrine hält ihn fern, schützt vor neugierigen Händen und rahmt das Modell wie im Museum. Wir zeigen drei passgenaue Vitrinen für mittlere und große Sets – und in der Top 5 Lösungen für bestimmte Sets von der Titanic bis zum Eiffelturm.",
  answer:
    "Unsere beste Gesamtwahl ist die [**Acrylic Display Case for LEGO® WALL-E & EVE 43279**](produkt:1), die als einzige Vitrine im Vergleich von einem unabhängigen LEGO-Magazin besprochen wurde. Das beste Preis-Leistungs-Verhältnis sehen wir bei der [**Acrylic Display Case for LEGO® Architecture**](produkt:2) mit Skyline-Motiven. Für den großen UCS-Falken gibt es die [**Acrylic Display Case for LEGO® Star Wars™ Millennium Falcon 75192**](produkt:3) – vor dem Kauf aber unbedingt die Maße prüfen.",

  priceTiers: {
    1: { symbol: "€", label: "bis ca. 100 €" },
    2: { symbol: "€€", label: "ca. 100–200 €" },
    3: { symbol: "€€€", label: "über ca. 200 €" },
  },

  top3Title: "Unsere Top 3 LEGO-Vitrinen",
  top3Intro:
    "Alle drei sind geschlossene Acrylvitrinen des britischen Zubehörshops BrickZoneHub, zugeschnitten auf bestimmte Sets bzw. eine Set-Reihe. Sie unterscheiden sich vor allem in Größe, Hintergrundmotiv und darin, wie klar die Maßangaben im Shop sind.",
  comparisonTitle: "Die 3 besten LEGO-Vitrinen im Vergleich",

  criteria: [
    { key: "passform", label: "Passform & Maßangaben", weight: 0.3, description: "Ob Außenmaße und Setmaße im Shop klar und widerspruchsfrei angegeben sind und genug Luft rund um das Modell bleibt." },
    { key: "staubschutz", label: "Staubschutz & Material", weight: 0.3, description: "Vollständig geschlossene Bauweise, Stärke der Acrylplatten und der Bodenplatte laut Shop." },
    { key: "montage", label: "Montage & Verarbeitung", weight: 0.2, description: "Stecksystem bzw. Eckverbinder, Verständlichkeit der Anleitung, Aufwand beim Abziehen der Schutzfolie laut Praxisberichten." },
    { key: "preis_leistung", label: "Preis-Leistung", weight: 0.2, description: "Preis im Verhältnis zu Größe, Ausstattung (Hintergrundmotiv) und Wert des Sets, das geschützt wird." },
  ],

  method:
    "Wir haben die Vitrinen nicht selbst getestet. Grundlage sind die Angaben auf den Produktseiten und im Blog von BrickZoneHub (Maße, Plattenstärke, Bauweise, Versand), die Praxisberichte des britischen LEGO-Magazins Brick Fanatics sowie die Trustpilot-Seite des Shops. Einen Test von LEGO-Vitrinen durch Stiftung Warentest oder Öko-Test haben wir nicht gefunden (Stand Oktober 2026). Die Bewertung ist eine redaktionelle Einschätzung in vier gewichteten Kriterien von 0 bis 10.",

  products: [
    {
      rank: 1,
      label: "Beste Gesamtwahl (unabhängig besprochen)",
      name: "Acrylic Display Case for LEGO® WALL-E & EVE 43279",
      brand: "BrickZoneHub",
      variant: "Acrylvitrine mit bedrucktem Rück- und Bodenmotiv; Set nicht enthalten",
      visual: { kind: "vitrine", tone: "forest" },
      priceTier: 1,
      ratings: { passform: 8.5, staubschutz: 8.5, montage: 7.0, preis_leistung: 6.5 },
      bestFor: "Mittlere Sets, Disney- und Film-Fans",
      verdict:
        "Die einzige Vitrine im Vergleich, die ein unabhängiges LEGO-Magazin in der Praxis besprochen hat: Brick Fanatics urteilt positiv mit Einschränkungen. Klare Maße, geschlossene Bauweise und ein Hintergrund mit Filmbezug – aber das Abziehen der Schutzfolie ist mühsam, und die Vitrine kostet mehr als das Set selbst.",
      features: [
        "Ca. 30 × 20 × 20 cm (laut Shop)",
        "Klare Acrylplatten, 3–5 mm je nach Größe (laut Shop)",
        "Bedrucktes Rück- und Bodenmotiv mit Bezug zum Film (laut Shop)",
        "Brick Fanatics: positiv mit Einschränkungen – Schutzfolie mühsam, lohnt sich vor allem für sehr engagierte Fans",
      ],
      pros: ["Unabhängiger Praxisbericht vorhanden", "Eindeutige Maßangabe im Shop", "Motiv passt zum Set", "Kompakt – passt auf Regal oder Sideboard"],
      cons: ["Laut Brick Fanatics teurer als das Set selbst", "Schutzfolie an allen Platten mühsam abzuziehen", "Preis in Pfund, Versand aus Großbritannien"],
      specs: { masse: "ca. 30 × 20 × 20 cm (laut Shop)", acryl: "3–5 mm je nach Größe (laut Shop)", bauweise: "geschlossen, mit Rück- und Bodenmotiv", set: "WALL-E & EVE 43279", test: "Brick Fanatics: positiv mit Einschränkungen" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/acrylic-display-case-compatible-with-lego%C2%AE-wall-e-and-eve-43279",
    },
    {
      rank: 2,
      label: "Bestes Preis-Leistungs-Verhältnis",
      name: "Acrylic Display Case for LEGO® Architecture",
      brand: "BrickZoneHub",
      variant: "Mehrere Städte- und Skyline-Varianten; Set nicht enthalten",
      visual: { kind: "vitrine", tone: "green" },
      priceTier: 2,
      ratings: { passform: 6.5, staubschutz: 8.0, montage: 7.5, preis_leistung: 8.0 },
      bestFor: "Sammler mehrerer Architecture-Skylines",
      verdict:
        "Eine Vitrinenreihe für die schmalen Skyline-Modelle aus LEGO Architecture, mit passendem Hintergrundmotiv je Stadt. Laut Shop reduziert und damit gemessen an Ausstattung und Variantenauswahl ein faires Angebot. Schwachpunkt sind die Maße: Wir haben keine eindeutige Angabe für alle Varianten gefunden.",
      features: [
        "Mehrere Varianten für verschiedene Städte bzw. Skylines (laut Shop)",
        "Klares Acryl mit bedrucktem Hintergrund (laut Shop)",
        "Laut Shop reduziert gegenüber dem regulären Preis",
        "Eine Shop-Angabe nennt 30 × 30 × 6 cm – für eine Vitrine ungewöhnlich flach, vor dem Kauf nachfragen",
      ],
      pros: ["Ein einheitlicher Look für mehrere Skylines im Regal", "Hintergrundmotiv je Stadt", "Laut Shop reduziert"],
      cons: ["Keine eindeutigen Maße für alle Varianten gefunden", "Kein unabhängiger Praxisbericht", "Teurer als viele Architecture-Sets selbst"],
      specs: { masse: "keine eindeutige Angabe gefunden", acryl: "keine Angabe gefunden", bauweise: "Acrylvitrine mit Hintergrundmotiv", set: "LEGO Architecture Skylines (Varianten)", test: "kein unabhängiger Test gefunden" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/lego-architecture-display-case",
    },
    {
      rank: 3,
      label: "Premium für UCS-Sets",
      name: "Acrylic Display Case for LEGO® Star Wars™ Millennium Falcon 75192",
      brand: "BrickZoneHub",
      variant: "Optional mit Hoth-Hintergrund (laut Shop-Blog); Set nicht enthalten",
      visual: { kind: "vitrine", tone: "mint" },
      priceTier: 3,
      ratings: { passform: 6.0, staubschutz: 9.0, montage: 7.0, preis_leistung: 6.0 },
      bestFor: "Besitzer des UCS Millennium Falcon 75192",
      verdict:
        "Eine große, vollständig geschlossene Vitrine für eines der größten LEGO-Sets überhaupt – laut Shop mit 5 mm starkem Boden und werkzeuglosem Stecksystem. Die Maßangaben passen aber nicht ohne Weiteres zum Set: Vor dem Kauf nachmessen und beim Shop nachfragen.",
      features: [
        "Außenmaße 87 × 39 × 58 cm (B × T × H) laut Produktseite",
        "3 mm Acrylplatten, 5 mm Bodenplatte, vollständig geschlossen (laut Shop)",
        "Flach verpackt, werkzeugloses Stecksystem (laut Shop)",
        "Hoth-Hintergrund als Option laut Shop-Blog",
      ],
      pros: ["Vollständig geschlossen – guter Staubschutz", "Stabiler 5-mm-Boden für ein schweres Modell", "Werkzeuglose Montage laut Shop"],
      cons: ["Maße widersprüchlich: Set laut Shop-Blog ca. 84 × 56 × 21 cm, Vitrine nur 39 cm tief", "Braucht ein großes, tragfähiges Möbel", "Teuerste Vitrine im Vergleich", "Kein unabhängiger Praxisbericht"],
      specs: { masse: "87 × 39 × 58 cm (B × T × H, laut Shop)", acryl: "3 mm, Boden 5 mm (laut Shop)", bauweise: "vollständig geschlossen", set: "Millennium Falcon 75192 (UCS)", test: "kein unabhängiger Test gefunden" },
      shop: "brickzonehub",
      url: "https://brickzonehub.co.uk/products/acrylic-display-case-compatible-with-lego%C2%AE-star-wars%E2%84%A2-millennium-falcon-75192",
    },
  ],

  comparison: [
    { key: "masse", label: "Maße" },
    { key: "acryl", label: "Acrylstärke" },
    { key: "bauweise", label: "Bauweise" },
    { key: "set", label: "Passend für" },
    { key: "test", label: "Unabhängiger Test" },
  ],

  figures: {
    scores: {
      kind: "scores",
      file: "lego-vitrine-beste-2026-bewertung.svg",
      title: "Die 3 besten LEGO-Vitrinen 2026",
      alt: "Balkendiagramm: Bewertung der Acrylvitrinen für LEGO WALL-E & EVE 43279, LEGO Architecture und LEGO Millennium Falcon 75192 in den Kriterien Passform & Maßangaben, Staubschutz & Material, Montage & Verarbeitung sowie Preis-Leistung",
      caption: "Unsere Bewertung je Kriterium. Passform und Staubschutz zählen am meisten.",
    },
    steps: {
      kind: "steps",
      file: "lego-vitrine-aufbauen.svg",
      title: "LEGO-Vitrine aufbauen",
      subtitle: "Kratzfrei und passgenau",
      alt: "Infografik: LEGO-Vitrine aufbauen – Maße prüfen, Schutzfolie abziehen, Boden ausrichten, Set einsetzen, Haube schließen",
      caption: "Vor dem Kauf messen, beim Aufbau die Folie abziehen und das Set erst zum Schluss einsetzen.",
      steps: [
        { title: "Maße prüfen", text: "Setmaße messen und mit den Innenmaßen der Vitrine vergleichen." },
        { title: "Folie abziehen", text: "Schutzfolie beidseitig von allen Acrylplatten entfernen." },
        { title: "Boden ausrichten", text: "Bodenplatte gerade auf ein tragfähiges Möbel legen." },
        { title: "Set einsetzen", text: "Modell mittig platzieren, rundherum Luft lassen." },
        { title: "Haube schließen", text: "Seiten, Front und Deckel aufstecken – staubdicht verschließen." },
      ],
    },
  },

  editorial: {
    title: "Acrylvitrine, Glasvitrine oder Wandrahmen?",
    intro: "Welche Vitrine zu welchem Set passt, warum die Maße wichtiger sind als das Motiv und was Acryl gegenüber Glas kann.",
    sections: [
      {
        id: "beste-lego-vitrine",
        h2: "Welche LEGO-Vitrine ist die beste?",
        blocks: [
          { quick: "Für mittlere Sets ist die [Vitrine für WALL-E & EVE 43279](produkt:1) unsere beste Wahl: klare Maße, geschlossene Bauweise und als einzige ein unabhängiger Praxisbericht. Für Architecture-Skylines passt die [Architecture-Vitrine](produkt:2), für den UCS-Falken die [Vitrine für 75192](produkt:3) – dort aber Maße nachprüfen." },
          { first: "Eine LEGO-Vitrine ist im Grunde eine Haube aus klarem Kunststoff über einer stabilen Bodenplatte. Was sie gut oder schlecht macht, entscheidet sich an drei Punkten: Passt das Set mit etwas Luft hinein? Ist sie rundum geschlossen? Und lässt sie sich aufbauen, ohne dass Kratzer oder Fingerabdrücke zurückbleiben? Alle drei Vitrinen in unserem Vergleich stammen von **BrickZoneHub**, einem britischen Zubehörshop, der passgenaue Vitrinen und Rahmen für einzelne LEGO-Sets anbietet. Laut Shop bestehen die Vitrinen typischerweise aus 3 mm starken, klaren Acrylplatten auf einer meist schwarzen 5-mm-Bodenplatte, werden flach verpackt geliefert und ohne Werkzeug zusammengesteckt." },
          { p: "Die [Vitrine für WALL-E & EVE 43279](produkt:1) liegt vorn, weil sie als einzige von einer unabhängigen Redaktion in der Praxis angeschaut wurde. Das britische LEGO-Magazin **Brick Fanatics** urteilt positiv mit Einschränkungen: Die Vitrine präsentiert das Set ansprechend, das Abziehen der Schutzfolie von allen Platten ist aber mühsam, und die Vitrine kostet mehr als das Set selbst – sie lohne sich vor allem für sehr engagierte Fans. Laut Shop misst sie rund 30 × 20 × 20 cm und hat ein bedrucktes Rück- und Bodenmotiv mit Bezug zum Film. Wichtig zur Einordnung: Brick Fanatics verkauft selbst Vitrinen, ist also kein völlig neutraler Beobachter." },
          { p: "Die [Architecture-Vitrine](produkt:2) richtet sich an Sammler der schmalen Skyline-Modelle. Es gibt sie laut Shop in mehreren Städte-Varianten mit passendem Hintergrund, aktuell reduziert. Eindeutige Maße für alle Varianten haben wir nicht gefunden; eine Shop-Angabe nennt 30 × 30 × 6 cm, was für eine Vitrine auffallend flach wäre. Frag vor der Bestellung nach den Innenmaßen deiner Variante." },
          { p: "Die [Vitrine für den Millennium Falcon 75192](produkt:3) ist die größte im Vergleich: laut Produktseite 87 × 39 × 58 cm (B × T × H), 3 mm Acryl, 5 mm Boden, vollständig geschlossen. Der Haken: Das Set selbst misst laut Shop-Blog rund 84 × 56 × 21 cm. Die 56 cm Breite des Modells sind größer als die 39 cm Tiefe der Vitrine. Entweder wird der Falke gekippt bzw. auf einem Ständer aufgestellt präsentiert – die 58 cm Höhe sprechen dafür –, oder die Angaben sind widersprüchlich. Das konnten wir nicht klären. Miss dein Modell nach und lass dir die Präsentationsweise vom Shop bestätigen." },
          { figure: "scores" },
        ],
      },
      {
        id: "kaufkriterien",
        h2: "Worauf sollte man beim Kauf einer LEGO-Vitrine achten?",
        blocks: [
          { quick: "Entscheidend ist die Passform: Die Innenmaße müssen das Set mit etwas Luft rundherum aufnehmen. Danach zählen eine vollständig geschlossene Bauweise gegen Staub, ein stabiler Boden, der Aufstellort und der Schutz vor direktem Sonnenlicht." },
          { h3: "Passform: Innenmaße statt Außenmaße" },
          { p: "Shops nennen meist die **Außenmaße**. Innen geht auf jeder Seite die Plattenstärke ab, bei 3 mm Acryl also rund 6 mm pro Richtung, dazu kommen Eckverbinder. Miss dein Set an der breitesten, tiefsten und höchsten Stelle – inklusive Antennen, Kanonen oder Ständer – und plane ringsum ein bis zwei Zentimeter Luft ein. So stößt nichts an, und du kannst das Modell beim Einsetzen greifen. Bei großen Sets lohnt ein Blick auf die Präsentation: Manche Modelle werden schräg oder hochkant gezeigt, dann zählen andere Maße als im Karton angegeben." },
          { h3: "Staubschutz: geschlossen oder offen" },
          {
            table: {
              caption: "Präsentationsarten für LEGO-Sets im Vergleich",
              head: ["Lösung", "Stärken", "Schwächen"],
              rows: [
                ["**Acrylvitrine** (z. B. BrickZoneHub)", "Passgenau, leicht, rundum geschlossen", "Kratzempfindlicher als Glas, lädt sich statisch auf"],
                ["**Glasvitrine / Vitrinenschrank**", "Kratzfest, mehrere Sets auf Böden", "Schwer, Maße nicht aufs Set abgestimmt, oft nicht staubdicht"],
                ["**Wandrahmen**", "Spart Stellfläche, Motiv als Bühne", "Laut Shop-Blog nicht staubdicht"],
                ["**Offenes Regal**", "Günstig, schnell umgestellt", "Staub, Sonne und Hände ungebremst"],
              ],
            },
          },
          { p: "Für ein einzelnes großes Set ist die Acrylvitrine meist die bessere Wahl: Sie ist auf das Modell zugeschnitten und deutlich leichter als Glas. Ein Glas-Vitrinenschrank eignet sich eher, wenn du viele kleinere Sets auf mehreren Böden zeigen willst. Wandrahmen sehen gut aus, schützen laut BrickZoneHub-Blog aber nicht vor Staub – mehr dazu im Ratgeber [LEGO-Wandrahmen](/lego-wandrahmen/)." },
          { h3: "Licht und UV: Vergilbung vermeiden" },
          { p: "Weiße und hellgraue LEGO-Steine können unter direktem Sonnenlicht mit der Zeit vergilben. Normales Acryl hält UV-Strahlung nur teilweise ab; Herstellerangaben zu einem UV-Schutz haben wir bei den drei Vitrinen nicht gefunden. Stell die Vitrine deshalb nicht ans Südfenster, sondern an eine Wand ohne direkte Sonne. Wer das Modell trotzdem in Szene setzen will, nutzt besser ein LED-Lichtset als Tageslicht – siehe [LEGO-LED-Beleuchtung](/lego-led-beleuchtung/)." },
          { h3: "Aufstellort und Tragfähigkeit" },
          { p: "Ein UCS-Modell plus Vitrine bringt einiges an Gewicht und braucht eine große, ebene Fläche. Prüfe Breite und Tiefe des Möbels und die Belastbarkeit der Regalböden laut Hersteller. Die 87 cm breite Falcon-Vitrine passt nicht auf jedes Sideboard; Regalböden sollten nicht durchhängen, sonst verzieht sich die Haube." },
          { list: ["Set an der größten Stelle messen und mit den Innenmaßen vergleichen", "Ein bis zwei Zentimeter Luft rundherum einplanen", "Vollständig geschlossene Vitrine für echten Staubschutz", "Kein direktes Sonnenlicht – Vergilbungsgefahr", "Möbel nach Fläche und Tragfähigkeit wählen"] },
        ],
      },
      {
        id: "welche-vitrine-passt",
        h2: "Welche LEGO-Vitrine passt zu wem?",
        blocks: [
          { quick: "Mittleres Display-Set im Regal: WALL-E-Vitrine. Mehrere Skylines: Architecture-Vitrine. UCS-Falke: Falcon-Vitrine nach Maßprüfung. Wer Platz sparen will, greift zum Wandrahmen, verzichtet dann aber auf Staubschutz." },
          {
            cards: [
              { title: "Film- und Disney-Fans", text: "Die [WALL-E-Vitrine](produkt:1) bringt mit dem Filmmotiv eine kleine Szene ins Regal." },
              { title: "Architecture-Sammler", text: "Die [Architecture-Vitrine](produkt:2) gibt mehreren Skylines einen einheitlichen Look." },
              { title: "Star-Wars-UCS-Besitzer", text: "Die [Falcon-Vitrine 75192](produkt:3) schützt das große Modell rundum – Maße vorher klären." },
              { title: "Wenig Stellfläche", text: "Ein Wandrahmen spart Platz, schützt aber nicht vor Staub." },
            ],
          },
          { p: "Auch teure Vitrinen sind nicht automatisch gut: Die Vitrine für die **Star-Trek-Enterprise 10356** desselben Shops rechtfertigt laut Brick Fanatics ihren hohen Preis nicht; die Montage war verwirrend, weil die Teile nicht zur zweiseitigen Anleitung passten. Wir empfehlen sie deshalb nicht. Für Minifiguren gibt es eigene Lösungen im Ratgeber [LEGO-Minifiguren-Vitrine](/lego-minifiguren-vitrine/), für Supercars aus der Technic-Reihe unter [LEGO-Technic-Vitrine](/lego-technic-vitrine/) und für die kleinen Rennwagen unter [Speed-Champions-Vitrine](/lego-speed-champions-vitrine/)." },
        ],
      },
    ],
  },

  top5: {
    id: "top5-vitrine-fuer-set",
    h2: "Die 5 besten Vitrinen und Rahmen für bestimmte LEGO-Sets",
    intro: "Du suchst eine Vitrine für genau dein Set? Fünf passgenaue Lösungen für bekannte Modelle – von der Titanic bis zum Eiffelturm.",
    items: [
      { name: "Acrylic Display Case for LEGO® Titanic 10294", for: "LEGO Titanic 10294", text: "Lange, schmale Vitrine für das über einen Meter lange Schiffsmodell: laut Shop 142 × 21 × 48 cm. Die Preisangaben auf Produkt- und Kategorieseite weichen voneinander ab – den aktuellen Preis im Warenkorb prüfen. Wegen der Länge ein entsprechend breites Möbel einplanen.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/acrylic-display-case-compatible-with-lego%C2%AE-titanic-10294" },
      { name: "Floating LED Display Base for LEGO® Eiffel Tower 10307", for: "LEGO Eiffelturm 10307", text: "Kein Gehäuse, sondern ein schwebender Sockel mit LED-Beleuchtung und Paris-Stadtplan: laut Shop 3 mm Acryl mit Metall-Eckverbindern, 61 × 61 × 35 cm, Stromversorgung per USB. Für den fast 1,5 m hohen Turm gibt es so eine Bühne – Staubschutz bietet der Sockel nicht.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/lego-eiffel-tower-10307-floating-led-display-base" },
      { name: "Acrylic Display Case for LEGO® FIFA World Cup™ 7-in-1 Set", for: "LEGO FIFA World Cup Sets (7-in-1)", text: "Vitrine für mehrere Fußball-Sets aus der FIFA-World-Cup-Reihe, laut Shop 60 × 30 × 60 cm (B × T × H), vollständig geschlossen, flach verpackt, mit Hintergrund aus PVC-Schaumplatte, auch als LED-Version. Die Angaben zur Acrylstärke widersprechen sich auf der Produktseite (3 mm bzw. 5 mm).", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/acrylic-display-case-for-lego-fifa-world-cup-7-in-1-set" },
      { name: "Wall Display Frame for LEGO® Star Trek USS Enterprise 10356 (50 × 80 cm)", for: "LEGO Star Trek USS Enterprise 10356", text: "Wandrahmen als Alternative zur Enterprise-Vitrine, die Brick Fanatics als zu teuer bewertet: Acrylfront mit UV-Druck und Hintergrundplatte, 50 × 80 cm laut Shop. Ein Rahmen schützt nicht vor Staub, spart aber Stellfläche.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/wall-display-frame-compatible-with-lego%c2%ae-uss-enterprise-ncc-1701-d%e2%84%a2-10356" },
      { name: "Wall Display Frame for LEGO® Star Wars™ Millennium Falcon™ 75389", for: "LEGO Star Wars 75389 (kleinerer Falcon)", text: "Wandrahmen für das kleinere Falcon-Set 75389 (bei LEGO als „The Dark Falcon“ geführt): laut Shop 50 × 80 cm, bedruckte Acrylfront mit Blueprint-Motiv, auch mit LED per USB (Powerbank nicht enthalten). Die Benennung auf den Shopseiten ist uneinheitlich – Set-Nummer vor dem Kauf abgleichen.", shop: "brickzonehub", url: "https://brickzonehub.co.uk/products/wall-display-frame-compatible-with-lego%C2%AE-star-wars%E2%84%A2-millennium-falcon%E2%84%A2-75389" },
    ],
  },

  guide: {
    sections: [
      {
        id: "vitrine-aufbauen",
        h2: "Wie baut man eine LEGO-Vitrine auf?",
        blocks: [
          { quick: "Maße prüfen, die Schutzfolie von allen Acrylplatten abziehen, die Bodenplatte auf einem ebenen, tragfähigen Möbel ausrichten, das Set einsetzen und zum Schluss Seiten, Front und Deckel aufstecken. Arbeite mit sauberen Händen oder Baumwollhandschuhen." },
          { figure: "steps" },
          { p: "Die Acrylplatten kommen beidseitig mit Schutzfolie. Sie verhindert Kratzer beim Transport, muss aber vollständig ab – sonst sieht die Vitrine milchig aus. Brick Fanatics beschreibt das Abziehen bei der WALL-E-Vitrine als mühsam; plane also Zeit ein und zieh die Folie von einer Ecke aus flach ab, ohne mit Fingernägeln oder Messer zu arbeiten. Bei den Stecksystemen von BrickZoneHub ist laut Shop kein Werkzeug nötig; Brick Fanatics berichtet bei der Enterprise-Vitrine allerdings, dass die Teile nicht zur Anleitung passten. Leg deshalb alle Platten vorher aus und ordne sie zu." },
          { p: "Setz große Sets ein, bevor die Haube geschlossen ist, und trag ein fertiges Modell nicht in der geschlossenen Vitrine durch die Wohnung – die Haube trägt das Gewicht des Sets nicht. Erst den Boden an seinen Platz, dann das Modell, dann die Seitenteile." },
          { callout: { title: "Gut zu wissen vor der Bestellung", text: "BrickZoneHub ist ein britischer Shop, die Preise werden im Shop in Pfund ausgewiesen. Laut FAQ liefert er u. a. nach Deutschland, laut Shop kostenlos; laut Produktseiten dauert der internationale Versand 10–20 Werktage, teils mit Wahl zwischen Luftfracht (10–15 Tage) und teurerem Express (DHL/UPS, 3–7 Tage). Ob beim Import Einfuhrumsatzsteuer oder Zoll anfällt, prüfst du im Checkout – das können wir nicht zusichern. Es handelt sich um Zubehör eines Drittanbieters, nicht von LEGO gesponsert oder autorisiert; das LEGO-Set ist nicht enthalten. Viele Produktseiten zeigen „Sold out“, obwohl die Strukturdaten „in stock“ melden – die Verfügbarkeit also im Shop prüfen. Auf Trustpilot hat der Shop einen TrustScore von 3,4 bei nur 10 Bewertungen (Stand Oktober 2026), eine dünne Datenbasis. Laut Shop gilt ein Rückgaberecht von 30 Tagen; Sondergrößen gibt es auf Anfrage." } },
          { facts: [{ value: "3 mm", label: "Acrylplatten (typische Shop-Angabe)" }, { value: "5 mm", label: "Bodenplatte (typische Shop-Angabe)" }, { value: "87 cm", label: "Breite Falcon-Vitrine 75192 (laut Shop)" }] },
        ],
      },
      {
        id: "vitrine-reinigen",
        h2: "Wie reinigt man eine Acrylvitrine ohne Kratzer?",
        blocks: [
          { quick: "Mit einem weichen Mikrofasertuch und lauwarmem Wasser mit etwas mildem Spülmittel – ohne Druck. Glasreiniger, Alkohol und Scheuermittel vermeiden, weil sie Acryl trüben oder Haarrisse verursachen können." },
          { p: "Acryl ist leichter und bruchfester als Glas, aber deutlich kratzempfindlicher. Trockenes Wischen reibt Staubkörner wie Schleifpapier über die Oberfläche. Besser: Staub zuerst mit einem Staubwedel oder Blasebalg entfernen, dann feucht mit Mikrofasertuch und mildem Seifenwasser wischen und mit einem zweiten, sauberen Tuch trocknen. Glasreiniger mit Ammoniak oder Alkohol solltest du nicht verwenden – sie können das Material angreifen." },
          { p: "Acryl lädt sich beim Reiben statisch auf und zieht dann Staub an. Feuchtes Wischen ohne Druck verringert das. Das Set selbst bleibt in einer geschlossenen Vitrine weitgehend staubfrei; ein- bis zweimal im Jahr die Haube abnehmen und das Modell mit einem weichen Pinsel abstauben reicht in der Regel." },
        ],
      },
    ],
  },

  faqs: [
    { q: "Welche LEGO-Vitrine ist die beste?", a: "Für mittlere Sets ist die Acrylvitrine für WALL-E & EVE 43279 von BrickZoneHub unsere beste Gesamtwahl – mit klaren Maßen und einem unabhängigen Praxisbericht von Brick Fanatics. Für Architecture-Skylines passt die Architecture-Vitrine, für den UCS Millennium Falcon 75192 die große Falcon-Vitrine nach Maßprüfung." },
    { q: "Acrylvitrine oder Glasvitrine – was ist besser für LEGO?", a: "Für ein einzelnes Set meist Acryl: passgenau, leicht und rundum geschlossen. Glas ist kratzfester, aber schwer, und Vitrinenschränke sind selten auf die Setmaße abgestimmt. Für viele kleine Sets auf mehreren Böden kann ein Glas-Vitrinenschrank praktischer sein." },
    { q: "Wie groß muss eine Vitrine für ein LEGO-Set sein?", a: "Die Innenmaße sollten das Set an der größten Stelle plus ein bis zwei Zentimeter Luft rundherum aufnehmen. Shops nennen meist Außenmaße – davon gehen die Plattenstärken ab. Bei großen Sets prüfen, ob das Modell flach oder aufgestellt präsentiert wird." },
    { q: "Vergilben LEGO-Steine in einer Acrylvitrine?", a: "Sie können vergilben, wenn die Vitrine in direktem Sonnenlicht steht – vor allem weiße und hellgraue Teile. Normales Acryl hält UV-Licht nur teilweise ab, und zu einem UV-Schutz der vorgestellten Vitrinen haben wir keine Herstellerangabe gefunden. Ein Platz ohne direkte Sonne ist der beste Schutz." },
    { q: "Wie reinigt man eine LEGO-Vitrine aus Acryl?", a: "Mit Mikrofasertuch und mildem Seifenwasser, ohne Druck, danach trocken nachwischen. Keine Glasreiniger, keinen Alkohol und keine Scheuermittel verwenden, weil sie Acryl trüben oder zerkratzen können." },
    { q: "Liefert BrickZoneHub nach Deutschland?", a: "Ja, laut FAQ des Shops wird u. a. nach Deutschland geliefert, laut Shop kostenlos. Der internationale Versand dauert laut Produktseiten 10–20 Werktage, Express ist gegen Aufpreis möglich. Die Preise stehen in Pfund; ob Einfuhrumsatzsteuer oder Zoll anfällt, im Checkout prüfen." },
    { q: "Ist eine BrickZoneHub-Vitrine ein offizielles LEGO-Produkt?", a: "Nein. Es handelt sich um Zubehör eines Drittanbieters, das nicht von LEGO gesponsert oder autorisiert ist. Das LEGO-Set ist nicht enthalten." },
    { q: "Lohnt sich die Vitrine für die LEGO Enterprise 10356?", a: "Laut Brick Fanatics nicht: Die Vitrine rechtfertige den hohen Preis nicht, und die Montage war verwirrend, weil die Teile nicht zur Anleitung passten. Wer Platz sparen will, kann zum Wandrahmen greifen – der schützt aber nicht vor Staub." },
  ],

  sources: [
    { label: "BrickZoneHub: Acrylic Display Case for LEGO® WALL-E & EVE 43279 (Shopangaben)", url: "https://brickzonehub.co.uk/products/acrylic-display-case-compatible-with-lego%C2%AE-wall-e-and-eve-43279" },
    { label: "BrickZoneHub: Acrylic Display Case for LEGO® Architecture (Shopangaben)", url: "https://brickzonehub.co.uk/products/lego-architecture-display-case" },
    { label: "BrickZoneHub: Acrylic Display Case for LEGO® Millennium Falcon 75192 (Shopangaben)", url: "https://brickzonehub.co.uk/products/acrylic-display-case-compatible-with-lego%C2%AE-star-wars%E2%84%A2-millennium-falcon-75192" },
    { label: "BrickZoneHub: FAQ (Lieferländer, Rückgabe)", url: "https://brickzonehub.co.uk/pages/faq" },
    { label: "BrickZoneHub: Shipping Policy", url: "https://brickzonehub.co.uk/policies/shipping-policy" },
    { label: "Brick Fanatics: LEGO Disney WALL-E display case review", url: "https://www.brickfanatics.com/lego-disney-wall-e-display-case-review" },
    { label: "Brick Fanatics: LEGO Star Trek Enterprise Brick Zone Hub display case review", url: "https://www.brickfanatics.com/lego-star-trek-enterprise-brick-zone-hub-display-case-review" },
    { label: "Trustpilot: Bewertungen zu brickzonehub.co.uk (Stand Oktober 2026)", url: "https://www.trustpilot.com/review/brickzonehub.co.uk" },
  ],

  related: [
    { slug: "lego-minifiguren-vitrine", text: "Wandvitrinen für Minifiguren-Sammlungen." },
    { slug: "lego-wandrahmen", text: "Wandrahmen für LEGO-Sets – platzsparend, aber ohne Staubschutz." },
    { slug: "lego-technic-vitrine", text: "Vitrinen für große Technic-Supercars." },
    { slug: "lego-led-beleuchtung", text: "LED-Lichtsets, die Modelle in der Vitrine in Szene setzen." },
    { area: "lego-sammler", text: "Alle Ratgeber für LEGO-Sammler." },
  ],
};
