import { readFileSync } from "node:fs";
import { join } from "node:path";

export type LegalSlug = "termos" | "privacidade" | "cookies";

export const LEGAL_DOCS: Record<LegalSlug, { title: string; description: string }> = {
  termos: {
    title: "Termos de Uso",
    description: "Regras de uso da plataforma Verônica IA.",
  },
  privacidade: {
    title: "Política de Privacidade",
    description: "Como a Verônica IA trata dados pessoais, conforme a LGPD.",
  },
  cookies: {
    title: "Política de Cookies",
    description: "Cookies e armazenamento local usados no site e no painel da Verônica IA.",
  },
};

/** Lido no build (export estático): o texto mora em content/legal/<slug>.md. */
export function readLegalDoc(slug: LegalSlug): string {
  return readFileSync(join(process.cwd(), "content", "legal", `${slug}.md`), "utf8");
}
