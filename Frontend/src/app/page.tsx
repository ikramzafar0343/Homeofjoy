import dynamic from "next/dynamic";

import DesignPrincipleBand from "@/features/about/DesignPrincipleBand";
import MissionIntroduction from "@/features/about/MissionIntroduction";
import HomeHero from "@/features/home/HomeHero";

const WorkGallerySection = dynamic(() => import("@/features/ourWork/WorkGallerySection"));
const FeaturedSpotlight = dynamic(() => import("@/features/ourWork/FeaturedSpotlight"));
const HowWeServeSection = dynamic(() => import("@/features/ourWork/HowWeServeSection"));
const ImpactStatistics = dynamic(() => import("@/features/impact/ImpactStatistics"));
const PartnersMarquee = dynamic(() => import("@/features/impact/PartnersMarquee"));
const WhereWeWork = dynamic(() => import("@/features/locations/WhereWeWork"));
const JourneyHorizontal = dynamic(() => import("@/features/about/JourneyHorizontal"));
const StoryBlock = dynamic(() => import("@/features/about/StoryBlock"));
const FounderSection = dynamic(() => import("@/features/about/FounderSection"));
const VisionSection = dynamic(() => import("@/features/about/VisionSection"));
const FaithHopeSection = dynamic(() => import("@/features/about/FaithHopeSection"));
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export default function Home() {
  return (
    <>
      <HomeHero />
      <MissionIntroduction />
      <DesignPrincipleBand />
      <WorkGallerySection />
      <FeaturedSpotlight />
      <HowWeServeSection />
      <ImpactStatistics />
      <PartnersMarquee />
      <WhereWeWork />
      <JourneyHorizontal />
      <FounderSection />
      <StoryBlock />
      <VisionSection />
      <FaithHopeSection />
      <FinalCtaSection />
    </>
  );
}
