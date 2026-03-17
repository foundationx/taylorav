import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salt Lake City AV Production",
  description:
    "Full-scale AV production, rentals, and crews for downtown Salt Lake City venues and civic institutions.",
  alternates: { canonical: '/salt-lake-city' },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Salt Lake City',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

const highlights = [
  {
    title: "Salt Palace mastery",
    detail:
      "We map rigging grids, power drops, and union calls for the Salt Palace Convention Center so you have a single partner from expo to keynote.",
  },
  {
    title: "Civic + education",
    detail:
      "State agencies, universities, and municipalities rely on our Sole Source contract (#VC195059) for transparent pricing and documented logistics.",
  },
  {
    title: "Hybrid broadcasts",
    detail:
      "Downtown fiber, redundant encoding, and scenic lighting deliver polished streams for corporate HQs and national nonprofits.",
  },
];

export default function SaltLakeCityPage() {
  return (
    <>
      <Hero
        eyebrow="Salt Lake City"
        title="Salt Lake City AV production."
        description="Headquartered minutes from downtown, Taylor AV keeps equipment, staging, and engineers on standby for civic, corporate, and touring needs."
        image="/assets/hero-concert.jpg"
        imageAlt="Salt Lake City stage"
        taglineWords={["Downtown", "Civic", "Hybrid"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Built for Salt Lake timelines." />
            <p className="content-narrow">
              Whether it's a boardroom address or a multi-stage event, we own
              the gear and the people, keeping every cue on time.
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
              heading="Ready for a Salt Lake walkthrough?"
              body="Send us your site packet or RFP outline and we'll respond with CAD drawings, staffing plans, and a production calendar."
              primaryHref="/contact"
              primaryLabel="Start Salt Lake scope"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Call Taylor AV"
              trackingKey="salt-lake"
            />
          </div>
        </div>
      </section>
    </>
  );
}
