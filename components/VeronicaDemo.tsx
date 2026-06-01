import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import VeronicaChat from "./VeronicaChat";

const demoPoints = [
  "Converse com a Veronica real da Venorica AI",
  "Veja como ela qualifica necessidade, canal e contato",
  "Use como referência para criar agentes próprios por tenant",
];

export default function VeronicaDemo() {
  return (
    <section id="veronica-demo" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent" />
      <div className="glow-orb left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 bg-brand-600" style={{ opacity: 0.08 }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              Demo ao vivo
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Fale com a Veronica antes de contratar seu agente
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-gray-400">
                Em vez de colocar o chat disputando atenção com a headline, a Veronica agora aparece como prova interativa logo depois do hero: o visitante entende a promessa primeiro e testa o agente em seguida.
              </p>
            </div>

            <ul className="space-y-3">
              {demoPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="#veronica-chat"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-brand-500/40"
              >
                Testar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition-all hover:border-brand-500/40 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                Quero minha Veronica
              </a>
            </div>
          </div>

          <div id="veronica-chat" className="flex justify-center lg:justify-end">
            <VeronicaChat />
          </div>
        </div>
      </div>
    </section>
  );
}
