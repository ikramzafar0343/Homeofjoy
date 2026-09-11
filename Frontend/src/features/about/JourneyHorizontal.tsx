"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { journeySteps } from "@/features/about/journeySteps";
import { pinnedSectionDefaults, pinRefreshPriority } from "@/lib/pinnedSection";

import styles from "./JourneyHorizontal.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function JourneyHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;

      if (!pin || !track) {
        return;
      }

      const activeDotClass = styles.progressDotActive;

      const setActiveDot = (index: number) => {
        if (!progress || !activeDotClass) {
          return;
        }
        progress.querySelectorAll("[data-journey-dot]").forEach((dot, i) => {
          dot.classList.toggle(activeDotClass, i === index);
        });
        const label = progress.querySelector("[data-journey-label]");
        if (label) {
          label.textContent = `${String(index + 1).padStart(2, "0")} / ${String(
            journeySteps.length,
          ).padStart(2, "0")}`;
        }
      };

      setActiveDot(0);

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (!isDesktop || reduceMotion) {
            gsap.set(track, { clearProps: "transform" });
            return;
          }

          const getTravel = () => {
            const total = track.scrollWidth;
            const visible = pin.clientWidth;
            return Math.max(total - visible, 0);
          };

          gsap.set(track, { x: 0, force3D: true });

          const tween = gsap.to(track, {
            x: () => -getTravel(),
            ease: "none",
            scrollTrigger: {
              id: "journey-horizontal",
              trigger: pin,
              start: "top top",
              end: () =>
                `+=${Math.round(Math.max(getTravel(), window.innerHeight * 0.45) + window.innerHeight * 0.15)}`,
              pin: true,
              scrub: true,
              ...pinnedSectionDefaults,
              refreshPriority: pinRefreshPriority.journey,
              onUpdate: (self) => {
                const index = Math.min(
                  journeySteps.length - 1,
                  Math.round(self.progress * (journeySteps.length - 1)),
                );
                setActiveDot(index);
              },
            },
          });

          const refresh = () => {
            ScrollTrigger.refresh();
          };

          track.querySelectorAll("img").forEach((img) => {
            if (!img.complete) {
              img.addEventListener("load", refresh, { once: true });
            }
          });

          requestAnimationFrame(refresh);

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      data-nav-theme="dark"
      className={styles.section}
      aria-label="Our Journey"
    >
      <div className={`siteContainer ${styles.mobileHeader}`}>
        <p className="typeLabel mb-4 text-sky">Our Journey</p>
        <h2 className={styles.heading}>From Need → Intervention → Hope</h2>
      </div>

      <div ref={pinRef} className={styles.pin}>
        <div className={`siteContainer ${styles.header}`}>
          <div className={styles.headerInner}>
            <div>
              <p className="typeLabel mb-4 text-sky">Our Journey</p>
              <h2 className={styles.heading}>From Need → Intervention → Hope</h2>
            </div>
            <div ref={progressRef} className={styles.progress} aria-hidden="true">
              {journeySteps.map((step) => (
                <span
                  key={step.id}
                  data-journey-dot
                  className={styles.progressDot}
                />
              ))}
              <span data-journey-label className={styles.progressLabel}>
                01 / {String(journeySteps.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.trackWrap}>
          <div ref={trackRef} className={styles.track}>
            {journeySteps.map((step, index) => {
              const isLast = index === journeySteps.length - 1;
              return (
                <article key={step.id} className={styles.panel}>
                  <div className={styles.panelMedia} aria-hidden="true">
                    <Image
                      src={step.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 1280px) 78vw, 920px"
                    />
                  </div>
                  <div className={styles.panelOverlay} aria-hidden="true" />
                  <div className={styles.panelContent}>
                    <div className={styles.panelTop}>
                      <span className={styles.panelIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.panelStage}>Stage</span>
                    </div>
                    <div className={styles.panelBody}>
                      <h3 className={styles.panelTitle}>{step.title}</h3>
                      <p className={styles.panelCopy}>{step.copy}</p>
                      {!isLast ? (
                        <span className={styles.panelArrow} aria-hidden="true">
                          Next →
                        </span>
                      ) : (
                        <span className={styles.panelArrow} aria-hidden="true">
                          Journey continues
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`siteContainer ${styles.mobile}`}>
        <div className={styles.mobileList}>
          {journeySteps.map((step, index) => (
            <article key={step.id} className={styles.mobileCard}>
              <div className={styles.mobileMedia} aria-hidden="true">
                <Image src={step.imageSrc} alt="" fill sizes="100vw" />
              </div>
              <div className={styles.mobileOverlay} aria-hidden="true" />
              <div className={styles.mobileContent}>
                <p className={styles.mobileIndex}>
                  {String(index + 1).padStart(2, "0")} — Stage
                </p>
                <h3 className={styles.mobileTitle}>{step.title}</h3>
                <p className={styles.mobileCopy}>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
