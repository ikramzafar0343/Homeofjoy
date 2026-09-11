"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import {
  heroCta,
  heroHeading,
  heroWelcomeLabel,
} from "@/features/home/heroHeadingWords";
import { applyParallax } from "@/lib/parallax";

import styles from "./HomeHero.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function subscribePreloader(onChange: () => void) {
  window.addEventListener("hojPreloaderComplete", onChange);
  return () => window.removeEventListener("hojPreloaderComplete", onChange);
}

function isPreloaderDone() {
  return !document.querySelector('[data-preloader-play][aria-busy="true"]');
}

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const canAnimate = useSyncExternalStore(
    subscribePreloader,
    isPreloaderDone,
    () => false,
  );

  useGSAP(
    () => {
      if (!canAnimate) {
        gsap.set(mediaRef.current, { scale: 1.06 });
        gsap.set(headingRef.current, { opacity: 0, y: 36 });
        gsap.set([ctaWrapRef.current, welcomeRef.current], {
          opacity: 0,
          y: 16,
        });
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(mediaRef.current, { scale: 1 });
        gsap.set(headingRef.current, { opacity: 1, y: 0 });
        gsap.set([ctaWrapRef.current, welcomeRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.set(mediaRef.current, { scale: 1.08 });
      gsap.set(headingRef.current, { opacity: 0, y: 40 });
      gsap.set(ctaWrapRef.current, { opacity: 0, y: 18 });
      gsap.set(welcomeRef.current, { opacity: 0, x: -10 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(mediaRef.current, { scale: 1, duration: 1.25 }, 0)
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.18)
        .to(ctaWrapRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
        .to(welcomeRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.4");

      applyParallax(mediaRef.current, sectionRef.current, 0.1);
    },
    { dependencies: [canAnimate], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative min-h-[100svh] overflow-hidden bg-dark"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/sections/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] brightness-[0.72] contrast-[1.05]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.7)_0%,rgb(0_0_0/0.28)_30%,rgb(0_0_0/0.2)_55%,rgb(0_0_0/0.62)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.2)_0%,transparent_45%,rgb(0_0_0/0.42)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div
        ref={welcomeRef}
        className={styles.welcomeRail}
        aria-hidden="true"
      >
        <div className={styles.welcomeGroup}>
          <div className={styles.welcomeTrack}>
            <span
              className={`${styles.welcomeDot} ${styles.welcomeDotActive}`}
            />
            <span
              className={`${styles.welcomeDot} ${styles.welcomeDotIdle}`}
            />
          </div>
          <p className={styles.welcomeLabel}>{heroWelcomeLabel}</p>
        </div>
      </div>

      <div className="siteContainer relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 md:pb-24 md:pt-32 lg:items-end lg:pb-28">
        <div className="ml-auto w-full max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem]">
          <h1
            ref={headingRef}
            className="text-[1.75rem] font-light uppercase leading-[1.35] tracking-[0.06em] text-white sm:text-[1.95rem] md:text-[2.15rem] lg:text-[2.35rem]"
          >
            {heroHeading}
          </h1>

          <div ref={ctaWrapRef} className="mt-7 md:mt-8">
            <AccentCta href={heroCta.href} tone="sky">
              {heroCta.label}
            </AccentCta>
          </div>
        </div>
      </div>
    </section>
  );
}
