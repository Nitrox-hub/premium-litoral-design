import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Empreendimento Almeida no litoral norte gaúcho ao pôr do sol"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />

      <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-24 pt-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-white/80">
              Construtora & Incorporadora · Litoral Norte / RS
            </span>
          </div>
          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Arquitetura, solidez<br />
            <span className="italic text-accent">e valorização.</span>
          </h1>
          <p className="mt-8 text-white/85 text-lg max-w-xl leading-relaxed font-light">
            Residências de alto padrão e empreendimentos residenciais
            desenvolvidos com compromisso técnico, design contemporâneo e visão
            patrimonial duradoura.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#empreendimentos"
              className="inline-flex items-center gap-3 bg-white text-foreground px-7 py-4 text-sm tracking-wide rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Conhecer empreendimentos
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-3 border border-white/40 text-white px-7 py-4 text-sm tracking-wide rounded-sm hover:bg-white/10 transition-colors"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 lg:right-10 text-white/60 text-[10px] tracking-[0.3em] uppercase">
        Capão da Canoa · RS
      </div>
    </section>
  );
}
