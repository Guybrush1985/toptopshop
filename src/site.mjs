// Zentrale Konfiguration für toptop.shop.
// Gilt für alle Seiten; Kategorien liegen in src/content/categories/.

export const site = {
  name: "toptop.shop",
  url: "https://toptop.shop",
  lang: "de-DE",
  locale: "de_DE",
  claim: "Die Abkürzung zu den besten Produkten.",
  description:
    "toptop.shop reduziert jede Kategorie auf die drei besten Produkte – mit nachvollziehbarer Begründung, ausführlicher Kaufberatung und regelmäßiger Aktualisierung.",

  amazon: {
    domain: "www.amazon.de",
    partnerTag: "toptopshop-21",
  },

  // Awin-Partnerprogramme. publisherId = eigene Awin-Publisher-ID (awinaffid).
  // Ohne publisherId verlinken Produkte direkt auf den Shop (ohne Provision).
  awin: {
    publisherId: "3117711",
    merchants: {
      radwelt: { name: "RADWELT-Shop", mid: 15088, domain: "radwelt-shop.de" },
      fahrradlagerverkauf: { name: "Fahrradlagerverkauf", mid: 39644, domain: "fahrradlagerverkauf.com" },
      fahrrad24: { name: "fahrrad24", mid: 13691, domain: "fahrrad24.de" },
    },
  },

  organization: {
    name: "TanMeOn GmbH",
    street: "Deichstraße 8",
    zip: "25826",
    city: "Sankt Peter-Ording",
    country: "DE",
    email: "info@tanmeon.de",
    phone: "+49 40 46993066",
    phoneDisplay: "040 46993066",
    managingDirector: "Jan Rosenbrock",
    register: "Amtsgericht Flensburg, HRB 12499",
    vatId: "DE 284 630 274",
  },

  // Redaktion, die in Artikeln und strukturierten Daten als Autor erscheint.
  editorial: {
    name: "Redaktion toptop.shop",
  },
};

// Bereiche (oberste Ebene der Informationsarchitektur). Jede Kategorie-Datei
// verweist über `area` auf einen dieser Bereiche.
export const areas = [
  {
    slug: "braeunung",
    name: "Bräunung & Sonne",
    short: "Bräunung",
    intro:
      "Selbstbräuner, Sonnenöle mit Lichtschutzfaktor und After-Sun-Pflege: Für jedes Thema zeigen wir die drei Produkte, die sich für die meisten Menschen lohnen – und erklären, worauf es ankommt.",
    metaTitle: "Bräunung & Sonne: Die besten Produkte im Überblick",
    metaDescription:
      "Die besten Selbstbräuner, Bräunungsöle mit LSF und After-Sun-Produkte – je Kategorie auf drei Empfehlungen reduziert, mit Kaufberatung und FAQ.",
    // Redaktioneller Text unter den Ratgeber-Kacheln (HTML).
    article: `
  <h2>Schön braun – mit Verstand</h2>
  <p class="quick">Bräune entsteht entweder durch UV-Strahlung oder durch Selbstbräuner. Wer in die Sonne geht, braucht ausreichenden Lichtschutz und gute Pflege danach; wer UV-Strahlung meiden will, setzt auf Selbstbräuner.</p>
  <p>Die Haut bildet unter UV-Strahlung den Farbstoff Melanin, um sich zu schützen. Diese natürliche Bräune braucht Zeit – und ein Sonnenbrand bringt sie nicht schneller, sondern schadet der Haut dauerhaft. Deshalb empfehlen wir für das Sonnenbad ausschließlich Produkte mit Lichtschutzfaktor und raten zu einer langsamen Steigerung.</p>
  <p>Selbstbräuner funktionieren völlig anders: Der Wirkstoff DHA färbt die oberste Hautschicht, ganz ohne UV-Strahlung. Das Ergebnis hält einige Tage und lässt sich gezielt steuern – schützt aber nicht vor der Sonne.</p>
  <aside class="callout warn"><p class="ct">Hinweis</p><p>UV-Strahlung – durch die Sonne wie durch Solarien – kann die Haut schädigen und das Hautkrebsrisiko erhöhen. In Deutschland ist die Nutzung von Solarien für Minderjährige gesetzlich verboten. Bei Fragen zu deiner Haut hilft eine Hautärztin oder ein Hautarzt.</p></aside>`,
  },
  {
    slug: "lastenraeder",
    name: "Lastenräder für Familien",
    short: "Lastenräder",
    intro:
      "E-Lastenräder für den Kindertransport – sortiert nach der Zahl der Kinder. Für ein, zwei oder drei Kinder zeigen wir die drei Modelle, die sich am meisten lohnen, und erklären Bauformen, Sicherheit und Rechtslage.",
    metaTitle: "Lastenräder für Kinder: Die besten Modelle für 1, 2 und 3 Kinder",
    metaDescription:
      "Die besten E-Lastenräder für den Kindertransport – je drei Empfehlungen für ein, zwei und drei Kinder, mit Kaufberatung, Sicherheit und Rechtslage.",
    article: `
  <h2>Das richtige Lastenrad für deine Familie</h2>
  <p class="quick">Die wichtigste Frage beim Lastenradkauf ist: Wie viele Kinder sollen mitfahren – heute und in ein paar Jahren? Danach richten sich Bauform, Zuladung und Preis.</p>
  <p>Für ein Kind reichen meist kompakte Longtails, die kaum größer als ein normales Fahrrad sind. Für zwei Kinder kommen Frontlader mit Sitzbank und Regenverdeck oder längere Longtails infrage. Für drei Kinder braucht es eine große Box mit ausdrücklicher Herstellerfreigabe oder ein Dreirad.</p>
  <p>Wir empfehlen ausschließlich Räder, die bei Amazon oder bei Fahrradhändlern aus dem Awin-Partnernetzwerk erhältlich sind, und berücksichtigen die Sicherheitshinweise von Stiftung Warentest, ADAC und DGUV.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Nimm nur Kinder mit, die selbstständig sitzen und den Kopf halten können. Jedes Kind braucht einen eigenen Sitzplatz mit Gurt und einen Helm. Wer Kinder unter sieben Jahren transportiert, muss mindestens 16 Jahre alt sein.</p></aside>`,
  },
  {
    slug: "krisenvorsorge",
    name: "Krisenvorsorge",
    short: "Krisenvorsorge",
    intro:
      "Unabhängig sein von Strom, Netz und Lieferketten, wenn kritische Infrastruktur ausfällt – etwa durch Unwetter, technische Störungen oder KI-gestützte Cyberangriffe. Für jedes Vorsorgethema zeigen wir die drei Produkte, die sich am meisten lohnen.",
    metaTitle: "Krisenvorsorge: Die besten Produkte für Blackout & Notfall",
    metaDescription:
      "Krisenvorsorge mit System: Luft, Wasser, Energie, Kommunikation, Vorrat und Schutzraum – je Thema drei geprüfte Empfehlungen mit Kaufberatung und BBK-Hinweisen.",
    article: `
  <h2>Vorsorgen ohne Panik</h2>
  <p class="quick">Das Bundesamt für Bevölkerungsschutz und Katastrophenhilfe (BBK) empfiehlt, sich für mindestens zehn Tage selbst versorgen zu können: mit Trinkwasser, Lebensmitteln, Licht, Wärme, Informationen und einer Hausapotheke. Wer das hat, kommt durch die meisten Krisen – vom Stromausfall bis zur gestörten Lieferkette.</p>
  <p>Kritische Infrastruktur ist eng vernetzt: Fällt der Strom aus, stehen nach kurzer Zeit auch Mobilfunk, Internet, Kassensysteme, Tankstellen und teilweise die Wasserversorgung still. Ursachen können Extremwetter, technische Störungen, Sabotage oder Cyberangriffe sein. Der Staat ist auf solche Lagen vorbereitet, kann aber nicht jeden Haushalt sofort versorgen – deshalb setzt der Bevölkerungsschutz ausdrücklich auf private Vorsorge.</p>
  <p>Wir haben die Vorsorge in sechs Themen gegliedert. Je Thema findest du Ratgeber mit drei Empfehlungen, Vergleich, Kaufberatung und den passenden Hinweisen von BBK, Umweltbundesamt und Feuerwehr. Alle Produkte sind bei Amazon erhältlich.</p>
  <aside class="callout warn"><p class="ct">Im Ernstfall</p><p>Folge immer den Anweisungen von Behörden und Einsatzkräften – über Radio, Warn-Apps wie NINA, Sirenen oder Lautsprecherdurchsagen. Notruf: 112 (Feuerwehr, Rettungsdienst) und 110 (Polizei). Vorsorgeprodukte ersetzen keine Evakuierung, wenn sie angeordnet wird.</p></aside>`,
    groups: [
      {
        slug: "luftfiltration",
        name: "Luftfiltration",
        short: "Luftfiltration",
        navLabel: "Krisenvorsorge: Luftfiltration",
        intro: "Saubere Luft in Wohnräumen bei Rauch, Feinstaub oder Schadstoffen – mit Luftreinigern, Atemschutz und dem richtigen Material zum Abdichten.",
        metaTitle: "Luftfiltration für den Notfall: Luftreiniger, Masken, Abdichtung",
        metaDescription: "Saubere Luft bei Rauch, Feinstaub und Schadstoffen: die besten HEPA-Luftreiniger, FFP3- und Vollmasken sowie Material zum Abdichten eines Raums.",
        article: `
  <h2>Saubere Luft im Ernstfall</h2>
  <p class="quick">Bei Rauch oder einer Schadstoffwarnung gilt: drinnen bleiben, Fenster und Türen schließen, Lüftung und Klimaanlage ausschalten. Ein HEPA-Luftreiniger holt Partikel aus der Raumluft, eine dicht sitzende FFP3-Maske kann draußen die Belastung durch Feinstaub deutlich verringern – gegen Gase helfen nur passende Gasfilter. Anweisungen von Behörden und Feuerwehr haben immer Vorrang.</p>
  <p>Die drei Ratgeber dieses Themas greifen ineinander: Ein abgedichteter Raum lässt weniger belastete Außenluft herein, der Luftreiniger filtert, was trotzdem eindringt, und die Maske verringert die Belastung, wenn du nach draußen musst. Wichtig ist, die Grenzen zu kennen: Kein Partikelfilter hält Kohlenmonoxid zurück, und ein dicht abgeklebter Raum braucht nach einiger Zeit wieder Frischluft.</p>`,
      },
      {
        slug: "wasserversorgung",
        name: "Wasserversorgung",
        short: "Wasserversorgung",
        navLabel: "Krisenvorsorge: Wasserversorgung",
        intro: "Sicheres Trinkwasser, auch wenn die Versorgung ausfällt oder das Wasser verunreinigt ist – mit Vorrat, Filtern, Entkeimung und Tests.",
        metaTitle: "Wasserversorgung im Notfall: Vorrat, Filter & Entkeimung",
        metaDescription: "Trinkwasser für den Ernstfall: die besten Wasserkanister, Umkehrosmose-Anlagen, mobilen Wasserfilter sowie Entkeimungstabletten und Wassertests.",
        article: `
  <h2>Trinkwasser für zehn Tage</h2>
  <p class="quick">Das BBK empfiehlt einen Vorrat von 2 Litern Wasser pro Person und Tag für 10 Tage – also 20 Liter pro Person. Für Wasser aus unsicheren Quellen braucht es zusätzlich einen Filter gegen Keime und eine Möglichkeit zur Entkeimung.</p>
  <p>Leitungswasser ist in Deutschland sehr gut kontrolliert. Im Ernstfall kann die Versorgung aber ausfallen – etwa wenn Pumpen ohne Strom stehen – oder das Gesundheitsamt ruft zum Abkochen auf. Dann zählt, was im Haus ist: gelagertes Wasser, ein Filter für Regentonne oder Bach und Tabletten zur Entkeimung. Eine Umkehrosmose-Anlage verbessert den Alltag, ist im Blackout aber an Wasserdruck und teils an Strom gebunden.</p>`,
      },
      {
        slug: "energie-waerme",
        name: "Energie & Wärme",
        short: "Energie & Wärme",
        navLabel: "Krisenvorsorge: Energie & Wärme",
        intro: "Strom, Licht, Wärme und Kochen bei einem längeren Blackout – mit Powerstations, Solarmodulen, Balkonkraftwerk mit Speicher und sicherer Ausrüstung.",
        metaTitle: "Energie & Wärme im Blackout: Powerstation, Solar, Kochen",
        metaDescription: "Strom und Wärme im Blackout: die besten Powerstations, Solarmodule, Balkonkraftwerke mit Speicher sowie Gaskocher, Schlafsäcke und CO-Melder.",
        article: `
  <h2>Wenn der Strom länger weg ist</h2>
  <p class="quick">Eine Powerstation mit 1 kWh hält Router, Handys und Licht mehrere Tage am Laufen, ein Kühlschrank braucht deutlich mehr. Mit Solarmodulen lädt sie autark nach. Für Wärme und Kochen ohne Strom braucht es sichere Lösungen – und immer einen CO-Melder.</p>
  <p>Ein flächendeckender Stromausfall über viele Tage ist selten, kurze Ausfälle sind häufiger. Sinnvoll ist eine Lösung, die auch im Alltag nützt: Ein Balkonkraftwerk mit Speicher spart Stromkosten und liefert im Notfall Reserve, eine Powerstation begleitet beim Camping. Wichtig: Gaskocher und Heizgeräte für draußen gehören nicht in geschlossene Räume.</p>`,
      },
      {
        slug: "kommunikation-technik",
        name: "Kommunikation & Technik",
        short: "Kommunikation",
        navLabel: "Krisenvorsorge: Kommunikation & Technik",
        intro: "Erreichbar und informiert bleiben, wenn Mobilfunk und Internet ausfallen – mit Satellit, Mesh-Funk, Notfallradio, Funkgeräten, Powerbanks und IT-Sicherheit.",
        metaTitle: "Kommunikation im Notfall: Satellit, Funk, Radio, IT-Schutz",
        metaDescription: "Erreichbar ohne Netz: die besten Satelliten-Messenger, Meshtastic-Geräte, Kurbelradios, PMR-Funkgeräte, Powerbanks und Hardware für IT-Sicherheit.",
        article: `
  <h2>Informiert bleiben ohne Netz</h2>
  <p class="quick">Das wichtigste Gerät im Blackout ist ein batterie-, kurbel- oder solarbetriebenes Radio: Darüber informieren die Behörden. Für Kontakt zu Familie und Nachbarn helfen PMR-Funkgeräte und Meshtastic, für Notrufe abseits jedes Netzes ein Satelliten-Messenger.</p>
  <p>Mobilfunkmasten haben meist nur für kurze Zeit Notstrom. Danach bleiben UKW-Radio, Funk und Satellit. Weil Krisen zunehmend digital beginnen – mit Cyberangriffen auf Versorger, Behörden oder das eigene Konto –, gehört auch der Schutz der eigenen Daten zur Vorsorge: Hardware-Schlüssel, Offline-Backups und abschirmende Taschen.</p>`,
      },
      {
        slug: "lebensmittel-lagerung",
        name: "Lebensmittel & Lagerung",
        short: "Lebensmittel",
        navLabel: "Krisenvorsorge: Lebensmittel & Lagerung",
        intro: "Ein Vorrat für mindestens 10 Tage, haltbar und platzsparend gelagert – mit Langzeit-Notnahrung und Geräten zum Konservieren.",
        metaTitle: "Lebensmittelvorrat: Notnahrung & Lagerung für 10 Tage",
        metaDescription: "Vorrat für mindestens 10 Tage: die beste Langzeit-Notnahrung mit bis zu 25 Jahren Haltbarkeit und Geräte zum Vakuumieren, Einkochen und Mahlen.",
        article: `
  <h2>Ein Vorrat, der wirklich hält</h2>
  <p class="quick">Das BBK empfiehlt einen Lebensmittelvorrat für 10 Tage, möglichst aus Dingen, die ohne Kühlung lagern und auch kalt essbar sind. Langzeit-Notnahrung ergänzt den Alltagsvorrat; Vakuumierer, Einkochautomat und Getreidemühle machen ihn haltbarer.</p>
  <p>Der beste Vorrat besteht aus Lebensmitteln, die du ohnehin isst und regelmäßig verbrauchst und ersetzt. Notnahrung mit 10 bis 25 Jahren Haltbarkeit ist die Reserve dahinter: einmal kaufen, einlagern, Ablaufdatum notieren. Wer selbst konserviert, braucht die richtige Technik – und eine saubere Arbeitsweise.</p>`,
      },
      {
        slug: "schutzraum-ausstattung",
        name: "Schutzraum & Ausstattung",
        short: "Schutzraum",
        navLabel: "Krisenvorsorge: Schutzraum & Ausstattung",
        intro: "Keller oder Schutzraum so ausstatten, dass man dort einige Tage bleiben kann – mit Licht, Hygiene, Erster Hilfe, Brandschutz und Anbietern für Schutzräume.",
        metaTitle: "Schutzraum ausstatten: Licht, Hygiene, Erste Hilfe & Anbieter",
        metaDescription: "Keller und Schutzraum für einige Tage ausstatten: Stirnlampen, Notfallrucksack, Campingtoilette, Erste-Hilfe-Koffer nach DIN, Feuerlöscher und Schutzraum-Anbieter.",
        article: `
  <h2>Ein Raum für einige Tage</h2>
  <p class="quick">Ein gut ausgestatteter Keller braucht Licht ohne Strom, eine Toilettenlösung, Hygieneartikel, einen Erste-Hilfe-Kasten, Feuerlöscher und Löschdecke – dazu Wasser, Vorrat und ein Radio aus den anderen Themen.</p>
  <p>Öffentliche Schutzräume gibt es in Deutschland kaum noch; der Bund arbeitet an einem neuen Schutzraumkonzept. Bis dahin ist der eigene Keller oder ein innenliegender Raum die realistische Option. Wer mehr will, kann Schutzräume nachrüsten lassen oder Fertigbunker kaufen – das ist teuer und braucht Planung, Statik und oft eine Baugenehmigung.</p>`,
      },
    ],
  },
  {
    slug: "tennis-ballwand",
    name: "Tennis-Ballwand & Solo-Training",
    short: "Tennis solo",
    intro:
      "Allein trainieren, ohne Partner und ohne gebuchten Platz: mobile Rebounder, feste Prallwände, Ballwände für Kinder, Tennistrainer mit Ball an der Schnur, Ballmaschinen und das passende Zubehör.",
    metaTitle: "Tennis allein trainieren: Ballwand, Rebounder & Ballmaschine",
    metaDescription:
      "Die besten Tenniswände, Rebounder, Ballmaschinen und Tennistrainer für das Training ohne Partner – je Kategorie drei Empfehlungen mit Kaufberatung.",
    article: `
  <h2>Tennis ohne Partner: Was wirklich hilft</h2>
  <p class="quick">Für Schlagtechnik und Wiederholungen reicht eine Ballwand oder ein Rebounder. Wer Laufwege, Tempo und Spin trainieren will, braucht eine Ballmaschine. Auf kleinstem Raum hilft ein Tennistrainer mit Ball an der Schnur.</p>
  <p>Die klassische Trainingswand im Verein war für viele Generationen der erste Sparringspartner. Heute gibt es dieselbe Idee in vielen Größen: als freistehendes Netz für den Garten, als feste Prallwand an Garage oder Hauswand, als kleiner Rebounder für Kinder oder als Bodenplatte mit Gummiseil, die in jeden Kofferraum passt.</p>
  <p>Wir empfehlen ausschließlich Produkte, die bei Amazon erhältlich sind, und kennzeichnen Herstellerangaben als solche. Unabhängige Tests von Stiftung Warentest oder ähnlichen Instituten gibt es für diese Produktgruppen bislang nicht – umso wichtiger sind nachvollziehbare Kriterien.</p>
  <aside class="callout"><p class="ct">Tipp</p><p>Ein Rebounder ersetzt keinen Trainer. Wer gerade erst anfängt, holt sich am besten ein paar Stunden Unterricht und übt die Technik danach allein an der Wand.</p></aside>`,
  },
  {
    slug: "home-office",
    name: "Home-Office",
    short: "Home-Office",
    intro:
      "Ergonomisch arbeiten, im Call gut aussehen und gut klingen: höhenverstellbare Schreibtische, Monitore, Docking-Stations, Tastaturen, Mäuse, Licht, Webcams, Mikrofone und Gadgets.",
    metaTitle: "Home-Office einrichten: Die besten Produkte im Überblick",
    metaDescription:
      "Steh-Sitz-Tische, Monitore, Docks, Tastaturen, Mäuse, Webcams, Licht und Mikrofone fürs Home-Office – je Kategorie drei Empfehlungen mit Kaufberatung.",
    article: `
  <h2>Ein Arbeitsplatz, an dem man gern sitzt – und steht</h2>
  <p class="quick">Am meisten bringen im Home-Office drei Dinge: ein Tisch in der richtigen Höhe, ein Bildschirm auf Augenhöhe und gutes Licht. Danach folgen Eingabegeräte, Kamera und Mikrofon für Videocalls.</p>
  <p>Wer acht Stunden am Tag zu Hause arbeitet, merkt schnell, dass Küchentisch und Laptop keine Dauerlösung sind. Die Deutsche Gesetzliche Unfallversicherung (DGUV) und die Arbeitsstättenverordnung beschreiben, worauf es am Bildschirmarbeitsplatz ankommt: ausreichend Platz, ein Bildschirm, der sich in Höhe und Neigung anpassen lässt, getrennte Tastatur und Maus sowie blendfreies Licht.</p>
  <p>Unsere Ratgeber übersetzen diese Grundsätze in konkrete Produktempfehlungen – vom elektrischen Steh-Sitz-Tisch bis zur Webcam für den nächsten Kundentermin.</p>
  <aside class="callout"><p class="ct">Gut zu wissen</p><p>Wer überwiegend zu Hause arbeitet, kann die Ausstattung je nach Situation steuerlich geltend machen. Ob und in welchem Umfang, klärst du am besten mit deiner Steuerberatung.</p></aside>`,
  },
  {
    slug: "private-sportanlagen",
    name: "Private Sportanlagen",
    short: "Sportanlagen",
    intro:
      "Ein eigener Platz im Garten, vom Bolzplatz bis zum Multisportfeld: Kunstrasen, Sportböden, Court-Fliesen, Soccer-Cages, Basketballanlagen, Tore, Ballfangzäune, Flutlicht, Tischtennis, Shuffleboard und Pickleball.",
    metaTitle: "Sportplatz im Garten: Die beste Ausstattung im Überblick",
    metaDescription:
      "Kunstrasen, Court-Fliesen, Basketballanlagen, Tore, Ballfangnetze und Flutlicht für den eigenen Sportplatz im Garten – mit Kaufberatung und Planungstipps.",
    article: `
  <h2>Vom Rasenstück zum eigenen Sportplatz</h2>
  <p class="quick">Am Anfang steht die Fläche: Untergrund, Belag und Ballfang entscheiden, was später möglich ist. Tore, Körbe und Licht kommen danach – und sollten zur Fläche passen, nicht umgekehrt.</p>
  <p>Ein privater Sportplatz muss kein Vereinsgelände sein. Schon ein ebenes Stück Garten mit Kunstrasen oder Court-Fliesen, ein kippsicheres Tor und ein Ballfangnetz machen aus dem Garten einen Ort, an dem Kinder und Erwachsene stundenlang spielen. Wer mehr will, plant ein komplettes Multisportfeld mit Bande, Toren und Körben.</p>
  <p>Wir zeigen je Kategorie vor allem Premium-Ausstattung und dazu günstige Einstiegsvarianten. Für große Anlagen wie Soccer-Cages oder Padel-Courts gibt es kaum Angebote bei Amazon; dort nennen wir die Anbieter und erklären, worauf es bei Planung, Genehmigung und Nachbarschaft ankommt.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Tore und Basketballanlagen müssen gegen Umkippen gesichert sein. Nicht verankerte Tore haben schon zu schweren Unfällen geführt. Feste Bauten, Zäune und Flutlicht können außerdem genehmigungspflichtig sein – frag vorab bei deiner Gemeinde nach.</p></aside>`,
  },
  {
    slug: "kinder-spielplatz",
    name: "Kinder-Spielplatz",
    short: "Spielplatz",
    intro:
      "Klettern, rutschen, schaukeln – drinnen und im Garten: Pikler-Dreiecke, Indoor-Rutschen, Kletterwände, Sprossenwände, Deckenschaukeln, Spieltürme, Sandkästen, Seilbahnen, Hüpfburgen und die passende Fallschutzmatte.",
    metaTitle: "Kinder-Spielplatz: Die besten Spielgeräte für drinnen & draußen",
    metaDescription:
      "Pikler-Dreieck, Kletterwand, Deckenschaukel, Spielturm, Sandkasten und Seilbahn: die besten Spielgeräte für Kinderzimmer und Garten mit Sicherheitstipps.",
    article: `
  <h2>Ein Spielplatz zu Hause – sicher geplant</h2>
  <p class="quick">Ob Kinderzimmer oder Garten: Wähle Spielgeräte nach Alter und Platz, achte auf die Herstellerangaben zu Alter und Belastung und plane den Fallschutz von Anfang an mit. Geräte für den Hausgebrauch sollten nach EN 71 (Spielzeug) oder für den Garten nach EN 71-8 geprüft sein.</p>
  <p>Kinder wollen klettern, rutschen und schaukeln – bei jedem Wetter. Drinnen funktionieren Pikler-Dreieck, Sprossenwand, Kletterwand oder eine Schaukel an der Decke, draußen Spielturm, Gartenschaukel, Sandkasten und Seilbahn. Für jedes Gerät zeigen wir drei Empfehlungen und erklären, worauf es bei Alter, Montage und Sicherheit ankommt.</p>
  <p>Wir empfehlen nur Produkte, die bei Amazon erhältlich sind, und kennzeichnen Altersangaben und technische Daten als Herstellerangaben. Unabhängige Tests gibt es für diese Geräte nur selten; wo es sie gibt, nennen wir sie.</p>
  <aside class="callout warn"><p class="ct">Sicherheit</p><p>Kleinkinder beim Klettern, Rutschen und Schaukeln immer beaufsichtigen. Wand- und Deckenbefestigungen müssen zum Untergrund passen – im Zweifel eine Fachkraft fragen. Gartengeräte nach Herstellerangabe im Boden verankern und darunter einen weichen Fallschutz vorsehen.</p></aside>`,
    groups: [
      {
        slug: "indoor",
        name: "Indoor-Spielplatz",
        short: "Indoor",
        navLabel: "Kinder-Spielplatz: Indoor",
        intro: "Bewegung im Kinderzimmer, auch wenn es draußen regnet: Pikler-Dreieck, Indoor-Rutsche, Kletterwand, Sprossenwand, Deckenschaukel, Schaukeltuch, Spielhöhle und Fallschutzmatten.",
        metaTitle: "Indoor-Spielplatz fürs Kinderzimmer: Die besten Spielgeräte",
        metaDescription: "Pikler-Dreieck, Indoor-Rutsche, Kletterwand, Sprossenwand, Deckenschaukel und Spielhöhle: die besten Spielgeräte für drinnen mit Montage- und Sicherheitstipps.",
        article: `
  <h2>Klettern und Schaukeln im Kinderzimmer</h2>
  <p class="quick">Für die Kleinsten ist ein klappbares Pikler-Dreieck der beste Einstieg, ab dem Kindergartenalter kommen Sprossenwand, Kletterwand und Deckenschaukel dazu. Darunter gehört immer eine dämpfende Matte.</p>
  <p>Indoor-Spielgeräte müssen zwei Dinge können: in eine normale Wohnung passen und sicher befestigt sein. Freistehende Geräte wie Kletterdreiecke lassen sich wegräumen, Wand- und Deckenmontagen brauchen den richtigen Untergrund und passende Dübel. Die Altersangaben der Hersteller sind ein Richtwert – entscheidend ist, was dein Kind motorisch schon kann.</p>`,
      },
      {
        slug: "outdoor",
        name: "Outdoor-Spielplatz",
        short: "Outdoor",
        navLabel: "Kinder-Spielplatz: Outdoor",
        intro: "Der Spielplatz im eigenen Garten: Spielturm mit Rutsche, Gartenschaukel, Sandkasten mit Deckel, Seilbahn, Hüpfburg und aufblasbare Wasserrutsche.",
        metaTitle: "Spielplatz im Garten: Die besten Spielgeräte für draußen",
        metaDescription: "Spielturm, Gartenschaukel, Sandkasten mit Deckel, Seilbahn, Hüpfburg und Wasserrutsche: die besten Spielgeräte für den Garten mit Aufbau- und Sicherheitstipps.",
        article: `
  <h2>Der Garten als Spielplatz</h2>
  <p class="quick">Am meisten Spielwert auf wenig Fläche bringt ein Spielturm mit Rutsche und Schaukel. Für Kleinkinder reicht oft ein Sandkasten mit Deckel und eine Babyschaukel; Seilbahn und Hüpfburg sind etwas für größere Kinder und große Gärten.</p>
  <p>Gartenspielgeräte stehen das ganze Jahr draußen. Achte auf wetterfestes, kesseldruckimprägniertes oder von Natur aus haltbares Holz, auf Bodenanker und auf ausreichend Sicherheitsabstand rundherum. Für Spielgeräte im privaten Garten gilt die Norm EN 71-8; öffentliche Spielplätze folgen strengeren Regeln (EN 1176), an denen du dich bei Fallschutz und Abständen orientieren kannst.</p>`,
      },
    ],
  },
  {
    slug: "spielzimmer",
    name: "Spielzimmer",
    short: "Spielzimmer",
    intro:
      "Ein Kinderzimmer, in dem Spielen und Aufräumen leichtfallen: Bücherregale in Kinderhöhe, Kinderschränke, Kindertische mit Stühlen, mitwachsende Schreibtische, Spielteppiche und Sideboards.",
    metaTitle: "Spielzimmer einrichten: Die besten Kindermöbel im Überblick",
    metaDescription:
      "Kinderbücherregal, Kinderschrank, Kindertisch mit Stühlen, Kinderschreibtisch, Spielteppich und Sideboard: die besten Möbel fürs Spielzimmer mit Kaufberatung.",
    article: `
  <h2>Möbel, die mitspielen</h2>
  <p class="quick">Gute Spielzimmer-Möbel sind niedrig genug, dass Kinder selbst herankommen, standsicher an der Wand befestigt und robust genug für tägliches Ein- und Ausräumen. Tische und Stühle sollten zur Körpergröße passen – oder mitwachsen.</p>
  <p>Ein Spielzimmer funktioniert, wenn alles einen festen Platz hat: Bücher mit dem Cover nach vorn, Spielsachen in offenen Fächern oder Boxen, Malsachen am Kindertisch. Wir zeigen je Möbelstück drei Empfehlungen und erklären, worauf es bei Maßen, Material und Sicherheit ankommt.</p>
  <aside class="callout warn"><p class="ct">Kippschutz</p><p>Regale, Schränke und Kommoden im Kinderzimmer immer mit dem mitgelieferten Kippschutz an der Wand befestigen. Kinder klettern gern an Möbeln hoch – nicht gesicherte Möbel können umfallen.</p></aside>`,
  },
  {
    slug: "gaming-room",
    name: "Gaming-Room",
    short: "Gaming-Room",
    intro:
      "Ein Raum zum Zocken, Chillen und Feiern, mit Retro-Charme und High-End-Technik: Sitzsäcke, Gaming-Stühle und -Tische, Arcade-Automaten, Flipper, Airhockey, Kicker, Billard, Dart, Sim-Racing, VR, Beamer, Licht, Akustik, Retro-Konsolen und Kühlschrank.",
    metaTitle: "Gaming-Room einrichten: Die besten Produkte im Überblick",
    metaDescription:
      "Gaming-Stühle, Arcade-Automaten, Kicker, Billard, Sim-Racing, Beamer, LED-Licht und mehr für den eigenen Gaming-Room – je Kategorie drei Empfehlungen.",
    article: `
  <h2>Ein Raum, viele Spiele</h2>
  <p class="quick">Ein guter Gaming-Room verbindet drei Welten: bequemes Sitzen für lange Sessions, Spielgeräte für Freunde und Familie und Technik, die Bild und Ton auf ein neues Niveau hebt.</p>
  <p>Ob Partykeller, Dachboden oder ausgebaute Garage: Ein Gaming-Room lebt vom Mix. Neben Konsole und PC sorgen Kicker, Airhockey oder Dartautomat dafür, dass auch Gäste mitspielen, die keinen Controller in die Hand nehmen wollen. Retro-Automaten und Flipper bringen Spielhallen-Gefühl, Beamer und Sim-Racing-Cockpit das große Kino.</p>
  <p>Für jede Kategorie zeigen wir drei Empfehlungen und erklären, worauf es ankommt: Maße und Gewicht, Lautstärke, Strombedarf und was im Alltag wirklich Spaß macht.</p>
  <aside class="callout"><p class="ct">Planungstipp</p><p>Miss den Raum, bevor du kaufst: Billardtische, Kicker und Airhockey brauchen rundherum Platz zum Spielen – oft mehr als doppelt so viel wie das Gerät selbst.</p></aside>`,
  },
];
