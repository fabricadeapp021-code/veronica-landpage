import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${LEGAL_DOCS.privacidade.title} — Verônica IA`,
  description: LEGAL_DOCS.privacidade.description,
};

export default function Page() {
  return <LegalPage slug="privacidade" />;
}
