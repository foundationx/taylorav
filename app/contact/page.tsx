import { Hero } from "../../components/Hero";
import { FadeHeading } from "../../components/FadeHeading";
import { ContactForm } from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Salt Lake City AV team",
  description:
    "Contact Taylor AV in Salt Lake City for AV production, rentals, staging, and technical crews across the Wasatch Front.",
  alternates: { canonical: '/contact' },
};

const checklist = [
  "Venue name, street, and point of contact.",
  "Event date, rehearsals, and door times.",
  "Hours of coverage plus load-in/out windows.",
  "Audience size, VIP production needs, and streaming deliverables.",
  "Run-of-show highlights or second-camera cues.",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact • Salt Lake City"
        title="Let's scope your next event."
        description="Based in Riverton, we travel across the Wasatch Front and beyond for major productions, tours, and civic events."
        image="/assets/community-events.jpg"
        imageAlt="Event staff coordinating AV operations"
        taglineWords={["Reach", "Plan", "Execute"]}
        parallaxSpeed={0.06}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Send us the details, we'll handle the rest." />
            <p>
              Fill in the key information and we'll respond with a scoped plan,
              equipment list, and staffing options.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Quote checklist" />
            <p>
              Sharing the details below helps us return an accurate scope
              quickly.
            </p>
            <ul className="quote-checklist">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Where to find us" />
            <p>
              Our Riverton warehouse keeps equipment pre-staged and technicians on standby. We are minutes from downtown Salt Lake City and ready to mobilize across the Wasatch Front on short notice — no waiting on freight from out of state.
            </p>
            <div className="service-area">
              <span>12963 Redwood Rd, Riverton, UT 84065</span>
              <span>
                <a href="tel:+18015201699">+1 (801) 520-1699</a>
              </span>
            </div>
            <div className="map-frame">
              <iframe
                src="https://maps.google.com/maps?q=12963+Redwood+Rd,+Riverton,+UT+84065&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taylor AV office location"
              />
            </div>
            <div className="quote-block">
              <p>
                We reply faster than national vendors and treat your event as
                our own, even when the scope shifts mid-week.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
