export type ImpactStatement = {
  readonly value: number;
  readonly suffix: string;
  readonly statement: string;
};

/** Demo figures for UI only — replace with verified totals when available. */
export const impactStatements: readonly ImpactStatement[] = [
  {
    value: 2840,
    suffix: "+",
    statement: "Children receive care, protection, and pathways into learning.",
  },
  {
    value: 38,
    suffix: "",
    statement: "Work continues across communities facing poverty and vulnerability.",
  },
  {
    value: 65,
    suffix: "",
    statement: "Literacy and school support open doors where access is limited.",
  },
  {
    value: 12,
    suffix: "",
    statement: "Local missionaries serve through relationship and compassionate presence.",
  },
  {
    value: 9,
    suffix: "",
    statement: "Stations across Pakistan sustain ongoing outreach and care.",
  },
  {
    value: 1120,
    suffix: "+",
    statement: "Families are met with practical help that upholds dignity.",
  },
] as const;

export type ImpactSlide = {
  readonly id: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly items: readonly ImpactStatement[];
};

export const impactSlides: readonly ImpactSlide[] = [
  {
    id: "care",
    imageSrc: "/images/gallery/children-smiling.jpg",
    imageAlt: "Children smiling with hope and joy",
    items: [
      {
        value: 2840,
        suffix: "+",
        statement: "Children receive care, protection, and pathways into learning.",
      },
      {
        value: 65,
        suffix: "",
        statement: "Literacy and school support open doors where access is limited.",
      },
      {
        value: 1120,
        suffix: "+",
        statement: "Families are met with practical help that upholds dignity.",
      },
    ],
  },
  {
    id: "presence",
    imageSrc: "/images/sections/faith.jpg",
    imageAlt: "Compassionate presence in community ministry",
    items: [
      {
        value: 38,
        suffix: "",
        statement:
          "Work continues across communities facing poverty and vulnerability.",
      },
      {
        value: 12,
        suffix: "",
        statement:
          "Local missionaries serve through relationship and compassionate presence.",
      },
      {
        value: 9,
        suffix: "",
        statement: "Stations across Pakistan sustain ongoing outreach and care.",
      },
    ],
  },
  {
    id: "outreach",
    imageSrc: "/images/sections/community.jpg",
    imageAlt: "Community outreach and practical support",
    items: [
      {
        value: 420,
        suffix: "+",
        statement:
          "Safe environments and attentive care protect dignity for girls and boys.",
      },
      {
        value: 18,
        suffix: "",
        statement:
          "When crisis strikes, we respond with practical help that upholds dignity.",
      },
      {
        value: 6500,
        suffix: "+",
        statement:
          "Faithful presence and compassionate relationships bring lasting hope.",
      },
    ],
  },
] as const;
