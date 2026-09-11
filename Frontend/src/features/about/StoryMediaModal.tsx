"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Modal from "@/components/ui/Modal";
import {
  storyMedia,
  storySectionLabel,
  storyStatement,
} from "@/features/about/storyContent";

import styles from "./StoryMediaModal.module.css";

type StoryMediaModalProps = {
  readonly open: boolean;
  readonly onClose: () => void;
};

export default function StoryMediaModal({ open, onClose }: StoryMediaModalProps) {
  const titleId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(storyMedia.videoSrc);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (open && hasVideo) {
      void video.play().catch(() => {
        /* Autoplay may be blocked; controls remain available. */
      });
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [open, hasVideo]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId={titleId}
      lockOwner="storyMediaModal"
      variant="dialog"
      closeLabel="Close story"
    >
      <div className={styles.body}>
        <p className={styles.eyebrow}>{storySectionLabel}</p>
        <h2 id={titleId} className={styles.title}>
          {storyMedia.ctaLabel}
        </h2>

        <div className={styles.media}>
          {hasVideo && storyMedia.videoSrc ? (
            <video
              ref={videoRef}
              className={styles.video}
              controls
              playsInline
              preload="metadata"
              poster={storyMedia.videoPoster}
            >
              <source src={storyMedia.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={storyMedia.imageSrc}
              alt={storyMedia.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40rem"
              className={styles.image}
            />
          )}
        </div>

        <p className={styles.statement}>{storyStatement}</p>

        {!hasVideo ? (
          <p className={styles.note}>
            A foundation story film will play here when a verified video is published.
            Until then, this still reflects the heart of our work.
          </p>
        ) : null}

        <Link href={storyMedia.href} className={styles.link} onClick={onClose}>
          Read more about us →
        </Link>
      </div>
    </Modal>
  );
}
