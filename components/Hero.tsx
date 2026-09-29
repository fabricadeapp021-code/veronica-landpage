"use client";

import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import VeronicaChat from "./VeronicaChat";

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
    <section className="relative overflow-hidden pt-16">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              AI Workforce Platform
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
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

            {/* Tech stack trust strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-gray-600">Infraestrutura de agentes:</span>
              {["MCP", "A2A", "LangGraph", "Context Engineering"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Live Veronica chat */}
          <div className="relative flex justify-center lg:justify-end">
            <VeronicaChat />
          </div>
        </div>
      </div>
    </section>
  );
}
