import Link from "next/link";

import design from "@/components/design/designShared.module.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outlineLight"
  | "outlineDark"
  | "yellow"
  | "blue"
  | "white"
  | "pink"
  | "green"
  | "purple";

type ButtonProps = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: design.pillBlue ?? "",
  secondary: design.pillBlue ?? "",
  accent: design.pillYellow ?? "",
  yellow: design.pillYellow ?? "",
  blue: design.pillBlue ?? "",
  white: design.pillWhite ?? "",
  pink: design.pillPink ?? "",
  green: design.pillGreen ?? "",
  purple: design.pillPurple ?? "",
  outlineLight: design.pillWhite ?? "",
  outlineDark: design.pillBlue ?? "",
};

export default function Button({
  href,
  children,
  variant = "accent",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${design.pill} ${variantClass[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
