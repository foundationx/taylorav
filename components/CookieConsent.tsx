'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'tav_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, []);

  function dismiss(value: 'accepted' | 'dismissed') {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie consent">
      <p>
        We use analytics cookies to understand how visitors use our site and
        improve your experience. View our{' '}
        <a href="/contact">privacy policy</a>.
      </p>
      <div className="cookie-actions">
        <button className="cookie-accept" onClick={() => dismiss('accepted')}>
          Accept
        </button>
        <button className="cookie-dismiss" onClick={() => dismiss('dismissed')}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
