"use client";

import Link from "next/link";

import design from "@/components/design/designShared.module.css";

type AccentTone = "sky" | "orange" | "yellow" | "blue" | "pink" | "green" | "purple" | "white";

type AccentCtaProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly tone?: AccentTone;
  readonly href?: string;
  readonly onClick?: () => void;
};

const toneClass: Record<AccentTone, string> = {
  sky: design.pillBlue ?? "",
  orange: design.pillYellow ?? "",
  yellow: design.pillYellow ?? "",
  blue: design.pillBlue ?? "",
  pink: design.pillPink ?? "",
  green: design.pillGreen ?? "",
  purple: design.pillPurple ?? "",
  white: design.pillWhite ?? "",
};

export default function AccentCta({
  children,
  className = "",
  tone = "yellow",
  href,
  onClick,
}: AccentCtaProps) {
  const classes = `${design.pill} ${toneClass[tone]} ${className}`.trim();

  if (onClick && !href) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {children}
      </button>
    );
  }

  if (!href) {
    return null;
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
