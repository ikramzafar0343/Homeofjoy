import { organizationContent } from "@/content/organizationContent";

export const donateContent = {
  eyebrow: "Donate",
  title: "Support the mission of hope",
  description:
    "Your support helps protect children, strengthen families, and sustain compassionate service across Pakistan.",
  whyTitle: "Why your support matters",
  whyBody: organizationContent.mission,
  howTitle: "How to give right now",
  howBody:
    "Online donations are not enabled on this site yet. To discuss support, use the contact form and choose “Support the mission.” The foundation will respond through verified channels.",
  integrityTitle: "Integrity first",
  integrityBody:
    "We do not display unverified bank details, payment gateways, or invented totals. When giving channels are confirmed, they will be published here.",
} as const;
