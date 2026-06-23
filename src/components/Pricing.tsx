import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      title: "Landing Page", description: "Presença digital elegante e rápida.",
      items: ["Next.js + Tailwind CSS", "SEO e performance otimizados", "Design responsivo", "Google Analytics", "Formulário de contato", "15 dias de suporte"],
      badge: null, iconColor: "#a333d8",
    },
    {
      title: "Web App Completo", description: "Sistema sob medida com banco de dados.",
      items: ["Next.js + Node.js + TypeScript", "Painel administrativo", "Autenticação e API", "Dashboard e relatórios", "Deploy automatizado (CI/CD)", "30 dias de acompanhamento"],
      badge: "Mais Popular", iconColor: "#22c55e",
    },
    {
      title: "Consultoria & Mentoria", description: "Diagnóstico, arquitetura ou aulas.",
      items: ["Code Review", "Diagnóstico de arquitetura", "Roadmap de carreira", "Sessões ao vivo", "Material exclusivo", "Acompanhamento contínuo"],
      badge: null, iconColor: "#a333d8",
    },
  ];

  return (
    <section className="mt-12" id="pricing">
      <div className="text-center leading-7 my-5">
        <h2 className="text-purple-500 text-3xl">Como posso trabalhar com você</h2>
        <p>Três caminhos para tirar sua ideia do papel</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2.5 lg:gap-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-neutral-900 p-4 border border-neutral-800 rounded-2xl text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[1px_1px_10px_#a333d8] md:min-w-60 ${
              index === 1 ? "bg-purple-900 border-purple-400" : ""
            }`}
          >
            {plan.badge && (
              <p className="mx-auto -mt-4 mb-2.5 w-36 bg-amber-500 text-neutral-900 rounded-b-lg">
                {plan.badge}
              </p>
            )}
            <h3 className="text-purple-400 text-center mb-2.5 text-2xl">{plan.title}</h3>
            <p className="text-center mb-2.5">{plan.description}</p>
            <ul>
              {plan.items.map((item, i) => (
                <li key={i} className="relative list-none py-1 pl-5 text-left">
                  <span className="absolute -left-1 top-1">
                    <box-icon name="check" color={plan.iconColor} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 mb-0 mx-auto">
              <Link
                href="https://wa.me/5583982033982"
                className="bg-purple-400 text-white px-4 py-3 rounded-lg text-base no-underline font-['Gill_Sans'] border border-transparent cursor-pointer transition-all duration-500 hover:bg-purple-900 hover:border-white"
              >
                {index === 2 ? "Fale Comigo" : "Solicitar Orçamento"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}