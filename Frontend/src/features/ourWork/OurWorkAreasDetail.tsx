import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import SectionBand from "@/components/sections/SectionBand";
import { ourWorkAreas } from "@/features/ourWork/ourWorkAreas";

import styles from "./OurWorkAreasDetail.module.css";

const sectionIds = [
  "education",
  "orphanage",
  "child-labour",
  "child-protection",
  "evangelism",
  "outreach",
] as const;

const frameClass = [
  design.shapeA,
  design.shapeB,
  design.shapeCircle,
  design.shapeA,
  design.shapeB,
  design.shapeCircle,
] as const;

export default function OurWorkAreasDetail() {
  return (
    <>
      {ourWorkAreas.map((area, index) => {
        const id = sectionIds[index] ?? `area-${area.number}`;
        const tone = index % 2 === 0 ? "white" : "soft";
        const isCircle = index % 3 === 2;
        const mediaFirst = index % 2 === 0;

        return (
          <SectionBand key={area.number} id={id} tone={tone}>
            <div
              className={`${styles.row} ${
                mediaFirst ? styles.mediaFirst : styles.copyFirst
              }`}
            >
              <div className={styles.mediaCol}>
                <div
                  className={`${styles.media} ${
                    isCircle ? styles.mediaCircle : ""
                  } ${frameClass[index] ?? design.shapeCircle}`.trim()}
                >
                  <FieldPhotoStack
                    photos={area.gallery}
                    sizes="(max-width: 1024px) 90vw, 440px"
                    intervalMs={3400 + index * 300}
                  />
                </div>
              </div>
              <div className={styles.copyCol}>
                <p
                  className={`${design.eyebrow} mb-4`}
                  style={{ color: "var(--landing-blue)" }}
                >
                  {area.number} · {area.title}
                </p>
                <h2 className={`${design.heading} mb-5`}>{area.title}</h2>
                <p className={`${design.body} mb-5`}>{area.detail}</p>
                <p className={design.body}>{area.description}</p>
              </div>
            </div>
          </SectionBand>
        );
      })}
    </>
  );
}
