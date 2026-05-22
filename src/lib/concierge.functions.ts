import { createServerFn } from "@tanstack/react-start";

type Msg = { role: "user" | "assistant" | "system"; content: string };

export const conciergeChat = createServerFn({ method: "POST" })
  .inputValidator((data: { messages: Msg[] }) => {
    if (!data || !Array.isArray(data.messages)) {
      throw new Error("messages array required");
    }
    const safe = data.messages.slice(-20).map((m) => ({
      role: m.role === "assistant" || m.role === "system" ? m.role : "user",
      content: String(m.content ?? "").slice(0, 2000),
    })) as Msg[];
    return { messages: safe };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { reply: "Concierge indisponível no momento. Fale com a gente no WhatsApp: (51) 99820-8735." };
    }

    const systemPrompt = `Você é o Concierge Almeida, assistente imobiliário da Almeida Empreendimentos — construtora e incorporadora de alto padrão atuando no litoral norte gaúcho (Capão da Canoa e região).

Tom: elegante, sóbrio, cordial, breve. Trate o cliente com refinamento, sem exagero. Responda em português do Brasil.

O que a empresa oferece:
1. Residências de Alto Padrão — arquitetura contemporânea e valorização patrimonial.
2. Empreendimentos Residenciais — edifícios no litoral norte gaúcho.
3. Construção e Incorporação — do planejamento à entrega.
4. Parcerias Estratégicas — desenvolvimento com investidores parceiros.

Contato direto: WhatsApp (51) 99820-8735 — almeidagroupempreendimentos@gmail.com — R. Roberto Carlos Wagner, 30, Capão da Canoa/RS.

Diretrizes:
- Faça poucas perguntas por vez (1 a 2).
- Descubra: interesse (apartamento, residência, investimento, parceria), região, faixa de investimento, prazo.
- Ao final de uma conversa qualificada, ofereça transferir o atendimento para um especialista via WhatsApp.
- Nunca invente preços, plantas ou prazos específicos. Convide a falar com a equipe.
- Limite respostas a 3-4 frases curtas.`;

    try {
      const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: systemPrompt }, ...data.messages],
        }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          return { reply: "Estamos com muitas conversas no momento. Tente novamente em instantes — ou fale no WhatsApp (51) 99820-8735." };
        }
        if (resp.status === 402) {
          return { reply: "Para um atendimento imediato, fale conosco no WhatsApp (51) 99820-8735." };
        }
        return { reply: "Não consegui responder agora. Prefere falar pelo WhatsApp? (51) 99820-8735." };
      }

      const json = await resp.json();
      const reply =
        json?.choices?.[0]?.message?.content ??
        "Posso ajudar com mais alguma informação sobre nossos empreendimentos?";
      return { reply: String(reply) };
    } catch (e) {
      console.error("concierge error", e);
      return { reply: "Tive um problema técnico. Fale conosco no WhatsApp (51) 99820-8735." };
    }
  });
