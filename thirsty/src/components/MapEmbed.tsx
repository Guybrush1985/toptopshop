export function MapEmbed({ lat, lng, title }: { lat: number; lng: number; title: string }) {
  const d = 0.004;
  const bbox = [lng - d, lat - d / 1.6, lng + d, lat + d / 1.6].join(",");
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200">
      <iframe
        title={`Karte: ${title}`}
        className="h-64 w-full"
        loading="lazy"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
      />
      <a
        className="block bg-stone-50 px-3 py-2 text-xs text-stone-600 underline"
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`}
        target="_blank"
        rel="noreferrer"
      >
        Größere Karte und Route
      </a>
    </div>
  );
}
