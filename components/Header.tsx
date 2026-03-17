"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Rentals", href: "/rentals" },
  { label: "Staging", href: "/staging" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about-us" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const normalizePath = (path: string) => {
    if (!path) return "/";
    const trimmed = path.replace(/\/+$/, "");
    return trimmed === "" ? "/" : trimmed;
  };
  const currentPath = normalizePath(pathname ?? "/");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          <Image
            src="/assets/logo.png"
            alt="Taylor AV"
            className="brand-logo"
            width={192}
            height={64}
            priority
          />
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>
        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const linkPath = normalizePath(link.href);
            const isActive = currentPath === linkPath;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="nav-cta button button-primary"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
