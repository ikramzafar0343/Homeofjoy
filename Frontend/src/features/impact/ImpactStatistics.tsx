import Link from "next/link";
import Image from "next/image";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import { impactStatements } from "@/content/impactStatements";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

import styles from "./ImpactStatistics.module.css";

function formatCount(value: number): string {
  return value.toLocaleString("en-US");
}

export default function ImpactStatistics() {
  const media = pageHeroGalleries.impact[0]!;

  return (
    <section
      id="impact"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="impact-title"
    >
      <SectionCurve position="top" fill="var(--landing-blue)" />

      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            Our Impact
          </p>
          <h2 id="impact-title" className={`${design.heading} ${design.headingLight}`}>
            Measured with integrity
          </h2>
          <p className={`${design.body} ${design.bodyLight} ${styles.note}`}>
            Figures below are demo placeholders for layout. Verified totals will replace
            them when confirmed by the foundation.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.media} ${design.shapeA}`}>
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(max-width: 1024px) 86vw, 440px"
            />
          </div>

          <div>
            <ul className={styles.stats}>
              {impactStatements.map((item) => (
                <li key={`${item.value}-${item.statement}`} className={styles.stat}>
                  <p className={styles.value}>
                    {formatCount(item.value)}
                    {item.suffix}
                  </p>
                  <p className={`${design.body} ${design.bodyLight} ${styles.copy}`}>
                    {item.statement}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link href="/our-work" className={`${design.pill} ${design.pillYellow}`}>
                Explore Our Work
              </Link>
              <Link href="/locations" className={`${design.pill} ${design.pillWhite}`}>
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SectionCurve position="bottom" fill="#fafaf8" />
    </section>
  );
}
