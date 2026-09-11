"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { spotlightSlides } from "@/features/ourWork/spotlightSlides";

import styles from "./FeaturedSpotlight.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturedSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const animatingRef = useRef(false);
  const isFirstPaint = useRef(true);
  const slide = spotlightSlides[index] ?? spotlightSlides[0];

  const goTo = useCallback(
    (nextIndex: number) => {
      if (animatingRef.current) {
        return;
      }
      const total = spotlightSlides.length;
      const normalized = ((nextIndex % total) + total) % total;
      if (normalized === index) {
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setIndex(normalized);
        return;
      }

      animatingRef.current = true;
      gsap.to([contentRef.current, mediaRef.current], {
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          setIndex(normalized);
        },
      });
    },
    [index],
  );

  useEffect(() => {
    if (isFirstPaint.current) {
      isFirstPaint.current = false;
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set([contentRef.current, mediaRef.current], { opacity: 1 });
      animatingRef.current = false;
      return;
    }

    gsap.fromTo(
      [contentRef.current, mediaRef.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          animatingRef.current = false;
        },
      },
    );
  }, [index]);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        return;
      }

      const bar = sectionRef.current?.querySelector("[data-spot-bar]");
      const copy = sectionRef.current?.querySelector("[data-spot-copy]");
      if (!bar || !copy) {
        return;
      }

      gsap.set([bar, copy], { opacity: 0, y: 24 });

      const triggers = [bar, copy].map((node) =>
        ScrollTrigger.create({
          trigger: node,
          start: "top 88%",
          onEnter: () => {
            gsap.to(node, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.to(node, {
              opacity: 0,
              y: 24,
              duration: 0.35,
              ease: "power2.in",
              overwrite: true,
            });
          },
        }),
      );

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef },
  );

  if (!slide) {
    return null;
  }

  const countLabel = `${String(index + 1).padStart(2, "0")} / ${String(spotlightSlides.length).padStart(2, "0")}`;

  return (
    <section
      ref={sectionRef}
      id="stories"
      data-nav-theme="dark"
      className={styles.section}
      aria-roledescription="carousel"
      aria-label="Featured work stories"
    >
      <div ref={mediaRef} className={styles.media} aria-hidden="true">
        <FieldPhotoStack
          key={slide.id}
          photos={slide.gallery}
          sizes="100vw"
          intervalMs={3600}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`siteContainer ${styles.inner}`}>
        <div data-spot-bar className={styles.topBar}>
          <div className={styles.meta}>
            <span className={styles.metaDot} />
            <p className={styles.metaLabel}>{slide.label}</p>
          </div>
          <p className={styles.metaCount}>{countLabel}</p>
        </div>

        <div ref={contentRef} data-spot-copy className={styles.content}>
          <h2 className={styles.heading}>{slide.heading}</h2>
          <p className={styles.body}>{slide.body}</p>
          <div className={styles.ctaWrap}>
            <AccentCta href={slide.ctaHref} tone="sky">
              {slide.ctaLabel}
            </AccentCta>
            <AccentCta tone="sky" onClick={() => setLightboxOpen(true)}>
              View image
            </AccentCta>
          </div>
        </div>
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className={styles.navBtn}
          aria-label="Previous story"
          onClick={() => goTo(index - 1)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 3.5 5.5 8 10 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className={styles.navBtn}
          aria-label="Next story"
          onClick={() => goTo(index + 1)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 3.5 10.5 8 6 12.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={slide.imageSrc}
        alt={slide.imageAlt}
        caption={slide.heading}
        lockOwner="spotlightLightbox"
      />
    </section>
  );
}
