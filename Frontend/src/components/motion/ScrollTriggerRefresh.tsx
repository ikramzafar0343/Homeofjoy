"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Recalculates pin distances once the 75% root scale, webfonts and lazily
 * mounted sections have settled.
 *
 * Resize is intentionally not handled here: ScrollTrigger already refreshes on
 * resize, and a second refresh in the same frame re-measures pins that are
 * mid-update, which makes pinned sections jump.
 */
export default function ScrollTriggerRefresh() {
  useEffect(() => {
    let raf = 0;
    let timeoutId = 0;

    const refresh = () => {
      ScrollTrigger.sort();
      // `safe` defers the refresh until scrolling has stopped, so pins are
      // never re-measured underneath the user mid-scroll.
      ScrollTrigger.refresh(true);
    };

    const scheduleRefresh = () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeoutId);
      raf = window.requestAnimationFrame(() => {
        timeoutId = window.setTimeout(refresh, 80);
      });
    };

    scheduleRefresh();
    window.addEventListener("load", scheduleRefresh);
    window.addEventListener("hojPreloaderComplete", scheduleRefresh);
    document.fonts?.ready?.then(scheduleRefresh);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", scheduleRefresh);
      window.removeEventListener("hojPreloaderComplete", scheduleRefresh);
    };
  }, []);

  return null;
}
