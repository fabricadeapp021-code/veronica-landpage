import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-600 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.2 }} />
      <div className="glow-orb w-[400px] h-[400px] bg-accent-500 top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.15 }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* WhatsApp icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-green-500 flex items-center justify-center shadow-2xl shadow-green-500/40 animate-float">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-[1.05]">
            Pronto para contratar
            <br />
            <span className="gradient-text">seu primeiro funcionário de IA?</span>
          </h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Fale com nossa equipe pelo WhatsApp. Em menos de 24h, seu agente
            já pode estar atendendo seus clientes.
          </p>
        </div>

        {/* Form card */}
        <div className="glass rounded-2xl p-8 max-w-xl mx-auto space-y-4">
          <h3 className="text-white font-bold text-lg">Solicitar demonstração gratuita</h3>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nome da empresa"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500/50 transition-colors"
            />
            <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm focus:outline-none focus:border-brand-500/50 transition-colors appearance-none">
              <option value="">Qual o papel do agente?</option>
              <option>Vendas / SDR</option>
              <option>Suporte ao cliente</option>
              <option>Agendamento</option>
              <option>Cobrança</option>
              <option>Outro</option>
            </select>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all">
            <MessageCircle className="w-5 h-5" />
            Quero minha demo grátis
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-gray-500 text-xs">
            Sem compromisso. Nossa equipe entra em contato em até 2 horas.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {[
            "Setup em 24h",
            "Suporte em português",
            "Sem contrato de fidelidade",
            "Dados no Brasil",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-gray-400 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
