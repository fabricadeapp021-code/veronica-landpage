"use client";

import { openCookiePreferences } from "@/lib/consent";

/** Link do rodapé (componente de servidor) que reabre a escolha de cookies. */
export default function CookiePreferencesLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Preferências de cookies
    </button>
  );
}
