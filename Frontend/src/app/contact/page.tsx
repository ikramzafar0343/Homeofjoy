import type { Metadata } from "next";
import dynamic from "next/dynamic";

import PageHero from "@/components/sections/PageHero";
import SectionBand from "@/components/sections/SectionBand";
import { contactIntro } from "@/content/contactContent";
import { organizationContent } from "@/content/organizationContent";
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
        tone="light"
      />

      <SectionBand tone="soft">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="typeLabel mb-4">Contact information</p>
            <h2 className="typeSection mb-5">Reach the foundation</h2>
            <p className="typeBody mb-8">
              Verified phone, email, postal address, and social links will appear here
              when published by {organizationContent.name}. Until then, please use the
              form. Messages are only sent when a verified contact endpoint is
              configured—never simulated.
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy">Organization</dt>
                <dd className="text-bodyGray">{organizationContent.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Country</dt>
                <dd className="text-bodyGray">{organizationContent.country}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Founder</dt>
                <dd className="text-bodyGray">{organizationContent.founderName}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-navy">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionBand>

      <SectionBand tone="white">
        <p className="typeLabel mb-4">Location & social</p>
        <h2 className="typeSection mb-5">Published when verified</h2>
        <p className="typeBody max-w-3xl">
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
