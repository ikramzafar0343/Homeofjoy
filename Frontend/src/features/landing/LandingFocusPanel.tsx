import Link from "next/link";

import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import { landingFocusPanel } from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingFocusPanel.module.css";

export default function LandingFocusPanel() {
  return (
    <section
      id="education-focus"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="education-focus-title"
    >
      <div className={styles.media}>
        <FieldPhotoStack
          photos={landingFocusPanel.gallery}
          sizes="100vw"
          intervalMs={4500}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={shared.container}>
        <div className={styles.panel}>
          <h2
            id="education-focus-title"
            className={`${shared.heading} ${shared.headingLight} ${styles.heading}`}
          >
            {landingFocusPanel.heading}
          </h2>
          {landingFocusPanel.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={`${shared.body} ${shared.bodyLight} ${styles.paragraph}`}
            >
              {paragraph}
            </p>
          ))}
          <div className={styles.ctaRow}>
            <Link
              href={landingFocusPanel.ctaHref}
              className={`${shared.pill} ${shared.pillWhite}`}
            >
              {landingFocusPanel.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
