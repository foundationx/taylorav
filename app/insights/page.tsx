import Link from 'next/link';
import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import { insightPosts } from '../../lib/insights';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Playbooks | Taylor AV',
  description: 'Guides and checklists that help planners scope AV, staging, and streaming across the Mountain West.'
};

export default function InsightsPage() {
  return (
    <>
      <Hero
        eyebrow="Insights"
        headingText="AV Planning Insights"
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
              {insightPosts.map((post) => (
                <article key={post.slug} className="service-highlight">
                  <p style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <Link href={`/insights/${post.slug}`} className="button button-ghost" style={{ marginTop: '1rem' }}>
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
