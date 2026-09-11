import type { Metadata } from "next";

import { legalContent } from "@/content/legalContent";
import LegalDocument from "@/features/legal/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of use",
  description: legalContent.terms.description,
};

export default function TermsPage() {
  return <LegalDocument kind="terms" />;
}
