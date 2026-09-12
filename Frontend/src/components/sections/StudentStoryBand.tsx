"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import SectionCurve from "@/components/design/SectionCurve";
import type { StudentStory } from "@/content/studentStories";

import styles from "./StudentStoryBand.module.css";

type StudentStoryBandProps = {
  readonly story: StudentStory;
  readonly mediaFirst?: boolean | undefined;
  readonly bottomFill?: string | undefined;
};

export default function StudentStoryBand({
  story,
  mediaFirst = false,
  bottomFill = "#ffffff",
}: StudentStoryBandProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const titleId = `${story.id}-title`;

  const play = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id={story.id}
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby={titleId}
    >
      <SectionCurve position="top" fill="var(--landing-blue-deep)" />

      <div
        className={`${design.container} ${styles.layout} ${
          mediaFirst ? styles.mediaFirst : ""
        }`}
      >
        <div className={styles.copy}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            {story.eyebrow}
          </p>
          <h2
            id={titleId}
            className={`${design.heading} ${design.headingLight} ${styles.heading}`}
          >
            {story.heading}
          </h2>
          <p className={styles.attribution}>{story.attribution}</p>
          <p className={`${design.body} ${design.bodyLight} ${styles.body}`}>
            {story.body}
          </p>
          <Link href={story.ctaHref} className={`${design.pill} ${design.pillYellow}`}>
            {story.ctaLabel}
          </Link>
        </div>

        <div className={styles.mediaCol}>
          <div className={`${styles.media} ${design.shapeSoft}`}>
            <video
              ref={videoRef}
              className={styles.video}
              controls={isPlaying}
              playsInline
              preload="metadata"
              poster={story.posterSrc}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={story.videoSrc} type="video/mp4" />
            </video>

            {!isPlaying ? (
              <>
                <Image
                  src={story.posterSrc}
                  alt={story.posterAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 520px"
                  className={styles.poster}
                />
                <button
                  type="button"
                  className={styles.playBtn}
                  onClick={() => void play()}
                  aria-label={story.playLabel}
                >
                  <span className={styles.playIcon} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M8 5.5v11l9-5.5-9-5.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  Watch story
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <SectionCurve position="bottom" fill={bottomFill} />
    </section>
  );
}
