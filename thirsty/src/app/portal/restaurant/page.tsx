"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCurrentUser, useStore } from "@/lib/store";
import { memberRole } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { Today } from "@/components/portal/Today";
import { Spots } from "@/components/portal/Spots";
import { CheckIn } from "@/components/portal/CheckIn";
import { Profile } from "@/components/portal/Profile";
import { Media } from "@/components/portal/Media";
import { Menu } from "@/components/portal/Menu";
import { Reviews } from "@/components/portal/Reviews";
import { Team } from "@/components/portal/Team";

const TABS = [
  ["", "Heute", Today],
  ["angebote", "Angebote", Spots],
  ["checkin", "Check-in", CheckIn],
  ["profil", "Profil", Profile],
  ["fotos", "Fotos", Media],
  ["karte", "Speisekarte", Menu],
  ["bewertungen", "Bewertungen", Reviews],
  ["team", "Team", Team],
] as const;

export default function RestaurantPortalPage() {
  return <RequireUser><RestaurantPortal /></RequireUser>;
}

function RestaurantPortal() {
  const params = useSearchParams();
  const id = params.get("id") ?? "";
  const tab = params.get("tab") ?? "";
  const s = useStore();
  const user = useCurrentUser()!;
  const role = memberRole(s, user.id, id);
  const r = s.restaurants.find((x) => x.id === id);
  if (!r || !role) return <p className="card">Kein Zugriff auf dieses Restaurant. <Link href="/portal/" className="underline">Zum Portal</Link></p>;
  const tabs = role === "STAFF" ? TABS.filter(([k]) => k === "" || k === "checkin") : TABS;
  const Current = (tabs.find(([k]) => k === tab) ?? tabs[0])[2];
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="display text-5xl text-cream">{r.name}</h1>
        <Link href={`/restaurant/?s=${r.slug}`} className="text-sm underline">Gästeansicht</Link>
      </div>
      <nav className="mb-6 flex gap-1 overflow-x-auto border-b border-stone-200 text-sm">
        {tabs.map(([k, label]) => (
          <Link
            key={k}
            href={`/portal/restaurant/?id=${id}${k ? `&tab=${k}` : ""}`}
            className={`whitespace-nowrap rounded-t-lg px-3 py-2 font-medium ${k === tab ? "border-b-2 border-brand-600 text-stone-900" : "text-stone-600 hover:bg-white/5 hover:text-stone-900"}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Current restaurantId={id} role={role} />
    </div>
  );
}
