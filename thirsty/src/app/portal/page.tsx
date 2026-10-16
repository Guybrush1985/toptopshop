"use client";

import Link from "next/link";
import { useCurrentUser, useStore } from "@/lib/store";
import { RequireUser } from "@/components/Shell";
import { PageTitle } from "@/components/ui";

const STATUS: Record<string, string> = { DRAFT: "Entwurf", ACTIVE: "Online", PAUSED: "Pausiert" };
const ROLE: Record<string, string> = { OWNER: "Inhaber", MANAGER: "Manager", STAFF: "Service" };

export default function PortalPage() {
  return <RequireUser><Portal /></RequireUser>;
}

function Portal() {
  const s = useStore();
  const user = useCurrentUser()!;
  const memberships = s.members.filter((m) => m.userId === user.id);
  return (
    <div>
      <PageTitle sub="Lege dein Restaurant an und schreib Early-Bird-Plätze aus.">Restaurant-Portal</PageTitle>
      <ul className="grid gap-4 sm:grid-cols-2">
        {memberships.map((m) => {
          const r = s.restaurants.find((x) => x.id === m.restaurantId)!;
          const count = s.spots.filter((sp) => sp.restaurantId === r.id).length;
          return (
            <li key={m.id}>
              <Link href={`/portal/restaurant/?id=${r.id}`} className="card block hover:shadow-md">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl uppercase tracking-wide text-cream">{r.name}</h2>
                  <span className="chip">{STATUS[r.status]}</span>
                </div>
                <p className="text-sm text-stone-600">{r.city ?? "Ort fehlt"} · {count} Angebote · Rolle: {ROLE[m.role]}</p>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/portal/neu/" className="card flex h-full min-h-24 items-center justify-center border-dashed text-brand-700 hover:bg-brand-50">
            + Restaurant anlegen
          </Link>
        </li>
      </ul>
    </div>
  );
}
