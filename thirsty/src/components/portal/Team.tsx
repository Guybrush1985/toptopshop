"use client";

import { useCurrentUser, useStore, type MemberRole } from "@/lib/store";
import { addMember, removeMember } from "@/lib/actions";
import { Field, Notice, formValues, useAction } from "../ui";
import type { TabProps } from "./types";

const ROLES: Record<string, string> = { OWNER: "Inhaber", MANAGER: "Manager", STAFF: "Service" };

export function Team({ restaurantId: id, role }: TabProps) {
  const s = useStore();
  const user = useCurrentUser()!;
  const { error, run } = useAction();
  const members = s.members.filter((m) => m.restaurantId === id);
  const isOwner = role === "OWNER";
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <section>
        <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-ink-2">
          {members.map((m) => {
            const u = s.users.find((x) => x.id === m.userId);
            return (
              <li key={m.id} className="flex items-center gap-3 px-4 py-3">
                <div className="flex-1">
                  <p className="font-medium">{u?.name}</p>
                  <p className="text-sm text-stone-500">{u?.email}</p>
                </div>
                <span className="chip">{ROLES[m.role]}</span>
                {isOwner && m.userId !== user.id && <button className="btn-danger" onClick={() => run(() => removeMember(id, m.id))}>Entfernen</button>}
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-sm text-stone-600">Manager bearbeiten Profil, Karte und Angebote. Service sieht nur die heutige Liste und den Check-in.</p>
      </section>
      {isOwner && (
        <form
          className="card h-fit space-y-3"
          onSubmit={(e) => {
            const f = formValues(e);
            run(() => addMember(id, f.get("email"), f.get("role") as MemberRole));
          }}
        >
          <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Person hinzufügen</h2>
          <Notice error={error} />
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
