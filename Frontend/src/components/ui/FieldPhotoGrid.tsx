"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

import styles from "./FieldPhotoGrid.module.css";

gsap.registerPlugin(useGSAP);

const PAGE_SIZE = 4;

export type FieldPhotoGridProps = {
  readonly photos: readonly FieldPhoto[];
  readonly sizes?: string | undefined;
  readonly intervalMs?: number | undefined;
  readonly className?: string | undefined;
};

function pageSlice(photos: readonly FieldPhoto[], page: number): FieldPhoto[] {
  if (photos.length === 0) {
    return [];
  }
  if (photos.length <= PAGE_SIZE) {
    return [...photos];
  }
  const start = (page * PAGE_SIZE) % photos.length;
  const slice: FieldPhoto[] = [];
  for (let i = 0; i < PAGE_SIZE; i += 1) {
    slice.push(photos[(start + i) % photos.length]!);
  }
  return slice;
}

export default function FieldPhotoGrid({
  photos,
  sizes = "(max-width: 768px) 50vw, 240px",
  intervalMs = 4200,
  className,
}: FieldPhotoGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.max(1, Math.ceil(photos.length / PAGE_SIZE));
  const [page, setPage] = useState(0);
  const [photosKey, setPhotosKey] = useState(() =>
    photos.map((photo) => photo.src).join("|"),
  );
  const nextPhotosKey = photos.map((photo) => photo.src).join("|");

  if (photosKey !== nextPhotosKey) {
    setPhotosKey(nextPhotosKey);
    setPage(0);
  }

  const visible = pageSlice(photos, page);

  useEffect(() => {
    if (photos.length <= PAGE_SIZE) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }

    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [photos.length, pageCount, intervalMs]);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const cells = root.querySelectorAll<HTMLElement>("[data-grid-cell]");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set(cells, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        cells,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        },
      );
    },
    { scope: rootRef, dependencies: [page, photos], revertOnUpdate: true },
  );

  if (visible.length === 0) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={`${styles.grid} ${className ?? ""}`.trim()}
      aria-label="Field photo gallery"
    >
      {visible.map((photo) => (
        <figure key={`${page}-${photo.src}`} data-grid-cell className={styles.cell}>
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} />
        </figure>
      ))}
    </div>
  );
}
