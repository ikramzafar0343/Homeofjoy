"use client";

import Link from "next/link";

import styles from "./AccentCta.module.css";

type AccentCtaProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly tone?: "sky" | "orange";
  readonly href?: string;
  readonly onClick?: () => void;
};

export default function AccentCta({
  children,
  className = "",
  tone = "sky",
  href,
  onClick,
}: AccentCtaProps) {
  const classes = `${styles.cta} ${tone === "orange" ? styles.ctaOrange : styles.ctaSky} ${className}`.trim();

  const inner = (
    <>
      <span className={styles.ctaLabel}>{children}</span>
      <span className={styles.ctaArrow} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2.5 8h11M9.5 3.5 14 8l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (onClick && !href) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {inner}
      </button>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
