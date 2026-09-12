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
      "/images/field/education/classroom-children-alphabet-posters.webp",
      "Children learning together in a Home of Joy classroom",
    ),
    photo(
      "/images/field/education/children-showing-textbooks-circle-table.webp",
      "Children showing their textbooks around a circle table",
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
      "/images/field/outreach/communal-meal-rural-gathering.webp",
      "Community gathering for a shared meal during outreach",
    ),
    photo(
      "/images/field/education/children-ring-toss-school-courtyard.webp",
      "Children playing ring toss in the school courtyard",
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

const featuredAreaIds = ["01", "02", "04", "06"] as const;
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
  heading: "Education in Pakistan",
  paragraphs: [
    "We provide quality education, literacy programs, and school support so children with limited access can grow in knowledge, confidence, and hope for a safer future.",
    "Where poverty pushes children toward labour, we accompany families and communities toward learning, protection, and opportunity.",
  ],
  ctaLabel: "See Our Education Work",
  ctaHref: "/our-work/education",
  gallery: [
    photo(
      "/images/field/education/home-of-joy-school-building-front.webp",
      "The Home of Joy school building",
    ),
    photo(
      "/images/field/education/children-workbooks-red-table.webp",
      "Children studying workbooks at a classroom table",
    ),
    photo(
      "/images/field/education/teacher-whiteboard-children-carpet.webp",
      "Teacher at a whiteboard with children seated on a carpet",
    ),
    photo(
      "/images/field/education/children-writing-clipboards-classroom.webp",
      "Children writing on clipboards in the classroom",
    ),
    photo(
      "/images/field/education/boys-tabla-music-lesson.webp",
      "Boys learning tabla in a music lesson",
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
  body: "Six areas of service across Pakistan — from classrooms and daily care to protection, discipleship, and emergency response.",
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
