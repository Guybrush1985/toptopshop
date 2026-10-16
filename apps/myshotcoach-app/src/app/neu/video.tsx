import { useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { C, F, R } from '@/lib/theme';
import { FILM_STEPS, FILM_TIPS, strokeById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { AroundIcon, PhoneFrameIcon } from '@/components/Figures';
import { Icon } from '@/components/Icon';
import { LocalVideo } from '@/components/Video';
import { Button, Field, FlowHeader, H1, H2, Kicker, Muted, Screen, Txt } from '@/components/ui';

export default function RecordVideo() {
  const { draft, setDraft } = useStore();
  const [busy, setBusy] = useState(false);
  const stroke = strokeById(draft.stroke);

  const pick = async (camera: boolean) => {
    setBusy(true);
    try {
      const perm = camera ? await ImagePicker.requestCameraPermissionsAsync() : await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted && Platform.OS !== 'web') {
        Alert.alert('Kein Zugriff', camera ? 'Bitte erlaube tennistrainer.app in den Einstellungen den Zugriff auf die Kamera.' : 'Bitte erlaube tennistrainer.app in den Einstellungen den Zugriff auf deine Videos.');
        return;
      }
      const opts: ImagePicker.ImagePickerOptions = { mediaTypes: ['videos'], videoMaxDuration: 300, quality: 1 };
      const res = camera ? await ImagePicker.launchCameraAsync(opts) : await ImagePicker.launchImageLibraryAsync(opts);
      if (!res.canceled && res.assets[0]) setDraft(d => ({ ...d, video: { uri: res.assets[0].uri, duration: res.assets[0].duration } }));
    } finally { setBusy(false); }
  };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader step={2} />
      <Screen footer={draft.video
        ? <Button title="Weiter zur Coach-Wahl" iconRight="arrow" onPress={() => router.push('/neu/trainer')} />
        : <><Button title="Jetzt filmen" kind="volt" icon="cam" onPress={() => pick(true)} busy={busy} /><Button title="Aus der Mediathek wählen" kind="ghost" icon="image" onPress={() => pick(false)} disabled={busy} small /></>}>
        <H1 style={{ marginTop: 18 }}>{`${stroke.name} filmen`}</H1>
        <Muted style={{ marginTop: 8 }}>Rundherum, insgesamt 15 Schläge aus drei Perspektiven. So sieht dein Coach alles, was wichtig ist.</Muted>

        <View style={st.guide}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 6 }}>
            <View style={st.around}><AroundIcon size={50} color="#fff" /></View>
            <View style={{ flex: 1 }}>
              <Kicker light style={{ color: C.volt }}>Filmanleitung</Kicker>
              <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 19, letterSpacing: -0.3, marginTop: 3 }}>Je 5 Schläge pro Seite</Txt>
            </View>
          </View>
          {FILM_STEPS.map((s, i) => (
            <View key={s.k} style={[st.step, i === FILM_STEPS.length - 1 && { borderBottomWidth: 0 }]}>
              <View style={st.phone}><PhoneFrameIcon view={s.k} size={66} color="#fff" /></View>
              <View style={{ flex: 1 }}>
                <Txt style={{ color: '#fff', fontFamily: F.bold, fontSize: 15.5 }}>{s.t}</Txt>
                <Txt style={{ color: C.onNight3, fontSize: 13.5, lineHeight: 19, marginTop: 2 }}>{s.d}</Txt>
              </View>
              <Txt style={st.stepNum}>{i + 1}</Txt>
            </View>
          ))}
        </View>

        <View style={{ gap: 12, marginTop: 20 }}>
          {FILM_TIPS.map(t => (
            <View key={t} style={{ flexDirection: 'row', gap: 10 }}>
              <View style={st.tick}><Icon n="check" size={13} color={C.ink} sw={3} /></View>
              <Txt style={{ flex: 1, fontSize: 14.5, lineHeight: 21, color: C.ink2 }}>{t}</Txt>
            </View>
          ))}
        </View>

        {draft.video ? (
          <View style={{ marginTop: 28, gap: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <H2 style={{ flex: 1 }}>Dein Video</H2>
              <Button title="Ändern" kind="ghost" small onPress={() => pick(false)} style={{ height: 38 }} />
            </View>
            <LocalVideo uri={draft.video.uri} />
            <Field label="Was soll sich dein Coach besonders anschauen? (optional)" value={draft.note || ''} onChangeText={note => setDraft(d => ({ ...d, note }))}
              placeholder="z. B. Meine Vorhand longline geht oft ins Aus." multiline maxLength={400} />
          </View>
        ) : (
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginTop: 22 }}>
            <Icon n="lock" size={15} color={C.ink3} />
            <Txt style={{ flex: 1, color: C.ink3, fontSize: 13 }}>Dein Video sehen nur du und dein Coach. In der Vorschau bleibt es auf deinem Handy.</Txt>
          </View>
        )}
      </Screen>
    </View>
  );
}

const st = StyleSheet.create({
  guide: { backgroundColor: C.ink, borderRadius: R.xl, padding: 20, marginTop: 22 },
  around: { width: 60, height: 60, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center' },
  step: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: C.nightLine },
  phone: { width: 78, height: 56, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.06)', alignItems: 'center', justifyContent: 'center' },
  stepNum: { fontFamily: F.black, fontSize: 26, color: 'rgba(212,245,60,0.9)', width: 22, textAlign: 'right' },
  tick: { width: 22, height: 22, borderRadius: 11, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
});
