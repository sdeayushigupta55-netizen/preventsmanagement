import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import CTA from '../components/CTA';
import PageHero from '../components/PageHero';
import { services } from '../data/services';
import { serviceImages } from '../data/serviceImages';

export default function ServicePage({ service }) {
  const [openFaq, setOpenFaq] = useState(0);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        compact
        label="Our Services"
        title={service.title}
        description={service.heroDesc}
        ctaText="Enquire Now"
        image={serviceImages[service.slug]}
        breadcrumb={(
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.shortTitle}</span>
          </nav>
        )}
      />

      <section className="section">
        <div className="container service-detail__grid">
          <div className="service-detail__content">
            {service.overview.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}

            <div className="service-detail__offerings">
              <h3>What We Offer</h3>
              {service.offerings.map((item, i) => (
                <div key={item.title} className="service-detail__offering">
                  <span className="service-detail__offering-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 24 }}>
                Frequently Asked Questions
              </h3>
              {service.faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  className={`faq__item ${openFaq === i ? 'faq__item--open' : ''}`}
                  style={{ borderBottom: '1px solid rgba(30,45,62,0.08)' }}
                >
                  <button
                    className="faq__question"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--navy)', textAlign: 'left' }}
                  >
                    {faq.q}
                    <HiChevronDown style={{ color: 'var(--gold)', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    <p style={{ paddingBottom: 18, fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="service-detail__sidebar">
            <div className="service-detail__sidebar-card">
              <h4>Our Process</h4>
              <ol>
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="service-detail__other">
              <h4>Other Services</h4>
              {otherServices.map((s) => (
                <Link key={s.slug} to={s.path}>{s.title}</Link>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
              Get a Quote
            </Link>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
