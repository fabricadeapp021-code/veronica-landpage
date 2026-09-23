"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Building2, Loader2, Send, UserRound } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Visitor = {
  name: string;
  company: string;
  contact: string;
};

const apiUrl =
  process.env.NEXT_PUBLIC_OPENCLAW_API_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:3010";

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Oi, eu sou a Veronica. Posso te mostrar como a Venorica AI coloca funcionarios de IA para atender, vender e operar 24/7.",
  },
];

const quickPrompts = [
  "Como funciona a Venorica AI?",
  "Quero uma demo",
  "Integra com WhatsApp e CRM?",
];

export default function VeronicaChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [visitor, setVisitor] = useState<Visitor>({
    name: "",
    company: "",
    contact: "",
  });
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const key = "venorica-veronica-session";
    const existing = window.localStorage.getItem(key);
    const next =
      existing ||
      (window.crypto?.randomUUID?.() ?? `landing-${Date.now().toString(36)}`);
    window.localStorage.setItem(key, next);
    setSessionId(next);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isSending]);

  const visitorPayload = useMemo(
    () => ({
      name: visitor.name.trim() || undefined,
      company: visitor.company.trim() || undefined,
      email: visitor.contact.includes("@") ? visitor.contact.trim() : undefined,
      phone: visitor.contact && !visitor.contact.includes("@") ? visitor.contact.trim() : undefined,
    }),
    [visitor],
  );

  async function sendMessage(text: string) {
    const message = text.trim();
    if (!message || isSending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: message }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch(`${apiUrl}/public/veronica/chat-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          sessionId,
          visitor: visitorPayload,
          history: nextMessages.slice(-8),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("A Veronica nao conseguiu responder agora.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.type === "complete") {
              setMessages((current) => [
                ...current,
                {
                  role: "assistant",
                  content:
                    event.reply ||
                    "Consigo te ajudar com atendimento 24/7, vendas, triagem e handoff humano.",
                },
              ]);
            } else if (event.type === "error") {
              throw new Error(event.error || "Erro ao processar mensagem.");
            }
          } catch (parseErr) {
            if (parseErr instanceof SyntaxError) continue;
            throw parseErr;
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao falar com a Veronica.");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Tive uma instabilidade agora. Deixe seu contato e eu encaminho para o time humano da Venorica.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
      <div className="absolute -top-4 right-6 z-10 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs font-semibold text-green-300 shadow-lg shadow-green-500/10">
        Online 24/7
      </div>

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#10111d] shadow-2xl shadow-brand-600/20">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#15172a] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white">
              V
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#15172a] bg-green-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Veronica</p>
              <p className="text-xs text-green-300">Atendente 24/7 da Venorica AI</p>
            </div>
          </div>
          <Bot className="h-5 w-5 text-brand-300" />
        </div>

        <div className="border-b border-white/10 bg-[#0c0d18] p-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <UserRound className="h-3.5 w-3.5 text-brand-300" />
              <input
                value={visitor.name}
                onChange={(event) => setVisitor((current) => ({ ...current, name: event.target.value }))}
                placeholder="Seu nome"
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
              />
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <Building2 className="h-3.5 w-3.5 text-brand-300" />
              <input
                value={visitor.company}
                onChange={(event) =>
                  setVisitor((current) => ({ ...current, company: event.target.value }))
                }
                placeholder="Empresa"
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
              />
            </label>
          </div>
          <input
            value={visitor.contact}
            onChange={(event) => setVisitor((current) => ({ ...current, contact: event.target.value }))}
            placeholder="Email ou WhatsApp para demo"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white outline-none placeholder:text-gray-600 focus:border-brand-400/50"
          />
        </div>

        <div className="h-[390px] space-y-3 overflow-y-auto bg-[#090a14] px-3 py-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[86%] whitespace-pre-line rounded-2xl px-3 py-2 text-[12px] leading-relaxed shadow-sm ${
                  message.role === "user"
                    ? "rounded-tr-sm bg-brand-600 text-white"
                    : "rounded-tl-sm border border-white/10 bg-[#1a1d30] text-gray-200"
                }`}
              >
                {message.role === "assistant" && (
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-300">
                    Veronica
                  </p>
                )}
                {message.role === "assistant" ? (
                  <MarkdownRenderer content={message.content} />
                ) : (
                  <span className="whitespace-pre-line">{message.content}</span>
                )}
              </div>
            </div>
          ))}

          {isSending && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-white/10 bg-[#1a1d30] px-3 py-2 text-xs text-gray-300">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-brand-300" />
                digitando
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-white/10 bg-[#10111d] p-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => void sendMessage(prompt)}
                disabled={isSending}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-gray-300 transition hover:border-brand-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Pergunte para a Veronica"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#1a1d30] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-brand-400/60"
            />
            <button
              type="submit"
              disabled={isSending || !input.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Enviar mensagem"
            >
              {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
          {error && <p className="mt-2 text-xs text-red-300">{error}</p>}
        </div>
      </div>
    </div>
  );
}
