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
  <p class="quick">Bei Rauch oder einer Schadstoffwarnung gilt: drinnen bleiben, Fenster und Türen schließen, Lüftung und Klimaanlage ausschalten. Ein HEPA-Luftreiniger holt Partikel aus der Raumluft, eine FFP3-Maske schützt draußen vor Feinstaub – gegen Gase helfen nur passende Gasfilter.</p>
  <p>Die drei Ratgeber dieses Themas greifen ineinander: Ein abgedichteter Raum lässt weniger belastete Außenluft herein, der Luftreiniger filtert, was trotzdem eindringt, und die Maske schützt, wenn du nach draußen musst. Wichtig ist, die Grenzen zu kennen: Kein Partikelfilter hält Kohlenmonoxid zurück, und ein dicht abgeklebter Raum braucht nach einiger Zeit wieder Frischluft.</p>`,
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
];
