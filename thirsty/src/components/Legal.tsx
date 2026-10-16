import type { ReactNode } from "react";

export function Legal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="prose-thirsty mx-auto max-w-2xl space-y-4 text-stone-700">
      <h1 className="text-3xl font-extrabold text-stone-900">{title}</h1>
      {children}
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-4 text-xl font-bold text-stone-900">{children}</h2>;
}
