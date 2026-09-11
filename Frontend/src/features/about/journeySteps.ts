export type JourneyStep = {
  readonly id: string;
  readonly title: string;
  readonly copy: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export const journeySteps: readonly JourneyStep[] = [
  {
    id: "need",
    title: "Need",
    copy: "Children and families face poverty, risk, and limited access to opportunity.",
    imageSrc: "/images/sections/child-protection.webp",
    imageAlt: "Two children holding hands under Home of Joy care",
  },
  {
    id: "intervention",
    title: "Intervention",
    copy: "Compassionate presence meets urgent needs with education, protection, and care.",
    imageSrc: "/images/sections/education.webp",
    imageAlt: "Students learning together in a Home of Joy classroom",
  },
  {
    id: "hope",
    title: "Hope",
    copy: "Safer futures take shape as dignity, learning, and community support hold together.",
    imageSrc: "/images/gallery/children-smiling.webp",
    imageAlt: "Four children sharing a communal meal together",
  },
] as const;
