/**
 * Soft SVG bowl/dome used as a section edge across the site.
 */
export default function SectionCurve({
  position = "bottom",
  fill = "var(--landing-blue)",
  className = "",
}: {
  readonly position?: "top" | "bottom";
  readonly fill?: string;
  readonly className?: string;
}) {
  const isTop = position === "top";

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-2%",
        right: "-2%",
        width: "104%",
        [isTop ? "top" : "bottom"]: 0,
        height: "var(--landing-curve)",
        lineHeight: 0,
        pointerEvents: "none",
        transform: isTop ? "translateY(-99%)" : "translateY(99%)",
        zIndex: 2,
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        focusable="false"
      >
        {isTop ? (
          <path
            d="M0,160 C240,40 480,10 720,30 C960,50 1200,90 1440,160 L1440,160 L0,160 Z"
            fill={fill}
          />
        ) : (
          <path
            d="M0,0 C240,120 480,150 720,130 C960,110 1200,70 1440,0 L1440,0 L0,0 Z"
            fill={fill}
          />
        )}
      </svg>
    </div>
  );
}
