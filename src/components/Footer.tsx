import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col my-10 mx-auto">
      <div className="flex items-center justify-around gap-12">
        <Link href="#home">
          <img src="/img/favicon.png" alt="Logomarca" className="w-14 h-auto" />
        </Link>
        <nav>
          <ul className="flex items-center gap-5 list-none">
            <li>
              <Link href="#features" className="no-underline text-neutral-400 hover:text-white transition-colors duration-300">
                Recursos
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="no-underline text-neutral-400 hover:text-white transition-colors duration-300">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="#faq" className="no-underline text-neutral-400 hover:text-white transition-colors duration-300">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-neutral-900 mx-5 my-2.5">
        <p className="my-1 text-xs text-center text-neutral-400">
          &copy; 2026 Renato Queiroga | Desenvolvedor Full Stack
        </p>
      </div>
    </footer>
  );
}