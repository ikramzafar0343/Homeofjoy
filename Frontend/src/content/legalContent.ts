import { organizationContent } from "@/content/organizationContent";

export const legalContent = {
  privacy: {
    title: "Privacy",
    description: `How ${organizationContent.name} intends to handle personal information shared through this website.`,
    status:
      "A full privacy policy will be published after legal review. Until then, treat this page as a transparent placeholder—not legal advice.",
    points: [
      "We ask only for information needed to respond to inquiries you send through the contact form.",
      "Messages are processed only when a verified contact endpoint is configured; we do not invent or simulate delivery.",
      "We do not sell personal data.",
      "For privacy questions, contact the foundation through the Contact page.",
    ],
  },
  terms: {
    title: "Terms of use",
    description: `General terms for using the ${organizationContent.name} website.`,
    status:
      "Full terms of use will be published after legal review. Until then, this page states basic expectations only.",
    points: [
      "Content on this site is provided for information about the foundation’s mission and work.",
      "Do not misuse the site, attempt unauthorized access, or submit false or harmful content through forms.",
      "Verified statistics, contact details, and giving channels appear only when confirmed by the foundation.",
      "Questions about these terms can be sent through the Contact page.",
    ],
  },
} as const;
