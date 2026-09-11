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
    imageSrc: "/images/sections/child-protection.jpg",
    imageAlt: "Children and families facing need and vulnerability",
  },
  {
    id: "intervention",
    title: "Intervention",
    copy: "Compassionate presence meets urgent needs with education, protection, and care.",
    imageSrc: "/images/sections/education.jpg",
    imageAlt: "Education and care as practical intervention",
  },
  {
    id: "hope",
    title: "Hope",
    copy: "Safer futures take shape as dignity, learning, and community support hold together.",
    imageSrc: "/images/gallery/children-smiling.jpg",
    imageAlt: "Children smiling with renewed hope",
  },
] as const;
