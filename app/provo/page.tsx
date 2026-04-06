import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provo AV Production",
  description:
    "Taylor AV leads BYU, UVU, and Utah Valley corporate events with disciplined staging, hybrid streaming, and rental packages that meet campus compliance requirements.",
  alternates: { canonical: '/provo' },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Provo',
    'geo.position': '40.2338;-111.6585',
    'ICBM': '40.2338, -111.6585',
  },
};

const highlights = [
  {
    title: "Campus ceremonies",
    detail:
      "Commencements, convocations, and athletic announcements receive broadcast audio, IMAG support, and ADA staging.",
  },
  {
    title: "Tech corridors",
    detail:
      "Utah Valley corporate theaters and headquarters get LED, scenic drape, and streaming that mirrors Bay Area launches.",
  },
  {
    title: "Education compliance",
    detail:
      "We handle insurance, background checks, and documentation required for university and K-12 installations.",
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://taylorav.com#organization',
  name: 'Taylor AV',
  url: 'https://taylorav.com',
  telephone: '+1 (801) 520-1699',
  image: 'https://taylorav.com/assets/hero-concert.jpg',
  logo: 'https://taylorav.com/assets/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12963 Redwood Rd',
    addressLocality: 'Riverton',
    addressRegion: 'UT',
    postalCode: '84065',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Provo', sameAs: 'https://www.wikidata.org/wiki/Q80930' },
};

export default function ProvoPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Provo' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Provo & Utah Valley"
        title="Provo AV production."
        description="Taylor AV keeps Utah Valley launches, commencements, and tech summits running with disciplined crews and redundant equipment."
        image="/assets/services-bg.jpg"
        imageAlt="Provo AV event"
        taglineWords={["Campus", "Tech", "Streaming"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Provo workflows that move quickly." />
            <p className="content-narrow">
              We understand campus approvals and corporate NDAs, so your event
              stays both compliant and on schedule.
            </p>
            <div className="grid">
              {highlights.map((item) => (
                <article key={item.title} className="service-highlight">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <SectionCTA
              heading="Book a Utah Valley walkthrough"
              body="Send us your auditorium specs or HQ briefings and we'll return drawings, rental lists, and show management plans."
              primaryHref="/contact"
              primaryLabel="Plan Provo show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk staging"
              trackingKey="provo"
            />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
