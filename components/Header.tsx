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
  { label: "About", href: "/about-us" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
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
          <span aria-hidden="true">☰</span>
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
        </nav>
      </div>
    </header>
  );
}
