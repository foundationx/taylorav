import Link from 'next/link';
import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Playbooks | Taylor AV',
  description: 'Guides and checklists that help planners scope AV, staging, and streaming across the Mountain West.'
};

const posts = [
  {
    title: 'Mountain resort load-in checklist',
    summary: 'A step-by-step rundown for coordinating docks, snow removal, and redundant power for Park City and Sundance venues.',
    date: '2026-02-20',
    href: '#'
  },
  {
    title: 'Hybrid keynote signal flow',
    summary: 'How we route audio, comms, and streaming redundancies so in-room and remote audiences stay in sync.',
    date: '2026-01-31',
    href: '#'
  },
  {
    title: 'County fair mobile stage specs',
    summary: 'Compare Stageline SL75 vs SL250 platforms, build times, and staffing requirements for civic events.',
    date: '2025-12-15',
    href: '#'
  }
];

export default function InsightsPage() {
  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Playbooks for planners who need more than a rental list."
        description="We document the logistics we wish every partner had—download, adapt, and bring sharper expectations to your next show."
        image="/assets/community-event.jpg"
        imageAlt="Insights hero"
        taglineWords={['Guides', 'Checklists', 'Playbooks']}
        parallaxSpeed={0.08}
      />

      <section className="section">
        <div className="container">
          <div className="glass-panel">
            <FadeHeading text="Latest field notes." />
            <div className="grid">
              {posts.map((post) => (
                <article key={post.title} className="service-highlight">
                  <p style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <Link href={post.href} className="button button-ghost" style={{ marginTop: '1rem' }}>
                    Read post
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
