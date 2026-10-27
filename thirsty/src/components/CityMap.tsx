"use client";

import { useEffect, useRef } from "react";
import type * as L from "leaflet";
import type { OfferView } from "@/lib/offer";

export type MapPin = { id: string; lat: number; lng: number; label: string; tone: OfferView["tone"]; name: string };

/**
 * Stadtkarte mit Angebots-Pins (Leaflet + OpenStreetMap-Kacheln).
 * Wird erst gerendert, wenn jemand eine Stadt gewählt hat; erst dann lädt der Browser Kacheln von OpenStreetMap.
 */
export function CityMap({ pins, selected, onSelect, me }: { pins: MapPin[]; selected?: string; onSelect: (id: string) => void; me?: { lat: number; lng: number; radiusKm: number } }) {
  const box = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const lib = useRef<typeof L | null>(null);
  const select = useRef(onSelect);
  select.current = onSelect;
  const key = pins.map((p) => p.id).join(",") + (me ? `|${me.lat},${me.lng},${me.radiusKm}` : "");

  // Karte einmal anlegen
  useEffect(() => {
    let dead = false;
    import("leaflet").then((mod) => {
      if (dead || !box.current) return;
      const Lf = (mod.default ?? mod) as typeof L;
      lib.current = Lf;
      const m = Lf.map(box.current, { zoomControl: false, scrollWheelZoom: false, attributionControl: true });
      Lf.control.zoom({ position: "bottomright" }).addTo(m);
      Lf.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>',
      }).addTo(m);
      m.setView([51.16, 10.45], 6);
      map.current = m;
      layer.current = Lf.layerGroup().addTo(m);
      draw(true);
    });
    return () => {
      dead = true;
      map.current?.remove();
      map.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pins neu zeichnen, wenn sich Auswahl oder Angebote ändern
  useEffect(() => draw(false), [key, selected]); // eslint-disable-line react-hooks/exhaustive-deps
  // Bei neuer Stadt auf die Pins zoomen
  useEffect(() => fit(), [key]); // eslint-disable-line react-hooks/exhaustive-deps

  function fit() {
    const m = map.current, Lf = lib.current;
    if (!m || !Lf) return;
    if (me) {
      m.fitBounds(Lf.latLng(me.lat, me.lng).toBounds(me.radiusKm * 2000), { padding: [30, 30] });
      return;
    }
    if (!pins.length) return;
    if (pins.length === 1) m.setView([pins[0].lat, pins[0].lng], 15);
    else m.fitBounds(Lf.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number])), { padding: [70, 70], maxZoom: 15 });
  }

  function draw(first: boolean) {
    const Lf = lib.current, g = layer.current;
    if (!Lf || !g) return;
    g.clearLayers();
    if (me) {
      Lf.circle([me.lat, me.lng], { radius: me.radiusKm * 1000, color: "#ff4d1f", weight: 1.5, fillColor: "#ff4d1f", fillOpacity: 0.06 }).addTo(g);
      Lf.circleMarker([me.lat, me.lng], { radius: 8, color: "#0b0b0d", weight: 3, fillColor: "#ff4d1f", fillOpacity: 1 }).bindTooltip("Du bist hier").addTo(g);
    }
    for (const p of pins) {
      const active = p.id === selected;
      const icon = Lf.divIcon({
        className: "thirsty-pin",
        html: `<span class="pin pin-${p.tone}${active ? " pin-active" : ""}"><b>${esc(p.label)}</b></span>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });
      Lf.marker([p.lat, p.lng], { icon, title: p.name, alt: `${p.name}: ${p.label}`, keyboard: true, zIndexOffset: active ? 1000 : 0 })
        .on("click", () => select.current(p.id))
        .addTo(g);
    }
    if (first) fit();
  }

  return <div ref={box} className="thirsty-map h-full w-full" role="region" aria-label="Karte mit Restaurants und ihren Angeboten" />;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
