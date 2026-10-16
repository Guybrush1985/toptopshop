import { Alert, Linking, View } from 'react-native';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { C, F, R } from '@/lib/theme';
import { CONTACT, LINKS, fmtEUR } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/components/Logo';
import { Button, H1, H2, Label, Muted, Row, Screen, Txt } from '@/components/ui';

const open = (url: string) => WebBrowser.openBrowserAsync(url).catch(() => Linking.openURL(url));

export default function Account() {
  const { credit, topUp } = useStore();
  const { session } = useAuth();
  const askTopUp = () => Alert.alert('Guthaben aufladen', 'Vorschau: Es wird nichts abgebucht.', [
    ...[25, 50, 100].map(v => ({ text: fmtEUR(v), onPress: () => topUp(v) })),
    { text: 'Abbrechen', style: 'cancel' as const },
  ]);

  return (
    <Screen top>
      <H1>Konto</H1>

      <View style={{ backgroundColor: C.night, borderRadius: R.lg, padding: 18, marginTop: 18, gap: 4 }}>
        <Label style={{ color: 'rgba(255,255,255,.6)' }}>Dein Guthaben</Label>
        <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 34, letterSpacing: -0.8, lineHeight: 40 }}>{fmtEUR(credit)}</Txt>
        <Txt style={{ color: 'rgba(255,255,255,.7)', fontSize: 14 }}>Mit Guthaben bezahlst du Anfragen mit einem Tipp.</Txt>
        <Button title="Guthaben aufladen" kind="volt" icon="wallet" onPress={askTopUp} style={{ marginTop: 12, height: 48 }} />
      </View>

      <H2 style={{ marginTop: 28 }}>Für Trainer:innen</H2>
      <Row icon="award" title={session ? 'Mein Coach-Bereich' : 'Coach-Bereich'} sub={session ? session.user.email : 'Registrieren oder einloggen'} onPress={() => router.push('/coach')} />

      <H2 style={{ marginTop: 28 }}>Hilfe und Rechtliches</H2>
      <Row icon="mail" title="Kontakt" sub={CONTACT} onPress={() => Linking.openURL('mailto:' + CONTACT)} />
      <Row icon="doc" title="Impressum" onPress={() => open(LINKS.impressum)} />
      <Row icon="lock" title="Datenschutz" onPress={() => open(LINKS.datenschutz)} />
      <Row icon="info" title="Hinweise zur Vorschau" onPress={() => open(LINKS.hinweise)} />

      <View style={{ alignItems: 'center', marginTop: 32, gap: 8 }}>
        <Logo size={22} />
        <Muted style={{ fontSize: 12.5, textAlign: 'center' }}>{`Version ${Constants.expoConfig?.version ?? ''} · Vorschau\nEin Angebot der TanMeOn GmbH. Keine Verbindung zum Deutschen Tennis Bund (DTB).`}</Muted>
      </View>
    </Screen>
  );
}
