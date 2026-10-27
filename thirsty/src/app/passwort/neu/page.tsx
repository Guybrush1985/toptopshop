"use client";

import { useRouter } from "next/navigation";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { ActionError } from "@/lib/errors";
import { useCurrentUser } from "@/lib/store";

/** Neues Passwort setzen (Ziel des Links aus der E-Mail; Supabase meldet den Nutzer dabei an). */
export default function NewPassword() {
  const { error, busy, run } = useAction();
  const router = useRouter();
  const user = useCurrentUser();
  return (
    <div className="mx-auto max-w-md">
      <PageTitle>Neues Passwort</PageTitle>
      <Notice error={error} />
      {!user ? (
        <p className="card">Der Link ist abgelaufen oder wurde schon benutzt. Bitte fordere unter „Passwort vergessen“ einen neuen an.</p>
      ) : (
        <form
          className="card space-y-4"
          onSubmit={(e) => {
            const f = formValues(e);
            run(async () => {
              const pw = f.get("password");
              if (pw.length < 8) throw new ActionError("Das Passwort braucht mindestens 8 Zeichen.");
              if (pw !== f.get("password2")) throw new ActionError("Die Passwörter stimmen nicht überein.");
              const { error: err } = await supabase!.auth.updateUser({ password: pw });
              if (err) throw new ActionError(`Das hat nicht geklappt (${err.message}).`);
              router.replace("/konto/");
            });
          }}
        >
          <Field label="Neues Passwort"><input className="input" name="password" type="password" minLength={8} required autoComplete="new-password" /></Field>
          <Field label="Wiederholen"><input className="input" name="password2" type="password" minLength={8} required autoComplete="new-password" /></Field>
          <button className="btn w-full" disabled={busy}>Speichern</button>
        </form>
      )}
    </div>
  );
}
