import logoAsset from "@/assets/logo-almeida-jr.jpg.asset.json";
const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="" className="h-12 w-12 rounded-sm object-cover" />
              <div>
                <div className="font-display text-xl tracking-wide">ALMEIDA</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
                  Empreendimentos
                </div>
              </div>
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Arquitetura, solidez e valorização no litoral norte gaúcho.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
              Navegação
            </div>
            <ul className="space-y-2 text-white/80">
              <li><a href="#empreendimentos" className="hover:text-accent">Empreendimentos</a></li>
              <li><a href="#servicos" className="hover:text-accent">Atuação</a></li>
              <li><a href="#historia" className="hover:text-accent">Nossa História</a></li>
              <li><a href="#contato" className="hover:text-accent">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4">
              Contato
            </div>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://wa.me/5551998208735" target="_blank" rel="noreferrer" className="hover:text-accent">(51) 99820-8735</a></li>
              <li><a href="mailto:almeidagroupempreendimentos@gmail.com" className="hover:text-accent break-all">almeidagroupempreendimentos@gmail.com</a></li>
              <li className="text-white/60">R. Roberto Carlos Wagner, 30 — Capão da Canoa/RS</li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12" />
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Almeida Empreendimentos. Todos os direitos reservados.</span>
          <span>Construção · Incorporação · Alto Padrão</span>
        </div>
      </div>
    </footer>
  );
}
