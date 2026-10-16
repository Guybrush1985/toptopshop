import { useEffect } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Archivo_400Regular } from '@expo-google-fonts/archivo/400Regular';
import { Archivo_500Medium } from '@expo-google-fonts/archivo/500Medium';
import { Archivo_600SemiBold } from '@expo-google-fonts/archivo/600SemiBold';
import { Archivo_700Bold } from '@expo-google-fonts/archivo/700Bold';
import { Archivo_800ExtraBold } from '@expo-google-fonts/archivo/800ExtraBold';
import { StoreProvider } from '@/lib/store';
import { AuthProvider } from '@/lib/auth';
import { C, F } from '@/lib/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({ Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold, Archivo_800ExtraBold });
  const ready = fontsLoaded || !!fontError;
  useEffect(() => { if (ready) SplashScreen.hideAsync().catch(() => {}); }, [ready]);
  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StoreProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{
            headerTintColor: C.ink,
            headerTitleStyle: { fontFamily: F.bold, fontSize: 17 },
            headerShadowVisible: false,
            headerBackButtonDisplayMode: 'minimal',
            contentStyle: { backgroundColor: C.bg },
          }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="neu/schlag" options={{ title: 'Schlag wählen' }} />
            <Stack.Screen name="neu/video" options={{ title: 'Video aufnehmen' }} />
            <Stack.Screen name="neu/trainer" options={{ title: 'Trainer:in wählen' }} />
            <Stack.Screen name="neu/bezahlen" options={{ title: 'Bezahlen' }} />
            <Stack.Screen name="neu/fertig" options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="trainer/[id]" options={{ title: 'Profil' }} />
            <Stack.Screen name="anfrage/[id]" options={{ title: 'Deine Anfrage' }} />
            <Stack.Screen name="coach/index" options={{ title: 'Für Trainer:innen' }} />
            <Stack.Screen name="coach/registrieren" options={{ title: 'Als Trainer:in registrieren' }} />
            <Stack.Screen name="coach/ratgeber" options={{ title: 'So antwortest du per Video' }} />
            <Stack.Screen name="coach/anfrage/[id]" options={{ title: 'Anfrage' }} />
          </Stack>
        </StoreProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
