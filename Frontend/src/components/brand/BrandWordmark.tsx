import styles from "./BrandWordmark.module.css";

type BrandWordmarkProps = {
  readonly className?: string;
  readonly tone?: "dark" | "light";
  readonly size?: "nav" | "footer";
};

/**
 * Professional two-line lockup:
 * HOME        OF          JOY
 * WELFARE FOUNDATION
 *
 * Primary words are spaced to the full width of the secondary line.
 */
export default function BrandWordmark({
  className = "",
  tone = "dark",
  size = "nav",
}: BrandWordmarkProps) {
  const toneClass = tone === "light" ? styles.light : styles.dark;
  const sizeClass = size === "footer" ? styles.footer : styles.nav;

  return (
    <span
      className={`${styles.lockup} ${toneClass} ${sizeClass} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className={styles.primary}>
        <span>Home</span>
        <span>of</span>
        <span>Joy</span>
      </span>
      <span className={styles.secondary}>Welfare Foundation</span>
    </span>
  );
}
