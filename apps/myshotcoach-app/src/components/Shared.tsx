import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { C, F } from '@/lib/theme';
import type { TierId } from '@/lib/data';
import { hoursLeft, type Request } from '@/lib/store';
import { Pill, Txt } from './ui';

export function StatusPill({ r }: { r: Request }) {
  if (r.status === 'answered') return <Pill tone="ok">Video-Antwort da</Pill>;
  if (r.status === 'accepted') return <Pill tone="volt">Coach schaut sich dein Video an</Pill>;
  if (r.status === 'refunded') return <Pill>Erstattet</Pill>;
  return <Pill tone="warn">{`Wartet auf Annahme · noch ${hoursLeft(r)} h`}</Pill>;
}

export function TierFilter({ value, onChange }: { value: TierId | 'all'; onChange: (v: TierId | 'all') => void }) {
  const opts: [TierId | 'all', string][] = [['all', 'Alle'], ['C', 'DTB C'], ['B', 'DTB B'], ['A', 'DTB A'], ['P', 'Ex-Profi']];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }} style={{ flexGrow: 0 }}>
      {opts.map(([id, l]) => (
        <Pressable key={id} onPress={() => onChange(id)} accessibilityRole="button" accessibilityState={{ selected: value === id }}
          style={[st.chip, value === id && st.chipOn]}>
          <Txt style={[st.chipTxt, value === id && { color: '#fff' }]}>{l}</Txt>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const st = StyleSheet.create({
  chip: { borderWidth: 1, borderColor: C.line2, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8 },
  chipOn: { backgroundColor: C.ink, borderColor: C.ink },
  chipTxt: { fontFamily: F.semibold, fontSize: 14 },
});
