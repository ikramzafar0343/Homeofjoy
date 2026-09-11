export type WorkLocationRegion = {
  readonly region: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly locations: readonly string[];
};

export const workLocationRegions: readonly WorkLocationRegion[] = [
  {
    region: "Punjab / Central",
    imageSrc: "/images/gallery/community-event.webp",
    imageAlt: "Women and children gathered for an outdoor community meeting",
    locations: [
      "Sheikhupura",
      "Narowal",
      "Zafarwal",
      "Faisalabad",
      "South Punjab",
      "Brick-kiln communities across Punjab",
    ],
  },
  {
    region: "Islamabad / Northern",
    imageSrc: "/images/field/education/youth-literacy-workshop-swat-kalam.webp",
    imageAlt: "Discipleship and literacy youth workshop in Swat Kalam",
    locations: [
      "Islamabad",
      "Northern Areas of Pakistan",
      "Azad Kashmir",
      "Swat",
    ],
  },
  {
    region: "Khyber Pakhtunkhwa",
    imageSrc: "/images/sections/community.webp",
    imageAlt: "Flood relief - carrying supplies through deep water",
    locations: [
      "Peshawar",
      "Kohat",
      "Bannu",
      "Tank",
      "Dera Ismail Khan",
      "Wana, South Waziristan",
      "Parachinar",
      "Mir Shah / Miranshah, North Waziristan",
    ],
  },
  {
    region: "Balochistan",
    imageSrc: "/images/gallery/school-building.webp",
    imageAlt: "Home of Joy School exterior",
    locations: ["Quetta, Balochistan"],
  },
] as const;
