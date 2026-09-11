type BrandMotifProps = {
  readonly variant?: "curve" | "circle" | "house";
  readonly className?: string;
};

export default function BrandMotif({
  variant = "curve",
  className = "",
}: BrandMotifProps) {
  if (variant === "circle") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={`pointer-events-none absolute text-sky/40 ${className}`.trim()}
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="42" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  if (variant === "house") {
    return (
      <svg
        viewBox="0 0 160 140"
        className={`pointer-events-none absolute text-primary/25 ${className}`.trim()}
        aria-hidden="true"
      >
        <path
          d="M20 70 80 20l60 50v50H20V70z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="70" y="70" width="20" height="20" fill="currentColor" opacity="0.35" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 120"
      className={`pointer-events-none absolute text-secondary/20 ${className}`.trim()}
      aria-hidden="true"
    >
      <path
        d="M10 80c40-50 80-50 120 0s80 50 120 0 80-50 120 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
