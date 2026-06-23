import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <div className="relative w-full h-full">
        <picture>
          <source srcSet="/img/img-desktop.png" media="(min-width: 768px)" />
          <img src="/img/img-mobile.png" alt="Renato Queiroga" className="w-full max-w-full h-auto block" />
        </picture>

        {/* Gradiente sobre a imagem */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black to-transparent pointer-events-none" />

        {/* Conteúdo */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-2 max-w-2xl w-full p-4 text-center
                        md:max-w-xl md:text-left md:bottom-2.5 md:left-[35%]
                        lg:max-w-2xl lg:bottom-1/4 lg:left-[30%]">
          <div>
            <h1 className="text-purple-400 font-['Gill_Sans'] text-3xl leading-7 font-black mb-2.5
                           md:text-purple-500 md:text-4xl
                           lg:text-purple-500 lg:text-5xl lg:leading-10">
              Soft skills de educador, hard skills de engenheiro.
            </h1>
            <p className="text-base md:leading-6">
              Sou Renato Queiroga. Passei 8 anos desenvolvendo o potencial humano através de idiomas e mentoria. Hoje, construo aplicações web robustas com Next.js, Node.js e TypeScript. Transformo ideias complexas em interfaces limpas e sistemas que funcionam.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 mt-2.5 md:flex-row">
            <Link href="#features" className="bg-purple-400 text-white px-4 py-3 rounded-lg text-base no-underline font-['Gill_Sans'] border border-transparent cursor-pointer transition-all duration-500 hover:bg-purple-900 hover:border-white">
              Conheça Meu Trabalho
            </Link>
            <Link href="https://wa.me/5583982033982" className="bg-neutral-900 text-white px-4 py-3 rounded-lg text-base no-underline font-['Gill_Sans'] border border-neutral-400 cursor-pointer transition-all duration-500 hover:bg-purple-900 hover:border-white">
              Converse Comigo no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}