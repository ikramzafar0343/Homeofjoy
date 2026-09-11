import { organizationContent } from "@/content/organizationContent";

export const volunteerContent = {
  eyebrow: "Volunteer",
  title: "Serve alongside the mission",
  description:
    "Volunteers strengthen protection, education, and compassionate presence for communities who need hope.",
  bodyTitle: "What volunteering means here",
  body: `Volunteering with ${organizationContent.name} is about practical care and respectful presence—not publicity. Opportunities are shared when roles, safeguarding, and supervision are clear.`,
  nextTitle: "Take the next step",
  nextBody:
    "Tell us about your skills and availability through the contact form. Choose “Volunteering” as the subject so the team can respond appropriately.",
} as const;
