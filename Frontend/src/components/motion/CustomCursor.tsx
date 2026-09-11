"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { canUseAdvancedMotion } from "@/lib/parallax";
import { prefersReducedMotion } from "@/lib/scrollAnimations";

type CursorMode = "default" | "interactive" | "cta";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => {
      setEnabled(canUseAdvancedMotion() && !prefersReducedMotion());
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) {
      document.documentElement.classList.remove("hasCustomCursor");
      return;
    }

    document.documentElement.classList.add("hasCustomCursor");
    const cursor = cursorRef.current;
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const quickX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power2.out" });
    const quickY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power2.out" });

    const setMode = (mode: CursorMode) => {
      cursor.dataset.mode = mode;
      const scale = mode === "cta" ? 2.2 : mode === "interactive" ? 1.55 : 1;
      gsap.to(cursor, { scale, duration: 0.25, ease: "power2.out" });
    };

    const onMove = (event: MouseEvent) => {
      quickX(event.clientX);
      quickY(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }
      if (target.closest("a[href='#support'], a.bg-secondary, button[type='submit']")) {
        setMode("cta");
        return;
      }
      if (target.closest("a, button, [data-cursor='interactive']")) {
        setMode("interactive");
      }
    };

    const onOut = (event: MouseEvent) => {
      const related = event.relatedTarget as HTMLElement | null;
      if (related?.closest("a, button, [data-cursor='interactive']")) {
        return;
      }
      setMode("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("hasCustomCursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      data-mode="default"
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden h-3 w-3 rounded-full bg-secondary mix-blend-difference lg:block"
      aria-hidden="true"
    />
  );
}
