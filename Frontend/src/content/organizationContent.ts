export const organizationContent = {
  name: "Home of Joy Welfare Foundation",
  shortName: "Home of Joy",
  founderName: "David Sikander Hayyat",
  founderRole: "Founder",
  country: "Pakistan",
  areaServed: "Pakistan",
  designPrinciple: "A Home of Joy for Those Who Need Hope.",
  mission:
    "Serve vulnerable and marginalized communities across Pakistan by providing practical support, education, protection, and hope.",
  vision:
    "Our vision is to protect children, break the cycle of poverty and child labour, provide opportunities through education, and bring hope through compassionate service and the message of Christ.",
  storyArc: [
    "Protect",
    "Educate",
    "Serve",
    "Empower",
    "Bring Hope",
  ] as const,
  visitorPath: [
    "Understand the mission",
    "See the work",
    "Understand the impact",
    "Build trust",
    "Get involved",
  ] as const,
  workAreas: [
    "Education",
    "Literacy Program",
    "Orphanage",
    "Women Empowerment & Skills",
    "Child Labour Prevention",
    "Child Protection",
    "Evangelism & Discipleship",
    "Community & Disaster Outreach",
  ] as const,
  registration: {
    secpLabel: "SECP",
    secpFullName: "Securities and Exchange Commission of Pakistan",
    secpCuin: "0224436",
  },
  bankAccount: {
    accountTitle: "Home of Joy Welfare Foundation",
    iban: "PK44ALFH0368001010909598",
    swiftCode: "ALFHPKKAXXX",
    bankName: "Bank Alfalah",
    country: "Pakistan",
  },
  accountability: {
    eyebrow: "Accountability",
    heading: "Registered. Transparent. Responsible.",
    lead:
      "Home of Joy Welfare Foundation is a registered organization in Pakistan. We are registered with the Securities and Exchange Commission of Pakistan (SECP), CUIN 0224436, and with the Charity Commission. We also work within the Economic Affairs Division (EAD) framework of the Government of Pakistan for foreign funding arrangements.",
    points: [
      {
        title: "SECP registration",
        body: "Registered with the Securities and Exchange Commission of Pakistan. CUIN 0224436.",
      },
      {
        title: "Charity Commission",
        body: "We are registered with the Charity Commission, reflecting our commitment to lawful charitable work.",
      },
      {
        title: "Economic Affairs Division",
        body: "We work within the EAD framework of the Government of Pakistan for foreign funding arrangements.",
      },
    ],
  },
} as const;

export const siteSeo = {
  title: "Home of Joy Welfare Foundation",
  titleTemplate: "%s | Home of Joy Welfare Foundation",
  description:
    "Home of Joy Welfare Foundation serves vulnerable communities across Pakistan through education, child protection, compassionate care, and hope.",
  locale: "en_PK",
  siteName: "Home of Joy Welfare Foundation",
} as const;
