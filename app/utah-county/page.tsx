import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import { SectionCTA } from '../../components/SectionCTA';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utah County AV Production',
  description: 'Taylor AV supports Utah County fairs, civic gatherings, and mountain retreats with mobile staging, rental inventory, and Sole Source contract procurement.',
  alternates: { canonical: '/utah-county' },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Utah County',
    'geo.position': '40.1500;-111.6600',
    'ICBM': '40.1500, -111.6600',
  },
};

const highlights = [
  {
    title: 'County fairs + festivals',
    detail: 'Mobile stages, truss arches, and comms systems that withstand weather swings and tight changeovers.'
  },
  {
    title: 'Retreats + off-sites',
    detail: 'Mountain lodges and ranch venues receive quiet generators, scenic lighting, and wireless coverage for executive teams.'
  },
  {
    title: 'Public agencies',
    detail: "Taylor AV's Sole Source contract simplifies procurement for county departments and public safety briefings."
  }
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
  areaServed: { '@type': 'AdministrativeArea', name: 'Utah County', sameAs: 'https://www.wikidata.org/wiki/Q110141' },
};

export default function UtahCountyPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Utah County' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Utah County"
        title="Utah County AV production."
        description="We merge staging, rentals, and crews so Utah County events stay polished without juggling multiple vendors."
        image="/assets/community-events.jpg"
        imageAlt="Utah County event"
        taglineWords={['County', 'Retreats', 'Festivals']}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="County partnerships that run smoothly." />
            <p className="content-narrow">
              Our Riverton warehouse keeps rentals nearby, reducing freight costs while giving you quick access to backup gear.
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
              heading="Share your county calendar"
              body="We'll map stages, crews, and logistics for the entire season so every event stays on cue."
              primaryHref="/contact"
              primaryLabel="Plan county season"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk logistics"
              trackingKey="utah-county"
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
