export const storyStatement =
  "Driven by faith. Focused on people. Fuelled by purpose. Home of Joy Welfare Foundation exists to protect children, create opportunity through education, and bring hope across Pakistan—today and for decades to come.";

export const storySectionLabel = "Our Story";

/**
 * Optional verified story film. Leave unset until the foundation publishes a
 * real video asset — the modal then shows still media + statement instead.
 */
export const storyMedia = {
  imageSrc: "/images/sections/education.jpg",
  imageAlt: "Children learning together with care and hope",
  href: "/about",
  ctaLabel: "Watch our story",
  videoSrc: undefined as string | undefined,
  videoPoster: "/images/sections/education.jpg",
} as const;
