import founder from "@/assets/founder.jpg";

export function About() {
  return (
    <section id="historia" className="relative py-28 lg:py-36 bg-sand/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={founder}
                alt="Aloisio Martins de Almeida Junior, fundador da Almeida Empreendimentos"
                loading="lazy"
                className="h-full w-full object-cover"
                width={1280}
                height={1707}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-background p-6 lg:p-8 max-w-[260px] shadow-xl">
              <div className="font-display text-3xl text-primary">+20</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                anos no litoral norte gaúcho
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
                Nossa História
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-balance mb-8">
              Construir patrimônios <span className="italic text-primary">duradouros</span>.
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                A <strong className="font-medium text-foreground">Almeida Empreendimentos</strong> nasceu da experiência prática na
                construção civil e evoluiu ao longo dos anos acompanhando as
                transformações do litoral norte gaúcho.
              </p>
              <p>
                Com atuação inicialmente voltada à construção residencial, a
                empresa consolidou sua trajetória através da execução de
                projetos com compromisso técnico, atenção aos detalhes e
                qualidade construtiva.
              </p>
              <p>
                O crescimento da marca aconteceu de forma natural, impulsionado
                pela busca constante por evolução, aperfeiçoamento e
                valorização imobiliária — levando a Almeida a expandir sua
                atuação para residências de alto padrão, projetos
                contemporâneos e, agora, para o desenvolvimento de
                empreendimentos residenciais.
              </p>
              <p>
                Hoje, a empresa vive um novo momento, unindo construção,
                incorporação e visão estratégica para desenvolver projetos
                alinhados ao crescimento e ao futuro do litoral gaúcho.
              </p>
              <p className="text-foreground font-medium italic font-display text-xl pt-3">
                "Mais do que construir imóveis, acreditamos na criação de
                patrimônios duradouros — com arquitetura, solidez e
                valorização."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
