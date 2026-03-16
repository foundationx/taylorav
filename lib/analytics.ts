declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  const payload = { event, ...data, timestamp: Date.now() };
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, data);
  }
}
