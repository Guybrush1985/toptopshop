import { useRef, type ReactNode } from 'react';
import { ActivityIndicator, Animated, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type StyleProp, type TextInputProps, type TextProps, type TextStyle, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { C, F, R, SHADOW, SPACE } from '@/lib/theme';
import { initials, type Coach } from '@/lib/data';
import { Icon, type IconName } from './Icon';

export const tick = () => { if (Platform.OS !== 'web') Haptics.selectionAsync().catch(() => {}); };

/* ---------- Text ---------- */
export function Txt({ style, ...p }: TextProps) { return <Text {...p} style={[s.txt, style]} />; }
type T = { children: ReactNode; style?: StyleProp<TextStyle>; light?: boolean; numberOfLines?: number };
export const Display = ({ children, style, light }: T) => <Txt accessibilityRole="header" style={[s.display, light && { color: '#fff' }, style]}>{children}</Txt>;
export const H1 = ({ children, style, light }: T) => <Txt accessibilityRole="header" style={[s.h1, light && { color: '#fff' }, style]}>{children}</Txt>;
export const H2 = ({ children, style, light }: T) => <Txt accessibilityRole="header" style={[s.h2, light && { color: '#fff' }, style]}>{children}</Txt>;
export const Kicker = ({ children, style, light }: T) => <Txt style={[s.kicker, light && { color: C.onNight3 }, style]}>{children}</Txt>;
export const Label = Kicker;
export const Muted = ({ children, style, light, numberOfLines }: T) => <Txt numberOfLines={numberOfLines} style={[s.muted, light && { color: C.onNight2 }, style]}>{children}</Txt>;

/* ---------- Druck-Feedback: leicht skalieren ---------- */
export function Tap({ children, onPress, style, disabled, label, role = 'button', selected, haptic = true }: {
  children: ReactNode; onPress?: () => void; style?: StyleProp<ViewStyle>; disabled?: boolean; label?: string; role?: 'button' | 'radio' | 'tab' | 'checkbox'; selected?: boolean; haptic?: boolean;
}) {
  const v = useRef(new Animated.Value(1)).current;
  const to = (x: number) => Animated.spring(v, { toValue: x, useNativeDriver: Platform.OS !== 'web', speed: 40, bounciness: 6 }).start();
  // Layout-Angaben, die das Elternelement auswertet, gehören an den äußeren Pressable
  const f = StyleSheet.flatten(style) || {};
  const outer = { flex: f.flex, alignSelf: f.alignSelf, flexGrow: f.flexGrow, flexShrink: f.flexShrink };
  return (
    <Pressable style={outer} onPress={() => { if (haptic) tick(); onPress?.(); }} disabled={disabled} onPressIn={() => to(0.97)} onPressOut={() => to(1)}
      accessibilityRole={role} accessibilityLabel={label} accessibilityState={{ disabled: !!disabled, selected, checked: role === 'radio' || role === 'checkbox' ? !!selected : undefined }}>
      <Animated.View style={[style, { transform: [{ scale: v }] }]}>{children}</Animated.View>
    </Pressable>
  );
}

/* ---------- Layout ---------- */
// Heller Bildschirm mit optionaler Fußleiste (Haupt-Button bleibt immer sichtbar)
export function Screen({ children, footer, pad = true, top, bg = C.bg, bottomSpace = 32 }: { children: ReactNode; footer?: ReactNode; pad?: boolean; top?: boolean; bg?: string; bottomSpace?: number }) {
  const ins = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      <ScrollView contentContainerStyle={[{ paddingBottom: bottomSpace }, pad && { paddingHorizontal: SPACE }, top && { paddingTop: ins.top + 16 }]} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      {footer && <BottomBar>{footer}</BottomBar>}
    </View>
  );
}

export function BottomBar({ children }: { children: ReactNode }) {
  const ins = useSafeAreaInsets();
  return (
    <View style={[s.footer, { paddingBottom: Math.max(ins.bottom, 16) }]}>
      {Platform.OS === 'ios' ? <BlurView intensity={60} tint="light" style={StyleSheet.absoluteFill} /> : <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255,255,255,0.96)' }]} />}
      {children}
    </View>
  );
}

// Kopfzeile im Ablauf „Video einreichen“: runder Zurück-Knopf, Schrittanzeige, Fortschrittsbalken
export function FlowHeader({ step, total = 4, title, onClose }: { step?: number; total?: number; title?: string; onClose?: () => void }) {
  const ins = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: ins.top + 8, paddingHorizontal: SPACE, paddingBottom: 6, backgroundColor: C.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, height: 44 }}>
        <RoundBtn icon="back" label="Zurück" onPress={() => router.canGoBack() ? router.back() : router.replace('/')} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          {step ? <Kicker style={{ color: C.ink2 }}>{`Schritt ${step} von ${total}`}</Kicker> : title ? <Txt style={{ fontFamily: F.bold, fontSize: 16 }}>{title}</Txt> : null}
        </View>
        {onClose ? <RoundBtn icon="close" label="Abbrechen" onPress={onClose} /> : <View style={{ width: 44 }} />}
      </View>
      {step && (
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 12 }}>
          {Array.from({ length: total }, (_, i) => <View key={i} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: i < step ? C.ink : C.bg3 }} />)}
        </View>
      )}
    </View>
  );
}

export function RoundBtn({ icon, onPress, label, dark, size = 44 }: { icon: IconName; onPress: () => void; label: string; dark?: boolean; size?: number }) {
  return (
    <Tap onPress={onPress} label={label} style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: dark ? 'rgba(255,255,255,0.14)' : C.bg2, alignItems: 'center', justifyContent: 'center' }}>
      <Icon n={icon} size={20} color={dark ? '#fff' : C.ink} sw={2.1} />
    </Tap>
  );
}

/* ---------- Buttons ---------- */
type BtnKind = 'volt' | 'ink' | 'ghost' | 'glass' | 'white';
export function Button({ title, onPress, kind = 'ink', icon, iconRight, disabled, busy, style, small }: { title: string; onPress?: () => void; kind?: BtnKind; icon?: IconName; iconRight?: IconName; disabled?: boolean; busy?: boolean; style?: StyleProp<ViewStyle>; small?: boolean }) {
  const bg = { volt: C.volt, ink: C.ink, ghost: 'transparent', glass: 'rgba(255,255,255,0.12)', white: '#fff' }[kind];
  const fg = { volt: C.ink, ink: '#fff', ghost: C.ink, glass: '#fff', white: C.ink }[kind];
  return (
    <Tap onPress={onPress} disabled={disabled || busy} label={title}
      style={[s.btn, small && { height: 46, paddingHorizontal: 16 }, { backgroundColor: bg }, kind === 'ghost' && { borderWidth: 1.5, borderColor: C.line2 }, kind === 'glass' && { borderWidth: 1, borderColor: 'rgba(255,255,255,0.22)' },
        kind === 'volt' && !disabled && SHADOW.volt, (disabled || busy) && { opacity: 0.35 }, style]}>
      {busy ? <ActivityIndicator color={fg} /> : <>
        {icon && <Icon n={icon} size={20} color={fg} sw={2.1} />}
        <Txt style={[s.btnTxt, small && { fontSize: 15 }, { color: fg }]} numberOfLines={1}>{title}</Txt>
        {iconRight && <Icon n={iconRight} size={20} color={fg} sw={2.1} />}
      </>}
    </Tap>
  );
}

/* ---------- Flächen ---------- */
export function Card({ children, style, onPress, selected, dark, flat }: { children: ReactNode; style?: StyleProp<ViewStyle>; onPress?: () => void; selected?: boolean; dark?: boolean; flat?: boolean }) {
  const base = [s.card, !flat && !dark && SHADOW.sm, dark && s.cardDark, selected && (dark ? s.cardSelDark : s.cardSel), style];
  const badge = selected && <View style={s.selBadge}><Icon n="check" size={13} color={C.ink} sw={3.2} /></View>;
  if (!onPress) return <View style={base}>{children}{badge}</View>;
  return <Tap onPress={onPress} selected={selected} style={base}>{children}{badge}</Tap>;
}

export function Chip({ title, on, onPress, dark }: { title: string; on?: boolean; onPress?: () => void; dark?: boolean }) {
  return (
    <Tap onPress={onPress} selected={on} style={[s.chip, dark && { borderColor: C.nightLine }, on && (dark ? { backgroundColor: C.volt, borderColor: C.volt } : { backgroundColor: C.ink, borderColor: C.ink })]}>
      <Txt style={[s.chipTxt, dark && { color: '#fff' }, on && { color: dark ? C.ink : '#fff' }]}>{title}</Txt>
    </Tap>
  );
}

export function Pill({ children, tone = 'plain', style }: { children: ReactNode; tone?: 'plain' | 'dark' | 'volt' | 'ok' | 'warn' | 'err' | 'glass'; style?: StyleProp<ViewStyle> }) {
  const t = { plain: [C.bg2, C.ink2], dark: [C.ink, '#fff'], volt: [C.volt, C.ink], ok: [C.okBg, C.ok], warn: [C.warnBg, C.warn], err: [C.errBg, C.err], glass: ['rgba(255,255,255,0.14)', '#fff'] }[tone];
  return <View style={[s.pill, { backgroundColor: t[0] }, style]}><Txt style={[s.pillTxt, { color: t[1] }]}>{children}</Txt></View>;
}
export const ExampleBadge = ({ dark }: { dark?: boolean }) => <Pill tone={dark ? 'glass' : 'warn'}>Beispiel</Pill>;

const STAR = 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z';
export function Stars({ v, size = 14, onRate, empty = C.line }: { v: number; size?: number; onRate?: (n: number) => void; empty?: string }) {
  return (
    <View style={{ flexDirection: 'row', gap: onRate ? 10 : 1 }} accessibilityLabel={`${v} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map(i => {
        const star = <Svg width={size} height={size} viewBox="0 0 24 24"><Path d={STAR} fill={v >= i - 0.25 ? C.star : empty} /></Svg>;
        return onRate ? <Tap key={i} onPress={() => onRate(i)} label={`${i} Sterne`}>{star}</Tap> : <View key={i}>{star}</View>;
      })}
    </View>
  );
}

// Platzhalter fürs Profilfoto: ruhiger Verlauf mit Initialen (bis echte Fotos da sind)
const HUES: [string, string][] = [['#2B3A4F', '#0B0F14'], ['#4A3424', '#0B0F14'], ['#24423A', '#0B0F14'], ['#3E2A44', '#0B0F14'], ['#43402A', '#0B0F14']];
export function Portrait({ c, size = 56, round, radius }: { c: Pick<Coach, 'name'>; size?: number; round?: boolean; radius?: number }) {
  const h = HUES[(c.name.charCodeAt(0) + c.name.length) % HUES.length];
  return (
    <LinearGradient colors={h} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} accessibilityLabel={'Platzhalter für das Foto von ' + c.name}
      style={{ width: size, height: size, borderRadius: round ? size / 2 : radius ?? R.md, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <Txt style={{ color: 'rgba(255,255,255,0.92)', fontFamily: F.heavy, fontSize: size * 0.32, letterSpacing: -0.5 }}>{initials(c.name)}</Txt>
    </LinearGradient>
  );
}

export function Notice({ children, icon = 'info', tone = 'plain' }: { children: ReactNode; icon?: IconName; tone?: 'plain' | 'warn' | 'ok' | 'err' | 'dark' }) {
  const t = { plain: [C.bg2, C.ink2], warn: [C.warnBg, C.warn], ok: [C.okBg, C.ok], err: [C.errBg, C.err], dark: [C.night2, C.onNight2] }[tone];
  return (
    <View style={[s.notice, { backgroundColor: t[0] }]}>
      <Icon n={icon} size={18} color={t[1]} />
      <Txt style={{ flex: 1, color: t[1], fontSize: 14, lineHeight: 20 }}>{children}</Txt>
    </View>
  );
}

export function Field({ label, hint, style, ...p }: TextInputProps & { label: string; hint?: string }) {
  return (
    <View style={{ gap: 7 }}>
      <Txt style={s.fieldLabel}>{label}</Txt>
      <TextInput placeholderTextColor={C.ink3} {...p} style={[s.input, p.multiline && { height: 116, paddingTop: 14, textAlignVertical: 'top' }, style]} />
      {hint && <Txt style={{ fontSize: 13, color: C.ink3 }}>{hint}</Txt>}
    </View>
  );
}

export function Row({ icon, title, sub, onPress, right, dark, last }: { icon?: IconName; title: string; sub?: string; onPress?: () => void; right?: ReactNode; dark?: boolean; last?: boolean }) {
  const inner = (
    <View style={[s.row, last && { borderBottomWidth: 0 }, dark && { borderBottomColor: C.nightLine }]}>
      {icon && <View style={[s.rowIc, dark && { backgroundColor: 'rgba(255,255,255,0.08)' }]}><Icon n={icon} size={19} color={dark ? '#fff' : C.ink} /></View>}
      <View style={{ flex: 1 }}>
        <Txt style={{ fontFamily: F.semibold, fontSize: 16, color: dark ? '#fff' : C.ink }}>{title}</Txt>
        {sub && <Txt style={{ color: dark ? C.onNight3 : C.ink3, fontSize: 13.5, marginTop: 1 }}>{sub}</Txt>}
      </View>
      {right ?? (onPress && <Icon n="chev" size={18} color={dark ? C.onNight3 : C.ink3} />)}
    </View>
  );
  return onPress ? <Tap onPress={onPress} label={title}>{inner}</Tap> : inner;
}

export function Group({ children, dark, style }: { children: ReactNode; dark?: boolean; style?: StyleProp<ViewStyle> }) {
  return <View style={[{ borderRadius: R.lg, paddingHorizontal: 16, backgroundColor: dark ? C.night2 : C.bg2 }, style]}>{children}</View>;
}

export function Section({ kicker, title, action, onAction, children, dark, style }: { kicker?: string; title: string; action?: string; onAction?: () => void; children: ReactNode; dark?: boolean; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[{ marginTop: 36 }, style]}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: SPACE, marginBottom: 14 }}>
        <View style={{ flex: 1 }}>
          {kicker && <Kicker light={dark} style={{ marginBottom: 6 }}>{kicker}</Kicker>}
          <H2 light={dark}>{title}</H2>
        </View>
        {action && <Tap onPress={onAction}><Txt style={{ fontFamily: F.semibold, fontSize: 14.5, color: dark ? C.volt : C.ink, textDecorationLine: dark ? 'none' : 'underline' }}>{action}</Txt></Tap>}
      </View>
      {children}
    </View>
  );
}

export const s = StyleSheet.create({
  txt: { fontFamily: F.regular, color: C.ink, fontSize: 16, lineHeight: 23 },
  display: { fontFamily: F.heavy, fontSize: 40, lineHeight: 41, letterSpacing: -1.4, color: C.ink },
  h1: { fontFamily: F.heavy, fontSize: 31, lineHeight: 34, letterSpacing: -0.9 },
  h2: { fontFamily: F.heavy, fontSize: 23, lineHeight: 27, letterSpacing: -0.5 },
  kicker: { fontFamily: F.narrowBold, fontSize: 12.5, lineHeight: 16, letterSpacing: 1.6, textTransform: 'uppercase', color: C.ink3 },
  muted: { color: C.ink2, fontSize: 15.5, lineHeight: 23 },
  btn: { height: 58, borderRadius: R.pill, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  btnTxt: { fontFamily: F.bold, fontSize: 16.5, letterSpacing: -0.2 },
  card: { borderRadius: R.lg, padding: 18, backgroundColor: '#fff', borderWidth: 1, borderColor: C.line },
  cardDark: { backgroundColor: C.night2, borderColor: C.nightLine },
  cardSel: { borderColor: C.ink, borderWidth: 2, padding: 17 },
  cardSelDark: { borderColor: C.volt, borderWidth: 2, padding: 17 },
  selBadge: { position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: 12, backgroundColor: C.volt, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff' },
  chip: { borderWidth: 1.5, borderColor: C.line2, borderRadius: R.pill, paddingHorizontal: 16, height: 40, justifyContent: 'center' },
  chipTxt: { fontFamily: F.semibold, fontSize: 14.5 },
  pill: { alignSelf: 'flex-start', borderRadius: R.pill, paddingHorizontal: 10, paddingVertical: 4 },
  pillTxt: { fontFamily: F.narrowBold, fontSize: 12.5, lineHeight: 15, letterSpacing: 0.3 },
  footer: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: C.line, paddingHorizontal: SPACE, paddingTop: 14, gap: 8, overflow: 'hidden' },
  notice: { flexDirection: 'row', gap: 10, padding: 15, borderRadius: R.md, alignItems: 'flex-start' },
  fieldLabel: { fontFamily: F.semibold, fontSize: 14, color: C.ink2 },
  input: { height: 54, borderRadius: R.md, paddingHorizontal: 16, fontFamily: F.medium, fontSize: 16, color: C.ink, backgroundColor: C.bg2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 15, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: C.line2 },
  rowIc: { width: 38, height: 38, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});
