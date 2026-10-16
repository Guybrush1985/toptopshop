import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { C, F, R, SPACE } from '@/lib/theme';
import { STROKES } from '@/lib/data';
import { useStore } from '@/lib/store';
import { StrokeIcon } from '@/components/Figures';
import { Button, FlowHeader, H1, Muted, Screen, Tap, Txt } from '@/components/ui';

export default function ChooseStroke() {
  const { draft, setDraft } = useStore();
  const { width } = useWindowDimensions();
  const tile = (width - SPACE * 2 - 12) / 2;
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader step={1} />
      <Screen footer={<Button title="Weiter" iconRight="arrow" kind="ink" disabled={!draft.stroke} onPress={() => router.push('/neu/video')} />}>
        <H1 style={{ marginTop: 18 }}>Welchen Schlag schauen wir uns an?</H1>
        <Muted style={{ marginTop: 8 }}>Pro Anfrage gibt es eine Video-Antwort zu genau einem Schlag.</Muted>
        <View style={st.grid}>
          {STROKES.map((s, i) => {
            const on = draft.stroke === s.id;
            return (
              <Tap key={s.id} role="radio" selected={on} label={s.name} onPress={() => setDraft(d => ({ ...d, stroke: s.id }))} style={[st.tile, { width: tile }, on && st.on]}>
                <Txt style={[st.num, on && { color: C.volt }]}>{String(i + 1).padStart(2, '0')}</Txt>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><StrokeIcon k={s.icon} size={74} color={on ? '#fff' : C.ink} /></View>
                <Txt style={[st.txt, on && { color: '#fff' }]} numberOfLines={2}>{s.name}</Txt>
              </Tap>
            );
          })}
        </View>
      </Screen>
    </View>
  );
}

const st = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 24 },
  tile: { height: 176, borderRadius: R.lg, padding: 14, backgroundColor: C.bg2 },
  on: { backgroundColor: C.ink },
  num: { fontFamily: F.narrowBold, fontSize: 12.5, letterSpacing: 1, color: C.ink3 },
  txt: { fontFamily: F.bold, fontSize: 15.5, lineHeight: 19 },
});
