import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import { organizationContent } from "@/content/organizationContent";

import styles from "./DesignPrincipleBand.module.css";

export default function DesignPrincipleBand() {
  return (
    <section
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="promise-title"
    >
      <SectionCurve position="top" fill="var(--landing-blue)" />

      <div className={`${design.container} ${styles.inner}`}>
        <div className={styles.head}>
          <p
            className={design.eyebrow}
            style={{ color: "rgb(255 255 255 / 0.85)" }}
          >
            Our Promise
          </p>
          <h2 id="promise-title" className="sr-only">
            {organizationContent.designPrinciple}
          </h2>
        </div>

        <p className={styles.statement}>
          A Home of Joy for{" "}
          <span className={styles.accent}>Those Who Need Hope</span>.
        </p>

        <ol className={styles.arc}>
          {organizationContent.storyArc.map((step, index) => (
            <li key={step} className={styles.arcItem}>
              <span>{step}</span>
              {index < organizationContent.storyArc.length - 1 ? (
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <SectionCurve position="bottom" fill="var(--landing-off-white)" />
    </section>
  );
}
