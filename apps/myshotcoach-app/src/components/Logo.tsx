import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import { C, F } from '@/lib/theme';
import { Txt } from './ui';

// Logo wie auf der Website: aufrechtes Handy mit Schläger im Display, gelber Ball oben rechts.
export function LogoMark({ size = 32, light }: { size?: number; light?: boolean }) {
  const fg = light ? '#FFFFFF' : C.ink;
  const bg = light ? C.ink : '#FFFFFF';
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Rect x={7} y={2.5} width={16} height={27} rx={3.6} fill={fg} />
      <Rect x={9} y={5.5} width={12} height={20.5} rx={1.6} fill={bg} />
      <G transform="rotate(-28 15 15.5)" fill="none" stroke={fg} strokeWidth={1.5} strokeLinecap="round">
        <Ellipse cx={15} cy={12.2} rx={3.4} ry={4.4} />
        <Path d="M15 16.6v6.2" />
        <Path d="M13.3 12.2h3.4M15 8.6v7.2" strokeWidth={0.8} opacity={0.6} />
      </G>
      <Circle cx={25.5} cy={6.5} r={4} fill={C.volt} stroke={bg} strokeWidth={1.2} />
    </Svg>
  );
}

export function Logo({ light, size = 28 }: { light?: boolean; size?: number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <LogoMark size={size} light={light} />
      <Txt style={{ fontFamily: F.heavy, fontSize: size * 0.68, letterSpacing: -0.4, color: light ? '#fff' : C.ink }}>tennistrainer.app</Txt>
    </View>
  );
}
