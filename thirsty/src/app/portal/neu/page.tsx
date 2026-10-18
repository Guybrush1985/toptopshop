"use client";

import { useRouter } from "next/navigation";
import { createRestaurant } from "@/lib/actions";
import { RequireUser } from "@/components/Shell";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";

export default function NeuPage() {
  return <RequireUser><Neu /></RequireUser>;
}

function Neu() {
  const router = useRouter();
  const { error, run } = useAction();
  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub="Alles Weitere ergänzt du im nächsten Schritt.">Restaurant anlegen</PageTitle>
      <Notice error={error} />
      <form
        className="card space-y-4"
        onSubmit={async (e) => {
          const f = formValues(e);
          const id = await run(() => createRestaurant(f.get("name"), f.get("city")));
          if (id) router.push(`/portal/restaurant/?id=${id}&tab=profil`);
        }}
      >
        <Field label="Name des Restaurants"><input className="input" name="name" required /></Field>
        <Field label="Stadt"><input className="input" name="city" /></Field>
        <button className="btn w-full">Weiter</button>
      </form>
    </div>
  );
}
