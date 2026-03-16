import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ogden AV Production | Taylor AV",
  description:
    "Ogden arenas, Weber County festivals, and community gatherings backed by Taylor AV crews and rentals.",
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

export default function OgdenPage() {
  return (
    <>
      <Hero
        eyebrow="Ogden, Weber County"
        headingText="Ogden AV"
        title="Ogden AV production for festivals, venues, and civic events."
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
              body="Share your festival or civic outline and we’ll deliver rigging drawings, pricing, and crew assignments."
              primaryHref="/contact"
              primaryLabel="Plan Ogden show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Call producers"
              trackingKey="ogden"
            />
          </div>
        </div>
      </section>
    </>
  );
}
