import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import { SectionCTA } from '../../components/SectionCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas AV Support | Taylor AV',
  description: 'Utah-based crews and gear deployed to Las Vegas corridors for corporate activations and touring residencies.'
};

const highlights = [
  {
    title: 'Touring corridors',
    detail: 'We truck LED, audio, and staging from Utah to Vegas, Phoenix, and SoCal stops to keep continuity between shows.'
  },
  {
    title: 'Hotel ballrooms',
    detail: 'On-strip activations receive branded scenic, hybrid streaming, and union-friendly crews that integrate with hotel AV teams.'
  },
  {
    title: 'Cost transparency',
    detail: 'Because we own equipment, you pay for travel and crew days—no surprise sub-rental markups.'
  }
];

export default function LasVegasPage() {
  return (
    <>
      <Hero
        eyebrow="Las Vegas, Nevada"
        title="Las Vegas AV support for tours, meetings, and hotel events."
        description="Taylor AV travels with the same engineers who run your Utah shows, giving you reliable crews for Vegas dates and national tours."
        image="/assets/hero-stage.jpg"
        imageAlt="Las Vegas event"
        taglineWords={['Las Vegas', 'Touring', 'Crews']}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Traveling with you down I-15." />
            <p className="content-narrow">
              We pre-stage freight, schedule driver teams, and manage union paperwork so Vegas stops feel like an extension of your Utah command center.
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
              body="Send your routing or RFP and we’ll show how Taylor AV covers both Wasatch and Vegas legs with one crew."
              primaryHref="/contact"
              primaryLabel="Plan Vegas show"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Call touring desk"
              trackingKey="las-vegas"
            />
          </div>
        </div>
      </section>
    </>
  );
}
