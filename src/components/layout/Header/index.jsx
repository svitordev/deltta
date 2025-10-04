"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logotipo/colorido/azulverde.png"


const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
  { name: "Links Uteis", href: "/linksuteis" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/"  className="flex items-center">
            <Image src={logo} alt="" width={150} height={100} quality={100}/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="gradient-deltta hover:gradient-deltta-hover text-white border-0"
            >
              <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border transition-all duration-300",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <nav className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="default"
              className="w-full gradient-deltta text-white border-0 mt-4"
            >
              <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
