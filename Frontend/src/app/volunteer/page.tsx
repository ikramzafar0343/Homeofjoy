import type { Metadata } from "next";
import dynamic from "next/dynamic";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";
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
        gallery={pageHeroGalleries.volunteer}
        ctaLabel="Contact about volunteering"
        ctaHref="/contact"
      />
      <SectionBand tone="white">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {volunteerContent.bodyTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Practical care with safeguarding</h2>
        <p className={design.body} style={{ maxWidth: "58ch" }}>
          {volunteerContent.body}
        </p>
      </SectionBand>
      <SectionBand tone="soft">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          {volunteerContent.nextTitle}
        </p>
        <h2 className={`${design.heading} mb-5`}>Write to the foundation</h2>
        <p className={`${design.body} mb-8`} style={{ maxWidth: "58ch" }}>
          {volunteerContent.nextBody}
        </p>
        <Button href="/contact" variant="yellow">
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
