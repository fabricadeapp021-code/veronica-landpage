import { Zap } from "lucide-react";

export default function Footer() {
  const links = {
    Produto: ["Funcionalidades", "Como Funciona", "Integrações", "Segurança", "Roadmap"],
    Empresa: ["Sobre nós", "Blog", "Carreiras", "Parceiros", "Contato"],
    Legal: ["Termos de Uso", "Política de Privacidade", "LGPD", "Cookies"],
  };

  return (
    <footer className="border-t border-white/5 bg-white/[0.01] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-white">Venorica</span>
                <span className="gradient-text"> AI</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI Workforce Operating System. Contrate funcionários de IA que
              trabalham pelo WhatsApp, com memória, workflows e integração total
              ao seu negócio.
            </p>
            <div className="flex gap-3">
              {/* Social icons placeholder */}
              {["in", "tw", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-brand-500/40 transition-colors text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-white font-semibold text-sm">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 Venorica AI. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Todos os sistemas operacionais · Dados armazenados no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
