"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { organizationContent } from "@/content/organizationContent";

import styles from "./FounderSection.module.css";

const founderImageSrc = "/images/sections/founder.png";

export default function FounderSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const founderAlt = `${organizationContent.founderName}, Founder of ${organizationContent.name}`;

  return (
    <section
      id="founder"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="founder-title"
    >
      <div className={`${design.container} ${styles.layout}`}>
        <div className={styles.mediaCol}>
          <div className={`${styles.portrait} ${design.shapeA}`}>
            <button
              type="button"
              className={styles.portraitButton}
              onClick={() => setLightboxOpen(true)}
              aria-label={`Expand portrait of ${organizationContent.founderName}`}
            >
              <div className={styles.portraitMedia}>
                <Image
                  src={founderImageSrc}
                  alt={founderAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  priority={false}
                />
              </div>
            </button>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={`${design.eyebrow} ${styles.eyebrow}`}>Founder</p>
          <h2 id="founder-title" className={`${design.heading} ${styles.name}`}>
            {organizationContent.founderName}
          </h2>
          <p className={styles.role}>
            Founder · {organizationContent.shortName} Welfare Foundation
          </p>
          <p className={`${design.body} ${styles.lead}`}>
            Leading {organizationContent.shortName} with a clear calling to protect
            children, open doors through education, and bring hope to vulnerable
            communities across {organizationContent.country}.
          </p>
          <ul className={styles.meta}>
            <li className={styles.metaItem}>
              <span>Role</span>
              {organizationContent.founderRole}
            </li>
            <li className={styles.metaItem}>
              <span>Focus</span>
              {organizationContent.country}
            </li>
          </ul>
          <div className={styles.actions}>
            <Link href="/about" className={`${design.pill} ${design.pillYellow}`}>
              About the Foundation
            </Link>
          </div>
        </div>
      </div>

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={founderImageSrc}
        alt={founderAlt}
        caption={organizationContent.founderName}
        lockOwner="founderLightbox"
      />
    </section>
  );
}
