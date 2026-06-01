"use client";

import { useState } from "react";
import { ShoppingBag, Stethoscope, Building2, GraduationCap, Car, Home } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    sector: "E-commerce & Varejo",
    agentName: "Sofia — Agente de Vendas",
    color: "brand",
    scenarios: [
      "Qualifica leads vindos de anúncios automaticamente",
      "Envia catálogo personalizado com base no histórico",
      "Fecha vendas e emite boleto sem humano",
      "Acompanha entrega e resolve reclamações pós-venda",
    ],
    metric: "3x mais conversões vs. formulário",
  },
  {
    icon: Stethoscope,
    sector: "Clínicas & Saúde",
    agentName: "Ana — Agente de Agendamento",
    color: "green",
    scenarios: [
      "Agenda consultas considerando disponibilidade real",
      "Envia lembretes e confirmações automáticas",
      "Faz triagem inicial de sintomas",
      "Encaminha urgências para atendimento prioritário",
    ],
    metric: "80% menos ligações no atendimento",
  },
  {
    icon: Building2,
    sector: "Financeiro & Cobrança",
    agentName: "Lucas — Agente de Cobrança",
    color: "orange",
    scenarios: [
      "Negocia débitos dentro de regras definidas pela empresa",
      "Envia segunda via de boleto instantaneamente",
      "Registra acordos e gera comprovantes",
      "Escala para analista quando necessário",
    ],
    metric: "R$ 2M+ em débitos recuperados",
  },
  {
    icon: GraduationCap,
    sector: "Educação",
    agentName: "Pedro — Agente de Matrícula",
    color: "accent",
    scenarios: [
      "Apresenta cursos e grade curricular",
      "Qualifica interesse e simula mensalidade",
      "Inicia processo de matrícula e coleta documentos",
      "Acompanha aluno nos primeiros 30 dias",
    ],
    metric: "+45% taxa de matrícula concluída",
  },
  {
    icon: Car,
    sector: "Concessionárias",
    agentName: "Bruno — Agente de Showroom",
    color: "pink",
    scenarios: [
      "Apresenta veículos com fotos e especificações",
      "Simula financiamento em tempo real",
      "Agenda test-drive e visita ao showroom",
      "Acompanha a jornada pós-lead para o vendedor",
    ],
    metric: "5x mais leads qualificados",
  },
  {
    icon: Home,
    sector: "Imobiliárias",
    agentName: "Carla — Agente Imobiliária",
    color: "cyan",
    scenarios: [
      "Entende perfil do cliente: compra, aluguel, valor",
      "Apresenta imóveis com fotos e localização",
      "Agenda visitas e gera interesse ao corretor",
      "Acompanha negociação e gera propostas",
    ],
    metric: "50% dos leads visitam em 48h",
  },
];

const colorMap: Record<string, string> = {
  brand: "from-brand-600 to-brand-400 border-brand-500/30 text-brand-300",
  green: "from-green-600 to-green-400 border-green-500/30 text-green-300",
  orange: "from-orange-600 to-orange-400 border-orange-500/30 text-orange-300",
  accent: "from-accent-600 to-accent-400 border-accent-500/30 text-accent-300",
  pink: "from-pink-600 to-pink-400 border-pink-500/30 text-pink-300",
  cyan: "from-cyan-600 to-cyan-400 border-cyan-500/30 text-cyan-300",
};

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];
  const IconCurrent = current.icon;
  const colors = colorMap[current.color];

  return (
    <section id="use-cases" className="py-24 lg:py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Casos de uso
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Um agente para
            <br />
            <span className="gradient-text">cada setor do seu negócio</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Selector */}
          <div className="lg:col-span-2 space-y-2">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <button
                  key={uc.sector}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active === i
                      ? "bg-brand-600/20 border border-brand-500/40 text-white"
                      : "glass hover:bg-white/5 text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${active === i ? "text-brand-400" : "text-gray-500"}`} />
                  <span className="text-sm font-medium">{uc.sector}</span>
                </button>
              );
            })}
          </div>

          {/* Detail card */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 space-y-5 border border-white/8">
              {/* Agent header */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.split(" ").slice(0, 2).join(" ")} flex items-center justify-center shadow-lg`}>
                  <IconCurrent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${colors.split(" ").pop()}`}>
                    {current.sector}
                  </p>
                  <h3 className="text-white font-bold text-xl">{current.agentName}</h3>
                </div>
              </div>

              {/* Scenarios */}
              <div className="space-y-3">
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                  O que este agente faz
                </p>
                <ul className="space-y-2.5">
                  {current.scenarios.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                        current.color === "brand" ? "bg-brand-400" :
                        current.color === "green" ? "bg-green-400" :
                        current.color === "orange" ? "bg-orange-400" :
                        current.color === "accent" ? "bg-accent-400" :
                        current.color === "pink" ? "bg-pink-400" :
                        "bg-cyan-400"
                      }`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric */}
              <div className={`rounded-xl border px-4 py-3 ${colors.split(" ").slice(2).join(" ")} bg-white/5`}>
                <p className="text-xs font-medium opacity-70">Resultado médio dos clientes</p>
                <p className="text-white font-bold text-lg mt-0.5">{current.metric}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
