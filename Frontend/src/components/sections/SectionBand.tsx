import design from "@/components/design/designShared.module.css";

import styles from "./SectionBand.module.css";

export type SectionBandTone = "white" | "soft" | "blue" | "deep" | "navy" | "sky";

type SectionBandProps = {
  readonly children: React.ReactNode;
  readonly tone?: SectionBandTone | undefined;
  readonly id?: string | undefined;
  readonly className?: string | undefined;
  readonly curveTop?: boolean | undefined;
  readonly curveBottom?: boolean | undefined;
};

const toneClass: Record<SectionBandTone, string> = {
  white: styles.white ?? "",
  soft: styles.soft ?? "",
  blue: styles.blue ?? "",
  deep: styles.deep ?? "",
  /* Legacy aliases → landing palette */
  navy: styles.blue ?? "",
  sky: styles.soft ?? "",
};

export default function SectionBand({
  children,
  tone = "white",
  id,
  className = "",
}: SectionBandProps) {
  const isDark = tone === "blue" || tone === "deep" || tone === "navy";

  return (
    <section
      id={id}
      data-nav-theme={isDark ? "dark" : "light"}
      className={`${styles.band} ${toneClass[tone]} ${className}`.trim()}
    >
      <div className={`${design.container} ${styles.inner}`}>{children}</div>
    </section>
  );
}
