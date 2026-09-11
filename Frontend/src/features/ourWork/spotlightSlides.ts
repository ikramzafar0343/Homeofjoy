export type SpotlightSlide = {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly body: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export const spotlightSlides: readonly SpotlightSlide[] = [
  {
    id: "education",
    label: "Education",
    heading: "Opening doors through learning.",
    body: "We provide quality education, literacy programs, and school support so children with limited access can grow in knowledge, confidence, and hope.",
    ctaLabel: "Explore Education",
    ctaHref: "/our-work#education",
    imageSrc: "/images/sections/education.jpg",
    imageAlt: "Child studying with books in a classroom setting",
  },
  {
    id: "care",
    label: "Orphanage & Child Care",
    heading: "A safe home for every child.",
    body: "Vulnerable children receive shelter, nourishment, clothing, medical care, and the dignity of belonging in a protective, loving environment.",
    ctaLabel: "Explore Child Care",
    ctaHref: "/our-work#orphanage",
    imageSrc: "/images/sections/orphanage.jpg",
    imageAlt: "Children receiving care in a protective home",
  },
  {
    id: "protection",
    label: "Child Protection",
    heading: "Protecting dignity and safety.",
    body: "We create safe environments with attentive supervision so girls and boys under our care can grow with security and respect.",
    ctaLabel: "Explore Protection",
    ctaHref: "/our-work#child-protection",
    imageSrc: "/images/sections/child-protection.jpg",
    imageAlt: "Safe environments for children under care",
  },
  {
    id: "outreach",
    label: "Community Outreach",
    heading: "Standing with communities in need.",
    body: "When families face poverty, displacement, or disaster, we respond with practical care that upholds dignity across Pakistan.",
    ctaLabel: "Explore Outreach",
    ctaHref: "/our-work#outreach",
    imageSrc: "/images/sections/community.jpg",
    imageAlt: "Community outreach and emergency support",
  },
] as const;
