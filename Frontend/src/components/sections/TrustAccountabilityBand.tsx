import design from "@/components/design/designShared.module.css";
import SectionBand from "@/components/sections/SectionBand";
import { organizationContent } from "@/content/organizationContent";

import styles from "./TrustAccountabilityBand.module.css";

type TrustAccountabilityBandProps = {
  readonly tone?: "white" | "soft" | undefined;
  readonly id?: string | undefined;
};

export default function TrustAccountabilityBand({
  tone = "soft",
  id = "accountability",
}: TrustAccountabilityBandProps) {
  const { accountability } = organizationContent;

  return (
    <SectionBand id={id} tone={tone}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            {accountability.eyebrow}
          </p>
          <h2 className={`${design.heading} ${styles.heading}`}>
            {accountability.heading}
          </h2>
          <p className={`${design.body} ${styles.lead}`}>{accountability.lead}</p>
        </div>

        <ul className={styles.points}>
          {accountability.points.map((point) => (
            <li key={point.title} className={styles.point}>
              <h3 className={`${design.subHeading} ${styles.pointTitle}`}>
                {point.title}
              </h3>
              <p className={`${design.body} ${styles.pointBody}`}>{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionBand>
  );
}
