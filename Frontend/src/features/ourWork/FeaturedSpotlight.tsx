"use client";

import { useState } from "react";
import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import { spotlightSlides } from "@/features/ourWork/spotlightSlides";

import styles from "./FeaturedSpotlight.module.css";

export default function FeaturedSpotlight() {
  const [index, setIndex] = useState(0);
  const slide = spotlightSlides[index] ?? spotlightSlides[0];

  if (!slide) {
    return null;
  }

  const total = spotlightSlides.length;
  const countLabel = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const goTo = (nextIndex: number) => {
    const normalized = ((nextIndex % total) + total) % total;
    setIndex(normalized);
  };

  return (
    <section
      id="stories"
      data-nav-theme="dark"
      className={styles.section}
      aria-roledescription="carousel"
      aria-label="Featured work stories"
    >
      <div className={styles.media} aria-hidden="true">
        <FieldPhotoStack
          key={slide.id}
          photos={slide.gallery}
          sizes="100vw"
          intervalMs={3800}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`${design.container} ${styles.inner}`}>
        <div className={styles.topBar}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            {slide.label}
          </p>
          <p className={styles.count}>{countLabel}</p>
        </div>

        <h2 className={`${design.heading} ${design.headingLight} ${styles.heading}`}>
          {slide.heading}
        </h2>
        <p className={`${design.body} ${design.bodyLight} ${styles.body}`}>
          {slide.body}
        </p>

        <div className={styles.actions}>
          <Link href={slide.ctaHref} className={`${design.pill} ${design.pillYellow}`}>
            {slide.ctaLabel}
          </Link>
          <div className={styles.nav} role="group" aria-label="Story navigation">
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
        </div>
      </div>

      <SectionCurve position="bottom" fill="#ffffff" />
    </section>
  );
}
