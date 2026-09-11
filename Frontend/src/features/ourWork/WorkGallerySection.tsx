import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import { organizationContent } from "@/content/organizationContent";
import { ourWorkAreas } from "@/features/ourWork/ourWorkAreas";

import styles from "./WorkGallerySection.module.css";

const accents = [
  design.pillPurple,
  design.pillYellow,
  design.pillPink,
  design.pillGreen,
  design.pillPurple,
  design.pillYellow,
] as const;

export default function WorkGallerySection() {
  return (
    <section
      id="what-we-do"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="what-we-do-title"
    >
      <SectionCurve position="top" fill="var(--landing-blue)" />

      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            What We Do
          </p>
          <h2
            id="what-we-do-title"
            className={`${design.heading} ${design.headingLight}`}
          >
            Six areas of compassionate service
          </h2>
          <p className={`${design.body} ${design.bodyLight} ${styles.intro}`}>
            {organizationContent.mission} Across education, child care, protection,
            discipleship, and community outreach, we serve so hope can take root in
            Pakistan.
          </p>
        </div>

        <div className={styles.rows}>
          {ourWorkAreas.map((area, index) => {
            const mediaFirst = index % 2 === 1;

            return (
              <div
                key={area.number}
                className={`${styles.row} ${
                  mediaFirst ? styles.mediaFirst : styles.copyFirst
                }`}
              >
                <div className={styles.mediaCol}>
                  <div className={`${styles.media} ${design.shapeCircle}`}>
                    <FieldPhotoStack
                      photos={area.gallery}
                      sizes="(max-width: 1024px) 68vw, 300px"
                      intervalMs={3200 + index * 280}
                    />
                  </div>
                </div>

                <div className={styles.copyCol}>
                  <p className={`${design.eyebrow} ${styles.eyebrow}`}>
                    Area {area.number}
                  </p>
                  <h3 className={`${design.subHeading} ${styles.rowHeading}`}>
                    {area.title}
                  </h3>
                  <p className={`${design.body} ${design.bodyLight} ${styles.rowBody}`}>
                    {area.detail || area.description}
                  </p>
                  <Link
                    href={area.href}
                    className={`${design.pill} ${accents[index] ?? design.pillYellow}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SectionCurve position="bottom" fill="var(--landing-blue)" />
    </section>
  );
}
