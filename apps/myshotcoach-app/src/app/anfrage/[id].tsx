import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { C, F } from '@/lib/theme';
import { ACCEPT_HOURS, coachById, fmtEUR, strokeById, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { StatusPill } from '@/components/Shared';
import { AnswerPlaceholder, LocalVideo } from '@/components/Video';
import { Card, FlowHeader, H1, H2, Kicker, Muted, Notice, Portrait, Screen, Stars, Txt } from '@/components/ui';

export default function RequestDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { requests, rate } = useStore();
  const r = requests.find(x => x.id === id);
  const coach = r && coachById(r.coachId);
  const date = r && new Date(r.createdAt).toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader title="Deine Anfrage" />
      {!r ? <Screen><Muted style={{ marginTop: 20 }}>Diese Anfrage gibt es nicht mehr.</Muted></Screen> : (
        <Screen>
          <Kicker style={{ marginTop: 16 }}>{`Eingereicht am ${date}`}</Kicker>
          <H1 style={{ marginTop: 6 }}>{strokeById(r.stroke).name}</H1>
          <View style={{ marginTop: 10, marginBottom: 22 }}><StatusPill r={r} /></View>

          {r.status === 'answered' ? (
            <View style={{ gap: 14 }}>
              <AnswerPlaceholder coachName={coach?.name} label={r.example ? 'Beispiel' : undefined} />
              {coach && (
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <Portrait c={coach} size={46} round />
                  <View style={{ flex: 1 }}>
                    <Txt style={{ fontFamily: F.bold }}>{coach.name}</Txt>
                    <Txt style={{ color: C.ink3, fontSize: 13.5 }}>{`${tierById(coach.tier).short} · ${coach.club}`}</Txt>
                  </View>
                </View>
              )}
              {r.example && <Muted style={{ fontSize: 14 }}>So sieht eine Antwort aus: Dein Coach steht am Platz, sagt dir, was auffällt, und macht den Schlag richtig vor.</Muted>}
              <Card style={{ gap: 12, marginTop: 4, alignItems: 'center', paddingVertical: 22 }}>
                <Txt style={{ fontFamily: F.heavy, fontSize: 17, letterSpacing: -0.2 }}>{r.rating ? 'Danke für deine Bewertung!' : `Wie hilfreich war ${coach ? coach.name.split(' ')[0] : 'die Antwort'}?`}</Txt>
                <Stars v={r.rating || 0} size={34} onRate={n => rate(r.id, n)} />
              </Card>
            </View>
          ) : (
            <Notice icon="clock" tone="warn">{`Noch hat kein Coach angenommen. Passiert das nicht innerhalb von ${ACCEPT_HOURS} Stunden, wird die Reservierung aufgehoben und du zahlst nichts.`}</Notice>
          )}

          {r.note && <Card flat style={{ marginTop: 18, gap: 4, backgroundColor: C.bg2, borderWidth: 0 }}><Kicker>Deine Frage</Kicker><Txt style={{ marginTop: 4 }}>{r.note}</Txt></Card>}
          {r.videoUri && <View style={{ gap: 12, marginTop: 26 }}><H2>Dein Video</H2><LocalVideo uri={r.videoUri} /></View>}
          <Txt style={{ color: C.ink3, fontSize: 13, marginTop: 24 }}>{`${coach ? coach.name : tierById(r.tier).name} · ${fmtEUR(r.price)}`}</Txt>
        </Screen>
      )}
    </View>
  );
}
