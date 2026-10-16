import { Alert, Linking, View } from 'react-native';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { C, F, R, SHADOW } from '@/lib/theme';
import { CONTACT, LINKS, fmtEUR } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { Logo, LogoMark } from '@/components/Logo';
import { Icon } from '@/components/Icon';
import { Button, Group, H1, Kicker, Muted, Row, Screen, Tap, Txt } from '@/components/ui';

const open = (url: string) => WebBrowser.openBrowserAsync(url).catch(() => Linking.openURL(url));

export default function Account() {
  const { credit, topUp, requests } = useStore();
  const { session } = useAuth();
  const answered = requests.filter(r => r.status === 'answered').length;
  const askTopUp = () => Alert.alert('Guthaben aufladen', 'Vorschau: Es wird nichts abgebucht.', [
    ...[25, 50, 100].map(v => ({ text: fmtEUR(v), onPress: () => topUp(v) })),
    { text: 'Abbrechen', style: 'cancel' as const },
  ]);

  return (
    <Screen top bottomSpace={130}>
      <Kicker>Dein Bereich</Kicker>
      <H1 style={{ marginTop: 6 }}>Konto</H1>

      {/* Guthaben-Karte im Stil einer Premium-Bankkarte */}
      <LinearGradient colors={[C.night3, C.night]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={[{ borderRadius: R.xl, padding: 22, marginTop: 20, overflow: 'hidden' }, SHADOW.lg]}>
        <View style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: 90, borderWidth: 26, borderColor: 'rgba(212,245,60,0.10)' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Kicker light>Guthaben</Kicker>
          <LogoMark size={26} />
        </View>
        <Txt style={{ color: '#fff', fontFamily: F.black, fontSize: 46, letterSpacing: -1.6, lineHeight: 52, marginTop: 14 }}>{fmtEUR(credit)}</Txt>
        <Muted light style={{ fontSize: 14, marginTop: 2 }}>Bezahl deine nächste Anfrage mit einem Tipp.</Muted>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <Button title="Aufladen" kind="volt" icon="wallet" small onPress={askTopUp} style={{ flex: 1 }} />
          <Button title="Filmen" kind="glass" icon="cam" small onPress={() => router.push('/neu/schlag')} style={{ flex: 1 }} />
        </View>
      </LinearGradient>

      <View style={{ flexDirection: 'row', gap: 10, marginTop: 14 }}>
        <Stat n={String(requests.length)} l="Videos eingereicht" />
        <Stat n={String(answered)} l="Antworten erhalten" />
      </View>

      <Kicker style={{ marginTop: 32, marginBottom: 10 }}>Für Trainer:innen</Kicker>
      <Tap onPress={() => router.push('/coach')} label="Coach-Bereich"
        style={{ borderRadius: R.lg, backgroundColor: C.volt, padding: 18, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <View style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: C.ink, alignItems: 'center', justifyContent: 'center' }}>
          <Icon n="award" size={22} color={C.volt} />
        </View>
        <View style={{ flex: 1 }}>
          <Txt style={{ fontFamily: F.heavy, fontSize: 17, letterSpacing: -0.3 }}>{session ? 'Mein Coach-Bereich' : 'Werde Coach auf tennistrainer.app'}</Txt>
          <Txt style={{ fontSize: 13.5, color: C.ink2 }} numberOfLines={1}>{session ? session.user.email : 'Antworte per Video und verdiene mit deinem Wissen'}</Txt>
        </View>
        <Icon n="chev" size={18} color={C.ink} />
      </Tap>

      <Kicker style={{ marginTop: 32, marginBottom: 10 }}>Hilfe und Rechtliches</Kicker>
      <Group>
        <Row icon="mail" title="Kontakt" sub={CONTACT} onPress={() => Linking.openURL('mailto:' + CONTACT)} />
        <Row icon="doc" title="Impressum" onPress={() => open(LINKS.impressum)} />
        <Row icon="lock" title="Datenschutz" onPress={() => open(LINKS.datenschutz)} />
        <Row icon="info" title="Hinweise zur Vorschau" onPress={() => open(LINKS.hinweise)} last />
      </Group>

      <View style={{ alignItems: 'center', marginTop: 36, gap: 10 }}>
        <Logo size={22} />
        <Muted style={{ fontSize: 12.5, lineHeight: 18, textAlign: 'center', color: C.ink3 }}>{`Version ${Constants.expoConfig?.version ?? ''} · Vorschau\nEin Angebot der TanMeOn GmbH.\nKeine Verbindung zum Deutschen Tennis Bund (DTB).`}</Muted>
      </View>
    </Screen>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <View style={{ flex: 1, borderRadius: R.lg, backgroundColor: C.bg2, padding: 16 }}>
      <Txt style={{ fontFamily: F.black, fontSize: 28, letterSpacing: -0.8, lineHeight: 32 }}>{n}</Txt>
      <Txt style={{ fontFamily: F.narrowBold, fontSize: 12.5, lineHeight: 16, letterSpacing: 1, textTransform: 'uppercase', color: C.ink3, marginTop: 4 }}>{l}</Txt>
    </View>
  );
}
