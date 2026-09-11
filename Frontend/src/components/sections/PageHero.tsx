import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

import styles from "./PageHero.module.css";

export type PageHeroProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly gallery: readonly FieldPhoto[];
  readonly ctaLabel?: string | undefined;
  readonly ctaHref?: string | undefined;
  readonly secondaryLabel?: string | undefined;
  readonly secondaryHref?: string | undefined;
  readonly align?: "center" | "left" | undefined;
  /** @deprecated Kept for callers; photo hero is always dark-overlaid. */
  readonly tone?: "light" | "dark" | "sky" | undefined;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  gallery,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  align = "center",
}: PageHeroProps) {
  const alignClass = align === "left" ? styles.left : styles.center;

  return (
    <section data-nav-theme="light" className={styles.hero} aria-label={title}>
      <div className={styles.media}>
        <FieldPhotoStack
          photos={gallery}
          sizes="100vw"
          intervalMs={4200}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`${design.container} ${styles.inner} ${alignClass}`}>
        <p className={`${design.eyebrow} ${styles.eyebrow}`}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.body}>{description}</p>
        {ctaLabel && ctaHref ? (
          <div className={styles.ctaRow}>
            <Link href={ctaHref} className={`${design.pill} ${design.pillYellow}`}>
              {ctaLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className={`${design.pill} ${design.pillWhite}`}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      <SectionCurve position="bottom" fill="#ffffff" />
    </section>
  );
}
