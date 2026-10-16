"use client";

import { useStore } from "@/lib/store";
import { addMenuItem, deleteMenuItem } from "@/lib/actions";
import { Field, Notice, formValues, useAction } from "../ui";
import { euro } from "@/lib/format";
import type { TabProps } from "./types";

export function Menu({ restaurantId: id }: TabProps) {
  const s = useStore();
  const { error, run } = useAction();
  const items = s.menu.filter((m) => m.restaurantId === id).sort((a, b) => a.position - b.position);
  const categories = [...new Set(items.map((i) => i.category))];
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <div className="space-y-4">
        {items.length === 0 && <p className="card text-stone-600">Noch keine Gerichte. Aus den Preisen berechnet Thirsty die Early-Bird-Preise für deine Gäste.</p>}
        {categories.map((c) => (
          <section key={c}>
            <h2 className="mb-2 font-semibold uppercase tracking-wide text-stone-500">{c}</h2>
            <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
              {items.filter((i) => i.category === c).map((i) => (
                <li key={i.id} className="flex items-center gap-3 px-4 py-2">
                  <div className="flex-1">
                    <p className="font-medium">{i.name}</p>
                    {i.description && <p className="text-sm text-stone-600">{i.description}</p>}
                  </div>
                  <span className="font-semibold">{euro(i.priceCents)}</span>
                  <button className="btn-danger" onClick={() => run(() => deleteMenuItem(i.id))}>Entfernen</button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <form
        className="card h-fit space-y-3"
        onSubmit={async (e) => {
          const f = formValues(e);
          const ok = await run(async () => {
            await addMenuItem(id, {
              category: f.get("category"), name: f.get("name"), description: f.get("description"),
              price: f.get("price"), allergens: f.get("allergens"), tags: f.all("tags"),
            });
            return true;
          });
          if (ok) {
            const keep = f.get("category");
            f.form.reset();
            (f.form.elements.namedItem("category") as HTMLInputElement).value = keep;
          }
        }}
      >
        <h2 className="text-lg font-bold">Gericht hinzufügen</h2>
        <Notice error={error} />
        <Field label="Kategorie"><input className="input" name="category" list="cats" placeholder="Vorspeisen" required /></Field>
        <datalist id="cats">{[...new Set(["Vorspeisen", "Hauptgerichte", "Desserts", "Getränke", ...categories])].map((c) => <option key={c} value={c} />)}</datalist>
        <Field label="Name"><input className="input" name="name" required /></Field>
        <Field label="Beschreibung"><input className="input" name="description" /></Field>
        <Field label="Preis in €"><input className="input" name="price" inputMode="decimal" placeholder="14,50" required /></Field>
        <Field label="Allergene" hint="z. B. A, C, G"><input className="input" name="allergens" /></Field>
        <div className="flex flex-wrap gap-3 text-sm">
          {["vegetarisch", "vegan", "scharf", "glutenfrei"].map((t) => (
            <label key={t} className="flex items-center gap-1"><input type="checkbox" name="tags" value={t} /> {t}</label>
          ))}
        </div>
        <button className="btn w-full">Hinzufügen</button>
      </form>
    </div>
  );
}
