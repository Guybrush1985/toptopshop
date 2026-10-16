import { Platform, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, F, R, SHADOW } from '@/lib/theme';
import { useStore } from '@/lib/store';
import { Icon, type IconName } from './Icon';
import { Tap, Txt } from './ui';

const META: Record<string, [string, IconName]> = {
  index: ['Start', 'home'],
  trainer: ['Coaches', 'users'],
  anfragen: ['Videos', 'video'],
  konto: ['Konto', 'user'],
};

// Schwebende Tab-Leiste in Tinte mit gelbem Upload-Knopf in der Mitte (wie die Navigation der Website)
type Props = { state: { index: number; routes: { key: string; name: string }[] }; navigation: { navigate: (name: string) => void } };
export function TabBar({ state, navigation }: Props) {
  const ins = useSafeAreaInsets();
  const { setDraft } = useStore();
  const items = state.routes.map((r, i) => {
    const [label, icon] = META[r.name] || [r.name, 'home'];
    const on = state.index === i;
    return (
      <Tap key={r.key} onPress={() => navigation.navigate(r.name)} role="tab" selected={on} label={label} style={st.item}>
        <Icon n={icon} size={22} color={on ? C.volt : C.onNight3} sw={on ? 2.2 : 1.8} />
        <Txt style={[st.label, { color: on ? '#fff' : C.onNight3 }]}>{label}</Txt>
      </Tap>
    );
  });
  const upload = (
    <Tap key="upload" onPress={() => { setDraft({}); router.push('/neu/schlag'); }} label="Video hochladen" style={st.item}>
      <View style={[st.upload, SHADOW.volt]}><Icon n="upload" size={24} color={C.ink} sw={2.4} /></View>
    </Tap>
  );
  return (
    <View pointerEvents="box-none" style={[st.wrap, { paddingBottom: Math.max(ins.bottom - 6, 12) }]}>
      <View style={[st.bar, SHADOW.lg]}>
        {Platform.OS === 'ios' && <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />}
        {items.slice(0, 2)}{upload}{items.slice(2)}
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  wrap: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 14 },
  bar: { flexDirection: 'row', alignItems: 'center', height: 70, borderRadius: R.xl, backgroundColor: Platform.OS === 'ios' ? 'rgba(11,15,20,0.88)' : C.ink, overflow: 'hidden', borderWidth: 1, borderColor: C.nightLine },
  item: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4, height: 70 },
  label: { fontFamily: F.narrowBold, fontSize: 11.5, letterSpacing: 0.3 },
  upload: { width: 54, height: 54, borderRadius: 27, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' },
});
