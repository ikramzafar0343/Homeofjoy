export type WorkLocationRegion = {
  readonly region: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly locations: readonly string[];
};

export const workLocationRegions: readonly WorkLocationRegion[] = [
  {
    region: "Punjab / Central",
    imageSrc: "/images/gallery/community-event.jpg",
    imageAlt: "Community gathering in Punjab",
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
    imageSrc: "/images/sections/hero.jpg",
    imageAlt: "Northern communities and outreach",
    locations: [
      "Islamabad",
      "Northern Areas of Pakistan",
      "Azad Kashmir",
      "Swat",
    ],
  },
  {
    region: "Khyber Pakhtunkhwa",
    imageSrc: "/images/sections/community.jpg",
    imageAlt: "Communities served in Khyber Pakhtunkhwa",
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
    imageSrc: "/images/gallery/school-building.jpg",
    imageAlt: "Outreach presence in Balochistan",
    locations: ["Quetta, Balochistan"],
  },
] as const;
