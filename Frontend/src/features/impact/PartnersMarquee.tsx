"use client";

import Image from "next/image";

import { partnerLogos } from "@/features/impact/partnerLogos";

import styles from "./PartnersMarquee.module.css";

export default function PartnersMarquee() {
  const items = [...partnerLogos, ...partnerLogos];

  return (
    <section
      id="partners"
      data-nav-theme="light"
      className={styles.section}
      aria-label="Partners and Supporters"
    >
      <div className={`siteContainer ${styles.intro}`}>
        <p className="typeLabel mb-3">Partners & Supporters</p>
        <h2 className={styles.heading}>Standing together for change</h2>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {items.map((partner, index) => {
            const isSvg = partner.logo.endsWith(".svg");
            return (
              <div
                key={`${partner.name}-${index}`}
                className={styles.logoCard}
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={72}
                  className={styles.logoImage}
                  unoptimized={isSvg}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.track} aria-hidden="true">
          {items.map((partner, index) => {
            const isSvg = partner.logo.endsWith(".svg");
            return (
              <div
                key={`dup-${partner.name}-${index}`}
                className={styles.logoCard}
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt=""
                  width={180}
                  height={72}
                  className={styles.logoImage}
                  unoptimized={isSvg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
