"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const routeFrameRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    cancelAnimationFrame(routeFrameRef.current);
    routeFrameRef.current = requestAnimationFrame(() => {
      const hashTarget = window.location.hash;
      const target = hashTarget && document.querySelector(hashTarget) ? hashTarget : 0;

      if (lenisRef.current) {
        lenisRef.current.resize();
        lenisRef.current.scrollTo(target, { immediate: true, force: true });
      } else if (typeof target === "string") {
        document.querySelector(target)?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });

    return () => cancelAnimationFrame(routeFrameRef.current);
  }, [pathname]);

  return null;
}
