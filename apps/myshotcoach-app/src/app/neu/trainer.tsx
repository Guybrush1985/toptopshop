import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { C, F, R } from '@/lib/theme';
import { COACHES, TIERS, coachById, fmtEUR, tierById, type TierId } from '@/lib/data';
import { useStore } from '@/lib/store';
import { CoachCard } from '@/components/CoachCard';
import { Icon } from '@/components/Icon';
import { Button, Card, H1, Muted, Screen, Steps, Txt } from '@/components/ui';
import { TierFilter } from '@/components/Shared';

export default function ChooseCoach() {
  const { draft, setDraft } = useStore();
  const [mode, setMode] = useState<'tier' | 'coach'>(draft.pick?.mode || 'tier');
  const [filter, setFilter] = useState<TierId | 'all'>('all');
  const pick = draft.pick;
  const list = COACHES.filter(c => filter === 'all' || c.tier === filter);
  const summary = !pick ? '' : pick.mode === 'tier' ? `${tierById(pick.tier).name} · ${fmtEUR(tierById(pick.tier).price)}` : `${coachById(pick.coachId)?.name} · ${fmtEUR(tierById(coachById(pick.coachId)?.tier).price)}`;

  return (
    <Screen footer={<>
      {pick && <Txt style={{ textAlign: 'center', color: C.ink2, fontSize: 14 }}>{summary}</Txt>}
      <Button title="Weiter zum Bezahlen" icon="arrow" disabled={!pick} onPress={() => router.push('/neu/bezahlen')} />
    </>}>
      <Steps at={3} />
      <H1>Wer soll sich dein Video anschauen?</H1>

      <View style={st.seg}>
        {(['tier', 'coach'] as const).map(m => (
          <Pressable key={m} onPress={() => setMode(m)} style={[st.segBtn, mode === m && st.segOn]} accessibilityRole="tab" accessibilityState={{ selected: mode === m }}>
            <Txt style={[st.segTxt, mode === m && { color: C.ink }]}>{m === 'tier' ? 'Nach Level' : 'Selbst auswählen'}</Txt>
          </Pressable>
        ))}
      </View>

      {mode === 'tier' ? (
        <View style={{ gap: 10 }}>
          <Muted>Die erste passende Trainer:in, die frei ist, übernimmt deine Anfrage.</Muted>
          {TIERS.filter(t => !t.pro).map(t => {
            const on = pick?.mode === 'tier' && pick.tier === t.id;
            return (
              <Card key={t.id} selected={on} onPress={() => setDraft(d => ({ ...d, pick: { mode: 'tier', tier: t.id } }))} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <View style={[st.radio, on && st.radioOn]}>{on && <Icon n="check" size={14} color="#fff" sw={3} />}</View>
                <View style={{ flex: 1 }}>
                  <Txt style={{ fontFamily: F.bold, fontSize: 16.5 }}>{t.name}</Txt>
                  <Txt style={{ color: C.ink3, fontSize: 13.5 }}>{t.ex}</Txt>
                </View>
                <Txt style={{ fontFamily: F.heavy, fontSize: 18 }}>{fmtEUR(t.price)}</Txt>
              </Card>
            );
          })}
          <Muted style={{ fontSize: 13.5 }}>Ex-Profis kannst du unter „Selbst auswählen“ direkt buchen.</Muted>
        </View>
      ) : (
        <View style={{ gap: 12 }}>
          <TierFilter value={filter} onChange={setFilter} />
          {list.map(c => (
            <View key={c.id} style={{ gap: 6 }}>
              <CoachCard c={c} selected={pick?.mode === 'coach' && pick.coachId === c.id} onPress={() => setDraft(d => ({ ...d, pick: { mode: 'coach', coachId: c.id } }))} />
              <Pressable onPress={() => router.push(`/trainer/${c.id}`)} hitSlop={6} style={{ alignSelf: 'flex-end' }}>
                <Txt style={{ fontSize: 13.5, fontFamily: F.semibold, textDecorationLine: 'underline' }}>Profil ansehen</Txt>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </Screen>
  );
}

const st = StyleSheet.create({
  seg: { flexDirection: 'row', backgroundColor: C.bg2, borderRadius: R.md, padding: 4, marginVertical: 18 },
  segBtn: { flex: 1, paddingVertical: 10, borderRadius: R.sm, alignItems: 'center' },
  segOn: { backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, elevation: 1 },
  segTxt: { fontFamily: F.semibold, color: C.ink2, fontSize: 15 },
  radio: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: C.line2, alignItems: 'center', justifyContent: 'center' },
  radioOn: { backgroundColor: C.ink, borderColor: C.ink },
});
