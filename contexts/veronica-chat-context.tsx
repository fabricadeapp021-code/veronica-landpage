"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type Visitor = {
  name: string;
  company: string;
  contact: string;
};

const apiUrl =
  process.env.NEXT_PUBLIC_OPENCLAW_API_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:3010";

// Canal Web genérico (openspec/changes/agent-web-channel) — o agente é identificado aqui,
// não mais por uma variável de ambiente fixa na API (PUBLIC_VERONICA_AGENT_ID). Trocar de
// agente não exige mais mexer em infraestrutura, só nesse valor.
const veronicaAgentId =
  process.env.NEXT_PUBLIC_VERONICA_AGENT_ID || "6abbf7556f1598f4b1297c65";

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Oi, eu sou a Veronica. Posso te mostrar como a Venorica AI coloca funcionarios de IA para atender, vender e operar 24/7.",
  },
];

type VeronicaChatContextValue = {
  messages: ChatMessage[];
  input: string;
  setInput: (value: string) => void;
  isSending: boolean;
  error: string;
  visitor: Visitor;
  setVisitor: Dispatch<SetStateAction<Visitor>>;
  sendMessage: (text: string) => Promise<void>;
};

const VeronicaChatContext = createContext<VeronicaChatContextValue | null>(null);

export function VeronicaChatProvider({ children }: { children: ReactNode }) {
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

  useEffect(() => {
    const key = "venorica-veronica-session";
    const existing = window.localStorage.getItem(key);
    const next =
      existing ||
      (window.crypto?.randomUUID?.() ?? `landing-${Date.now().toString(36)}`);
    window.localStorage.setItem(key, next);
    setSessionId(next);
  }, []);

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
      const response = await fetch(`${apiUrl}/public/agents/${veronicaAgentId}/chat-stream`, {
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
      // Verdadeiro assim que o primeiro pedaço de texto chega — depois disso, a
      // resposta já existe como mensagem no array e vai sendo completada nela mesma,
      // em vez de só aparecer inteira quando "complete" chegar no final.
      let streamStarted = false;

      const appendToken = (delta: string) => {
        setMessages((current) => {
          if (!streamStarted) {
            streamStarted = true;
            return [...current, { role: "assistant", content: delta }];
          }
          const next = [...current];
          const lastIndex = next.length - 1;
          next[lastIndex] = { ...next[lastIndex], content: next[lastIndex].content + delta };
          return next;
        });
      };

      const finalizeReply = (reply: string) => {
        const fallback = "Consigo te ajudar com atendimento 24/7, vendas, triagem e handoff humano.";
        setMessages((current) => {
          if (streamStarted) {
            // Substitui pelo texto final autoritativo (deve bater com o que já foi
            // acumulado token a token) — protege contra um pedaço perdido/fora de ordem.
            const next = [...current];
            const lastIndex = next.length - 1;
            next[lastIndex] = { ...next[lastIndex], content: reply || next[lastIndex].content || fallback };
            return next;
          }
          // Nenhum token chegou (provider sem streaming habilitado, ou resposta vazia) —
          // mesmo comportamento de antes: a mensagem só aparece agora, inteira.
          return [...current, { role: "assistant", content: reply || fallback }];
        });
      };

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
            if (event.type === "token" && typeof event.delta === "string" && event.delta) {
              appendToken(event.delta);
            } else if (event.type === "complete") {
              finalizeReply(event.reply);
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

  const value: VeronicaChatContextValue = {
    messages,
    input,
    setInput,
    isSending,
    error,
    visitor,
    setVisitor,
    sendMessage,
  };

  return <VeronicaChatContext.Provider value={value}>{children}</VeronicaChatContext.Provider>;
}

export function useVeronicaChat() {
  const ctx = useContext(VeronicaChatContext);
  if (!ctx) {
    throw new Error("useVeronicaChat deve ser usado dentro de VeronicaChatProvider");
  }
  return ctx;
}
