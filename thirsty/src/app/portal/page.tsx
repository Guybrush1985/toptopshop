import Link from "next/link";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { PageTitle } from "@/components/ui";

export const metadata = { title: "Restaurant-Portal" };

const STATUS = { DRAFT: "Entwurf", ACTIVE: "Online", PAUSED: "Pausiert" } as Record<string, string>;

export default async function PortalHome() {
  const user = await requireUser("/portal");
  const memberships = await db.restaurantMember.findMany({
    where: { userId: user.id },
    include: { restaurant: { include: { _count: { select: { spots: true } } } } },
  });
  return (
    <div>
      <PageTitle sub="Lege dein Restaurant an und schreib Early-Bird-Plätze aus.">Restaurant-Portal</PageTitle>
      <ul className="grid gap-4 sm:grid-cols-2">
        {memberships.map(({ restaurant: r, role }) => (
          <li key={r.id}>
            <Link href={`/portal/${r.id}`} className="card block hover:shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">{r.name}</h2>
                <span className="chip">{STATUS[r.status]}</span>
              </div>
              <p className="text-sm text-stone-600">{r.city ?? "Ort fehlt"} · {r._count.spots} Angebote · Rolle: {role}</p>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/portal/new" className="card flex h-full items-center justify-center border-dashed text-brand-700 hover:bg-brand-50">
            + Restaurant anlegen
          </Link>
        </li>
      </ul>
    </div>
  );
}
