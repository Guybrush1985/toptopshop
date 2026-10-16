"use client";

import { useState } from "react";
import { Field, Notice, PageTitle, formValues, useAction } from "@/components/ui";
import { REMOTE, SITE_URL } from "@/lib/config";
import { supabase } from "@/lib/supabase";
import { ActionError } from "@/lib/errors";

/** Passwort vergessen: Link zum Zurücksetzen per E-Mail. */
export default function ForgotPassword() {
  const { error, busy, run } = useAction();
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-md">
      <PageTitle sub="Wir schicken dir einen Link, mit dem du ein neues Passwort setzt.">Passwort vergessen</PageTitle>
      <Notice error={error} success={sent ? "Wenn es zu dieser E-Mail ein Konto gibt, ist der Link unterwegs. Schau auch im Spam-Ordner nach." : undefined} />
      {REMOTE ? (
        <form
          className="card space-y-4"
          onSubmit={(e) => {
            const f = formValues(e);
            run(async () => {
              const { error: err } = await supabase!.auth.resetPasswordForEmail(f.get("email").trim().toLowerCase(), { redirectTo: `${SITE_URL}/passwort/neu/` });
              if (err && /rate limit/i.test(err.message)) throw new ActionError("Zu viele Versuche. Bitte warte kurz.");
              setSent(true);
            });
          }}
        >
          <Field label="E-Mail"><input className="input" name="email" type="email" required autoComplete="email" /></Field>
          <button className="btn w-full" disabled={busy}>Link schicken</button>
        </form>
      ) : (
        <p className="card">In der Vorschau gibt es keine E-Mails. Die Demo-Konten haben das Passwort „thirsty123“.</p>
      )}
    </div>
  );
}
