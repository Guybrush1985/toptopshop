"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createRestaurant } from "@/lib/actions";
import { aiLookup, applyAi, type AiRestaurant } from "@/lib/ai";
import { RequireUser } from "@/components/Shell";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { PRICE_LEVELS } from "@/lib/format";

export default function NeuPage() {
  return <RequireUser><Neu /></RequireUser>;
}

function Neu() {
  const router = useRouter();
  const { error, run, busy } = useAction();
  const [input, setInput] = useState<{ name: string; city: string }>();
  const [hit, setHit] = useState<AiRestaurant>();
  const [note, setNote] = useState<string>();

  const finish = async (useAi: boolean) => {
    const id = await run(async () => {
      const id = await createRestaurant(input!.name, hit?.city || input!.city);
      if (useAi && hit) await applyAi(id, hit);
      return id;
    });
    if (id) router.push(`/portal/restaurant/?id=${id}&tab=profil`);
  };

  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub="Wir suchen dein Restaurant und füllen das Profil auf Wunsch für dich vor.">Restaurant anlegen</PageTitle>
      <Notice error={error} />
      {!input || busy && !hit && !note ? (
        <form
          className="card space-y-4"
          onSubmit={async (e) => {
            const f = formValues(e);
            const v = { name: f.get("name").trim(), city: f.get("city").trim() };
            setInput(v);
            setNote(undefined);
            try {
              const r = await run(() => aiLookup(v.name, v.city));
              if (r?.found) setHit(r);
              else setNote(r ? "Wir haben dazu nichts Eindeutiges gefunden." : undefined);
              if (!r) setNote("Kein Vorschlag möglich.");
            } catch { setNote("Kein Vorschlag möglich."); }
          }}
        >
          <Field label="Name des Restaurants"><input className="input" name="name" required defaultValue={input?.name} /></Field>
          <Field label="Stadt"><input className="input" name="city" required defaultValue={input?.city} /></Field>
          <button className="btn w-full" disabled={busy}>{busy ? "Suche dein Restaurant …" : "Weiter"}</button>
        </form>
      ) : hit ? (
        <div className="card space-y-4">
          <h2 className="display text-3xl text-cream">Ist das dein Restaurant?</h2>
          <div className="rounded-2xl border border-white/10 p-4 text-sm">
            <p className="text-lg font-semibold text-cream">{hit.name || input.name}</p>
            <p className="text-cream/70">{[hit.street, [hit.postalCode, hit.city].filter(Boolean).join(" ")].filter(Boolean).join(", ")}</p>
            <p className="text-cream/70">{[hit.cuisine, PRICE_LEVELS.find((p) => p.level === hit.priceLevel)?.label, hit.website].filter(Boolean).join(" · ")}</p>
            {hit.tagline && <p className="mt-2 text-cream/80">{hit.tagline}</p>}
          </div>
          <p className="text-xs text-cream/50">Vorschlag der KI aus öffentlichen Quellen. Bitte prüfe die Angaben danach im Profil.</p>
          <button className="btn w-full" disabled={busy} onClick={() => finish(true)}>Ja, Daten füllen</button>
          <button className="btn-secondary w-full" disabled={busy} onClick={() => finish(false)}>Nein, manuell eingeben</button>
        </div>
      ) : (
        <div className="card space-y-4">
          <p className="text-cream/80">{note} Du kannst die Daten gleich selbst eintragen oder es im Profil später noch einmal mit der KI versuchen.</p>
          <button className="btn w-full" disabled={busy} onClick={() => finish(false)}>{input.name} anlegen</button>
          <button className="btn-secondary w-full" onClick={() => { setInput(undefined); setNote(undefined); }}>Name ändern</button>
        </div>
      )}
    </div>
  );
}
