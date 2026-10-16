import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, F, R, SPACE } from '@/lib/theme';
import { REVIEWS, coachById, fmtEUR, fmtNum, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useStatusBar } from '@/lib/useStatusBar';
import { Icon, type IconName } from '@/components/Icon';
import { BottomBar, Button, Card, ExampleBadge, H2, Kicker, Muted, Pill, Portrait, RoundBtn, Stars, Txt } from '@/components/ui';

export default function CoachProfile() {
  useStatusBar('light');
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setDraft, draft } = useStore();
  const ins = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const c = coachById(id);
  if (!c) return <View style={{ flex: 1, padding: 40 }}><Muted>Dieses Profil gibt es nicht.</Muted></View>;
  const t = tierById(c.tier);
  const book = () => {
    setDraft(d => ({ ...d, pick: { mode: 'coach', coachId: c.id } }));
    router.push(!draft.stroke ? '/neu/schlag' : !draft.video ? '/neu/video' : '/neu/bezahlen');
  };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={{ height: width * 1.05, backgroundColor: C.night }}>
          <Portrait c={c} size={width} radius={0} />
          <LinearGradient colors={['rgba(7,9,12,0.6)', 'rgba(7,9,12,0)', 'rgba(7,9,12,0.95)']} locations={[0, 0.3, 1]} style={StyleSheet.absoluteFill} />
          <View style={{ position: 'absolute', top: ins.top + 8, left: SPACE }}><RoundBtn icon="back" dark label="Zurück" onPress={() => router.back()} /></View>
          <View style={{ position: 'absolute', left: SPACE, right: SPACE, bottom: 22 }}>
            <View style={{ flexDirection: 'row', gap: 6 }}><Pill tone={t.pro ? 'volt' : 'glass'}>{t.name}</Pill>{c.example && <ExampleBadge dark />}</View>
            <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 36, letterSpacing: -1.2, lineHeight: 39, marginTop: 10 }}>{c.name}</Txt>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 6 }}>
              <Icon n="pin" size={14} color={C.onNight2} />
              <Txt style={{ color: C.onNight2, fontSize: 14.5 }}>{`${c.club}, ${c.city}`}</Txt>
            </View>
          </View>
        </View>

        <View style={st.stats}>
          <Stat big={fmtNum(c.rating)} small={`${c.reviews} Bewertungen`} />
          <View style={st.div} />
          <Stat big={`${c.resp} Std.`} small="Antwortzeit" />
          <View style={st.div} />
          <Stat big={String(c.since)} small="dabei seit" />
        </View>

        <View style={{ paddingHorizontal: SPACE }}>
          <Txt style={{ fontSize: 17, lineHeight: 26, marginTop: 24 }}>{c.bio}</Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
            {c.focus.map(f => <Pill key={f}>{f}</Pill>)}
          </View>

          <H2 style={{ marginTop: 32, marginBottom: 8 }}>Qualifikation</H2>
          {c.certs.map(x => <Fact key={x} icon="shield" text={x} />)}
          {c.awards.map(x => <Fact key={x} icon="award" text={x} />)}
          <Fact icon="user" text={`Spricht ${c.langs.join(', ')}`} />

          <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 32, marginBottom: 14 }}>
            <H2 style={{ flex: 1 }}>Bewertungen</H2>
            <Stars v={c.rating} size={14} />
          </View>
          <View style={{ gap: 12 }}>
            {REVIEWS.map(r => (
              <Card key={r.n} style={{ gap: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Portrait c={{ name: r.n }} size={36} round />
                  <View style={{ flex: 1 }}>
                    <Txt style={{ fontFamily: F.bold }}>{r.n}</Txt>
                    <Txt style={{ color: C.ink3, fontSize: 12.5 }}>{`${r.st} · ${r.d}`}</Txt>
                  </View>
                  <Stars v={r.s} size={12} />
                </View>
                <Txt style={{ fontSize: 15, lineHeight: 22, color: C.ink2 }}>{`„${r.t}“`}</Txt>
              </Card>
            ))}
          </View>
          <Muted style={{ fontSize: 12.5, marginTop: 12, lineHeight: 18 }}>Beispielbewertungen. Später können nur Spieler:innen bewerten, die eine Video-Antwort bekommen haben.</Muted>
        </View>
      </ScrollView>
      <BottomBar>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <View>
            <Kicker>Pro Antwort</Kicker>
            <Txt style={{ fontFamily: F.black, fontSize: 26, letterSpacing: -0.8, lineHeight: 30 }}>{fmtEUR(t.price)}</Txt>
          </View>
          <Button title={`${c.name.split(' ')[0]} anfragen`} kind="volt" onPress={book} style={{ flex: 1 }} />
        </View>
      </BottomBar>
    </View>
  );
}

const Stat = ({ big, small }: { big: string; small: string }) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Txt style={{ fontFamily: F.black, fontSize: 22, letterSpacing: -0.6, color: '#fff' }}>{big}</Txt>
    <Txt style={{ fontFamily: F.narrow, fontSize: 12.5, color: C.onNight3, marginTop: 1 }}>{small}</Txt>
  </View>
);
const Fact = ({ icon, text }: { icon: IconName; text: string }) => (
  <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center', paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: C.line2 }}>
    <View style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: C.bg2, alignItems: 'center', justifyContent: 'center' }}><Icon n={icon} size={17} color={C.ink} /></View>
    <Txt style={{ flex: 1, fontSize: 15 }}>{text}</Txt>
  </View>
);

const st = StyleSheet.create({
  stats: { flexDirection: 'row', backgroundColor: C.night, paddingVertical: 18, paddingHorizontal: 10, borderBottomLeftRadius: R.xl, borderBottomRightRadius: R.xl },
  div: { width: StyleSheet.hairlineWidth, backgroundColor: C.nightLine },
});
