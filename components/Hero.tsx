"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  Video,
  Phone as PhoneIcon,
  MoreVertical,
  Smile,
  Paperclip,
  Mic,
  CheckCheck,
  Wifi,
  SignalHigh,
  BatteryFull,
} from "lucide-react";

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

          {/* Right — Product mock */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/10 bg-[#10111d]/90 px-4 py-3 shadow-2xl shadow-brand-600/20 backdrop-blur xl:block">
                <p className="text-xs font-semibold text-gray-400">Novo lead</p>
                <p className="mt-1 text-sm font-bold text-white">Demo agendada</p>
                <p className="mt-1 text-xs text-green-300">Veronica qualificou em 42s</p>
              </div>

              <div className="absolute -right-4 bottom-20 hidden rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 shadow-2xl shadow-green-500/10 backdrop-blur xl:block">
                <p className="text-xs font-semibold text-green-300">Online 24/7</p>
                <p className="mt-1 text-xs text-gray-300">Atendimento no WhatsApp</p>
              </div>

              {/* Phone frame */}
              <div className="relative mx-auto w-[320px] rounded-[48px] border border-white/15 bg-black p-3.5 shadow-2xl shadow-black/50 sm:w-[350px] xl:w-[390px]">
                <div className="absolute left-1/2 top-3.5 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
                <div className="overflow-hidden rounded-[38px] bg-[#0b141a]">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pb-1.5 pt-3.5 text-white">
                    <span className="text-sm font-semibold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <SignalHigh className="h-3.5 w-3.5" />
                      <Wifi className="h-3.5 w-3.5" />
                      <BatteryFull className="h-4 w-4" />
                    </div>
                  </div>

                  {/* WhatsApp header */}
                  <div className="flex items-center gap-2.5 bg-[#202c33] px-4 py-3.5">
                    <ChevronLeft className="h-5 w-5 shrink-0 text-gray-300" />
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white">
                      V
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold text-white">Veronica · Venorica AI</p>
                      <p className="text-[12px] text-gray-400">online</p>
                    </div>
                    <div className="flex items-center gap-3.5 text-gray-300">
                      <Video className="h-[18px] w-[18px]" />
                      <PhoneIcon className="h-[18px] w-[18px]" />
                      <MoreVertical className="h-[18px] w-[18px]" />
                    </div>
                  </div>

                  {/* Chat body */}
                  <div
                    className="space-y-3 px-4 py-5"
                    style={{
                      backgroundColor: "#0b141a",
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  >
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 shadow">
                        <p className="text-[14px] leading-relaxed text-gray-100">
                          Oi! Posso qualificar leads, responder dúvidas e agendar demos para sua equipe.
                        </p>
                        <span className="mt-1 block text-right text-[11px] text-gray-500">09:41</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 shadow">
                        <p className="text-[14px] leading-relaxed text-gray-50">
                          Integra com meu WhatsApp e CRM?
                        </p>
                        <span className="mt-1 flex items-center justify-end gap-1 text-[11px] text-gray-300">
                          09:42
                          <CheckCheck className="h-3.5 w-3.5 text-sky-400" />
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 shadow">
                        <p className="text-[14px] leading-relaxed text-gray-100">
                          Sim. Eu conecto canais, consulto dados e faço handoff para humanos quando precisar.
                        </p>
                        <span className="mt-1 block text-right text-[11px] text-gray-500">09:42</span>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="flex items-center gap-2.5 bg-[#0b141a] px-4 pb-5 pt-2.5">
                    <div className="flex flex-1 items-center gap-2.5 rounded-full bg-[#202c33] px-4 py-2.5">
                      <Smile className="h-5 w-5 shrink-0 text-gray-400" />
                      <span className="flex-1 text-[14px] text-gray-500">Digite uma mensagem</span>
                      <Paperclip className="h-[18px] w-[18px] shrink-0 text-gray-400" />
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp">
                      <Mic className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                👆 A experiência do seu cliente no WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
