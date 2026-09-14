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
    body: "Our literacy program helps children, youth, and women build foundational reading and writing skills through classrooms, community sessions, and encouragement.",
    ctaLabel: "Explore Literacy",
    ctaHref: "/our-work/literacy",
    imageSrc: "/images/field/education/literacy-classroom-students-writing.webp",
    imageAlt: "Uniformed students writing at desks during a literacy classroom session",
    gallery: [
      {
        src: "/images/field/education/literacy-classroom-students-writing.webp",
        alt: "Uniformed students writing at desks during a literacy classroom session",
      },
      {
        src: "/images/field/education/literacy-girls-path-of-life-papers.webp",
        alt: "Girls holding Path of Life literacy papers",
      },
      {
        src: "/images/field/education/literacy-women-courtyard-whiteboard-lesson.webp",
        alt: "Community literacy lesson at a courtyard whiteboard",
      },
      {
        src: "/images/field/education/literacy-women-circle-studying-booklets.webp",
        alt: "Women studying literacy booklets in a circle",
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
    body: "Through literacy sessions, skill practice, and community presence, we walk with women so they can learn, strengthen households, and grow in dignity.",
    ctaLabel: "Explore Skills Program",
    ctaHref: "/our-work/women-empowerment",
    imageSrc: "/images/field/education/literacy-women-courtyard-group-booklets.webp",
    imageAlt: "Women holding literacy booklets after a community empowerment session",
    gallery: [
      {
        src: "/images/field/education/literacy-women-courtyard-group-booklets.webp",
        alt: "Women holding literacy booklets after a community session",
      },
      {
        src: "/images/field/empowerment/women-literacy-home-session-teaching.webp",
        alt: "Woman facilitator teaching a home literacy session",
      },
      {
        src: "/images/field/empowerment/women-literacy-group-reading-booklets.webp",
        alt: "Women reading literacy booklets together",
      },
      {
        src: "/images/field/empowerment/women-literacy-writing-notebook-floral.webp",
        alt: "Woman practicing writing in a notebook",
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
