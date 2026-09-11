import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

import styles from "./FaithHopeSection.module.css";

const faithPillars = [
  {
    title: "Compassionate Service",
    copy: "Care for children and families remains the center of every outreach.",
  },
  {
    title: "Faith",
    copy: "The hope of Jesus Christ is shared through respectful, relational presence.",
  },
  {
    title: "Hope",
    copy: "Education, protection, and dignity open pathways toward a safer future.",
  },
  {
    title: "Community",
    copy: "Local missionaries and partners walk with marginalized communities across Pakistan.",
  },
] as const;

const faithGallery: readonly FieldPhoto[] = [
  {
    src: "/images/sections/faith.webp",
    alt: "Faith and hope gathering outdoors",
  },
  {
    src: "/images/field/education/discipleship-literacy-workshop-whiteboard.webp",
    alt: "Discipleship literacy workshop",
  },
  {
    src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    alt: "Youth literacy workshop in Swat Kalam",
  },
  {
    src: "/images/field/community/gathering-under-tree-speakers.webp",
    alt: "Community gathering under a tree",
  },
];

export default function FaithHopeSection() {
  return (
    <section
      id="faith-hope"
      data-nav-theme="dark"
      className={styles.section}
      aria-labelledby="faith-hope-title"
    >
      <div className={styles.media} aria-hidden="true">
        <FieldPhotoStack
          photos={faithGallery}
          sizes="100vw"
          intervalMs={4500}
          pauseOnHover={false}
          imageClassName={styles.mediaImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <SectionCurve position="top" fill="var(--landing-blue-deep)" />

      <div className={`${design.container} ${styles.inner}`}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            Faith & Hope
          </p>
          <h2
            id="faith-hope-title"
            className={`${design.heading} ${design.headingLight}`}
          >
            Compassion rooted in faith and hope
          </h2>
          <p className={`${design.body} ${design.bodyLight} ${styles.lead}`}>
            Home of Joy serves through practical care first. Faith shapes the posture
            of the work—never as pressure, always as hope shared through relationship,
            discipleship, and community engagement.
          </p>
        </div>

        <ul className={styles.pillars}>
          {faithPillars.map((pillar) => (
            <li key={pillar.title} className={styles.pillar}>
              <h3 className={`${design.subHeading} ${styles.pillarTitle}`}>
                {pillar.title}
              </h3>
              <p className={`${design.body} ${design.bodyLight} ${styles.pillarCopy}`}>
                {pillar.copy}
              </p>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/partner" className={`${design.pill} ${design.pillYellow}`}>
            Partner With Us
          </Link>
          <Link href="/our-work" className={`${design.pill} ${design.pillWhite}`}>
            Our Work
          </Link>
        </div>
      </div>

      <SectionCurve position="bottom" fill="var(--landing-off-white)" />
    </section>
  );
}
