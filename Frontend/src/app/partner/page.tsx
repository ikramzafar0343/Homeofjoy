import type { Metadata } from "next";
import dynamic from "next/dynamic";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";
import { partnerContent } from "@/content/partnerContent";

const PartnersMarquee = dynamic(() => import("@/features/impact/PartnersMarquee"));
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Partner",
  description: partnerContent.description,
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow={partnerContent.eyebrow}
        title={partnerContent.title}
        description={partnerContent.description}
        gallery={pageHeroGalleries.partner}
        ctaLabel="Contact about partnership"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {partnerContent.bodyTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Shared commitment, clear reporting</h2>
        <p className={design.body} style={{ maxWidth: "58ch" }}>
          {partnerContent.body}
        </p>
      </SectionBand>
      <PartnersMarquee />
      <SectionBand tone="soft">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {partnerContent.nextTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Open a partnership conversation</h2>
        <p className={`${design.body} mb-8`} style={{ maxWidth: "58ch" }}>
          {partnerContent.nextBody}
        </p>
        <Button href="/contact" variant="yellow">
          Contact about partnership
        </Button>
      </SectionBand>
      <FinalCtaSection
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
