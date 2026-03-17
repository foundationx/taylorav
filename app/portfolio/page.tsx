import Image from "next/image";
import Link from "next/link";
import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { SectionCTA } from "../../components/SectionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio · Production work across Utah & beyond",
  description:
    "Browse Taylor AV productions — corporate keynotes, live concerts, outdoor festivals, broadcast events, and staging builds across Salt Lake City and the Wasatch Front.",
  alternates: { canonical: "/portfolio" },
};

// PLACEHOLDER — replace titles, descriptions, tags, and locations with real project details.
// Replace image paths with actual production photography when available.
const projects = [
  {
    title: "Salt Palace Convention Center Keynote",
    tag: "Corporate / Conference",
    location: "Salt Lake City, UT",
    description:
      "Full AV production for a 2,400-seat technology keynote. LED wall, line arrays, broadcast feed, and hybrid streaming for remote attendees.",
    image: "/assets/hero-concert.jpg",
    imageAlt: "Large-scale stage rig and concert lighting",
  },
  {
    title: "Sundance Film Week Production",
    tag: "Film / Media",
    location: "Park City, UT",
    description:
      "Audio, lighting, and live-stream capture for a high-profile film week screening and panel series at a Park City mountain venue.",
    image: "/assets/sundance.jpg",
    imageAlt: "Sundance event production",
  },
  {
    title: "Hybrid Broadcast Keynote",
    tag: "Streaming / Broadcast",
    location: "Salt Lake City, UT",
    description:
      "Isolated audio mixes, redundant encoders, and a dedicated streaming control room delivering simultaneous in-room and remote experiences.",
    image: "/assets/live-streaming.jpg",
    imageAlt: "Live streaming and broadcast technician setup",
  },
  {
    title: "Weber County Amphitheater Concert",
    tag: "Live Concert",
    location: "Ogden, UT",
    description:
      "Touring-grade sound, video, and lighting for an outdoor amphitheater concert series. Truss, delay towers, and full stage management.",
    image: "/assets/hero-stage.jpg",
    imageAlt: "Stage lighting at an outdoor amphitheater",
  },
  {
    title: "Grand Ballroom Gala",
    tag: "Corporate / Gala",
    location: "Salt Lake City, UT",
    description:
      "Architectural lighting design, drape, and AV direction for a 500-guest corporate gala. Custom gobos, moving light programming, and wireless audio.",
    image: "/assets/about-bg.jpg",
    imageAlt: "Grand ballroom with elegant lighting design",
  },
  {
    title: "Outdoor Festival Stage Build",
    tag: "Festival / Outdoor",
    location: "Utah County, UT",
    description:
      "Stageline SL320 mobile stage, truss, and FOH package for a multi-act outdoor festival. Power distribution, delay towers, and full rigging crew.",
    image: "/assets/staging.jpg",
    imageAlt: "Mobile stage platform at an outdoor festival",
  },
  {
    title: "Resort Lighting & Staging Install",
    tag: "Hospitality / Resort",
    location: "Park City, UT",
    description:
      "Temporary lighting and staging for a mountain resort reception series. Custom truss build, LED uplighting, and wireless video distribution.",
    image: "/assets/lighting-staging.jpg",
    imageAlt: "Stage lighting and truss installation",
  },
  {
    title: "State Civic Ceremony",
    tag: "Civic / Government",
    location: "Salt Lake City, UT",
    description:
      "AV production for a Utah state civic ceremony under our Sole Source Contract #VC195059. PA coverage, confidence monitors, and broadcast feed.",
    image: "/assets/community-events.jpg",
    imageAlt: "Community event with professional AV setup",
  },
  {
    title: "Live Concert Series",
    tag: "Live Concert",
    location: "Salt Lake City, UT",
    description:
      "Recurring concert series production for a major Utah venue. Line arrays, LED wash, moving lights, and touring-grade crew on every date.",
    image: "/assets/concerts-events.jpg",
    imageAlt: "Concert lighting and truss for a live show",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio • Our Work"
        title="What we've built."
        description="Corporate keynotes, live concerts, outdoor festivals, civic ceremonies, and broadcast events — all produced by the same Utah-based crew."
        image="/assets/hero-concert.jpg"
        imageAlt="Taylor AV stage rig and lighting production"
        taglineWords={["Shows", "Stages", "Signals", "Stories"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Productions across the Wasatch Front and beyond." />
            <p className="content-narrow">
              From 200-person boardroom launches to 10,000-capacity outdoor
              concerts — every project below was staffed, rigged, and executed
              by our in-house crews with our own inventory.
            </p>
            <div className="portfolio-grid">
              {projects.map((project) => (
                <article key={project.title} className="portfolio-card">
                  <div className="portfolio-card-image">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="portfolio-card-body">
                    <span className="portfolio-card-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-card-meta">
                      <span>📍 {project.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Your event could be our next reference."
        body="Share your run-of-show and venue packet. We will return a scoped plan, crew list, and equipment proposal within 48 hours."
        primaryHref="/contact"
        primaryLabel="Start your quote"
        secondaryHref="/services"
        secondaryLabel="See our services"
        trackingKey="portfolio-bottom"
      />
    </>
  );
}
