import Link from 'next/link';

export default function Footer() {
  const serviceLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Rentals', href: '/rentals' },
    { label: 'Staging', href: '/staging' },
    { label: 'Portfolio', href: '/portfolio' },
  ];

  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  const locationLinks = [
    { label: 'Salt Lake City', href: '/salt-lake-city' },
    { label: 'Park City', href: '/park-city' },
    { label: 'Ogden', href: '/ogden' },
    { label: 'Provo', href: '/provo' },
    { label: 'Utah County', href: '/utah-county' },
    { label: 'Las Vegas', href: '/las-vegas' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/taylorav' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/taylor-av' },
    { label: 'YouTube', href: 'https://www.youtube.com/@taylorav' },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-columns">

        {/* Col 1 — Brand */}
        <div className="footer-column">
          <strong>Taylor AV</strong>
          <address>
            12963 Redwood Rd
            <br />
            Riverton, UT 84065
          </address>
          <a href="tel:+18015201699" className="footer-link">+1 (801) 520-1699</a>
          <Link href="/contact" className="footer-link">Send us a message</Link>
          <div className="footer-social-row">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social-pill"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Service Areas */}
        <div className="footer-column">
          <h4>Service Areas</h4>
          <p className="footer-areas">
            {locationLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && <span className="footer-bullet" aria-hidden="true"> · </span>}
                <Link href={link.href} className="footer-area-link">{link.label}</Link>
              </span>
            ))}
          </p>
          <p className="footer-note">We travel statewide and beyond — not limited to these areas.</p>
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
