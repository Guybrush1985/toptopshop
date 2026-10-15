import Link from "next/link";
import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";

const TABS = [
  ["", "Heute"],
  ["/spots", "Angebote"],
  ["/checkin", "Check-in"],
  ["/profil", "Profil"],
  ["/medien", "Fotos"],
  ["/karte", "Speisekarte"],
  ["/bewertungen", "Bewertungen"],
  ["/team", "Team"],
] as const;

export default async function RestaurantPortalLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { member } = await requireMember(id);
  const r = await db.restaurant.findUniqueOrThrow({ where: { id } });
  const tabs = member.role === "STAFF" ? TABS.filter(([p]) => p === "" || p === "/checkin") : TABS;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-2xl font-bold">{r.name}</h1>
        <Link href={`/r/${r.slug}`} className="text-sm underline">Gästeansicht</Link>
      </div>
      <nav className="mb-6 flex gap-1 overflow-x-auto border-b border-stone-200 text-sm">
        {tabs.map(([p, label]) => (
          <Link key={p} href={`/portal/${id}${p}`} className="whitespace-nowrap rounded-t-lg px-3 py-2 font-medium text-stone-600 hover:bg-white hover:text-stone-900">
            {label}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
