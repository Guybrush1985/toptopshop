import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { COACHES, type TierId } from '@/lib/data';
import { CoachCard } from '@/components/CoachCard';
import { TierFilter } from '@/components/Shared';
import { H1, Kicker, Muted, Screen } from '@/components/ui';

export default function Coaches() {
  const [filter, setFilter] = useState<TierId | 'all'>('all');
  const list = COACHES.filter(c => filter === 'all' || c.tier === filter);
  return (
    <Screen top bottomSpace={130}>
      <Kicker>Lizenziert und geprüft</Kicker>
      <H1 style={{ marginTop: 6 }}>Coaches</H1>
      <Muted style={{ marginTop: 6, marginBottom: 18 }}>Tennistrainer:innen mit DTB-Lizenz und Ex-Profis. Alle Profile hier sind noch Beispiele.</Muted>
      <TierFilter value={filter} onChange={setFilter} bleed />
      <View style={{ gap: 12, marginTop: 18 }}>
        {list.map(c => <CoachCard key={c.id} c={c} onPress={() => router.push(`/trainer/${c.id}`)} />)}
      </View>
    </Screen>
  );
}
