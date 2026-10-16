import { View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, F, SPACE } from '@/lib/theme';
import { ACCEPT_HOURS } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Icon } from '@/components/Icon';
import { Button, Muted, Txt } from '@/components/ui';

export default function Done() {
  const ins = useSafeAreaInsets();
  const { resetDraft } = useStore();
  const go = () => { resetDraft(); router.dismissAll(); router.replace('/anfragen'); };
  return (
    <View style={{ flex: 1, backgroundColor: C.bg, padding: SPACE, paddingTop: ins.top + 60, paddingBottom: ins.bottom + 20 }}>
      <View style={{ flex: 1, alignItems: 'center', gap: 14 }}>
        <View style={{ width: 84, height: 84, borderRadius: 42, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' }}>
          <Icon n="check" size={42} color={C.ink} sw={2.6} />
        </View>
        <Txt style={{ fontFamily: F.heavy, fontSize: 28, textAlign: 'center', letterSpacing: -0.6, lineHeight: 32 }}>Deine Anfrage ist raus</Txt>
        <Muted style={{ textAlign: 'center' }}>{`Sobald ein Coach sie annimmt, sagen wir dir Bescheid. Die Video-Antwort findest du unter „Meine Videos“. Nimmt innerhalb von ${ACCEPT_HOURS} Stunden niemand an, bekommst du dein Geld zurück.`}</Muted>
      </View>
      <Button title="Zu meinen Videos" onPress={go} />
    </View>
  );
}
