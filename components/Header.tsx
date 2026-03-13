'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Staging', href: '/staging' },
  { label: 'About', href: '/about-us' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const pathname = usePathname();
  const normalizePath = (path: string) => {
    if (!path) return '/';
    const trimmed = path.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };
  const currentPath = normalizePath(pathname ?? '/');

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <img src="/assets/logo.png" alt="Taylor AV" className="brand-logo" />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const linkPath = normalizePath(link.href);
            const isActive = currentPath === linkPath;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
