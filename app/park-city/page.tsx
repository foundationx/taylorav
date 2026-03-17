import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Park City AV Production",
  description:
    "Dedicated Park City AV production crews for Sundance events, mountain resorts, and luxury hospitality events.",
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

export default function ParkCityPage() {
  return (
    <>
      <Hero
        eyebrow="Park City, Utah"
        title="Park City AV production."
        description="From Sundance premieres to mountainside product launches, Taylor AV’s crews engineer mountain-ready staging, LED, and streaming."
        image="/assets/sundance.jpg"
        imageAlt="Park City stage build"
        taglineWords={["Sundance", "Resorts", "Snow-ready"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Mountain logistics dialed." />
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
              body="We’ll share recent hospitality decks and resort approvals so you can brief stakeholders with confidence."
              primaryHref="/contact"
              primaryLabel="Plan Park City show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk to producers"
              trackingKey="park-city"
            />
          </div>
        </div>
      </section>
    </>
  );
}
