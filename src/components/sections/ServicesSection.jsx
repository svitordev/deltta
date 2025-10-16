import {
  Calculator,
  Leaf,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Landmark,
  BriefcaseBusiness,
  HeartHandshake
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description:
      "Gestão contábil completa com foco em eficiência e conformidade fiscal para o crescimento do seu negócio.",
    color: "text-primary",
  },
  {
    icon: Leaf,
    title: "Consultoria Ambiental",
    description:
      "Soluções sustentáveis e estratégias ambientais para empresas comprometidas com responsabilidade ecológica.",
    color: "text-secondary",
  },
  {
    icon: FileText,
    title: "Licenciamento Ambiental",
    description:
      "Apoio completo nos processos de licenciamento e regularização ambiental junto aos órgãos competentes.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Assessoria Fiscal",
    description:
      "Orientação especializada em questões fiscais e tributárias para otimizar a carga tributária da empresa.",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description:
      "Estratégias inteligentes de planejamento fiscal para redução legal de impostos e maximização de resultados.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Compliance Ambiental",
    description:
      "Monitoramento e adequação às normas ambientais vigentes, garantindo conformidade e sustentabilidade.",
    color: "text-accent",
  },
  {
    icon: Landmark,
    title: "Contabilidade Pública (assessoria e consultoria)",
    description:
      "Gestão contábil para órgãos e entidades públicas, com total conformidade a MCASP/PCASP e LRF.",
    color: "text-primary",
  },
  {
    icon: BriefcaseBusiness,
    title: "Assessoria Recursos Humanos (pública e privada)",
    description:
      "Operação completa de folha e pessoas para órgãos públicos e empresas privadas.",
    color: "text-secondary",
  },
  {
    icon: HeartHandshake,
    title: "Contabilidade para o Terceiro Setor (associações, cooperativas e igrejas)",
    description:
      "Contabilidade especializada para OSCs, com foco em transparência e sustentabilidade dos projetos.",
    color: "text-accent",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços contábeis e ambientais,
            combinando expertise técnica com compromisso sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-deltta transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className={`inline-flex p-4 rounded-full bg-muted group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="/servicos"
                      className="text-primary font-medium group-hover:underline cursor-pointer"
                    >
                      Saiba mais →
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-deltta">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver estratégias específicas
              para as necessidades do seu negócio.
            </p>
            <button className="gradient-deltta hover:gradient-deltta-hover text-white px-8 py-4 rounded-lg font-semibold hover:shadow-deltta transition-all duration-300">
              <a href="https://wa.me/558197354465?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consultoria.%20Podemos%20alinhar%20um%20hor%C3%A1rio%3F" target="_blank" rel="noopener noreferrer">
                Solicitar Consultoria
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
