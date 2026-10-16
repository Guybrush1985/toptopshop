import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Auf iPhone und Android speichert die App auf dem Gerät (AsyncStorage).
// In der Web-Vorschau bleibt alles nur im Arbeitsspeicher: kein Local Storage, keine Cookies (wie auf der Website).
const mem = new Map<string, string>();
export const storage = Platform.OS === 'web'
  ? {
      getItem: async (k: string) => mem.get(k) ?? null,
      setItem: async (k: string, v: string) => { mem.set(k, v); },
      removeItem: async (k: string) => { mem.delete(k); },
    }
  : AsyncStorage;
