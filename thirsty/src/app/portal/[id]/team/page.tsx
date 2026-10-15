import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { addMember, removeMember } from "@/app/actions/portal";
import { Field, Notice } from "@/components/ui";

const ROLES: Record<string, string> = { OWNER: "Inhaber", MANAGER: "Manager", STAFF: "Service" };

export default async function TeamPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string }> }) {
  const { id } = await params;
  const { error } = await searchParams;
  const { user, member } = await requireMember(id);
  const members = await db.restaurantMember.findMany({ where: { restaurantId: id }, include: { user: true } });
  const isOwner = member.role === "OWNER";
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <section>
        <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
          {members.map((m) => (
            <li key={m.id} className="flex items-center gap-3 px-4 py-3">
              <div className="flex-1">
                <p className="font-medium">{m.user.name}</p>
                <p className="text-sm text-stone-500">{m.user.email}</p>
              </div>
              <span className="chip">{ROLES[m.role]}</span>
              {isOwner && m.userId !== user.id && (
                <form action={removeMember}>
                  <input type="hidden" name="restaurantId" value={id} />
                  <input type="hidden" name="memberId" value={m.id} />
                  <button className="btn-danger">Entfernen</button>
                </form>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-stone-600">Manager bearbeiten Profil, Karte und Angebote. Service sieht nur die heutige Liste und den Check-in.</p>
      </section>
      {isOwner && (
        <form action={addMember} className="card h-fit space-y-3">
          <h2 className="text-lg font-bold">Person hinzufügen</h2>
          <Notice error={error} />
          <input type="hidden" name="restaurantId" value={id} />
          <Field label="E-Mail des Thirsty-Kontos"><input className="input" type="email" name="email" required /></Field>
          <Field label="Rolle">
            <select className="input" name="role"><option value="STAFF">Service</option><option value="MANAGER">Manager</option></select>
          </Field>
          <button className="btn w-full">Hinzufügen</button>
        </form>
      )}
    </div>
  );
}
