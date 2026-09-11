"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { animateSplitWords } from "@/lib/scrollAnimations";

gsap.registerPlugin(useGSAP);

type SplitHeadingProps = {
  readonly text: string;
  readonly as?: "h2" | "h3" | "p";
  readonly className?: string;
};

export default function SplitHeading({
  text,
  as = "h2",
  className = "",
}: SplitHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
  const Tag = as;

  useGSAP(
    () => {
      const words =
        headingRef.current?.querySelectorAll<HTMLElement>("[data-split-word]") ??
        [];
      animateSplitWords(Array.from(words), headingRef.current);
    },
    { scope: headingRef },
  );

  return (
    <Tag ref={headingRef as never} className={className}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          data-split-word
          className="mr-[0.28em] inline-block last:mr-0"
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
