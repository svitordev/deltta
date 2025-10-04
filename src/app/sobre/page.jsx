import React from "react";
import { Target, Eye, Heart, Users, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const values = [
  {
    icon: Target,
    title: "Excelência",
    description:
      "Buscamos a perfeição em cada serviço prestado, superando expectativas e entregando resultados de qualidade superior.",
  },
  {
    icon: Heart,
    title: "Integridade",
    description:
      "Pautamos nossas ações na ética, transparência e honestidade em todas as relações comerciais e profissionais.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description:
      "Promovemos práticas sustentáveis e auxiliamos empresas a crescerem de forma ambientalmente responsável.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Construímos relacionamentos duradouros baseados na confiança mútua e no sucesso compartilhado.",
  },
];

const team = [
  {
    name: "Dr. Carlos Deltta",
    role: "CEO & Contador",
    description:
      "15 anos de experiência em contabilidade empresarial e consultoria fiscal.",
    specialties: ["CRC 1SP123456", "Especialista em Planejamento Tributário"],
  },
  {
    name: "Dra. Ana Ambiente",
    role: "Consultora Ambiental",
    description:
      "Engenheira ambiental com mestrado em sustentabilidade empresarial.",
    specialties: ["CREA 12345", "Especialista em Licenciamento"],
  },
  {
    name: "Dr. Pedro Fiscal",
    role: "Gerente Tributário",
    description:
      "Especialista em compliance fiscal e recuperação de créditos tributários.",
    specialties: ["CRC 1SP789012", "Pós-graduado em Direito Tributário"],
  },
  {
    name: "Dra. Maria Sustentável",
    role: "Analista Ambiental",
    description:
      "Bióloga especializada em gestão ambiental e certificações sustentáveis.",
    specialties: ["CRBio 123456", "MBA em Gestão Ambiental"],
  },
];
export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">Deltta</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa especializada em soluções integradas de
              contabilidade e meio ambiente, comprometida com a excelência e
              sustentabilidade dos negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 2024, a Deltta nasceu da visão de integrar
                  excelência contábil com responsabilidade ambiental. Nossos
                  fundadores identificaram a necessidade crescente das empresas
                  em equilibrar resultados financeiros com impacto ambiental
                  positivo.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos uma metodologia única que
                  combina práticas contábeis tradicionais com inovações
                  sustentáveis, ajudando nossos clientes a crescerem de forma
                  responsável e lucrativa.
                </p>
                <p>
                  Hoje, somos reconhecidos como referência no mercado, atendendo
                  mais de 500 empresas e contribuindo para um futuro mais
                  sustentável através de nossos serviços especializados.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <Image
                width={1000}
                height={100}
                quality={100}
                src="/structure/office-building.jpg"
                alt="Escritório Deltta"
                className="w-full h-96 object-cover rounded-2xl shadow-deltta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Missão */}
            <Card className="border-0 bg-white hover:shadow-deltta transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4 flex flex-col justify-center items-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed w-1/2">
                  Oferecer soluções contábeis e ambientais de excelência,
                  promovendo o crescimento sustentável e a responsabilidade
                  social das empresas.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="border-0 bg-white hover:shadow-deltta transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4 flex flex-col justify-center items-center
        ">
                <div className="inline-flex p-4 rounded-full bg-secondary/10">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed w-1/2">
                  Ser reconhecida como a principal referência em serviços
                  integrados de contabilidade e consultoria ambiental no Brasil.
                </p>
              </CardContent>
            </Card>

            {/* Certificações */}
            {/* <Card className="border-0 bg-white hover:shadow-deltta transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Certificações
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certificados ISO 14001, CNAI e acreditações dos principais
                  órgãos reguladores contábeis e ambientais.
                </p>
              </CardContent>
            </Card> */}
          </div>

          {/* Valores */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos <span className="text-gradient">Valores</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Princípios que orientam todas as nossas decisões e ações no dia
                a dia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 bg-white hover:shadow-deltta-green transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="inline-flex p-3 rounded-full bg-secondary/10">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div> 
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Profissionais especializados e comprometidos com a excelência e o
              sucesso dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 bg-white hover:shadow-deltta transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>

                    <div className="space-y-2">
                      {member.specialties.map((specialty, i) => (
                        <div
                          key={i}
                          className="inline-block bg-muted px-3 py-1 rounded-full text-sm text-foreground mr-2"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center fade-in">
            <Image
              width={1000}
              height={100}
              quality={100}
              src="/structure/team-meeting.jpg"
              alt="Equipe Deltta em reunião"
              className="w-full max-w-4xl mx-auto h-80 object-cover rounded-2xl shadow-deltta"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
}
