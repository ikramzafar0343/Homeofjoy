"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "@/lib/scrollAnimations";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function SmoothScrollProvider() {
  useEffect(() => {
    const reduced = prefersReducedMotion();

    // Native smooth scrolling conflicts with ScrollTrigger pinning, so anchor
    // easing is done with ScrollToPlugin below rather than by the browser.
    document.documentElement.style.scrollBehavior = "auto";

    // Mobile browsers fire resize as the address bar collapses; refreshing
    // pins mid-scroll is what makes sections jump around on phones.
    ScrollTrigger.config({ ignoreMobileResize: true });

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const destination = document.querySelector(hash);
      if (!destination) {
        return;
      }

      event.preventDefault();

      if (reduced) {
        destination.scrollIntoView();
        ScrollTrigger.refresh();
        return;
      }

      gsap.to(window, {
        duration: 1,
        scrollTo: { y: destination, offsetY: 72 },
        ease: "power2.out",
        onComplete: () => ScrollTrigger.refresh(),
      });
    };

    document.addEventListener("click", onClick);
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onClick);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
