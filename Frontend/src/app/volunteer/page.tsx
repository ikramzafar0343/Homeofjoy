import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { volunteerContent } from "@/content/volunteerContent";

const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Volunteer",
  description: volunteerContent.description,
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow={volunteerContent.eyebrow}
        title={volunteerContent.title}
        description={volunteerContent.description}
        tone="sky"
        ctaLabel="Contact about volunteering"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className="typeLabel mb-4">{volunteerContent.bodyTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Practical care with safeguarding</h2>
        <p className="typeBody max-w-3xl">{volunteerContent.body}</p>
      </SectionBand>
      <SectionBand tone="soft">
        <p className="typeLabel mb-4">{volunteerContent.nextTitle}</p>
        <h2 className="typeSection mb-5 max-w-3xl">Write to the foundation</h2>
        <p className="typeBody mb-8 max-w-3xl">{volunteerContent.nextBody}</p>
        <Button href="/contact" variant="primary">
          Contact about volunteering
        </Button>
      </SectionBand>
      <FinalCtaSection
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Partner With Us"
        secondaryHref="/partner"
      />
    </>
  );
}
