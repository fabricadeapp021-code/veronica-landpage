import { CheckCircle2, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 497",
    period: "/mês",
    description: "Para empresas que querem começar com 1 agente focado.",
    highlight: false,
    features: [
      "1 agente de IA ativo",
      "1 número de WhatsApp dedicado",
      "Até 2.000 conversas/mês",
      "3 workflows configuráveis",
      "Memória de clientes (90 dias)",
      "2 integrações via API",
      "Painel de monitoramento",
      "Suporte por e-mail",
    ],
    cta: "Começar agora",
  },
  {
    name: "Growth",
    price: "R$ 2.497",
    period: "/mês",
    description: "Para empresas crescendo com equipes de IA multifuncionais.",
    highlight: true,
    badge: "Mais popular",
    features: [
      "Até 5 agentes de IA ativos",
      "5 números de WhatsApp dedicados",
      "Até 15.000 conversas/mês",
      "Workflows ilimitados",
      "Memória persistente (365 dias)",
      "Integrações ilimitadas",
      "Voz e áudio no WhatsApp",
      "Escalada inteligente para humanos",
      "Dashboard de analytics avançado",
      "Suporte prioritário (chat + vídeo)",
    ],
    cta: "Começar agora",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para operações que exigem escala, conformidade e controle total.",
    highlight: false,
    features: [
      "Agentes ilimitados",
      "Infraestrutura dedicada",
      "Conversas ilimitadas",
      "SLA de uptime 99.9%",
      "Isolamento total de tenant",
      "Auditoria e logs exportáveis",
      "Integração com SSO e RBAC",
      "Treinamento personalizado",
      "Gerente de conta dedicado",
      "Suporte 24/7",
    ],
    cta: "Falar com especialista",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="glow-orb w-[500px] h-[500px] bg-brand-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Preços
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Pague por agente,
            <br />
            <span className="gradient-text">não por seat humano</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Um funcionário de IA custa menos que um colaborador CLT e trabalha
            24/7 sem férias, licença ou 13º.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 space-y-6 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-brand-600/20 to-accent-600/10 border-2 border-brand-500/60 shadow-2xl shadow-brand-500/20"
                  : "glass border border-white/8"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-lg">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-brand-400" : "text-gray-500"}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/30 hover:-translate-y-0.5"
                    : "border border-white/15 hover:border-brand-500/40 text-gray-300 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Comparativo: um atendente CLT custa em média{" "}
          <span className="text-white font-semibold">R$ 3.500/mês</span> e atende{" "}
          <span className="text-white font-semibold">~50 clientes/dia</span>. Nosso agente
          atende <span className="text-white font-semibold">ilimitados clientes, 24h por dia.</span>
        </p>
      </div>
    </section>
  );
}
