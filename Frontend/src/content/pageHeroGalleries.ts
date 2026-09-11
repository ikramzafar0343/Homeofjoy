import type { FieldPhoto } from "@/features/ourWork/ourWorkAreas";

const photo = (src: string, alt: string): FieldPhoto => ({ src, alt });

export const pageHeroGalleries = {
  about: [
    photo(
      "/images/field/education/classroom-children-alphabet-posters.webp",
      "Children learning in a Home of Joy classroom",
    ),
    photo(
      "/images/field/care/school-children-communal-meal.webp",
      "Children sharing a communal meal",
    ),
    photo(
      "/images/field/community/outdoor-community-meeting-rugs.webp",
      "Community meeting outdoors",
    ),
    photo(
      "/images/field/celebration/annual-result-day-uniform-students.webp",
      "Students on annual result day",
    ),
  ],
  ourWork: [
    photo(
      "/images/field/education/children-workbooks-red-table.webp",
      "Children studying workbooks",
    ),
    photo(
      "/images/field/care/serving-food-children-circle.webp",
      "Serving food to children",
    ),
    photo(
      "/images/field/outreach/brick-kiln-community-gathering.webp",
      "Community gathering near a brick kiln",
    ),
    photo(
      "/images/field/disaster/flood-relief-aid-distribution.webp",
      "Flood relief distribution",
    ),
  ],
  impact: [
    photo(
      "/images/field/celebration/student-mathew-trophy-certificate.webp",
      "A student holding a trophy and certificate",
    ),
    photo(
      "/images/field/education/boys-displaying-classroom-artwork.webp",
      "Boys displaying classroom artwork",
    ),
    photo(
      "/images/field/outreach/children-sharing-meal-rural-village.webp",
      "Children sharing a meal in a rural village",
    ),
  ],
  locations: [
    photo(
      "/images/field/community/volunteers-rural-village-huts.webp",
      "Volunteers in a rural village",
    ),
    photo(
      "/images/field/outreach/aid-distribution-van-crowd.webp",
      "Aid distribution to a gathered crowd",
    ),
    photo(
      "/images/field/disaster/relief-distribution-truck-crowd.webp",
      "Relief distribution from a truck",
    ),
  ],
  contact: [
    photo(
      "/images/field/community/community-meeting-note-taking.webp",
      "Community meeting with note taking",
    ),
    photo(
      "/images/field/outreach/communal-meal-rural-gathering.webp",
      "Communal meal during rural outreach",
    ),
  ],
  donate: [
    photo(
      "/images/field/outreach/handing-aid-package-woman.webp",
      "Handing an aid package with dignity",
    ),
    photo(
      "/images/field/care/woman-caring-for-child-food.webp",
      "Caregiver attending to a child",
    ),
    photo(
      "/images/field/disaster/carrying-relief-supplies-through-flood.webp",
      "Carrying relief supplies through flood water",
    ),
  ],
  partner: [
    photo(
      "/images/field/community/men-circle-meeting-floor.webp",
      "Men meeting in a circle on the floor",
    ),
    photo(
      "/images/field/community/gathering-under-tree-speakers.webp",
      "Community gathering under a tree",
    ),
  ],
  volunteer: [
    photo(
      "/images/field/outreach/carrying-food-aid-sacks.webp",
      "Carrying food aid sacks",
    ),
    photo(
      "/images/field/community/youth-activity-pine-forest-camp.webp",
      "Youth activity at a forest camp",
    ),
    photo(
      "/images/field/celebration/children-toy-distribution-canopy.webp",
      "Children receiving toys under a canopy",
    ),
  ],
  legal: [
    photo(
      "/images/field/education/home-of-joy-school-building-front.webp",
      "Home of Joy school building",
    ),
    photo(
      "/images/field/education/children-learning-yellow-table.webp",
      "Children learning at a yellow table",
    ),
  ],
} as const;
