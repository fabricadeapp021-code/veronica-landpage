import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${LEGAL_DOCS.termos.title} — Verônica IA`,
  description: LEGAL_DOCS.termos.description,
};

export default function Page() {
  return <LegalPage slug="termos" />;
}
