"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCurrentUser, useStore, type Restaurant, type Spot } from "@/lib/store";
import { isRestaurantAccount, seatsTaken } from "@/lib/actions";
import { OfferArt } from "@/components/ui";
import { Marquee, useParallax } from "@/components/Parallax";
import { arriveBy, offerOf, TONE_BG } from "@/lib/offer";
import { day, priceLevel, time } from "@/lib/format";
import type { MapPin } from "@/components/CityMap";
import { flagsOf, SPONSOR_MAX_PER_CITY } from "@/lib/payments";

const CityMap = dynamic(() => import("@/components/CityMap").then((m) => m.CityMap), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-ink-2" />,
});

type Deal = { r: Restaurant; sp: Spot; left: number; cover?: string; ad?: boolean };

export default function Discover() {
  const s = useStore();
  const router = useRouter();
  const user = useCurrentUser();
  const params = useSearchParams();
  const near = params.get("nah") === "1";
  const city = near ? "" : params.get("stadt") ?? "";
  const [here, setHere] = useState<{ lat: number; lng: number }>();
  const [radius, setRadius] = useState(5);
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState<string>();
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
      if (sp) out.push({ r, sp: sp.x, left: sp.left, cover: s.photos.find((p) => p.restaurantId === r.id && p.kind === "COVER")?.dataUrl, ad: flagsOf(s, r.id).sponsored });
    }
    return out.sort((a, b) => a.sp.startsAt.localeCompare(b.sp.startsAt));
  }, [s]);

  const cities = useMemo(() => {
    const all = [...new Set(s.restaurants.filter((r) => r.status === "ACTIVE").map((r) => r.city).filter(Boolean))] as string[];
    return all.map((c) => ({ name: c, n: deals.filter((d) => d.r.city === c).length })).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  }, [s, deals]);

  const owner = isRestaurantAccount(s, user);
  const region = owner ? "" : near && here ? "near" : city ? "city" : "";
  // Reihenfolge: bis zu zwei Anzeigen (gekennzeichnet) zuerst, dann nach Entfernung bzw. Uhrzeit
  const inCity = useMemo(() => {
    const all = (region === "near"
      ? deals
          .filter((d) => d.r.lat != null && d.r.lng != null)
          .map((d) => ({ ...d, km: km(here!, { lat: d.r.lat!, lng: d.r.lng! }) }))
          .filter((d) => d.km <= radius)
          .sort((a, b) => a.km - b.km)
      : deals.filter((d) => d.r.city === city)) as (Deal & { km?: number })[];
    const ads = all.filter((d) => d.ad).slice(0, SPONSOR_MAX_PER_CITY);
    return [...ads, ...all.filter((d) => !ads.includes(d)).map((d) => ({ ...d, ad: false }))];
  }, [deals, city, region, here, radius]);
  const pins: MapPin[] = inCity
    .filter((d) => d.r.lat != null && d.r.lng != null)
    .map((d) => ({ id: d.r.id, lat: d.r.lat!, lng: d.r.lng!, label: offerOf(d.sp).pin, tone: offerOf(d.sp).tone, name: d.r.name }));
  const sel = inCity.find((d) => d.r.id === selected);

  const locate = () => {
    if (!navigator.geolocation) return setGeoError("Dein Browser kann den Standort nicht teilen.");
    setLocating(true);
    setGeoError(undefined);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        setHere({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        jump.current = true;
        allowMap();
        setSelected(undefined);
        router.replace("/?nah=1", { scroll: false });
      },
      () => {
        setLocating(false);
        setGeoError("Standort nicht freigegeben. Wähl einfach eine Stadt.");
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 300_000 },
    );
  };

  const pick = (c: string) => {
    jump.current = true;
    allowMap();
    setSelected(undefined);
    router.replace(c ? `/?stadt=${encodeURIComponent(c)}` : "/", { scroll: false });
  };
  useEffect(() => {
    if (region && jump.current) document.getElementById("karte")?.scrollIntoView({ behavior: "smooth", block: "start" });
    jump.current = false;
  }, [region, city]);
  useParallax([region, city]);

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
          {user && <p className="mb-3 animate-rise font-serif text-3xl italic text-cream">Hallo {user.name.split(" ")[0]}, schön dass du da bist.</p>}
          <p className="animate-rise text-xs font-semibold uppercase tracking-[.3em] text-lime">Start im Dezember 2026 · die erste Stunde gehört dir</p>
          <h1 className="display mt-5 animate-rise text-[22vw] text-cream sm:text-[15vw] lg:text-[12.5rem]" style={{ animationDelay: ".08s" }}>
            Spare als<br />
            <span className="text-lime">erster</span> Gast<span className="text-hot">.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-rise font-serif text-3xl italic leading-tight text-cream/85 sm:text-4xl" style={{ animationDelay: ".16s" }}>
            Zur Öffnung essen gehen und sparen! Bis zu 75&nbsp;% auf alles oder Drink und Dessert aufs Haus.
          </p>

          {owner ? (
            <div className="mt-12 max-w-xl rounded-3xl border border-white/10 bg-ink-2/80 p-6">
              <p className="display text-3xl text-cream">Du bist als Restaurant angemeldet.</p>
              <p className="mt-2 text-cream/70">Angebote anderer Restaurants siehst du nur mit einem Gast-Konto. Deine eigenen Angebote verwaltest du im Portal.</p>
              <Link href="/portal/" className="btn mt-4">Zum Portal</Link>
            </div>
          ) : (
          <div className="mt-12 animate-rise" style={{ animationDelay: ".24s" }}>
            <p className="display text-3xl text-cream sm:text-4xl">Wo suchst du ein Schnäppchen?</p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button
                onClick={locate}
                aria-pressed={near}
                className={`flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-display text-2xl uppercase leading-none transition ${
                  near ? "border-hot bg-hot text-ink" : "border-hot/60 text-cream hover:border-hot hover:bg-hot hover:text-ink"
                }`}
              >
                <span aria-hidden>◎</span> {locating ? "Suche …" : "In meiner Nähe"}
              </button>
              <label className="flex items-center gap-2 text-sm text-cream/70">
                Umkreis
                <select value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="input w-auto py-2">
                  {[1, 2, 5, 10, 25].map((km) => <option key={km} value={km}>{km} km</option>)}
                </select>
              </label>
              {geoError && <span className="text-sm text-hot-soft">{geoError}</span>}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[.25em] text-cream/40">oder Stadt wählen</p>
            <div className="mt-2 flex max-w-3xl flex-wrap gap-2.5">
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
              Dein Standort wird nur in deinem Browser verwendet und nicht gespeichert. Mit der Stadtwahl lädt die Karte Kacheln von OpenStreetMap; dabei wird deine IP-Adresse übertragen.{" "}
              <Link href="/datenschutz/" className="underline">Datenschutz</Link>
            </p>
          </div>
          )}
        </div>
      </section>

      <Marquee
        items={["−50 % auf alles", "Gratis-Getränk", "Gratis-Dessert", "−75 % auf alles", "−25 % auf alles", "Nur für die ersten Gäste"]}
        className="-mx-2 -rotate-[1.5deg] border-y-4 border-ink bg-hot py-3 font-display text-4xl uppercase text-ink sm:text-6xl"
      />

      {/* ---------- Karte ---------- */}
      {near && !here && !owner && (
        <section className="mx-auto max-w-6xl px-5 pt-12 text-center">
          <button onClick={locate} className="btn px-7 py-3 text-lg">Standort freigeben</button>
        </section>
      )}
      {region && (
        <section id="karte" className="mx-auto flex h-[calc(100svh-4.5rem)] min-h-[520px] max-w-6xl scroll-mt-[4.5rem] flex-col px-5 pb-4 pt-4">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
            <h2 className="display text-5xl text-cream sm:text-7xl">
              {region === "near" ? <>In deiner Nähe</> : city}<span className="text-lime">.</span>
            </h2>
            <p className="text-sm text-cream/70">
              <span className="font-display text-2xl text-lime">{inCity.length}</span>{" "}
              {inCity.length === 1 ? "Restaurant hat" : "Restaurants haben"} gerade ein Angebot
              {region === "near" && <> im Umkreis von {radius} km</>}. Tipp auf einen Pin.
            </p>
          </div>

          <div className="relative mt-3 min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_rgba(212,255,58,.25)]">
            {mapOk ? (
              <CityMap pins={pins} selected={selected} onSelect={setSelected} me={region === "near" && here ? { ...here, radiusKm: radius } : undefined} />
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
                <p className="display text-4xl text-cream">{region === "near" ? "Hier gerade nichts." : "Gerade alles weg."}<br /><span className="text-lime">Schau morgen wieder rein.</span></p>
              </div>
            )}
          </div>

        </section>
      )}
      {region && inCity.length > 0 && (
        <section className="mx-auto max-w-6xl px-5">
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {inCity.map((d, i) => (
                <li key={d.r.id} className="animate-rise" style={{ animationDelay: `${i * 0.06}s` }}>
                  <DealTile d={d} active={d.r.id === selected} onShow={() => {
                    setSelected(d.r.id);
                    document.getElementById("karte")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }} />
                </li>
              ))}
            </ul>
        </section>
      )}

      {/* ---------- So geht's ---------- */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <h2 className="display text-4xl text-cream sm:text-5xl">So einfach<span className="text-hot">.</span></h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Stadt wählen", "Auf der Karte siehst du, wer heute die ersten Gäste belohnt."],
            ["Platz sichern", "Ein Klick, ein QR-Code. Bis 2 Stunden vorher kostenlos stornierbar."],
            ["Hingehen, sparen", "QR-Code zeigen, essen, sparen."],
          ].map(([t, x], i) => (
            <li key={t} className="flex gap-3">
              <span className="display text-4xl leading-none text-lime">{i + 1}</span>
              <span><span className="block font-semibold text-cream">{t}</span><span className="text-sm text-cream/60">{x}</span></span>
            </li>
          ))}
        </ol>
        {!user && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/registrieren/" className="btn px-7 py-3 text-lg">Kostenlos anmelden</Link>
            <Link href="/login/" className="text-sm text-cream/70 underline underline-offset-4">Schon dabei? Einloggen</Link>
          </div>
        )}
      </section>

      {/* ---------- Für Restaurants (dezent) ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-20">
        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[.3em] text-cream/40">
          <span className="h-px flex-1 bg-white/10" />Für Restaurants<span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl items-center gap-5 sm:grid-cols-[1fr_1.1fr]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ""}/zwei-restaurants.webp`}
            alt="Zwei Restaurants nebeneinander: links leere Tische, rechts sitzen schon Gäste"
            width={1400}
            height={933}
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 opacity-90 saturate-[.85]"
          />
          <div>
            <p className="display text-2xl text-cream">Wo würdest du dich hinsetzen?</p>
            <p className="mt-2 text-sm text-cream/60">
              Wo schon Gäste sitzen, muss es gut sein, und als Erster ein leeres Restaurant zu betreten, ist eine Hürde.
              Psychologen nennen das Social Proof. Firsty bringt die ersten Gäste, der Rest folgt.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-cream/70">
          Leere Tische zur Öffnung? <Link href="/fuer-restaurants/" className="font-semibold text-lime underline underline-offset-4">So funktioniert Firsty für dein Restaurant →</Link>
        </p>
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
            {d.ad && <span className="chip ml-2">Anzeige</span>}
            {d.r.demo && <span className="chip ml-2">Beispiel</span>}
          </p>
        </div>
        <p className="text-cream">{o.long}.</p>
        <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="rounded-full bg-white/10 px-3 py-1 text-cream"><When sp={d.sp} /></span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-cream">da sein bis {arriveBy(d.sp)}</span>
          <span className={`rounded-full px-3 py-1 ${d.left <= 2 ? "bg-hot/20 text-hot-soft" : "bg-lime/15 text-lime"}`}>noch {d.left} {d.left === 1 ? "Platz" : "Plätze"}</span>
        </p>
        <Link href={`/restaurant/?s=${d.r.slug}`} className="btn w-full py-3 text-lg">Platz sichern →</Link>
      </div>
    </div>
  );
}

function DealTile({ d, active, onShow }: { d: Deal & { km?: number }; active: boolean; onShow: () => void }) {
  return (
    <div className={`group overflow-hidden rounded-[1.75rem] border bg-ink-2 transition duration-300 hover:-translate-y-1 ${active ? "border-lime" : "border-white/10"}`}>
      <Link href={`/restaurant/?s=${d.r.slug}`} className="block">
        <OfferArt discount={d.sp.discountPercent} freebie={d.sp.freebie} photo={d.cover} label={[d.ad && "Anzeige", d.r.demo && "Beispiel"].filter(Boolean).join(" · ") || undefined} className="h-44" />
        <div className="space-y-1 p-5">
          <p className="display text-3xl text-cream">{d.r.name}</p>
          <p className="text-sm text-cream/60">{[d.r.cuisine, priceLevel(d.r.priceLevel), d.km != null && `${d.km.toFixed(1).replace(".", ",")} km`].filter(Boolean).join(" · ")}</p>
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

/** Luftlinie in km */
function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const r = (x: number) => (x * Math.PI) / 180;
  const h = Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lng - a.lng) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}
