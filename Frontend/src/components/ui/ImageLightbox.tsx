"use client";

import { useId } from "react";
import Image from "next/image";

import Modal from "@/components/ui/Modal";

import styles from "./ImageLightbox.module.css";

export type ImageLightboxProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly lockOwner?: string;
};

export default function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  caption,
  lockOwner = "imageLightbox",
}: ImageLightboxProps) {
  const titleId = useId();

  return (
    <Modal
      open={open}
      onClose={onClose}
      titleId={titleId}
      lockOwner={lockOwner}
      variant="lightbox"
      closeLabel="Close image"
    >
      <div className={styles.frame}>
        <h2 id={titleId} className={styles.srOnly}>
          {alt || "Expanded image"}
        </h2>
        <div className={styles.media}>
          <Image src={src} alt={alt} fill sizes="90vw" className={styles.img} />
        </div>
        {caption ? <p className={styles.caption}>{caption}</p> : null}
      </div>
    </Modal>
  );
}
