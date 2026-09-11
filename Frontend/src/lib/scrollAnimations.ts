import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function animateSplitWords(
  words: HTMLElement[],
  trigger: Element | null,
): void {
  if (words.length === 0 || !trigger) {
    return;
  }

  if (prefersReducedMotion()) {
    gsap.set(words, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    words,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 78%",
        once: true,
      },
    },
  );
}

export function animateFadeUp(
  elements: HTMLElement[] | NodeListOf<Element>,
  trigger: Element | null,
): void {
  const nodes = Array.from(elements) as HTMLElement[];
  if (nodes.length === 0 || !trigger) {
    return;
  }

  if (prefersReducedMotion()) {
    gsap.set(nodes, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    nodes,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        once: true,
      },
    },
  );
}

export function animateImageReveal(
  element: HTMLElement | null,
  trigger: Element | null,
): void {
  if (!element || !trigger) {
    return;
  }

  if (prefersReducedMotion()) {
    gsap.set(element, {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
    });
    return;
  }

  gsap.fromTo(
    element,
    {
      opacity: 0.65,
      scale: 1.08,
      clipPath: "inset(0 0 100% 0)",
    },
    {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 75%",
        once: true,
      },
    },
  );
}
