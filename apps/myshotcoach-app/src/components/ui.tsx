import { type ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type StyleProp, type TextInputProps, type TextProps, type TextStyle, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { C, F, R, SPACE } from '@/lib/theme';
import { initials, type Coach } from '@/lib/data';
import { Icon, type IconName } from './Icon';

export function Txt({ style, ...p }: TextProps) {
  return <Text {...p} style={[s.txt, style]} />;
}
export const H1 = ({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) => <Txt accessibilityRole="header" style={[s.h1, style]}>{children}</Txt>;
export const H2 = ({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) => <Txt accessibilityRole="header" style={[s.h2, style]}>{children}</Txt>;
export const Label = ({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) => <Txt style={[s.label, style]}>{children}</Txt>;
export const Muted = ({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) => <Txt style={[s.muted, style]}>{children}</Txt>;

// Scrollbarer Bildschirm mit Rand und Platz für die Fußleiste
export function Screen({ children, footer, dark, pad = true, top }: { children: ReactNode; footer?: ReactNode; dark?: boolean; pad?: boolean; top?: boolean }) {
  const ins = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: dark ? C.night : C.bg }}>
      <ScrollView contentContainerStyle={[{ paddingBottom: 32 }, pad && { padding: SPACE }, top && { paddingTop: ins.top + 12 }]} keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
      {footer && <View style={[s.footer, { paddingBottom: Math.max(ins.bottom, 14) }]}>{footer}</View>}
    </View>
  );
}

type BtnKind = 'primary' | 'volt' | 'ghost' | 'light';
export function Button({ title, onPress, kind = 'primary', icon, disabled, busy, style }: { title: string; onPress?: () => void; kind?: BtnKind; icon?: IconName; disabled?: boolean; busy?: boolean; style?: StyleProp<ViewStyle> }) {
  const bg = { primary: C.ink, volt: C.volt, ghost: '#fff', light: 'rgba(255,255,255,.12)' }[kind];
  const fg = { primary: '#fff', volt: C.ink, ghost: C.ink, light: '#fff' }[kind];
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled: !!disabled || !!busy }} disabled={disabled || busy} onPress={onPress}
      style={({ pressed }) => [s.btn, { backgroundColor: bg }, kind === 'ghost' && s.btnGhost, (disabled || busy) && { opacity: 0.4 }, pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] }, style]}>
      {busy ? <ActivityIndicator color={fg} /> : <>
        {icon && <Icon n={icon} size={19} color={fg} sw={2} />}
        <Txt style={[s.btnTxt, { color: fg }]}>{title}</Txt>
      </>}
    </Pressable>
  );
}

export function Card({ children, style, onPress, selected }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void; selected?: boolean }) {
  if (!onPress) return <View style={[s.card, selected && s.cardSel, style]}>{children}</View>;
  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityState={{ selected }} style={({ pressed }) => [s.card, selected && s.cardSel, pressed && { backgroundColor: C.bg2 }, style]}>
      {children}
    </Pressable>
  );
}

export function Pill({ children, tone = 'plain', style }: { children: ReactNode; tone?: 'plain' | 'dark' | 'volt' | 'ok' | 'warn' | 'err'; style?: StyleProp<ViewStyle> }) {
  const t = { plain: [C.bg2, C.ink2], dark: [C.ink, '#fff'], volt: [C.volt, C.ink], ok: [C.okBg, C.ok], warn: [C.warnBg, C.warn], err: [C.errBg, C.err] }[tone];
  return <View style={[s.pill, { backgroundColor: t[0] }, style]}><Txt style={[s.pillTxt, { color: t[1] }]}>{children}</Txt></View>;
}
export const ExampleBadge = () => <Pill tone="warn">Beispiel</Pill>;

const STAR = 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z';
export function Stars({ v, size = 14, onRate }: { v: number; size?: number; onRate?: (n: number) => void }) {
  return (
    <View style={{ flexDirection: 'row', gap: onRate ? 8 : 1 }} accessibilityLabel={`${v} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map(i => {
        const star = <Svg width={size} height={size} viewBox="0 0 24 24"><Path d={STAR} fill={v >= i - 0.25 ? C.star : C.line} /></Svg>;
        return onRate ? <Pressable key={i} onPress={() => onRate(i)} accessibilityRole="button" accessibilityLabel={`${i} Sterne`} hitSlop={6}>{star}</Pressable> : <View key={i}>{star}</View>;
      })}
    </View>
  );
}

export function Portrait({ c, size = 56, round }: { c: Pick<Coach, 'name'>; size?: number; round?: boolean }) {
  return (
    <View style={{ width: size, height: size, borderRadius: round ? size / 2 : R.md, backgroundColor: C.night2, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }} accessibilityLabel={'Platzhalter für das Foto von ' + c.name}>
      <View style={{ position: 'absolute', right: -size * 0.3, top: -size * 0.3, width: size, height: size, borderRadius: size, backgroundColor: 'rgba(200,100,59,.35)' }} />
      <Txt style={{ color: '#fff', fontFamily: F.heavy, fontSize: size * 0.34 }}>{initials(c.name)}</Txt>
    </View>
  );
}

export function Notice({ children, icon = 'info', tone = 'plain' }: { children: ReactNode; icon?: IconName; tone?: 'plain' | 'warn' | 'ok' | 'err' }) {
  const t = { plain: [C.bg2, C.ink2], warn: [C.warnBg, C.warn], ok: [C.okBg, C.ok], err: [C.errBg, C.err] }[tone];
  return (
    <View style={[s.notice, { backgroundColor: t[0] }]}>
      <Icon n={icon} size={18} color={t[1]} />
      <Txt style={{ flex: 1, color: t[1], fontSize: 14, lineHeight: 20 }}>{children}</Txt>
    </View>
  );
}

export function Field({ label, hint, style, ...p }: TextInputProps & { label: string; hint?: string }) {
  return (
    <View style={{ gap: 6 }}>
      <Txt style={s.fieldLabel}>{label}</Txt>
      <TextInput placeholderTextColor={C.ink3} {...p} style={[s.input, p.multiline && { height: 110, paddingTop: 12, textAlignVertical: 'top' }, style]} />
      {hint && <Txt style={{ fontSize: 13, color: C.ink3 }}>{hint}</Txt>}
    </View>
  );
}

export function Row({ icon, title, sub, onPress, right }: { icon?: IconName; title: string; sub?: string; onPress?: () => void; right?: ReactNode }) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} accessibilityRole={onPress ? 'button' : undefined} style={({ pressed }) => [s.row, pressed && { backgroundColor: C.bg2 }]}>
      {icon && <View style={s.rowIc}><Icon n={icon} size={19} color={C.ink} /></View>}
      <View style={{ flex: 1 }}>
        <Txt style={{ fontFamily: F.semibold, fontSize: 16 }}>{title}</Txt>
        {sub && <Txt style={{ color: C.ink3, fontSize: 13.5, marginTop: 2 }}>{sub}</Txt>}
      </View>
      {right ?? (onPress && <Icon n="chev" size={18} color={C.ink3} />)}
    </Pressable>
  );
}

// Fortschritt im Ablauf „Video einreichen“
export function Steps({ at, total = 4 }: { at: number; total?: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6, marginBottom: 18 }} accessibilityLabel={`Schritt ${at} von ${total}`}>
      {Array.from({ length: total }, (_, i) => <View key={i} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: i < at ? C.ink : C.line }} />)}
    </View>
  );
}

export const s = StyleSheet.create({
  txt: { fontFamily: F.regular, color: C.ink, fontSize: 16, lineHeight: 23 },
  h1: { fontFamily: F.heavy, fontSize: 30, lineHeight: 33, letterSpacing: -0.7 },
  h2: { fontFamily: F.heavy, fontSize: 21, lineHeight: 25, letterSpacing: -0.4 },
  label: { fontFamily: F.semibold, fontSize: 12, letterSpacing: 1.1, textTransform: 'uppercase', color: C.ink3 },
  muted: { color: C.ink2, fontSize: 15, lineHeight: 22 },
  btn: { height: 54, borderRadius: R.md, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  btnGhost: { borderWidth: 1, borderColor: C.line2 },
  btnTxt: { fontFamily: F.bold, fontSize: 16.5, letterSpacing: -0.1 },
  card: { borderWidth: 1, borderColor: C.line, borderRadius: R.lg, padding: 16, backgroundColor: '#fff' },
  cardSel: { borderColor: C.ink, borderWidth: 2, padding: 15 },
  pill: { alignSelf: 'flex-start', borderRadius: 999, paddingHorizontal: 9, paddingVertical: 3 },
  pillTxt: { fontFamily: F.semibold, fontSize: 12.5, lineHeight: 17 },
  footer: { borderTopWidth: 1, borderTopColor: C.line, backgroundColor: '#fff', paddingHorizontal: SPACE, paddingTop: 12, gap: 8 },
  notice: { flexDirection: 'row', gap: 10, padding: 14, borderRadius: R.md, alignItems: 'flex-start' },
  fieldLabel: { fontFamily: F.semibold, fontSize: 14 },
  input: { height: 50, borderWidth: 1, borderColor: C.line2, borderRadius: R.md, paddingHorizontal: 14, fontFamily: F.regular, fontSize: 16, color: C.ink, backgroundColor: '#fff' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 14, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: C.line },
  rowIc: { width: 38, height: 38, borderRadius: 10, backgroundColor: C.bg2, alignItems: 'center', justifyContent: 'center' },
});
