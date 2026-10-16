import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { COACHES, type TierId } from '@/lib/data';
import { CoachCard } from '@/components/CoachCard';
import { H1, Muted, Screen } from '@/components/ui';
import { TierFilter } from '@/components/Shared';

export default function Coaches() {
  const [filter, setFilter] = useState<TierId | 'all'>('all');
  const list = COACHES.filter(c => filter === 'all' || c.tier === filter);
  return (
    <Screen top>
      <H1>Trainer:innen</H1>
      <Muted style={{ marginTop: 6, marginBottom: 16 }}>Lizenzierte Tennistrainer:innen und Ex-Profis. Alle Profile hier sind noch Beispiele.</Muted>
      <TierFilter value={filter} onChange={setFilter} />
      <View style={{ gap: 12, marginTop: 16 }}>
        {list.map(c => <CoachCard key={c.id} c={c} onPress={() => router.push(`/trainer/${c.id}`)} />)}
      </View>
    </Screen>
  );
}
