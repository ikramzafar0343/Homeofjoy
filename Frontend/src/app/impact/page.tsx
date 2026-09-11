import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

const ImpactStatistics = dynamic(
  () => import("@/features/impact/ImpactStatistics"),
);
const PartnersMarquee = dynamic(() => import("@/features/impact/PartnersMarquee"));
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See how Home of Joy approaches impact—areas of work, demo statistics for layout, reach across Pakistan, and future vision.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Measured with integrity"
        description="Figures below are demo placeholders for design. Verified totals will replace them when confirmed."
        gallery={pageHeroGalleries.impact}
        ctaLabel="Explore Our Work"
        ctaHref="/our-work"
      />
      <ImpactStatistics />
      <PartnersMarquee />
      <SectionBand tone="soft">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          Geographic reach
        </p>
        <h2 className={`${design.heading} mb-5`}>Communities across Pakistan</h2>
        <p className={`${design.body} mb-8`} style={{ maxWidth: "58ch" }}>
          Impact is lived where families live—through working stations and presence
          listed with integrity on our Locations page.
        </p>
        <Link href="/locations" className={`${design.pill} ${design.pillBlue}`}>
          View locations
        </Link>
      </SectionBand>
      <FinalCtaSection />
    </>
  );
}
