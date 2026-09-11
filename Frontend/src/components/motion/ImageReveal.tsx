"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { animateImageReveal } from "@/lib/scrollAnimations";

gsap.registerPlugin(useGSAP);

type ImageRevealProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export default function ImageReveal({
  children,
  className = "",
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      animateImageReveal(ref.current, ref.current);
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}
