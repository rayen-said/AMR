"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, stagger } from "animejs";

export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("motion-ready");

    const heroItems = document.querySelectorAll("[data-hero-item]");
    if (heroItems.length) {
      animate(heroItems, { opacity: [0, 1], translateY: [28, 0], duration: 800, delay: stagger(110), ease: "out(3)" });
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        animate(element, { opacity: [0, 1], translateY: [22, 0], duration: 700, ease: "out(3)" });
        observer.unobserve(element);
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));

    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-scene]"));
    let animationFrame = 0;

    const updateScenes = () => {
      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const scrollDistance = Math.max(scene.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));

        scene.style.setProperty("--scene-progress", progress.toFixed(3));
        scene.style.setProperty("--scene-progress-pct", `${(progress * 100).toFixed(2)}%`);
        scene.style.setProperty("--scene-scale", (1 + progress * 0.075).toFixed(4));
        scene.style.setProperty("--scene-shift", `${(progress * -46).toFixed(2)}px`);
      });
      animationFrame = 0;
    };

    const requestSceneUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScenes);
    };

    updateScenes();
    window.addEventListener("scroll", requestSceneUpdate, { passive: true });
    window.addEventListener("resize", requestSceneUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestSceneUpdate);
      window.removeEventListener("resize", requestSceneUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);
  return null;
}
