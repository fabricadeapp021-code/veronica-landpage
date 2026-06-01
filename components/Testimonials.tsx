import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rodrigo Mendes",
    role: "CEO, AutoMax Concessionária",
    avatar: "RM",
    text: "A Sofia, nossa agente de vendas, qualificou 340 leads em um mês e marcou 80 test-drives sem nenhuma intervenção humana. Nosso time de vendas agora foca só no fechamento.",
    stars: 5,
    metric: "340 leads qualificados/mês",
  },
  {
    name: "Dra. Camila Porto",
    role: "Diretora, Clínica BemViver",
    avatar: "CP",
    text: "Nossa recepcionista virtual agenda 95% das consultas sozinha, manda lembretes, confirma presença e ainda triagem os casos urgentes. Reduziu nosso no-show em 60%.",
    stars: 5,
    metric: "60% menos no-show",
  },
  {
    name: "Marcus Alves",
    role: "Head de Cobrança, FinanCell",
    avatar: "MA",
    text: "O Lucas, agente de cobrança, negocia dentro das faixas que definimos, emite acordo na hora e gera comprovante. Recuperamos R$ 800 mil em débitos no primeiro trimestre.",
    stars: 5,
    metric: "R$ 800k recuperados no Q1",
  },
  {
    name: "Juliana Costa",
    role: "Diretora de Operações, EduCorp",
    avatar: "JC",
    text: "Implementamos o Pedro para matrícula e a conversão de leads em alunos matriculados passou de 22% para 67%. O agente segue o processo à risca e nunca esquece de um follow-up.",
    stars: 5,
    metric: "3x aumento na conversão",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white/[0.01] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest">
            Depoimentos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Empresas que já escalaram
            <br />
            <span className="gradient-text">com funcionários de IA</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass glass-hover rounded-2xl p-6 space-y-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>

              {/* Metric badge */}
              <div className="inline-block px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20">
                <p className="text-brand-300 text-xs font-bold">{t.metric}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
