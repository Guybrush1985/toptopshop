import { useRef } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, useWindowDimensions, type ScrollViewInstance } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, F, R, SPACE } from '@/lib/theme';
import { COACHES, STROKES, TIERS, fmtEUR, fmtNum, minPrice, tierById, type StrokeId } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useStatusBar } from '@/lib/useStatusBar';
import { Logo } from '@/components/Logo';
import { StrokeIcon } from '@/components/Figures';
import { Icon, type IconName } from '@/components/Icon';
import { Button, ExampleBadge, H2, Kicker, Muted, Pill, Portrait, Section, Stars, Tap, Txt } from '@/components/ui';

const HERO = require('../../../assets/hero.jpg');

const HOW: [IconName, string, string][] = [
  ['cam', 'Schlag filmen', 'Handy aufs Stativ, rundherum filmen: je 5 Schläge von der Seite, von hinten und von der anderen Seite.'],
  ['users', 'Coach wählen', 'Nach Level oder gezielt nach Profil, Bewertungen und Heimatverein.'],
  ['video', 'Video-Antwort bekommen', 'Dein Coach steht am Platz, sagt dir, was auffällt, und zeigt dir, wie es besser geht.'],
];

export default function Start() {
  useStatusBar('light');
  const ins = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const { setDraft } = useStore();
  const scroll = useRef<ScrollViewInstance>(null);
  const howY = useRef(0);
  const start = (stroke?: StrokeId) => { setDraft(stroke ? { stroke } : {}); router.push(stroke ? '/neu/video' : '/neu/schlag'); };
  const heroH = Math.max(640, Math.min(height * 0.92, 820));

  return (
    <ScrollView ref={scroll} style={{ flex: 1, backgroundColor: C.night }} contentContainerStyle={{ paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
      {/* Hero: Foto über die volle Breite, Text darauf */}
      <ImageBackground source={HERO} resizeMode="cover" style={{ height: heroH, width }}>
        <LinearGradient colors={['rgba(7,9,12,0.75)', 'rgba(7,9,12,0)', 'rgba(7,9,12,0.15)', 'rgba(7,9,12,0.92)', C.night]} locations={[0, 0.22, 0.45, 0.78, 1]} style={StyleSheet.absoluteFill} />
        <View style={[st.topRow, { paddingTop: ins.top + 10 }]}>
          <Logo light size={26} />
          <Tap onPress={() => router.push('/coach')} style={st.loginPill} label="Coach-Login">
            <Txt style={{ color: '#fff', fontFamily: F.semibold, fontSize: 14 }}>Für Coaches</Txt>
          </Tap>
        </View>
        <View style={st.heroBody}>
          <Kicker light style={{ color: C.volt, marginBottom: 14 }}>Dein Online Tennistrainer</Kicker>
          <Txt style={st.heroTitle}>Kurs zu teuer?{'\n'}Kein Trainer zur Hand?</Txt>
          <Txt style={[st.heroTitle, { color: C.volt }]}>Nur eine konkrete Frage?</Txt>
          <Muted light style={{ marginTop: 16, fontSize: 16.5, lineHeight: 25 }}>{`Film deinen Schlag, lade ihn hoch und bekomm eine persönliche Video-Antwort von echten Tennistrainer:innen. Ab ${fmtEUR(minPrice)}.`}</Muted>
          <View style={{ gap: 12, marginTop: 26 }}>
            <Button title="Video hochladen" kind="volt" icon="upload" onPress={() => start()} />
            <Button title="So funktioniert’s" kind="glass" onPress={() => scroll.current?.scrollTo({ y: howY.current - 20, animated: true })} />
          </View>
          <View style={st.trust}>
            {[`Ab ${fmtEUR(minPrice)}`, 'Antwort in 72 Std. oder Geld zurück', 'Kein Abo'].map(t => (
              <View key={t} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Icon n="check" size={15} color={C.volt} sw={2.6} />
                <Txt style={{ color: C.onNight2, fontSize: 13.5, fontFamily: F.medium }}>{t}</Txt>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>

      {/* Schläge: horizontale Auswahl auf Dunkel */}
      <Section dark kicker="Ein Schlag pro Anfrage" title="Was willst du verbessern?" style={{ marginTop: 28 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={152} decelerationRate="fast" contentContainerStyle={{ paddingHorizontal: SPACE, gap: 12 }}>
          {STROKES.map((s, i) => (
            <Tap key={s.id} onPress={() => start(s.id)} label={s.name} style={st.strokeCard}>
              <Txt style={st.strokeNum}>{String(i + 1).padStart(2, '0')}</Txt>
              <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}><StrokeIcon k={s.icon} size={78} color="#fff" ball={C.volt} /></View>
              <Txt style={{ color: '#fff', fontFamily: F.bold, fontSize: 15.5, lineHeight: 19 }} numberOfLines={2}>{s.name}</Txt>
              <Txt style={{ color: C.onNight3, fontFamily: F.narrow, fontSize: 13, marginTop: 3 }}>{`ab ${fmtEUR(minPrice)}`}</Txt>
            </Tap>
          ))}
        </ScrollView>
      </Section>

      {/* Heller Bereich als Karte, die über das Dunkel geschoben ist */}
      <View style={st.sheet} onLayout={e => { howY.current = e.nativeEvent.layout.y; }}>
        <View style={{ paddingHorizontal: SPACE }}>
          <Kicker>So funktioniert’s</Kicker>
          <H2 style={{ marginTop: 6 }}>Drei Schritte zu besserer Technik</H2>
          <View style={{ marginTop: 22, gap: 26 }}>
            {HOW.map(([ic, t, d], i) => (
              <View key={t} style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ alignItems: 'center' }}>
                  <View style={st.howIc}><Icon n={ic} size={22} color={C.ink} sw={2} /></View>
                  {i < HOW.length - 1 && <View style={{ width: 2, flex: 1, backgroundColor: C.bg3, marginTop: 8, borderRadius: 1 }} />}
                </View>
                <View style={{ flex: 1, paddingBottom: 2 }}>
                  <Txt style={{ fontFamily: F.narrowBold, color: C.ink3, fontSize: 13, letterSpacing: 1.2 }}>{`SCHRITT ${i + 1}`}</Txt>
                  <Txt style={{ fontFamily: F.heavy, fontSize: 19, letterSpacing: -0.3, marginTop: 2 }}>{t}</Txt>
                  <Muted style={{ marginTop: 4 }}>{d}</Muted>
                </View>
              </View>
            ))}
          </View>
        </View>

        <Section kicker="Lizenziert und geprüft" title="Coaches mit Top-Bewertung" action="Alle" onAction={() => router.push('/trainer')}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: SPACE, gap: 14 }}>
            {COACHES.filter(c => c.rating >= 4.8).map(c => (
              <Tap key={c.id} onPress={() => router.push(`/trainer/${c.id}`)} label={c.name} style={{ width: 168 }}>
                <View>
                  <Portrait c={c} size={168} radius={R.lg} />
                  <View style={{ position: 'absolute', top: 10, left: 10 }}><Pill tone={tierById(c.tier).pro ? 'volt' : 'glass'}>{tierById(c.tier).short}</Pill></View>
                  <View style={{ position: 'absolute', bottom: 10, left: 10 }}><ExampleBadge dark /></View>
                </View>
                <Txt style={{ fontFamily: F.bold, fontSize: 16, marginTop: 10 }} numberOfLines={1}>{c.name}</Txt>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 2 }}>
                  <Stars v={c.rating} size={12} /><Txt style={{ fontFamily: F.semibold, fontSize: 13 }}>{fmtNum(c.rating)}</Txt>
                  <Txt style={{ fontSize: 13, color: C.ink3 }} numberOfLines={1}>· {c.city}</Txt>
                </View>
              </Tap>
            ))}
          </ScrollView>
        </Section>

        <Section kicker="Pro Video-Antwort, inkl. MwSt." title="Faire Preise, kein Abo">
          <View style={{ paddingHorizontal: SPACE, flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {TIERS.map(t => (
              <View key={t.id} style={[st.priceCard, { width: (width - SPACE * 2 - 12) / 2 }, t.pro && { backgroundColor: C.ink }]}>
                <Txt style={{ fontFamily: F.narrowBold, fontSize: 12.5, letterSpacing: 1.2, color: t.pro ? C.volt : C.ink3 }}>{t.pro ? 'PREMIUM' : `LEVEL ${t.id}`}</Txt>
                <Txt style={[st.priceNum, t.pro && { color: '#fff' }]}>{fmtEUR(t.price)}</Txt>
                <Txt style={{ fontFamily: F.semibold, fontSize: 14.5, color: t.pro ? '#fff' : C.ink, lineHeight: 19 }}>{t.name}</Txt>
              </View>
            ))}
          </View>
          <Muted style={{ paddingHorizontal: SPACE, marginTop: 14, fontSize: 13.5, lineHeight: 20 }}>Nimmt innerhalb von 72 Stunden niemand deine Anfrage an, zahlst du nichts.</Muted>
        </Section>

        <View style={{ paddingHorizontal: SPACE, marginTop: 36, gap: 14 }}>
          <Tap onPress={() => router.push('/coach')} label="Zum Coach-Bereich" style={st.coachBand}>
            <View style={{ flex: 1 }}>
              <Kicker light style={{ color: C.volt }}>Für Tennistrainer:innen</Kicker>
              <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 21, letterSpacing: -0.4, marginTop: 6, lineHeight: 25 }}>Mit deinem Wissen Geld verdienen, wann du willst.</Txt>
            </View>
            <View style={st.coachArrow}><Icon n="arrow" size={22} color={C.ink} sw={2.4} /></View>
          </Tap>
          <Txt style={{ color: C.ink3, fontSize: 12.5, lineHeight: 18, textAlign: 'center' }}>Vorschau: Es werden noch keine Videos hochgeladen und keine Zahlungen abgewickelt. Profile und Bewertungen sind Beispiele. Keine Verbindung zum Deutschen Tennis Bund.</Txt>
        </View>
      </View>
    </ScrollView>
  );
}

const st = StyleSheet.create({
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: SPACE },
  loginPill: { height: 38, paddingHorizontal: 16, borderRadius: R.pill, backgroundColor: 'rgba(255,255,255,0.14)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.22)', justifyContent: 'center' },
  heroBody: { flex: 1, justifyContent: 'flex-end', paddingHorizontal: SPACE, paddingBottom: 8 },
  heroTitle: { color: '#fff', fontFamily: F.heavy, fontSize: 38, lineHeight: 40, letterSpacing: -1.4 },
  trust: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap: 8, marginTop: 20 },
  strokeCard: { width: 140, height: 196, borderRadius: R.lg, backgroundColor: C.night2, borderWidth: 1, borderColor: C.nightLine, padding: 14 },
  strokeNum: { color: C.onNight3, fontFamily: F.narrowBold, fontSize: 13, letterSpacing: 1 },
  sheet: { backgroundColor: C.bg, borderTopLeftRadius: R.xl + 4, borderTopRightRadius: R.xl + 4, marginTop: 40, paddingTop: 34, paddingBottom: 40, marginBottom: -130 },
  howIc: { width: 48, height: 48, borderRadius: 16, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' },
  priceCard: { borderRadius: R.lg, padding: 16, backgroundColor: C.bg2, gap: 4, minHeight: 128 },
  priceNum: { fontFamily: F.black, fontSize: 38, letterSpacing: -1.5, lineHeight: 44, color: C.ink },
  coachBand: { backgroundColor: C.ink, borderRadius: R.lg + 2, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 14 },
  coachArrow: { width: 52, height: 52, borderRadius: 26, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' },
});
