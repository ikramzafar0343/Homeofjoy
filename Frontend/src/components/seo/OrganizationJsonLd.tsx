import { organizationContent, siteSeo } from "@/content/organizationContent";

type OrganizationJsonLdProps = {
  readonly siteUrl: string;
};

export default function OrganizationJsonLd({ siteUrl }: OrganizationJsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: organizationContent.name,
    alternateName: organizationContent.shortName,
    description: siteSeo.description,
    url: siteUrl,
    areaServed: {
      "@type": "Country",
      name: organizationContent.country,
    },
    founder: {
      "@type": "Person",
      name: organizationContent.founderName,
      jobTitle: organizationContent.founderRole,
    },
    knowsAbout: [
      "Child protection",
      "Education",
      "Child labour prevention",
      "Community outreach",
      "Discipleship",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
