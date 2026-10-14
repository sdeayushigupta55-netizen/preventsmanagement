import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        label="404"
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
        ctaText="Back to Home"
        ctaLink="/"
      />
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>
            Explore our services or get in touch to plan your next celebration.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/corporate-events" className="btn btn-navy">Corporate Events</Link>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
