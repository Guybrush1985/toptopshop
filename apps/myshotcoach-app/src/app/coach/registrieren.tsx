import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { C, F, R } from '@/lib/theme';
import { TIERS, fmtEUR, payout, type TierId } from '@/lib/data';
import { useAuth } from '@/lib/auth';
import { germanError, searchClubs, supabase, uploadFile } from '@/lib/supabase';
import { Icon } from '@/components/Icon';
import { Button, Card, Field, H1, H2, Muted, Notice, Screen, Txt } from '@/components/ui';

type Proof = DocumentPicker.DocumentPickerAsset | 'later' | null;
const LANGS = ['Deutsch', 'Englisch', 'Spanisch', 'Französisch', 'Italienisch', 'Türkisch', 'Polnisch', 'Russisch'];

export default function Register() {
  const { refresh } = useAuth();
  const [f, setF] = useState({ first: '', last: '', email: '', password: '', phone: '', club: '', city: '', bio: '', proTour: 'ATP' as 'ATP' | 'WTA', proRank: '', proLic: '' as '' | 'C' | 'B' | 'A' });
  const [tier, setTier] = useState<TierId | null>(null);
  const [langs, setLangs] = useState<string[]>(['Deutsch']);
  const [proof, setProof] = useState<Proof>(null);
  const [clubs, setClubs] = useState<{ name: string; city: string }[]>([]);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<'confirm' | 'ok' | null>(null);
  const set = (k: keyof typeof f) => (v: string) => { setF(x => ({ ...x, [k]: v })); setErr(''); };

  useEffect(() => {
    const t = setTimeout(() => { searchClubs(f.club).then(setClubs).catch(() => setClubs([])); }, 250);
    return () => clearTimeout(t);
  }, [f.club]);

  const check = () => {
    if (!f.first.trim() || !f.last.trim()) return 'Bitte gib deinen Vor- und Nachnamen an.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.trim())) return 'Bitte gib eine gültige E-Mail-Adresse an.';
    if (f.password.length < 8) return 'Bitte wähl ein Passwort mit mindestens 8 Zeichen.';
    if (!tier) return 'Bitte wähl dein Level.';
    if (tier === 'P' && !(+f.proRank >= 1 && +f.proRank <= 1000)) return 'Für Ex-Profis gilt: beste Weltranglisten-Platzierung zwischen 1 und 1000.';
    if (!proof) return 'Bitte lade deinen Nachweis hoch oder wähl „Später nachreichen“.';
    return '';
  };

  const submit = async () => {
    const e = check(); if (e) { setErr(e); return; }
    setBusy(true); setErr('');
    try {
      const data = {
        first_name: f.first.trim(), last_name: f.last.trim(), phone: f.phone.trim(), tier, club: f.club.trim(), city: f.city.trim(), bio: f.bio.trim(), langs,
        ...(tier === 'P' ? { pro_tour: f.proTour, pro_rank: String(f.proRank), pro_license: f.proLic } : {}),
      };
      const { data: res, error } = await supabase.auth.signUp({ email: f.email.trim(), password: f.password, options: { data, emailRedirectTo: 'https://toptop.shop/myshotcoach/coach/' } });
      if (error) throw error;
      if (res.session && res.user) {
        if (proof && proof !== 'later') {
          const path = await uploadFile(res.user.id, 'nachweis', proof);
          await supabase.from('coaches').update({ proof_path: path }).eq('id', res.user.id);
        }
        await refresh();
        setDone('ok');
      } else setDone('confirm');
    } catch (x) { setErr(germanError(x)); }
    setBusy(false);
  };

  if (done) return (
    <Screen footer={<Button title={done === 'ok' ? 'Zu meinem Coach-Bereich' : 'Zum Login'} onPress={() => router.replace('/coach')} />}>
      <View style={{ alignItems: 'center', gap: 14, marginTop: 40 }}>
        <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' }}>
          <Icon n={done === 'ok' ? 'check' : 'mail'} size={36} color={C.ink} sw={2.4} />
        </View>
        <H1 style={{ textAlign: 'center' }}>{done === 'ok' ? 'Dein Profil ist angelegt' : 'Bitte bestätige deine E-Mail'}</H1>
        <Muted style={{ textAlign: 'center' }}>{done === 'ok'
          ? (proof === 'later' ? 'Es fehlt noch dein Nachweis. Ohne ihn schalten wir dein Profil nicht live. Du kannst ihn jederzeit im Coach-Bereich hochladen.' : 'Wir prüfen jetzt deinen Nachweis und schalten dein Profil frei. Du bekommst eine E-Mail, sobald es live ist.')
          : `Wir haben dir einen Link an ${f.email.trim()} geschickt. Danach kannst du dich hier einloggen${proof && proof !== 'later' ? ' und deinen Nachweis hochladen' : ''}.`}</Muted>
      </View>
    </Screen>
  );

  return (
    <Screen footer={<Button title="Profil anlegen" onPress={submit} busy={busy} />}>
      <H1>Werde Coach bei MyShotCoach</H1>
      <Muted style={{ marginTop: 8 }}>Du legst dein Profil direkt an. Live geht es, sobald wir deinen Nachweis geprüft haben.</Muted>

      <H2 style={st.h}>Über dich</H2>
      <View style={st.gap}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}><Field label="Vorname" value={f.first} onChangeText={set('first')} autoComplete="given-name" /></View>
          <View style={{ flex: 1 }}><Field label="Nachname" value={f.last} onChangeText={set('last')} autoComplete="family-name" /></View>
        </View>
        <Field label="E-Mail-Adresse" value={f.email} onChangeText={set('email')} autoCapitalize="none" keyboardType="email-address" autoComplete="email" />
        <Field label="Passwort" value={f.password} onChangeText={set('password')} secureTextEntry autoComplete="new-password" hint="Mindestens 8 Zeichen" />
        <Field label="Telefon (optional)" value={f.phone} onChangeText={set('phone')} keyboardType="phone-pad" autoComplete="tel" />
      </View>

      <H2 style={st.h}>Deine Qualifikation</H2>
      <View style={st.gap}>
        {TIERS.map(t => {
          const on = tier === t.id;
          return (
            <Card key={t.id} selected={on} onPress={() => { setTier(t.id); setErr(''); }} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={[st.radio, on && st.radioOn]}>{on && <Icon n="check" size={14} color="#fff" sw={3} />}</View>
              <View style={{ flex: 1 }}>
                <Txt style={{ fontFamily: F.bold }}>{t.pro ? 'Ex-Profi (ATP/WTA, mind. Top 1000)' : t.name}</Txt>
                <Txt style={{ color: C.ink3, fontSize: 13.5 }}>{t.pro ? 'mit oder ohne Trainerlizenz' : t.ex}</Txt>
              </View>
              <Txt style={{ color: C.ink2, fontSize: 13.5 }}>{`du bekommst ${fmtEUR(payout(t.price))}`}</Txt>
            </Card>
          );
        })}
        {tier === 'P' && (
          <Card style={{ gap: 12 }}>
            <Txt style={{ fontFamily: F.semibold, fontSize: 14 }}>Tour</Txt>
            <Choice options={['ATP', 'WTA']} value={f.proTour} onChange={v => set('proTour')(v)} />
            <Field label="Beste Weltranglisten-Platzierung (Einzel oder Doppel)" value={f.proRank} onChangeText={v => set('proRank')(v.replace(/\D/g, '').slice(0, 4))} keyboardType="number-pad" placeholder="z. B. 412" />
            <Txt style={{ fontFamily: F.semibold, fontSize: 14 }}>Trainerlizenz (optional)</Txt>
            <Choice options={['Keine', 'C', 'B', 'A']} value={f.proLic || 'Keine'} onChange={v => set('proLic')(v === 'Keine' ? '' : v)} />
          </Card>
        )}
      </View>

      <H2 style={st.h}>Dein Profil</H2>
      <View style={st.gap}>
        <View style={{ gap: 6 }}>
          <Field label="Heimatverein" value={f.club} onChangeText={v => { set('club')(v); }} placeholder="Namen eintippen, z. B. TC Blau-Weiß" />
          {clubs.length > 0 && !clubs.some(c => c.name === f.club) && (
            <View style={st.drop}>
              {clubs.map(c => (
                <Pressable key={c.name + c.city} onPress={() => { setF(x => ({ ...x, club: c.name, city: c.city || x.city })); setClubs([]); }} style={({ pressed }) => [st.dropRow, pressed && { backgroundColor: C.bg2 }]}>
                  <Txt style={{ fontFamily: F.semibold, fontSize: 15 }}>{c.name}</Txt>
                  {!!c.city && <Txt style={{ color: C.ink3, fontSize: 13 }}>{c.city}</Txt>}
                </Pressable>
              ))}
            </View>
          )}
        </View>
        <Field label="Stadt" value={f.city} onChangeText={set('city')} />
        <Field label="Über dich (optional)" value={f.bio} onChangeText={set('bio')} multiline maxLength={700} placeholder="Wen trainierst du, worauf achtest du besonders?" />
        <Txt style={{ fontFamily: F.semibold, fontSize: 14 }}>Sprachen</Txt>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {LANGS.map(l => {
            const on = langs.includes(l);
            return (
              <Pressable key={l} onPress={() => setLangs(x => on ? x.filter(y => y !== l) : [...x, l])} style={[st.chip, on && st.chipOn]} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
                <Txt style={[{ fontFamily: F.semibold, fontSize: 14 }, on && { color: '#fff' }]}>{l}</Txt>
              </Pressable>
            );
          })}
        </View>
      </View>

      <H2 style={st.h}>Nachweis</H2>
      <View style={st.gap}>
        <Muted style={{ fontSize: 14.5 }}>{tier === 'P' ? 'Ein Nachweis deiner besten Weltranglisten-Platzierung, z. B. ein Screenshot vom ATP- oder WTA-Profil.' : 'Ein Foto oder PDF deiner Trainerlizenz.'}</Muted>
        <Card selected={!!proof && proof !== 'later'} onPress={async () => {
          const r = await DocumentPicker.getDocumentAsync({ type: ['application/pdf', 'image/*'], copyToCacheDirectory: true });
          if (!r.canceled && r.assets[0]) { setProof(r.assets[0]); setErr(''); }
        }} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Icon n="upload" size={20} color={C.ink} />
          <Txt style={{ flex: 1, fontFamily: F.semibold }} numberOfLines={1}>{proof && proof !== 'later' ? proof.name : 'Nachweis hochladen'}</Txt>
          {proof && proof !== 'later' && <Icon n="check" size={18} color={C.ok} sw={2.4} />}
        </Card>
        <Card selected={proof === 'later'} onPress={() => { setProof('later'); setErr(''); }} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Icon n="clock" size={20} color={C.ink} />
          <Txt style={{ flex: 1, fontFamily: F.semibold }}>Später nachreichen</Txt>
        </Card>
        {proof === 'later' && <Notice tone="warn" icon="doc">Ohne Nachweis bleibt dein Profil offline und ist als „Infos fehlen“ markiert, bis du ihn hochlädst.</Notice>}
      </View>

      {!!err && <View style={{ marginTop: 18 }}><Notice tone="err" icon="info">{err}</Notice></View>}
      <Muted style={{ fontSize: 12.5, marginTop: 18 }}>Mit dem Anlegen akzeptierst du die Datenschutzerklärung. Deine Daten liegen bei unserem Dienstleister Supabase in Frankfurt.</Muted>
    </Screen>
  );
}

function Choice({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      {options.map(o => (
        <Pressable key={o} onPress={() => onChange(o)} style={[st.chip, value === o && st.chipOn]} accessibilityRole="radio" accessibilityState={{ checked: value === o }}>
          <Txt style={[{ fontFamily: F.semibold, fontSize: 14 }, value === o && { color: '#fff' }]}>{o}</Txt>
        </Pressable>
      ))}
    </View>
  );
}

const st = StyleSheet.create({
  h: { marginTop: 28, marginBottom: 12 },
  gap: { gap: 12 },
  radio: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: C.line2, alignItems: 'center', justifyContent: 'center' },
  radioOn: { backgroundColor: C.ink, borderColor: C.ink },
  chip: { borderWidth: 1, borderColor: C.line2, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8 },
  chipOn: { backgroundColor: C.ink, borderColor: C.ink },
  drop: { borderWidth: 1, borderColor: C.line2, borderRadius: R.md, overflow: 'hidden' },
  dropRow: { paddingHorizontal: 14, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: C.line },
});
