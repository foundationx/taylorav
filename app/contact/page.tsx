import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact · Salt Lake City AV team',
  description:
    'Contact Taylor AV in Salt Lake City for AV production, rentals, staging, and technical crews across the Wasatch Front.'
};

const checklist = [
  'Venue name, street, and point of contact.',
  'Event date, rehearsals, and door times.',
  'Hours of coverage plus load-in/out windows.',
  'Audience size, VIP production needs, and streaming deliverables.',
  'Run-of-show highlights or second-camera cues.'
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact • Salt Lake City"
        title="Let us scope your next activation with clarity and a real crew."
        description="Based in Riverton, we travel across the Wasatch Front and beyond for major productions, tours, and civic events."
        image="/assets/community-events.jpg"
        imageAlt="Event staff coordinating AV operations"
        taglineWords={['Reach', 'Plan', 'Execute']}
        parallaxSpeed={0.06}
      />

      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Send us the details, we’ll handle the rest." />
            <p>Fill in the key information and we’ll respond with a scoped plan, equipment list, and staffing options.</p>
            <form className="contact-form" action="#" method="post">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="full-name">Full name</label>
                  <input type="text" id="full-name" name="full-name" placeholder="Jordan Blake" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" placeholder="name@company.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (801) 520-1699" required />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Event date</label>
                  <input type="date" id="date" name="event-date" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="venue">Venue / location</label>
                  <input type="text" id="venue" name="venue" placeholder="City, venue, or address" />
                </div>
                <div className="form-group">
                  <label htmlFor="audience">Audience size</label>
                  <input type="text" id="audience" name="audience" placeholder="150 guests / 1,500 capacity" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">What’s the show?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="List run-of-show highlights, production goals, or streaming needs."
                ></textarea>
              </div>
              <button type="submit">Send request</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Quote checklist" />
            <p>Sharing the details below helps us return an accurate scope quickly.</p>
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
              There are plenty of companies who can provide the equipment you need, but what truly counts are the people behind the gear. Our full-time AV techs are dedicated to the success of your event not only because it is their job, but because they are passionate about making events lively across the Salt Lake Valley.
            </p>
            <div className="service-area">
              <span>12963 Redwood Rd, Riverton, UT 84065</span>
              <span>
                <a href="tel:+18015201699">+1 (801) 520-1699</a>
              </span>
            </div>
            <div className="quote-block">
              <p>
                We reply faster than national vendors and treat your event as our own, even when the scope shifts mid-week.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
