import { useState } from 'react';
import { Platform, View } from 'react-native';
import { router } from 'expo-router';
import { C, F } from '@/lib/theme';
import { ACCEPT_HOURS, PAY_METHODS, coachById, fmtEUR, strokeById, tierById, type PayMethod } from '@/lib/data';
import { tierOfPick, useStore } from '@/lib/store';
import { Icon, type IconName } from '@/components/Icon';
import { Button, Card, H1, H2, Muted, Notice, Screen, Steps, Txt } from '@/components/ui';

const PAY_ICON: Record<PayMethod, IconName> = { applepay: 'wallet', googlepay: 'wallet', paypal: 'euro', card: 'card', credit: 'wallet' };

export default function Pay() {
  const { draft, priceOf, credit, submit } = useStore();
  const price = priceOf(draft);
  const tier = tierById(tierOfPick(draft.pick));
  const coach = draft.pick?.mode === 'coach' ? coachById(draft.pick.coachId) : undefined;
  // Apple Pay nur auf dem iPhone, Google Pay nur auf Android anbieten
  const methods = PAY_METHODS.filter(m => !(m.id === 'applepay' && Platform.OS === 'android') && !(m.id === 'googlepay' && Platform.OS === 'ios'));
  const [pay, setPay] = useState<PayMethod>(methods[0].id);
  const creditTooLow = pay === 'credit' && credit < price;

  const order = () => {
    const r = submit(pay);
    router.replace({ pathname: '/neu/fertig', params: { id: r.id } });
  };

  return (
    <Screen footer={<>
      <Button title={`Kostenpflichtig anfragen · ${fmtEUR(price)}`} icon="lock" disabled={creditTooLow || !draft.video} onPress={order} />
      <Txt style={{ textAlign: 'center', color: C.ink3, fontSize: 12.5 }}>Vorschau: Es wird nichts abgebucht.</Txt>
    </>}>
      <Steps at={4} />
      <H1>Zusammenfassung</H1>
      <Card style={{ marginTop: 16, gap: 10 }}>
        <Line k="Schlag" v={strokeById(draft.stroke).name} />
        <Line k={coach ? 'Trainer:in' : 'Level'} v={coach ? coach.name : tier.name} />
        <Line k="Antwort" v="Video" />
        <View style={{ height: 1, backgroundColor: C.line }} />
        <View style={{ flexDirection: 'row' }}>
          <Txt style={{ flex: 1, fontFamily: F.bold, fontSize: 17 }}>Gesamt</Txt>
          <Txt style={{ fontFamily: F.heavy, fontSize: 19 }}>{fmtEUR(price)}</Txt>
        </View>
        <Txt style={{ color: C.ink3, fontSize: 12.5 }}>inkl. MwSt.</Txt>
      </Card>

      <H2 style={{ marginTop: 26, marginBottom: 12 }}>Zahlungsart</H2>
      <View style={{ gap: 10 }}>
        {methods.map(m => {
          const on = pay === m.id;
          return (
            <Card key={m.id} selected={on} onPress={() => setPay(m.id)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Icon n={PAY_ICON[m.id]} size={21} color={C.ink} />
              <Txt style={{ flex: 1, fontFamily: F.semibold }}>{m.name}</Txt>
              {m.id === 'credit' && <Txt style={{ color: C.ink3, fontSize: 14 }}>{fmtEUR(credit)} verfügbar</Txt>}
            </Card>
          );
        })}
      </View>
      {creditTooLow && <View style={{ marginTop: 10 }}><Notice tone="warn" icon="wallet">Dein Guthaben reicht nicht. Du kannst es unter „Konto“ aufladen.</Notice></View>}

      <View style={{ marginTop: 20, gap: 10 }}>
        <Notice icon="shield" tone="ok">{`Der Betrag wird zunächst nur reserviert. Abgebucht wird erst, wenn ein Coach deine Anfrage annimmt. Nimmt innerhalb von ${ACCEPT_HOURS} Stunden niemand an, wird die Reservierung aufgehoben.`}</Notice>
        <Muted style={{ fontSize: 13 }}>Mit der Anfrage akzeptierst du die AGB und die Datenschutzerklärung von MyShotCoach (TanMeOn GmbH).</Muted>
      </View>
    </Screen>
  );
}

const Line = ({ k, v }: { k: string; v: string }) => (
  <View style={{ flexDirection: 'row', gap: 10 }}>
    <Txt style={{ color: C.ink2, width: 100 }}>{k}</Txt>
    <Txt style={{ flex: 1, fontFamily: F.semibold, textAlign: 'right' }}>{v}</Txt>
  </View>
);
