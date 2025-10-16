import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    company: "TechVerde Ltda",
    role: "CEO",
    content: "A Deltta transformou nossa gestão contábil e nos ajudou a implementar práticas sustentáveis que reduziram nossos custos e impacto ambiental. Profissionalismo excepcional!",
    rating: 5
  },
  {
    name: "João Santos",
    company: "EcoIndustria S.A.",
    role: "Diretor Financeiro",
    content: "Parceria fundamental para nosso crescimento. A consultoria ambiental da Deltta nos permitiu expandir seguindo todas as normas ambientais com segurança.",
    rating: 5
  },
  {
    name: "Ana Costa",
    company: "Verde Inovação",
    role: "Sócia-Fundadora",
    content: "Atendimento personalizado e soluções inovadoras. A equipe da Deltta entende as necessidades das empresas modernas e oferece resultados concretos.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="pt-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {/* O que dizem  */}
            Nossos <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A confiança dos nossos parceiros é o reflexo do nosso compromisso 
            com a excelência.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-deltta-green transition-all duration-300 hover:-translate-y-1 border-0 bg-white relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-secondary" />
                </div>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-secondary text-secondary" 
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-6 space-y-2">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium text-primary">
                      {testimonial.role}
                    </div>
                    <div>{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Trust Indicators */}
        {/* <div className="mt-16 text-center fade-in">
          <div className="bg-muted rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols- gap-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">24h</div>
                <div className="text-sm text-muted-foreground">Tempo Resposta</div>
              </div>
            </div>
          </div>
        </div> */}

        
      </div>
    </section>
  );
}