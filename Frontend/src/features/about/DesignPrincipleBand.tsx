"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { organizationContent } from "@/content/organizationContent";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const promiseSegments = [
  { text: "A Home of Joy", tone: "navy", highlight: true },
  { text: " for ", highlight: false },
  { text: "Those Who Need Hope", tone: "blue", highlight: true },
  { text: ".", highlight: false },
] as const;

export default function DesignPrincipleBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const highlights = gsap.utils.toArray<HTMLElement>(
        statementRef.current?.querySelectorAll("[data-promise-highlight]") ?? [],
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

      const arcItems = gsap.utils.toArray<HTMLElement>(
        sectionRef.current?.querySelectorAll("[data-promise-arc]") ?? [],
      );

      const arcTriggers = arcItems.map((node) =>
        ScrollTrigger.create({
          trigger: node,
          start: "top 88%",
          onEnter: () => node.classList.add("isActive"),
          onEnterBack: () => node.classList.add("isActive"),
          onLeaveBack: () => node.classList.remove("isActive"),
        }),
      );

      return () => {
        triggers.forEach((trigger) => trigger.kill());
        arcTriggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-nav-theme="light"
      className="relative overflow-hidden bg-white pb-16 pt-10 md:pb-20 md:pt-12 lg:pb-24 lg:pt-14"
    >
      <div className="siteContainer">
        <p className="typeLabel mb-5 md:mb-7">Our Promise</p>
        <h2 className="sr-only">{organizationContent.designPrinciple}</h2>
        <p
          ref={statementRef}
          className="w-full whitespace-nowrap text-[clamp(0.92rem,2.35vw,1.85rem)] font-normal uppercase leading-none tracking-[0.08em] text-mutedGray"
        >
          {promiseSegments.map((segment, index) => {
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
                : "[&.isActive]:text-navy";

            return (
              <span
                key={`${segment.text}-${index}`}
                data-promise-highlight
                className={`text-mutedGray/45 transition-colors duration-500 ease-out ${toneClass}`}
              >
                {segment.text}
              </span>
            );
          })}
        </p>

        <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-mutedGray/50 md:mt-10 md:gap-x-4 md:text-sm">
          {organizationContent.storyArc.map((step, index) => (
            <li
              key={step}
              data-promise-arc
              className={`inline-flex items-center gap-3 transition-colors duration-500 ease-out md:gap-4 [&.isActive]:text-navy ${
                index === organizationContent.storyArc.length - 1
                  ? "[&.isActive]:text-secondary"
                  : ""
              }`}
            >
              <span>{step}</span>
              {index < organizationContent.storyArc.length - 1 ? (
                <span className="text-primary/50" aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
