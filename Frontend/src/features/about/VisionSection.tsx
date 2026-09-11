"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const visionSegments = [
  { text: "Protect children", tone: "navy", highlight: true },
  { text: ", ", highlight: false },
  { text: "break the cycle", tone: "navy", highlight: true },
  { text: " of ", highlight: false },
  { text: "poverty and child labour", tone: "blue", highlight: true },
  { text: ", provide ", highlight: false },
  { text: "opportunities through education", tone: "blue", highlight: true },
  { text: ", and ", highlight: false },
  { text: "bring hope", tone: "orange", highlight: true },
  { text: " through ", highlight: false },
  { text: "compassionate service", tone: "navy", highlight: true },
  { text: " and the ", highlight: false },
  { text: "message of Christ", tone: "orange", highlight: true },
  { text: ".", highlight: false },
] as const;

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const highlights = gsap.utils.toArray<HTMLElement>(
        statementRef.current?.querySelectorAll("[data-vision-highlight]") ?? [],
      );

      if (highlights.length === 0) {
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        highlights.forEach((node) => node.classList.add("isActive"));
        return;
      }

      const triggers = highlights.map((node) =>
        ScrollTrigger.create({
          trigger: node,
          start: "top 82%",
          onEnter: () => node.classList.add("isActive"),
          onEnterBack: () => node.classList.add("isActive"),
          onLeaveBack: () => node.classList.remove("isActive"),
        }),
      );

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="vision"
      data-nav-theme="light"
      className="relative bg-background pb-10 pt-16 md:pb-12 md:pt-20 lg:pb-14 lg:pt-24"
    >
      <div className="siteContainer">
        <p className="typeLabel mb-5 md:mb-7">Our Vision</p>
        <h2 className="sr-only">
          Protect children, break the cycle of poverty and child labour, provide
          opportunities through education, and bring hope through compassionate service
          and the message of Christ.
        </h2>
        <p
          ref={statementRef}
          className="max-w-4xl text-[1.65rem] font-normal leading-[1.35] tracking-[0.015em] text-mutedGray sm:text-[1.85rem] md:text-[2.15rem] lg:text-[2.45rem]"
        >
          {visionSegments.map((segment, index) => {
            if (!segment.highlight) {
              return (
                <span key={`link-${index}`} className="text-mutedGray/55">
                  {segment.text}
                </span>
              );
            }

            const toneClass =
              segment.tone === "blue"
                ? "[&.isActive]:text-primary"
                : segment.tone === "orange"
                  ? "[&.isActive]:text-secondary"
                  : "[&.isActive]:text-navy";

            return (
              <span
                key={`${segment.text}-${index}`}
                data-vision-highlight
                className={`text-mutedGray/45 transition-colors duration-500 ease-out ${toneClass}`}
              >
                {segment.text}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
