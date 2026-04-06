import Image from "next/image";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentals · Salt Lake City AV equipment",
  description:
    "Taylor AV provides rental-grade audio, video, lighting, and streaming gear for events across Salt Lake City, the Wasatch Front, and touring events.",
  alternates: { canonical: '/rentals' },
};

const equipment = [
  {
    title: "Audio",
    detail:
      "Line arrays, wireless microphones, monitors, and DSP tuned for everything from boardrooms to outdoor festivals so the room sounds intentional at every level.",
  },
  {
    title: "Video",
    detail:
      "LED walls, switchers, playback servers, capture cameras, and streaming encoders that stay pre-labeled and pre-tested for Utah venues.",
  },
  {
    title: "Lighting",
    detail:
      "Theatrical moving lights, architectural washes, and programming desks (GrandMA, ChamSys) that dress scenery and highlight every cue.",
  },
];

const highlights = [
  {
    title: "Comprehensive selection",
    detail:
      "From intimate gatherings to multi-stage concerts, we stock the production resources you need without shipping everything from out of state.",
  },
  {
    title: "Seasoned experts",
    detail:
      "Our rental techs double as show technicians, so deployment and execution stay in sync, and no detail gets lost between rental and production crews.",
  },
  {
    title: "Reliable setup",
    detail:
      "Gear arrives staged, labeled, and tuned with backup options on-site plus headsets to keep the show caller informed throughout the run-of-show.",
  },
];

export default function RentalsPage() {
  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Rentals' },
            ]}
          />
        </div>
      </section>
      <Hero
        eyebrow="Rentals • Audio, Video & Lighting"
        title="Rentals where uptime matters."
        description="Taylor AV keeps Utah productions running with vetted rental gear, tech support, and a single crew that understands the space from first call to strike."
        image="/assets/live-streaming.jpg"
        imageAlt="Live event streaming and technician station"
        taglineWords={["Audio", "Video", "Lighting", "Streaming"]}
        parallaxSpeed={0.09}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Equipment categories" />
            <p className="content-narrow">
              Our rental packages arrive tuned, tested, and labeled so you
              deploy them with confidence. These systems stay in Salt Lake City,
              so crews roll in pre-cabled and calibrated for each venue.
            </p>
            <div className="grid">
              {equipment.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Tech & logistics" />
            <p className="content-narrow">
              Packages arrive staged, labeled, and ready to rig. Crews stay
              until strike, handling audio checks, lighting cues, and broadcast
              feeds so your event never loses momentum.
            </p>
            <div className="media-card">
              <div className="image-frame">
                <Image
                  src="/assets/hero-stage.jpg"
                  alt="Stage lighting setup"
                  width={960}
                  height={720}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
              <div className="media-card-content">
                <h3>
                  Support for corporate days, ceremonies, and hybrid broadcasts.
                </h3>
                <p>
                  Reliable rental techs keep backup gear on-site, maintain
                  communication with show teams, and track transport and
                  load-out so venues stay on schedule.
                </p>
                <p>
                  We service conferences, weddings, festivals, and streamed
                  experiences with the same rigor and help logistic teams handle
                  union turns, power, and fiber runs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Comprehensive rental packages." />
            <p className="content-narrow">
              Our inventory scales from staging rooms in Salt Lake City to
              mobile rigs in Park City and Las Vegas, giving you the same
              reliability no matter how big the room.
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
              heading="Want us to pre-flight your rental list?"
              body="Send the venue packet or engineering doc and we'll align power, rigging, and crew notes before you issue the PO."
              primaryHref="/contact"
              primaryLabel="Review my specs"
              secondaryHref="tel:+18015201699"
              secondaryLabel="Talk to rentals"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h3>Ready to turn the rental into a production-grade experience?</h3>
            <p>
              Contact us for a rental scope that includes staging, crew support,
              and logistics. We will return a scoped plan and quote that
              respects your timeline and budget.
            </p>
            <div className="cta-banner-actions">
              <Link href="/contact" className="button button-primary">Request rental quote</Link>
              <Link href="/staging" className="button button-ghost">Browse staging</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
