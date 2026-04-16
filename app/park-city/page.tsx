import { Hero } from "../../components/Hero";
import { SectionCTA } from "../../components/SectionCTA";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Park City AV Production",
  description:
    "Taylor AV delivers mountain-ready AV production for Park City resorts, Sundance screenings, and luxury hospitality events with snow-proof logistics and touring-grade gear.",
  alternates: { canonical: '/park-city' },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Park City',
    'geo.position': '40.6461;-111.4980',
    'ICBM': '40.6461, -111.4980',
  },
};

const highlights = [
  {
    title: "Resort-ready load-ins",
    detail:
      "We coordinate dock schedules and snow management with Park City properties so gear arrives staged, warmed, and ready for rehearsal.",
  },
  {
    title: "Sundance event ops",
    detail:
      "Pop-up theaters, hybrid interviews, and sponsor lounges get separate power plans, private networks, and show callers to keep screenings on cue.",
  },
  {
    title: "Hospitality + corporate",
    detail:
      "Executive retreats, wellness summits, and brand takeovers receive scenic draping, wireless audio, and scenic lighting that matches the venue aesthetic.",
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
  areaServed: { '@type': 'City', name: 'Park City', sameAs: 'https://www.wikidata.org/wiki/Q491524' },
};

export default function ParkCityPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Park City' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Park City, Utah"
        title="Park City AV production for resorts, screenings, and brand events."
        description="From Sundance premieres to mountainside product launches, Taylor AV's crews engineer mountain-ready staging, LED, and streaming."
        image="/assets/sundance.jpg"
        imageAlt="Park City stage build"
        taglineWords={["Sundance", "Resorts", "Snow-ready"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <h2>Mountain logistics dialed.</h2>
            <p className="content-narrow">
              Access roads, snowstorms, and limited docks are no surprise. We
              rehearse the run-of-show with resort partners so your event stays
              on schedule.
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
              heading="Need Park City references?"
              body="We'll share recent hospitality decks and resort approvals so you can brief stakeholders with confidence."
              primaryHref="/contact"
              primaryLabel="Plan Park City show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk to producers"
              trackingKey="park-city"
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
