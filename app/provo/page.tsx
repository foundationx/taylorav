import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provo AV Production | Taylor AV",
  description:
    "BYU, UVU, and Utah Valley corporate events led by Taylor AV’s staging, streaming, and rental teams.",
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

export default function ProvoPage() {
  return (
    <>
      <Hero
        eyebrow="Provo & Utah Valley"
        headingText="Provo AV"
        title="Provo AV production for campuses, headquarters, and live events."
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
              body="Send us your auditorium specs or HQ briefings and we’ll return drawings, rental lists, and show management plans."
              primaryHref="/contact"
              primaryLabel="Plan Provo show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk staging"
              trackingKey="provo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
