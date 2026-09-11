import Image from "next/image";

import design from "@/components/design/designShared.module.css";
import { journeySteps } from "@/features/about/journeySteps";

import styles from "./JourneyHorizontal.module.css";

const frameClass = [design.shapeA, design.shapeCircle, design.shapeB] as const;

export default function JourneyHorizontal() {
  return (
    <section
      id="journey"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="journey-title"
    >
      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            Our Journey
          </p>
          <h2 id="journey-title" className={design.heading}>
            From Need to Intervention to Hope
          </h2>
          <p className={`${design.body} ${styles.intro}`}>
            A simple path that guides every act of care — meeting urgent need, walking
            with families, and opening safer futures.
          </p>
        </div>

        <div className={styles.grid}>
          {journeySteps.map((step, index) => {
            const isCircle = index === 1;

            return (
              <article key={step.id} className={styles.card}>
                <div
                  className={`${styles.media} ${
                    isCircle ? styles.mediaCircle : ""
                  } ${frameClass[index] ?? design.shapeSoft}`.trim()}
                >
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                </div>
                <div className={styles.copy}>
                  <p className={`${design.eyebrow} ${styles.index}`}>
                    {String(index + 1).padStart(2, "0")} · Stage
                  </p>
                  <h3 className={`${design.subHeading} ${styles.title}`}>{step.title}</h3>
                  <p className={`${design.body} ${styles.body}`}>{step.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
