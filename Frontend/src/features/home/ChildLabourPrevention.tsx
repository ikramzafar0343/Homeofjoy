"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const labourSteps = [
  {
    title: "Poverty",
    copy: "Families under economic pressure face impossible choices.",
  },
  {
    title: "Child Labour Risk",
    copy: "Children become vulnerable to work that steals childhood and learning.",
  },
  {
    title: "Intervention",
    copy: "We walk with brick-kiln and marginalized communities toward safer paths.",
  },
  {
    title: "Education",
    copy: "Learning replaces labour as the foundation for growth.",
  },
  {
    title: "Protection",
    copy: "Children are safeguarded with care, supervision, and dignity.",
  },
  {
    title: "Opportunity",
    copy: "A safer future opens when education and protection hold together.",
  },
] as const;

export default function ChildLabourPrevention() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;

      if (reduced || isMobile || !trackRef.current || !pinRef.current) {
        return;
      }

      const track = trackRef.current;
      const scrollDistance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -Math.max(scrollDistance, 0),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${Math.max(scrollDistance, window.innerHeight)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="child-labour"
      data-nav-theme="dark"
      className="relative bg-dark text-background"
    >
      <div className="siteContainer py-16 md:py-20">
        <p className="typeLabel mb-4 text-light">03 · Child Labour Prevention</p>
        <h2 className="typeSection max-w-3xl text-background">
          From risk to a safer future
        </h2>
      </div>

      <div ref={pinRef} className="relative hidden overflow-hidden lg:block">
        <div
          ref={trackRef}
          className="flex w-max gap-8 px-[10vw] pb-24 pt-6 will-change-transform"
        >
          {labourSteps.map((step, index) => (
            <article
              key={step.title}
              className="flex h-[58vh] w-[70vw] max-w-[720px] shrink-0 flex-col justify-between border border-background/15 bg-dark/40 p-10 xl:w-[48vw]"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-4 text-4xl font-bold xl:text-5xl">{step.title}</h3>
                <p className="max-w-md text-lg leading-relaxed text-background/75">
                  {step.copy}
                </p>
              </div>
              {index < labourSteps.length - 1 ? (
                <span className="text-secondary" aria-hidden="true">
                  ↓
                </span>
              ) : (
                <span className="text-light" aria-hidden="true">
                  ·
                </span>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="siteContainer space-y-8 pb-24 lg:hidden">
        {labourSteps.map((step, index) => (
          <article
            key={step.title}
            className="border-t border-background/20 pt-8"
          >
            <span className="mb-3 block text-xs font-semibold tracking-[0.18em] text-secondary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
            <p className="text-background/75">{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
