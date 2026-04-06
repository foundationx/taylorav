import Link from 'next/link';
import { Hero } from '../../components/Hero';
import { FadeHeading } from '../../components/FadeHeading';
import { insightPosts } from '../../lib/insights';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Playbooks',
  description: 'Guides and checklists that help planners scope AV, staging, and streaming across the Mountain West.',
  alternates: { canonical: '/insights' },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Taylor AV Insights & Playbooks',
  url: 'https://taylorav.com/insights',
  itemListElement: insightPosts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://taylorav.com/insights/${post.slug}`,
    name: post.title,
  })),
};

export default function InsightsPage() {
  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Playbooks for serious planners."
        description="We document the logistics we wish every partner had—download, adapt, and bring sharper expectations to your next show."
        image="/assets/community-event.jpg"
        imageAlt="Taylor AV event production crew on stage"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
