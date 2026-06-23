"use client";

import { useState } from "react";

export default function Faq() {
  const faqs = [
    { question: "O que um professor entende de software?", 
      answer: "Muita coisa. Passei 8 anos ensinando inglês e espanhol. Isso me deu clareza para explicar o complexo, empatia com o cliente e uma capacidade enorme de aprender sozinho — qualidades raras em tecnologia." },
    { question: "Você faz o design ou só programa?", 
      answer: "Os dois. Se você já tem um layout no Figma, dou vida a ele com código. Se não tem, crio do zero com base nas melhores práticas de usabilidade." },
    { question: "Quanto tempo leva?", 
      answer: "Uma landing page fica pronta em 3 a 7 dias. Um sistema completo leva de 2 a 8 semanas. Depois de entender seu projeto, monto um cronograma com datas claras para cada etapa." },
    { question: "Tem suporte depois que o sistema fica pronto?", 
      answer: "Sim. Todo projeto tem um período de garantia com ajustes gratuitos. O código é entregue organizado e documentado para que qualquer programador consiga manter no futuro." },
    { question: "E se der algum problema ou eu desistir?", 
      answer: "Você só paga pelo que foi entregue. Nosso contrato é transparente. Se algo não sair como combinado, ajusto sem custo por até 30 dias." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex justify-center mt-12" id="faq">
      <div className="flex flex-col items-center gap-2.5 md:max-w-175 lg:max-w-200">
        <h2>Dúvidas Frequentes</h2>
        {faqs.map((faq, index) => {
          const isActive = openIndex === index;
          return (
            <div
              key={index}
              className="relative bg-neutral-900 border border-purple-900 rounded-md overflow-hidden cursor-pointer w-full"
              onClick={() => setOpenIndex(isActive ? -1 : index)}
            >
              {/* Ícones + e - */}
              <div className="absolute top-2.5 right-2.5 cursor-pointer">
                <box-icon
                  name="plus"
                  color="#ffffff"
                  class={`transition-all duration-300 ease-in-out ${
                    isActive ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <box-icon
                  name="minus"
                  color="#ffffff"
                  class={`transition-all duration-300 ease-in-out absolute top-0 right-0 ${
                    isActive ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>

              {/* Pergunta */}
              <h3 className="bg-purple-900 rounded-t-md py-5 pl-5 pr-7">
                {faq.question}
              </h3>

              {/* Resposta */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isActive
                    ? "max-h-96 pt-2.5 pb-2.5 px-5"
                    : "max-h-0 pt-0 pb-0 px-5"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}