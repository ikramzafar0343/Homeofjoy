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
    id: "literacy",
    label: "Literacy Program",
    heading: "Reading and writing that open futures.",
    body: "Our literacy program helps children and youth build foundational reading and writing skills through workshops, classroom practice, and encouragement.",
    ctaLabel: "Explore Literacy",
    ctaHref: "/our-work/literacy",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt: "Youth literacy workshop in Swat Kalam",
    gallery: [
      {
        src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
        alt: "Youth literacy workshop outdoors",
      },
      {
        src: "/images/field/education/discipleship-literacy-workshop-whiteboard.webp",
        alt: "Literacy workshop at a whiteboard",
      },
      {
        src: "/images/field/education/children-writing-clipboards-classroom.webp",
        alt: "Children writing on clipboards",
      },
      {
        src: "/images/field/education/classroom-children-alphabet-posters.webp",
        alt: "Classroom with alphabet posters",
      },
    ],
  },
  {
    id: "orphanage",
    label: "Orphanage",
    heading: "A safe home for every child.",
    body: "Vulnerable children receive shelter, nourishment, clothing, medical care, and the dignity of belonging in a protective, loving orphanage home.",
    ctaLabel: "Explore Orphanage",
    ctaHref: "/our-work/orphanage",
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
    id: "women-empowerment",
    label: "Women Empowerment & Skills",
    heading: "Skills that strengthen women and families.",
    body: "Through skill programs and community presence, we walk with women so they can learn practical abilities, strengthen households, and grow in dignity.",
    ctaLabel: "Explore Skills Program",
    ctaHref: "/our-work/women-empowerment",
    imageSrc: "/images/field/education/girls-showing-cotton-painting-work.webp",
    imageAlt: "Girls showing cotton painting skill work",
    gallery: [
      {
        src: "/images/field/education/girls-showing-cotton-painting-work.webp",
        alt: "Girls showing cotton painting skill work",
      },
      {
        src: "/images/field/outreach/embroidered-cloth-distribution.webp",
        alt: "Embroidered cloth distribution",
      },
      {
        src: "/images/field/outreach/grain-aid-distribution-sindhi-women.webp",
        alt: "Grain aid distribution among women",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Handing an aid package to a woman",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    heading: "Opening doors through learning.",
    body: "We provide quality education and school support so children with limited access can grow in knowledge, confidence, and hope.",
    ctaLabel: "Explore Education",
    ctaHref: "/our-work/education",
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
] as const;
