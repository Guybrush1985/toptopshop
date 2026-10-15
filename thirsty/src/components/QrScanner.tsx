"use client";

import { useEffect, useRef, useState } from "react";

type Detector = { detect(src: HTMLVideoElement): Promise<{ rawValue: string }[]> };
declare global {
  interface Window {
    BarcodeDetector?: new (opts: { formats: string[] }) => Detector;
  }
}

/** Scannt QR-Codes mit der Kamera (BarcodeDetector-API) und schickt den Code an die Check-in-Action. */
export function QrScanner({ restaurantId, action }: { restaurantId: string; action: (f: FormData) => void | Promise<void> }) {
  const video = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && !!window.BarcodeDetector);
  }, []);

  useEffect(() => {
    if (!on || !window.BarcodeDetector) return;
    let stream: MediaStream | undefined;
    let stop = false;
    const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (!video.current) return;
        video.current.srcObject = stream;
        await video.current.play();
        while (!stop) {
          const [hit] = await detector.detect(video.current).catch(() => []);
          if (hit?.rawValue) {
            stop = true;
            const f = new FormData();
            f.set("restaurantId", restaurantId);
            f.set("code", hit.rawValue);
            await action(f);
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
  }, [on, restaurantId, action]);

  if (!supported) {
    return <p className="text-sm text-stone-600">Dieser Browser kann keine QR-Codes scannen. Bitte den sechsstelligen Code unten eingeben.</p>;
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
