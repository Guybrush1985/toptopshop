import { View } from 'react-native';
import { router } from 'expo-router';
import { C, F } from '@/lib/theme';
import { coachById, fmtEUR, strokeById, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { StatusPill } from '@/components/Shared';
import { StrokeIcon } from '@/components/Figures';
import { Button, Card, ExampleBadge, H1, Muted, Screen, Txt } from '@/components/ui';

export default function MyRequests() {
  const { requests } = useStore();
  return (
    <Screen top>
      <H1>Meine Videos</H1>
      <Muted style={{ marginTop: 6, marginBottom: 18 }}>Deine Anfragen und die Video-Antworten deiner Coaches.</Muted>
      <View style={{ gap: 12 }}>
        {requests.map(r => {
          const s = strokeById(r.stroke);
          const coach = coachById(r.coachId);
          return (
            <Card key={r.id} onPress={() => router.push(`/anfrage/${r.id}`)} style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
              <View style={{ width: 62, alignItems: 'center' }}><StrokeIcon k={s.icon} size={52} /></View>
              <View style={{ flex: 1, gap: 4 }}>
                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                  <Txt style={{ fontFamily: F.bold, fontSize: 17 }}>{s.name}</Txt>
                  {r.example && <ExampleBadge />}
                </View>
                <Txt style={{ color: C.ink2, fontSize: 14 }}>{coach ? coach.name : tierById(r.tier).name} · {fmtEUR(r.price)}</Txt>
                <StatusPill r={r} />
              </View>
            </Card>
          );
        })}
      </View>
      <Button title="Neues Video einreichen" icon="cam" style={{ marginTop: 22 }} onPress={() => router.push('/neu/schlag')} />
    </Screen>
  );
}
