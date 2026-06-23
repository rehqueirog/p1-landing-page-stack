"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ==========================================
          DESKTOP NAVIGATION
          ========================================== */}
      <header className="hidden md:block">
        <nav className="flex items-center justify-between px-5 py-3 relative overflow-visible max-h-none pointer-events-auto">
          <Link href="#home">
            <img src="/img/favicon.png" alt="Logomarca" className="w-12 h-auto" />
          </Link>
          <ul className="flex items-center gap-4 flex-row list-none">
            <li><Link href="#home" className="text-white no-underline hover:text-purple-900">Início</Link></li>
            <li><Link href="#features" className="text-white no-underline hover:text-purple-900">Recursos</Link></li>
            <li><Link href="#pricing" className="text-white no-underline hover:text-purple-900">Serviços</Link></li>
            <li><Link href="#faq" className="text-white no-underline hover:text-purple-900">FAQ</Link></li>
            <li className="list-none">
              <Link href="#features" className="bg-purple-400 text-white px-4 py-3 rounded-lg text-base no-underline hover:bg-purple-900 hover:border hover:border-white transition-all duration-500">
                Conheça Meu Trabalho
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ==========================================
          MOBILE NAVIGATION
          ========================================== */}
      <header className="block md:hidden relative">
        <button
          className={`absolute top-4 right-4 z-50 cursor-pointer bg-transparent border-none p-2 transition-transform duration-500 ${isOpen ? "rotate-90 fixed" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <box-icon name={isOpen ? "x" : "menu"} color="#ffffff" size="md" />
        </button>

        <nav
          className={`fixed top-0 left-0 w-full z-40 bg-neutral-800/60 backdrop-blur-md transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-72 pt-7 pb-7 pointer-events-auto" : "max-h-0 pt-0 pb-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-2.5 list-none">
            <li><Link href="#home" onClick={closeMenu} className="text-white no-underline hover:text-purple-900">Início</Link></li>
            <li><Link href="#features" onClick={closeMenu} className="text-white no-underline hover:text-purple-900">Recursos</Link></li>
            <li><Link href="#pricing" onClick={closeMenu} className="text-white no-underline hover:text-purple-900">Serviços</Link></li>
            <li><Link href="#faq" onClick={closeMenu} className="text-white no-underline hover:text-purple-900">FAQ</Link></li>
            <li className="mt-5 list-none">
              <Link href="#features" onClick={closeMenu} className="bg-purple-400 text-white px-4 py-3 rounded-lg text-base no-underline">
                Conheça Meu Trabalho
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}