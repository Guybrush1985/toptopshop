import { Tabs } from 'expo-router/tabs';
import { Icon, type IconName } from '@/components/Icon';
import { C, F } from '@/lib/theme';

const tab = (n: IconName) => ({ color }: { color: unknown }) => <Icon n={n} size={23} color={String(color)} />;

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: C.ink,
      tabBarInactiveTintColor: C.ink3,
      tabBarLabelStyle: { fontFamily: F.semibold, fontSize: 11.5 },
      tabBarStyle: { borderTopColor: C.line },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Start', tabBarIcon: tab('home') }} />
      <Tabs.Screen name="anfragen" options={{ title: 'Meine Videos', tabBarIcon: tab('video') }} />
      <Tabs.Screen name="trainer" options={{ title: 'Trainer:innen', tabBarIcon: tab('users') }} />
      <Tabs.Screen name="konto" options={{ title: 'Konto', tabBarIcon: tab('user') }} />
    </Tabs>
  );
}
