// Stammdaten und Demo-Profile für den Prototyp.
window.TN_DATA = (() => {
  const languages = {
    de: { name: "Deutsch", flag: "🇩🇪" },
    en: { name: "Englisch", flag: "🇬🇧" },
    es: { name: "Spanisch", flag: "🇪🇸" },
    fr: { name: "Französisch", flag: "🇫🇷" },
    it: { name: "Italienisch", flag: "🇮🇹" },
    pt: { name: "Portugiesisch", flag: "🇵🇹" },
    nl: { name: "Niederländisch", flag: "🇳🇱" },
    pl: { name: "Polnisch", flag: "🇵🇱" },
    tr: { name: "Türkisch", flag: "🇹🇷" },
    ru: { name: "Russisch", flag: "🇷🇺" },
    uk: { name: "Ukrainisch", flag: "🇺🇦" },
    ar: { name: "Arabisch", flag: "🇸🇦" },
    zh: { name: "Chinesisch", flag: "🇨🇳" },
    ja: { name: "Japanisch", flag: "🇯🇵" },
    ko: { name: "Koreanisch", flag: "🇰🇷" },
    sv: { name: "Schwedisch", flag: "🇸🇪" },
  };

  const levels = [
    { code: "A1", label: "A1 – Anfänger" },
    { code: "A2", label: "A2 – Grundlagen" },
    { code: "B1", label: "B1 – Mittelstufe" },
    { code: "B2", label: "B2 – Gute Mittelstufe" },
    { code: "C1", label: "C1 – Fortgeschritten" },
    { code: "C2", label: "C2 – Annähernd muttersprachlich" },
  ];

  // Städte mit Koordinaten und UTC-Abstand (Winterzeit), für Entfernung und Uhrzeit.
  const cities = {
    berlin: { name: "Berlin", country: "Deutschland", lat: 52.52, lon: 13.4, tz: 1 },
    hamburg: { name: "Hamburg", country: "Deutschland", lat: 53.55, lon: 9.99, tz: 1 },
    muenchen: { name: "München", country: "Deutschland", lat: 48.14, lon: 11.58, tz: 1 },
    koeln: { name: "Köln", country: "Deutschland", lat: 50.94, lon: 6.96, tz: 1 },
    leipzig: { name: "Leipzig", country: "Deutschland", lat: 51.34, lon: 12.37, tz: 1 },
    wien: { name: "Wien", country: "Österreich", lat: 48.21, lon: 16.37, tz: 1 },
    zuerich: { name: "Zürich", country: "Schweiz", lat: 47.38, lon: 8.54, tz: 1 },
    london: { name: "London", country: "Vereinigtes Königreich", lat: 51.51, lon: -0.13, tz: 0 },
    dublin: { name: "Dublin", country: "Irland", lat: 53.35, lon: -6.26, tz: 0 },
    newyork: { name: "New York", country: "USA", lat: 40.71, lon: -74.0, tz: -5 },
    toronto: { name: "Toronto", country: "Kanada", lat: 43.65, lon: -79.38, tz: -5 },
    sydney: { name: "Sydney", country: "Australien", lat: -33.87, lon: 151.21, tz: 11 },
    madrid: { name: "Madrid", country: "Spanien", lat: 40.42, lon: -3.7, tz: 1 },
    barcelona: { name: "Barcelona", country: "Spanien", lat: 41.39, lon: 2.17, tz: 1 },
    mexiko: { name: "Mexiko-Stadt", country: "Mexiko", lat: 19.43, lon: -99.13, tz: -6 },
    buenosaires: { name: "Buenos Aires", country: "Argentinien", lat: -34.6, lon: -58.38, tz: -3 },
    paris: { name: "Paris", country: "Frankreich", lat: 48.86, lon: 2.35, tz: 1 },
    lyon: { name: "Lyon", country: "Frankreich", lat: 45.76, lon: 4.84, tz: 1 },
    montreal: { name: "Montréal", country: "Kanada", lat: 45.5, lon: -73.57, tz: -5 },
    rom: { name: "Rom", country: "Italien", lat: 41.9, lon: 12.5, tz: 1 },
    mailand: { name: "Mailand", country: "Italien", lat: 45.46, lon: 9.19, tz: 1 },
    lissabon: { name: "Lissabon", country: "Portugal", lat: 38.72, lon: -9.14, tz: 0 },
    saopaulo: { name: "São Paulo", country: "Brasilien", lat: -23.55, lon: -46.63, tz: -3 },
    amsterdam: { name: "Amsterdam", country: "Niederlande", lat: 52.37, lon: 4.9, tz: 1 },
    warschau: { name: "Warschau", country: "Polen", lat: 52.23, lon: 21.01, tz: 1 },
    istanbul: { name: "Istanbul", country: "Türkei", lat: 41.01, lon: 28.98, tz: 3 },
    kyjiw: { name: "Kyjiw", country: "Ukraine", lat: 50.45, lon: 30.52, tz: 2 },
    kairo: { name: "Kairo", country: "Ägypten", lat: 30.04, lon: 31.24, tz: 2 },
    shanghai: { name: "Shanghai", country: "China", lat: 31.23, lon: 121.47, tz: 8 },
    tokio: { name: "Tokio", country: "Japan", lat: 35.68, lon: 139.69, tz: 9 },
    seoul: { name: "Seoul", country: "Südkorea", lat: 37.57, lon: 126.98, tz: 9 },
    stockholm: { name: "Stockholm", country: "Schweden", lat: 59.33, lon: 18.07, tz: 1 },
  };

  const hobbies = [
    "Kochen", "Reisen", "Fotografie", "Musik", "Gitarre", "Lesen", "Filme & Serien", "Fußball", "Laufen",
    "Yoga", "Klettern", "Wandern", "Radfahren", "Gaming", "Programmieren", "Kunst", "Tanzen", "Gärtnern",
    "Podcasts", "Geschichte", "Politik", "Mode", "Anime", "Kaffee", "Wein", "Brettspiele", "Schwimmen",
  ];

  // native: Muttersprache(n) · learn: [Sprache, Niveau] · online: Startzustand im Prototyp
  const p = (id, name, age, city, native, learn, hobbies, bio, online = true) => ({
    id, name, age, city, native, learn: learn.map(([lang, level]) => ({ lang, level })), hobbies, bio, online,
  });

  const people = [
    p("u01", "Lucía", 27, "madrid", ["es"], [["de", "B1"], ["en", "C1"]], ["Kochen", "Reisen", "Fotografie"], "Ich ziehe nächstes Jahr nach Berlin und will mein Deutsch im Alltag sicherer machen. Gern über Essen, Reisen und Bücher."),
    p("u02", "James", 34, "london", ["en"], [["de", "A2"]], ["Fußball", "Podcasts", "Geschichte"], "Software engineer, learning German for my partner's family. Patient and happy to correct your English."),
    p("u03", "Camille", 23, "lyon", ["fr"], [["de", "B2"]], ["Kunst", "Tanzen", "Filme & Serien"], "Studentin der Germanistik. Ich suche jemanden, mit dem ich frei quatschen kann, ohne Lehrbuch."),
    p("u04", "Mateo", 31, "buenosaires", ["es"], [["de", "A2"], ["en", "B2"]], ["Musik", "Gitarre", "Fußball"], "Musiker aus Buenos Aires. Abends nach der Probe bin ich oft online, bei euch ist dann früher Morgen."),
    p("u05", "Yuki", 29, "tokio", ["ja"], [["de", "B1"]], ["Anime", "Kaffee", "Fotografie"], "Ich arbeite für eine deutsche Firma in Tokio. Ich bringe dir gern Japanisch bei, auch Keigo."),
    p("u06", "Giulia", 26, "mailand", ["it"], [["de", "A2"], ["en", "B2"]], ["Mode", "Yoga", "Kochen"], "Designerin aus Mailand. Ich will Deutsch für die Arbeit lernen und liebe es, über Rezepte zu reden."),
    p("u07", "Emily", 22, "toronto", ["en", "fr"], [["de", "B1"]], ["Klettern", "Wandern", "Lesen"], "Bilingual EN/FR from Canada, planning a semester in Munich. Let's talk about outdoors stuff!"),
    p("u08", "Ana", 35, "saopaulo", ["pt"], [["de", "A1"], ["en", "B1"]], ["Tanzen", "Musik", "Reisen"], "Ich fange gerade erst mit Deutsch an. Dafür erkläre ich dir brasilianisches Portugiesisch mit viel Geduld."),
    p("u09", "Oksana", 30, "kyjiw", ["uk", "ru"], [["de", "B2"]], ["Lesen", "Geschichte", "Laufen"], "Übersetzerin. Ich möchte mein gesprochenes Deutsch flüssiger machen."),
    p("u10", "Mehmet", 28, "istanbul", ["tr"], [["de", "B1"]], ["Fußball", "Gaming", "Programmieren"], "Entwickler, möchte nach Deutschland ziehen. Türkisch lernen? Gern, ich bin ein geduldiger Lehrer."),
    p("u11", "Sophie", 41, "paris", ["fr"], [["de", "A2"]], ["Wein", "Kochen", "Gärtnern"], "Ich habe deutsche Nachbarn in unserem Ferienhaus und will endlich mitreden können."),
    p("u12", "Liam", 25, "dublin", ["en"], [["es", "B1"], ["de", "A1"]], ["Laufen", "Musik", "Brettspiele"], "Irish, just started German, a bit better at Spanish. Friendly chats welcome."),
    p("u13", "Mei", 33, "shanghai", ["zh"], [["de", "B1"], ["en", "C1"]], ["Kunst", "Kaffee", "Reisen"], "Architektin, wohne bald in Hamburg. Ich helfe dir gern mit Mandarin und Schriftzeichen."),
    p("u14", "Jakub", 24, "warschau", ["pl"], [["de", "B2"]], ["Gaming", "Radfahren", "Filme & Serien"], "Polnisch gegen Deutsch? Ich bin Student und habe flexible Zeiten."),
    p("u15", "Sara", 29, "barcelona", ["es"], [["fr", "B1"], ["de", "B1"]], ["Yoga", "Schwimmen", "Fotografie"], "Aus Barcelona, mag Meer und Bücher. Ich spreche auch Katalanisch."),
    p("u16", "Daan", 37, "amsterdam", ["nl"], [["de", "B2"], ["es", "A2"]], ["Radfahren", "Podcasts", "Politik"], "Niederländisch ist leichter als du denkst! Ich will mein Deutsch für Kunden verbessern."),
    p("u17", "Ji-woo", 26, "seoul", ["ko"], [["de", "A2"], ["en", "B2"]], ["Tanzen", "Musik", "Kochen"], "K-Pop-Tänzerin und Deutsch-Fan. Ich bringe dir Koreanisch bei, du mir Deutsch?"),
    p("u18", "Olivia", 30, "sydney", ["en"], [["de", "B1"]], ["Schwimmen", "Wandern", "Fotografie"], "Aussie with German grandparents. Online early mornings your time."),
    p("u19", "Karim", 32, "kairo", ["ar"], [["de", "B1"], ["en", "C1"]], ["Geschichte", "Fotografie", "Kaffee"], "Reiseleiter in Kairo. Ägyptisches Arabisch und Hocharabisch, ganz wie du magst."),
    p("u20", "Elena", 27, "rom", ["it"], [["de", "B2"]], ["Lesen", "Kunst", "Wein"], "Ich unterrichte Latein und will Deutsch sprechen, nicht nur lesen."),
    p("u21", "Hannah", 28, "berlin", ["de"], [["es", "B1"]], ["Reisen", "Klettern", "Kochen"], "Berlinerin, plane ein Jahr in Lateinamerika. Ich korrigiere gern dein Deutsch.", true),
    p("u22", "Tobias", 35, "muenchen", ["de"], [["en", "B2"], ["fr", "A2"]], ["Radfahren", "Wandern", "Brettspiele"], "Ingenieur aus München. Englisch für Meetings, Französisch für den Urlaub.", true),
    p("u23", "Lena", 24, "wien", ["de"], [["it", "A2"]], ["Musik", "Kaffee", "Kunst"], "Wienerin, studiere Musik. Italienisch klingt wie Musik, darum will ich es lernen.", false),
    p("u24", "Noah", 31, "zuerich", ["de", "fr"], [["en", "C1"], ["ja", "A1"]], ["Anime", "Programmieren", "Klettern"], "Zweisprachig DE/FR aus Zürich, fange gerade mit Japanisch an.", true),
    p("u25", "Marie", 38, "hamburg", ["de"], [["pt", "B1"]], ["Tanzen", "Reisen", "Yoga"], "Hamburgerin mit Liebe zu Brasilien. Ich suche Gesprächspartner für Portugiesisch.", false),
    p("u26", "Jonas", 26, "koeln", ["de"], [["tr", "A2"], ["en", "B2"]], ["Fußball", "Gaming", "Podcasts"], "Aus Köln, viele türkische Freunde, will endlich mehr verstehen.", true),
    p("u27", "Pedro", 29, "lissabon", ["pt"], [["de", "B1"]], ["Schwimmen", "Musik", "Kochen"], "Surfer und Koch aus Lissabon. Deutsch für meine Arbeit in einem Restaurant in Berlin.", false),
    p("u28", "Amélie", 33, "montreal", ["fr"], [["de", "B1"], ["es", "B1"]], ["Lesen", "Podcasts", "Radfahren"], "Québécoise, j'adore les langues. Französisch aus Kanada klingt anders, versprochen!", false),
    p("u29", "Wei", 27, "shanghai", ["zh"], [["en", "B2"], ["de", "A2"]], ["Programmieren", "Brettspiele", "Laufen"], "Entwickler, spiele gern Go. Ich lerne Deutsch für einen Masterplatz.", false),
    p("u30", "Astrid", 34, "stockholm", ["sv"], [["de", "B1"]], ["Wandern", "Gärtnern", "Lesen"], "Schwedin mit Sommerhaus voller deutscher Gäste. Ich will mitreden und Schwedisch teilen.", true),
    p("u31", "Diego", 36, "mexiko", ["es"], [["de", "A2"], ["en", "C1"]], ["Kochen", "Geschichte", "Fußball"], "Historiker aus Mexiko-Stadt. Spanisch mit mexikanischem Akzent gefällig?", true),
    p("u32", "Chloe", 29, "newyork", ["en"], [["de", "B2"], ["it", "A2"]], ["Kunst", "Filme & Serien", "Laufen"], "Museum curator in NYC. I want to keep my German alive.", true),
  ];

  return { languages, levels, cities, hobbies, people };
})();
