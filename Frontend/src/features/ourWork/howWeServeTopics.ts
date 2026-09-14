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
    imageSrc: "/images/field/education/literacy-classroom-students-writing.webp",
    imageAlt: "Students writing during a literacy classroom session at Home of Joy",
    gallery: [
      {
        src: "/images/field/education/literacy-classroom-students-writing.webp",
        alt: "Uniformed students writing at desks in a literacy classroom",
      },
      {
        src: "/images/field/education/literacy-women-courtyard-whiteboard-lesson.webp",
        alt: "Community literacy lesson at a courtyard whiteboard",
      },
      {
        src: "/images/field/education/literacy-girls-path-of-life-papers.webp",
        alt: "Girls holding Path of Life literacy papers",
      },
      {
        src: "/images/field/education/literacy-women-circle-studying-booklets.webp",
        alt: "Women studying literacy booklets in a circle",
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
      "Literacy sessions, skills practice, and practical support help women grow confidence, dignity, and livelihood pathways for their households.",
    detail:
      "Empowerment means walking with women and communities—building literacy and practical skills, encouraging safer futures for children, and strengthening the confidence families need to choose a different path.",
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
