import { Platform } from 'react-native';

// Gestaltung wie die Website, eine Stufe edler: Tinte als Grundfarbe, Ballgelb als einziger Akzent,
// Archivo für Text und Headlines, Archivo Narrow für Labels, Zahlen und Broadcast-Details.
export const C = {
  bg: '#FFFFFF',
  bg2: '#F3F4F6',
  bg3: '#ECEEF1',
  ink: '#0B0F14',
  ink2: '#4A535F',
  ink3: '#7A8390',
  line: '#E6E8EC',
  line2: '#D5DAE0',
  night: '#07090C',
  night2: '#11161D',
  night3: '#1A212B',
  nightLine: 'rgba(255,255,255,0.10)',
  onNight: '#FFFFFF',
  onNight2: 'rgba(255,255,255,0.72)',
  onNight3: 'rgba(255,255,255,0.48)',
  volt: '#D4F53C',
  voltDeep: '#B8DC1E',
  star: '#F2B705',
  ok: '#0F7A52', okBg: '#E5F4EC',
  warn: '#8A5A00', warnBg: '#FFF3D6',
  err: '#B42318', errBg: '#FDECEA',
};

export const F = {
  regular: 'Archivo_400Regular',
  medium: 'Archivo_500Medium',
  semibold: 'Archivo_600SemiBold',
  bold: 'Archivo_700Bold',
  heavy: 'Archivo_800ExtraBold',
  black: 'Archivo_900Black',
  narrow: 'ArchivoNarrow_600SemiBold',
  narrowBold: 'ArchivoNarrow_700Bold',
};

export const R = { sm: 10, md: 14, lg: 20, xl: 28, pill: 999 };
export const SPACE = 20;

const sh = (y: number, blur: number, op: number, el: number) => Platform.select({
  web: { boxShadow: `0 ${y}px ${blur}px rgba(11,15,20,${op})` } as object,
  default: { shadowColor: '#0B0F14', shadowOffset: { width: 0, height: y }, shadowRadius: blur / 2, shadowOpacity: op, elevation: el },
});
export const SHADOW = {
  sm: sh(2, 10, 0.06, 2),
  md: sh(8, 28, 0.10, 6),
  lg: sh(18, 50, 0.18, 12),
  volt: Platform.select({
    web: { boxShadow: '0 10px 30px rgba(212,245,60,0.35)' } as object,
    default: { shadowColor: '#D4F53C', shadowOffset: { width: 0, height: 8 }, shadowRadius: 16, shadowOpacity: 0.45, elevation: 8 },
  }),
};
