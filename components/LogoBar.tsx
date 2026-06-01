const logos = [
  "Clínicas Bem Estar",
  "TechVarejo",
  "ImovelPrime",
  "AutoMax",
  "EducaCorp",
  "FinanCell",
  "LogisPro",
  "SaúdeDigital",
];

export default function LogoBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-10 overflow-hidden">
      <p className="text-center text-gray-500 text-sm font-medium mb-8">
        Empresas que já contrataram seus funcionários de IA
      </p>
      <div className="flex gap-12 overflow-hidden">
        <div className="flex gap-12 items-center [animation:marquee_30s_linear_infinite] shrink-0">
          {logos.map((name) => (
            <span
              key={name}
              className="text-gray-600 font-semibold text-sm whitespace-nowrap hover:text-gray-400 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="flex gap-12 items-center [animation:marquee_30s_linear_infinite] shrink-0" aria-hidden>
          {logos.map((name) => (
            <span
              key={name + "2"}
              className="text-gray-600 font-semibold text-sm whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
