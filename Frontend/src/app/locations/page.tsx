import type { Metadata } from "next";
import dynamic from "next/dynamic";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

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
        gallery={pageHeroGalleries.locations}
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
      <WhereWeWork />
      <SectionBand tone="blue">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "rgb(255 255 255 / 0.85)" }}>
          Integrity note
        </p>
        <h2 className={`${design.heading} ${design.headingLight} mb-5`}>
          Listed only when verified
        </h2>
        <p className={`${design.body} ${design.bodyLight}`} style={{ maxWidth: "58ch" }}>
          Category labels and station details appear only when individually confirmed.
          Until then, locations remain under Our Reach without invented map data.
        </p>
      </SectionBand>
      <FinalCtaSection />
    </>
  );
}
