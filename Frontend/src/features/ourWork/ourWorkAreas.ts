export type OurWorkArea = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly tone: "sky" | "navy" | "warm" | "faith";
  readonly detail: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export const ourWorkAreas: readonly OurWorkArea[] = [
  {
    number: "01",
    title: "Education",
    description:
      "Quality education, literacy programs, and school support for children with limited access.",
    detail:
      "We walk with children and families so learning can replace barriers—through literacy support, school encouragement, and steady pathways into opportunity.",
    href: "/our-work#education",
    tone: "sky",
    imageSrc: "/images/sections/education.jpg",
    imageAlt: "Children learning through education programs",
  },
  {
    number: "02",
    title: "Orphanage & Child Care",
    description:
      "Safe accommodation, food, clothing, medical care, and a loving environment for vulnerable children.",
    detail:
      "Children in our care receive shelter, nourishment, clothing, education, medical attention, and the dignity of belonging in a protective home.",
    href: "/our-work#orphanage",
    tone: "warm",
    imageSrc: "/images/sections/orphanage.jpg",
    imageAlt: "Children receiving care in a protective home",
  },
  {
    number: "03",
    title: "Child Labour Prevention",
    description:
      "Walking with families and brick-kiln communities to move children from labour risk into education.",
    detail:
      "Poverty can push children toward labour. We accompany families and communities toward education, protection, and a safer future.",
    href: "/our-work#child-labour",
    tone: "navy",
    imageSrc: "/images/gallery/school-building.jpg",
    imageAlt: "School pathways that keep children in learning",
  },
  {
    number: "04",
    title: "Child Protection",
    description:
      "Safe environments, supervision, and dignity for girls and boys under foundation care.",
    detail:
      "Every child deserves a safe place to grow. Protection means secure care, attentive supervision, and respect for each child’s dignity.",
    href: "/our-work#child-protection",
    tone: "sky",
    imageSrc: "/images/sections/child-protection.jpg",
    imageAlt: "Safe environments for children under care",
  },
  {
    number: "05",
    title: "Evangelism & Discipleship",
    description:
      "Supporting missionaries, small groups, and church-planting teams through compassionate relationships.",
    detail:
      "Hope is shared through respectful relationships—supporting missionaries, small groups, and discipleship with compassion at the center.",
    href: "/our-work#evangelism",
    tone: "faith",
    imageSrc: "/images/sections/evangelism.jpg",
    imageAlt: "Compassionate discipleship and community faith work",
  },
  {
    number: "06",
    title: "Community & Disaster Outreach",
    description:
      "Responding to poverty, displacement, emergencies, and critical community needs across Pakistan.",
    detail:
      "When communities face disaster, displacement, or sudden crisis, we respond with practical care that upholds dignity.",
    href: "/our-work#outreach",
    tone: "warm",
    imageSrc: "/images/sections/community.jpg",
    imageAlt: "Community outreach and emergency support",
  },
] as const;
