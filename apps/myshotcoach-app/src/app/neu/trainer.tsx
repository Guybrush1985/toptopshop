import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { C, F, R } from '@/lib/theme';
import { COACHES, TIERS, coachById, fmtEUR, tierById, type TierId } from '@/lib/data';
import { useStore } from '@/lib/store';
import { CoachCard } from '@/components/CoachCard';
import { TierFilter } from '@/components/Shared';
import { Button, Card, FlowHeader, H1, Kicker, Muted, Screen, Tap, Txt } from '@/components/ui';

export default function ChooseCoach() {
  const { draft, setDraft } = useStore();
  const [mode, setMode] = useState<'tier' | 'coach'>(draft.pick?.mode || 'tier');
  const [filter, setFilter] = useState<TierId | 'all'>('all');
  const pick = draft.pick;
  const list = COACHES.filter(c => filter === 'all' || c.tier === filter);
  const chosen = !pick ? null : pick.mode === 'tier' ? { n: tierById(pick.tier).name, p: tierById(pick.tier).price } : { n: coachById(pick.coachId)?.name || '', p: tierById(coachById(pick.coachId)?.tier).price };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader step={3} />
      <Screen footer={<>
        {chosen && (
          <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 2 }}>
            <Txt style={{ flex: 1, color: C.ink2, fontSize: 14 }} numberOfLines={1}>{chosen.n}</Txt>
            <Txt style={{ fontFamily: F.black, fontSize: 20, letterSpacing: -0.5 }}>{fmtEUR(chosen.p)}</Txt>
          </View>
        )}
        <Button title="Weiter zum Bezahlen" iconRight="arrow" disabled={!pick} onPress={() => router.push('/neu/bezahlen')} />
      </>}>
        <H1 style={{ marginTop: 18 }}>Wer schaut sich dein Video an?</H1>

        <View style={st.seg}>
          {(['tier', 'coach'] as const).map(m => (
            <Tap key={m} role="tab" selected={mode === m} onPress={() => setMode(m)} style={[st.segBtn, mode === m && st.segOn]}>
              <Txt style={[st.segTxt, mode === m && { color: C.ink }]}>{m === 'tier' ? 'Nach Level' : 'Coach auswählen'}</Txt>
            </Tap>
          ))}
        </View>

        {mode === 'tier' ? (
          <View style={{ gap: 12 }}>
            <Muted>Die erste passende Trainer:in, die frei ist, übernimmt deine Anfrage.</Muted>
            {TIERS.filter(t => !t.pro).map(t => {
              const on = pick?.mode === 'tier' && pick.tier === t.id;
              return (
                <Card key={t.id} selected={on} onPress={() => setDraft(d => ({ ...d, pick: { mode: 'tier', tier: t.id } }))} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                  <View style={[st.level, on && { backgroundColor: C.ink }]}><Txt style={[st.levelTxt, on && { color: C.volt }]}>{t.id}</Txt></View>
                  <View style={{ flex: 1 }}>
                    <Txt style={{ fontFamily: F.heavy, fontSize: 17, letterSpacing: -0.2 }}>{t.name}</Txt>
                    <Txt style={{ color: C.ink3, fontSize: 13.5, marginTop: 2 }}>{t.ex}</Txt>
                  </View>
                  <Txt style={{ fontFamily: F.black, fontSize: 22, letterSpacing: -0.6 }}>{fmtEUR(t.price)}</Txt>
                </Card>
              );
            })}
            <Tap onPress={() => { setMode('coach'); setFilter('P'); }} style={st.proHint}>
              <Kicker light style={{ color: C.volt }}>Premium</Kicker>
              <Txt style={{ color: '#fff', fontFamily: F.bold, fontSize: 15.5, marginTop: 4 }}>Lieber ein Ex-Profi? Direkt auswählen →</Txt>
            </Tap>
          </View>
        ) : (
          <View style={{ gap: 12 }}>
            <TierFilter value={filter} onChange={setFilter} bleed />
            {list.map(c => (
              <View key={c.id}>
                <CoachCard c={c} selected={pick?.mode === 'coach' && pick.coachId === c.id} onPress={() => setDraft(d => ({ ...d, pick: { mode: 'coach', coachId: c.id } }))} />
                <Tap onPress={() => router.push(`/trainer/${c.id}`)} style={{ alignSelf: 'flex-end', paddingVertical: 8, paddingHorizontal: 4 }}>
                  <Txt style={{ fontSize: 13.5, fontFamily: F.semibold, color: C.ink2 }}>Profil ansehen →</Txt>
                </Tap>
              </View>
            ))}
          </View>
        )}
      </Screen>
    </View>
  );
}

const st = StyleSheet.create({
  seg: { flexDirection: 'row', backgroundColor: C.bg2, borderRadius: R.pill, padding: 4, marginVertical: 20 },
  segBtn: { flex: 1, height: 44, borderRadius: R.pill, alignItems: 'center', justifyContent: 'center' },
  segOn: { backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  segTxt: { fontFamily: F.semibold, color: C.ink2, fontSize: 15 },
  level: { width: 48, height: 48, borderRadius: 14, backgroundColor: C.bg2, alignItems: 'center', justifyContent: 'center' },
  levelTxt: { fontFamily: F.black, fontSize: 22, color: C.ink },
  proHint: { backgroundColor: C.ink, borderRadius: R.lg, padding: 18, marginTop: 4 },
});
