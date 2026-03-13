type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title?: string;
  intro?: string;
  items: FAQItem[];
};

export function FAQSection({ title = 'FAQ', intro, items }: FAQSectionProps) {
  if (!items.length) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="glass-panel">
          <div className="section-heading">
            <h2>{title}</h2>
            {intro ? <p className="content-narrow">{intro}</p> : null}
          </div>
          <div className="faq-grid">
            {items.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function createFaqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
