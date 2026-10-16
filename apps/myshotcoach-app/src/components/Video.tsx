import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { C, F, R } from '@/lib/theme';
import { CourtHero } from './Figures';
import { Icon } from './Icon';
import { Portrait, Txt } from './ui';

// Eigenes Video abspielen (liegt nur auf dem Gerät)
export function LocalVideo({ uri, height = 220 }: { uri: string; height?: number }) {
  const player = useVideoPlayer(uri, p => { p.loop = false; });
  return (
    <View style={[st.frame, { height }]}>
      <VideoView player={player} style={{ width: '100%', height: '100%' }} nativeControls contentFit="contain" />
    </View>
  );
}

// Platzhalter für die Video-Antwort eines Coaches in der Vorschau (kein echtes Video)
export function AnswerPlaceholder({ coachName, label, onPress }: { coachName?: string; label?: string; onPress?: () => void }) {
  const { width } = useWindowDimensions();
  const w = Math.min(width - 40, 560);
  return (
    <Pressable onPress={onPress} disabled={!onPress} style={[st.frame, { height: w * 9 / 16 }]} accessibilityRole={onPress ? 'button' : undefined} accessibilityLabel="Video-Antwort abspielen">
      <CourtHero width={w} />
      <View style={st.play}><Icon n="play" size={26} color={C.ink} fill={C.ink} sw={0} /></View>
      {label && <View style={st.tag}><Txt style={st.tagTxt}>{label}</Txt></View>}
      {coachName && (
        <View style={st.pip}>
          <Portrait c={{ name: coachName }} size={34} round />
          <Txt style={{ color: '#fff', fontFamily: F.semibold, fontSize: 13 }}>{coachName}</Txt>
        </View>
      )}
    </Pressable>
  );
}

const st = StyleSheet.create({
  frame: { width: '100%', borderRadius: R.lg, overflow: 'hidden', backgroundColor: C.night, alignItems: 'center', justifyContent: 'center' },
  play: { position: 'absolute', width: 62, height: 62, borderRadius: 31, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center', paddingLeft: 4 },
  tag: { position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(11,15,20,.8)', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  tagTxt: { color: '#fff', fontFamily: F.semibold, fontSize: 12 },
  pip: { position: 'absolute', bottom: 10, left: 10, flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(11,15,20,.7)', borderRadius: 999, paddingRight: 12, padding: 3 },
});
