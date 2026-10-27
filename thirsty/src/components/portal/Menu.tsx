"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import { aiReadMenu, type AiMenuItem } from "@/lib/ai";
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
        {items.length === 0 && <p className="card text-stone-600">Noch keine Gerichte. Aus den Preisen berechnet Firsty die Early-Bird-Preise für deine Gäste.</p>}
        {categories.map((c) => (
          <section key={c}>
            <h2 className="mb-2 font-semibold uppercase tracking-wide text-stone-500">{c}</h2>
            <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-ink-2">
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
      <div className="space-y-6">
      <MenuImport restaurantId={id} />
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
        <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Gericht hinzufügen</h2>
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
    </div>
  );
}

function MenuImport({ restaurantId: id }: { restaurantId: string }) {
  const { error, run, busy } = useAction();
  const [file, setFile] = useState<File>();
  const [items, setItems] = useState<(AiMenuItem & { on: boolean })[]>();
  const [done, setDone] = useState<string>();
  return (
    <div className="card space-y-3">
      <h2 className="font-display text-2xl uppercase tracking-wide text-cream">Karte hochladen</h2>
      <p className="text-sm text-cream/70">PDF oder Foto deiner Speisekarte. Die KI liest Gerichte und Preise aus, du prüfst sie vor dem Übernehmen.</p>
      <Notice error={error} success={done} />
      <input className="input" type="file" accept="application/pdf,image/jpeg,image/png,image/webp" onChange={(e) => { setFile(e.target.files?.[0]); setItems(undefined); setDone(undefined); }} />
      <button
        type="button"
        className="btn w-full"
        disabled={!file || busy}
        onClick={async () => {
          const r = await run(() => aiReadMenu(file!));
          if (r) setItems(r.map((i) => ({ ...i, on: true })));
        }}
      >
        {busy && !items ? "Liest Karte …" : "Mit KI auslesen"}
      </button>
      {items && (
        <>
          {items.length === 0 && <p className="text-sm text-cream/70">Keine Gerichte erkannt. Ein schärferes Foto hilft.</p>}
          <ul className="max-h-72 space-y-1 overflow-auto text-sm">
            {items.map((it, n) => (
              <li key={n}>
                <label className="flex items-start gap-2">
                  <input type="checkbox" checked={it.on} onChange={() => setItems(items.map((x, k) => (k === n ? { ...x, on: !x.on } : x)))} />
                  <span className="flex-1"><span className="text-cream/50">{it.category} · </span>{it.name}</span>
                  <span className="font-semibold">{it.price} €</span>
                </label>
              </li>
            ))}
          </ul>
          {items.some((i) => i.on) && (
            <button
              type="button"
              className="btn-secondary w-full"
              disabled={busy}
              onClick={async () => {
                const pick = items.filter((i) => i.on);
                const ok = await run(async () => {
                  for (const i of pick) {
                    await addMenuItem(id, {
                      category: i.category || "Speisen", name: i.name, description: i.description ?? "",
                      price: String(i.price).replace(/[^0-9,.]/g, ""), allergens: i.allergens ?? "", tags: [],
                    });
                  }
                  return true;
                });
                if (ok) { setItems(undefined); setDone(`${pick.length} Gerichte übernommen.`); }
              }}
            >
              {items.filter((i) => i.on).length} Gerichte übernehmen
            </button>
          )}
        </>
      )}
    </div>
  );
}
