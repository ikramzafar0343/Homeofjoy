export type SiteNavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly { readonly label: string; readonly href: string }[];
};

export const siteNavItems: readonly SiteNavItem[] = [
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Education", href: "/our-work/education" },
      { label: "Literacy Program", href: "/our-work/literacy" },
      { label: "Orphanage", href: "/our-work/orphanage" },
      { label: "Women Empowerment & Skills", href: "/our-work/women-empowerment" },
      { label: "Child Labour Prevention", href: "/our-work/child-labour" },
      { label: "Child Protection", href: "/our-work/child-protection" },
      { label: "Evangelism & Discipleship", href: "/our-work/evangelism" },
      { label: "Community Outreach", href: "/our-work/outreach" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Founder", href: "/about#founder" },
      { label: "Vision & Mission", href: "/about#vision" },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
] as const;

export const supportCta = {
  label: "Donate Now",
  href: "/donate",
} as const;
