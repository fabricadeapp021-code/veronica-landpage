import Image from "next/image";
import { Crown, Star, Clock, TrendingDown } from "lucide-react";

const agents = [
  {
    name: "Ranny",
    photo: "/agents/ranny.jpg",
    role: "Consultora de Imóveis",
    featured: true,
    description:
      "Transforma um pedido genérico em uma busca imobiliária clara e conduz o interesse até a visita.",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    bgGlow: "rgba(139,92,246,0.25)",
    costHour: "R$ 0,80",
    costMonth: "R$ 497",
    economy: "89%",
    satisfaction: 98,
    skills: [
      "Entende objetivo, região e orçamento do cliente",
      "Consulta o catálogo antes de apresentar qualquer imóvel",
      "Identifica o momento certo de pedir visita",
    ],
  },
  {
    name: "Helena",
    photo: "/agents/helena.jpg",
    role: "Parcerias e Expansão B2B",
    featured: false,
    description:
      "Transforma corretores, imobiliárias e profissionais de confiança em canais ativos de novas oportunidades.",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    bgGlow: "rgba(6,182,212,0.2)",
    costHour: "R$ 1,20",
    costMonth: "R$ 797",
    economy: "86%",
    satisfaction: 96,
    skills: [
      "Cadastra e aprova parceiros",
      "Entrega link rastreável por indicação",
      "Conduz onboarding e reativação",
    ],
  },
  {
    name: "Sara",
    photo: "/agents/sara.jpg",
    role: "Especialista em Crédito",
    featured: false,
    description:
      "Traduz a necessidade financeira em um caminho possível e prepara a análise especializada.",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    bgGlow: "rgba(16,185,129,0.2)",
    costHour: "R$ 0,90",
    costMonth: "R$ 597",
    economy: "85%",
    satisfaction: 94,
    skills: [
      "Simulação de financiamento imobiliário",
      "Checagem de elegibilidade básica",
      "Handoff preparado para o especialista humano",
    ],
  },
];

function AgentCard({ agent }: { agent: (typeof agents)[0] }) {
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
            Caso real em produção
          </span>
        </div>
      )}

      {/* Online indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-green-400 text-[10px] font-medium">online</span>
      </div>

      {/* Photo area */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={agent.photo}
          alt={`Agente de IA ${agent.name} — ${agent.role}`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} mix-blend-overlay opacity-30`}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d1f] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Name + role */}
        <div>
          <h3 className="text-white font-black text-2xl">{agent.name}</h3>
          <p
            className={`text-sm font-semibold bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}
          >
            {agent.role}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{agent.description}</p>

        {/* Skills */}
        <ul className="space-y-1.5">
          {agent.skills.map((skill) => (
            <li key={skill} className="flex items-start gap-2 text-xs text-gray-300">
              <span
                className={`w-1 h-1 rounded-full bg-gradient-to-r ${agent.gradient} shrink-0 mt-1.5`}
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
    <section className="py-16 lg:py-24 relative overflow-hidden">
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
            Conheça agentes reais,
            <br />
            <span className="gradient-text">já em produção</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Nada de mascote genérico: Ranny, Helena e Sara são funcionárias de
            IA reais, rodando hoje em empresas do mercado imobiliário — e
            custam uma fração de um colaborador CLT.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 text-center glass rounded-2xl p-5 border border-white/8 max-w-2xl mx-auto">
          <p className="text-white font-bold">
            3 agentes juntos custam{" "}
            <span className="gradient-text">R$ 1.891/mês</span>
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
