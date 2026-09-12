export type FieldPhoto = {
  readonly src: string;
  readonly alt: string;
};

export type OurWorkArea = {
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly tone: "sky" | "navy" | "warm" | "faith";
  readonly detail: string;
  /** Primary still — first gallery photo (kept for any single-image consumers). */
  readonly imageSrc: string;
  readonly imageAlt: string;
  /** Field photos for this work area — cards rotate; story pages show a full gallery. */
  readonly gallery: readonly FieldPhoto[];
};

export function getWorkAreaBySlug(slug: string): OurWorkArea | undefined {
  return ourWorkAreas.find((area) => area.slug === slug);
}

export const ourWorkAreas: readonly OurWorkArea[] = [
  {
    number: "01",
    slug: "education",
    title: "Education",
    description:
      "Quality education, literacy programs, and school support for children with limited access.",
    detail:
      "We walk with children and families so learning can replace barriers—through literacy support, school encouragement, and steady pathways into opportunity.",
    href: "/our-work/education",
    tone: "sky",
    imageSrc: "/images/field/education/children-workbooks-red-table.webp",
    imageAlt:
      "Young students reading workbooks around a yellow table at Home of Joy School",
    gallery: [
      {
        src: "/images/field/education/children-workbooks-red-table.webp",
        alt: "Children studying workbooks at a red classroom table",
      },
      {
        src: "/images/field/education/classroom-children-alphabet-posters.webp",
        alt: "Classroom of children with alphabet posters on the wall",
      },
      {
        src: "/images/field/education/teacher-whiteboard-children-carpet.webp",
        alt: "Teacher at a whiteboard with children seated on a carpet",
      },
      {
        src: "/images/field/education/girls-school-uniform-backpacks.webp",
        alt: "Girls in school uniform with backpacks",
      },
      {
        src: "/images/field/education/home-of-joy-school-building-front.webp",
        alt: "Front of the Home of Joy school building",
      },
      {
        src: "/images/field/education/boys-displaying-classroom-artwork.webp",
        alt: "Boys displaying classroom artwork",
      },
    ],
  },
  {
    number: "02",
    slug: "orphanage",
    title: "Orphanage & Child Care",
    description:
      "Safe accommodation, food, clothing, medical care, and a loving environment for vulnerable children.",
    detail:
      "Children in our care receive shelter, nourishment, clothing, education, medical attention, and the dignity of belonging in a protective home.",
    href: "/our-work/orphanage",
    tone: "warm",
    imageSrc: "/images/field/care/school-children-communal-meal.webp",
    imageAlt:
      "Uniformed children sharing a communal meal on a red carpet in the school courtyard",
    gallery: [
      {
        src: "/images/field/care/school-children-communal-meal.webp",
        alt: "School children sharing a communal meal together",
      },
      {
        src: "/images/field/care/children-sharing-rice-platter.webp",
        alt: "Children sharing a rice platter",
      },
      {
        src: "/images/field/care/man-serving-rice-to-children.webp",
        alt: "A caregiver serving rice to children",
      },
      {
        src: "/images/field/care/woman-caring-for-child-food.webp",
        alt: "A woman caring for a child during a meal",
      },
      {
        src: "/images/field/care/serving-food-children-circle.webp",
        alt: "Food being served to children seated in a circle",
      },
      {
        src: "/images/field/care/two-girls-brick-courtyard.webp",
        alt: "Two girls standing in a brick courtyard",
      },
    ],
  },
  {
    number: "03",
    slug: "child-labour",
    title: "Child Labour Prevention",
    description:
      "Walking with families and brick-kiln communities to move children from labour risk into education.",
    detail:
      "Poverty can push children toward labour. We accompany families and communities toward education, protection, and a safer future.",
    href: "/our-work/child-labour",
    tone: "navy",
    imageSrc: "/images/field/outreach/brick-kiln-community-gathering.webp",
    imageAlt:
      "A speaker addresses women and children seated on rugs at a brick-kiln outreach site",
    gallery: [
      {
        src: "/images/field/outreach/brick-kiln-community-gathering.webp",
        alt: "Community gathering at a brick-kiln outreach site",
      },
      {
        src: "/images/field/outreach/village-meeting-under-tree.webp",
        alt: "Village meeting gathered under a tree",
      },
      {
        src: "/images/field/community/outdoor-community-meeting-rugs.webp",
        alt: "Outdoor community meeting on rugs",
      },
      {
        src: "/images/field/outreach/man-visiting-children-rural-village.webp",
        alt: "Visiting children in a rural village",
      },
      {
        src: "/images/field/outreach/volunteer-with-boys-thatched-hut.webp",
        alt: "Volunteer with boys beside a thatched hut",
      },
      {
        src: "/images/field/education/children-showing-textbooks-circle-table.webp",
        alt: "Children showing textbooks around a circle table",
      },
    ],
  },
  {
    number: "04",
    slug: "child-protection",
    title: "Child Protection",
    description:
      "Safe environments, supervision, and dignity for girls and boys under foundation care.",
    detail:
      "Every child deserves a safe place to grow. Protection means secure care, attentive supervision, and respect for each child’s dignity.",
    href: "/our-work/child-protection",
    tone: "sky",
    imageSrc: "/images/field/care/two-children-holding-hands-portrait.webp",
    imageAlt:
      "A young boy and girl holding hands in a protective Home of Joy setting",
    gallery: [
      {
        src: "/images/field/care/two-children-holding-hands-portrait.webp",
        alt: "Two children holding hands in a safe setting",
      },
      {
        src: "/images/field/celebration/balloon-cup-game-courtyard.webp",
        alt: "Children playing a balloon cup game in the courtyard",
      },
      {
        src: "/images/field/celebration/children-toy-distribution-canopy.webp",
        alt: "Children receiving toys under a canopy",
      },
      {
        src: "/images/field/education/girl-ball-toss-back-to-school.webp",
        alt: "Girl tossing a ball at a back-to-school activity",
      },
      {
        src: "/images/field/education/children-ring-toss-school-courtyard.webp",
        alt: "Children playing ring toss in the school courtyard",
      },
      {
        src: "/images/field/care/two-girls-brick-courtyard.webp",
        alt: "Two girls in a brick courtyard",
      },
    ],
  },
  {
    number: "05",
    slug: "evangelism",
    title: "Evangelism & Discipleship",
    description:
      "Supporting missionaries, small groups, and church-planting teams through compassionate relationships.",
    detail:
      "Hope is shared through respectful relationships—supporting missionaries, small groups, and discipleship with compassion at the center.",
    href: "/our-work/evangelism",
    tone: "faith",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt:
      "Instructor leading a discipleship and literacy youth workshop outdoors",
    gallery: [
      {
        src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
        alt: "Youth literacy workshop in Swat Kalam",
      },
      {
        src: "/images/field/education/discipleship-literacy-workshop-whiteboard.webp",
        alt: "Discipleship literacy workshop at a whiteboard",
      },
      {
        src: "/images/field/education/forest-workshop-presenter-board.webp",
        alt: "Presenter at a forest workshop with a board",
      },
      {
        src: "/images/field/education/workshop-pastors-presenting-banner.webp",
        alt: "Pastors presenting a workshop banner",
      },
      {
        src: "/images/field/education/outdoor-workshop-forest-camp.webp",
        alt: "Outdoor workshop at a forest camp",
      },
      {
        src: "/images/field/education/harmonium-music-class-circle.webp",
        alt: "Harmonium music class in a circle",
      },
    ],
  },
  {
    number: "06",
    slug: "outreach",
    title: "Community & Disaster Outreach",
    description:
      "Responding to poverty, displacement, emergencies, and critical community needs across Pakistan.",
    detail:
      "When communities face disaster, displacement, or sudden crisis, we respond with practical care that upholds dignity.",
    href: "/our-work/outreach",
    tone: "warm",
    imageSrc: "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
    imageAlt: "Community members carrying relief supplies through floodwater",
    gallery: [
      {
        src: "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
        alt: "Carrying relief supplies through floodwater",
      },
      {
        src: "/images/field/disaster/flood-relief-aid-distribution.webp",
        alt: "Flood relief aid distribution",
      },
      {
        src: "/images/field/disaster/relief-distribution-truck-crowd.webp",
        alt: "Relief distribution from a truck to a gathered crowd",
      },
      {
        src: "/images/field/outreach/aid-distribution-van-crowd.webp",
        alt: "Aid distribution from a van to a crowd",
      },
      {
        src: "/images/field/outreach/flour-sack-distribution-truck.webp",
        alt: "Flour sack distribution from a truck",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Handing an aid package to a woman",
      },
    ],
  },
] as const;
