"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

import styles from "./FieldPhotoStack.module.css";

gsap.registerPlugin(useGSAP);

export type FieldPhotoStackProps = {
  readonly photos: readonly FieldPhoto[];
  readonly sizes: string;
  readonly intervalMs?: number | undefined;
  readonly className?: string | undefined;
  readonly imageClassName?: string | undefined;
  readonly pauseOnHover?: boolean | undefined;
};

export default function FieldPhotoStack({
  photos,
  sizes,
  intervalMs = 3200,
  className,
  imageClassName,
  pauseOnHover = true,
}: FieldPhotoStackProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [photosKey, setPhotosKey] = useState(() =>
    photos.map((photo) => photo.src).join("|"),
  );
  const prevIndexRef = useRef(0);
  const nextPhotosKey = photos.map((photo) => photo.src).join("|");
  const safePhotos = photos.length > 0 ? photos : [];

  if (photosKey !== nextPhotosKey) {
    setPhotosKey(nextPhotosKey);
    setIndex(0);
  }

  const active = safePhotos[index] ?? safePhotos[0];

  useEffect(() => {
    if (safePhotos.length <= 1 || paused) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % safePhotos.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [safePhotos.length, intervalMs, paused, photos]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || safePhotos.length === 0) {
        return;
      }

      const layers = root.querySelectorAll<HTMLElement>("[data-photo-layer]");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const prev = prevIndexRef.current;

      if (safePhotos.length === 1 || reduced) {
        layers.forEach((layer, i) => {
          gsap.set(layer, { opacity: i === index ? 1 : 0, scale: 1, zIndex: i === index ? 2 : 1 });
        });
        prevIndexRef.current = index;
        return;
      }

      if (prev === index) {
        layers.forEach((layer, i) => {
          gsap.set(layer, { opacity: i === index ? 1 : 0, scale: 1, zIndex: i === index ? 2 : 1 });
        });
        return;
      }

      const incoming = layers[index];
      const outgoing = layers[prev];

      layers.forEach((layer, i) => {
        if (i !== index && i !== prev) {
          gsap.set(layer, { opacity: 0, zIndex: 1 });
        }
      });

      if (outgoing) {
        gsap.set(outgoing, { zIndex: 1 });
        gsap.to(outgoing, { opacity: 0, duration: 0.7, ease: "power2.inOut" });
      }

      if (incoming) {
        gsap.set(incoming, { zIndex: 2, opacity: 0, scale: 1.045 });
        gsap.to(incoming, {
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
        });
      }

      prevIndexRef.current = index;
    },
    { scope: rootRef, dependencies: [index, safePhotos.length] },
  );

  if (!active) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.stack} ${className ?? ""}`.trim()}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
    >
      {safePhotos.map((photo, i) => (
        <div
          key={photo.src}
          data-photo-layer
          className={styles.layer}
          aria-hidden={i !== index}
        >
          <Image
            src={photo.src}
            alt={i === index ? photo.alt : ""}
            fill
            sizes={sizes}
            className={imageClassName}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
