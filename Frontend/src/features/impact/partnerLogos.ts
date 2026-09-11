export type PartnerLogo = {
  readonly name: string;
  readonly logo: string;
};

/** Demo partner logos for layout — replace with verified partners when confirmed. */
export const partnerLogos: readonly PartnerLogo[] = [
  { name: "UNICEF", logo: "/images/partners/unicef.png" },
  { name: "World Health Organization", logo: "/images/partners/who.png" },
  { name: "UNESCO", logo: "/images/partners/unesco-mark.svg" },
  { name: "UNDP", logo: "/images/partners/undp-mark.svg" },
  { name: "World Vision", logo: "/images/partners/world-vision.svg" },
  { name: "Islamic Relief", logo: "/images/partners/islamic-relief.svg" },
  { name: "Compassion International", logo: "/images/partners/compassion.svg" },
  { name: "Save the Children", logo: "/images/partners/save-the-children.svg" },
  { name: "Pakistan Red Crescent", logo: "/images/partners/red-crescent.svg" },
  { name: "UNHCR", logo: "/images/partners/unhcr.svg" },
  { name: "World Food Programme", logo: "/images/partners/wfp.svg" },
] as const;
