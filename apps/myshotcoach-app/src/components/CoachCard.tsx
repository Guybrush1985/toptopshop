import { View } from 'react-native';
import { C, F } from '@/lib/theme';
import { fmtEUR, fmtNum, tierById, type Coach } from '@/lib/data';
import { Icon } from './Icon';
import { Card, ExampleBadge, Pill, Portrait, Stars, Txt } from './ui';

export function CoachCard({ c, onPress, selected, showPrice = true }: { c: Coach; onPress?: () => void; selected?: boolean; showPrice?: boolean }) {
  const t = tierById(c.tier);
  return (
    <Card onPress={onPress} selected={selected} style={{ flexDirection: 'row', gap: 14, padding: 14 }}>
      <Portrait c={c} size={84} radius={16} />
      <View style={{ flex: 1, gap: 4, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
          <Pill tone={t.pro ? 'dark' : 'plain'}>{t.short}</Pill>
          {c.example && <ExampleBadge />}
        </View>
        <Txt style={{ fontFamily: F.heavy, fontSize: 17.5, letterSpacing: -0.3 }} numberOfLines={1}>{c.name}</Txt>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Icon n="pin" size={13} color={C.ink3} />
          <Txt style={{ fontSize: 13.5, color: C.ink2, flex: 1 }} numberOfLines={1}>{c.club}, {c.city}</Txt>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Stars v={c.rating} size={13} />
          <Txt style={{ fontSize: 13.5, fontFamily: F.semibold }}>{fmtNum(c.rating)}</Txt>
          <Txt style={{ fontSize: 13.5, color: C.ink3 }}>({c.reviews})</Txt>
          {showPrice && <Txt style={{ marginLeft: 'auto', fontFamily: F.black, fontSize: 18, letterSpacing: -0.5 }}>{fmtEUR(t.price)}</Txt>}
        </View>
      </View>
    </Card>
  );
}
