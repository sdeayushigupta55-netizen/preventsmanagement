import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="End-to-End Solutions for Your Celebrations"
        description="From corporate conferences to wedding ceremonies and birthday wonderlands — explore our full range of premium event management services."
      />

      <section className="section">
        <div className="container">
          <div className="services-preview__grid">
            {services.map((service) => (
              <Link key={service.slug} to={service.path} className="services-preview__card">
                <div className="services-preview__icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <span className="services-preview__link">Explore Service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">Not Sure Where to Start?</span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>We Will Guide You</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Tell us about your event and our team will recommend the right service package for your needs and budget.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Free Consultation</Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
