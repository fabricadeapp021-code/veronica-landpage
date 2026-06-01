import { UserPlus, Settings2, Plug, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Defina o papel do agente",
    description:
      "Escolha a função: SDR, suporte, agendador, cobrador. Configure nome, personalidade, tom e limites de atuação. Em minutos.",
    detail: "Exemplos: Sofia (Vendas), Lucas (Suporte), Ana (Cobrança)",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure os workflows",
    description:
      "Monte os fluxos de trabalho com estados e transições. O agente seguirá rigorosamente o processo definido pela sua empresa.",
    detail: "Abrir → Qualificar → Proposta → Fechar → Handoff",
  },
  {
    number: "03",
    icon: Plug,
    title: "Conecte seus sistemas",
    description:
      "Integre com CRM, ERP, agenda, estoque ou qualquer API. O agente age no seu ambiente — não num ambiente isolado.",
    detail: "Salesforce, HubSpot, Totvs, sistemas próprios via API",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Ative no WhatsApp",
    description:
      "Publique com um número dedicado ou use o seu número empresarial existente. Seus clientes já sabem como falar.",
    detail: "Pronto em menos de 24h com suporte de onboarding",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Como funciona
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Do zero ao agente ativo
            <br />
            <span className="gradient-text">em 4 passos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Sem código. Sem meses de implantação. Seu primeiro funcionário de IA
            pode estar atendendo clientes hoje.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative space-y-4">
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-600/20 to-accent-600/20 border border-brand-500/30 flex items-center justify-center shadow-lg shadow-brand-500/10">
                        <Icon className="w-8 h-8 text-brand-400" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-600 text-white text-[10px] font-black flex items-center justify-center border border-[#08080f]">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>

                  <div className="glass rounded-lg px-3 py-2 text-center">
                    <p className="text-brand-300 text-xs font-medium">{step.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA inline */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-lg shadow-xl shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
          >
            Quero meu primeiro agente agora
          </a>
          <p className="text-gray-500 text-sm mt-3">
            Setup gratuito · Sem cartão de crédito · Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
