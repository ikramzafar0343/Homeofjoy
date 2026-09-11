import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "@/lib/scrollAnimations";

gsap.registerPlugin(ScrollTrigger);

export function canUseAdvancedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  if (prefersReducedMotion()) {
    return false;
  }
  return window.matchMedia("(min-width: 1024px)").matches;
}

export function applyParallax(
  element: HTMLElement | null,
  trigger: Element | null,
  strength = 0.14,
): ScrollTrigger | null {
  if (!element || !trigger || !canUseAdvancedMotion()) {
    return null;
  }

  const clamped = Math.min(0.2, Math.max(0.1, strength));
  const travel = clamped * 100;

  gsap.set(element, { yPercent: -travel / 2, force3D: true });

  return ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      gsap.set(element, {
        yPercent: -travel / 2 + self.progress * travel,
        force3D: true,
      });
    },
  });
}
