import Link from "next/link";

import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import SectionCurve from "@/components/design/SectionCurve";
import { landingCtaBand } from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingCtaBand.module.css";

export default function LandingCtaBand() {
  return (
    <section
      id="support"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="support-title"
    >
      <div className={styles.media}>
        <FieldPhotoStack
          photos={landingCtaBand.gallery}
          sizes="100vw"
          intervalMs={4000}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`${shared.container} ${styles.inner}`}>
        <p className={`${shared.eyebrow} ${styles.eyebrow}`}>{landingCtaBand.eyebrow}</p>
        <h2 id="support-title" className={styles.heading}>
          {landingCtaBand.heading}
        </h2>
        <p className={`${shared.body} ${shared.bodyLight} ${styles.body}`}>
          {landingCtaBand.body}
        </p>
        <div className={styles.ctaRow}>
          <Link
            href={landingCtaBand.ctaHref}
            className={`${shared.pill} ${shared.pillYellow}`}
          >
            {landingCtaBand.ctaLabel}
          </Link>
        </div>
      </div>

      <SectionCurve position="bottom" fill="#ffffff" />
    </section>
  );
}
