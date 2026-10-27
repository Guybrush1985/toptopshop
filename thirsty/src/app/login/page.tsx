"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { login } from "@/lib/actions";
import { DEMO_LOGINS } from "@/lib/store";
import { REMOTE } from "@/lib/config";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { SocialLogin } from "@/components/SocialLogin";
import { useCurrentUser } from "@/lib/store";
import { useEffect } from "react";
import { localPath } from "@/lib/url";

export default function LoginPage() {
  const router = useRouter();
  const next = useSearchParams().get("weiter");
  const { error, busy, run } = useAction();
  const me = useCurrentUser();
  // Zurück von Google/Apple: angemeldet, also weiter zum Ziel
  useEffect(() => {
    if (me) router.replace(localPath(next) ?? (me.role === "OWNER" ? "/portal/" : "/"));
  }, [me]); // eslint-disable-line react-hooks/exhaustive-deps
  const go = async (email: string, password: string) => {
    const user = await run(() => login(email, password));
    if (user) router.push(localPath(next) ?? (user.role === "OWNER" ? "/portal/" : "/"));
  };
  return (
    <div className="mx-auto max-w-md">
      <PageTitle>Anmelden</PageTitle>
      <SocialLogin next={next} />
      <Notice error={error} />
      <form
        onSubmit={(e) => {
          const f = formValues(e);
          go(f.get("email"), f.get("password"));
        }}
        className="card space-y-4"
      >
        <Field label="E-Mail"><input className="input" name="email" type="email" required autoComplete="email" /></Field>
        <Field label="Passwort"><input className="input" name="password" type="password" required autoComplete="current-password" /></Field>
        <button className="btn w-full" disabled={busy}>Anmelden</button>
      </form>
      {!REMOTE && <div className="card mt-4 space-y-2 bg-brand-50">
        <p className="text-sm font-medium">Ausprobieren ohne Registrierung</p>
        <div className="flex flex-wrap gap-2">
          {DEMO_LOGINS.map((d) => (
            <button key={d.email} type="button" className="btn-secondary" onClick={() => go(d.email, "thirsty123")}>{d.label}</button>
          ))}
        </div>
        <p className="text-xs text-stone-600">Tipp: Als Gast buchen, abmelden, als Restaurant einchecken. Beides funktioniert in diesem Browser.</p>
      </div>}
      <p className="mt-4 text-sm text-stone-600">
        Noch kein Konto? <Link href={`/registrieren/${next ? `?weiter=${encodeURIComponent(next)}` : ""}`} className="font-medium text-brand-700 underline">Registrieren</Link>
        {REMOTE && <> · <Link href="/passwort/" className="underline">Passwort vergessen?</Link></>}
      </p>
    </div>
  );
}
