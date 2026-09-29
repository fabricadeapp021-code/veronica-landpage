"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import VeronicaChat from "./VeronicaChat";

export default function VeronicaChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="max-h-[85vh] overflow-y-auto">
          <VeronicaChat />
        </div>
      )}
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-2xl shadow-brand-600/40 transition hover:-translate-y-0.5"
        aria-label={isOpen ? "Fechar chat da Veronica" : "Conversar com a Veronica"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
