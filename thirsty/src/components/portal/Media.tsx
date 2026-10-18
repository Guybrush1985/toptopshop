"use client";

import { useStore, type Photo } from "@/lib/store";
import { addPhotos, deletePhoto } from "@/lib/actions";
import { Notice, formValues, useAction } from "../ui";
import type { TabProps } from "./types";

const KINDS: [Photo["kind"], string, string, boolean][] = [
  ["COVER", "Titelbild", "Großes Bild oben auf deiner Seite und in der Liste.", false],
  ["LOGO", "Logo", "Quadratisch, wird neben dem Namen gezeigt.", false],
  ["GALLERY", "Galerie", "Gerichte, Gastraum, Terrasse. Mehrere möglich.", true],
  ["MENU", "Speisekarte als Bild", "Fotos oder Scans deiner Karte, falls du sie nicht eintippen willst.", true],
];

export function Media({ restaurantId: id }: TabProps) {
  const s = useStore();
  const { error, run, busy } = useAction();
  const photos = s.photos.filter((p) => p.restaurantId === id).sort((a, b) => a.position - b.position);
  return (
    <div className="space-y-6">
      <Notice error={error} />
      <p className="text-sm text-stone-600">Bilder werden beim Hochladen verkleinert. In der Vorschau liegen sie nur in diesem Browser, der Platz reicht für etwa 20 bis 30 Fotos.</p>
      {KINDS.map(([kind, title, hint, multiple]) => (
        <section key={kind} className="card space-y-3">
          <h2 className="font-display text-2xl uppercase tracking-wide text-cream">{title}</h2>
          <p className="text-sm text-stone-600">{hint} JPG, PNG oder WebP.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {photos.filter((p) => p.kind === kind).map((p) => (
              <figure key={p.id} className="relative">
                <img src={p.dataUrl} alt="" className="aspect-square w-full rounded-xl object-cover" />
                <button
                  onClick={() => run(() => deletePhoto(p.id))}
                  className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-red-700 shadow"
                >
                  Löschen
                </button>
              </figure>
            ))}
          </div>
          <form
            className="flex flex-wrap items-center gap-3"
            onSubmit={async (e) => {
              const f = formValues(e);
              await run(() => addPhotos(id, kind, f.files("files")));
              f.form.reset();
            }}
          >
            <input type="file" name="files" accept="image/jpeg,image/png,image/webp" multiple={multiple} required className="text-sm" />
            <button className="btn-secondary" disabled={busy}>Hochladen</button>
          </form>
        </section>
      ))}
    </div>
  );
}
