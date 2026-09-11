import Link from "next/link";

import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import { landingOurWork } from "@/features/landing/landingContent";

import shared from "@/components/design/designShared.module.css";
import styles from "./LandingOurWork.module.css";

export default function LandingOurWork() {
  return (
    <section
      id="our-work"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="our-work-title"
    >
      <div className={shared.container}>
        <div className={styles.head}>
          <h2 id="our-work-title" className={`${shared.heading} ${styles.heading}`}>
            {landingOurWork.heading}
          </h2>
          <p className={`${shared.body} ${styles.intro}`}>{landingOurWork.body}</p>
        </div>

        <div className={styles.grid}>
          {landingOurWork.cards.map((card) => (
            <Link key={card.id} href={card.href} className={styles.card}>
              <div className={styles.media}>
                <FieldPhotoStack
                  photos={card.gallery}
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 380px"
                  intervalMs={card.intervalMs}
                />
              </div>
              <p className={styles.cardTitle}>{card.title}</p>
            </Link>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link
            href={landingOurWork.ctaHref}
            className={`${shared.pill} ${shared.pillBlue}`}
          >
            {landingOurWork.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
