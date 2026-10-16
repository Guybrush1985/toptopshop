import { View } from 'react-native';
import { C, F } from '@/lib/theme';
import { ANSWER_GUIDE } from '@/lib/data';
import { H1, Muted, Notice, Screen, Txt } from '@/components/ui';

export default function AnswerGuide() {
  return (
    <Screen>
      <H1>So antwortest du per Video</H1>
      <Muted style={{ marginTop: 8 }}>Deine Antwort ist immer ein Video, kein Text. Es geht nicht um Zeitlupen-Analyse, sondern darum, was dir auffällt und wie es besser geht.</Muted>
      <View style={{ gap: 18, marginTop: 22 }}>
        {ANSWER_GUIDE.map((g, i) => (
          <View key={g.t} style={{ flexDirection: 'row', gap: 14 }}>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: i === 0 ? C.volt : C.ink, alignItems: 'center', justifyContent: 'center' }}>
              <Txt style={{ fontFamily: F.heavy, color: i === 0 ? C.ink : '#fff', fontSize: 17 }}>{i + 1}</Txt>
            </View>
            <View style={{ flex: 1 }}>
              <Txt style={{ fontFamily: F.heavy, fontSize: 18, letterSpacing: -0.3 }}>{g.t}</Txt>
              <Muted>{g.d}</Muted>
            </View>
          </View>
        ))}
      </View>
      <View style={{ marginTop: 24 }}>
        <Notice icon="cam">Tipp: Lass dich filmen oder stell das Handy auf ein Stativ am Netzpfosten, damit du beide Hände für Schläger und Ball frei hast.</Notice>
      </View>
    </Screen>
  );
}
