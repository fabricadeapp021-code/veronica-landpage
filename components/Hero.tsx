"use client";

import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

const roles = ["Vendedor", "Suporte", "SDR", "Agendador", "Financeiro", "Sucesso do Cliente"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayRole(roles[roleIndex]);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div
        className="glow-orb w-[700px] h-[700px] bg-brand-600 top-[-200px] left-[-200px]"
        style={{ opacity: 0.12 }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bg-accent-500 bottom-[-100px] right-[-100px]"
        style={{ opacity: 0.1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              AI Workforce Platform
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Contrate um
                <br />
                <span className="gradient-text">Funcionário de IA</span>
                <br />
                <span className="text-white">para sua empresa</span>
              </h1>
            </div>

            {/* Role rotator */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-transparent to-brand-500/50" />
              <div className="flex items-center gap-2 text-gray-300 text-lg font-medium">
                <span>Funciona como</span>
                <span className="inline-block min-w-[160px] gradient-text font-bold transition-all duration-500">
                  {displayRole}
                </span>
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Seus clientes enviam mensagem no{" "}
              <span className="text-green-400 font-semibold">WhatsApp</span> e
              são atendidos por agentes de IA com memória, workflows e
              ferramentas — como um funcionário real, disponível 24/7.
            </p>

            {/* Proof points */}
            <ul className="space-y-2.5">
              {[
                "Número de WhatsApp dedicado para cada agente",
                "Memória persistente de clientes e contexto",
                "Integra com seu CRM, ERP e sistemas internos",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5"
              >
                Contratar Agente de IA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-brand-500/40 text-gray-300 hover:text-white font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Ver demo no WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["JM", "AL", "RS", "CP"].map((init, i) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full border-2 border-[#08080f] bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-[10px] font-bold"
                    style={{ zIndex: 4 - i }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">+200 empresas</span> já usam Venorica AI
              </p>
            </div>
          </div>

          {/* Right — Product mock */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute -left-8 top-16 hidden rounded-2xl border border-white/10 bg-[#10111d]/90 px-4 py-3 shadow-2xl shadow-brand-600/20 backdrop-blur sm:block">
                <p className="text-xs font-semibold text-gray-400">Novo lead</p>
                <p className="mt-1 text-sm font-bold text-white">Demo agendada</p>
                <p className="mt-1 text-xs text-green-300">Veronica qualificou em 42s</p>
              </div>

              <div className="absolute -right-6 bottom-20 hidden rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 shadow-2xl shadow-green-500/10 backdrop-blur sm:block">
                <p className="text-xs font-semibold text-green-300">Online 24/7</p>
                <p className="mt-1 text-xs text-gray-300">Atendimento no WhatsApp</p>
              </div>

              <div className="relative mx-auto w-[290px] rounded-[42px] border border-white/15 bg-[#08090f] p-3 shadow-2xl shadow-brand-600/25 sm:w-[330px]">
                <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#08090f]" />
                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0d18]">
                  <div className="flex items-center gap-3 border-b border-white/10 bg-[#15172a] px-4 py-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white">
                      V
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#15172a] bg-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Veronica</p>
                      <p className="text-xs text-green-300">Funcionária de IA</p>
                    </div>
                  </div>

                  <div className="space-y-3 px-4 py-5">
                    <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/10 bg-[#1a1d30] px-3 py-2 text-xs leading-relaxed text-gray-200">
                      Oi! Posso qualificar leads, responder dúvidas e agendar demos para sua equipe.
                    </div>
                    <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-xs leading-relaxed text-white">
                      Integra com meu WhatsApp e CRM?
                    </div>
                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-white/10 bg-[#1a1d30] px-3 py-2 text-xs leading-relaxed text-gray-200">
                      Sim. Eu conecto canais, consulto dados e faço handoff para humanos quando precisar.
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-[#10111d] p-4">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1a1d30] px-3 py-3">
                      <span className="flex-1 text-sm text-gray-500">Digite uma mensagem...</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
