import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo-almeida-jr.jpg.asset.json";
const logo = logoAsset.url;

const links = [
  { href: "#empreendimentos", label: "Empreendimentos" },
  { href: "#servicos", label: "Atuação" },
  { href: "#historia", label: "Nossa História" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Almeida Jr. Construtora e Incorporadora"
            className={`h-12 w-auto object-contain transition-all ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            style={scrolled ? { filter: "invert(1)" } : undefined}
            width={140}
            height={48}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5551998208735"
            target="_blank"
            rel="noreferrer"
            className={`text-sm border px-4 py-2 rounded-sm transition-all ${
              scrolled
                ? "border-foreground/20 text-foreground hover:border-accent hover:text-accent"
                : "border-white/40 text-white hover:bg-white hover:text-foreground"
            }`}
          >
            Falar com a Almeida
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          <span className="block w-5 h-px bg-current relative before:absolute before:left-0 before:-top-2 before:w-5 before:h-px before:bg-current after:absolute after:left-0 after:top-2 after:w-5 after:h-px after:bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t hairline">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551998208735"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-sm border border-foreground/20 px-4 py-2 rounded-sm text-center"
            >
              Falar com a Almeida
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
