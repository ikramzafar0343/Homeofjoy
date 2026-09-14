import { organizationContent } from "@/content/organizationContent";
import { storyStatement } from "@/features/about/storyContent";
import {
  ourWorkAreas,
  type FieldPhoto,
} from "@/features/ourWork/ourWorkAreas";

export type LandingAccent = "purple" | "pink" | "yellow" | "green";
export type LandingShape = "shapeA" | "shapeB" | "shapeC";

const photo = (src: string, alt: string): FieldPhoto => ({ src, alt });

/** Hero rotates across education, care, celebration, and outreach. */
export const landingHero = {
  eyebrow: organizationContent.name,
  title: organizationContent.designPrinciple,
  body: organizationContent.mission,
  ctaLabel: "Explore Our Work",
  ctaHref: "/our-work",
  gallery: [
    photo(
      "/images/field/education/literacy-classroom-students-writing.webp",
      "Students writing during a literacy classroom session at Home of Joy",
    ),
    photo(
      "/images/field/education/literacy-women-courtyard-group-booklets.webp",
      "Women holding literacy booklets after a community session",
    ),
    photo(
      "/images/field/education/classroom-children-alphabet-posters.webp",
      "Children learning together in a Home of Joy classroom",
    ),
    photo(
      "/images/field/celebration/annual-result-day-uniform-students.webp",
      "Students celebrating together on annual result day",
    ),
    photo(
      "/images/field/care/school-children-communal-meal.webp",
      "Children sharing a communal meal in the school courtyard",
    ),
    photo(
      "/images/field/empowerment/women-literacy-home-session-teaching.webp",
      "Woman facilitator teaching a home literacy session",
    ),
    photo(
      "/images/field/outreach/communal-meal-rural-gathering.webp",
      "Community gathering for a shared meal during outreach",
    ),
  ],
} as const;

export type LandingIntroSection = {
  readonly id: string;
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly gallery: readonly FieldPhoto[];
  readonly shape: LandingShape;
  /** Media column first on desktop, or second. */
  readonly mediaFirst: boolean;
  readonly intervalMs: number;
};

export const landingIntroSections: readonly LandingIntroSection[] = [
  {
    id: "who-we-are",
    heading: "Who We Are",
    paragraphs: [
      storyStatement,
      `Founded by ${organizationContent.founderName}, the foundation walks with families across ${organizationContent.areaServed} through education, protection, and daily care.`,
    ],
    gallery: [
      photo(
        "/images/field/education/children-showing-textbooks-circle-table.webp",
        "Children showing their textbooks around a circle table",
      ),
      photo(
        "/images/field/education/children-learning-yellow-table.webp",
        "Children learning together at a yellow classroom table",
      ),
      photo(
        "/images/field/community/youth-activity-pine-forest-camp.webp",
        "Youth activity in a pine forest camp",
      ),
      photo(
        "/images/field/education/boys-displaying-classroom-artwork.webp",
        "Boys displaying classroom artwork",
      ),
      photo(
        "/images/field/celebration/balloon-cup-game-courtyard.webp",
        "Children playing a balloon cup game in the courtyard",
      ),
    ],
    shape: "shapeA",
    mediaFirst: true,
    intervalMs: 3600,
  },
  {
    id: "our-mission",
    heading: "Our Mission",
    paragraphs: [
      organizationContent.mission,
      "We protect. We educate. We serve. We empower. We bring hope — day by day, family by family.",
    ],
    gallery: [
      photo(
        "/images/field/care/school-children-communal-meal.webp",
        "Children sharing a communal meal in the school courtyard",
      ),
      photo(
        "/images/field/care/serving-food-children-circle.webp",
        "Food being served to children seated in a circle",
      ),
      photo(
        "/images/field/care/woman-caring-for-child-food.webp",
        "A caregiver attending to a child during a meal",
      ),
      photo(
        "/images/field/outreach/children-sharing-meal-rural-village.webp",
        "Children sharing a meal in a rural village",
      ),
      photo(
        "/images/field/care/two-children-holding-hands-portrait.webp",
        "Two children holding hands",
      ),
    ],
    shape: "shapeB",
    mediaFirst: false,
    intervalMs: 4000,
  },
  {
    id: "our-vision",
    heading: "Our Vision",
    paragraphs: [organizationContent.vision],
    gallery: [
      photo(
        "/images/field/celebration/annual-result-day-uniform-students.webp",
        "Students celebrating together on annual result day",
      ),
      photo(
        "/images/field/celebration/student-mathew-trophy-certificate.webp",
        "A student holding a trophy and certificate",
      ),
      photo(
        "/images/field/celebration/annual-result-day-student-leaders.webp",
        "Student leaders on annual result day",
      ),
      photo(
        "/images/field/education/girls-school-uniform-backpacks.webp",
        "Girls in school uniform with backpacks",
      ),
      photo(
        "/images/field/celebration/children-toy-distribution-canopy.webp",
        "Children receiving toys under a canopy",
      ),
    ],
    shape: "shapeC",
    mediaFirst: true,
    intervalMs: 4400,
  },
] as const;

const featuredAreaIds = ["02", "03", "04", "01"] as const;
const rowAccents: readonly LandingAccent[] = [
  "purple",
  "yellow",
  "pink",
  "green",
] as const;
const rowIntervals: readonly number[] = [3400, 3800, 4200, 4600];

export type LandingServiceRow = {
  readonly id: string;
  readonly heading: string;
  readonly body: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly gallery: readonly FieldPhoto[];
  readonly accent: LandingAccent;
  readonly mediaFirst: boolean;
  readonly intervalMs: number;
};

/** Four featured service rows — each rotates photos from that work area. */
export const landingServiceRows: readonly LandingServiceRow[] = featuredAreaIds.flatMap(
  (id, index) => {
    const area = ourWorkAreas.find((item) => item.number === id);
    if (!area) {
      return [];
    }

    return [
      {
        id: area.number,
        heading: area.title,
        body: area.detail || area.description,
        ctaLabel: "Learn More",
        ctaHref: area.href,
        gallery: area.gallery,
        accent: rowAccents[index] ?? "purple",
        mediaFirst: index % 2 === 1,
        intervalMs: rowIntervals[index] ?? 3800,
      },
    ];
  },
);

export const landingFocusPanel = {
  heading: "Literacy & Education in Pakistan",
  paragraphs: [
    "We provide literacy programs, classroom learning, and school support so children with limited access can grow in knowledge, confidence, and hope for a safer future.",
    "Where poverty pushes children toward labour, we accompany families and communities toward learning, protection, and opportunity.",
  ],
  ctaLabel: "See Our Literacy Program",
  ctaHref: "/our-work/literacy",
  gallery: [
    photo(
      "/images/field/education/literacy-classroom-students-writing.webp",
      "Uniformed students writing at desks during a literacy classroom session",
    ),
    photo(
      "/images/field/education/literacy-women-courtyard-whiteboard-lesson.webp",
      "Community literacy lesson for women at a courtyard whiteboard",
    ),
    photo(
      "/images/field/education/literacy-girls-path-of-life-papers.webp",
      "Girls holding Path of Life literacy papers",
    ),
    photo(
      "/images/field/education/literacy-women-path-of-life-booklets.webp",
      "Women holding Path of Life literacy booklets",
    ),
    photo(
      "/images/field/empowerment/women-literacy-home-session-teaching.webp",
      "Woman facilitator teaching a home literacy session",
    ),
  ],
} as const;

export const landingCtaBand = {
  eyebrow: "Join the mission",
  heading: "Be Part of Bringing Hope",
  body: "Together, we can protect children, strengthen families, and create safer futures across Pakistan.",
  ctaLabel: "Support Our Mission",
  ctaHref: "/donate",
  gallery: [
    photo(
      "/images/field/outreach/handing-aid-package-woman.webp",
      "A relief package handed over with dignity during community outreach",
    ),
    photo(
      "/images/field/disaster/flood-relief-aid-distribution.webp",
      "Flood relief aid being distributed to families",
    ),
    photo(
      "/images/field/outreach/aid-distribution-van-crowd.webp",
      "Aid distribution from a van to a gathered crowd",
    ),
    photo(
      "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
      "Carrying relief supplies through flood water",
    ),
    photo(
      "/images/field/community/volunteers-rural-village-huts.webp",
      "Volunteers visiting a rural village",
    ),
    photo(
      "/images/field/outreach/bedding-distribution-truck.webp",
      "Bedding distribution from a truck",
    ),
  ],
} as const;

export type LandingWorkCard = {
  readonly id: string;
  readonly title: string;
  readonly href: string;
  readonly gallery: readonly FieldPhoto[];
  readonly intervalMs: number;
};

export const landingOurWork = {
  heading: "Our Work",
  body: "Eight areas of service across Pakistan — from literacy, orphanage care, and women empowerment to education, protection, discipleship, and emergency response.",
  ctaLabel: "View All Our Work",
  ctaHref: "/our-work",
  cards: ourWorkAreas.map(
    (area, index): LandingWorkCard => ({
      id: area.number,
      title: area.title,
      href: area.href,
      gallery: area.gallery,
      intervalMs: 3200 + index * 350,
    }),
  ),
} as const;
