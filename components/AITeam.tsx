import Image from "next/image";
import { Phone, Crown, Star, Clock, TrendingDown } from "lucide-react";

const agents = [
  {
    name: "Verônica",
    seed: "Veronica",
    role: "Atendente 24/7",
    featured: true,
    phone: "+55 (11) 9 4020-1984",
    description:
      "O primeiro rosto da sua empresa no WhatsApp. Verônica recebe todos os clientes, faz triagem e nunca deixa ninguém sem resposta.",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    bgGlow: "rgba(139,92,246,0.25)",
    costHour: "R$ 0,80",
    costMonth: "R$ 497",
    humanMonth: "R$ 4.500",
    economy: "89%",
    satisfaction: 98,
    skills: ["Primeiro atendimento 24/7", "Triagem e roteamento", "FAQ e suporte inicial"],
  },
  {
    name: "Bruno",
    seed: "Bruno",
    role: "Agente de Vendas",
    featured: false,
    phone: null,
    description:
      "Qualifica leads, envia propostas personalizadas e faz follow-up sem esquecer nenhuma oportunidade.",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    bgGlow: "rgba(6,182,212,0.2)",
    costHour: "R$ 1,20",
    costMonth: "R$ 797",
    humanMonth: "R$ 5.800",
    economy: "86%",
    satisfaction: 96,
    skills: ["Qualificação de leads", "Envio de propostas", "Fechamento e contratos"],
  },
  {
    name: "Ana",
    seed: "Ana",
    role: "Agente Financeiro",
    featured: false,
    phone: null,
    description:
      "Negocia débitos dentro das regras da empresa, emite segunda via de boleto e registra acordos automaticamente.",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    bgGlow: "rgba(16,185,129,0.2)",
    costHour: "R$ 0,90",
    costMonth: "R$ 597",
    humanMonth: "R$ 4.100",
    economy: "85%",
    satisfaction: 94,
    skills: ["Negociação de débitos", "Emissão de boletos", "Registro de acordos"],
  },
  {
    name: "Carlos",
    seed: "Carlos",
    role: "Suporte Técnico",
    featured: false,
    phone: null,
    description:
      "Abre chamados, faz diagnóstico guiado e resolve até 80% dos casos de N1 sem precisar de humano.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGlow: "rgba(245,158,11,0.2)",
    costHour: "R$ 1,10",
    costMonth: "R$ 697",
    humanMonth: "R$ 5.200",
    economy: "87%",
    satisfaction: 95,
    skills: ["Abertura de tickets", "Diagnóstico N1", "Escala para N2/N3"],
  },
  {
    name: "Sofia",
    seed: "Sofia",
    role: "SDR Comercial",
    featured: false,
    phone: null,
    description:
      "Prospecta ativamente pelo WhatsApp, qualifica interesse e agenda demos para o time de vendas.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    bgGlow: "rgba(244,63,94,0.2)",
    costHour: "R$ 1,30",
    costMonth: "R$ 897",
    humanMonth: "R$ 6.200",
    economy: "86%",
    satisfaction: 97,
    skills: ["Prospecção ativa", "Qualificação BANT", "Agendamento de demos"],
  },
];

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  const photoUrl = `https://api.dicebear.com/7.x/personas/png?seed=${agent.seed}&size=240&backgroundColor=transparent`;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${
        agent.featured
          ? "border-violet-500/50 shadow-xl shadow-violet-500/20"
          : "border-white/8 hover:border-white/20"
      }`}
      style={{ background: "#0d0d1f" }}
    >
      {/* Featured badge */}
      {agent.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 backdrop-blur">
          <Crown className="w-3 h-3 text-yellow-400" />
          <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-wider">
            Primeiro agente
          </span>
        </div>
      )}

      {/* Online indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-[10px] font-medium">online</span>
      </div>

      {/* Photo area */}
      <div
        className="relative h-56 flex items-end justify-center overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${agent.bgGlow.replace("0.2", "0.3")}, rgba(13,13,31,0.8))`,
        }}
      >
        {/* Gradient bg */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-20`}
        />
        {/* Glow blob */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl"
          style={{ background: agent.bgGlow }}
        />
        {/* Photo */}
        <div className="relative z-10 w-44 h-44 drop-shadow-2xl">
          <Image
            src={photoUrl}
            alt={`Agente ${agent.name}`}
            fill
            className="object-contain object-bottom"
            unoptimized
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Name + role */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-black text-2xl">{agent.name}</h3>
          </div>
          <p
            className={`text-sm font-semibold bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}
          >
            {agent.role}
          </p>
          {agent.phone && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs font-mono font-medium">
                {agent.phone}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{agent.description}</p>

        {/* Skills */}
        <ul className="space-y-1.5">
          {agent.skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2 text-xs text-gray-300">
              <span
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${agent.gradient} shrink-0`}
                style={{ minWidth: 4, minHeight: 4 }}
              />
              {skill}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Cost block */}
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 mb-1">IA / hora</p>
            <p
              className={`font-black text-base bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}
            >
              {agent.costHour}
            </p>
          </div>
          <div className="text-center border-x border-white/5">
            <p className="text-[10px] text-gray-500 mb-1">IA / mês</p>
            <p
              className={`font-black text-base bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}
            >
              {agent.costMonth}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 mb-1">Economia</p>
            <div className="flex items-center justify-center gap-0.5">
              <TrendingDown className="w-3 h-3 text-green-400" />
              <p className="font-black text-base text-green-400">{agent.economy}</p>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-[11px] text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>24/7 · 365 dias</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <span>{agent.satisfaction}% satisfação</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`block w-full text-center py-2.5 rounded-xl text-sm font-bold text-white transition-all opacity-0 group-hover:opacity-100 bg-gradient-to-r ${agent.gradient} shadow-lg`}
        >
          Contratar {agent.name}
        </a>
      </div>
    </div>
  );
}

export default function AITeam() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Sua equipe de IA
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Conheça seus novos
            <br />
            <span className="gradient-text">funcionários de IA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Cada agente tem nome, especialidade e número de WhatsApp — e custa
            uma fração de um colaborador CLT. Sem encargos, férias ou 13º.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 text-center glass rounded-2xl p-5 border border-white/8 max-w-2xl mx-auto">
          <p className="text-white font-bold">
            5 agentes juntos custam{" "}
            <span className="gradient-text">R$ 3.485/mês</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Menos que um único colaborador CLT — trabalhando 24h por dia, sem
            ausências.
          </p>
        </div>
      </div>
    </section>
  );
}
