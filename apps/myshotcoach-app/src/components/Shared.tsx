import { ScrollView } from 'react-native';
import { SPACE } from '@/lib/theme';
import type { TierId } from '@/lib/data';
import { hoursLeft, type Request } from '@/lib/store';
import { Chip, Pill } from './ui';

export function StatusPill({ r }: { r: Request }) {
  if (r.status === 'answered') return <Pill tone="ok">Video-Antwort da</Pill>;
  if (r.status === 'accepted') return <Pill tone="volt">Coach schaut sich dein Video an</Pill>;
  if (r.status === 'refunded') return <Pill>Erstattet</Pill>;
  return <Pill tone="warn">{`Wartet auf Annahme · noch ${hoursLeft(r)} Std.`}</Pill>;
}

export function TierFilter({ value, onChange, bleed }: { value: TierId | 'all'; onChange: (v: TierId | 'all') => void; bleed?: boolean }) {
  const opts: [TierId | 'all', string][] = [['all', 'Alle'], ['C', 'DTB C'], ['B', 'DTB B'], ['A', 'DTB A'], ['P', 'Ex-Profi']];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: bleed ? SPACE : 0 }} style={{ flexGrow: 0, marginHorizontal: bleed ? -SPACE : 0 }}>
      {opts.map(([id, l]) => <Chip key={id} title={l} on={value === id} onPress={() => onChange(id)} />)}
    </ScrollView>
  );
}
