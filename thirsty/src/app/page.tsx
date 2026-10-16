"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useStore, type Restaurant, type Spot } from "@/lib/store";
import { seatsTaken } from "@/lib/actions";
import { OfferArt } from "@/components/ui";
import { Marquee, useParallax } from "@/components/Parallax";
import { offerOf, TONE_BG } from "@/lib/offer";
import { day, priceLevel, time } from "@/lib/format";
import type { MapPin } from "@/components/CityMap";

const CityMap = dynamic(() => import("@/components/CityMap").then((m) => m.CityMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-ink-2" />,
});

type Deal = { r: Restaurant; sp: Spot; left: number; cover?: string };

export default function Discover() {
  const s = useStore();
  const router = useRouter();
  const city = useSearchParams().get("stadt") ?? "";
  const [selected, setSelected] = useState<string>();
  const jump = useRef(false);
  // Kartenkacheln erst nach einer Aktion laden (Stadtwahl oder Klick), nicht schon beim Aufruf eines geteilten Links
  const [mapOk, setMapOk] = useState(() => {
    try {
      return sessionStorage.getItem("thirsty-map") === "1";
    } catch {
      return false;
    }
  });
  const allowMap = () => {
    setMapOk(true);
    try {
      sessionStorage.setItem("thirsty-map", "1");
    } catch {}
  };

  // Pro Restaurant das nächste buchbare Angebot der kommenden 7 Tage
  const deals = useMemo(() => {
    const now = Date.now();
    const out: Deal[] = [];
    for (const r of s.restaurants.filter((x) => x.status === "ACTIVE")) {
      const sp = s.spots
        .filter((x) => x.restaurantId === r.id && x.status === "OPEN")
        .filter((x) => new Date(x.startsAt).getTime() < now + 7 * 864e5 && now < new Date(x.startsAt).getTime() - x.bookingCutoffMin * 60_000)
        .map((x) => ({ x, left: x.seats - seatsTaken(s, x.id) }))
        .filter((x) => x.left > 0)
        .sort((a, b) => a.x.startsAt.localeCompare(b.x.startsAt))[0];
      if (sp) out.push({ r, sp: sp.x, left: sp.left, cover: s.photos.find((p) => p.restaurantId === r.id && p.kind === "COVER")?.dataUrl });
    }
    return out.sort((a, b) => a.sp.startsAt.localeCompare(b.sp.startsAt));
  }, [s]);

  const cities = useMemo(() => {
    const all = [...new Set(s.restaurants.filter((r) => r.status === "ACTIVE").map((r) => r.city).filter(Boolean))] as string[];
    return all.map((c) => ({ name: c, n: deals.filter((d) => d.r.city === c).length })).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  }, [s, deals]);

  const inCity = deals.filter((d) => d.r.city === city);
  const pins: MapPin[] = inCity
    .filter((d) => d.r.lat != null && d.r.lng != null)
    .map((d) => ({ id: d.r.id, lat: d.r.lat!, lng: d.r.lng!, label: offerOf(d.sp).pin, tone: offerOf(d.sp).tone, name: d.r.name }));
  const sel = inCity.find((d) => d.r.id === selected);

  const pick = (c: string) => {
    jump.current = true;
    allowMap();
    setSelected(undefined);
    router.replace(c ? `/?stadt=${encodeURIComponent(c)}` : "/", { scroll: false });
  };
  useEffect(() => {
    if (city && jump.current) document.getElementById("karte")?.scrollIntoView({ behavior: "smooth", block: "start" });
    jump.current = false;
  }, [city]);
  useParallax([city]);

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div data-parallax="0.35" className="absolute -left-[15%] top-[-20%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(212,255,58,.32),transparent_60%)]" />
          <div data-parallax="0.15" className="absolute -right-[20%] top-[10%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(255,77,31,.35),transparent_62%)]" />
          <div data-parallax="0.5" className="absolute bottom-[-35%] left-[25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(255,61,139,.28),transparent_60%)]" />
        </div>

        {/* schwebende Angebots-Sticker */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
          <span data-parallax="-0.25" data-rotate="-8" className="display absolute right-[6%] top-[12%] rotate-[-8deg] rounded-full bg-hot px-7 py-4 text-6xl text-ink shadow-2xl">−50 %</span>
          <span data-parallax="-0.45" data-rotate="9" className="display absolute right-[2%] top-[38%] rotate-[9deg] rounded-full bg-lime px-6 py-3 text-4xl text-ink shadow-2xl">Gratis Drink</span>
          <span data-parallax="-0.12" data-rotate="-4" className="display absolute right-[7%] top-[62%] rotate-[-4deg] rounded-full bg-pink px-6 py-3 text-4xl text-ink shadow-2xl">Gratis Dessert</span>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:pt-20">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[.3em] text-lime">Start im Dezember 2026 · die erste Stunde gehört dir</p>
          <h1 className="display mt-5 animate-rise text-[22vw] text-cream sm:text-[15vw] lg:text-[12.5rem]" style={{ animationDelay: ".08s" }}>
            Sei der<br />
            <span className="text-lime">erste</span> Gast<span className="text-hot">.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise font-serif text-3xl italic leading-tight text-cream/85 sm:text-4xl" style={{ animationDelay: ".16s" }}>
            Zur Öffnung essen gehen. Bis zu 75&nbsp;% sparen. Oder Drink und Dessert aufs Haus.
          </p>

          <div className="mt-12 animate-rise" style={{ animationDelay: ".24s" }}>
            <p className="display text-3xl text-cream sm:text-4xl">Wo suchst du ein Schnäppchen?</p>
            <div className="mt-4 flex max-w-3xl flex-wrap gap-2.5">
              {cities.length === 0 && <p className="text-cream/60">Gerade ist noch keine Stadt dabei.</p>}
              {cities.map((c) => (
                <button
                  key={c.name}
                  onClick={() => pick(c.name)}
                  aria-pressed={c.name === city}
                  className={`group flex items-center gap-2.5 rounded-full border-2 px-5 py-2.5 font-display text-2xl uppercase leading-none transition ${
                    c.name === city ? "border-lime bg-lime text-ink" : "border-lime/60 text-cream hover:border-lime hover:bg-lime hover:text-ink"
                  }`}
                >
                  {c.name}
                  <span className={`rounded-full px-2 py-1 font-sans text-xs font-bold ${c.name === city ? "bg-ink text-lime" : "bg-white/10 text-cream/70"}`}>
                    {c.n} {c.n === 1 ? "Angebot" : "Angebote"}
                  </span>
                </button>
              ))}
            </div>
            <p className="mt-4 max-w-md text-xs text-cream/40">
              Mit der Stadtwahl lädt die Karte Kacheln von OpenStreetMap; dabei wird deine IP-Adresse übertragen.{" "}
              <Link href="/datenschutz/" className="underline">Datenschutz</Link>
            </p>
          </div>
        </div>
      </section>

      <Marquee
        items={["−50 % auf alles", "Gratis-Getränk", "Gratis-Dessert", "−75 % auf alles", "−25 % auf alles", "Nur für die ersten Gäste"]}
        className="-mx-2 -rotate-[1.5deg] border-y-4 border-ink bg-hot py-3 font-display text-4xl uppercase text-ink sm:text-6xl"
      />

      {/* ---------- Karte ---------- */}
      {city && (
        <section id="karte" className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.3em] text-cream/50">Jetzt in</p>
              <h2 className="display text-7xl text-cream sm:text-9xl">{city}<span className="text-lime">.</span></h2>
            </div>
            <p className="max-w-xs text-right text-cream/70">
              <span className="font-display text-4xl text-lime">{inCity.length}</span>{" "}
              {inCity.length === 1 ? "Restaurant hat" : "Restaurants haben"} gerade ein Angebot für die ersten Gäste. Tipp auf einen Pin.
            </p>
          </div>

          <div className="relative mt-8 h-[72vh] min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_rgba(212,255,58,.25)]">
            {mapOk ? (
              <CityMap pins={pins} selected={selected} onSelect={setSelected} />
            ) : (
              <div className="grid h-full place-items-center bg-ink-2 p-6 text-center">
                <div>
                  <button onClick={allowMap} className="btn px-7 py-3 text-lg">Karte laden</button>
                  <p className="mx-auto mt-3 max-w-xs text-xs text-cream/50">Lädt Kartenmaterial von OpenStreetMap. Dabei wird deine IP-Adresse übertragen.</p>
                </div>
              </div>
            )}
            {sel && <DealCard d={sel} onClose={() => setSelected(undefined)} />}
            {inCity.length === 0 && (
              <div className="absolute inset-0 z-[500] grid place-items-center bg-ink/70 p-6 text-center backdrop-blur-sm">
                <p className="display text-4xl text-cream">Gerade alles weg.<br /><span className="text-lime">Schau morgen wieder rein.</span></p>
              </div>
            )}
          </div>

          {inCity.length > 0 && (
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inCity.map((d, i) => (
                <li key={d.r.id} className="animate-rise" style={{ animationDelay: `${i * 0.06}s` }}>
                  <DealTile d={d} active={d.r.id === selected} onShow={() => {
                    setSelected(d.r.id);
                    document.getElementById("karte")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }} />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ---------- So geht's ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <h2 className="display text-6xl text-cream sm:text-8xl">So einfach<span className="text-hot">.</span></h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["Stadt wählen", "Auf der Karte siehst du sofort, wer heute die ersten Gäste belohnt."],
            ["Platz sichern", "Ein Klick, ein QR-Code. Kostenlos stornierbar bis zwei Stunden vorher."],
            ["Hingehen, sparen", "QR-Code zeigen, essen, vor Ort zahlen. Das Angebot gilt bis zum Ende des Zeitfensters."],
          ].map(([t, x], i) => (
            <li key={t} className="bg-ink p-7">
              <span className="display block text-8xl text-lime">0{i + 1}</span>
              <p className="display mt-4 text-3xl text-cream">{t}</p>
              <p className="mt-2 text-cream/60">{x}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/registrieren/?rolle=restaurant"
          className="group relative mt-6 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-lime p-8 text-ink sm:p-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em]">Für Restaurants</p>
            <p className="display mt-2 text-5xl sm:text-7xl">Leere Tische um 17 Uhr?</p>
            <p className="mt-2 max-w-lg font-serif text-2xl italic">Stell ein Angebot ein und füll die erste Stunde.</p>
          </div>
          <span className="display rounded-full bg-ink px-7 py-4 text-2xl text-lime transition group-hover:translate-x-2">Jetzt mitmachen →</span>
        </Link>
      </section>
    </div>
  );
}

function When({ sp }: { sp: Spot }) {
  return <>{day(sp.startsAt)}, {time(sp.startsAt)}–{time(sp.endsAt)} Uhr</>;
}

/** Angebot, das sich über der Karte öffnet, wenn man auf einen Pin tippt. */
function DealCard({ d, onClose }: { d: Deal; onClose: () => void }) {
  const o = offerOf(d.sp);
  return (
    <div className="absolute inset-x-3 bottom-3 z-[600] animate-rise overflow-hidden rounded-3xl border border-white/10 bg-ink/95 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:left-4 sm:w-[380px]" role="dialog" aria-label={`Angebot von ${d.r.name}`}>
      <div className={`relative px-5 pb-4 pt-5 sm:px-6 sm:pb-5 sm:pt-6 ${TONE_BG[o.tone]}`}>
        <button onClick={onClose} aria-label="Schließen" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/15 text-xl leading-none hover:bg-ink/25">×</button>
        <p className="text-xs font-bold uppercase tracking-[.25em]">Für die ersten Gäste</p>
        <p className="display mt-1 text-5xl sm:text-7xl">{o.big}</p>
        <p className="display text-2xl sm:text-3xl">{o.small}</p>
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <div>
          <p className="display text-3xl text-cream">{d.r.name}</p>
          <p className="text-sm text-cream/60">
            {[d.r.cuisine, priceLevel(d.r.priceLevel), d.r.street].filter(Boolean).join(" · ")}
            {d.r.demo && <span className="chip ml-2">Beispiel</span>}
          </p>
        </div>
        <p className="text-cream">{o.long}.</p>
        <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="rounded-full bg-white/10 px-3 py-1 text-cream"><When sp={d.sp} /></span>
          <span className={`rounded-full px-3 py-1 ${d.left <= 2 ? "bg-hot/20 text-hot-soft" : "bg-lime/15 text-lime"}`}>noch {d.left} {d.left === 1 ? "Platz" : "Plätze"}</span>
        </p>
        <Link href={`/restaurant/?s=${d.r.slug}`} className="btn w-full py-3 text-lg">Platz sichern →</Link>
      </div>
    </div>
  );
}

function DealTile({ d, active, onShow }: { d: Deal; active: boolean; onShow: () => void }) {
  return (
    <div className={`group overflow-hidden rounded-[1.75rem] border bg-ink-2 transition duration-300 hover:-translate-y-1 ${active ? "border-lime" : "border-white/10"}`}>
      <Link href={`/restaurant/?s=${d.r.slug}`} className="block">
        <OfferArt discount={d.sp.discountPercent} freebie={d.sp.freebie} photo={d.cover} label={d.r.demo ? "Beispiel" : undefined} className="h-44" />
        <div className="space-y-1 p-5">
          <p className="display text-3xl text-cream">{d.r.name}</p>
          <p className="text-sm text-cream/60">{[d.r.cuisine, priceLevel(d.r.priceLevel)].filter(Boolean).join(" · ")}</p>
          <p className="pt-2 font-semibold text-cream"><When sp={d.sp} /></p>
          <p className={`text-sm font-semibold ${d.left <= 2 ? "text-hot-soft" : "text-lime"}`}>noch {d.left} von {d.sp.seats} Plätzen</p>
        </div>
      </Link>
      {d.r.lat != null && (
        <button onClick={onShow} className="w-full border-t border-white/10 px-5 py-3 text-left text-sm font-semibold text-cream/70 hover:text-lime">
          Auf der Karte zeigen ↑
        </button>
      )}
    </div>
  );
}
