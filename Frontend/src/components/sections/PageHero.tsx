import BrandMotif from "@/components/ui/BrandMotif";
import Button from "@/components/ui/Button";

type PageHeroProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly tone?: "light" | "dark" | "sky";
  readonly ctaLabel?: string;
  readonly ctaHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  tone = "light",
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  const isDark = tone === "dark";
  const isSky = tone === "sky";

  return (
    <section
      data-nav-theme={isDark ? "dark" : "light"}
      className={`relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 ${
        isDark
          ? "bg-navy text-white"
          : isSky
            ? "bg-sky/35 text-navy"
            : "bg-white text-navy"
      }`}
    >
      <BrandMotif
        variant="circle"
        className={`top-10 right-[-3rem] h-56 w-56 ${isDark ? "text-sky/25" : ""}`}
      />
      <div className="siteContainer relative z-10 max-w-4xl">
        <p className={`typeLabel mb-5 ${isDark ? "text-sky" : ""}`}>{eyebrow}</p>
        <h1 className={`typeSection mb-6 max-w-3xl ${isDark ? "text-white" : ""}`}>
          {title}
        </h1>
        <p
          className={`typeBody mb-10 max-w-2xl ${
            isDark ? "text-white/75" : "text-bodyGray"
          }`}
        >
          {description}
        </p>
        {ctaLabel && ctaHref ? (
          <Button href={ctaHref} variant={isDark ? "accent" : "primary"}>
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
