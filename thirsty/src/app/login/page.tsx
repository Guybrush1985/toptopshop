import Link from "next/link";
import { login } from "../actions/auth";
import { Field, Notice, PageTitle } from "@/components/ui";

export const metadata = { title: "Anmelden" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
  const { error, next } = await searchParams;
  return (
    <div className="mx-auto max-w-md">
      <PageTitle>Anmelden</PageTitle>
      <Notice error={error} />
      <form action={login} className="card space-y-4">
        <input type="hidden" name="next" value={next ?? ""} />
        <Field label="E-Mail"><input className="input" name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Passwort"><input className="input" name="password" type="password" required autoComplete="current-password" /></Field>
        <button className="btn w-full">Anmelden</button>
      </form>
      <p className="mt-4 text-sm text-stone-600">
        Noch kein Konto? <Link href={`/register${next ? `?next=${encodeURIComponent(next)}` : ""}`} className="font-medium text-brand-700 underline">Registrieren</Link>
      </p>
    </div>
  );
}
