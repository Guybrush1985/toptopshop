import { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { C, F, R } from '@/lib/theme';
import { ACCEPT_HOURS, PAY_METHODS, coachById, fmtEUR, strokeById, tierById, type PayMethod } from '@/lib/data';
import { tierOfPick, useStore } from '@/lib/store';
import { StrokeIcon } from '@/components/Figures';
import { Icon, type IconName } from '@/components/Icon';
import { Button, Card, FlowHeader, H1, H2, Kicker, Muted, Notice, Screen, Txt } from '@/components/ui';

const PAY_ICON: Record<PayMethod, IconName> = { applepay: 'wallet', googlepay: 'wallet', paypal: 'euro', card: 'card', credit: 'wallet' };

export default function Pay() {
  const { draft, priceOf, credit, submit } = useStore();
  const price = priceOf(draft);
  const tier = tierById(tierOfPick(draft.pick));
  const coach = draft.pick?.mode === 'coach' ? coachById(draft.pick.coachId) : undefined;
  const stroke = strokeById(draft.stroke);
  // Apple Pay nur auf dem iPhone, Google Pay nur auf Android anbieten
  const methods = PAY_METHODS.filter(m => !(m.id === 'applepay' && Platform.OS === 'android') && !(m.id === 'googlepay' && Platform.OS === 'ios'));
  const [pay, setPay] = useState<PayMethod>(methods[0].id);
  const creditTooLow = pay === 'credit' && credit < price;
  const order = () => { const r = submit(pay); router.replace({ pathname: '/neu/fertig', params: { id: r.id } }); };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      <FlowHeader step={4} />
      <Screen footer={<>
        <Button title={`Kostenpflichtig anfragen · ${fmtEUR(price)}`} kind="volt" icon="lock" disabled={creditTooLow || !draft.video} onPress={order} />
        <Txt style={{ textAlign: 'center', color: C.ink3, fontSize: 12.5 }}>Vorschau: Es wird nichts abgebucht.</Txt>
      </>}>
        <H1 style={{ marginTop: 18 }}>Fast geschafft</H1>

        {/* Zusammenfassung als dunkles Ticket */}
        <View style={st.ticket}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <View style={st.ticketIc}><StrokeIcon k={stroke.icon} size={52} color="#fff" /></View>
            <View style={{ flex: 1 }}>
              <Kicker light>Video-Antwort zu</Kicker>
              <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: 22, letterSpacing: -0.4, marginTop: 2 }}>{stroke.name}</Txt>
            </View>
          </View>
          <View style={st.perf} />
          <Line k={coach ? 'Coach' : 'Level'} v={coach ? coach.name : tier.name} />
          <Line k="Antwort" v="Video vom Platz" />
          <Line k="Garantie" v={`Geld zurück nach ${ACCEPT_HOURS} Std.`} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 14 }}>
            <Txt style={{ flex: 1, color: C.onNight2, fontSize: 14 }}>Gesamt inkl. MwSt.</Txt>
            <Txt style={{ color: C.volt, fontFamily: F.black, fontSize: 34, letterSpacing: -1.2, lineHeight: 38 }}>{fmtEUR(price)}</Txt>
          </View>
        </View>

        <H2 style={{ marginTop: 30, marginBottom: 14 }}>Zahlungsart</H2>
        <View style={{ gap: 10 }}>
          {methods.map(m => {
            const on = pay === m.id;
            return (
              <Card key={m.id} selected={on} onPress={() => setPay(m.id)} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 16 }}>
                <View style={[st.payIc, on && { backgroundColor: C.ink }]}><Icon n={PAY_ICON[m.id]} size={19} color={on ? C.volt : C.ink} /></View>
                <Txt style={{ flex: 1, fontFamily: F.bold, fontSize: 16 }}>{m.name}</Txt>
                {m.id === 'credit' && <Txt style={{ color: C.ink3, fontSize: 14 }}>{`${fmtEUR(credit)} verfügbar`}</Txt>}
              </Card>
            );
          })}
        </View>
        {creditTooLow && <View style={{ marginTop: 12 }}><Notice tone="warn" icon="wallet">Dein Guthaben reicht nicht. Du kannst es unter „Konto“ aufladen.</Notice></View>}

        <View style={{ marginTop: 22, gap: 12 }}>
          <Notice icon="shield" tone="ok">{`Der Betrag wird nur reserviert. Abgebucht wird erst, wenn ein Coach annimmt. Nimmt innerhalb von ${ACCEPT_HOURS} Stunden niemand an, wird die Reservierung aufgehoben.`}</Notice>
          <Muted style={{ fontSize: 12.5, lineHeight: 18 }}>Mit der Anfrage akzeptierst du die AGB und die Datenschutzerklärung von tennistrainer.app (TanMeOn GmbH).</Muted>
        </View>
      </Screen>
    </View>
  );
}

const Line = ({ k, v }: { k: string; v: string }) => (
  <View style={{ flexDirection: 'row', gap: 10, paddingVertical: 6 }}>
    <Txt style={{ color: C.onNight3, width: 90, fontSize: 14.5 }}>{k}</Txt>
    <Txt style={{ flex: 1, color: '#fff', fontFamily: F.semibold, textAlign: 'right', fontSize: 14.5 }}>{v}</Txt>
  </View>
);

const st = StyleSheet.create({
  ticket: { backgroundColor: C.ink, borderRadius: R.xl, padding: 20, marginTop: 20 },
  ticketIc: { width: 64, height: 64, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center' },
  perf: { borderTopWidth: 1.5, borderColor: 'rgba(255,255,255,0.18)', borderStyle: 'dashed', marginVertical: 16 },
  payIc: { width: 40, height: 40, borderRadius: 12, backgroundColor: C.bg2, alignItems: 'center', justifyContent: 'center' },
});
