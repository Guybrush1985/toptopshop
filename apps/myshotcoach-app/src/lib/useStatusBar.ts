import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { setStatusBarStyle } from 'expo-status-bar';

// Statusleiste passend zum Bildschirm: hell auf dunklen Flächen, dunkel auf hellen
export function useStatusBar(style: 'light' | 'dark') {
  useFocusEffect(useCallback(() => { setStatusBarStyle(style); return () => setStatusBarStyle('dark'); }, [style]));
}
