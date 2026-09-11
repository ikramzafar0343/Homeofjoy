"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashVisual from "@/features/home/SplashVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faithThemes = [
  "Missionaries",
  "Small groups",
  "Discipleship",
  "Church planting",
  "Community relationships",
  "Hope of Jesus Christ",
] as const;

export default function EvangelismDiscipleship() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-faith-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="evangelism"
      data-nav-theme="light"
      className="relative bg-softBg py-24 md:py-32 lg:py-40"
    >
      <div className="siteContainer grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p data-faith-reveal className="typeLabel mb-4">
            05 · Evangelism & Discipleship
          </p>
          <h2 data-faith-reveal className="typeSection mb-6">
            Hope shared through compassionate relationships
          </h2>
          <p data-faith-reveal className="typeBody mb-8 max-w-xl">
            We support local missionaries, small groups, discipleship programs, and
            church-planting teams serving marginalized and unreached communities. The
            hope of Jesus Christ is shared through respectful relationships,
            compassionate service, and community engagement.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {faithThemes.map((theme) => (
              <li
                key={theme}
                data-faith-reveal
                className="border-l-2 border-primary/40 pl-4 text-sm font-medium text-dark md:text-base"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-faith-reveal
          className="relative min-h-[320px] overflow-hidden md:min-h-[480px]"
        >
          <SplashVisual tone="faith" imageSrc="/images/sections/evangelism.webp" imageAlt="Discipleship and literacy workshop in the field" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
