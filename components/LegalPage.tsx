import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import LegalMarkdown from "@/components/LegalMarkdown";
import { LEGAL_DOCS, readLegalDoc, type LegalSlug } from "@/lib/legal";

export default function LegalPage({ slug }: { slug: LegalSlug }) {
  const { title } = LEGAL_DOCS[slug];
  const others = (Object.keys(LEGAL_DOCS) as LegalSlug[]).filter((s) => s !== slug);

  return (
    <>
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:px-6">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-300">
          <ArrowLeft className="h-4 w-4" /> Voltar ao site
        </a>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <article className="text-[15px]">
          <LegalMarkdown source={readLegalDoc(slug)} />
        </article>
        <nav className="mt-14 flex flex-wrap gap-4 border-t border-white/5 pt-6 text-sm">
          {others.map((s) => (
            <a key={s} href={`/${s}`} className="text-gray-500 underline-offset-2 hover:text-gray-300 hover:underline">
              {LEGAL_DOCS[s].title}
            </a>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
