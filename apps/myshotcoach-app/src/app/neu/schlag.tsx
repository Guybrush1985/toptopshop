import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { C, F, R, SPACE } from '@/lib/theme';
import { STROKES } from '@/lib/data';
import { useStore } from '@/lib/store';
import { StrokeIcon } from '@/components/Figures';
import { Button, H1, Muted, Screen, Steps, Txt } from '@/components/ui';

export default function ChooseStroke() {
  const { draft, setDraft } = useStore();
  const { width } = useWindowDimensions();
  const tile = (width - SPACE * 2 - 12) / 2;
  return (
    <Screen footer={<Button title="Weiter" icon="arrow" disabled={!draft.stroke} onPress={() => router.push('/neu/video')} />}>
      <Steps at={1} />
      <H1>Welchen Schlag sollen wir uns anschauen?</H1>
      <Muted style={{ marginTop: 8 }}>Pro Anfrage gibt es Feedback zu genau einem Schlag.</Muted>
      <View style={st.grid}>
        {STROKES.map(s => {
          const on = draft.stroke === s.id;
          return (
            <Pressable key={s.id} onPress={() => setDraft(d => ({ ...d, stroke: s.id }))} accessibilityRole="radio" accessibilityState={{ checked: on }} accessibilityLabel={s.name}
              style={[st.tile, { width: tile }, on && st.on]}>
              <StrokeIcon k={s.icon} size={58} color={on ? '#fff' : C.ink} />
              <Txt style={[st.txt, on && { color: '#fff' }]} numberOfLines={2}>{s.name}</Txt>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}

const st = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 20 },
  tile: { borderWidth: 1, borderColor: C.line, borderRadius: R.lg, paddingVertical: 14, paddingHorizontal: 10, alignItems: 'center', gap: 6, backgroundColor: '#fff' },
  on: { backgroundColor: C.ink, borderColor: C.ink },
  txt: { fontFamily: F.semibold, fontSize: 14.5, textAlign: 'center', lineHeight: 19 },
});
