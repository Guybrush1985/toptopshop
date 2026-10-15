import { requireUser } from "@/lib/auth";
import { createRestaurant } from "@/app/actions/portal";
import { Field, Notice, PageTitle } from "@/components/ui";

export const metadata = { title: "Restaurant anlegen" };

export default async function NewRestaurant({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  await requireUser("/portal/new");
  const { error } = await searchParams;
  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub="Alles Weitere ergänzt du im nächsten Schritt.">Restaurant anlegen</PageTitle>
      <Notice error={error} />
      <form action={createRestaurant} className="card space-y-4">
        <Field label="Name des Restaurants"><input className="input" name="name" required /></Field>
        <Field label="Stadt"><input className="input" name="city" /></Field>
        <button className="btn w-full">Weiter</button>
      </form>
    </div>
  );
}
