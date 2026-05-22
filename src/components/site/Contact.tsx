const address = "R. Roberto Carlos Wagner, 30 - Capão da Canoa, RS, 95555-000";
const mapsEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(address) +
  "&output=embed";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);

export function Contact() {
  return (
    <section id="contato" className="relative py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
                Contato
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-balance mb-8">
              Vamos conversar sobre seu próximo <span className="italic text-primary">patrimônio</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Nossa equipe está pronta para apresentar os empreendimentos
              disponíveis, discutir um projeto sob medida ou avaliar parcerias.
            </p>

            <ul className="space-y-6">
              <li>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/5551998208735"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-2xl text-foreground hover:text-accent transition-colors"
                >
                  (51) 99820-8735
                </a>
              </li>
              <li>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  E-mail
                </div>
                <a
                  href="mailto:almeidagroupempreendimentos@gmail.com"
                  className="text-lg text-foreground hover:text-accent transition-colors break-all"
                >
                  almeidagroupempreendimentos@gmail.com
                </a>
              </li>
              <li>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  Endereço
                </div>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-foreground hover:text-accent transition-colors"
                >
                  R. Roberto Carlos Wagner, 30<br />
                  Capão da Canoa · RS · 95555-000
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[5/6] w-full overflow-hidden rounded-sm border hairline">
              <iframe
                title="Localização Almeida Empreendimentos"
                src={mapsEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
