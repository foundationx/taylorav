'use client';

import Link from 'next/link';
import { trackEvent } from '../lib/analytics';

type SectionCTAProps = {
  heading: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trackingKey?: string;
};

export function SectionCTA({
  heading,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  trackingKey
}: SectionCTAProps) {
  const handleTrack = (label: string) => {
    if (!trackingKey) return;
    trackEvent('cta_click', { key: trackingKey, label });
  };
  const isInternalHref = (href: string) => href.startsWith('/');

  return (
    <div className="section-cta">
      <h4>{heading}</h4>
      <p className="content-narrow">{body}</p>
      <div className="cta-actions">
        {isInternalHref(primaryHref) ? (
          <Link className="button button-primary" href={primaryHref} onClick={() => handleTrack(primaryLabel)}>
            {primaryLabel}
          </Link>
        ) : (
          <a className="button button-primary" href={primaryHref} onClick={() => handleTrack(primaryLabel)}>
            {primaryLabel}
          </a>
        )}
        {secondaryHref && secondaryLabel ? (
          isInternalHref(secondaryHref) ? (
            <Link className="button button-ghost" href={secondaryHref} onClick={() => handleTrack(secondaryLabel)}>
              {secondaryLabel}
            </Link>
          ) : (
            <a className="button button-ghost" href={secondaryHref} onClick={() => handleTrack(secondaryLabel)}>
              {secondaryLabel}
            </a>
          )
        ) : null}
      </div>
    </div>
  );
}
