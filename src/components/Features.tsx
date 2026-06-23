export default function Features() {
  const cards = [
    { icon: "code-alt", title: "Desenvolvimento Web Full-Stack", text: "Aplicações completas e performáticas criadas com React e Next.js no front-end, integradas a ecossistemas seguros e rápidos em Node.js no back-end. Código limpo, tipado com TypeScript e estilizado com a agilidade do Tailwind CSS." },
    { icon: "slack", type: "logo", title: "Arquitetura de Projeto de Vida & Sistemas", text: "Ensinar Projeto de Vida me deu uma habilidade rara: planejar software olhando para o futuro. Arquiteturo a jornada do usuário e a escalabilidade do sistema — telas são consequência de um bom planejamento." },
    { icon: "group", title: "Comunicação e Didática Global", text: "Quase uma década lecionando Inglês e Espanhol me deram fluência para comunicar o complexo de forma simples. Documentações claras, trabalho em times globais e reuniões onde o 'tecniquês' vira valor de negócio." },
    { icon: "rocket", title: "Performance & SEO Otimizados", text: "Sites rápidos, bem posicionados e que convertem. Aplico otimização de Core Web Vitals, performance web e SEO técnico para que cada projeto entregue resultados reais — do carregamento à primeira venda." },
    { icon: "palette", title: "UI/UX Design & Prototipagem", text: "Do conceito ao código com design centrado no usuário. Crio protótipos interativos no Figma, aplico princípios de design system e garanto que cada interface seja intuitiva, acessível e visualmente impactante antes mesmo da primeira linha de código." },
    { icon: "cloud", title: "DevOps & Cloud Computing", text: "Deploy automatizado e infraestrutura escalável na nuvem. Utilizo Docker, CI/CD pipelines e serviços AWS/Vercel para garantir que sua aplicação esteja sempre no ar, com alta disponibilidade, segurança e capacidade de crescer junto com seu negócio." },
  ];

  return (
    <section className="mt-12.5" id="features">
      <div className="text-center leading-7 my-5">
        <h2 className="text-purple-500 text-3xl">Minhas especialidades</h2>
        <p>Soluções completas, do conceito ao deploy</p>
      </div>
      <div className="grid grid-cols-1 gap-5 max-w-7xl mx-auto px-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-h-72 p-6 rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[1px_1px_10px_#a333d8] md:min-h-80"
          >
            <div className="bg-purple-900 p-2.5 w-14 h-14 rounded-xl flex items-center justify-center">
              <box-icon name={card.icon} type={card.type || "regular"} color="#a333d8" />
            </div>
            <h3 className="my-5 text-2xl">{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}