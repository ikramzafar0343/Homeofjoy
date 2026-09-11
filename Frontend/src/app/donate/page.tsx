import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { donateContent } from "@/content/donateContent";

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
        tone="dark"
        ctaLabel="Contact to support"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className="typeLabel mb-4">{donateContent.whyTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Hope that reaches children and families</h2>
        <p className="typeBody max-w-3xl">{donateContent.whyBody}</p>
      </SectionBand>
      <SectionBand tone="soft">
        <p className="typeLabel mb-4">{donateContent.howTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Start with a conversation</h2>
        <p className="typeBody mb-8 max-w-3xl">{donateContent.howBody}</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="accent">
            Contact to support
          </Button>
          <Button href="/our-work" variant="secondary">
            See our work
          </Button>
        </div>
      </SectionBand>
      <SectionBand tone="navy">
        <p className="typeLabel mb-4 text-sky">{donateContent.integrityTitle}</p>
        <h2 className="typeSection mb-5 text-white">No unverified giving channels</h2>
        <p className="typeBody max-w-3xl text-white/75">{donateContent.integrityBody}</p>
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
