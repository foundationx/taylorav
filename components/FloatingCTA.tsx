'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/contact') return null;

  return (
    <Link
      href="/contact"
      className={`floating-cta${visible ? '' : ' hidden'}`}
      aria-label="Get a quote from Taylor AV"
    >
      <span aria-hidden="true">✦</span>
      Get a quote
    </Link>
  );
}
