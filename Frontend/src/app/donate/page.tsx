import type { Metadata } from "next";
import dynamic from "next/dynamic";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { donateContent } from "@/content/donateContent";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Donate",
  description: donateContent.description,
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow={donateContent.eyebrow}
        title={donateContent.title}
        description={donateContent.description}
        gallery={pageHeroGalleries.donate}
        ctaLabel="Contact to support"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {donateContent.whyTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Hope that reaches children and families</h2>
        <p className={design.body} style={{ maxWidth: "58ch" }}>
          {donateContent.whyBody}
        </p>
      </SectionBand>
      <SectionBand tone="soft">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {donateContent.howTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Start with a conversation</h2>
        <p className={`${design.body} mb-8`} style={{ maxWidth: "58ch" }}>
          {donateContent.howBody}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="yellow">
            Contact to support
          </Button>
          <Button href="/our-work" variant="blue">
            See our work
          </Button>
        </div>
      </SectionBand>
      <SectionBand tone="blue">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "rgb(255 255 255 / 0.85)" }}>
          {donateContent.integrityTitle}
        </p>
        <h2 className={`${design.heading} ${design.headingLight} mb-5`}>
          No unverified giving channels
        </h2>
        <p className={`${design.body} ${design.bodyLight}`} style={{ maxWidth: "58ch" }}>
          {donateContent.integrityBody}
        </p>
      </SectionBand>
      <FinalCtaSection
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Volunteer"
        secondaryHref="/volunteer"
      />
    </>
  );
}
