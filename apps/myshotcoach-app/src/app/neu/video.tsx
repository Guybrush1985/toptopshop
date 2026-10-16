import { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { C, F } from '@/lib/theme';
import { FILM_STEPS, FILM_TIPS, strokeById } from '@/lib/data';
import { useStore } from '@/lib/store';
import { AroundIcon, PhoneFrameIcon } from '@/components/Figures';
import { Icon } from '@/components/Icon';
import { LocalVideo } from '@/components/Video';
import { Button, Card, Field, H1, H2, Muted, Notice, Screen, Steps, Txt } from '@/components/ui';

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
    <Screen footer={draft.video ? <Button title="Weiter zur Trainerwahl" icon="arrow" onPress={() => router.push('/neu/trainer')} /> : undefined}>
      <Steps at={2} />
      <H1>{stroke.name} filmen</H1>
      <Muted style={{ marginTop: 8 }}>Filme rundherum: insgesamt 15 Schläge aus drei Perspektiven. So sieht dein Coach alles, was wichtig ist.</Muted>

      <Card style={{ marginTop: 18, gap: 14 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <AroundIcon size={56} />
          <Txt style={{ flex: 1, fontFamily: F.bold, fontSize: 16.5 }}>Rundherum filmen, je 5 Schläge pro Seite</Txt>
        </View>
        {FILM_STEPS.map((s, i) => (
          <View key={s.k} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <PhoneFrameIcon view={s.k} size={64} />
            <View style={{ flex: 1 }}>
              <Txt style={{ fontFamily: F.bold }}>{i + 1}. {s.t}</Txt>
              <Txt style={{ color: C.ink2, fontSize: 14, lineHeight: 20 }}>{s.d}</Txt>
            </View>
          </View>
        ))}
      </Card>

      <View style={{ gap: 8, marginTop: 16 }}>
        {FILM_TIPS.map(t => (
          <View key={t} style={{ flexDirection: 'row', gap: 8 }}>
            <Icon n="check" size={18} color={C.ok} sw={2.2} />
            <Txt style={{ flex: 1, fontSize: 14.5, lineHeight: 21, color: C.ink2 }}>{t}</Txt>
          </View>
        ))}
      </View>

      {draft.video ? (
        <View style={{ marginTop: 22, gap: 12 }}>
          <H2>Dein Video</H2>
          <LocalVideo uri={draft.video.uri} />
          <Button title="Anderes Video wählen" kind="ghost" icon="image" onPress={() => pick(false)} busy={busy} />
          <Field label="Was soll sich dein Coach besonders anschauen? (optional)" value={draft.note || ''} onChangeText={note => setDraft(d => ({ ...d, note }))}
            placeholder="z. B. Meine Vorhand longline geht oft ins Aus." multiline maxLength={400} />
        </View>
      ) : (
        <View style={{ marginTop: 22, gap: 10 }}>
          <Button title="Jetzt filmen" icon="cam" onPress={() => pick(true)} busy={busy} />
          <Button title="Video aus der Mediathek wählen" kind="ghost" icon="image" onPress={() => pick(false)} disabled={busy} />
          <Notice icon="lock">Dein Video bleibt in der Vorschau auf deinem Handy. Später sehen es nur du und dein Coach.</Notice>
        </View>
      )}
    </Screen>
  );
}
