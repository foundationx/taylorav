import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Las Vegas AV Support",
  description:
    "Taylor AV deploys Utah-based engineers and touring-grade gear to Las Vegas for corporate events, hotel ballroom productions, and multi-city touring residencies.",
  alternates: { canonical: '/las-vegas' },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.1699;-115.1398',
    'ICBM': '36.1699, -115.1398',
  },
};

const highlights = [
  {
    title: "Touring corridors",
    detail:
      "We truck LED, audio, and staging from Utah to Las Vegas, Phoenix, and Southern California to keep crew and equipment continuity between shows.",
  },
  {
    title: "Hotel ballrooms",
    detail:
      "On-strip events receive branded scenic, hybrid streaming, and union-friendly crews that integrate with hotel AV teams.",
  },
  {
    title: "Cost transparency",
    detail:
      "Because we own equipment, you pay for travel and crew days—no surprise sub-rental markups.",
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
  areaServed: { '@type': 'City', name: 'Las Vegas', sameAs: 'https://www.wikidata.org/wiki/Q49111' },
};

export default function LasVegasPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Las Vegas' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Las Vegas, Nevada"
        title="Las Vegas AV production."
        description="Taylor AV travels with the same engineers who run your Utah shows, giving you reliable crews for Vegas dates and national tours."
        image="/assets/hero-stage.jpg"
        imageAlt="Las Vegas event"
        taglineWords={["Las Vegas", "Touring", "Crews"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Same crew, same gear — extended to Las Vegas." />
            <p className="content-narrow">
              We pre-stage freight, schedule driver teams, and manage union
              paperwork so Vegas stops feel like an extension of your Utah
              command center.
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
              heading="Sync Vegas dates"
              body="Send your routing or RFP and we'll show how Taylor AV covers both Wasatch and Vegas legs with one crew."
              primaryHref="/contact"
              primaryLabel="Plan Vegas show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Call touring desk"
              trackingKey="las-vegas"
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
