"use client"
import Image from "next/image";

export default function Clients() {
  const logos = [
      { href: "https://casinhas.pe.leg.br/v1/", src: "/clientes/casinhas.png", alt: "Câmara municipal de Casinhas - PE" },
      { href: "https://joaoalfredo.pe.gov.br/", src: "/clientes/joaoAlfredo.jpg", alt: "Prefeitura de João Alfredo - PE" },
      { href: "https://vertentedolerio.pe.leg.br/", src: "/clientes/vertenteLerio.png", alt: "Câmara municipal de Vertente do Lério" },
      { href: "https://saaecatende.pe.gov.br/", src: "/clientes/saaeCatende.png", alt: "SAAE Catende" },
    { href: "https://www.asquija.org.br/", src: "/clientes/asquija.png", alt: "Associação Quilombola de João Alfredo - PE" },
    { href: "https://www.instagram.com/chinabar_surubim?igsh=MWhkYXdxbzA5N3NwNw==", src: "/clientes/chinaBar.jpg", alt: "China Bar" },
    { href: "https://www.instagram.com/surubimpizzas?igsh=Y3p5MnhxbXJ4amhw", src: "/clientes/surubimPizzas.jpg", alt: "Surubim Pizzas" },
  ];

  const loop = [...logos, ...logos];

  return (
    <section className="pb-20 bg-muted">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Clientes</h2>

        <div className="relative overflow-hidden">
          {/* Fades nas laterais */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent" />

          {/* Trilho que desliza */}
          <ul
            className="marquee flex flex-nowrap items-center gap-10 py-2 hover:[animation-play-state:paused]"
            style={{ "--dur": "40s" }}
            aria-label="Logos de clientes rolando horizontalmente"
          >
            {loop.map((item, i) => (
              <li
                key={i}
                className="shrink-0"
                aria-hidden={i >= logos.length ? true : undefined}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={180}
                    height={90}
                    className="h-24 rounded-lg w-auto opacity-80 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                    priority
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Estilo local (Next.js styled-jsx) */}
      <style jsx>{`
        @keyframes marqueeX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          width: max-content;
          animation: marqueeX var(--dur) linear infinite;
        }
        /* Acessibilidade: respeita "reduzir animações" do SO */
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
