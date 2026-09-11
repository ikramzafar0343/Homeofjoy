"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AccentCta from "@/components/ui/AccentCta";
import { workLocationRegions } from "@/features/locations/workLocations";

import styles from "./WhereWeWork.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const defaultRegion = workLocationRegions[0]!;
const defaultLocation = defaultRegion.locations[0]!;

export default function WhereWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const isFirstImageSwap = useRef(true);

  const [activeRegion, setActiveRegion] = useState(defaultRegion.region);
  const [activeLocation, setActiveLocation] = useState(defaultLocation);

  const activeGroup =
    workLocationRegions.find((group) => group.region === activeRegion) ??
    defaultRegion;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current) {
        return;
      }

      const introNodes = sectionRef.current.querySelectorAll("[data-reach-intro]");
      gsap.from(introNodes, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    if (isFirstImageSwap.current) {
      isFirstImageSwap.current = false;
      return;
    }

    const targets = [mediaRef.current, copyRef.current].filter(Boolean);
    if (targets.length === 0) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(targets, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      targets,
      { opacity: 0.25 },
      {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      },
    );
  }, [activeRegion, activeLocation]);

  const selectLocation = (region: string, location: string) => {
    setActiveRegion(region);
    setActiveLocation(location);
  };

  return (
    <section
      ref={sectionRef}
      id="locations"
      data-nav-theme="light"
      className={styles.section}
      aria-label="Our Reach"
    >
      <div className="siteContainer">
        <div className={styles.intro}>
          <p data-reach-intro className="typeLabel mb-4">
            Our Reach
          </p>
          <h2 data-reach-intro className="typeSection mb-5">
            Where We Work
          </h2>
          <p data-reach-intro className="typeBody">
            Home of Joy Welfare Foundation operates across Pakistan through working
            stations and missionary presence. Select a location to explore each
            region.
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.mediaPanel}>
            <div ref={mediaRef} className={styles.media} aria-hidden="true">
              <Image
                key={activeGroup.imageSrc}
                src={activeGroup.imageSrc}
                alt=""
                fill
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 40vw"
              />
            </div>
            <div className={styles.mediaOverlay} aria-hidden="true" />
            <div ref={copyRef} className={styles.mediaContent}>
              <p className={styles.mediaEyebrow}>Pakistan</p>
              <h3 className={styles.mediaTitle}>{activeLocation}</h3>
              <p className={styles.mediaMeta}>Region: {activeGroup.region}</p>
            </div>
          </aside>

          <div className={styles.lists}>
            {workLocationRegions.map((group) => {
              const isRegionActive = activeRegion === group.region;

              return (
                <div
                  key={group.region}
                  className={`${styles.regionBlock} ${
                    isRegionActive ? "" : styles.regionBlockInactive
                  }`}
                >
                  <h3 className={styles.regionTitle}>{group.region}</h3>
                  <ul className={styles.locationGrid}>
                    {group.locations.map((location) => {
                      const isActive = activeLocation === location;
                      return (
                        <li key={location}>
                          <button
                            type="button"
                            className={`${styles.locationBtn} ${
                              isActive ? styles.locationBtnActive : ""
                            }`}
                            aria-pressed={isActive}
                            onMouseEnter={() => {
                              selectLocation(group.region, location);
                            }}
                            onFocus={() => {
                              selectLocation(group.region, location);
                            }}
                            onClick={() => {
                              selectLocation(group.region, location);
                            }}
                          >
                            {location}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className={styles.footerRow}>
              <AccentCta href="/locations" tone="sky">
                View All Locations
              </AccentCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
