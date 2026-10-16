import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, F, SHADOW, SPACE } from '@/lib/theme';
import { ACCEPT_HOURS } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useStatusBar } from '@/lib/useStatusBar';
import { Icon } from '@/components/Icon';
import { Button, Kicker, Muted, Txt } from '@/components/ui';

export default function Done() {
  useStatusBar('light');
  const ins = useSafeAreaInsets();
  const { resetDraft } = useStore();
  const pop = useRef(new Animated.Value(0)).current;
  useEffect(() => { Animated.spring(pop, { toValue: 1, useNativeDriver: true, speed: 8, bounciness: 12 }).start(); }, [pop]);
  const go = () => { resetDraft(); router.dismissAll(); router.replace('/anfragen'); };
  return (
    <LinearGradient colors={[C.night3, C.night]} style={{ flex: 1, padding: SPACE, paddingTop: ins.top + 80, paddingBottom: ins.bottom + 20 }}>
      <View style={{ flex: 1, alignItems: 'center', gap: 16 }}>
        <Animated.View style={[st.ring, SHADOW.volt, { transform: [{ scale: pop }] }]}>
          <Icon n="check" size={50} color={C.ink} sw={2.8} />
        </Animated.View>
        <Kicker light style={{ color: C.volt, marginTop: 12 }}>Anfrage gesendet</Kicker>
        <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 34, textAlign: 'center', letterSpacing: -1, lineHeight: 37 }}>Dein Video ist{'\n'}unterwegs</Txt>
        <Muted light style={{ textAlign: 'center', paddingHorizontal: 8 }}>{`Sobald ein Coach annimmt, sagen wir dir Bescheid. Die Video-Antwort findest du unter „Videos“. Nimmt innerhalb von ${ACCEPT_HOURS} Stunden niemand an, zahlst du nichts.`}</Muted>
      </View>
      <Button title="Zu meinen Videos" kind="volt" iconRight="arrow" onPress={go} />
    </LinearGradient>
  );
}

const st = StyleSheet.create({
  ring: { width: 108, height: 108, borderRadius: 54, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center' },
});
