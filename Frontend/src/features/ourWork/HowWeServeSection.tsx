"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import Modal from "@/components/ui/Modal";
import {
  howWeServeTopics,
  type HowWeServeTopic,
} from "@/features/ourWork/howWeServeTopics";
import { pinnedSectionDefaults, pinRefreshPriority } from "@/lib/pinnedSection";

import styles from "./HowWeServeSection.module.css";

gsap.registerPlugin(useGSAP, ScrollToPlugin, ScrollTrigger);

const TOPIC_COUNT = howWeServeTopics.length;

export default function HowWeServeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<HowWeServeTopic | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const activeIndexRef = useRef(0);
  const isFirstIndexEffect = useRef(true);
  const titleId = useId();
  const topic = howWeServeTopics[activeIndex] ?? howWeServeTopics[0];

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      if (!section || !pin) {
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        return;
      }

      const trigger = ScrollTrigger.create({
        id: "how-we-serve",
        trigger: section,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * TOPIC_COUNT * 0.5)}`,
        pin,
        ...pinnedSectionDefaults,
        refreshPriority: pinRefreshPriority.howWeServe,
        onUpdate: (self) => {
          const nextIndex = Math.min(
            TOPIC_COUNT - 1,
            Math.floor(self.progress * TOPIC_COUNT),
          );
          if (nextIndex !== activeIndexRef.current) {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }
        },
      });

      scrollTriggerRef.current = trigger;

      return () => {
        trigger.kill();
        scrollTriggerRef.current = null;
      };
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (isFirstIndexEffect.current) {
      isFirstIndexEffect.current = false;
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set([copyRef.current, mediaRef.current], { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      [copyRef.current, mediaRef.current],
      { opacity: 0.35, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      },
    );
  }, [activeIndex]);

  const selectTopic = (index: number) => {
    if (!howWeServeTopics[index]) {
      return;
    }

    const trigger = scrollTriggerRef.current;
    if (!trigger) {
      activeIndexRef.current = index;
      setActiveIndex(index);
      return;
    }

    const progress = (index + 0.08) / TOPIC_COUNT;
    const target =
      trigger.start + (trigger.end - trigger.start) * Math.min(0.999, progress);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, target);
      return;
    }

    gsap.to(window, {
      duration: 0.6,
      ease: "power2.out",
      scrollTo: { y: target, autoKill: false },
      overwrite: true,
    });
  };

  const openModal = () => {
    if (!topic) {
      return;
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setModalTopic(topic);
    window.requestAnimationFrame(() => setModalOpen(true));
  };

  const closeModal = () => {
    setModalOpen(false);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setModalTopic(null);
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

  if (!topic) {
    return null;
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="how-we-serve"
        data-nav-theme="light"
        className={styles.section}
      >
        <div ref={pinRef} className={styles.pin}>
          <div className={`siteContainer ${styles.layout}`}>
            <div>
              <p className={styles.label}>How we serve</p>

              <div ref={copyRef} className={styles.copyBlock}>
                <h2 className={styles.heading}>{topic.heading}</h2>
                <p className={styles.summary}>{topic.summary}</p>
                <div className={styles.ctaRow}>
                  <AccentCta tone="sky" onClick={openModal}>
                    More Information
                  </AccentCta>
                </div>
              </div>

              <ul className={styles.menu}>
                {howWeServeTopics.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <li key={item.id} className={styles.menuItem}>
                      <button
                        type="button"
                        className={`${styles.menuBtn} ${isActive ? styles.menuBtnActive : ""}`}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => selectTopic(index)}
                      >
                        <span>{item.label}</span>
                        <span className={styles.menuIndicator} aria-hidden="true" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.mediaCol}>
              <div ref={mediaRef} className={styles.mediaFrame}>
                <Image
                  key={topic.imageSrc}
                  src={topic.imageSrc}
                  alt={topic.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={modalOpen}
        onClose={closeModal}
        titleId={titleId}
        lockOwner="howWeServeModal"
        variant="drawer"
      >
        {modalTopic ? (
          <div className={styles.modalScroll}>
            <p className={styles.modalEyebrow}>{modalTopic.label}</p>
            <h3 id={titleId} className={styles.modalTitle}>
              {modalTopic.label}
            </h3>
            <p className={styles.modalBody}>{modalTopic.summary}</p>
            <p className={styles.modalBody}>{modalTopic.detail}</p>
            <div className={styles.modalMedia}>
              <Image
                src={modalTopic.imageSrc}
                alt={modalTopic.imageAlt}
                fill
                sizes="540px"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <h3 id={titleId} className={styles.srOnly}>
            How we serve details
          </h3>
        )}
      </Modal>
    </>
  );
}
