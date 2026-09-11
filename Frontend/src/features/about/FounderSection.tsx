"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { organizationContent } from "@/content/organizationContent";

import styles from "./FounderSection.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const founderImageSrc = "/images/sections/founder.png";

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const founderAlt = `${organizationContent.founderName}, Founder of ${organizationContent.name}`;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      gsap.from("[data-founder-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          { scale: 1.06 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
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
      id="founder"
      data-nav-theme="light"
      className={styles.section}
      aria-label="Founder"
    >
      <div className={`siteContainer ${styles.layout}`}>
        <div data-founder-reveal className={styles.portrait}>
          <button
            type="button"
            className={styles.portraitButton}
            onClick={() => setLightboxOpen(true)}
            aria-label={`Expand portrait of ${organizationContent.founderName}`}
          >
            <div ref={portraitRef} className={styles.portraitMedia}>
              <Image
                src={founderImageSrc}
                alt={founderAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority={false}
              />
            </div>
          </button>
          <div className={styles.portraitFrame} aria-hidden="true" />
          <div className={styles.portraitAccent} aria-hidden="true" />
        </div>

        <div className={styles.copy}>
          <p data-founder-reveal className={`typeLabel ${styles.eyebrow}`}>
            Founder
          </p>
          <h2 data-founder-reveal className={styles.name}>
            {organizationContent.founderName}
          </h2>
          <p data-founder-reveal className={styles.role}>
            Founder · {organizationContent.shortName} Welfare Foundation
          </p>
          <div data-founder-reveal className={styles.divider} aria-hidden="true" />
          <p data-founder-reveal className={styles.lead}>
            Leading {organizationContent.shortName} with a clear calling to protect
            children, open doors through education, and bring hope to vulnerable
            communities across {organizationContent.country}.
          </p>
          <ul data-founder-reveal className={styles.meta}>
            <li className={styles.metaItem}>
              <span>Role</span>
              {organizationContent.founderRole}
            </li>
            <li className={styles.metaItem}>
              <span>Focus</span>
              {organizationContent.country}
            </li>
          </ul>
          <div data-founder-reveal>
            <AccentCta href="/about" tone="orange">
              About the Foundation
            </AccentCta>
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
