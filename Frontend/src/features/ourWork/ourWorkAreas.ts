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
      "Quality school support and classroom learning for children with limited access.",
    detail:
      "We walk with children and families so learning can replace barriers—through classroom support, school encouragement, and steady pathways into opportunity.",
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
    slug: "literacy",
    title: "Literacy Program",
    description:
      "Reading, writing, and foundational learning so children and youth can grow in knowledge and confidence.",
    detail:
      "Our literacy program helps learners build reading and writing skills through workshops, classroom practice, and encouragement that makes learning feel possible.",
    href: "/our-work/literacy",
    tone: "sky",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt: "Youth literacy workshop in Swat Kalam",
    gallery: [
      {
        src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
        alt: "Youth literacy workshop outdoors in Swat Kalam",
      },
      {
        src: "/images/field/education/discipleship-literacy-workshop-whiteboard.webp",
        alt: "Literacy workshop at a whiteboard",
      },
      {
        src: "/images/field/education/children-writing-clipboards-classroom.webp",
        alt: "Children writing on clipboards in the classroom",
      },
      {
        src: "/images/field/education/classroom-children-alphabet-posters.webp",
        alt: "Classroom with alphabet posters on the wall",
      },
      {
        src: "/images/field/education/children-showing-textbooks-circle-table.webp",
        alt: "Children showing textbooks around a circle table",
      },
      {
        src: "/images/field/education/preschoolers-classroom-red-table.webp",
        alt: "Preschoolers learning at a red classroom table",
      },
    ],
  },
  {
    number: "03",
    slug: "orphanage",
    title: "Orphanage",
    description:
      "Safe accommodation, food, clothing, medical care, and a loving home for vulnerable children.",
    detail:
      "Children in our orphanage receive shelter, nourishment, clothing, education, medical attention, and the dignity of belonging in a protective home.",
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
    number: "04",
    slug: "women-empowerment",
    title: "Women Empowerment & Skills",
    description:
      "Skills training and practical support that help women grow confidence, dignity, and livelihood pathways.",
    detail:
      "Through skill programs and community presence, we walk with women so they can learn practical abilities, strengthen their households, and step into greater opportunity.",
    href: "/our-work/women-empowerment",
    tone: "warm",
    imageSrc: "/images/field/education/girls-showing-cotton-painting-work.webp",
    imageAlt: "Girls showing cotton painting skill work",
    gallery: [
      {
        src: "/images/field/education/girls-showing-cotton-painting-work.webp",
        alt: "Girls showing cotton painting skill work",
      },
      {
        src: "/images/field/outreach/embroidered-cloth-distribution.webp",
        alt: "Embroidered cloth distribution in the community",
      },
      {
        src: "/images/field/outreach/grain-aid-distribution-sindhi-women.webp",
        alt: "Grain aid distribution among Sindhi women",
      },
      {
        src: "/images/field/outreach/community-gathering-veiled-woman-child.webp",
        alt: "Community gathering with a woman and child",
      },
      {
        src: "/images/field/outreach/man-women-bangles-thatched-hut.webp",
        alt: "Women gathered near a thatched hut",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Handing an aid package to a woman with dignity",
      },
    ],
  },
  {
    number: "05",
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
    number: "06",
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
    number: "07",
    slug: "evangelism",
    title: "Evangelism & Discipleship",
    description:
      "Supporting missionaries, small groups, and church-planting teams through compassionate relationships.",
    detail:
      "Hope is shared through respectful relationships—supporting missionaries, small groups, and discipleship with compassion at the center.",
    href: "/our-work/evangelism",
    tone: "faith",
    imageSrc: "/images/field/education/forest-workshop-presenter-board.webp",
    imageAlt: "Presenter leading a discipleship workshop outdoors",
    gallery: [
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
      {
        src: "/images/field/community/gathering-under-tree-speakers.webp",
        alt: "Community gathering under a tree",
      },
      {
        src: "/images/field/education/forest-educational-gathering.webp",
        alt: "Educational gathering in a forest setting",
      },
    ],
  },
  {
    number: "08",
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
