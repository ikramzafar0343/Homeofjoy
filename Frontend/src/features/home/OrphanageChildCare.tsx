"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashVisual from "@/features/home/SplashVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const careThemes = [
  "Safety",
  "Care",
  "Food",
  "Clothing",
  "Education",
  "Medical Care",
  "Dignity",
  "Love",
] as const;

export default function OrphanageChildCare() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-care-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.75,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="orphanage"
      data-nav-theme="light"
      className="relative bg-softBg py-24 md:py-32 lg:py-40"
    >
      <div className="siteContainer">
        <div
          data-care-reveal
          className="relative mb-14 min-h-[min(56vw,22rem)] overflow-hidden md:mb-20 md:min-h-[420px] lg:min-h-[520px]"
        >
          <SplashVisual tone="warm" imageSrc="/images/sections/orphanage.webp" imageAlt="Children sharing a communal meal in the school courtyard" className="absolute inset-0 h-full w-full" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p data-care-reveal className="typeLabel mb-4">
            03 · Orphanage
          </p>
          <h2 data-care-reveal className="typeSection mb-6">
            A safe place to belong
          </h2>
          <p data-care-reveal className="typeBody mb-12">
            Vulnerable and orphaned children receive secure accommodation, nutritious
            food, clothing, education, medical care, and a loving environment where
            dignity and healthy development can take root.
          </p>
        </div>

        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {careThemes.map((theme) => (
            <li
              key={theme}
              data-care-reveal
              className="border-t border-lightGray pt-4 text-sm font-semibold text-dark md:text-base"
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
