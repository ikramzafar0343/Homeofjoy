"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type ImpactStatCounterProps = {
  value: number;
  suffix: string;
  animateKey: string;
};

function formatCount(value: number): string {
  return Math.round(value).toLocaleString("en-US");
}

export default function ImpactStatCounter({
  value,
  suffix,
  animateKey,
}: ImpactStatCounterProps) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = valueRef.current;
      if (!el) {
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        el.textContent = `${formatCount(value)}${suffix}`;
        return;
      }

      const state = { current: 0 };
      el.textContent = `0${suffix}`;

      gsap.to(state, {
        current: value,
        duration: 1.35,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${formatCount(state.current)}${suffix}`;
        },
      });
    },
    { dependencies: [animateKey, value, suffix], revertOnUpdate: true },
  );

  return (
    <span ref={valueRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}
