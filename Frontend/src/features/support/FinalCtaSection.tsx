import PageCta, { type PageCtaProps } from "@/components/sections/PageCta";

export type FinalCtaSectionProps = PageCtaProps & {
  readonly contactLabel?: string | undefined;
  readonly contactHref?: string | undefined;
};

/**
 * Site-wide closing CTA — same photographic pill band used on the homepage.
 * Kept as a named export so existing page imports keep working.
 */
export default function FinalCtaSection({
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel,
  secondaryHref,
  contactLabel = "Contact Us",
  contactHref = "/contact",
  ...rest
}: FinalCtaSectionProps = {}) {
  return (
    <PageCta
      primaryLabel={primaryLabel}
      primaryHref={primaryHref}
      secondaryLabel={secondaryLabel ?? contactLabel}
      secondaryHref={secondaryHref ?? contactHref}
      {...rest}
    />
  );
}
