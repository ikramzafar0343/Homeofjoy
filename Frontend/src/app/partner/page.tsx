import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
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
        tone="light"
        ctaLabel="Contact about partnership"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className="typeLabel mb-4">{partnerContent.bodyTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Shared commitment, clear reporting</h2>
        <p className="typeBody max-w-3xl">{partnerContent.body}</p>
      </SectionBand>
      <PartnersMarquee />
      <SectionBand tone="soft">
        <p className="typeLabel mb-4">{partnerContent.nextTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Open a partnership conversation</h2>
        <p className="typeBody mb-8 max-w-3xl">{partnerContent.nextBody}</p>
        <Button href="/contact" variant="primary">
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
