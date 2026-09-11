import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import {
  landingIntroSections,
  type LandingShape,
} from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingIntroSections.module.css";

const shapeClass: Record<LandingShape, string> = {
  shapeA: shared.shapeA ?? "",
  shapeB: shared.shapeB ?? "",
  shapeC: shared.shapeC ?? "",
};

export default function LandingIntroSections() {
  return (
    <div data-nav-theme="light" className={styles.wrap}>
      {landingIntroSections.map((section) => {
        const isCircle = section.shape === "shapeC";

        return (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
          >
            <div
              className={`${shared.container} ${styles.row} ${
                section.mediaFirst ? styles.mediaFirst : styles.copyFirst
              }`}
            >
              <div className={styles.mediaCol}>
                <div
                  className={`${styles.media} ${
                    isCircle ? styles.mediaCircle : ""
                  } ${shapeClass[section.shape]}`.trim()}
                >
                  <FieldPhotoStack
                    photos={section.gallery}
                    sizes="(max-width: 1024px) 90vw, 440px"
                    intervalMs={section.intervalMs}
                  />
                </div>
              </div>

              <div className={styles.copyCol}>
                <h2
                  id={`${section.id}-title`}
                  className={`${shared.heading} ${styles.heading}`}
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={`${shared.body} ${styles.paragraph}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
