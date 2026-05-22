import { useEffect, useState } from "react";
import marine1 from "@/assets/edificio-marine-1.jpg";
import marine2 from "@/assets/edificio-marine-2.jpg";
import horizonte1 from "@/assets/edificio-horizonte-1.jpg";
import horizonte2 from "@/assets/edificio-horizonte-2.jpg";
import atlantico1 from "@/assets/edificio-atlantico-1.jpg";
import atlantico2 from "@/assets/edificio-atlantico-2.jpg";
import costa1 from "@/assets/edificio-costa-1.jpg";
import costa2 from "@/assets/edificio-costa-2.jpg";

type Building = {
  id: string;
  name: string;
  tag: string;
  location: string;
  description: string;
  images: { src: string; alt: string }[];
};

const buildings: Building[] = [
  {
    id: "marine",
    name: "Edifício Marine",
    tag: "Residencial · 2026",
    location: "Capão da Canoa · RS",
    description:
      "Linhas contemporâneas, fachada em madeira clara e concreto, varandas amplas com vidros sem caixilhos.",
    images: [
      { src: marine1, alt: "Fachada do Edifício Marine" },
      { src: marine2, alt: "Sala panorâmica do Edifício Marine" },
    ],
  },
  {
    id: "horizonte",
    name: "Edifício Horizonte",
    tag: "Empreendimento · Em desenvolvimento",
    location: "Litoral Norte · RS",
    description:
      "Torre de frente para o mar com jardins verticais, infraestrutura completa de lazer e vista privilegiada.",
    images: [
      { src: horizonte1, alt: "Fachada do Edifício Horizonte ao entardecer" },
      { src: horizonte2, alt: "Piscina infinita do Edifício Horizonte" },
    ],
  },
  {
    id: "atlantico",
    name: "Residencial Atlântico",
    tag: "Alto Padrão · Entregue",
    location: "Capão da Canoa · RS",
    description:
      "Arquitetura sóbria em concreto aparente, integração com paisagismo nativo e lobby de pé-direito duplo.",
    images: [
      { src: atlantico1, alt: "Fachada do Residencial Atlântico" },
      { src: atlantico2, alt: "Lobby do Residencial Atlântico" },
    ],
  },
  {
    id: "costa",
    name: "Casa Costa",
    tag: "Residência exclusiva",
    location: "Xangri-lá · RS",
    description:
      "Residência beira-mar, dois pavimentos, materiais nobres e suíte master com vista para o oceano.",
    images: [
      { src: costa1, alt: "Fachada da Casa Costa" },
      { src: costa2, alt: "Suíte master da Casa Costa" },
    ],
  },
];

export function Buildings() {
  const [activeId, setActiveId] = useState(buildings[0].id);
  const [slide, setSlide] = useState(0);
  const active = buildings.find((b) => b.id === activeId)!;

  // auto-rotate
  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % active.images.length);
    }, 4500);
    return () => clearInterval(t);
  }, [active.images.length, activeId]);

  // reset slide when building changes
  useEffect(() => {
    setSlide(0);
  }, [activeId]);

  return (
    <section
      id="empreendimentos"
      className="relative py-28 lg:py-36 bg-graphite text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-white/60">
                Portfólio
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-balance">
              Empreendimentos<br />
              <span className="italic text-accent">Almeida</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-white/70 text-lg leading-relaxed">
              Selecione um projeto para percorrer suas imagens. Cada
              empreendimento é assinado pela mesma exigência construtiva.
            </p>
          </div>
        </div>

        {/* Selector */}
        <div className="flex flex-wrap gap-3 mb-10 border-y border-white/10 py-6">
          {buildings.map((b) => {
            const isActive = b.id === activeId;
            return (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className={`group relative px-5 py-2.5 text-sm tracking-wide rounded-sm transition-all ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="font-display tracking-wide">{b.name}</span>
              </button>
            );
          })}
        </div>

        {/* Album */}
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
            <p className="text-white/75 leading-relaxed mb-8">
              {active.description}
            </p>
            <a
              href="https://wa.me/5551998208735?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20empreendimento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-sm rounded-sm hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
            >
              Solicitar informações
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
