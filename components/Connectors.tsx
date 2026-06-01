import { ArrowRight, Plug, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const connectors = [
  { name: "Salesforce", category: "CRM", color: "from-blue-500 to-blue-700", icon: "☁️" },
  { name: "HubSpot", category: "CRM", color: "from-orange-400 to-orange-600", icon: "🔶" },
  { name: "Totvs", category: "ERP", color: "from-red-500 to-red-700", icon: "⚙️" },
  { name: "SAP", category: "ERP", color: "from-sky-500 to-sky-700", icon: "🔷" },
  { name: "Google Sheets", category: "Dados", color: "from-green-500 to-green-700", icon: "📊" },
  { name: "Slack", category: "Comunicação", color: "from-purple-500 to-purple-700", icon: "💬" },
  { name: "Notion", category: "Docs", color: "from-gray-400 to-gray-600", icon: "📝" },
  { name: "Google Drive", category: "Docs", color: "from-yellow-400 to-yellow-600", icon: "📁" },
  { name: "WhatsApp", category: "Mensagens", color: "from-green-400 to-green-600", icon: "📱" },
  { name: "Instagram", category: "Social", color: "from-pink-500 to-purple-600", icon: "📸" },
  { name: "RD Station", category: "Marketing", color: "from-indigo-500 to-indigo-700", icon: "📣" },
  { name: "Asaas", category: "Financeiro", color: "from-teal-500 to-teal-700", icon: "💳" },
  { name: "Stripe", category: "Financeiro", color: "from-violet-500 to-violet-700", icon: "💰" },
  { name: "Zendesk", category: "Suporte", color: "from-emerald-500 to-emerald-700", icon: "🎫" },
  { name: "Calendly", category: "Agenda", color: "from-cyan-500 to-cyan-700", icon: "📅" },
  { name: "Qualquer API", category: "Custom", color: "from-brand-500 to-accent-600", icon: "🔌" },
];

const benefits = [
  {
    icon: Plug,
    title: "Conecte qualquer sistema",
    description:
      "O agente de IA acessa seus dados onde eles estão — CRM, ERP, planilha ou API interna. Sem migrações. Sem retrabalho.",
  },
  {
    icon: ShieldCheck,
    title: "Permissões granulares",
    description:
      "Cada conector tem escopos de acesso controlados. O agente só lê ou escreve o que você explicitamente autorizar.",
  },
  {
    icon: Zap,
    title: "Ação real no mundo",
    description:
      "Não só conversa — o agente cria leads, envia e-mails, abre chamados, gera boletos e atualiza registros nos seus sistemas.",
  },
  {
    icon: RefreshCw,
    title: "Sincronização em tempo real",
    description:
      "Mudou algo no CRM? O agente já sabe. Emitiu um boleto? Já registrado. Tudo em tempo real, sem polling manual.",
  },
];

export default function Connectors() {
  return (
    <section className="py-24 lg:py-32 relative bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
            <Plug className="w-3.5 h-3.5" />
            OpenClaw Connectors
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Seu agente conectado
            <br />
            <span className="gradient-text">a tudo que você já usa</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            O poder real de um funcionário de IA está nos conectores. A
            Verônica não só responde — ela consulta, registra, agenda e age
            diretamente nos seus sistemas de negócio.
          </p>
        </div>

        {/* Connectors visual */}
        <div className="relative">
          {/* Center — OpenClaw hub */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 flex flex-col items-center justify-center shadow-2xl shadow-brand-500/40 border border-brand-400/30 animate-glow">
                <Zap className="w-8 h-8 text-white mb-1" />
                <span className="text-white text-[10px] font-bold">OpenClaw</span>
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-2xl border-2 border-brand-500/30 animate-ping" />
            </div>
          </div>

          {/* Connector grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
            {connectors.map((conn) => (
              <div
                key={conn.name}
                className="glass glass-hover rounded-xl p-3 flex flex-col items-center gap-1.5 text-center group"
              >
                <div
                  className={`w-9 h-9 rounded-lg bg-gradient-to-br ${conn.color} flex items-center justify-center text-base shadow-md`}
                >
                  {conn.icon}
                </div>
                <p className="text-white text-[10px] font-semibold leading-tight">{conn.name}</p>
                <p className="text-gray-600 text-[9px]">{conn.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="glass rounded-2xl p-5 space-y-3 border border-white/8 hover:border-brand-500/30 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-white font-bold text-sm">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>

        {/* Developer note */}
        <div className="glass rounded-2xl p-6 border border-brand-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
            <span className="text-xl">🔌</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm mb-1">Não encontrou seu sistema?</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              OpenClaw permite conectar qualquer API REST ou GraphQL em minutos. Se o seu sistema
              tem API, seu agente consegue usar. Nossa equipe cria conectores customizados gratuitamente
              no plano Growth e Enterprise.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all"
          >
            Solicitar conector
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
