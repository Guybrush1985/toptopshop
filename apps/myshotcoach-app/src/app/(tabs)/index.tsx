import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { C, F, R, SPACE } from '@/lib/theme';
import { STROKES, TIERS, fmtEUR, minPrice, type StrokeId } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Logo } from '@/components/Logo';
import { CourtHero, StrokeIcon } from '@/components/Figures';
import { Icon, type IconName } from '@/components/Icon';
import { Button, H2, Label, Muted, Notice, Txt } from '@/components/ui';

const HOW: [IconName, string, string][] = [
  ['cam', 'Schlag filmen', 'Rundherum, je 5 Schläge von der Seite, von hinten und von der anderen Seite.'],
  ['users', 'Trainer:in wählen', 'Nach Level oder ganz gezielt nach Profil, Bewertungen und Verein.'],
  ['video', 'Video-Antwort bekommen', 'Dein Coach zeigt dir am Platz, was auffällt und wie es besser geht.'],
];

export default function Start() {
  const ins = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { setDraft } = useStore();
  const start = (stroke?: StrokeId) => {
    setDraft(stroke ? { stroke } : {});
    router.push(stroke ? '/neu/video' : '/neu/schlag');
  };
  const tile = (width - SPACE * 2 - 12) / 2;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={[st.hero, { paddingTop: ins.top + 14 }]}>
        <Logo light />
        <View style={st.heroImg}><CourtHero width={width - SPACE * 2} /></View>
        <Txt style={st.kicker}>Kurs zu teuer? Kein Trainer zur Hand? Nur mal kurz eine konkrete Frage?</Txt>
        <Txt style={st.title}>Dann ist MyShotCoach das Richtige.</Txt>
        <Txt style={st.sub}>Ab {fmtEUR(minPrice)} für ein Feedback zu deiner Technik. Als Video, von lizenzierten Tennistrainer:innen.</Txt>
        <Button title="Schlag filmen und einreichen" kind="volt" icon="cam" onPress={() => start()} style={{ marginTop: 22 }} />
      </View>

      <View style={st.section}>
        <Label>So funktioniert’s</Label>
        <View style={{ gap: 16, marginTop: 14 }}>
          {HOW.map(([ic, t, d], i) => (
            <View key={t} style={{ flexDirection: 'row', gap: 14 }}>
              <View style={st.howIc}><Icon n={ic} size={21} color={C.ink} /></View>
              <View style={{ flex: 1 }}>
                <Txt style={{ fontFamily: F.bold, fontSize: 16.5 }}>{i + 1}. {t}</Txt>
                <Muted>{d}</Muted>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={st.section}>
        <H2>Welcher Schlag soll es sein?</H2>
        <View style={st.grid}>
          {STROKES.map(s => (
            <Pressable key={s.id} onPress={() => start(s.id)} accessibilityRole="button" accessibilityLabel={s.name}
              style={({ pressed }) => [st.tile, { width: tile }, pressed && { backgroundColor: C.bg2 }]}>
              <StrokeIcon k={s.icon} size={54} />
              <Txt style={st.tileTxt} numberOfLines={2}>{s.name}</Txt>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={st.section}>
        <H2>Preise pro Video-Antwort</H2>
        <View style={{ marginTop: 12 }}>
          {TIERS.map(t => (
            <View key={t.id} style={st.price}>
              <Txt style={{ flex: 1, fontFamily: F.semibold }}>{t.name}</Txt>
              <Txt style={{ fontFamily: F.heavy, fontSize: 17 }}>{fmtEUR(t.price)}</Txt>
            </View>
          ))}
        </View>
        <Muted style={{ marginTop: 10, fontSize: 13.5 }}>Alle Preise inkl. MwSt. Nimmt innerhalb von 72 Stunden niemand deine Anfrage an, bekommst du dein Geld zurück.</Muted>
      </View>

      <View style={[st.section, { gap: 10 }]}>
        <Notice icon="info" tone="warn">Vorschau: Es werden noch keine Videos hochgeladen und keine Zahlungen abgewickelt. Profile und Bewertungen sind Beispiele.</Notice>
        <Pressable onPress={() => router.push('/coach')} style={st.coachLink} accessibilityRole="button">
          <Icon n="award" size={20} color="#fff" />
          <Txt style={{ color: '#fff', fontFamily: F.semibold, flex: 1 }}>Du bist Tennistrainer:in? Hier geht’s zum Coach-Bereich.</Txt>
          <Icon n="chev" size={18} color="#fff" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  hero: { backgroundColor: C.night, paddingHorizontal: SPACE, paddingBottom: 28 },
  heroImg: { marginTop: 18, marginBottom: 20, borderRadius: R.lg, overflow: 'hidden' },
  kicker: { color: 'rgba(255,255,255,.7)', fontFamily: F.medium, fontSize: 15.5, lineHeight: 22 },
  title: { color: '#fff', fontFamily: F.heavy, fontSize: 31, lineHeight: 34, letterSpacing: -0.8, marginTop: 6 },
  sub: { color: 'rgba(255,255,255,.82)', fontSize: 16, lineHeight: 23, marginTop: 10 },
  section: { paddingHorizontal: SPACE, paddingTop: 30 },
  howIc: { width: 44, height: 44, borderRadius: 12, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 14 },
  tile: { borderWidth: 1, borderColor: C.line, borderRadius: R.lg, paddingVertical: 14, paddingHorizontal: 10, alignItems: 'center', gap: 6 },
  tileTxt: { fontFamily: F.semibold, fontSize: 14.5, textAlign: 'center', lineHeight: 19 },
  price: { flexDirection: 'row', alignItems: 'center', paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: C.line },
  coachLink: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: C.night, borderRadius: R.md, padding: 16 },
});
