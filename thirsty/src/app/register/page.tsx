import Link from "next/link";
import { register } from "../actions/auth";
import { Field, Notice, PageTitle } from "@/components/ui";

export const metadata = { title: "Registrieren" };

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ error?: string; role?: string; next?: string }> }) {
  const { error, role, next } = await searchParams;
  const owner = role === "OWNER";
  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub={owner ? "Lege dein Konto an und danach dein Restaurant." : "Buche Early-Bird-Plätze mit 50 % Rabatt."}>
        {owner ? "Restaurant registrieren" : "Konto erstellen"}
      </PageTitle>
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1 text-sm font-medium">
        <Link href="/register" className={`rounded-lg px-3 py-2 text-center ${!owner ? "bg-white shadow-sm" : "text-stone-600"}`}>Ich bin Gast</Link>
        <Link href="/register?role=OWNER" className={`rounded-lg px-3 py-2 text-center ${owner ? "bg-white shadow-sm" : "text-stone-600"}`}>Ich habe ein Restaurant</Link>
      </div>
      <Notice error={error} />
      <form action={register} className="card space-y-4">
        <input type="hidden" name="role" value={owner ? "OWNER" : "GUEST"} />
        <input type="hidden" name="next" value={next ?? ""} />
        <Field label="Name"><input className="input" name="name" required autoComplete="name" /></Field>
        <Field label="E-Mail"><input className="input" name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Passwort" hint="Mindestens 8 Zeichen."><input className="input" name="password" type="password" minLength={8} required autoComplete="new-password" /></Field>
        <button className="btn w-full">Konto erstellen</button>
      </form>
      <p className="mt-4 text-sm text-stone-600">
        Schon dabei? <Link href="/login" className="font-medium text-brand-700 underline">Anmelden</Link>
      </p>
    </div>
  );
}
