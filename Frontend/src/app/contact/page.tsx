import type { Metadata } from "next";
import dynamic from "next/dynamic";

import design from "@/components/design/designShared.module.css";
import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import Button from "@/components/ui/Button";
import { contactIntro } from "@/content/contactContent";
import { organizationContent } from "@/content/organizationContent";
import { pageHeroGalleries } from "@/content/pageHeroGalleries";
import ContactForm from "@/features/contact/ContactForm";

const FinalCtaSection = dynamic(() => import("@/features/support/FinalCtaSection"));

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Home of Joy Welfare Foundation about partnership, volunteering, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We would be glad to hear from you"
        description={contactIntro}
        gallery={pageHeroGalleries.contact}
      />

      <SectionBand tone="soft">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
              Contact information
            </p>
            <h2 className={`${design.heading} mb-5`}>Reach the foundation</h2>
            <p className={`${design.body} mb-8`}>
              Verified phone, email, postal address, and social links will appear here
              when published by {organizationContent.name}. Until then, please use the
              form. Messages are only sent when a verified contact endpoint is
              configured—never simulated.
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold" style={{ color: "var(--landing-ink)" }}>
                  Organization
                </dt>
                <dd className={design.body}>{organizationContent.name}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--landing-ink)" }}>
                  SECP registration
                </dt>
                <dd className={design.body}>
                  CUIN {organizationContent.registration.secpCuin}
                </dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--landing-ink)" }}>
                  Country
                </dt>
                <dd className={design.body}>{organizationContent.country}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--landing-ink)" }}>
                  Founder
                </dt>
                <dd className={design.body}>{organizationContent.founderName}</dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: "var(--landing-ink)" }}>
                  Bank transfer
                </dt>
                <dd className={`${design.body} mb-4`}>
                  Donations are accepted by transfer to{" "}
                  {organizationContent.bankAccount.accountTitle} (
                  {organizationContent.bankAccount.bankName}). Full IBAN and SWIFT
                  details are on the Donate page.
                </dd>
                <Button href="/donate#bank-transfer" variant="yellow">
                  View bank details
                </Button>
              </div>
            </dl>
          </div>

          <div
            className="rounded-[22px] bg-white p-6 md:p-8"
            style={{ border: "1px solid var(--landing-line)" }}
          >
            <h2 className={`${design.subHeading} mb-6`}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionBand>

      <SectionBand tone="white">
        <p className={`${design.eyebrow} mb-4`} style={{ color: "var(--landing-blue)" }}>
          Location & social
        </p>
        <h2 className={`${design.heading} mb-5`}>Published when verified</h2>
        <p className={design.body} style={{ maxWidth: "58ch" }}>
          Physical location details and social profiles are omitted until the foundation
          provides verified information. This protects accuracy and trust.
        </p>
      </SectionBand>

      <FinalCtaSection
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Volunteer"
        secondaryHref="/volunteer"
      />
    </>
  );
}
