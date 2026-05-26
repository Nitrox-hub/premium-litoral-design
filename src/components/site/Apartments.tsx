import { useEffect, useState } from "react";
import sala from "@/assets/apartamento-1-sala.jpg";
import quarto from "@/assets/apartamento-1-quarto.jpg";
import cozinha from "@/assets/apartamento-1-cozinha.jpg";

type Apartment = {
  id: string;
  name: string;
  tag: string;
  location: string;
  description: string;
  url: string;
  images: { src: string; alt: string }[];
};

const apartments: Apartment[] = [
  {
    id: "marine-301",
    name: "Marine 301",
    tag: "Venda e Locação · 3 suítes",
    location: "Capão da Canoa · RS",
    description:
      "Apartamento de alto padrão com vista para o mar, living integrado, cozinha gourmet e suíte master com varanda panorâmica.",
    url: "https://almeidaempreendimentos.com.br",
    images: [
      { src: sala, alt: "Living do apartamento Marine 301" },
      { src: quarto, alt: "Suíte master do apartamento Marine 301" },
      { src: cozinha, alt: "Cozinha gourmet do apartamento Marine 301" },
    ],
  },
];

export function Apartments() {
  const [activeId, setActiveId] = useState(apartments[0].id);
  const [slide, setSlide] = useState(0);
  const active = apartments.find((a) => a.id === activeId)!;

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % active.images.length);
    }, 4500);
    return () => clearInterval(t);
  }, [active.images.length, activeId]);

  useEffect(() => {
    setSlide(0);
  }, [activeId]);

  return (
    <section
      id="apartamentos"
      className="relative py-28 lg:py-36 bg-sand/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
                Disponíveis
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-balance">
              Apartamentos para<br />
              <span className="italic text-primary">comprar ou alugar</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unidades selecionadas da Almeida Empreendimentos, prontas para
              morar ou investir. Navegue pelas fotos de cada apartamento.
            </p>
          </div>
        </div>

        {apartments.length > 1 && (
          <div className="flex flex-wrap gap-3 mb-10 border-y border-border py-6">
            {apartments.map((a) => {
              const isActive = a.id === activeId;
              return (
                <button
                  key={a.id}
                  onClick={() => setActiveId(a.id)}
                  className={`group relative px-5 py-2.5 text-sm tracking-wide rounded-sm transition-all ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "bg-background text-foreground/80 hover:bg-background/70 border border-border"
                  }`}
                >
                  <span className="font-display tracking-wide">{a.name}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-sm bg-black">
            {active.images.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1600}
                height={1100}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  i === slide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="text-white">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/70">
                  {active.tag}
                </div>
                <div className="font-display text-2xl mt-1">{active.name}</div>
              </div>
              <div className="flex gap-2">
                {active.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Imagem ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? "w-8 bg-accent" : "w-4 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              {active.location}
            </div>
            <h3 className="font-display text-3xl mb-5">{active.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {active.description}
            </p>
            <a
              href={active.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Compre ou alugue aqui
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
