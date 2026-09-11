"use client";

import { useEffect, useState } from "react";

export type NavTheme = "light" | "dark";

export default function useNavTheme(): NavTheme {
  const [theme, setTheme] = useState<NavTheme>("light");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
    );

    if (sections.length === 0) {
      return;
    }

    let frame = 0;

    const updateTheme = () => {
      const probeY = 72;
      let nextTheme: NavTheme = "light";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          const value = section.dataset.navTheme;
          if (value === "dark" || value === "light") {
            nextTheme = value;
          }
          break;
        }
      }

      setTheme((current) => (current === nextTheme ? current : nextTheme));
    };

    const onScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateTheme();
      });
    };

    updateTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return theme;
}
