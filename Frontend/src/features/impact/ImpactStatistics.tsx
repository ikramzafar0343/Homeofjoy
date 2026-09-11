"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { impactSlides } from "@/content/impactStatements";
import ImpactStatCounter from "@/features/impact/ImpactStatCounter";
import { pinnedSectionDefaults, pinRefreshPriority } from "@/lib/pinnedSection";

import styles from "./ImpactStatistics.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SLIDE_COUNT = impactSlides.length;

export default function ImpactStatistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isFirstSwap = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const slide = impactSlides[activeIndex] ?? impactSlides[0];

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      if (!section || !pin) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (!isDesktop || reduceMotion) {
            return;
          }

          const trigger = ScrollTrigger.create({
            id: "impact-statistics",
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * SLIDE_COUNT * 0.55)}`,
            pin,
            ...pinnedSectionDefaults,
            refreshPriority: pinRefreshPriority.impact,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                SLIDE_COUNT - 1,
                Math.floor(self.progress * SLIDE_COUNT),
              );
              if (nextIndex !== activeIndexRef.current) {
                activeIndexRef.current = nextIndex;
                setActiveIndex(nextIndex);
              }
            },
          });

          return () => {
            trigger.kill();
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (isFirstSwap.current) {
      isFirstSwap.current = false;
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set([panelRef.current, mediaRef.current], { opacity: 1 });
      return;
    }

    gsap.fromTo(
      [panelRef.current, mediaRef.current],
      { opacity: 0.25 },
      {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      },
    );
  }, [activeIndex]);

  if (!slide) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="impact"
      data-nav-theme="dark"
      className={styles.section}
      aria-label="Our Impact"
    >
      <div ref={pinRef} className={styles.pin}>
        <div ref={mediaRef} className={styles.media} aria-hidden="true">
          <Image
            key={slide.imageSrc}
            src={slide.imageSrc}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.overlay} aria-hidden="true" />

        <div className={`siteContainer ${styles.inner}`}>
          <div className={styles.rail} aria-hidden="true">
            <div className={styles.railTrack}>
              {impactSlides.map((item, index) => (
                <span
                  key={item.id}
                  className={`${styles.railDot} ${
                    index === activeIndex ? styles.railDotActive : ""
                  }`}
                />
              ))}
            </div>
            <div className={styles.railTitleWrap}>
              <span className={styles.railLine} />
              <p className={styles.railTitle}>Our Impact</p>
            </div>
          </div>

          <div ref={panelRef} className={styles.content}>
            <p className={styles.mobileTitle}>Our Impact</p>

            <ul className={styles.stats}>
              {slide.items.map((item, index) => (
                <li key={`${slide.id}-${item.value}-${item.statement}`}>
                  <p className={styles.statValue}>
                    <ImpactStatCounter
                      value={item.value}
                      suffix={item.suffix}
                      animateKey={`${slide.id}-${activeIndex}-${index}`}
                    />
                  </p>
                  <p className={styles.statCopy}>{item.statement}</p>
                  {index === 0 ? (
                    <div className={styles.cta}>
                      <AccentCta href="/impact" tone="sky">
                        View All Stats
                      </AccentCta>
                      <AccentCta tone="sky" onClick={() => setLightboxOpen(true)}>
                        View image
                      </AccentCta>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className={styles.mobileDots} role="tablist" aria-label="Impact slides">
              {impactSlides.map((item, index) => (
                <button
                  key={`m-${item.id}`}
                  type="button"
                  className={`${styles.mobileDot} ${
                    index === activeIndex ? styles.mobileDotActive : ""
                  }`}
                  aria-label={`Show impact slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => {
                    activeIndexRef.current = index;
                    setActiveIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={slide.imageSrc}
        alt={slide.imageAlt}
        caption="Our Impact"
        lockOwner="impactLightbox"
      />
    </section>
  );
}
