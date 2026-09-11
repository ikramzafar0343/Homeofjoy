import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

/** Curated field photos for the brand preloader collage. */
export const preloaderPhotos: readonly FieldPhoto[] = [
  {
    src: "/images/field/education/children-workbooks-red-table.webp",
    alt: "Children studying at Home of Joy School",
  },
  {
    src: "/images/field/care/school-children-communal-meal.webp",
    alt: "Children sharing a communal meal",
  },
  {
    src: "/images/field/outreach/handing-aid-package-woman.webp",
    alt: "Community outreach with dignified aid",
  },
  {
    src: "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
    alt: "Disaster relief through floodwater",
  },
  {
    src: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    alt: "Youth literacy workshop in the field",
  },
  {
    src: "/images/field/care/two-children-holding-hands-portrait.webp",
    alt: "Children holding hands in a protective setting",
  },
] as const;
