import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ogden AV Production",
  description:
    "Taylor AV supports Ogden arenas, Weber County festivals, and civic gatherings with touring-grade audio, LED staging, and rapid-response crews based minutes away.",
  alternates: { canonical: '/ogden' },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Ogden',
    'geo.position': '41.2230;-111.9738',
    'ICBM': '41.2230, -111.9738',
  },
};

const highlights = [
  {
    title: "Arena + festival support",
    detail:
      "Line arrays, LED walls, and mobile stages tuned for Lindquist Field, Ogden Amphitheater, and Weber State venues.",
  },
  {
    title: "Community events",
    detail:
      "Parades, civic announcements, and university ceremonies get ADA-compliant staging and fully managed comms.",
  },
  {
    title: "Rapid response",
    detail:
      "Because we stage inventory in Riverton, Ogden events receive last-minute additions without shipping delays.",
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
  areaServed: { '@type': 'City', name: 'Ogden', sameAs: 'https://www.wikidata.org/wiki/Q185490' },
};

export default function OgdenPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Ogden' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Ogden, Weber County"
        title="Ogden AV production."
        description="From amphitheaters to city plazas, Taylor AV scales the same touring-grade rigs used downtown for Ogden audiences."
        image="/assets/community-event.jpg"
        imageAlt="Ogden community event"
        taglineWords={["Ogden", "Festivals", "Civic"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Weber County ready." />
            <p className="content-narrow">
              We know the local permitting offices and venue contacts, which
              keeps Ogden events on time and under budget.
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
              heading="Schedule an Ogden walkthrough"
              body="Share your festival or civic outline and we'll deliver rigging drawings, pricing, and crew assignments."
              primaryHref="/contact"
              primaryLabel="Plan Ogden show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Call producers"
              trackingKey="ogden"
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
