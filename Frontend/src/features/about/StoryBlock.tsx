"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StoryMediaModal from "@/features/about/StoryMediaModal";
import {
  storyMedia,
  storySectionLabel,
  storyStatement,
} from "@/features/about/storyContent";

import styles from "./StoryBlock.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StoryBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [storyOpen, setStoryOpen] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        return;
      }

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          once: true,
        },
      });

      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="story"
      data-nav-theme="dark"
      className={styles.section}
      aria-label="Our Story"
    >
      <div ref={mediaRef} className={styles.media} aria-hidden="true">
        <Image
          src={storyMedia.imageSrc}
          alt=""
          fill
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`siteContainer ${styles.inner}`}>
        <div className={styles.rail} aria-hidden="true">
          <span className={styles.railDot} />
          <p className={styles.railLabel}>{storySectionLabel}</p>
        </div>

        <div ref={contentRef} className={styles.content}>
          <p className={styles.mobileLabel}>{storySectionLabel}</p>
          <p className={styles.statement}>{storyStatement}</p>
          <button
            type="button"
            className={styles.play}
            aria-label={storyMedia.ctaLabel}
            aria-haspopup="dialog"
            aria-expanded={storyOpen}
            onClick={() => setStoryOpen(true)}
          >
            <span className={styles.srOnly}>{storyMedia.ctaLabel}</span>
            <svg
              className={styles.playIcon}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8.5 5.8v12.4L18.2 12 8.5 5.8z" />
            </svg>
          </button>
        </div>
      </div>

      <StoryMediaModal open={storyOpen} onClose={() => setStoryOpen(false)} />
    </section>
  );
}
