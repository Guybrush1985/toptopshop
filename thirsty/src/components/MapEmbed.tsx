"use client";

import { useState } from "react";

/** OpenStreetMap-Karte, die erst nach Klick lädt (keine Verbindung zu Dritten ohne Zustimmung). */
export function MapEmbed({ lat, lng, title }: { lat: number; lng: number; title: string }) {
  const [on, setOn] = useState(false);
  const d = 0.004;
  const bbox = [lng - d, lat - d / 1.6, lng + d, lat + d / 1.6].join(",");
  return (
    <div className="overflow-hidden rounded-xl border border-stone-200">
      {on ? (
        <iframe
          title={`Karte: ${title}`}
          className="h-64 w-full"
          loading="lazy"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="flex h-64 w-full flex-col items-center justify-center gap-2 bg-stone-100 text-sm text-stone-600 hover:bg-stone-200">
          <span className="btn-secondary">Karte anzeigen</span>
          <span className="max-w-xs text-center text-xs">Lädt Kartenmaterial von OpenStreetMap. Dabei wird deine IP-Adresse an die OpenStreetMap Foundation übertragen.</span>
        </button>
      )}
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
