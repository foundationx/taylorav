import Link from 'next/link';
import { Hero } from '../components/Hero';
import { FadeHeading } from '../components/FadeHeading';
import { StatsBar } from '../components/StatsBar';
import { SectionCTA } from '../components/SectionCTA';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salt Lake City AV production, rentals & staging',
  description:
    'Taylor AV orchestrates AV production, rentals, staging, and crews for Salt Lake City, the Wasatch Front, and touring corridors such as Las Vegas with precision and reliability.'
};

const heroStats = [
  { value: '250+', label: 'Shows annually' },
  { value: '18', label: 'Touring crews' },
  { value: '24/7', label: 'Stage support' }
];

const serviceArea = [
  {
    label: 'Salt Lake City',
    detail: 'Downtown venues, Salt Palace conventions, and arena keynotes',
    href: '/salt-lake-city'
  },
  {
    label: 'Park City',
    detail: 'Resorts, film-week pop-ups, and luxury hospitality installs',
    href: '/park-city'
  },
  {
    label: 'Ogden',
    detail: 'Weber County arenas, festivals, and municipal activations',
    href: '/ogden'
  },
  {
    label: 'Provo',
    detail: 'BYU/UVU launches, commencement stages, and education town halls',
    href: '/provo'
  },
  {
    label: 'Utah County',
    detail: 'Civic plazas, campuses, and canyon retreats needing AV coverage',
    href: '/utah-county'
  },
  {
    label: 'Las Vegas corr.',
    detail: 'Touring corridors plus regional shows that demand Utah crews',
    href: '/las-vegas'
  }
];

const testimonials = [
  {
    quote: 'Taylor AV’s crew advanced our show weeks earlier than other vendors and saved six hours of load-in the day of the event.',
    name: 'Jordan Blake',
    title: 'Executive Producer',
    company: 'North Rim Agency'
  },
  {
    quote: 'Their directors handled union coordination, hybrid streaming, and lighting cues so our keynote looked and felt like a national broadcast.',
    name: 'Serena Lowe',
    title: 'Director of Events',
    company: 'Summit Tech'
  },
  {
    quote: 'From Park City snowstorms to Vegas ballrooms, Taylor AV shows up prepared with redundant gear and the people to run it.',
    name: 'Marcus Diaz',
    title: 'Tour Manager',
    company: 'Western Lights Collective'
  }
];

const homeFaq = [
  {
    question: 'How far in advance should we book Taylor AV?',
    answer: 'Major productions are typically reserved 6–8 weeks prior to rehearsal, but we keep rapid-response crews on standby for civic or touring emergencies.'
  },
  {
    question: 'Do you travel outside Utah?',
    answer: 'Yes. We regularly support Las Vegas, Denver, and West Coast corridors with the same Utah-based crews, trucking, and redundant equipment.'
  },
  {
    question: 'Can you handle streaming + in-room production simultaneously?',
    answer: 'Hybrid control rooms are part of our default scope. We provide isolated audio mixes, redundant encoders, and stage management so neither audience feels secondary.'
  }
];

const serviceHighlights = [
  {
    title: 'Production leadership',
    body:
      'Technical directors, cue-to-cue oversight, and rigging crews keep lighting, audio, and scenic intent aligned with your run-of-show so the event looks curated and feels uncompromised.'
  },
  {
    title: 'Rental infrastructure',
    body:
      'Line arrays, LED walls, consoles, playback servers, and live-stream capture are pre-staged in Riverton with redundant cabling and everyday calibrations to keep things on cue.'
  },
  {
    title: 'Staging + crews',
    body:
      'Stage decks, truss, hydraulic Stageline platforms, and mobile studios arrive with trained riggers who honor union fast lanes, load-in windows, and meticulous strike logistics.'
  }
];

const proofItems = [
  {
    title: 'Corporate + civic activations',
    body:
      'Boardroom launches, government briefings, and university ceremonies get the same clarity as national integrators but with more responsiveness to Utah venue logistics.'
  },
  {
    title: 'Live concerts & festivals',
    body:
      'Sound, video, lighting, and truss for acts like Rascal Flatts, Imagine Dragons, Michael W. Smith, and touring collectives stay polished thanks to touring-grade crews.'
  },
  {
    title: 'Live streaming & broadcast',
    body:
      'Mix, capture, and remote-control packages move with the show so a hybrid keynote or broadcasted gala stays on time with high-fidelity signal paths.'
  }
];

const mountainHighlights = [
  {
    title: 'State of Utah Sole Source (#VC195059)',
    body:
      'Our contract underlines accountability, competitive pricing, and the transparency public agencies expect, making Taylor AV a trusted partner for civic, state, and education teams.'
  },
  {
    title: 'Mountain-ready logistics',
    body:
      'Park City resorts, canyon amphitheaters, and remote festival sites are no surprise—our crews rehearse power plans, slope access, and long-haul trucking long before load-in.'
  },
  {
    title: 'Strategic partners',
    body:
      'Entertainment directors, venues, and production designers rely on our local presence plus touring resources to keep shows beautiful and punctual.'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Salt Lake City • Wasatch Front • Las Vegas"
        title="AV production, rentals, and staging—\nbuilt to look sharp and run on time."
        description="Based in Salt Lake City, Taylor AV serves the Wasatch Front and beyond with corporate activations, concerts, weddings, civic gatherings, and streamed broadcasts."
        image="/assets/hero-concert.jpg"
        imageAlt="Lighting and stage rig from a live production"
        taglineWords={['Precision', 'crews,', 'rigging,', 'execution.']}
        parallaxSpeed={0.12}
      />
      <div className="container">
        <StatsBar stats={heroStats} />
      </div>

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Production, rentals, staging woven into one command." />
            <div className="media-card media-card-home">
              <div className="image-frame">
                <img src="/assets/concerts-events.jpg" alt="Concert lighting and truss" loading="lazy" />
              </div>
              <div className="media-card-content">
                <p className="media-card-intro">
                  Every activation gets a Taylor AV technical director, production engineer, rental lead, and stage crew so that there are no handoffs between infrastructure and execution. We scope, rehearse, and document the run-of-show to keep lighting, audio, video, and scenic intent in sync from pre-production through strike.
                </p>
                <h3>One plan, no surprises.</h3>
                <p>
                  Instead of juggling multiple vendors, producers work with a single Taylor AV partner who owns every cable, amp, deck, and cue sheet. Crews respect venue rules while keeping the experience polished like a national integrator but only a local call away.
                </p>
                <p>
                  Our teams keep equipment staged in Riverton for quick regional response, and we still travel with rigs and crew packages when your show calls for Las Vegas, Denver, or neighboring states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Capabilities tailored for the Wasatch Front." />
            <p className="content-narrow">
              We balance boutique responsiveness with touring infrastructure. Our inventory and crew cadence mirror the discipline of a remote integrator, while our engineers live inside the Wasatch corridors, which is why we keep production crews in Salt Lake City, Ogden, and Park City every week.
            </p>
            <div className="grid">
              {serviceHighlights.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <FadeHeading text="Service area" />
            <p className="content-narrow">
              We highlight the Wasatch Front because crews live nearby, but if a venue or major touring act wants Taylor AV anywhere—just ask. Transparent travel logistics, per diem, and freight plans keep your budget intact.
            </p>
          </div>
          <div className="service-area-grid">
            {serviceArea.map((area) => (
              <Link key={area.label} className="service-area-chip" href={area.href}>
                {area.label}
              </Link>
            ))}
          </div>
          <div className="grid" style={{ marginTop: '1.5rem' }}>
            {serviceArea.map((area) => (
              <article key={`${area.label}-detail`} className="card">
                <h3>
                  <Link href={area.href}>{area.label}</Link>
                </h3>
                <p>{area.detail}</p>
              </article>
            ))}
          </div>
          <SectionCTA
            heading="Need an on-call AV partner before your RFP goes live?"
            body="Share your run-of-show, venue packet, or design intent and we’ll return a scoped plan with logistics, staffing, and pricing clarity."
            primaryHref="/contact"
            primaryLabel="Scope my event"
            secondaryHref="tel:+18015201699"
            secondaryLabel="Call the team"
            trackingKey="home-service-area"
          />
        </div>
      </section>

      <section className="section mountain-section">
        <div className="parallax-backdrop" style={{ backgroundImage: "url('/assets/services-bg.jpg')" }} />
        <div className="container">
          <div className="mountain-panel">
            <FadeHeading text="Taylor AV engineers clear-sky experiences over the Wasatch Front." />
            <p>
              Our State of Utah Sole Source Cooperative Contract (#VC195059) and decades of touring-grade experience mean public agencies, corporate partners, and festivals see the same clarity as a national integrator with a local voice.
            </p>
            <div className="grid">
              {mountainHighlights.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Proof we arrive on time and stay on cue." />
            <p className="content-narrow">
              Decades of touring-grade experience, disciplined crews, and a rental inventory that scales to any room prove Taylor AV outperforms one-off providers. We steward every cue, speaker, and performer so the story lands with craft and control.
            </p>
            <div className="proof-grid">
              {proofItems.map((item) => (
                <article key={item.title} className="proof-item">
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h3>Ready for a partner who knows your stage?</h3>
            <p>
              We pair local leadership with the touring infrastructure you need—riggers, engineers, and technicians who keep the show sharp from Salt Lake City to Las Vegas.
            </p>
          </div>
        </div>
      </section>

      <Testimonials items={testimonials} />
      <FAQSection
        title="Planning questions"
        intro="If you need deeper specs, our producers will share CAD drawings, rigging packets, or sample cue sheets during discovery."
        items={homeFaq}
      />
    </>
  );
}
