import { View } from 'react-native';
import { C, F, R } from '@/lib/theme';
import { ANSWER_GUIDE } from '@/lib/data';
import { Icon } from '@/components/Icon';
import { FlowHeader, H1, Kicker, Muted, Screen, Txt } from '@/components/ui';

export default function AnswerGuide() {
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader title="Ratgeber" />
      <Screen>
        <Kicker style={{ marginTop: 14 }}>Für Coaches</Kicker>
        <H1 style={{ marginTop: 6 }}>So antwortest du per Video</H1>
        <Muted style={{ marginTop: 8 }}>Deine Antwort ist immer ein Video, kein Text. Es geht nicht um Zeitlupen-Analyse, sondern darum, was dir auffällt und wie es besser geht.</Muted>
        <View style={{ marginTop: 24, borderRadius: R.xl, backgroundColor: C.night, padding: 20, gap: 20 }}>
          {ANSWER_GUIDE.map((g, i) => (
            <View key={g.t} style={{ flexDirection: 'row', gap: 14 }}>
              <Txt style={{ fontFamily: F.black, fontSize: 30, lineHeight: 32, color: i === 0 ? C.volt : 'rgba(255,255,255,0.28)', width: 40 }}>{String(i + 1).padStart(2, '0')}</Txt>
              <View style={{ flex: 1 }}>
                <Txt style={{ fontFamily: F.heavy, fontSize: 18, letterSpacing: -0.3, color: '#fff' }}>{g.t}</Txt>
                <Muted light style={{ fontSize: 14.5, marginTop: 2 }}>{g.d}</Muted>
              </View>
            </View>
          ))}
        </View>
        <View style={{ marginTop: 16, borderRadius: R.lg, backgroundColor: C.volt, padding: 18, flexDirection: 'row', gap: 12 }}>
          <Icon n="cam" size={22} color={C.ink} />
          <Txt style={{ flex: 1, fontSize: 14.5, lineHeight: 21 }}>
            <Txt style={{ fontFamily: F.bold, fontSize: 14.5 }}>Tipp: </Txt>
            Lass dich filmen oder stell das Handy auf ein Stativ am Netzpfosten, damit du beide Hände für Schläger und Ball frei hast.
          </Txt>
        </View>
      </Screen>
    </View>
  );
}
