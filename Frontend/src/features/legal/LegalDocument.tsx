import Link from "next/link";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import { legalContent } from "@/content/legalContent";

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
        tone="light"
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
      <SectionBand tone="soft">
        <p className="typeLabel mb-4">Status</p>
        <h2 className="typeSection mb-5 max-w-3xl">Pending legal review</h2>
        <p className="typeBody mb-10 max-w-3xl">{doc.status}</p>
        <ul className="max-w-3xl space-y-4">
          {doc.points.map((point) => (
            <li key={point} className="border-t border-lightGray pt-4 typeBody">
              {point}
            </li>
          ))}
        </ul>
        <p className="typeBody mt-10 max-w-3xl">
          Reach us via{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-2 hover:underline">
            Contact
          </Link>
          .
        </p>
      </SectionBand>
    </>
  );
}
