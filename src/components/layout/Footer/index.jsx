import React from 'react'
import { MapPin, Phone, Mail, Leaf, Calculator } from "lucide-react";
import logo from "@/assets/Logotipo/pretoBranco/delttaBranco.png";
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Image src={logo} alt="" width={200} height={100} quality={100}/>
            <p className="text-primary-foreground/80 leading-relaxed">
              Soluções sustentáveis em contabilidade e meio ambiente para empresas que valorizam responsabilidade e excelência.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-secondary rounded-lg">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <div className="p-2 bg-secondary rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Contabilidade Empresarial</li>
              <li>Consultoria Ambiental</li>
              <li>Licenciamento Ambiental</li>
              <li>Assessoria Fiscal</li>
              <li>Planejamento Tributário</li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Úteis</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="/servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="/sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="/linksuteis" className="hover:text-white transition-colors">Links Uteis</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <a href='https://maps.app.goo.gl/nSVVQDhn4g3Qshmk9' className="flex items-center space-x-3 hover:text-white" target='_blank' rel="noopener noreferrer">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Rua Exemplo, 123 - Centro<br />São Paulo - SP</span>
              </a>
              
              <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-white">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">(81) 99735-4465</span>
              </a>
              <a href="mailto:administrativo@delttaservico.com.br?subject=Agendamento%20de%20consultoria&body=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-white">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">administrativo@delttaservico.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Deltta Serviços Ambientais e Contábeis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
