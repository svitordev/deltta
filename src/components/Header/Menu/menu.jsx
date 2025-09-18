import Link from "next/link";
import React from "react";

export const MenuPlus = () => {
  return (
    <nav className="hidden md:flex gap-5  font-serif text-terra-800 font-bold">
      <Link className="hover:text-natureza-800" href="/">
        Início
      </Link>
      <Link className="hover:text-natureza-800" href="/about">
        Sobre Nós
      </Link>
      <Link className="hover:text-natureza-800" href="/news">
        Notícias
      </Link>
      <Link className="hover:text-natureza-800" href="/events">
        Eventos
      </Link>
      <Link className="hover:text-natureza-800" href="/projects">
        Projetos
      </Link>
      <Link className="hover:text-natureza-800" href="/contact">
        Contato
      </Link>
    </nav>
  );
};
