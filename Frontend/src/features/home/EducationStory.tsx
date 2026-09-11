"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashVisual from "@/features/home/SplashVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const educationThemes = [
  "Access",
  "Education",
  "Literacy",
  "Opportunity",
  "Future",
] as const;

export default function EducationStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-edu-reveal]", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        stagger: 0.1,
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
      id="education"
      data-nav-theme="light"
      className="relative bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="siteContainer grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div
          data-edu-reveal
          className="relative min-h-[min(56vw,22rem)] overflow-hidden md:min-h-[480px] lg:min-h-[560px]"
        >
          <SplashVisual tone="sky" imageSrc="/images/sections/education.webp" imageAlt="Young students reading workbooks at Home of Joy School" className="absolute inset-0 h-full w-full" />
        </div>

        <div>
          <p data-edu-reveal className="typeLabel mb-4">
            01 · Education
          </p>
          <h2 data-edu-reveal className="typeSection mb-6">
            Opening doors through learning
          </h2>
          <p data-edu-reveal className="typeBody mb-8 max-w-xl">
            We provide quality education, literacy programs, and school support so
            children with limited access can grow in knowledge, confidence, and hope
            for a safer future.
          </p>

          <ul
            data-edu-reveal
            className="mb-10 flex flex-wrap gap-3"
          >
            {educationThemes.map((theme) => (
              <li
                key={theme}
                className="border border-lightGray px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-dark"
              >
                {theme}
              </li>
            ))}
          </ul>

          <div data-edu-reveal className="flex flex-wrap gap-3">
            <a
              href="#support"
              className="rounded-md bg-secondary px-6 py-3.5 text-sm font-semibold text-background transition hover:brightness-105"
            >
              Support Our Mission
            </a>
            <a
              href="#our-work"
              className="rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-background transition hover:brightness-105"
            >
              Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
