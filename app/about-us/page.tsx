import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Utah AV production partner",
  description:
    "Taylor AV is a Salt Lake City-based AV production partner with disciplined crews, rental inventory, staging expertise, and a state contract for public events.",
  alternates: { canonical: '/about-us' },
};

// PLACEHOLDER — replace with real team member names, titles, and bios
const teamMembers = [
  {
    initials: "AT",
    name: "Alex Taylor",
    title: "Founder & Technical Director",
    bio: "20+ years orchestrating productions from local galas to national touring acts. Holds ETCP rigging certification and serves on Utah's production safety advisory board.",
  },
  {
    initials: "JM",
    name: "Jordan Mills",
    title: "Lead Audio Engineer",
    bio: "Specializes in line-array design and FOH mixing for corporate keynotes and concert series. Has toured with national acts across the Western U.S.",
  },
  {
    initials: "CR",
    name: "Casey Rivera",
    title: "Video & Streaming Lead",
    bio: "Manages LED wall builds, broadcast signal flows, and hybrid event encoding. Certifications in Barco and disguise video systems.",
  },
  {
    initials: "SK",
    name: "Sam Kowalski",
    title: "Staging & Rigging Supervisor",
    bio: "ETCP-certified rigger with a decade of arena-level builds. Oversees all Stageline and truss deployments across the Wasatch Front.",
  },
];

const aboutHighlights = [
  {
    title: "Local leadership",
    detail:
      "In-house producers, creative engineers, and account leads forecast logistics before crews arrive, giving us a Salt Lake City edge over distant competitors.",
  },
  {
    title: "Deep inventory",
    detail:
      "Audio, video, lighting, truss, staging, and live-stream rigs rotate through corporate, civic, and live events every week.",
  },
  {
    title: "Field discipline",
    detail:
      "Safety plans, load-in maps, and strike checklists keep venues clean and every cue documented across Utah and beyond.",
  },
];

const proofGrid = [
  {
    title: "Technical staff",
    detail:
      "System engineers, audio techs, lighting programmers, and stagehands follow the show caller's lead.",
  },
  {
    title: "Event readiness",
    detail:
      "Checklists, rehearsals, and redundancy are baked into every engagement so nothing surprises you.",
  },
  {
    title: "Travel & response",
    detail:
      "We travel from Salt Lake City to Park City, Ogden, Provo, and beyond for launches, concerts, and community gatherings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us • Salt Lake City"
        title="Taylor AV is a Salt Lake City AV partner built on technical discipline."
        description="We blend production direction, rental inventory, staging, and technicians into a reliable partner for Utah's premium events."
        image="/assets/about-bg.jpg"
        imageAlt="High-end AV experience in a ballroom"
        taglineWords={["Reliability", "Precision", "Preparation"]}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Roots in Salt Lake City, focus on show readiness." />
            <div className="about-intro">
              <p>
                Our crew is rooted in the Wasatch Front and travels with gear to
                major cities when shows demand it. While others subcontract
                out-of-state crews, we keep engineers and technicians on call so
                the voice stays consistent from scope to strike.
              </p>
            </div>
            <div className="grid">
              {aboutHighlights.map((item) => (
                <article key={item.title} className="card">
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
          <div className="glass-panel">
            <FadeHeading text="Team + technology" />
            <p>
              A small, experienced core of engineers coordinates the crews,
              sets, and rental deployments. We operate like a national
              integrator with the clarity of a boutique Utah partner, keeping
              communication tight and response times fast.
            </p>
            <div className="proof-grid">
              {proofGrid.map((item) => (
                <article key={item.title} className="proof-item">
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Built to look sharp and anchored in logistics." />
            <p>
              Since 2008, Taylor AV has partnered with brands and venues to
              ensure audio, lighting, video, staging, and technician staffing
              all align with the creative narrative while staying on budget.
            </p>
            <div className="grid">
              <article className="service-highlight">
                <h3>Strategic leadership</h3>
                <p>
                  We review power plans, safety margins, and rigging points
                  before a single truck hits the dock.
                </p>
              </article>
              <article className="service-highlight">
                <h3>Production standards</h3>
                <p>
                  We manage rehearsals, checklists, and contingencies so the
                  show never misses a cue, even when the scope expands.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="The crew behind every show." />
            <p className="content-narrow">
              Our core team lives in the Wasatch Front and travels when your
              production demands it. Every person below has run shows on the
              floor, not just managed them from a desk.
            </p>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <article key={member.initials} className="team-card">
                  <div className="team-avatar" aria-hidden="true">{member.initials}</div>
                  <h3>{member.name}</h3>
                  <p className="team-card-title">{member.title}</p>
                  <p>{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-block">
            <p>
              &ldquo;There are plenty of integrators, but the people behind the gear
              are what truly count. Taylor AV&apos;s team knows our venues, our
              technical goals, and how to bring a clean aesthetic to each
              production.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
