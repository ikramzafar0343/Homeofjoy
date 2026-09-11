import type { Metadata } from "next";

import { legalContent } from "@/content/legalContent";
import LegalDocument from "@/features/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy",
  description: legalContent.privacy.description,
};

export default function PrivacyPage() {
  return <LegalDocument kind="privacy" />;
}
