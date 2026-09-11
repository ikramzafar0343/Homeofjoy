import design from "@/components/design/designShared.module.css";

import styles from "./MissionIntroduction.module.css";

const missionSegments = [
  { text: "Serve vulnerable", tone: "navy", highlight: true },
  { text: " and ", highlight: false },
  { text: "marginalized communities", tone: "navy", highlight: true },
  { text: " ", highlight: false },
  { text: "across Pakistan", tone: "blue", highlight: true },
  { text: " by providing practical ", highlight: false },
  { text: "support", tone: "blue", highlight: true },
  { text: ", ", highlight: false },
  { text: "education", tone: "blue", highlight: true },
  { text: ", ", highlight: false },
  { text: "protection", tone: "navy", highlight: true },
  { text: ", and ", highlight: false },
  { text: "hope", tone: "orange", highlight: true },
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

export default function MissionIntroduction() {
  return (
    <section
      id="about"
      data-nav-theme="light"
      className={styles.section}
      aria-labelledby="mission-title"
    >
      <div className={design.container}>
        <div className={styles.head}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            Our Mission
          </p>
          <h2 id="mission-title" className="sr-only">
            Serve vulnerable and marginalized communities across Pakistan by providing
            practical support, education, protection, and hope.
          </h2>
        </div>
        <p className={styles.statement}>
          {missionSegments.map((segment, index) => {
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
