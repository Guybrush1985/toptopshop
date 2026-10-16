import { Tabs } from 'expo-router/tabs';
import { TabBar } from '@/components/TabBar';

export default function TabsLayout() {
  return (
    <Tabs tabBar={p => <TabBar {...(p as unknown as Parameters<typeof TabBar>[0])} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="trainer" />
      <Tabs.Screen name="anfragen" />
      <Tabs.Screen name="konto" />
    </Tabs>
  );
}
