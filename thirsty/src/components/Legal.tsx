import type { ReactNode } from "react";

export function Legal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="prose-thirsty mx-auto max-w-2xl space-y-4 text-stone-700">
      <h1 className="display text-5xl text-cream sm:text-6xl">{title}</h1>
      {children}
    </article>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-4 display text-3xl text-cream text-stone-900">{children}</h2>;
}
