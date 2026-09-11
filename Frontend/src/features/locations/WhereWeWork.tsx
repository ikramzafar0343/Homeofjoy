"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import { workLocationRegions } from "@/features/locations/workLocations";

import styles from "./WhereWeWork.module.css";

const defaultRegion = workLocationRegions[0]!;
const defaultLocation = defaultRegion.locations[0]!;

export default function WhereWeWork() {
  const [activeRegion, setActiveRegion] = useState(defaultRegion.region);
  const [activeLocation, setActiveLocation] = useState(defaultLocation);

  const activeGroup =
    workLocationRegions.find((group) => group.region === activeRegion) ??
    defaultRegion;

  const selectLocation = (region: string, location: string) => {
    setActiveRegion(region);
    setActiveLocation(location);
  };

  return (
    <section
      id="locations"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="reach-title"
    >
      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            Our Reach
          </p>
          <h2 id="reach-title" className={design.heading}>
            Where We Work
          </h2>
          <p className={`${design.body} ${styles.intro}`}>
            Home of Joy Welfare Foundation operates across Pakistan through working
            stations and missionary presence. Select a location to explore each region.
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.mediaPanel}>
            <div className={styles.media} aria-hidden="true">
              <Image
                key={activeGroup.imageSrc}
                src={activeGroup.imageSrc}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className={styles.mediaOverlay} aria-hidden="true" />
            <div className={styles.mediaContent}>
              <p className={`${design.eyebrow} ${styles.mediaEyebrow}`}>Pakistan</p>
              <h3 className={`${design.subHeading} ${styles.mediaTitle}`}>
                {activeLocation}
              </h3>
              <p className={`${design.body} ${styles.mediaMeta}`}>
                Region: {activeGroup.region}
              </p>
            </div>
          </aside>

          <div className={styles.lists}>
            {workLocationRegions.map((group) => (
              <div key={group.region} className={styles.regionBlock}>
                <h3 className={`${design.subHeading} ${styles.regionTitle}`}>
                  {group.region}
                </h3>
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
                          onClick={() => selectLocation(group.region, location)}
                        >
                          {location}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className={styles.footerRow}>
              <Link href="/locations" className={`${design.pill} ${design.pillBlue}`}>
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
