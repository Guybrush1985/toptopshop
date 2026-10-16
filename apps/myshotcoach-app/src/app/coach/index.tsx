import { useState } from 'react';
import { Alert, Linking, Pressable, View } from 'react-native';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { C, F, R } from '@/lib/theme';
import { CUT, LINKS, fmtEUR, payout, strokeById, tierById } from '@/lib/data';
import { useAuth } from '@/lib/auth';
import { germanError, licenseOf, supabase, uploadFile } from '@/lib/supabase';
import { COACH_JOBS } from '@/lib/coachJobs';
import { StrokeIcon } from '@/components/Figures';
import { Icon } from '@/components/Icon';
import { Button, Card, ExampleBadge, Field, H1, H2, Muted, Notice, Pill, Row, Screen, Txt } from '@/components/ui';

export default function CoachHome() {
  const { session, loading } = useAuth();
  if (loading) return <Screen><Muted>Einen Moment …</Muted></Screen>;
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

  return (
    <Screen>
      <H1>Antworte per Video und verdiene mit deinem Wissen</H1>
      <Muted style={{ marginTop: 8 }}>{`Spieler:innen schicken dir ein Video von einem Schlag. Du nimmst an, schaust es dir an und antwortest mit einem kurzen Video vom Platz. Du bekommst ${100 - CUT * 100} % vom Preis, also z. B. ${fmtEUR(payout(tierById('B').price))} pro Antwort als B-Trainer:in.`}</Muted>

      <Card style={{ marginTop: 20, gap: 14 }}>
        <H2>Einloggen</H2>
        <Field label="E-Mail-Adresse" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" autoComplete="email" textContentType="emailAddress" />
        <Field label="Passwort" value={pw} onChangeText={setPw} secureTextEntry autoComplete="password" textContentType="password" onSubmitEditing={login} />
        {!!err && <Notice tone="err" icon="info">{err}</Notice>}
        <Button title="Einloggen" onPress={login} busy={busy} disabled={!email || !pw} />
        <Pressable onPress={reset} hitSlop={8}><Txt style={{ textAlign: 'center', fontSize: 14, textDecorationLine: 'underline', color: C.ink2 }}>Passwort vergessen?</Txt></Pressable>
      </Card>

      <View style={{ marginTop: 20, gap: 10 }}>
        <Button title="Jetzt als Trainer:in registrieren" kind="ghost" onPress={() => router.push('/coach/registrieren')} />
        <Row icon="video" title="So antwortest du per Video" sub="Ratgeber für gute Video-Antworten" onPress={() => router.push('/coach/ratgeber')} />
        <Row icon="award" title="Noch kein Trainer? Jetzt Trainer werden" sub="Infos zur Trainerausbildung beim DTB" onPress={() => Linking.openURL(LINKS.trainerWerden)} right={<Icon n="ext" size={17} color={C.ink3} />} />
      </View>
    </Screen>
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
    <Screen>
      <Muted>Hallo {profile?.first_name || ''}</Muted>
      <H1>Dein Coach-Bereich</H1>

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
        <Card style={{ marginTop: 18, gap: 4 }}>
          <Txt style={{ fontFamily: F.bold, fontSize: 17 }}>{name}</Txt>
          <Txt style={{ color: C.ink2, fontSize: 14 }}>{licenseOf(profile)}</Txt>
          {(profile.club || profile.city) && <Txt style={{ color: C.ink2, fontSize: 14 }}>{[profile.club, profile.city].filter(Boolean).join(', ')}</Txt>}
          <Txt style={{ color: C.ink3, fontSize: 13, marginTop: 4 }}>{`Deine Antwort kostet ${fmtEUR(tierById(profile.tier).price)}, du bekommst ${fmtEUR(payout(tierById(profile.tier).price))}.`}</Txt>
        </Card>
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
            <Card key={j.id} onPress={() => router.push(`/coach/anfrage/${j.id}`)} style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
              <StrokeIcon k={s.icon} size={46} />
              <View style={{ flex: 1, gap: 3 }}>
                <Txt style={{ fontFamily: F.bold }}>{s.name} · {j.player}</Txt>
                <Txt style={{ color: C.ink2, fontSize: 13.5 }} numberOfLines={1}>{j.note || 'Keine Frage dazu'}</Txt>
                {mine ? <Pill tone="volt">Von dir übernommen</Pill> : <Txt style={{ color: C.ink3, fontSize: 13 }}>{j.ago} · du bekommst {fmtEUR(payout(tierById(j.tier).price))}</Txt>}
              </View>
              {!mine && <Pressable onPress={() => setClaimed(c => [...c, j.id])} style={{ backgroundColor: C.ink, borderRadius: R.sm, paddingHorizontal: 12, paddingVertical: 8 }}>
                <Txt style={{ color: '#fff', fontFamily: F.semibold, fontSize: 14 }}>Annehmen</Txt>
              </Pressable>}
            </Card>
          );
        })}
      </View>

      <View style={{ marginTop: 22 }}>
        <Row icon="video" title="So antwortest du per Video" sub="Am Platz, Schläger in der Hand" onPress={() => router.push('/coach/ratgeber')} />
        <Row icon="logout" title="Ausloggen" onPress={signOut} />
      </View>
    </Screen>
  );
}
