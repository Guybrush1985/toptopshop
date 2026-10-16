// Inhalte der App. Gleiche Daten wie auf der Website (src/static/myshotcoach/assets/core.js).

export type StrokeId = 'vh' | 'rh' | 'vhv' | 'rhv' | 'sm' | 'rsm' | 'auf' | 'ret';
export type Stroke = { id: StrokeId; name: string; icon: string };

// Start nur mit Tennis und genau diesen 8 Schlägen (Entscheidung 16.10.2026).
export const STROKES: Stroke[] = [
  { id: 'vh', name: 'Vorhand', icon: 'fh' },
  { id: 'rh', name: 'Rückhand', icon: 'bh' },
  { id: 'vhv', name: 'Vorhand-Volley', icon: 'volley' },
  { id: 'rhv', name: 'Rückhand-Volley', icon: 'volleyb' },
  { id: 'sm', name: 'Schmetterball', icon: 'smash' },
  { id: 'rsm', name: 'Rückhand-Schmetterball', icon: 'smashb' },
  { id: 'auf', name: 'Aufschlag', icon: 'serve' },
  { id: 'ret', name: 'Return', icon: 'return' },
];
export const strokeById = (id?: string) => STROKES.find(s => s.id === id) || STROKES[0];

export type TierId = 'C' | 'B' | 'A' | 'P';
export type Tier = { id: TierId; name: string; short: string; ex: string; price: number; pro?: boolean };

// Preis pro Video-Antwort inkl. MwSt. Der Ex-Profi-Preis ist ein vorläufiger Platzhalter.
export const TIERS: Tier[] = [
  { id: 'C', name: 'C-Trainer / Übungsleiter', short: 'C-Trainer', ex: 'z. B. DTB-C-Lizenz oder Übungsleiter-Lizenz', price: 9 },
  { id: 'B', name: 'B-Trainer', short: 'B-Trainer', ex: 'z. B. DTB-B-Lizenz', price: 19 },
  { id: 'A', name: 'A-Trainer', short: 'A-Trainer', ex: 'z. B. DTB-A-Lizenz', price: 29 },
  { id: 'P', name: 'Ex-Profi', short: 'Ex-Profi', ex: 'ehemalige Tour-Spieler:innen', price: 49, pro: true },
];
export const tierById = (id?: string) => TIERS.find(t => t.id === id) || TIERS[0];
export const CUT = 0.25;
export const payout = (p: number) => Math.floor(p * (1 - CUT) * 100) / 100;
export const ACCEPT_HOURS = 72;

export type Coach = {
  id: string; name: string; tier: TierId; license: string; club: string; city: string; rating: number; reviews: number;
  resp: number; since: number; langs: string[]; focus: string[]; bio: string; certs: string[]; awards: string[]; example?: boolean;
};

// Fiktive Beispielprofile. In der App überall als „Beispiel“ gekennzeichnet.
export const COACHES: Coach[] = [
  { id: 'lena', name: 'Lena Hartmann', tier: 'A', license: 'DTB A-Lizenz', club: 'TC Möwenkante', city: 'Hamburg', rating: 4.9, reviews: 128, resp: 18, since: 2019,
    langs: ['Deutsch', 'Englisch'], focus: ['Aufschlag', 'Rückhand', 'Matchplan'],
    bio: 'Ich arbeite seit 14 Jahren mit Erwachsenen und Jugendlichen im Leistungsbereich. Mein Spezialgebiet ist der Aufschlag: In meiner Video-Antwort sage ich dir, was mir auffällt, und zeige dir, wo Energie verloren geht.',
    certs: ['DTB A-Trainer-Lizenz', 'DTB Athletiktrainer', 'Mentaltraining im Tennis'], awards: ['Landesmeisterin Damen 30, 2023'] },
  { id: 'marco', name: 'Marco Ruiz', tier: 'B', license: 'DTB B-Lizenz', club: 'TC Spreebogen', city: 'Berlin', rating: 4.8, reviews: 64, resp: 12, since: 2022,
    langs: ['Deutsch', 'Spanisch', 'Englisch'], focus: ['Topspin-Vorhand', 'Beinarbeit', 'Sandplatz'],
    bio: 'Aufgewachsen auf den Sandplätzen von Valencia, seit vier Jahren Trainer in Berlin. Im Video zeige ich dir, wie du mit den Beinen mehr Spin erzeugst, und gebe dir drei Übungen für die nächste Einheit.',
    certs: ['DTB B-Trainer-Lizenz', 'DTB C-Trainer-Lizenz Leistungssport'], awards: ['Vize-Stadtmeister Berlin 2025'] },
  { id: 'jonas', name: 'Jonas Weber', tier: 'C', license: 'DTB C-Lizenz Breitensport', club: 'TSV Isarbogen', city: 'München', rating: 4.6, reviews: 41, resp: 24, since: 2023,
    langs: ['Deutsch'], focus: ['Vorhand', 'Einsteiger:innen', 'Jugend'],
    bio: 'Ich trainiere vor allem Hobbyspieler:innen und Kids. Meine Video-Antworten sind kurz und klar, mit Übungen, die du auch alleine an der Ballwand machen kannst.',
    certs: ['DTB C-Trainer-Lizenz Breitensport', 'Kindertennis-Zertifikat'], awards: [] },
  { id: 'aylin', name: 'Aylin Demir', tier: 'B', license: 'DTB B-Lizenz', club: 'TV Förde-Nord', city: 'Kiel', rating: 4.9, reviews: 87, resp: 10, since: 2020,
    langs: ['Deutsch', 'Türkisch'], focus: ['Volley', 'Doppel', 'Rückhand-Slice'],
    bio: 'Ehemalige Regionalliga-Spielerin und Doppel-Spezialistin. Ich schaue mir dein Video aus allen Perspektiven an und achte besonders auf Schlägerhaltung und Beinarbeit am Netz.',
    certs: ['DTB B-Trainer-Lizenz'], awards: ['Regionalliga-Meisterin Damen 2018'] },
  { id: 'sofia', name: 'Sofia Lindqvist', tier: 'A', license: 'DTB A-Lizenz', club: 'TC Mainufer', city: 'Frankfurt', rating: 4.8, reviews: 59, resp: 16, since: 2021,
    langs: ['Englisch', 'Deutsch', 'Schwedisch'], focus: ['Return', 'Taktik', 'Leistungssport Jugend'],
    bio: 'Ich betreue Jugendliche auf dem Weg in den Leistungssport. Im Video zeige ich dir, wie du den Return früher nimmst und damit sofort Druck machst.',
    certs: ['DTB A-Trainer-Lizenz', 'Schwedische Trainerlizenz Nivå 3'], awards: [] },
  { id: 'ben', name: 'Ben Okafor', tier: 'C', license: 'Übungsleiter-Lizenz Tennis', club: 'TC Pleiße', city: 'Leipzig', rating: 4.7, reviews: 19, resp: 20, since: 2024,
    langs: ['Deutsch', 'Englisch'], focus: ['Einsteiger:innen', 'Aufschlag', 'Wiedereinstieg'],
    bio: 'Ich helfe vor allem Erwachsenen, die (wieder) mit Tennis anfangen. Kein Fachchinesisch, sondern ein, zwei Dinge, die sofort etwas bringen.',
    certs: ['Übungsleiter-Lizenz C Tennis'], awards: [] },
  { id: 'mia', name: 'Mia Schröder', tier: 'A', license: 'DTB A-Lizenz', club: 'TC Weserkante', city: 'Bremen', rating: 4.8, reviews: 47, resp: 14, since: 2021,
    langs: ['Deutsch'], focus: ['Beinarbeit', 'Vorhand', 'Athletik'],
    bio: 'Tennis wird mit den Füßen gespielt. In meiner Video-Antwort zeige ich dir Laufwege und eine Übungsroutine für zehn Minuten am Tag.',
    certs: ['DTB A-Trainer-Lizenz', 'Athletiktrainer-Zertifikat'], awards: ['Landesmeisterin Damen 2017'] },
  { id: 'tom', name: 'Tom Berger', tier: 'P', license: 'Ehemaliger ATP-Profi', club: 'TC Alsterblick', city: 'Hamburg', rating: 5.0, reviews: 22, resp: 30, since: 2025,
    langs: ['Deutsch', 'Englisch', 'Französisch'], focus: ['Aufschlag', 'Matchplan', 'Turnierspieler:innen'],
    bio: 'Zehn Jahre auf der ATP-Tour, Challenger- und ATP-500-Turniere. Heute schaue ich auf die Technik ambitionierter Spieler:innen und erkläre dir, was auf der Tour den Unterschied macht.',
    certs: ['Beste ATP-Platzierung im Doppel: 112', 'DTB B-Trainer-Lizenz'], awards: ['Zwei Challenger-Titel im Doppel'] },
].map(c => ({ ...c, tier: c.tier as TierId, example: true }));
export const coachById = (id?: string) => COACHES.find(c => c.id === id);

export const REVIEWS = [
  { n: 'Paul', s: 5, d: 'vor 3 Tagen', st: 'Aufschlag', t: 'Super konkret. Nach zwei Wochen mit den Übungen aus dem Video kommt mein erster Aufschlag deutlich öfter rein.' },
  { n: 'Nele', s: 5, d: 'vor 1 Woche', st: 'Rückhand', t: 'Sie sagt mir genau, wo mein Treffpunkt liegt. Das hätte ich alleine nie gesehen.' },
  { n: 'Chris', s: 4, d: 'vor 3 Wochen', st: 'Vorhand-Volley', t: 'Sehr gute Video-Antwort, ich hätte mir noch eine Übung mehr gewünscht.' },
];

// Filmanleitung: rundherum filmen, je 5 Schläge pro Perspektive.
export const FILM_STEPS = [
  { k: 'side', t: '5 Schläge von der Seite', d: 'Handy seitlich aufstellen, du schaust beim Schlag zur Kamera.' },
  { k: 'back', t: '5 Schläge von hinten', d: 'Handy hinter dich stellen, Blick Richtung Netz.' },
  { k: 'other', t: '5 Schläge von der anderen Seite', d: 'Handy auf die andere Seite stellen.' },
] as const;
export const FILM_TIPS = [
  'Du und dein Schläger sind die ganze Zeit komplett im Bild, von den Füßen bis zur Schlägerspitze.',
  'Handy quer halten, am besten auf ein Stativ oder an den Zaun klemmen.',
  'Bei Tageslicht oder gutem Hallenlicht filmen, nicht gegen die Sonne.',
];

// Ratgeber für Video-Antworten (Coach-Bereich)
export const ANSWER_GUIDE = [
  { t: 'Ganzes Video anschauen', d: 'Schau dir alle 15 Schläge aus allen drei Perspektiven an, bevor du aufnimmst.' },
  { t: 'Am Platz aufnehmen', d: 'Am liebsten auf dem Court, Schläger in der Hand. So wirkt deine Antwort wie eine echte Trainerstunde.' },
  { t: 'Sagen, was dir auffällt', d: 'Sprich die zwei, drei wichtigsten Punkte an, die du im Video gesehen hast. Keine Zeitlupen-Analyse nötig.' },
  { t: 'Richtig vormachen', d: 'Zeig den Schlag korrekt, idealerweise mit Ball, und gib dabei konkrete Tipps zur Verbesserung.' },
  { t: 'Mit einer Übung abschließen', d: 'Gib eine Übung mit, die die Person in der nächsten Einheit umsetzen kann.' },
];

export const PAY_METHODS = [
  { id: 'applepay', name: 'Apple Pay' },
  { id: 'googlepay', name: 'Google Pay' },
  { id: 'paypal', name: 'PayPal' },
  { id: 'card', name: 'Kredit- oder Debitkarte' },
  { id: 'credit', name: 'Guthaben' },
] as const;
export type PayMethod = typeof PAY_METHODS[number]['id'];

export const WEB = 'https://toptop.shop/myshotcoach/';
export const LINKS = {
  impressum: WEB + 'impressum/',
  datenschutz: WEB + 'datenschutz/',
  hinweise: WEB + 'hinweise/',
  trainerWerden: 'https://trainer.tennis.de/de/trainer-werden',
};
export const CONTACT = 'info@tanmeon.de';

export const fmtEUR = (v: number) => v.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 });
export const fmtNum = (v: number, d = 1) => v.toFixed(d).replace('.', ',');
export const initials = (name: string) => (name || '?').split(/\s+/).filter(Boolean).map(x => x[0]).join('').slice(0, 2).toUpperCase();
export const minPrice = Math.min(...TIERS.map(t => t.price));
