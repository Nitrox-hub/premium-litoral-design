const services = [
  {
    num: "01",
    title: "Residências de Alto Padrão",
    desc: "Projetos residenciais desenvolvidos com foco em arquitetura contemporânea, qualidade construtiva e valorização patrimonial.",
  },
  {
    num: "02",
    title: "Empreendimentos Residenciais",
    desc: "Desenvolvimento de empreendimentos voltados ao litoral norte gaúcho, unindo localização estratégica, arquitetura e potencial de valorização.",
  },
  {
    num: "03",
    title: "Construção e Incorporação",
    desc: "Atuação integrada em construção e incorporação imobiliária, desde o planejamento até a entrega final.",
  },
  {
    num: "04",
    title: "Parcerias Estratégicas",
    desc: "Desenvolvimento imobiliário em conjunto com investidores e empresas parceiras.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
                Nossa atuação
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-balance">
              Quatro frentes,<br />
              <span className="italic text-primary">uma única exigência</span>: excelência.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Da residência sob medida ao edifício de frente para o mar, cada
              projeto Almeida é entregue com rigor técnico, atenção aos
              detalhes e visão de longo prazo.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <article
              key={s.num}
              className="group bg-background p-10 lg:p-12 transition-colors hover:bg-sand/50"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-accent text-xl">{s.num}</span>
                <span className="h-px flex-1 ml-6 bg-border group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
