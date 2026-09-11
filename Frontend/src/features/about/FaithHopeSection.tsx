"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";

import styles from "./FaithHopeSection.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faithPillars = [
  {
    title: "Compassionate Service",
    copy: "Care for children and families remains the center of every outreach.",
  },
  {
    title: "Faith",
    copy: "The hope of Jesus Christ is shared through respectful, relational presence.",
  },
  {
    title: "Hope",
    copy: "Education, protection, and dignity open pathways toward a safer future.",
  },
  {
    title: "Community",
    copy: "Local missionaries and partners walk with marginalized communities across Pakistan.",
  },
] as const;

export default function FaithHopeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      gsap.from("[data-faith-pillar]", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 62%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="faith-hope"
      data-nav-theme="dark"
      className={styles.section}
      aria-label="Faith and Hope"
    >
      <div ref={mediaRef} className={styles.media} aria-hidden="true">
        <Image
          src="/images/sections/faith.jpg"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`siteContainer ${styles.inner}`}>
        <div className={styles.rail} aria-hidden="true">
          <div className={styles.railTrack}>
            <span className={styles.railDot} />
          </div>
          <div className={styles.railTitleWrap}>
            <span className={styles.railLine} />
            <p className={styles.railTitle}>Faith & Hope</p>
          </div>
        </div>

        <div ref={contentRef} className={styles.content}>
          <p className={styles.mobileTitle}>Faith & Hope</p>
          <h2 className={styles.heading}>Compassion rooted in faith and hope</h2>
          <p className={styles.lead}>
            Home of Joy serves through practical care first. Faith shapes the posture
            of the work—never as pressure, always as hope shared through relationship,
            discipleship, and community engagement.
          </p>

          <ul className={styles.pillars}>
            {faithPillars.map((pillar) => (
              <li
                key={pillar.title}
                data-faith-pillar
                className={styles.pillar}
              >
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarCopy}>{pillar.copy}</p>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <AccentCta href="/about" tone="sky">
              Learn More
            </AccentCta>
          </div>
        </div>
      </div>
    </section>
  );
}
