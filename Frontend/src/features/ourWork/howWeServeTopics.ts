import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

export type HowWeServeTopic = {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly summary: string;
  readonly detail: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly gallery: readonly FieldPhoto[];
};

/** Story-arc pathways — distinct from the What We Do work areas. */
export const howWeServeTopics: readonly HowWeServeTopic[] = [
  {
    id: "protect",
    label: "Protect",
    heading:
      "Protection gives children safety, dignity, and the freedom to grow without fear.",
    summary:
      "We walk with vulnerable girls and boys so they can live in secure care, with attentive supervision and respect for every child’s worth.",
    detail:
      "Protection is the first step in our promise. Through safe environments, careful oversight, and compassionate presence, we help children leave harm behind and recover the confidence to learn, play, and belong.",
    imageSrc: "/images/field/care/two-children-holding-hands-portrait.webp",
    imageAlt: "Children supported in a safe protective environment",
    gallery: [
      {
        src: "/images/field/care/two-children-holding-hands-portrait.webp",
        alt: "Two children holding hands in a protective setting",
      },
      {
        src: "/images/field/celebration/balloon-cup-game-courtyard.webp",
        alt: "Children playing safely in the courtyard",
      },
      {
        src: "/images/field/care/two-girls-brick-courtyard.webp",
        alt: "Two girls in a brick courtyard",
      },
      {
        src: "/images/field/celebration/children-toy-distribution-canopy.webp",
        alt: "Children receiving toys under a canopy",
      },
    ],
  },
  {
    id: "educate",
    label: "Educate",
    heading:
      "Education and literacy open doors that poverty tried to close, one learner at a time.",
    summary:
      "Literacy support, school encouragement, and steady pathways help children with limited access grow in knowledge and hope.",
    detail:
      "When a child can learn, the future of a family begins to change. We support literacy programs, classrooms, learning materials, and the encouragement children need to stay in school and discover opportunity.",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt: "A youth literacy workshop supporting foundational learning",
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
        src: "/images/field/education/children-workbooks-red-table.webp",
        alt: "Children studying workbooks at a classroom table",
      },
      {
        src: "/images/field/education/home-of-joy-school-exterior.webp",
        alt: "Home of Joy school exterior",
      },
    ],
  },
  {
    id: "serve",
    label: "Serve",
    heading:
      "Practical service meets real needs with compassion that upholds dignity.",
    summary:
      "From daily care to emergency response, we serve marginalized communities across Pakistan with steady, respectful help.",
    detail:
      "Service is love made visible—food, shelter, clothing, medical attention, and presence when families face crisis. We respond without spectacle, keeping the dignity of each person at the center.",
    imageSrc: "/images/field/care/school-children-communal-meal.webp",
    imageAlt: "Compassionate care and daily service for children",
    gallery: [
      {
        src: "/images/field/care/school-children-communal-meal.webp",
        alt: "Children sharing a communal meal",
      },
      {
        src: "/images/field/care/man-serving-rice-to-children.webp",
        alt: "Serving rice to children",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Handing an aid package with dignity",
      },
      {
        src: "/images/field/disaster/flood-relief-aid-distribution.webp",
        alt: "Flood relief aid distribution",
      },
    ],
  },
  {
    id: "empower",
    label: "Empower",
    heading:
      "Empowerment helps women and families move from survival toward lasting strength.",
    summary:
      "Skills training and practical support help women grow confidence, dignity, and livelihood pathways for their households.",
    detail:
      "Empowerment means walking with women and communities—building practical skills, encouraging safer futures for children, and strengthening the confidence families need to choose a different path.",
    imageSrc: "/images/field/education/girls-showing-cotton-painting-work.webp",
    imageAlt: "Girls showing skill work from a women empowerment program",
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
        alt: "Community support among women",
      },
      {
        src: "/images/field/outreach/handing-aid-package-woman.webp",
        alt: "Support handed to a woman with dignity",
      },
    ],
  },
  {
    id: "bring-hope",
    label: "Bring Hope",
    heading:
      "Hope is shared through faithful presence, relationship, and the message of Christ.",
    summary:
      "Through compassionate relationships and discipleship, we bring hope that reaches beyond immediate need into lasting purpose.",
    detail:
      "Hope is not a slogan—it is presence. We support missionaries, small groups, and caring relationships so communities can encounter compassion, encouragement, and the light of faith.",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt: "Hope shared through compassionate community presence",
    gallery: [
      {
        src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
        alt: "Youth literacy workshop outdoors",
      },
      {
        src: "/images/field/education/discipleship-literacy-workshop-whiteboard.webp",
        alt: "Discipleship literacy workshop",
      },
      {
        src: "/images/field/education/workshop-pastors-presenting-banner.webp",
        alt: "Pastors presenting a workshop banner",
      },
      {
        src: "/images/field/community/gathering-under-tree-speakers.webp",
        alt: "Community gathering under a tree",
      },
    ],
  },
] as const;
