/**
 * Consentimento de cookies (spec legal-consent-lgpd, cookie-consent).
 *
 * A escolha mora no cookie `vr_consent` do domínio .veronica-ai.com.br, para valer
 * na landing e no painel. Fora desse domínio (localhost, preview) fica no host atual.
 * O painel (openclaw-frontend) tem uma cópia deste arquivo (src/lib/consent/consent.js): manter as duas iguais.
 */

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentValue {
  v: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

export const CONSENT_COOKIE = "vr_consent";
/** Mudar quando a lista de categorias mudar: a faixa volta para todo mundo. */
export const CONSENT_SCHEMA_VERSION = 1;
export const CONSENT_CHANGED_EVENT = "vr:consent-changed";
export const OPEN_PREFERENCES_EVENT = "vr:open-cookie-preferences";

const MAX_AGE = 60 * 60 * 24 * 365; // 12 meses
const SHARED_DOMAIN = "veronica-ai.com.br";

function cookieDomainAttr(): string {
  const host = window.location.hostname;
  return host === SHARED_DOMAIN || host.endsWith(`.${SHARED_DOMAIN}`) ? `; Domain=.${SHARED_DOMAIN}` : "";
}

/** Escolha atual, ou null se a pessoa ainda não escolheu (ou se a versão das categorias mudou). */
export function readConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  try {
    const raw = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
    if (!raw) return null;
    const value = JSON.parse(atob(decodeURIComponent(raw.slice(CONSENT_COOKIE.length + 1))));
    if (value?.v !== CONSENT_SCHEMA_VERSION) return null;
    return value as ConsentValue;
  } catch {
    return null;
  }
}

export function saveConsent({ analytics, marketing }: { analytics: boolean; marketing: boolean }): ConsentValue {
  const value: ConsentValue = { v: CONSENT_SCHEMA_VERSION, necessary: true, analytics: !!analytics, marketing: !!marketing, ts: Date.now() };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(btoa(JSON.stringify(value)))}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${cookieDomainAttr()}${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
  return value;
}

/** 'necessary' é sempre true; 'analytics' e 'marketing' só com consentimento. */
export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  return !!readConsent()?.[category];
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

/**
 * Único jeito de carregar rastreador (GA4, Pixel…): só injeta o script depois do consentimento
 * da categoria, inclusive se a pessoa aceitar mais tarde.
 */
export function loadScriptIfConsented(category: ConsentCategory, src: string, attrs: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  const inject = () => {
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    document.head.appendChild(s);
  };
  if (hasConsent(category)) return inject();
  const onChange = () => {
    if (hasConsent(category)) {
      window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
      inject();
    }
  };
  window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
}
