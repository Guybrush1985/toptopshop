import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import { C } from '@/lib/theme';

// Schlag-Icons: Person mit Schläger in der Schlagposition, dazu Ball und Schwungbahn (Raster 64 × 64).
// Übernommen aus der Website (core.js), damit App und Website gleich aussehen.
type Pt = [number, number];
type Pose = { h: Pt; n: Pt; p: Pt; ke: Pt; fe: Pt; kv: Pt; fv: Pt; e1: Pt; w1: Pt; e2: Pt; w2: Pt; r: number; ball?: Pt; trail?: string; net?: boolean };
const POSES: Record<string, Pose> = {
  fh: { h: [25, 13], n: [26, 20], p: [25, 36], ke: [18, 46], fe: [12, 58], kv: [33, 46], fv: [38, 58], e1: [34, 26], w1: [42, 29], e2: [18, 24], w2: [13, 20], r: 82, ball: [55, 27], trail: 'M10 44 Q 22 54 40 33' },
  bh: { h: [27, 13], n: [27, 20], p: [26, 36], ke: [19, 46], fe: [13, 58], kv: [34, 46], fv: [39, 58], e1: [34, 27], w1: [40, 31], e2: [32, 30], w2: [39, 32], r: 72, ball: [55, 24], trail: 'M12 46 Q 20 56 38 35' },
  volley: { h: [27, 15], n: [27, 22], p: [25, 38], ke: [17, 47], fe: [11, 58], kv: [34, 47], fv: [41, 58], e1: [35, 26], w1: [40, 21], e2: [20, 28], w2: [25, 33], r: 28, ball: [49, 12], trail: 'M60 12 H 52', net: true },
  smash: { h: [26, 15], n: [27, 22], p: [27, 38], ke: [22, 48], fe: [18, 58], kv: [33, 48], fv: [37, 58], e1: [33, 13], w1: [37, 7], e2: [20, 14], w2: [16, 7], r: 52, ball: [51, 2], trail: 'M18 4 Q 28 -2 44 8' },
  serve: { h: [28, 15], n: [28, 22], p: [27, 38], ke: [22, 48], fe: [17, 58], kv: [34, 48], fv: [38, 58], e1: [19, 22], w1: [15, 14], e2: [32, 13], w2: [35, 6], r: -25, ball: [37, -4], trail: 'M35 4 V -1' },
  return: { h: [30, 17], n: [30, 24], p: [30, 39], ke: [21, 47], fe: [16, 58], kv: [39, 47], fv: [44, 58], e1: [36, 29], w1: [40, 33], e2: [32, 32], w2: [39, 34], r: 55, ball: [60, 12], trail: 'M68 6 L 58 13' },
};
// Rückansicht: Person von hinten, Schläger rechts neben dem Körper
const BACK: Pose = { h: [32, 13], n: [32, 20], p: [32, 37], ke: [26, 47], fe: [23, 58], kv: [38, 47], fv: [41, 58], e1: [39, 27], w1: [44, 33], e2: [25, 27], w2: [21, 33], r: 150 };

const seg = (...pts: Pt[]) => 'M' + pts.map(x => x.join(' ')).join('L');

function Figure({ q, color }: { q: Pose; color: string }) {
  return (
    <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <Path d={seg(q.fe, q.ke, q.p, q.kv, q.fv)} strokeWidth={4} />
      <Path d={seg(q.p, q.n)} strokeWidth={5} />
      <Path d={seg(q.n, q.e2, q.w2)} strokeWidth={3.4} />
      <Path d={seg(q.n, q.e1, q.w1)} strokeWidth={3.4} />
      <Circle cx={q.h[0]} cy={q.h[1]} r={4.6} fill={color} stroke="none" />
    </G>
  );
}
// Ursprung = Griffende in der Hand, a = Richtung des Schlägerkopfs (0 = oben, 90 = rechts)
function Racket({ x, y, a, color, s = 0.72 }: { x: number; y: number; a: number; color: string; s?: number }) {
  return (
    <G transform={`translate(${x} ${y}) rotate(${a}) scale(${s})`}>
      <Path d="M0 0v-15" stroke={color} strokeWidth={4.6} strokeLinecap="round" />
      <Ellipse cx={0} cy={-28} rx={9.5} ry={13} fill="none" stroke={color} strokeWidth={3.4} />
      <Path d="M-4.5 -38v20M0 -41v26M4.5 -38v20M-8.5 -32h17M-8.5 -24h17" stroke={color} strokeWidth={1.3} opacity={0.45} />
    </G>
  );
}

export function StrokeIcon({ k, size = 64, color = C.ink, ball = C.volt }: { k: string; size?: number; color?: string; ball?: string }) {
  const flip = /b$/.test(k) && k !== 'bh';
  const q = POSES[flip ? k.slice(0, -1) : k] || POSES.fh;
  return (
    <Svg width={size} height={size * 86 / 76} viewBox="-6 -22 76 86">
      <G transform={flip ? 'translate(64 0) scale(-1 1)' : undefined}>
        <Path d="M0 60.5h64" stroke={color} strokeWidth={1.4} opacity={0.3} />
        {q.net && <Path d="M58 34v26" stroke={color} strokeWidth={1.6} strokeDasharray="2 3" opacity={0.5} />}
        {q.trail && <Path d={q.trail} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeDasharray="0.5 4.5" opacity={0.55} />}
        <Figure q={q} color={color} />
        <Racket x={q.w1[0]} y={q.w1[1]} a={q.r} color={color} />
        {q.ball && <Circle cx={q.ball[0]} cy={q.ball[1]} r={3.6} fill={ball} stroke={color} strokeWidth={1.2} />}
      </G>
    </Svg>
  );
}

// Handy quer mit Spieler:in komplett im Bild – für die Filmanleitung
export function PhoneFrameIcon({ view = 'side', size = 72, color = C.ink }: { view?: 'side' | 'back' | 'other'; size?: number; color?: string }) {
  const pose = view === 'back' ? BACK : POSES.fh;
  return (
    <Svg width={size} height={size * 44 / 64} viewBox="0 0 64 44">
      <Rect x={2} y={4} width={60} height={36} rx={6} fill="none" stroke={color} strokeWidth={2.2} />
      <Circle cx={57} cy={22} r={1.6} fill={color} />
      <Path d="M9 11v-3h4M47 8h4v3M9 33v3h4M47 36h4v-3" fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" opacity={0.55} />
      <G transform={view === 'other' ? 'translate(64 0) scale(-1 1)' : undefined}>
        <G transform={view === 'back' ? 'translate(16 7) scale(.5)' : 'translate(13 7) scale(.5)'}>
          <Figure q={pose} color={color} />
          <Racket x={pose.w1[0]} y={pose.w1[1]} a={pose.r} color={color} />
        </G>
      </G>
    </Svg>
  );
}

// Rundherum filmen: Person mit Kreisbahn um die Füße, Pfeil und Handy auf der Bahn
export function AroundIcon({ size = 64, color = C.ink }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M10 50 A 22 8 0 0 0 54 50" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <Path d="M54 50 A 22 8 0 0 0 10 50" fill="none" stroke={color} strokeWidth={1.6} strokeDasharray="1.5 3.5" strokeLinecap="round" opacity={0.5} />
      <Path d="M49 52.5l5.5-2.5-1 6" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <G transform="translate(16 18) scale(.52)"><Figure q={BACK} color={color} /><Racket x={BACK.w1[0]} y={BACK.w1[1]} a={BACK.r} color={color} /></G>
      <Rect x={25} y={53} width={14} height={9} rx={2} fill={C.volt} stroke={color} strokeWidth={1.6} />
      <Circle cx={35.5} cy={57.5} r={1.2} fill={color} />
    </Svg>
  );
}

// Großes Spieler-Motiv auf dunklem Court für Start und Platzhalter-Videos
export function CourtHero({ width = 340, pose = 'fh' }: { width?: number; pose?: string }) {
  const q = POSES[pose] || POSES.fh;
  const h = width * 9 / 16;
  return (
    <Svg width={width} height={h} viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">
      <Rect width={640} height={360} fill="#8FB6C9" />
      <Path d="M0 120 Q 120 96 220 112 T 430 104 T 640 116 V 190 H 0 Z" fill="#4F7A5A" />
      <Rect y={150} width={640} height={62} fill="#1F4A3A" />
      <Path d="M0 212 H640 V360 H0Z" fill="#2E6A94" />
      <Path d="M0 212 H640 L640 232 H0Z" fill="#B3502C" />
      <Path d="M0 300 L640 270" stroke="#fff" strokeOpacity={0.9} strokeWidth={4} />
      <Path d="M560 196v92" stroke="#E6E9EC" strokeWidth={6} />
      <Path d="M560 210 L 640 206 V 268 L 560 276Z" fill="#0B0F14" fillOpacity={0.35} />
      <Path d="M560 210 L640 206" stroke="#fff" strokeWidth={5} />
      <Ellipse cx={200} cy={318} rx={90} ry={10} fill="#000" fillOpacity={0.22} />
      <G transform="translate(70 34) scale(4.9)">
        {q.trail && <Path d={q.trail} fill="none" stroke="#F7F8F9" strokeWidth={1.8} strokeLinecap="round" strokeDasharray="0.5 4.5" opacity={0.55} />}
        <Figure q={q} color="#F7F8F9" />
        <Racket x={q.w1[0]} y={q.w1[1]} a={q.r} color="#F7F8F9" />
      </G>
      {q.ball && <Circle cx={70 + q.ball[0] * 4.9} cy={34 + q.ball[1] * 4.9} r={9} fill="#E9F35A" />}
    </Svg>
  );
}
