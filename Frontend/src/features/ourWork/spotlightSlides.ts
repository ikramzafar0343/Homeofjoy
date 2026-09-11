import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

export type SpotlightSlide = {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly body: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly gallery: readonly FieldPhoto[];
};

export const spotlightSlides: readonly SpotlightSlide[] = [
  {
    id: "education",
    label: "Education",
    heading: "Opening doors through learning.",
    body: "We provide quality education, literacy programs, and school support so children with limited access can grow in knowledge, confidence, and hope.",
    ctaLabel: "Explore Education",
    ctaHref: "/our-work#education",
    imageSrc: "/images/field/education/children-workbooks-red-table.webp",
    imageAlt: "Young students reading workbooks at Home of Joy School",
    gallery: [
      {
        src: "/images/field/education/children-workbooks-red-table.webp",
        alt: "Children studying workbooks at a classroom table",
      },
      {
        src: "/images/field/education/classroom-children-alphabet-posters.webp",
        alt: "Classroom with alphabet posters",
      },
      {
        src: "/images/field/education/girls-school-uniform-backpacks.webp",
        alt: "Girls in school uniform with backpacks",
      },
      {
        src: "/images/field/education/home-of-joy-school-building-front.webp",
        alt: "Home of Joy school building",
      },
    ],
  },
  {
    id: "care",
    label: "Orphanage & Child Care",
    heading: "A safe home for every child.",
    body: "Vulnerable children receive shelter, nourishment, clothing, medical care, and the dignity of belonging in a protective, loving environment.",
    ctaLabel: "Explore Child Care",
    ctaHref: "/our-work#orphanage",
    imageSrc: "/images/field/care/school-children-communal-meal.webp",
    imageAlt: "Children sharing a communal meal in the school courtyard",
    gallery: [
      {
        src: "/images/field/care/school-children-communal-meal.webp",
        alt: "Children sharing a communal meal",
      },
      {
        src: "/images/field/care/children-sharing-rice-platter.webp",
        alt: "Children sharing a rice platter",
      },
      {
        src: "/images/field/care/man-serving-rice-to-children.webp",
        alt: "Serving rice to children",
      },
      {
        src: "/images/field/care/woman-caring-for-child-food.webp",
        alt: "Caring for a child during a meal",
      },
    ],
  },
  {
    id: "protection",
    label: "Child Protection",
    heading: "Protecting dignity and safety.",
    body: "We create safe environments with attentive supervision so girls and boys under our care can grow with security and respect.",
    ctaLabel: "Explore Protection",
    ctaHref: "/our-work#child-protection",
    imageSrc: "/images/field/care/two-children-holding-hands-portrait.webp",
    imageAlt: "Two children holding hands in a protective setting",
    gallery: [
      {
        src: "/images/field/care/two-children-holding-hands-portrait.webp",
        alt: "Two children holding hands",
      },
      {
        src: "/images/field/celebration/balloon-cup-game-courtyard.webp",
        alt: "Children playing in the courtyard",
      },
      {
        src: "/images/field/celebration/children-toy-distribution-canopy.webp",
        alt: "Toy distribution under a canopy",
      },
      {
        src: "/images/field/education/children-ring-toss-school-courtyard.webp",
        alt: "Children playing ring toss",
      },
    ],
  },
  {
    id: "outreach",
    label: "Community Outreach",
    heading: "Standing with communities in need.",
    body: "When families face poverty, displacement, or disaster, we respond with practical care that upholds dignity across Pakistan.",
    ctaLabel: "Explore Outreach",
    ctaHref: "/our-work#outreach",
    imageSrc: "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
    imageAlt: "Carrying relief supplies through floodwater",
    gallery: [
      {
        src: "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
        alt: "Carrying relief through floodwater",
      },
      {
        src: "/images/field/disaster/flood-relief-aid-distribution.webp",
        alt: "Flood relief distribution",
      },
      {
        src: "/images/field/outreach/aid-distribution-van-crowd.webp",
        alt: "Aid distribution from a van",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Handing an aid package to a woman",
      },
    ],
  },
] as const;
