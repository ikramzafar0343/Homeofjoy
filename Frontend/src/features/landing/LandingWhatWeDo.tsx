import Link from "next/link";

import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import SectionCurve from "@/components/design/SectionCurve";
import {
  landingServiceRows,
  type LandingAccent,
} from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingWhatWeDo.module.css";

const pillClass: Record<LandingAccent, string> = {
  purple: shared.pillPurple ?? "",
  pink: shared.pillPink ?? "",
  yellow: shared.pillYellow ?? "",
  green: shared.pillGreen ?? "",
};

export default function LandingWhatWeDo() {
  return (
    <section
      id="what-we-do"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="what-we-do-title"
    >
      <SectionCurve position="top" fill="var(--landing-blue)" />

      <div className={shared.container}>
        <h2
          id="what-we-do-title"
          className={`${shared.heading} ${shared.headingLight} ${styles.heading}`}
        >
          What We Do
        </h2>

        <div className={styles.rows}>
          {landingServiceRows.map((row) => (
            <div
              key={row.id}
              className={`${styles.row} ${
                row.mediaFirst ? styles.mediaFirst : styles.copyFirst
              }`}
            >
              <div className={styles.mediaCol}>
                <div className={`${styles.media} ${shared.shapeCircle}`}>
                  <FieldPhotoStack
                    photos={row.gallery}
                    sizes="(max-width: 1024px) 58vw, 300px"
                    intervalMs={row.intervalMs}
                  />
                </div>
              </div>

              <div className={styles.copyCol}>
                <h3 className={`${shared.subHeading} ${styles.rowHeading}`}>
                  {row.heading}
                </h3>
                <p className={`${shared.body} ${shared.bodyLight} ${styles.rowBody}`}>
                  {row.body}
                </p>
                <Link
                  href={row.ctaHref}
                  className={`${shared.pill} ${pillClass[row.accent]}`}
                >
                  {row.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionCurve position="bottom" fill="var(--landing-off-white)" />
    </section>
  );
}
