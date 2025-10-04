import {
  Sprout,
  Leaf,
  Recycle,
  Droplets,
  Waves,
  Building2,
  TrendingUp,
  FileCheck,
  ScrollText,
  Wallet,
  Scale,
  FileSearch,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const detailedLinksUteis = [
  {
    icon: Sprout,
    title: "MAPA – Ministério de Agricultura e Pecuária",
    description:
      "Sistema de restrição e consulta ligado ao setor agropecuário, utilizado para verificar registros e autorizações do MAPA.",
    link: "https://sistemasweb3.agricultura.gov.br/sipe/restringe.action",
    color: "text-primary",
  },
  {
    icon: Leaf,
    title: "CPRH – SILIAWEB",
    description:
      "Plataforma ambiental de Pernambuco para emissão de licenças e acompanhamento de processos ambientais.",
    link: "https://sistemas.cprh.pe.gov.br:8383/siliaweb/selis/",
    color: "text-secondary",
  },
  {
    icon: Recycle,
    title: "CTF – IBAMA",
    description:
      "Cadastro Técnico Federal para atividades potencialmente poluidoras, certificando regularidade ambiental.",
    link: "https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/certificado-de-regularidade#validade-do-certificado-de-regularidade",
    color: "text-accent",
  },
  {
    icon: Droplets,
    title: "AESA OUTORGA - PARAIBA",
    description:
      "Sistema de outorga do uso da água no estado da Paraíba, controlado pela AESA.",
    link: "http://siegrh.aesa.pb.gov.br:8080/aesa-outorga/",
    color: "text-primary",
  },
  {
    icon: Waves,
    title: "APAC OUTORGA – PERNAMBUCO",
    description:
      "Sistema de gestão e concessão de direito de uso da água em Pernambuco.",
    link: "http://apac.pe.gov.br/outorga/segout_Login/",
    color: "text-secondary",
  },
  {
    icon: Building2,
    title: "CONSULTA CNPJ",
    description:
      "Consulta oficial de dados cadastrais de empresas junto à Receita Federal.",
    link: "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "CONSULTA SIMPLES NACIONAL",
    description:
      "Verificação da situação tributária de empresas optantes pelo Simples Nacional.",
    link: "https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21",
    color: "text-primary",
  },
  {
    icon: FileCheck,
    title: "CERTDÃO NEGATIVA DE DÉBITOS FEDERAIS",
    description:
      "Documento da Receita Federal que comprova a inexistência de débitos tributários e previdenciários.",
    link: "https://servicos.receitafederal.gov.br/servico/certidoes/#/home",
    color: "text-secondary",
  },
  {
    icon: ScrollText,
    title: "CERTIDÃO DE REGULARIDADE FISCAL PERNAMBUCO",
    description:
      "Documento da SEFAZ-PE que comprova a regularidade fiscal da empresa perante o estado.",
    link: "https://efisco.sefaz.pe.gov.br/sfi_trb_gcc/PREmitirCertidaoRegularidadeFiscal",
    color: "text-accent",
  },
  {
    icon: Wallet,
    title: "CERTIDÃO DE REGULARIDADE DO FGTS",
    description:
      "Documento emitido pela Caixa que comprova a regularidade da empresa com os depósitos de FGTS dos trabalhadores.",
    link: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf",
    color: "text-primary",
  },
  {
    icon: Scale,
    title: "CERTIDÃO TRABALHISTA",
    description:
      "Certidão que atesta se a empresa possui débitos em processos trabalhistas.",
    link: "https://cndt-certidao.tst.jus.br/inicio.faces",
    color: "text-secondary",
  },
  {
    icon: FileSearch,
    title: "CERTIDÃO PJE 01 E 02",
    description:
      "Certidões judiciais emitidas pelo Tribunal de Justiça de Pernambuco via sistema PJE.",
    link: "https://www.tjpe.jus.br/certidaopje/xhtml/main.xhtml;jsessionid=hHAzHCtOg7f2N0PIfqoZXhTm",
    color: "text-accent",
  },
  {
    icon: ShieldCheck,
    title: "CERTIDÃO CONSOLIDADA TCU",
    description:
      "Certidão de regularidade emitida pelo Tribunal de Contas da União, reunindo informações consolidadas sobre a empresa ou órgão.",
    link: "https://certidoes-apf.apps.tcu.gov.br/",
    color: "text-primary",
  }
];

export default function LinksUteis() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Links <span className="text-gradient">Uteis</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossos links úteis reúnem ferramentas, legislações, guias e conteúdos de apoio que podem facilitar o dia a dia do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* link Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedLinksUteis.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card
                  key={index}
                  className="group  hover:shadow-deltta transition-all duration-300 border-0 bg-white overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`inline-flex p-4 rounded-xl bg-muted group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className={`h-8 w-8 ${link.color}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>

                        <div className="pt-4">
                          <a href={link.link} target="_blank" className="text-primary font-medium hover:underline">
                            Acessar Link →
                          </a>
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
              <button className="gradient-deltta text-white px-8 py-4 rounded-lg font-semibold hover:shadow-deltta transition-all duration-300">
                Agendar Consultoria Gratuita
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
