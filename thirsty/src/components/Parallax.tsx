"use client";

import { useEffect } from "react";

/**
 * Verschiebt alle Elemente mit `data-parallax="<faktor>"` beim Scrollen.
 * Faktor 0.2 = bewegt sich mit 20 % der Scrollgeschwindigkeit nach unten (wirkt weiter weg),
 * negative Werte bewegen sich gegenläufig. Respektiert „Bewegung reduzieren“.
 */
export function useParallax(deps: unknown[] = []) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    if (!els.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const f = Number(el.dataset.parallax) || 0;
        const host = el.parentElement ?? el;
        const rect = host.getBoundingClientRect();
        // Abstand der Elementmitte zur Bildschirmmitte
        const offset = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-offset * f).toFixed(1)}px, 0)${el.dataset.rotate ? ` rotate(${el.dataset.rotate}deg)` : ""}`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Endloses Laufband mit lauter Schrift. */
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-8">
          <span>{t}</span>
          <span aria-hidden className="text-[.6em]">✺</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-label={items.join(", ")}>
      <div aria-hidden className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
