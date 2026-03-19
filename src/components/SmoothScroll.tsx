"use client";

import { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let lenis: any = null;
    let destroyed = false;

    async function init() {
      const Lenis = (await import("@studio-freight/lenis")).default;
      if (destroyed) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        if (destroyed) return;
        lenis?.raf(time);
        rafId.current = requestAnimationFrame(raf);
      }

      rafId.current = requestAnimationFrame(raf);
    }

    init();

    return () => {
      destroyed = true;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
