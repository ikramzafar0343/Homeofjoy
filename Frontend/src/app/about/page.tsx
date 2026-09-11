import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

const MissionIntroduction = dynamic(
  () => import("@/features/about/MissionIntroduction"),
);
const DesignPrincipleBand = dynamic(
  () => import("@/features/about/DesignPrincipleBand"),
);
const FounderSection = dynamic(() => import("@/features/about/FounderSection"));
const StoryBlock = dynamic(() => import("@/features/about/StoryBlock"));
const VisionSection = dynamic(() => import("@/features/about/VisionSection"));
const FaithHopeSection = dynamic(() => import("@/features/about/FaithHopeSection"));
const JourneyHorizontal = dynamic(
  () => import("@/features/about/JourneyHorizontal"),
);
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn who Home of Joy Welfare Foundation is—our mission, vision, founder, values, and presence across Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A foundation rooted in care and hope"
        description="We serve vulnerable communities across Pakistan with practical support, education, protection, and respectful, faith-aware compassion."
        gallery={pageHeroGalleries.about}
        ctaLabel="Contact Us"
        ctaHref="/contact"
        secondaryLabel="Our Work"
        secondaryHref="/our-work"
      />
      <MissionIntroduction />
      <DesignPrincipleBand />
      <FounderSection />
      <StoryBlock />
      <VisionSection />
      <FaithHopeSection />
      <JourneyHorizontal />
      <FinalCtaSection />
    </>
  );
}
