"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { animateFadeUp } from "@/lib/scrollAnimations";

gsap.registerPlugin(useGSAP);

type FadeUpProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly as?: "div" | "p" | "span" | "li";
};

export default function FadeUp({
  children,
  className = "",
  as = "div",
}: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as;

  useGSAP(
    () => {
      if (!ref.current) {
        return;
      }
      animateFadeUp([ref.current], ref.current);
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
