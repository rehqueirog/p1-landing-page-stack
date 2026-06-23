"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-20 right-7.5 bg-[rgba(31,31,31,0.219)] backdrop-blur-sm rounded-full border border-[#40005c] w-12 h-12 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[1px_1px_10px_#8a05be] ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Voltar ao topo"
    >
      <box-icon name="chevron-up" color="#8a05be" size="md" />
    </button>
  );
}