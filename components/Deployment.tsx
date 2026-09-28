import { Cloud, Server, Boxes, CheckCircle2 } from "lucide-react";

const options = [
  {
    icon: Cloud,
    tag: "Mais simples",
    title: "SaaS Gerenciado",
    subtitle: "Nós hospedamos tudo",
    gradient: "from-brand-600 to-accent-600",
    glow: "rgba(99,102,241,0.2)",
    description:
      "Comece em minutos. A Venorica AI cuida de infraestrutura, escala, backups e atualizações — você só contrata seus agentes.",
    points: [
      "Deploy em segundos, sem DevOps",
      "Atualizações e patches automáticos",
      "Backup e monitoramento inclusos",
      "SLA de uptime 99.9%",
    ],
  },
  {
    icon: Server,
    tag: "Controle total",
    title: "Self-Hosted",
    subtitle: "No seu próprio datacenter",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.2)",
    description:
      "Rode a plataforma inteira dentro do seu ambiente on-premise ou VPC privada. Ideal para bancos, saúde e setores regulados.",
    points: [
      "Isolamento total de rede",
      "Dados nunca saem do seu ambiente",
      "Compatível com LGPD e políticas internas de compliance",
      "Sobe via Docker Compose ou Kubernetes",
    ],
  },
  {
    icon: Boxes,
    tag: "Flexível",
    title: "Sua Nuvem",
    subtitle: "AWS, GCP, Azure ou Hetzner",
    gradient: "from-orange-500 to-amber-600",
    glow: "rgba(245,158,11,0.2)",
    description:
      "Instalamos a Venorica AI diretamente na sua conta de cloud. A titularidade da infraestrutura é sua — nós cuidamos da operação.",
    points: [
      "Deploy na sua conta AWS, GCP, Azure ou Hetzner",
      "Você mantém billing e governança da conta",
      "Escala junto com sua própria cloud",
      "Migração entre provedores sem lock-in",
    ],
  },
];

const clouds = ["AWS", "Google Cloud", "Azure", "Hetzner"];

export default function Deployment() {
  return (
    <section id="deployment" className="py-16 lg:py-24 relative overflow-hidden">
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
            Implantação
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Do jeito que a sua
            <br />
            <span className="gradient-text">infraestrutura exige</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            SaaS pronto para usar, self-hosted no seu datacenter ou instalado
            direto na sua própria conta de cloud. Sem trocar de plataforma,
            sem lock-in.
          </p>
        </div>

        {/* Options grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="relative rounded-3xl glass border border-white/8 hover:border-white/20 p-6 space-y-5 transition-all hover:-translate-y-1"
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                  style={{ background: opt.glow }}
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${opt.gradient} shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-white/10 rounded-full px-2.5 py-1">
                    {opt.tag}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="text-white font-black text-xl">{opt.title}</h3>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${opt.gradient} bg-clip-text text-transparent`}
                  >
                    {opt.subtitle}
                  </p>
                </div>

                <p className="relative text-gray-400 text-sm leading-relaxed">
                  {opt.description}
                </p>

                <ul className="relative space-y-2">
                  {opt.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Cloud providers strip */}
        <div className="mt-10 glass rounded-2xl p-6 border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-sm">
              Suportamos as principais clouds do mercado
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Deploy via Docker Compose ou Kubernetes em qualquer uma delas.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clouds.map((cloud) => (
              <span
                key={cloud}
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-semibold"
              >
                {cloud}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
