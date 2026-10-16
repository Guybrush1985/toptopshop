import type { StrokeId, TierId } from './data';

// Beispiel-Anfragen für den Coach-Bereich in der Vorschau
export const COACH_JOBS: { id: string; stroke: StrokeId; tier: TierId; player: string; ago: string; note: string }[] = [
  { id: 'j3', stroke: 'rh', tier: 'B', player: 'Sven, 41', ago: 'vor 2 Stunden', note: 'Meine einhändige Rückhand wird immer zu kurz.' },
  { id: 'j2', stroke: 'auf', tier: 'B', player: 'Clara, 17', ago: 'vor 5 Stunden', note: 'Ich will den zweiten Aufschlag mit mehr Kick spielen.' },
  { id: 'j1', stroke: 'vhv', tier: 'B', player: 'Mehmet, 35', ago: 'gestern', note: '' },
];
