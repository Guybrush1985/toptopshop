import { useState } from 'react';
import { Alert, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { C, F, R } from '@/lib/theme';
import { fmtEUR, payout, strokeById, tierById } from '@/lib/data';
import { COACH_JOBS } from '@/lib/coachJobs';
import { AnswerPlaceholder, LocalVideo } from '@/components/Video';
import { Button, Card, FlowHeader, H1, H2, Kicker, Muted, Notice, Pill, Screen, Txt } from '@/components/ui';

export default function CoachJob() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const j = COACH_JOBS.find(x => x.id === id);
  const [answer, setAnswer] = useState<string | null>(null);
  if (!j) return <View style={{ flex: 1, backgroundColor: C.bg }}><FlowHeader title="Anfrage" /><Screen><Muted>Diese Anfrage gibt es nicht mehr.</Muted></Screen></View>;
  const s = strokeById(j.stroke);

  const record = async (camera: boolean) => {
    if (camera) {
      const p = await ImagePicker.requestCameraPermissionsAsync();
      if (!p.granted) { Alert.alert('Kein Zugriff', 'Bitte erlaube tennistrainer.app in den Einstellungen den Zugriff auf Kamera und Mikrofon.'); return; }
    }
    const opts: ImagePicker.ImagePickerOptions = { mediaTypes: ['videos'], videoMaxDuration: 600, quality: 1 };
    const res = camera ? await ImagePicker.launchCameraAsync(opts) : await ImagePicker.launchImageLibraryAsync(opts);
    if (!res.canceled && res.assets[0]) setAnswer(res.assets[0].uri);
  };
  const send = () => Alert.alert('Vorschau', `Hier würde deine Video-Antwort an ${j.player.split(',')[0]} gehen und dir ${fmtEUR(payout(tierById(j.tier).price))} gutgeschrieben werden.`, [{ text: 'OK', onPress: () => router.back() }]);

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
    <FlowHeader title="Anfrage" />
    <Screen footer={answer ? <Button title="Video-Antwort senden" kind="volt" iconRight="arrow" onPress={send} /> : <Button title="Video-Antwort aufnehmen" kind="volt" icon="cam" onPress={() => record(true)} />}>
      <View style={{ flexDirection: 'row', gap: 6, marginTop: 14 }}><Pill tone="dark">{tierById(j.tier).name}</Pill><Pill tone="warn">Beispiel</Pill></View>
      <H1 style={{ marginTop: 10 }}>{s.name}</H1>
      <Muted style={{ marginTop: 4 }}>{`${j.player} · ${j.ago}`}</Muted>
      <View style={{ flexDirection: 'row', marginTop: 16, borderRadius: R.lg, backgroundColor: C.bg2, padding: 16 }}>
        <View style={{ flex: 1 }}><Kicker>Du bekommst</Kicker><Txt style={{ fontFamily: F.black, fontSize: 24, letterSpacing: -0.6 }}>{fmtEUR(payout(tierById(j.tier).price))}</Txt></View>
        <View style={{ flex: 1 }}><Kicker>Zeit nach Annahme</Kicker><Txt style={{ fontFamily: F.black, fontSize: 24, letterSpacing: -0.6 }}>72 Std.</Txt></View>
      </View>

      <Kicker style={{ marginTop: 26, marginBottom: 10 }}>Video der Spielerin / des Spielers</Kicker>
      <AnswerPlaceholder label="Beispiel · 15 Schläge, 3 Perspektiven" />
      {!!j.note && <Card style={{ marginTop: 12, gap: 4 }}><Txt style={{ color: C.ink3, fontSize: 13 }}>Frage</Txt><Txt>{j.note}</Txt></Card>}

      <View style={{ marginTop: 18, gap: 10 }}>
        <Notice icon="video">Schau dir das ganze Video aus allen Perspektiven an. Antworte am besten am Platz, Schläger in der Hand: Sag, was dir auffällt, und mach den Schlag richtig vor, gern mit Ball.</Notice>
        {answer ? <>
          <H2 style={{ marginTop: 8 }}>Deine Antwort</H2>
          <LocalVideo uri={answer} />
          <Button title="Neu aufnehmen" kind="ghost" icon="cam" onPress={() => record(true)} />
        </> : <Button title="Vorhandenes Video wählen" kind="ghost" icon="image" onPress={() => record(false)} />}
      </View>
      <Txt style={{ color: C.ink3, fontSize: 12.5, marginTop: 14, fontFamily: F.regular }}>Vorschau: Diese Anfrage ist ein Beispiel. Es wird nichts gesendet.</Txt>
    </Screen>
    </View>
  );
}
