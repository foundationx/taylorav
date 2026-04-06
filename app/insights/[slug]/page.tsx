import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FadeHeading } from '../../../components/FadeHeading';
import { getInsightPost, insightPosts } from '../../../lib/insights';

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    return {
      title: 'Insight not found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Taylor AV`,
      description: post.description,
      type: 'article',
      url: `/insights/${post.slug}`,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: 'https://taylorav.com/assets/hero-concert.jpg',
    author: {
      '@type': 'Organization',
      name: 'Taylor AV',
      url: 'https://taylorav.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Taylor AV',
      url: 'https://taylorav.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://taylorav.com/assets/logo.png',
      },
    },
  };

  return (
    <>
      <section className="section section-compact" aria-label="Breadcrumb navigation">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Insights', href: '/insights' },
              { label: post.title },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="glass-panel">
            <p className="hero-eyebrow">{post.eyebrow}</p>
            <FadeHeading text={post.title} />
            <p className="content-narrow">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              • {post.readTime}
            </p>
            <p className="content-narrow" style={{ marginTop: '1rem' }}>
              {post.description}
            </p>

            <div className="quote-panel">
              {post.sections.map((section) => (
                <section key={section.heading} className="service-highlight">
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} style={{ marginTop: '0.85rem' }}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <div className="cta-banner">
              <h3>Need this level of planning on your next event?</h3>
              <p>
                Bring us in early and we will scope the load-in, signal flow, staging, and crew plan before the site starts pushing back.
              </p>
              <Link href="/contact" className="button button-primary">
                Request a quote
              </Link>
            </div>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
