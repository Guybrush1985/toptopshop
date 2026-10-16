import { useState } from 'react';
import { Alert, Linking, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { C, F, R, SPACE } from '@/lib/theme';
import { CUT, LINKS, fmtEUR, payout, strokeById, tierById } from '@/lib/data';
import { useAuth } from '@/lib/auth';
import { germanError, licenseOf, supabase, uploadFile } from '@/lib/supabase';
import { COACH_JOBS } from '@/lib/coachJobs';
import { StrokeIcon } from '@/components/Figures';
import { Icon } from '@/components/Icon';
import { Button, Card, ExampleBadge, Field, FlowHeader, Group, H1, H2, Kicker, Muted, Notice, Pill, RoundBtn, Row, Screen, Tap, Txt } from '@/components/ui';
import { LogoMark } from '@/components/Logo';
import { useStatusBar } from '@/lib/useStatusBar';

export default function CoachHome() {
  const { session, loading } = useAuth();
  if (loading) return <View style={{ flex: 1, backgroundColor: C.bg }}><FlowHeader title="Coach-Bereich" /><Screen><Muted>Einen Moment …</Muted></Screen></View>;
  return session ? <Dashboard /> : <Login />;
}

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const login = async () => {
    setBusy(true); setErr('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: pw });
    if (error) setErr(germanError(error));
    setBusy(false);
  };
  const reset = async () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) { setErr('Bitte gib zuerst deine E-Mail-Adresse ein.'); return; }
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: 'https://toptop.shop/myshotcoach/coach/' });
    if (error) setErr(germanError(error)); else Alert.alert('E-Mail ist unterwegs', 'Wir haben dir einen Link geschickt, mit dem du ein neues Passwort setzt.');
  };

  useStatusBar('light');
  const ins = useSafeAreaInsets();
  return (
    <Screen pad={false}>
      <LinearGradient colors={[C.night3, C.night]} start={{ x: 0, y: 0 }} end={{ x: 0.6, y: 1 }} style={{ paddingTop: ins.top + 8, paddingHorizontal: SPACE, paddingBottom: 64, overflow: 'hidden' }}>
        <View style={{ position: 'absolute', right: -70, top: 40, width: 260, height: 260, borderRadius: 130, borderWidth: 34, borderColor: 'rgba(212,245,60,0.08)' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 44 }}>
          <RoundBtn icon="back" label="Zurück" dark onPress={() => router.canGoBack() ? router.back() : router.replace('/')} />
          <LogoMark size={30} light />
        </View>
        <Kicker light style={{ marginTop: 28, color: C.volt }}>Für Trainer:innen</Kicker>
        <H1 light style={{ marginTop: 8, fontSize: 34, lineHeight: 37 }}>{'Antworte per Video.\nVerdiene mit deinem Wissen.'}</H1>
        <Muted light style={{ marginTop: 12 }}>Spieler:innen schicken dir ein Video von einem Schlag. Du antwortest mit einem kurzen Video vom Platz.</Muted>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 22 }}>
          <Fig n={`${100 - CUT * 100} %`} l="vom Preis für dich" />
          <Fig n={fmtEUR(payout(tierById('B').price))} l="pro Antwort als B-Trainer:in" />
        </View>
      </LinearGradient>

      <View style={{ marginTop: -36, marginHorizontal: SPACE }}>
        <Card style={{ gap: 14, padding: 20 }}>
          <H2>Einloggen</H2>
          <Field label="E-Mail-Adresse" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" autoComplete="email" textContentType="emailAddress" />
          <Field label="Passwort" value={pw} onChangeText={setPw} secureTextEntry autoComplete="password" textContentType="password" onSubmitEditing={login} />
          {!!err && <Notice tone="err" icon="info">{err}</Notice>}
          <Button title="Einloggen" onPress={login} busy={busy} disabled={!email || !pw} />
          <Pressable onPress={reset} hitSlop={8}><Txt style={{ textAlign: 'center', fontSize: 14, textDecorationLine: 'underline', color: C.ink2 }}>Passwort vergessen?</Txt></Pressable>
        </Card>
      </View>

      <View style={{ paddingHorizontal: SPACE, marginTop: 22, gap: 14 }}>
        <Tap onPress={() => router.push('/coach/registrieren')} label="Jetzt als Trainer:in registrieren"
          style={{ borderRadius: R.lg, backgroundColor: C.volt, padding: 18, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <View style={{ flex: 1 }}>
            <Txt style={{ fontFamily: F.heavy, fontSize: 17, letterSpacing: -0.3 }}>Neu hier? Profil anlegen</Txt>
            <Txt style={{ fontSize: 13.5, color: C.ink2 }}>In wenigen Minuten, Nachweis auch später</Txt>
          </View>
          <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: C.ink, alignItems: 'center', justifyContent: 'center' }}><Icon n="arrow" size={18} color={C.volt} sw={2.2} /></View>
        </Tap>
        <Group>
          <Row icon="video" title="So antwortest du per Video" sub="Ratgeber für gute Video-Antworten" onPress={() => router.push('/coach/ratgeber')} />
          <Row icon="award" title="Noch kein Trainer? Jetzt Trainer werden" sub="Infos zur Trainerausbildung beim DTB" onPress={() => Linking.openURL(LINKS.trainerWerden)} right={<Icon n="ext" size={17} color={C.ink3} />} last />
        </Group>
      </View>
    </Screen>
  );
}

function Fig({ n, l }: { n: string; l: string }) {
  return (
    <View style={{ flex: 1, borderRadius: R.md, borderWidth: 1, borderColor: C.nightLine, backgroundColor: 'rgba(255,255,255,0.04)', padding: 14 }}>
      <Txt style={{ fontFamily: F.black, fontSize: 24, letterSpacing: -0.6, color: '#fff', lineHeight: 28 }}>{n}</Txt>
      <Txt style={{ fontSize: 12.5, color: C.onNight3, marginTop: 2, lineHeight: 16 }}>{l}</Txt>
    </View>
  );
}

function Dashboard() {
  const { session, profile, refresh, signOut } = useAuth();
  const [busy, setBusy] = useState(false);
  const [claimed, setClaimed] = useState<string[]>([]);
  const name = profile ? [profile.first_name, profile.last_name].filter(Boolean).join(' ') : session?.user.email;

  const uploadProof = async () => {
    const res = await DocumentPicker.getDocumentAsync({ type: ['application/pdf', 'image/*'], copyToCacheDirectory: true });
    if (res.canceled || !res.assets[0] || !session) return;
    setBusy(true);
    try {
      const path = await uploadFile(session.user.id, 'nachweis', res.assets[0]);
      const { error } = await supabase.from('coaches').update({ proof_path: path }).eq('id', session.user.id);
      if (error) throw error;
      await refresh();
      Alert.alert('Danke!', 'Dein Nachweis ist da. Wir prüfen ihn und schalten dein Profil dann frei.');
    } catch (e) { Alert.alert('Hochladen hat nicht geklappt', germanError(e)); }
    setBusy(false);
  };

  const status = profile?.status;
  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
    <FlowHeader title="Coach-Bereich" />
    <Screen>
      <Kicker style={{ marginTop: 14 }}>{`Hallo ${profile?.first_name || ''}`.trim()}</Kicker>
      <H1 style={{ marginTop: 6 }}>Dein Coach-Bereich</H1>

      <View style={{ marginTop: 16, gap: 10 }}>
        {status === 'live' && <Notice tone="ok" icon="check">Dein Profil ist live. Spieler:innen können dich jetzt finden und anfragen.</Notice>}
        {status === 'in_review' && <Notice tone="ok" icon="shield">Dein Nachweis wird geprüft. Sobald wir ihn bestätigt haben, schalten wir dein Profil live.</Notice>}
        {status === 'rejected' && <Notice tone="err" icon="info">Wir konnten deinen Nachweis leider nicht bestätigen. Bitte lade einen aktuellen Nachweis hoch oder schreib uns.</Notice>}
        {(status === 'missing_proof' || status === 'rejected') && <>
          {status === 'missing_proof' && <Notice tone="warn" icon="doc">{`Infos fehlen: Dein Profil ist noch nicht live. Es fehlt dein ${profile?.tier === 'P' ? 'Nachweis zur Weltranglisten-Platzierung' : 'Lizenznachweis'}.`}</Notice>}
          <Button title="Nachweis hochladen (PDF oder Foto)" icon="upload" onPress={uploadProof} busy={busy} />
        </>}
        {!profile && <Notice tone="warn" icon="info">Dein Profil konnten wir gerade nicht laden. Bitte versuch es gleich noch einmal.</Notice>}
      </View>

      {profile && (
        <LinearGradient colors={[C.night3, C.night]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ marginTop: 18, borderRadius: R.xl, padding: 20, overflow: 'hidden' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' }}>
              <Txt style={{ fontFamily: F.black, fontSize: 19, color: C.ink }}>{profile.tier}</Txt>
            </View>
            <View style={{ flex: 1 }}>
              <Txt style={{ fontFamily: F.heavy, fontSize: 18, color: '#fff', letterSpacing: -0.3 }}>{name}</Txt>
              <Txt style={{ color: C.onNight2, fontSize: 13.5 }}>{licenseOf(profile)}</Txt>
            </View>
            <Pill tone={status === 'live' ? 'volt' : 'glass'}>{status === 'live' ? 'Live' : 'Offline'}</Pill>
          </View>
          {(profile.club || profile.city) && <Txt style={{ color: C.onNight3, fontSize: 13.5, marginTop: 12 }}>{[profile.club, profile.city].filter(Boolean).join(', ')}</Txt>}
          <View style={{ flexDirection: 'row', marginTop: 16, borderTopWidth: 1, borderTopColor: C.nightLine, paddingTop: 14 }}>
            <View style={{ flex: 1 }}><Kicker light>Preis</Kicker><Txt style={{ fontFamily: F.heavy, fontSize: 20, color: '#fff' }}>{fmtEUR(tierById(profile.tier).price)}</Txt></View>
            <View style={{ flex: 1 }}><Kicker light>Für dich</Kicker><Txt style={{ fontFamily: F.heavy, fontSize: 20, color: C.volt }}>{fmtEUR(payout(tierById(profile.tier).price))}</Txt></View>
          </View>
        </LinearGradient>
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 28, marginBottom: 10 }}>
        <H2>Offene Anfragen</H2><ExampleBadge />
      </View>
      <Muted style={{ fontSize: 14, marginBottom: 12 }}>So sehen Anfragen aus, sobald dein Profil live ist. Du hast nach der Annahme 72 Stunden Zeit für deine Video-Antwort.</Muted>
      <View style={{ gap: 10 }}>
        {COACH_JOBS.map(j => {
          const s = strokeById(j.stroke);
          const mine = claimed.includes(j.id);
          return (
            <Card key={j.id} onPress={() => router.push(`/coach/anfrage/${j.id}`)} style={{ flexDirection: 'row', gap: 12, alignItems: 'center', padding: 14 }}>
              <View style={{ width: 60, height: 60, borderRadius: 16, backgroundColor: C.bg2, alignItems: 'center', justifyContent: 'center' }}><StrokeIcon k={s.icon} size={48} /></View>
              <View style={{ flex: 1, gap: 3 }}>
                <Txt style={{ fontFamily: F.bold }}>{s.name} · {j.player}</Txt>
                <Txt style={{ color: C.ink2, fontSize: 13.5 }} numberOfLines={1}>{j.note || 'Keine Frage dazu'}</Txt>
                {mine ? <Pill tone="volt">Von dir übernommen</Pill> : <Txt style={{ color: C.ink3, fontSize: 13 }}>{j.ago} · du bekommst {fmtEUR(payout(tierById(j.tier).price))}</Txt>}
              </View>
              {!mine && <Tap onPress={() => setClaimed(c => [...c, j.id])} label="Annehmen" style={{ backgroundColor: C.volt, borderRadius: R.pill, paddingHorizontal: 14, height: 38, justifyContent: 'center' }}>
                <Txt style={{ fontFamily: F.bold, fontSize: 14 }}>Annehmen</Txt>
              </Tap>}
            </Card>
          );
        })}
      </View>

      <Group style={{ marginTop: 26 }}>
        <Row icon="video" title="So antwortest du per Video" sub="Am Platz, Schläger in der Hand" onPress={() => router.push('/coach/ratgeber')} />
        <Row icon="logout" title="Ausloggen" onPress={signOut} last />
      </Group>
    </Screen>
    </View>
  );
}
