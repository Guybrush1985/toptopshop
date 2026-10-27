"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { register } from "@/lib/actions";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { SocialLogin } from "@/components/SocialLogin";
import { localPath } from "@/lib/url";

export default function RegisterPage() {
  const router = useRouter();
  const params = useSearchParams();
  const owner = params.get("rolle") === "restaurant";
  const next = params.get("weiter");
  const { error, busy, run } = useAction();
  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub={owner ? "Lege dein Konto an und danach dein Restaurant." : "Buche Early-Bird-Plätze mit bis zu 50 % Rabatt."}>
        {owner ? "Restaurant registrieren" : "Konto erstellen"}
      </PageTitle>
      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-stone-100 p-1 text-sm font-medium">
        <Link href="/registrieren/" className={`rounded-lg px-3 py-2 text-center ${!owner ? "bg-lime font-semibold text-ink" : "text-stone-600"}`}>Ich bin Gast</Link>
        <Link href="/registrieren/?rolle=restaurant" className={`rounded-lg px-3 py-2 text-center ${owner ? "bg-lime font-semibold text-ink" : "text-stone-600"}`}>Ich habe ein Restaurant</Link>
      </div>
      {!owner && <SocialLogin next={next} />}
      <Notice error={error} />
      <form
        onSubmit={async (e) => {
          const f = formValues(e);
          const ok = await run(async () => {
            await register({ name: f.get("name"), email: f.get("email"), password: f.get("password"), role: owner ? "OWNER" : "GUEST" });
            return true;
          });
          if (ok) router.push(owner ? "/portal/neu/" : localPath(next) ?? "/");
        }}
        className="card space-y-4"
      >
        <Field label="Name"><input className="input" name="name" required autoComplete="name" /></Field>
        <Field label="E-Mail"><input className="input" name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Passwort" hint="Mindestens 8 Zeichen. In der Vorschau nur in diesem Browser gespeichert.">
          <input className="input" name="password" type="password" minLength={8} required autoComplete="new-password" />
        </Field>
        <button className="btn w-full" disabled={busy}>Konto erstellen</button>
      </form>
      <p className="mt-4 text-sm text-stone-600">
        Schon dabei? <Link href={`/login/${next ? `?weiter=${encodeURIComponent(next)}` : ""}`} className="font-medium text-brand-700 underline">Anmelden</Link>
      </p>
    </div>
  );
}
