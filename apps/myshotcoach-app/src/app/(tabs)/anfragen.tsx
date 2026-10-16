import { View } from 'react-native';
import { router } from 'expo-router';
import { C, F, R } from '@/lib/theme';
import { coachById, fmtEUR, strokeById, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { StatusPill } from '@/components/Shared';
import { StrokeIcon } from '@/components/Figures';
import { Icon } from '@/components/Icon';
import { Button, Card, ExampleBadge, H1, Kicker, Muted, Screen, Txt } from '@/components/ui';

export default function MyRequests() {
  const { requests } = useStore();
  return (
    <Screen top bottomSpace={130}>
      <Kicker>Deine Anfragen</Kicker>
      <H1 style={{ marginTop: 6 }}>Videos</H1>
      <Muted style={{ marginTop: 6, marginBottom: 22 }}>Hier landen deine Videos und die Antworten deiner Coaches.</Muted>
      <View style={{ gap: 14 }}>
        {requests.map(r => {
          const s = strokeById(r.stroke);
          const coach = coachById(r.coachId);
          const done = r.status === 'answered';
          return (
            <Card key={r.id} onPress={() => router.push(`/anfrage/${r.id}`)} style={{ flexDirection: 'row', gap: 14, alignItems: 'center', padding: 14 }}>
              <View style={{ width: 76, height: 76, borderRadius: 18, backgroundColor: done ? C.ink : C.bg2, alignItems: 'center', justifyContent: 'center' }}>
                <StrokeIcon k={s.icon} size={58} color={done ? '#fff' : C.ink} />
                {done && <View style={{ position: 'absolute', right: -4, bottom: -4, width: 26, height: 26, borderRadius: 13, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff' }}><Icon n="play" size={11} color={C.ink} fill={C.ink} sw={0} /></View>}
              </View>
              <View style={{ flex: 1, gap: 5 }}>
                <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                  <Txt style={{ fontFamily: F.heavy, fontSize: 18, letterSpacing: -0.3 }}>{s.name}</Txt>
                  {r.example && <ExampleBadge />}
                </View>
                <Txt style={{ color: C.ink2, fontSize: 14 }} numberOfLines={1}>{`${coach ? coach.name : tierById(r.tier).name} · ${fmtEUR(r.price)}`}</Txt>
                <StatusPill r={r} />
              </View>
              <Icon n="chev" size={18} color={C.ink3} />
            </Card>
          );
        })}
      </View>
      <View style={{ marginTop: 26, borderRadius: R.xl, borderWidth: 1.5, borderStyle: 'dashed', borderColor: C.line2, padding: 22, alignItems: 'center', gap: 10 }}>
        <Txt style={{ fontFamily: F.heavy, fontSize: 18, letterSpacing: -0.3 }}>Nächster Schlag?</Txt>
        <Muted style={{ textAlign: 'center', fontSize: 14.5 }}>Film einen weiteren Schlag und hol dir die nächste Video-Antwort.</Muted>
        <Button title="Neues Video einreichen" kind="ink" icon="cam" small onPress={() => router.push('/neu/schlag')} style={{ marginTop: 4, alignSelf: 'stretch' }} />
      </View>
    </Screen>
  );
}
