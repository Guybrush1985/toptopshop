"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import { db } from "@/lib/db";
import { createSession, destroySession } from "@/lib/auth";

const safeNext = (n: FormDataEntryValue | null, fallback: string) => {
  const s = typeof n === "string" ? n : "";
  return s.startsWith("/") && !s.startsWith("//") ? s : fallback;
};

const registerSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an."),
  email: z.string().trim().toLowerCase().email("Bitte gib eine gültige E-Mail-Adresse an."),
  password: z.string().min(8, "Das Passwort braucht mindestens 8 Zeichen."),
  role: z.enum(["GUEST", "OWNER"]),
});

export async function register(form: FormData) {
  const parsed = registerSchema.safeParse(Object.fromEntries(form));
  const back = `/register?role=${form.get("role") ?? "GUEST"}`;
  if (!parsed.success) redirect(`${back}&error=${encodeURIComponent(parsed.error.issues[0].message)}`);
  const { name, email, password, role } = parsed.data;
  if (await db.user.findUnique({ where: { email } })) {
    redirect(`${back}&error=${encodeURIComponent("Für diese E-Mail gibt es schon ein Konto.")}`);
  }
  const user = await db.user.create({
    data: { name, email, role, passwordHash: await bcrypt.hash(password, 10) },
  });
  await createSession(user.id);
  redirect(role === "OWNER" ? "/portal" : safeNext(form.get("next"), "/"));
}

export async function login(form: FormData) {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  const next = safeNext(form.get("next"), "");
  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    redirect(`/login?error=${encodeURIComponent("E-Mail oder Passwort stimmt nicht.")}&next=${encodeURIComponent(next)}`);
  }
  await createSession(user.id);
  redirect(next || (user.role === "OWNER" ? "/portal" : "/"));
}

export async function logout() {
  await destroySession();
  redirect("/");
}
