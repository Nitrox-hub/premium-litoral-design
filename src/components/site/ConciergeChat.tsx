import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { conciergeChat } from "@/lib/concierge.functions";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Bem-vindo à Almeida Empreendimentos. Sou o seu concierge imobiliário. Está em busca de uma residência de alto padrão, de um apartamento no litoral norte, ou de uma oportunidade de investimento?",
};

export function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendFn = useServerFn(conciergeChat);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await sendFn({ data: { messages: next } });
      setMessages((m) => [...m, { role: "assistant", content: res.reply }]);
    } catch (e) {
      console.error(e);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Tive um problema. Prefere falar diretamente no WhatsApp? (51) 99820-8735.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handoffText = encodeURIComponent(
    "Olá! Conversei com o concierge no site e gostaria de falar com a equipe."
  );

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Abrir concierge"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-deep text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl border border-white/10 hover:bg-foreground transition-all"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display text-base">
          A
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-deep" />
        </span>
        <span className="hidden sm:flex flex-col leading-tight text-left">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/60">
            Concierge
          </span>
          <span className="text-sm font-medium">Posso ajudar?</span>
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] max-h-[70vh] flex flex-col bg-background rounded-sm shadow-2xl border hairline overflow-hidden">
          <div className="bg-deep text-white px-5 py-4 flex items-start justify-between">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
                Concierge imobiliário
              </div>
              <div className="font-display text-lg leading-tight">
                Almeida Empreendimentos
              </div>
            </div>
            <button
              aria-label="Fechar"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-sand/30"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-sm ${
                    m.role === "user"
                      ? "bg-deep text-white"
                      : "bg-background border hairline text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-background border hairline px-3.5 py-2.5 rounded-sm text-sm text-muted-foreground">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:120ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t hairline bg-background px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Escreva sua mensagem…"
                className="flex-1 bg-muted/60 text-sm rounded-sm px-3 py-2.5 outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="bg-deep text-white text-sm px-4 py-2.5 rounded-sm hover:bg-foreground transition-colors disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
            <a
              href={`https://wa.me/5551998208735?text=${handoffText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              <span>Continuar no WhatsApp</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
