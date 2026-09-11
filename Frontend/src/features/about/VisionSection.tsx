import design from "@/components/design/designShared.module.css";

import styles from "./VisionSection.module.css";

const visionSegments = [
  { text: "Protect children", tone: "navy", highlight: true },
  { text: ", ", highlight: false },
  { text: "break the cycle", tone: "navy", highlight: true },
  { text: " of ", highlight: false },
  { text: "poverty and child labour", tone: "blue", highlight: true },
  { text: ", provide ", highlight: false },
  { text: "opportunities through education", tone: "blue", highlight: true },
  { text: ", and ", highlight: false },
  { text: "bring hope", tone: "orange", highlight: true },
  { text: " through ", highlight: false },
  { text: "compassionate service", tone: "navy", highlight: true },
  { text: " and the ", highlight: false },
  { text: "message of Christ", tone: "orange", highlight: true },
  { text: ".", highlight: false },
] as const;

function toneClass(tone: "navy" | "blue" | "orange"): string {
  if (tone === "blue") {
    return styles.toneBlue ?? "";
  }
  if (tone === "orange") {
    return styles.toneYellow ?? "";
  }
  return styles.toneInk ?? "";
}

export default function VisionSection() {
  return (
    <section
      id="vision"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="vision-title"
    >
      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            Our Vision
          </p>
          <h2 id="vision-title" className="sr-only">
            Protect children, break the cycle of poverty and child labour, provide
            opportunities through education, and bring hope through compassionate service
            and the message of Christ.
          </h2>
        </div>
        <p className={styles.statement}>
          {visionSegments.map((segment, index) => {
            if (!segment.highlight) {
              return (
                <span key={`link-${index}`} className={styles.link}>
                  {segment.text}
                </span>
              );
            }

            return (
              <span
                key={`${segment.text}-${index}`}
                className={toneClass(segment.tone)}
              >
                {segment.text}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
