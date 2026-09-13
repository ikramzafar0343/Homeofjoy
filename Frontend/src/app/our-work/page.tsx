import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import StudentStoryBand from "@/components/sections/StudentStoryBand";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";
import { qasidStudentStory } from "@/content/studentStories";
import OurWorkAreasDetail from "@/features/ourWork/OurWorkAreasDetail";

const WorkGallerySection = dynamic(
  () => import("@/features/ourWork/WorkGallerySection"),
);
const HowWeServeSection = dynamic(
  () => import("@/features/ourWork/HowWeServeSection"),
);
const FeaturedSpotlight = dynamic(
  () => import("@/features/ourWork/FeaturedSpotlight"),
);
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Home of Joy’s work: literacy, orphanage care, women empowerment and skills, education, child labour prevention, protection, discipleship, and community outreach.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Practical care across areas of service"
        description="From literacy and orphanage care to women empowerment, education, and community response, our work upholds dignity and opens pathways to hope."
        gallery={pageHeroGalleries.ourWork}
        ctaLabel="Support the mission"
        ctaHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <WorkGallerySection />
      <HowWeServeSection />
      <StudentStoryBand
        story={qasidStudentStory}
        mediaFirst
        bottomFill="var(--landing-blue-deep)"
      />
      <FeaturedSpotlight />
      <OurWorkAreasDetail />
      <FinalCtaSection />
    </>
  );
}
