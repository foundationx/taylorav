import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-panel">
          <h2>Page not found</h2>
          <p>Taylor AV is still ready to help—navigate home or reach out for production, rentals, and staging.</p>
          <Link className="button button-primary" href="/">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
