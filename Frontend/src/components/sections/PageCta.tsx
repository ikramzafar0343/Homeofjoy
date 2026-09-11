import Button from "@/components/ui/Button";

type PageCtaProps = {
  readonly title: string;
  readonly description: string;
  readonly primaryLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryLabel?: string;
  readonly secondaryHref?: string;
};

export default function PageCta({
  title,
  description,
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel = "Our Work",
  secondaryHref = "/our-work",
}: PageCtaProps) {
  return (
    <section data-nav-theme="dark" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="siteContainer relative z-10 max-w-3xl">
        <p className="typeLabel mb-4 text-sky">Next step</p>
        <h2 className="typeSection mb-5 text-white">{title}</h2>
        <p className="typeBody mb-10 text-white/75">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Button href={primaryHref} variant="accent">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
