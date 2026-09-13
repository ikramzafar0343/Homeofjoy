import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import { howWeServeTopics } from "@/features/ourWork/howWeServeTopics";

import styles from "./HowWeServeSection.module.css";

const accents = [
  design.pillPurple,
  design.pillYellow,
  design.pillPink,
  design.pillGreen,
  design.pillPurple,
] as const;

const topicStoryHref: Record<string, string> = {
  protect: "/our-work/child-protection",
  educate: "/our-work/literacy",
  serve: "/our-work/orphanage",
  empower: "/our-work/women-empowerment",
  "bring-hope": "/our-work/evangelism",
};

export default function HowWeServeSection() {
  return (
    <section
      id="how-we-serve"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="how-we-serve-title"
    >
      <SectionCurve position="top" fill="var(--landing-blue)" />

      <div className={design.container}>
        <div className={styles.head}>
          <p className={`${design.eyebrow}`} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            How we serve
          </p>
          <h2
            id="how-we-serve-title"
            className={`${design.heading} ${design.headingLight}`}
          >
            Protect. Educate. Serve. Empower. Bring Hope.
          </h2>
          <p className={`${design.body} ${design.bodyLight} ${styles.intro}`}>
            Five pathways that guide our work with children and families across Pakistan.
          </p>
        </div>

        <div className={styles.rows}>
          {howWeServeTopics.map((topic, index) => {
            const mediaFirst = index % 2 === 1;

            return (
              <div
                key={topic.id}
                className={`${styles.row} ${
                  mediaFirst ? styles.mediaFirst : styles.copyFirst
                }`}
              >
                <div className={styles.mediaCol}>
                  <div className={`${styles.media} ${design.shapeCircle}`}>
                    <FieldPhotoStack
                      photos={topic.gallery}
                      sizes="(max-width: 1024px) 68vw, 300px"
                      intervalMs={3400 + index * 280}
                    />
                  </div>
                </div>

                <div className={styles.copyCol}>
                  <p className={`${design.eyebrow} ${styles.eyebrow}`}>{topic.label}</p>
                  <h3 className={`${design.subHeading} ${styles.rowHeading}`}>
                    {topic.label}
                  </h3>
                  <p className={`${design.body} ${design.bodyLight} ${styles.rowBody}`}>
                    {topic.summary}
                  </p>
                  <Link
                    href={topicStoryHref[topic.id] ?? "/our-work"}
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

      <SectionCurve position="bottom" fill="#ffffff" />
    </section>
  );
}
