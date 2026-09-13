import { organizationContent } from "@/content/organizationContent";

export const bankAccount = organizationContent.bankAccount;

export const donateContent = {
  eyebrow: "Donate",
  title: "Support the mission of hope",
  description:
    "Your support helps protect children, strengthen families, and sustain compassionate service across Pakistan.",
  whyTitle: "Why your support matters",
  whyBody: organizationContent.mission,
  howTitle: "Bank transfer",
  howBody:
    "You can support Home of Joy Welfare Foundation by bank transfer using the verified account details below. For partnership conversations or confirmation of a gift, please also use the contact form.",
  detailsTitle: "Account details",
  integrityTitle: "Give with confidence",
  integrityBody:
    "These bank details are published for Home of Joy Welfare Foundation. Please confirm the account title before transferring. Online card checkout is not enabled on this site yet.",
  contactCtaLabel: "Contact to confirm support",
  workCtaLabel: "See our work",
} as const;
