import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { storage } from './storage';
import { ACCEPT_HOURS, coachById, tierById, type PayMethod, type StrokeId, type TierId } from './data';

// Vorschau: Anfragen leben nur auf dem Gerät. Es wird noch nichts hochgeladen und nichts abgebucht.
export type Draft = {
  stroke?: StrokeId;
  video?: { uri: string; duration?: number | null };
  pick?: { mode: 'tier'; tier: TierId } | { mode: 'coach'; coachId: string };
  note?: string;
};
export type RequestStatus = 'waiting' | 'accepted' | 'answered' | 'refunded';
export type Request = {
  id: string; stroke: StrokeId; videoUri?: string; tier: TierId; coachId?: string; note?: string; price: number; pay: PayMethod;
  createdAt: number; status: RequestStatus; example?: boolean; rating?: number;
};

const EXAMPLE: Request = {
  id: 'beispiel', stroke: 'auf', tier: 'A', coachId: 'lena', price: 29, pay: 'applepay', note: 'Mein Aufschlag hat kaum Tempo.',
  createdAt: Date.now() - 2 * 864e5, status: 'answered', example: true,
};

type State = { requests: Request[]; credit: number; seenIntro: boolean };
const INITIAL: State = { requests: [EXAMPLE], credit: 0, seenIntro: false };
const KEY = 'msc-state-v1';

type Ctx = State & {
  ready: boolean;
  draft: Draft;
  setDraft: (d: Draft | ((d: Draft) => Draft)) => void;
  resetDraft: () => void;
  priceOf: (d: Draft) => number;
  submit: (pay: PayMethod) => Request;
  rate: (id: string, stars: number) => void;
  topUp: (amount: number) => void;
  markIntro: () => void;
};
const StoreCtx = createContext<Ctx | null>(null);

export const tierOfPick = (p?: Draft['pick']): TierId | undefined =>
  !p ? undefined : p.mode === 'tier' ? p.tier : coachById(p.coachId)?.tier;

export const hoursLeft = (r: Request) => Math.max(0, Math.ceil(ACCEPT_HOURS - (Date.now() - r.createdAt) / 36e5));

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(INITIAL);
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState<Draft>({});
  const loaded = useRef(false);

  useEffect(() => {
    storage.getItem(KEY).then(raw => {
      if (raw) try { setState({ ...INITIAL, ...JSON.parse(raw) }); } catch { /* defekter Speicher: neu starten */ }
      loaded.current = true; setReady(true);
    });
  }, []);
  useEffect(() => { if (loaded.current) storage.setItem(KEY, JSON.stringify(state)); }, [state]);

  const value = useMemo<Ctx>(() => {
    const priceOf = (d: Draft) => tierById(tierOfPick(d.pick)).price;
    return {
      ...state, ready, draft, setDraft,
      resetDraft: () => setDraft({}),
      priceOf,
      submit: pay => {
        const tier = tierOfPick(draft.pick) || 'C';
        const price = priceOf(draft);
        const r: Request = {
          id: String(Date.now()), stroke: draft.stroke || 'vh', videoUri: draft.video?.uri, tier, price, pay, note: draft.note?.trim() || undefined,
          coachId: draft.pick?.mode === 'coach' ? draft.pick.coachId : undefined, createdAt: Date.now(), status: 'waiting',
        };
        setState(s => ({ ...s, credit: pay === 'credit' ? Math.max(0, s.credit - price) : s.credit, requests: [r, ...s.requests] }));
        return r;
      },
      rate: (id, stars) => setState(s => ({ ...s, requests: s.requests.map(r => r.id === id ? { ...r, rating: stars } : r) })),
      topUp: amount => setState(s => ({ ...s, credit: s.credit + amount })),
      markIntro: () => setState(s => ({ ...s, seenIntro: true })),
    };
  }, [state, ready, draft]);

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error('StoreProvider fehlt');
  return c;
}
