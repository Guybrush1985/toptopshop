import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { deletePhoto, uploadPhoto } from "@/app/actions/portal";
import { Notice } from "@/components/ui";

const KINDS = [
  ["COVER", "Titelbild", "Großes Bild oben auf deiner Seite und in der Liste.", false],
  ["LOGO", "Logo", "Quadratisch, wird neben dem Namen gezeigt.", false],
  ["GALLERY", "Galerie", "Gerichte, Gastraum, Terrasse. Mehrere möglich.", true],
  ["MENU", "Speisekarte als Bild", "Fotos oder Scans deiner Karte, falls du sie nicht eintippen willst.", true],
] as const;

export default async function MediaPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string }> }) {
  const { id } = await params;
  const { error } = await searchParams;
  await requireMember(id, ["OWNER", "MANAGER"]);
  const photos = await db.photo.findMany({ where: { restaurantId: id }, orderBy: { position: "asc" } });
  return (
    <div className="space-y-6">
      <Notice error={error} />
      {KINDS.map(([kind, title, hint, multiple]) => (
        <section key={kind} className="card space-y-3">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-stone-600">{hint} JPG, PNG oder WebP, höchstens 5 MB.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {photos.filter((p) => p.kind === kind).map((p) => (
              <figure key={p.id} className="relative">
                <img src={p.url} alt="" className="aspect-square w-full rounded-xl object-cover" />
                <form action={deletePhoto} className="absolute right-2 top-2">
                  <input type="hidden" name="photoId" value={p.id} />
                  <button className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-red-700 shadow">Löschen</button>
                </form>
              </figure>
            ))}
          </div>
          <form action={uploadPhoto} className="flex flex-wrap items-center gap-3">
            <input type="hidden" name="restaurantId" value={id} />
            <input type="hidden" name="kind" value={kind} />
            <input type="file" name="files" accept="image/jpeg,image/png,image/webp" multiple={multiple} required className="text-sm" />
            <button className="btn-secondary">Hochladen</button>
          </form>
        </section>
      ))}
    </div>
  );
}
