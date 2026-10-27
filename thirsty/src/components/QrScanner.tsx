"use client";

import { useEffect, useRef, useState } from "react";

type Detector = { detect(src: HTMLVideoElement): Promise<{ rawValue: string }[]> };
declare global {
  interface Window {
    BarcodeDetector?: new (opts: { formats: string[] }) => Detector;
  }
}

/**
 * Fallback ohne BarcodeDetector (iOS-Safari/WKWebView, Firefox): Videobild auf ein Canvas zeichnen und mit jsQR lesen.
 * jsQR wird erst beim Öffnen der Kamera nachgeladen.
 */
async function canvasDetector(): Promise<Detector> {
  const { default: jsQR } = await import("jsqr");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  return {
    async detect(v) {
      const w = v.videoWidth, h = v.videoHeight;
      if (!w || !h) return [];
      const scale = Math.min(1, 640 / Math.max(w, h));
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const hit = jsQR(img.data, img.width, img.height, { inversionAttempts: "dontInvert" });
      return hit?.data ? [{ rawValue: hit.data }] : [];
    },
  };
}

/** Scannt QR-Codes mit der Kamera (BarcodeDetector-API, sonst jsQR) und gibt den Inhalt an onCode weiter. */
export function QrScanner({ onCode }: { onCode: (code: string) => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia);
  }, []);

  useEffect(() => {
    if (!on) return;
    let stream: MediaStream | undefined;
    let stop = false;
    (async () => {
      try {
        const detector = window.BarcodeDetector ? new window.BarcodeDetector({ formats: ["qr_code"] }) : await canvasDetector();
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (!video.current) return;
        video.current.srcObject = stream;
        await video.current.play();
        while (!stop) {
          const [hit] = await detector.detect(video.current).catch(() => []);
          if (hit?.rawValue) {
            stop = true;
            setOn(false);
            onCode(hit.rawValue);
            break;
          }
          await new Promise((r) => setTimeout(r, 250));
        }
      } catch {
        setOn(false);
      }
    })();
    return () => {
      stop = true;
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [on, onCode]);

  if (!supported) {
    return <p className="text-sm text-stone-600">Auf diesem Gerät ist keine Kamera verfügbar. Bitte den sechsstelligen Code unten eingeben.</p>;
  }
  return on ? (
    <div className="space-y-2">
      <video ref={video} className="aspect-square w-full rounded-xl bg-black object-cover" muted playsInline />
      <button type="button" onClick={() => setOn(false)} className="btn-secondary w-full">Kamera schließen</button>
    </div>
  ) : (
    <button type="button" onClick={() => setOn(true)} className="btn w-full">Kamera öffnen</button>
  );
}
