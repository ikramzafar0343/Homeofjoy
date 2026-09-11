import Link from "next/link";

import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import SectionCurve from "@/components/design/SectionCurve";
import { landingHero } from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingHero.module.css";

export default function LandingHero() {
  return (
    <section data-nav-theme="light" className={styles.hero} aria-label="Introduction">
      <div className={styles.media}>
        <FieldPhotoStack
          photos={landingHero.gallery}
          sizes="100vw"
          intervalMs={4200}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`${shared.container} ${styles.inner}`}>
        <p className={`${shared.eyebrow} ${styles.eyebrow}`}>{landingHero.eyebrow}</p>
        <h1 className={styles.title}>{landingHero.title}</h1>
        <p className={styles.body}>{landingHero.body}</p>
        <div className={styles.ctaRow}>
          <Link
            href={landingHero.ctaHref}
            className={`${shared.pill} ${shared.pillYellow}`}
          >
            {landingHero.ctaLabel}
          </Link>
        </div>
      </div>

      <SectionCurve position="bottom" fill="#ffffff" />
    </section>
  );
}
