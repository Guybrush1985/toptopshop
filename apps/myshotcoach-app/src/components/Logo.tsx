import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import { C, F } from '@/lib/theme';
import { Txt } from './ui';

// Logo: aufrechtes Handy mit Schläger im Display, gelber Ball oben rechts.
export function LogoMark({ size = 32, light }: { size?: number; light?: boolean }) {
  const bg = light ? '#FFFFFF' : C.ink;
  const fg = light ? C.ink : '#FFFFFF';
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Rect width={32} height={32} rx={8} fill={bg} />
      <Rect x={9.5} y={6.5} width={12} height={20} rx={2.6} fill="none" stroke={fg} strokeWidth={1.9} />
      <G transform="translate(12.2 23.8) rotate(27)">
        <Path d="M0 0v-4.2" stroke={fg} strokeWidth={1.7} strokeLinecap="round" />
        <Ellipse cx={0} cy={-8.6} rx={2.8} ry={3.8} fill="none" stroke={fg} strokeWidth={1.4} />
        <Path d="M-1.2 -11.6v6M0 -12.2v7.2M1.2 -11.6v6M-2.3 -9.6h4.6M-2.3 -7.6h4.6" stroke={fg} strokeWidth={0.45} opacity={0.7} />
      </G>
      <Circle cx={25} cy={7} r={4} fill={C.volt} />
    </Svg>
  );
}

export function Logo({ light, size = 28 }: { light?: boolean; size?: number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <LogoMark size={size} light={light} />
      <Txt style={{ fontFamily: F.heavy, fontSize: size * 0.68, letterSpacing: -0.4, color: light ? '#fff' : C.ink }}>MyShotCoach</Txt>
    </View>
  );
}
