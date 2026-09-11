import type { Metadata } from "next";
import localFont from "next/font/local";

import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import SiteShell from "@/components/layout/SiteShell";
import SitePreloader from "@/components/preloader/SitePreloader";
import SkipLink from "@/components/layout/SkipLink";
import { organizationContent, siteSeo } from "@/content/organizationContent";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const nourd = localFont({
  src: [
    {
      path: "../fonts/nourdLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/nourdRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/nourdMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/nourdSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/nourdBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/nourdHeavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nourd",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteSeo.title,
    template: siteSeo.titleTemplate,
  },
  description: siteSeo.description,
  applicationName: organizationContent.name,
  authors: [{ name: organizationContent.founderName }],
  creator: organizationContent.name,
  publisher: organizationContent.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteSeo.locale,
    url: siteUrl,
    siteName: siteSeo.siteName,
    title: siteSeo.title,
    description: siteSeo.description,
    images: [
      {
        url: "/images/homeOfJoyLogo.webp",
        width: 512,
        height: 512,
        alt: organizationContent.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
    images: ["/images/homeOfJoyLogo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/images/homeOfJoyLogo.webp", type: "image/webp" },
    ],
    apple: [{ url: "/images/homeOfJoyLogo.webp", type: "image/webp" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nourd.variable}>
      <body className="min-h-screen bg-background font-nourd text-bodyGray antialiased">
        <OrganizationJsonLd siteUrl={siteUrl} />
        <SkipLink />
        <SitePreloader />
        <SiteShell>
          <main id="main-content">{children}</main>
        </SiteShell>
      </body>
    </html>
  );
}
