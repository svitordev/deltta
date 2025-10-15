import {
  Calculator,
  Leaf,
  FileText,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Landmark,
  BriefcaseBusiness,
  HeartHandshake
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const detailedServices = [
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description:
      "Gestão contábil completa e estratégica para o crescimento sustentável do seu negócio.",
    features: [
      "Escrituração contábil completa",
      "Demonstrações financeiras",
      "Conciliações bancárias",
      "Controle patrimonial",
      "Análise de indicadores financeiros",
    ],
    color: "text-primary",
  },
  {
    icon: Leaf,
    title: "Consultoria Ambiental",
    description:
      "Soluções estratégicas para empresas comprometidas com sustentabilidade e responsabilidade ambiental.",
    features: [
      "Diagnóstico ambiental",
      "Planos de gestão ambiental",
      "Estudos de impacto ambiental",
      "Monitoramento ambiental",
      "Certificações ambientais",
    ],
    color: "text-secondary",
  },
  {
    icon: FileText,
    title: "Licenciamento Ambiental",
    description:
      "Suporte completo nos processos de licenciamento junto aos órgãos ambientais competentes.",
    features: [
      "Licença prévia (LP)",
      "Licença de instalação (LI)",
      "Licença de operação (LO)",
      "Renovação de licenças",
      "Acompanhamento processual",
    ],
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Assessoria Fiscal",
    description:
      "Orientação especializada para otimização da carga tributária e conformidade fiscal.",
    features: [
      "Análise de regime tributário",
      "Apuração de impostos",
      "Declarações obrigatórias",
      "Defesa em autuações",
      "Recuperação de créditos",
    ],
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description:
      "Estratégias inteligentes para redução legal de impostos e maximização de resultados.",
    features: [
      "Estudo de viabilidade tributária",
      "Reorganização societária",
      "Elisão fiscal",
      "Análise de benefícios fiscais",
      "Simulações tributárias",
    ],
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Compliance Ambiental",
    description:
      "Monitoramento e adequação às normas ambientais para garantir conformidade total.",
    features: [
      "Auditoria de conformidade",
      "Relatórios de sustentabilidade",
      "Gestão de resíduos",
      "Controle de emissões",
      "Treinamentos ambientais",
    ],
    color: "text-accent",
  },

  {
    icon: Landmark,
    title: "Contabilidade Pública (assessoria e consultoria)",
    description:
      "Gestão contábil para órgãos e entidades públicas, com total conformidade a MCASP/PCASP e LRF.",
    features: [
      "Escrituração em conformidade com MCASP/PCASP",
      "Elaboração de RREO, RGF e Balanços",
      "Conciliações e gestão de Restos a Pagar",
      "Suporte à prestação de contas",
      "Análise de indicadores fiscais e limites da LRF",
    ],
    color: "text-primary",
  },
  {
    icon: BriefcaseBusiness,
    title: "Assessoria Recursos Humanos (pública e privada)",
    description:
      "Operação completa de folha e pessoas para órgãos públicos e empresas privadas.",
    features: [
      "Processamento de folha, encargos e 13º",
      "Admissões, rescisões, férias e rotinas",
      "eSocial",
      "EFD-Reinf",
      "FGTS Digital",
    ],
    color: "text-secondary",
  },
  {
    icon: HeartHandshake,
    title: "Contabilidade para o Terceiro Setor (associações, cooperativas e igrejas)",
    description:
      "Contabilidade especializada para OSCs, com foco em transparência e sustentabilidade dos projetos.",
    features: [
      "Plano de contas do terceiro setor e escrituração Contábil",
      "Demonstrações financeiras",
      "Gestão de convênios/projetos",
      "Acompanhamento personalizado na prestação de contas",
      "Conciliações e centros de custo por projeto",
      "Apoio a imunidades/isenções e regularidade fiscal",
      "Gestão financeira da entidade",
    ],
    color: "text-accent",
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Oferecemos soluções integradas em contabilidade e meio ambiente,
              combinando expertise técnica com compromisso sustentável para
              impulsionar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-deltta transition-all duration-300 border-0 bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-muted group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`h-8 w-8 ${service.color}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <button className="text-primary font-medium hover:underline">
                            <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">Solicitar consultoria →</a>
                            
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe está preparada para desenvolver soluções
              personalizadas que atendam às necessidades específicas da sua
              empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-deltta hover:gradient-deltta-hover text-white px-8 py-4 rounded-lg font-semibold hover:shadow-deltta transition-all duration-300">
                <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                   Agendar Consultoria Gratuita
                </a>
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
