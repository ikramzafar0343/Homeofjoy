import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "outlineLight" | "outlineDark";

type ButtonProps = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy/90 focus-visible:outline-sky",
  secondary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary",
  accent:
    "bg-secondary text-white hover:bg-secondary/90 focus-visible:outline-secondary",
  outlineLight:
    "border border-white/40 bg-transparent text-white hover:bg-white/10 focus-visible:outline-white",
  outlineDark:
    "border border-navy/20 bg-transparent text-navy hover:bg-navy/5 focus-visible:outline-navy",
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
      className={`inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-semibold transition-[transform,background-color,color,border-color] duration-300 ease-standard hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-7 md:text-base ${variantClass[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
