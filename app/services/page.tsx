import Image from "next/image";
import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { FAQSection, createFaqSchema } from "../../components/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services · Salt Lake City AV production leadership",
  description:
    "Taylor AV delivers AV production direction, stage management, and streaming for corporate, civic, and live events across Salt Lake City and the Wasatch Front.",
  alternates: { canonical: '/services' },
};

const serviceCategories = [
  {
    title: "Corporate events & keynotes",
    detail:
      "Immersive corporate journeys, investor days, and product launches get cinematic lighting, crisp audio, and seamless streaming so every storyline lands with impact.",
  },
  {
    title: "Live streaming & broadcast",
    detail:
      "Multi-camera capture, live mix, and encode stacks translate the experience to remote audiences without losing technical accuracy, supporting brand compliance and director cues.",
  },
  {
    title: "Concerts & festivals",
    detail:
      "Line arrays, theatrical mills, LED canvases, and scenic lighting rigs keep acts such as Rascal Flatts, Imagine Dragons, and national touring collectives sounding sharp in arenas and outdoor fields.",
  },
  {
    title: "Community & civic",
    detail:
      "With State of Utah Sole Source Cooperative Contract #VC195059, we guide universities, counties, and municipalities through approvals, permits, and veteran-grade execution.",
  },
  {
    title: "Stage management",
    detail:
      "Show callers, technical directors, and riggers coordinate cues, rehearsals, and load-in flow so no detail falls between departments.",
  },
  {
    title: "System execution",
    detail:
      "Redundant audio routing, monitored video playback, and intelligent lighting consoles keep every cue consistent from green room to strike.",
  },
];

const eventTypes = [
  {
    title: "Product + launch stories",
    detail:
      "Boardroom events, investor days, and brand unveilings with polished scenic and broadcast-level audio.",
  },
  {
    title: "Festivals & touring nights",
    detail:
      "Multi-headliner festivals, touring residencies, and amphitheater shows that require staging, truss, and a disciplined tech package.",
  },
  {
    title: "Community + education",
    detail:
      "Commencements, civic celebrations, and university gatherings with accessible staging and ADA-compliant ramps.",
  },
  {
    title: "Hybrid & broadcast",
    detail:
      "Live-to-stream, panel-ready, and broadcast-grade feeds with real-time control rooms and remote director cues.",
  },
];

const faqItems = [
  {
    question: "Can you provide CAD drawings and engineering stamps?",
    answer:
      "Yes. Our project managers deliver CAD, rigging certs, and stamped calculations once we confirm ceiling loads and stage positions.",
  },
  {
    question: "Do you integrate with in-house AV teams?",
    answer:
      "We regularly act as lead or sub-contractor. We’ll align comms, cue sheets, and patch lists so responsibilities stay clear.",
  },
  {
    question: "What is covered in your production leadership retainer?",
    answer:
      "Advance calls, cue-to-cue rehearsals, crew staffing, rental prep, and strike logistics. Travel and custom fabrication are scoped separately.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services • Salt Lake City & Wasatch Front"
        title="AV production, staging, and crew — handled."
        description="Taylor AV brings the gear, the team, and the plan. Audio, video, lighting, staging, and live streaming for corporate events, concerts, and everything in between."
        image="/assets/services-bg.jpg"
        imageAlt="Audio visual equipment rigged for an event"
        taglineWords={["Plan", "Coordinate", "Deliver"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Audio, video, lighting, and staging — fully managed." />
            <p>
              We document every cue, load-in path, and lighting focus so Taylor
              AV, venue partners, and designers stay aligned. Our Salt Lake City
              producers know the permitting, access, and union requirements that
              other national integrators miss, and we keep the same team through
              rehearsal, show, and strike.
            </p>
            <div className="media-card">
              <div className="image-frame">
                <Image
                  src="/assets/community-event.jpg"
                  alt="Community AV event"
                  width={960}
                  height={720}
                  sizes="(max-width: 900px) 100vw, 55vw"
                />
              </div>
              <div className="media-card-content">
                <h3>We shepherd the event from concept to strike.</h3>
                <p>
                  Designers, producers, and marketing teams collaborate with a
                  single point of accountability. We scope the run-of-show,
                  rehearsal notes, and power plans so no detail is left to
                  chance.
                </p>
                <p>
                  Instead of separate rental and production vendors, Taylor AV
                  keeps leadership, rentals, and staging under one Salt Lake
                  City command, which keeps crews nimble across Ogden, Provo,
                  Park City, and Las Vegas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Service FAQs"
        intro="Straight answers to the questions production teams ask most."
        items={faqItems}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFaqSchema(faqItems)),
        }}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Event categories we engineer." />
            <p>
              Corporate keynotes, civic commemorations, concerts, festivals, and
              hybrid broadcasts all rely on documented planning, disciplined
              crews, and the rental depth to scale on cue.
            </p>
            <div className="grid">
              {serviceCategories.map((category) => (
                <article key={category.title} className="service-highlight">
                  <h3>{category.title}</h3>
                  <p>{category.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Operational clarity from advance through strike." />
            <p>
              Running a show across multiple city blocks, resorts, or streaming
              platforms demands transparency. Our schedules, passes, and tech
              rehearsals are updated in real time so we can react before issues
              become visible.
            </p>
            <div className="grid">
              {eventTypes.map((item) => (
                <article key={item.title} className="service-highlight">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h3>Need something more custom than a rental rack?</h3>
            <p>
              We blend designers, engineers, and technicians from Salt Lake City
              and beyond so your service is guided by a real, responsive team
              that can pivot when the scope changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
