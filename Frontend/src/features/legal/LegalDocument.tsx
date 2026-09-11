import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import { legalContent } from "@/content/legalContent";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";

type LegalDocumentProps = {
  readonly kind: "privacy" | "terms";
};

export default function LegalDocument({ kind }: LegalDocumentProps) {
  const doc = legalContent[kind];

  return (
    <>
      <PageHero
        eyebrow={doc.title}
        title={doc.title}
        description={doc.description}
        gallery={pageHeroGalleries.legal}
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
      <SectionBand tone="soft">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          Status
        </p>
        <h2 className={`${design.heading} mb-5`}>Pending legal review</h2>
        <p className={`${design.body} mb-10`} style={{ maxWidth: "58ch" }}>
          {doc.status}
        </p>
        <ul className="max-w-3xl space-y-4">
          {doc.points.map((point) => (
            <li
              key={point}
              className={`${design.body} border-t pt-4`}
              style={{ borderColor: "var(--landing-line)" }}
            >
              {point}
            </li>
          ))}
        </ul>
        <p className={`${design.body} mt-10`} style={{ maxWidth: "58ch" }}>
          Reach us via{" "}
          <Link
            href="/contact"
            className="font-semibold underline-offset-2 hover:underline"
            style={{ color: "var(--landing-blue)" }}
          >
            Contact
          </Link>
          .
        </p>
      </SectionBand>
    </>
  );
}
