import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venorica AI — Funcionários de IA para sua Empresa",
  description:
    "Contrate funcionários de IA que atendem seus clientes pelo WhatsApp com memória, workflows, voz e ferramentas integradas. A força de trabalho do futuro, disponível hoje.",
  keywords: [
    "AI employees",
    "WhatsApp AI",
    "Inteligência Artificial",
    "Funcionários IA",
    "Automação empresarial",
    "Agentes de IA",
    "Atendimento WhatsApp",
  ],
  openGraph: {
    title: "Venorica AI — Funcionários de IA para sua Empresa",
    description:
      "Contrate funcionários de IA que atendem seus clientes pelo WhatsApp com memória, workflows e ferramentas integradas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-[#08080f] text-white antialiased">{children}</body>
    </html>
  );
}
