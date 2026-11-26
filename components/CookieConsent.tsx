"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { OPEN_PREFERENCES_EVENT, readConsent, saveConsent } from "@/lib/consent";

type Choice = { analytics: boolean; marketing: boolean };

const CATEGORIES: { key: "necessary" | keyof Choice; label: string; text: string }[] = [
  { key: "necessary", label: "Necessários", text: "Fazem o site funcionar e guardam esta escolha. Sempre ativos." },
  { key: "analytics", label: "Análise", text: "Medem visitas para melhorar o site." },
  { key: "marketing", label: "Marketing", text: "Medem campanhas e anúncios." },
];

/** Botões com o mesmo peso visual (orientação da ANPD); fechar no X = recusar. */
const btn =
  "rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-gray-200 transition hover:border-white/30 hover:text-white";

export default function CookieConsent() {
  const pathname = usePathname();
  const [showBar, setShowBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [choice, setChoice] = useState<Choice>({ analytics: false, marketing: false });

  useEffect(() => {
    setShowBar(!readConsent());
    const open = () => {
      const current = readConsent();
      setChoice({ analytics: !!current?.analytics, marketing: !!current?.marketing });
      setShowModal(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  const decide = (value: Choice) => {
    saveConsent(value);
    setShowBar(false);
    setShowModal(false);
  };
  const reject = () => decide({ analytics: false, marketing: false });

  // Não atrapalhar a leitura das próprias políticas.
  const onPolicyPage = pathname?.startsWith("/privacidade") || pathname?.startsWith("/cookies");

  return (
    <>
      {showBar && !onPolicyPage && (
        <div role="region" aria-label="Aviso de cookies" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0d0e18]/95 backdrop-blur">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 pr-10 sm:px-6 md:flex-row md:items-center lg:px-8">
            <p className="flex-1 text-sm leading-relaxed text-gray-400">
              Usamos cookies necessários para o site funcionar e, com a sua permissão, cookies de análise e marketing. Saiba mais na{" "}
              <a href="/cookies" className="text-gray-200 underline underline-offset-2 hover:text-white">Política de Cookies</a>.
            </p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className={btn} onClick={reject}>Recusar não necessários</button>
              <button type="button" className={btn} onClick={() => { setChoice({ analytics: false, marketing: false }); setShowModal(true); }}>Personalizar</button>
              <button type="button" className={btn} onClick={() => decide({ analytics: true, marketing: true })}>Aceitar todos</button>
            </div>
            <button type="button" aria-label="Fechar (recusa os não necessários)" onClick={reject} className="absolute right-2 top-2 rounded p-1 text-gray-500 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="cookie-prefs-title" onClick={() => setShowModal(false)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11121e] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h2 id="cookie-prefs-title" className="text-lg font-semibold text-white">Preferências de cookies</h2>
              <button type="button" aria-label="Fechar" onClick={() => setShowModal(false)} className="rounded p-1 text-gray-500 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            {CATEGORIES.map((c) => (
              <div key={c.key} className="flex items-start justify-between gap-4 border-b border-white/5 py-3">
                <div>
                  <div className="text-sm font-medium text-white">{c.label}</div>
                  <div className="text-xs text-gray-500">{c.text}</div>
                </div>
                {c.key === "necessary" ? (
                  <span className="whitespace-nowrap text-xs text-gray-500">Sempre ativos</span>
                ) : (
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      aria-label={c.label}
                      checked={choice[c.key as keyof Choice]}
                      onChange={(e) => setChoice((prev) => ({ ...prev, [c.key]: e.target.checked }))}
                    />
                    <span className="h-5 w-9 rounded-full bg-white/15 transition peer-checked:bg-brand-500 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" />
                  </label>
                )}
              </div>
            ))}
            <button type="button" onClick={() => decide(choice)} className="mt-5 w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500">
              Salvar escolhas
            </button>
          </div>
        </div>
      )}
    </>
  );
}
