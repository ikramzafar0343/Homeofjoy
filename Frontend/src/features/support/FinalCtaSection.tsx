"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import { organizationContent } from "@/content/organizationContent";

import styles from "./FinalCtaSection.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type FinalCtaSectionProps = {
  readonly primaryLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryLabel?: string;
  readonly secondaryHref?: string;
  readonly contactLabel?: string;
  readonly contactHref?: string;
};

export default function FinalCtaSection({
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Partner With Us",
  secondaryHref = "/partner",
  contactLabel = "Contact Us",
  contactHref = "/contact",
}: FinalCtaSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);

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

      gsap.from("[data-join-reveal]", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="support"
      data-nav-theme="light"
      className={styles.section}
      aria-label="Join the mission"
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={`siteContainer ${styles.inner}`}>
        <div className={styles.copy}>
          <p data-join-reveal className={`typeLabel ${styles.eyebrow}`}>
            Join the mission
          </p>
          <h2 data-join-reveal className={styles.heading}>
            Be Part of Bringing Hope.
          </h2>
          <div data-join-reveal className={styles.rule} aria-hidden="true" />
          <p data-join-reveal className={styles.lead}>
            Together, we can protect children, strengthen families, and create safer
            futures across Pakistan.
          </p>
          <div data-join-reveal className={styles.actions}>
            <AccentCta href={primaryHref} tone="orange">
              {primaryLabel}
            </AccentCta>
            <AccentCta href={secondaryHref} tone="sky">
              {secondaryLabel}
            </AccentCta>
          </div>
        </div>

        <aside data-join-reveal className={styles.side}>
          <div className={styles.panel}>
            <p className={styles.panelLabel}>How you can help</p>
            <p className={styles.panelText}>
              Support, partnership, and prayer strengthen the work of protection,
              education, and compassionate service.
            </p>
          </div>
          <div className={styles.panel}>
            <p className={styles.panelLabel}>Our path</p>
            <ul className={styles.arc}>
              {organizationContent.storyArc.map((step) => (
                <li key={step} className={styles.arcItem}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <AccentCta href={contactHref} tone="sky">
              {contactLabel}
            </AccentCta>
          </div>
        </aside>
      </div>
    </section>
  );
}
