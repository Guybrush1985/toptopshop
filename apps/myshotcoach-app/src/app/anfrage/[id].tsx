import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { C, F } from '@/lib/theme';
import { ACCEPT_HOURS, coachById, fmtEUR, strokeById, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { LocalVideo, AnswerPlaceholder } from '@/components/Video';
import { Card, H1, H2, Muted, Notice, Screen, Stars, Txt } from '@/components/ui';
import { StatusPill } from '@/components/Shared';

export default function RequestDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { requests, rate } = useStore();
  const r = requests.find(x => x.id === id);
  if (!r) return <Screen><Muted>Diese Anfrage gibt es nicht mehr.</Muted></Screen>;
  const coach = coachById(r.coachId);
  const date = new Date(r.createdAt).toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });

  return (
    <Screen>
      <H1>{strokeById(r.stroke).name}</H1>
      <View style={{ marginTop: 8, marginBottom: 18, gap: 6 }}>
        <StatusPill r={r} />
        <Muted style={{ fontSize: 14 }}>{`Eingereicht am ${date} · ${coach ? coach.name : tierById(r.tier).name} · ${fmtEUR(r.price)}`}</Muted>
      </View>

      {r.status === 'answered' ? (
        <View style={{ gap: 12 }}>
          <H2>Video-Antwort</H2>
          <AnswerPlaceholder coachName={coach?.name} label={r.example ? 'Beispiel' : undefined} />
          {r.example && <Muted style={{ fontSize: 13.5 }}>So sieht eine Antwort später aus: Dein Coach steht am Platz, sagt dir, was auffällt, und macht den Schlag richtig vor.</Muted>}
          <Card style={{ gap: 10, marginTop: 6 }}>
            <Txt style={{ fontFamily: F.bold }}>{r.rating ? 'Danke für deine Bewertung!' : `Wie hilfreich war ${coach ? coach.name.split(' ')[0] : 'die Antwort'}?`}</Txt>
            <Stars v={r.rating || 0} size={30} onRate={n => rate(r.id, n)} />
          </Card>
        </View>
      ) : (
        <Notice icon="clock" tone="warn">{`Noch hat kein Coach deine Anfrage angenommen. Passiert das nicht innerhalb von ${ACCEPT_HOURS} Stunden, wird die Reservierung aufgehoben und du zahlst nichts.`}</Notice>
      )}

      {r.note && <Card style={{ marginTop: 18, gap: 4 }}><Txt style={{ color: C.ink3, fontSize: 13 }}>Deine Frage</Txt><Txt>{r.note}</Txt></Card>}

      {r.videoUri && (
        <View style={{ gap: 10, marginTop: 22 }}>
          <H2>Dein Video</H2>
          <LocalVideo uri={r.videoUri} />
        </View>
      )}
    </Screen>
  );
}
