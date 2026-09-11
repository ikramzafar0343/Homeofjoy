import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";

const WhereWeWork = dynamic(() => import("@/features/locations/WhereWeWork"));
const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Locations",
  description:
    "See where Home of Joy Welfare Foundation works across Pakistan—verified regional locations listed with integrity.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Where we work across Pakistan"
        description="These locations are listed exactly as verified. We do not invent map pins, categories, or unverified station labels."
        tone="light"
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
      <WhereWeWork />
      <SectionBand tone="navy">
        <p className="typeLabel mb-4 text-sky">Integrity note</p>
        <h2 className="typeSection mb-5 text-white">Listed only when verified</h2>
        <p className="typeBody max-w-3xl text-white/75">
          Category labels and station details appear only when individually confirmed.
          Until then, locations remain under Our Reach without invented map data.
        </p>
      </SectionBand>
      <FinalCtaSection />
    </>
  );
}
