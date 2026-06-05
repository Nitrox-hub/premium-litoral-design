import { useEffect, useState } from "react";

const img1 = { url: "/La_vista/foto_1.png" };
const img2 = { url: "/La_vista/foto_2.png" };
const img3 = { url: "/La_vista/foto_3.png" };
const img4 = { url: "/La_vista/foto_4.png" };

type Building = {
  id: string;
  name: string;
  subname: string;
  tag: string;
  location: string;
  description: string;
  images: { src: string; alt: string }[];
};

const buildings: Building[] = [
  {
    id: "la-vista",
    name: "La Vista",
    subname: "Xancri-lá",
    tag: "Residencial · Alto Padrão",
    location: "Xangri-lá · RS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      { src: img1.url, alt: "Fachada frontal do Edifício La Vista ao entardecer" },
      { src: img2.url, alt: "Vista lateral do Edifício La Vista" },
      { src: img3.url, alt: "Entrada principal do Edifício La Vista" },
      { src: img4.url, alt: "Perspectiva noturna do Edifício La Vista" },
    ],
  },
];

export function Buildings() {
  const [activeId, setActiveId] = useState(buildings[0].id);
  const [slide, setSlide] = useState(0);
  const active = buildings.find((b) => b.id === activeId)!;

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
              <span className="italic text-accent">Almeida Jr.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-white/70 text-lg leading-relaxed">
              Cada empreendimento é assinado pela mesma exigência construtiva,
              arquitetura contemporânea e visão patrimonial duradoura.
            </p>
          </div>
        </div>

        {buildings.length > 1 && (
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
                <div className="font-display text-2xl mt-1">
                  {active.name}{" "}
                  <span className="text-white/70 text-lg font-light italic">
                    · {active.subname}
                  </span>
                </div>
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
            <h3 className="font-display text-3xl mb-1">{active.name}</h3>
            <div className="text-sm tracking-[0.2em] uppercase text-white/60 mb-5">
              {active.subname}
            </div>
            <p className="text-white/75 leading-relaxed mb-8">
              {active.description}
            </p>
            <a
              href="https://wa.me/5551998208735?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20La%20Vista."
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
