import Link from "next/link";
import React from "react";

export const MobileMenu = () => {
  return (
    <nav
      className="md:hidden flex flex-col gap-3 absolute right-2 top-[4.55rem] py-4 px-4 w-40 bg-white rounded-xl z-50 text-center font-serif text-terra-800 font-bold"
    >
      <Link className="hover:text-natureza-800" href="/">Início</Link>
      <Link className="hover:text-natureza-800" href="/about">Sobre Nós</Link>
      <Link className="hover:text-natureza-800" href="/news">Notícias</Link>
      <Link className="hover:text-natureza-800" href="/events">Eventos</Link> 
      <Link className="hover:text-natureza-800" href="/projects">Projetos</Link> 
      <Link className="hover:text-natureza-800" href="/contact">Contato</Link> 
    </nav>
  );
};
