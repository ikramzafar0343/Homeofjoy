import Image from "next/image";

type SplashVisualProps = {
  readonly className?: string;
  readonly tone?: "sky" | "navy" | "warm" | "faith";
  readonly imageSrc?: string;
  readonly imageAlt?: string;
  readonly priority?: boolean;
};

const toneStyles = {
  sky: "from-light via-primary/30 to-dark/40",
  navy: "from-dark via-dark/90 to-primary/40",
  warm: "from-light via-secondary/25 to-dark/50",
  faith: "from-softBg via-light/60 to-primary/20",
} as const;

export default function SplashVisual({
  className = "",
  tone = "sky",
  imageSrc,
  imageAlt = "",
  priority = false,
}: SplashVisualProps) {
  return (
    <div
      className={`heroSplash relative overflow-hidden ${className}`.trim()}
      aria-hidden="true"
      data-image-placeholder="brand-splash"
    >
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${toneStyles[tone]}`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.35),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgb(var(--color-blue-rgb)/0.2),transparent_40%)]" />
        </>
      )}
    </div>
  );
}
