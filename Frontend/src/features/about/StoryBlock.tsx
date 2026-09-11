"use client";

import { useState } from "react";
import Image from "next/image";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import StoryMediaModal from "@/features/about/StoryMediaModal";
import {
  storyMedia,
  storySectionLabel,
  storyStatement,
} from "@/features/about/storyContent";

import styles from "./StoryBlock.module.css";

export default function StoryBlock() {
  const [storyOpen, setStoryOpen] = useState(false);

  return (
    <section
      id="story"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="story-title"
    >
      <div className={styles.media} aria-hidden="true">
        <Image
          src={storyMedia.imageSrc}
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <SectionCurve position="top" fill="var(--landing-blue-deep)" />

      <div className={`${design.container} ${styles.inner}`}>
        <p className={`${design.eyebrow} ${styles.eyebrow}`}>{storySectionLabel}</p>
        <h2 id="story-title" className="sr-only">
          {storyStatement}
        </h2>
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

      <SectionCurve position="bottom" fill="#ffffff" />

      <StoryMediaModal open={storyOpen} onClose={() => setStoryOpen(false)} />
    </section>
  );
}
