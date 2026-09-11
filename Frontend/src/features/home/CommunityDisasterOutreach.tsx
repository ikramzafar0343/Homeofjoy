"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplashVisual from "@/features/home/SplashVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const outreachImpacts = [
  {
    title: "Natural disasters",
    copy: "Practical response when families and children face sudden loss and disruption.",
  },
  {
    title: "Displacement",
    copy: "Support for communities uprooted from home and seeking stability.",
  },
  {
    title: "Poverty",
    copy: "Ongoing care that addresses urgent needs without stripping dignity.",
  },
  {
    title: "Emergencies",
    copy: "Rapid, compassionate presence during critical community moments.",
  },
  {
    title: "Community crises",
    copy: "Standing with local partners when ordinary systems are overwhelmed.",
  },
] as const;

export default function CommunityDisasterOutreach() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-outreach-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.08,
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
      id="outreach"
      data-nav-theme="light"
      className="relative bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="siteContainer">
        <div className="mb-14 grid gap-10 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p data-outreach-reveal className="typeLabel mb-4">
              06 · Community & Disaster Outreach
            </p>
            <h2 data-outreach-reveal className="typeSection">
              Present when communities are hurting
            </h2>
          </div>
          <p data-outreach-reveal className="typeBody max-w-xl lg:justify-self-end">
            We respond to families and children affected by poverty, natural disasters,
            displacement, emergencies, and critical community needs—with practical
            support rooted in dignity and care.
          </p>
        </div>

        <div
          data-outreach-reveal
          className="relative mb-12 min-h-[min(52vw,20rem)] overflow-hidden md:mb-16 md:min-h-[360px]"
        >
          <SplashVisual tone="warm" imageSrc="/images/sections/community.webp" imageAlt="Carrying relief supplies through floodwater during disaster response" className="absolute inset-0 h-full w-full" />
        </div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {outreachImpacts.map((item) => (
            <li
              key={item.title}
              data-outreach-reveal
              className="border-t border-lightGray pt-6"
            >
              <h3 className="mb-3 text-xl font-bold text-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-bodyGray md:text-base">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>

        <div data-outreach-reveal className="mt-12">
          <a
            href="#support"
            className="inline-flex rounded-md bg-secondary px-6 py-3.5 text-sm font-semibold text-background transition hover:brightness-105"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
