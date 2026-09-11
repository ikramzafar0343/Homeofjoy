import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";

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
        tone="dark"
        ctaLabel="Explore Our Work"
        ctaHref="/our-work"
      />
      <ImpactStatistics />
      <PartnersMarquee />
      <SectionBand tone="soft">
        <p className="typeLabel mb-4">Geographic reach</p>
        <h2 className="typeSection mb-5 max-w-3xl">Communities across Pakistan</h2>
        <p className="typeBody mb-8 max-w-3xl">
          Impact is lived where families live—through working stations and presence
          listed with integrity on our Locations page.
        </p>
        <Link
          href="/locations"
          className="inline-flex rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white"
        >
          View locations
        </Link>
      </SectionBand>
      <FinalCtaSection />
    </>
  );
}
