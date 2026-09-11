import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";
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
    "Explore Home of Joy’s six areas of work: education, child care, child labour prevention, protection, discipleship, and community outreach.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Practical care across six areas of service"
        description="From education and protection to community response, our work is designed to uphold dignity and open pathways to hope."
        gallery={pageHeroGalleries.ourWork}
        ctaLabel="Support the mission"
        ctaHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <WorkGallerySection />
      <HowWeServeSection />
      <FeaturedSpotlight />
      <OurWorkAreasDetail />
      <FinalCtaSection />
    </>
  );
}
