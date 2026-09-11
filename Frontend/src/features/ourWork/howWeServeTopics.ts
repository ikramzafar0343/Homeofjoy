export type HowWeServeTopic = {
  readonly id: string;
  readonly label: string;
  readonly heading: string;
  readonly summary: string;
  readonly detail: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
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
    imageSrc: "/images/sections/child-protection.jpg",
    imageAlt: "Children supported in a safe protective environment",
  },
  {
    id: "educate",
    label: "Educate",
    heading:
      "Education opens doors that poverty tried to close, one learner at a time.",
    summary:
      "Literacy support, school encouragement, and steady pathways help children with limited access grow in knowledge and hope.",
    detail:
      "When a child can learn, the future of a family begins to change. We support classrooms, learning materials, and the encouragement children need to stay in school and discover opportunity.",
    imageSrc: "/images/sections/education.jpg",
    imageAlt: "A child learning through education support",
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
    imageSrc: "/images/sections/orphanage.jpg",
    imageAlt: "Compassionate care and daily service for children",
  },
  {
    id: "empower",
    label: "Empower",
    heading:
      "Empowerment helps families move from survival toward lasting strength.",
    summary:
      "We accompany communities so children can leave labour risk behind and step into safer, more hopeful pathways.",
    detail:
      "Empowerment means walking with parents and communities—strengthening protection, encouraging education, and building the confidence families need to choose a different future for their children.",
    imageSrc: "/images/gallery/school-building.jpg",
    imageAlt: "Pathways that keep children in learning and opportunity",
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
    imageSrc: "/images/sections/evangelism.jpg",
    imageAlt: "Hope shared through compassionate community presence",
  },
] as const;
