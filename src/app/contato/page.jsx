import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: ["Rua Antônio Farias, 207 - Centro", "Surubim - PE", "CEP: 55750-000"],
    color: "text-primary"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: ["(81) 99735-4465"],
    color: "text-secondary"
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["administrativo@delttaservico.com.br"],
    color: "text-primary"
  },
  // {
  //   icon: Clock,
  //   title: "Horário",
  //   content: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h", "Domingo: Fechado"],
  //   color: "text-secondary"
  // }
];
export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para atender suas necessidades e desenvolver soluções 
              personalizadas para o crescimento sustentável do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 bg-white hover:shadow-deltta transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-muted">
                      <Icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.content.map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
            {/* Contact Form */}
            {/* <div className="fade-in">
              <Card className="border-0 bg-white shadow-deltta">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Solicite uma <span className="text-gradient">Consultoria</span>
                      </h2>
                      <p className="text-muted-foreground">
                        Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nome Completo
                          </label>
                          <Input 
                            placeholder="Seu nome completo"
                            className="border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            E-mail
                          </label>
                          <Input 
                            type="email"
                            placeholder="seu@email.com"
                            className="border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Telefone
                          </label>
                          <Input 
                            placeholder="(11) 99999-9999"
                            className="border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Empresa
                          </label>
                          <Input 
                            placeholder="Nome da empresa"
                            className="border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Serviço de Interesse
                        </label>
                        <select className="w-full p-3 border border-border rounded-lg focus:border-primary focus:outline-none">
                          <option value="">Selecione um serviço</option>
                          <option value="contabilidade">Contabilidade Empresarial</option>
                          <option value="ambiental">Consultoria Ambiental</option>
                          <option value="licenciamento">Licenciamento Ambiental</option>
                          <option value="fiscal">Assessoria Fiscal</option>
                          <option value="tributario">Planejamento Tributário</option>
                          <option value="compliance">Compliance Ambiental</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Mensagem
                        </label>
                        <Textarea 
                          placeholder="Descreva sua necessidade ou dúvida..."
                          rows={4}
                          className="border-border focus:border-primary"
                        />
                      </div>

                      <Button 
                        className="w-full gradient-deltta text-white border-0 py-3 font-semibold hover:shadow-deltta"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div> */}

            {/* Map & Additional Info */}
            <div className="space-y-6  flex justify-between w-full gap-10">
              {/* Map */}
              <Card className="border-0 bg-white shadow-deltta w-1/2 h-96">
                <CardContent className="p-0">
                  <div className="h-96 bg-muted rounded-lg relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.0913833580071!2d-35.75647392023593!3d-7.835545840755319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7abdca498450d1d%3A0x32ae42363608f09b!2sR.%20Ant%C3%B4nio%20Farias%2C%20207%20-%20Centro%2C%20Surubim%20-%20PE%2C%2055750-000!5e1!3m2!1spt-BR!2sbr!4v1759541816088!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="border-0 bg-white shadow-deltta w-1/2 h-96 mt-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Por que escolher a Deltta?
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Atendimento personalizado e dedicado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Equipe especializada e certificada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Soluções integradas e sustentáveis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Comprometimento com resultados</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          {/* </div> */}
        </div>
      </section>

    </div>
  )
}
