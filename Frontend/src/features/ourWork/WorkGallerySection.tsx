"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import FieldPhotoGrid from "@/components/ui/FieldPhotoGrid";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import Modal from "@/components/ui/Modal";
import { organizationContent } from "@/content/organizationContent";
import {
  ourWorkAreas,
  type OurWorkArea,
} from "@/features/ourWork/ourWorkAreas";

import styles from "./WorkGallerySection.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function splitTitle(title: string): { primary: string; secondary: string | null } {
  if (title.includes("&")) {
    const [left, right] = title.split(/\s*&\s*/);
    return {
      primary: left?.trim() ?? title,
      secondary: right ? `& ${right.trim()}` : null,
    };
  }
  const parts = title.split(/\s+/);
  if (parts.length < 2) {
    return { primary: title, secondary: null };
  }
  return {
    primary: parts[0] ?? title,
    secondary: parts.slice(1).join(" "),
  };
}

export default function WorkGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeArea, setActiveArea] = useState<OurWorkArea | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleId = useId();
  const closeTimerRef = useRef<number | null>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        return;
      }

      const nodes = sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
      if (!nodes || nodes.length === 0) {
        return;
      }

      gsap.set(nodes, { opacity: 0, y: 28 });

      const triggers = Array.from(nodes).map((node) =>
        ScrollTrigger.create({
          trigger: node,
          start: "top 90%",
          onEnter: () => {
            gsap.to(node, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.to(node, {
              opacity: 0,
              y: 28,
              duration: 0.35,
              ease: "power2.in",
              overwrite: true,
            });
          },
        }),
      );

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef },
  );

  const openModal = (area: OurWorkArea) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveArea(area);
    window.requestAnimationFrame(() => {
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActiveArea(null);
      closeTimerRef.current = null;
    }, 480);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const modalTitle = activeArea ? splitTitle(activeArea.title) : null;

  return (
    <>
      <section
        ref={sectionRef}
        id="our-work"
        data-nav-theme="light"
        className={styles.section}
      >
        <div className={`siteContainer ${styles.layout}`}>
          <div ref={headingRef} className={styles.headingBlock}>
            <p data-reveal className={styles.label}>
              What We Do
            </p>
            <h2 data-reveal className={styles.title}>
              {organizationContent.shortName}
              <span className={styles.titleMuted}>Foundation</span>
            </h2>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div ref={galleryRef} className={styles.gallery}>
              {ourWorkAreas.map((area) => (
                <button
                  key={area.number}
                  type="button"
                  data-reveal
                  className={styles.card}
                  onClick={() => openModal(area)}
                  aria-haspopup="dialog"
                  aria-expanded={activeArea?.number === area.number && isModalOpen}
                >
                  <div className={styles.cardMedia}>
                    <FieldPhotoStack
                      photos={area.gallery}
                      sizes="(max-width: 768px) 60vw, 280px"
                      intervalMs={2800 + Number(area.number) * 180}
                      imageClassName={styles.cardImage}
                    />
                    <span className={styles.cardAction} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className={styles.cardCaption}>{area.title}</p>
                </button>
              ))}
            </div>

            <div data-reveal className={styles.copy}>
              <p className={styles.lead}>{organizationContent.mission}</p>
              <p className={styles.body}>
                Across education, child care, protection, discipleship, and community
                outreach, we serve with compassion so hope can take root in Pakistan.
              </p>
              <AccentCta href="/our-work" tone="sky">
                Explore Our Work
              </AccentCta>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        titleId={titleId}
        lockOwner="workGalleryModal"
        variant="drawer"
      >
        {activeArea && modalTitle ? (
          <div className={styles.modalScroll}>
            <p className={styles.modalEyebrow}>Area {activeArea.number}</p>
            <h3 id={titleId} className={styles.modalTitle}>
              {modalTitle.primary}{" "}
              {modalTitle.secondary ? (
                <span className={styles.modalTitleMuted}>{modalTitle.secondary}</span>
              ) : null}
            </h3>
            <p className={styles.modalRole}>{activeArea.description}</p>
            <p className={styles.modalBody}>{activeArea.detail}</p>
            <FieldPhotoGrid
              photos={activeArea.gallery}
              className={styles.modalGrid}
              sizes="(max-width: 768px) 45vw, 260px"
            />
            <div className={styles.modalLink}>
              <AccentCta href={activeArea.href} tone="sky">
                View this work
              </AccentCta>
            </div>
          </div>
        ) : (
          <h3 id={titleId} className={styles.srOnly}>
            Work area details
          </h3>
        )}
      </Modal>
    </>
  );
}
