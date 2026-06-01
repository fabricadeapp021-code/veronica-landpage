import {
  MessageCircle,
  Brain,
  Workflow,
  Shield,
  BarChart3,
  Mic,
  Wrench,
  Users,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    title: "WhatsApp nativo",
    description:
      "Cada agente tem seu próprio número de WhatsApp. Seus clientes falam normalmente — o agente responde como um funcionário real.",
  },
  {
    icon: Brain,
    color: "text-brand-400",
    bg: "bg-brand-400/10 border-brand-400/20",
    title: "Memória persistente",
    description:
      "O agente lembra de cada cliente: histórico de compras, preferências, reclamações passadas e contexto de conversas anteriores.",
  },
  {
    icon: Workflow,
    color: "text-accent-400",
    bg: "bg-accent-400/10 border-accent-400/20",
    title: "Workflows inteligentes",
    description:
      "Opera por estados previsíveis: abrir ticket, aguardar aprovação, agendar, transferir para humano. Sem comportamento autônomo incontrolado.",
  },
  {
    icon: Wrench,
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20",
    title: "Ferramentas integradas",
    description:
      "Consulta CRM, abre chamados, agenda reuniões, emite boletos, consulta estoque. O agente age — não só fala.",
  },
  {
    icon: Mic,
    color: "text-pink-400",
    bg: "bg-pink-400/10 border-pink-400/20",
    title: "Voz e áudio",
    description:
      "Recebe e envia mensagens de voz no WhatsApp. Transcreve, entende e responde naturalmente por texto ou áudio.",
  },
  {
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    title: "Seguro e auditável",
    description:
      "Cada ação é registrada com tenant_id, agente, cliente, custo e timestamp. Conformidade e rastreabilidade completa.",
  },
  {
    icon: Users,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    title: "Escalada para humanos",
    description:
      "Quando necessário, o agente transfere a conversa para um humano com todo o contexto já preenchido. Zero retrabalho.",
  },
  {
    icon: BarChart3,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    title: "Observabilidade total",
    description:
      "Dashboard em tempo real com volume de atendimentos, tempo de resposta, taxa de resolução e custo por interação.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="glow-orb w-[600px] h-[600px] bg-accent-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.05 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Capacidades
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Não é um chatbot.
            <br />
            <span className="gradient-text">É um funcionário completo.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Nossos agentes de IA vão além das respostas automáticas. Eles
            executam tarefas, lembram de clientes, seguem fluxos de trabalho e
            se integram ao seu negócio.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="glass glass-hover rounded-2xl p-5 space-y-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${feat.bg}`}
                >
                  <Icon className={`w-5 h-5 ${feat.color}`} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
