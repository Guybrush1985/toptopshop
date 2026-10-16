import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { C, F } from '@/lib/theme';
import { REVIEWS, coachById, fmtEUR, fmtNum, tierById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Icon, type IconName } from '@/components/Icon';
import { Button, Card, ExampleBadge, H1, H2, Muted, Pill, Portrait, Screen, Stars, Txt } from '@/components/ui';

export default function CoachProfile() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setDraft, draft } = useStore();
  const c = coachById(id);
  if (!c) return <Screen><Muted>Dieses Profil gibt es nicht.</Muted></Screen>;
  const t = tierById(c.tier);
  const book = () => {
    setDraft(d => ({ ...d, pick: { mode: 'coach', coachId: c.id } }));
    if (!draft.stroke) router.push('/neu/schlag');
    else if (!draft.video) router.push('/neu/video');
    else router.push('/neu/bezahlen');
  };

  return (
    <Screen footer={<Button title={`${c.name.split(' ')[0]} anfragen · ${fmtEUR(t.price)}`} icon="cam" onPress={book} />}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Portrait c={c} size={92} />
        <View style={{ flex: 1, gap: 5 }}>
          <View style={{ flexDirection: 'row', gap: 6 }}><Pill tone={t.pro ? 'dark' : 'plain'}>{t.short}</Pill>{c.example && <ExampleBadge />}</View>
          <H1 style={{ fontSize: 25, lineHeight: 28 }}>{c.name}</H1>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Stars v={c.rating} /><Txt style={{ fontFamily: F.semibold, fontSize: 14 }}>{fmtNum(c.rating)}</Txt><Txt style={{ color: C.ink3, fontSize: 14 }}>({c.reviews} Bewertungen)</Txt>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 18, gap: 8 }}>
        <Fact icon="award" text={c.license} />
        <Fact icon="pin" text={`${c.club}, ${c.city}`} />
        <Fact icon="clock" text={`Antwortet meist in ${c.resp} Stunden`} />
        <Fact icon="user" text={`Spricht ${c.langs.join(', ')}`} />
      </View>

      <Txt style={{ marginTop: 18, lineHeight: 24 }}>{c.bio}</Txt>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
        {c.focus.map(f => <Pill key={f}>{f}</Pill>)}
      </View>

      <H2 style={{ marginTop: 26, marginBottom: 10 }}>Lizenzen und Zertifikate</H2>
      {c.certs.map(x => <Fact key={x} icon="shield" text={x} />)}
      {c.awards.length > 0 && <>
        <H2 style={{ marginTop: 22, marginBottom: 10 }}>Erfolge</H2>
        {c.awards.map(x => <Fact key={x} icon="award" text={x} />)}
      </>}

      <H2 style={{ marginTop: 26, marginBottom: 10 }}>Bewertungen</H2>
      <View style={{ gap: 10 }}>
        {REVIEWS.map(r => (
          <Card key={r.n} style={{ gap: 6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Txt style={{ fontFamily: F.bold }}>{r.n}</Txt><Stars v={r.s} size={12} /><Txt style={{ color: C.ink3, fontSize: 13, marginLeft: 'auto' }}>{r.d}</Txt>
            </View>
            <Txt style={{ color: C.ink3, fontSize: 13 }}>{r.st}</Txt>
            <Txt style={{ fontSize: 15, lineHeight: 22 }}>{r.t}</Txt>
          </Card>
        ))}
      </View>
      <Muted style={{ fontSize: 12.5, marginTop: 12 }}>Beispielbewertungen. Später können nur Spieler:innen bewerten, die eine Video-Antwort bekommen haben.</Muted>
    </Screen>
  );
}

const Fact = ({ icon, text }: { icon: IconName; text: string }) => (
  <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', paddingVertical: 3 }}>
    <Icon n={icon} size={18} color={C.ink2} />
    <Txt style={{ flex: 1, fontSize: 15 }}>{text}</Txt>
  </View>
);
