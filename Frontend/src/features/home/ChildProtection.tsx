"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashVisual from "@/features/home/SplashVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ChildProtection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-protect-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="child-protection"
      data-nav-theme="light"
      className="relative bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="siteContainer grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p data-protect-reveal className="typeLabel mb-6">
            04 · Child Protection
          </p>
          <h2
            data-protect-reveal
            className="max-w-3xl text-[34px] leading-[1.15] font-bold tracking-tight text-dark md:text-[48px] lg:text-[56px]"
          >
            Every child deserves a safe environment where they can grow with dignity.
          </h2>
          <p data-protect-reveal className="typeBody mt-8 max-w-xl">
            We protect girls and boys—especially children under foundation care—with
            secure accommodation, caring supervision, and support that upholds human
            dignity.
          </p>
        </div>

        <div
          data-protect-reveal
          className="relative min-h-[min(56vw,22rem)] overflow-hidden md:min-h-[420px]"
        >
          <SplashVisual tone="navy" imageSrc="/images/sections/child-protection.webp" imageAlt="Two children holding hands in a safe Home of Joy setting" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  );
}
