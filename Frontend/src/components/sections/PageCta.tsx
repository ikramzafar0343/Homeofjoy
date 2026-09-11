import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

import styles from "./PageCta.module.css";

export type PageCtaProps = {
  readonly title?: string | undefined;
  readonly description?: string | undefined;
  readonly eyebrow?: string | undefined;
  readonly primaryLabel?: string | undefined;
  readonly primaryHref?: string | undefined;
  readonly secondaryLabel?: string | undefined;
  readonly secondaryHref?: string | undefined;
  readonly gallery?: readonly FieldPhoto[] | undefined;
};

const defaultGallery = pageHeroGalleries.donate;

export default function PageCta({
  title = "Be Part of Bringing Hope",
  description = "Together, we can protect children, strengthen families, and create safer futures across Pakistan.",
  eyebrow = "Join the mission",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  gallery = defaultGallery,
}: PageCtaProps) {
  return (
    <section
      id="support"
      data-nav-theme="dark"
      className={styles.section}
      aria-label={title}
    >
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

      <div className={`${design.container} ${styles.inner}`}>
        <p className={`${design.eyebrow} ${styles.eyebrow}`}>{eyebrow}</p>
        <h2 className={styles.heading}>{title}</h2>
        <p className={`${design.body} ${design.bodyLight} ${styles.body}`}>
          {description}
        </p>
        <div className={styles.actions}>
          <Link href={primaryHref} className={`${design.pill} ${design.pillYellow}`}>
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className={`${design.pill} ${design.pillWhite}`}>
            {secondaryLabel}
          </Link>
        </div>
      </div>

      <SectionCurve position="bottom" fill="var(--landing-blue)" />
    </section>
  );
}
