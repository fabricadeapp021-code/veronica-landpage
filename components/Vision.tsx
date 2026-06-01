import { FileText, Brain, Sparkles, ArrowRight, Rocket, Globe } from "lucide-react";

const docExamples = [
  {
    type: "Contrato",
    icon: "📄",
    before: "Contrato PDF de 40 páginas enviado por e-mail. Ninguém lê.",
    after:
      "A Verônica resume, destaca cláusulas críticas, responde dúvidas e alerta sobre vencimentos — direto no WhatsApp.",
    color: "from-violet-600/20 to-purple-600/10 border-violet-500/30",
    tag: "text-violet-400",
  },
  {
    type: "Relatório",
    icon: "📊",
    before: "Relatório mensal de 80 páginas. Ninguém tem tempo de ler.",
    after:
      'Carlos diz: "Nossa inadimplência subiu 12% em março. Quer que eu crie um plano de ação?" — com base nos dados reais.',
    color: "from-blue-600/20 to-cyan-600/10 border-blue-500/30",
    tag: "text-blue-400",
  },
  {
    type: "Manual Técnico",
    icon: "🔧",
    before: "Manual de produto com 200 páginas técnicas no Google Drive.",
    after:
      'Cliente pergunta: "Como configuro o modo avançado?" — o agente encontra, resume e explica em linguagem simples.',
    color: "from-green-600/20 to-emerald-600/10 border-green-500/30",
    tag: "text-green-400",
  },
  {
    type: "Política Interna",
    icon: "📋",
    before: "Política de RH em PDF que ninguém consegue encontrar.",
    after:
      'Funcionário pergunta: "Tenho direito a home office?" — o agente cita a cláusula exata e responde em segundos.',
    color: "from-orange-600/20 to-amber-600/10 border-orange-500/30",
    tag: "text-orange-400",
  },
];

const visionPoints = [
  {
    icon: "🧠",
    title: "Memória que cresce",
    body: "Cada conversa enriquece o agente. Ele aprende padrões, preferências e contexto do seu negócio ao longo do tempo.",
  },
  {
    icon: "🔄",
    title: "Reflexões pós-turno",
    body: 'Ao final do dia, o agente "reflete" sobre os atendimentos, consolida aprendizados e sugere melhorias nos workflows.',
  },
  {
    icon: "🌐",
    title: "Força de trabalho distribuída",
    body: "Uma única plataforma. Múltiplos agentes. Cada um especializado. Todos colaborando em prol do seu cliente.",
  },
  {
    icon: "📡",
    title: "Observabilidade total",
    body: "Cada decisão do agente é rastreável: o que pensou, quais dados consultou, quanto custou e qual foi o resultado.",
  },
];

export default function Vision() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ── Section 1: Intelligent Docs ── */}
        <div>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium">
              <FileText className="w-3.5 h-3.5" />
              Documentos Inteligentes
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Seus documentos ganham
              <br />
              <span className="gradient-text">vida e respondem perguntas</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Com o OpenClaw, seus PDFs, contratos, relatórios e manuais deixam
              de ser arquivos estáticos. Eles se tornam conhecimento ativo que
              seus agentes usam em tempo real, direto no WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {docExamples.map((doc) => (
              <div
                key={doc.type}
                className={`relative rounded-2xl border bg-gradient-to-br ${doc.color} p-6 space-y-4`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{doc.icon}</span>
                  <span className={`text-sm font-bold ${doc.tag}`}>{doc.type}</span>
                </div>

                {/* Before */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                    Antes
                  </p>
                  <div className="glass rounded-lg p-3 flex items-start gap-2">
                    <span className="text-gray-500 text-sm shrink-0">😔</span>
                    <p className="text-gray-400 text-xs leading-relaxed">{doc.before}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-500/30" />
                  <Brain className="w-4 h-4 text-brand-400" />
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-500/30" />
                </div>

                {/* After */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-brand-400 uppercase tracking-wider font-semibold">
                    Com OpenClaw
                  </p>
                  <div
                    className="rounded-lg p-3 flex items-start gap-2"
                    style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}
                  >
                    <span className="text-green-400 text-sm shrink-0">✦</span>
                    <p className="text-gray-300 text-xs leading-relaxed">{doc.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How it works technically */}
          <div className="mt-8 glass rounded-2xl p-6 border border-white/8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <p className="text-white font-bold text-sm">Como funciona a mágica</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: "1", label: "Upload do doc", desc: "PDF, DOCX, planilha, URL ou integração direta" },
                { step: "2", label: "Indexação semântica", desc: "O OpenClaw cria embeddings vetoriais do conteúdo" },
                { step: "3", label: "Memória do agente", desc: "O documento vira conhecimento vivo do agente" },
                { step: "4", label: "Resposta contextual", desc: "Cliente pergunta, agente cita o trecho certo" },
              ].map((s) => (
                <div key={s.step} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">{s.label}</p>
                    <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 2: The Dream ── */}
        <div className="relative">
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative glass rounded-3xl border border-brand-500/20 p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center shadow-xl shadow-brand-500/30 shrink-0">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
                    O sonho do OpenClaw
                  </p>
                  <Globe className="w-4 h-4 text-brand-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Uma força de trabalho de IA
                  <br />
                  <span className="gradient-text">para cada empresa do Brasil</span>
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-gray-300 text-base leading-relaxed">
                  O OpenClaw nasceu de uma crença simples: toda empresa deveria ter acesso
                  ao mesmo nível de infraestrutura de IA que as gigantes da tecnologia —
                  independente do tamanho ou orçamento.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Nossa visão é um mundo onde uma clínica no interior, uma concessionária
                  familiar ou um e-commerce de nicho possam contratar uma equipe de agentes
                  de IA tão eficiente quanto qualquer empresa Fortune 500.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  A Verônica é apenas o começo. Estamos construindo a camada de sistema
                  operacional para a força de trabalho de IA — com memória, workflows,
                  voz, documentos inteligentes e observabilidade total.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-brand-500/30"
                  >
                    Fazer parte do futuro
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#features"
                    className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    Ver como funciona →
                  </a>
                </div>
              </div>

              {/* Vision points */}
              <div className="grid grid-cols-2 gap-4">
                {visionPoints.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-xl p-4 space-y-2"
                    style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}
                  >
                    <span className="text-2xl">{v.icon}</span>
                    <p className="text-white font-bold text-sm">{v.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics bar */}
            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "24/7", label: "Disponibilidade" },
                { value: "< 2s", label: "Tempo de resposta" },
                { value: "99.9%", label: "Uptime garantido" },
                { value: "∞", label: "Clientes simultâneos" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <p className="text-3xl font-black gradient-text">{m.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
