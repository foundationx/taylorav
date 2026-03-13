import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Rentals', href: '/rentals' },
    { label: 'Staging', href: '/staging' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/taylorav' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/taylor-av' },
    { label: 'YouTube', href: 'https://www.youtube.com/@taylorav' }
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-columns">
        <div className="footer-column">
          <strong>Taylor AV</strong>
          <address>
            12963 Redwood Rd
            <br />
            Riverton, UT 84065
          </address>
          <a href="tel:+18015201699" className="footer-link">
            +1 (801) 520-1699
          </a>
          <a href="mailto:hello@taylorav.com" className="footer-link">
            hello@taylorav.com
          </a>
        </div>
        <div className="footer-column">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
          <p className="footer-note">
            Based in Utah and available to travel for major events anywhere.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Taylor AV. All rights reserved.</span>
        <Link href="/contact" className="footer-cta">
          Request a quote
        </Link>
      </div>
    </footer>
  );
}
