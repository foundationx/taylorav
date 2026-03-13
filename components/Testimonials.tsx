type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
};

type TestimonialsProps = {
  items: Testimonial[];
};

export function Testimonials({ items }: TestimonialsProps) {
  if (!items.length) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="glass-panel">
          <div className="section-heading">
            <h2>Testimonials</h2>
            <p className="content-narrow">
              Partners trust Taylor AV crews to manage every cue, union turn, and client meeting with the same level of polish.
            </p>
          </div>
          <div className="grid">
            {items.map((item) => (
              <article key={item.name} className="service-highlight">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <strong>{item.name}</strong>
                <span style={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>
                  {item.title}
                  {item.company ? `, ${item.company}` : ''}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
