import { ArrowRight, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={1000}
          height={100}
          quality={100}
          src="/structure/hero-image.jpg"
          alt="Equipe profissional Deltta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="fade-in space-y-6 lg:mt-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">
                Credibilidade e Sustentabilidade
              </span>
              <Leaf className="h-4 w-4 text-white" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Soluções <span className="text-secondary">Sustentáveis</span> em
              Contabilidade
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Oferecemos serviços contábeis e ambientais de excelência para
              empresas que valorizam responsabilidade e crescimento sustentável.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-deltta font-semibold"
              >
                <a href="/servicos" className="flex items-center">
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-deltta font-semibold"
              >
                <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>

            {/* Stats
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 w-3/4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Comprometimento</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
