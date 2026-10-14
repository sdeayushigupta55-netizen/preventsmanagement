import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import { generalFaqs } from '../data/faqs';
import { services } from '../data/services';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const allFaqs = [
    ...generalFaqs,
    ...services.flatMap((s) =>
      s.faqs.map((f) => ({ ...f, category: s.title }))
    ),
  ];

  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about planning your event with Kalav Hospitality."
        ctaText="Still Have Questions?"
        ctaLink="/contact"
      />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {allFaqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              style={{ borderBottom: '1px solid rgba(30,45,62,0.08)', background: 'var(--white)', marginBottom: 8, borderRadius: 4, padding: '0 24px' }}
            >
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--navy)', textAlign: 'left' }}
              >
                <span>
                  {faq.category && (
                    <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>
                      {faq.category}
                    </span>
                  )}
                  {faq.q}
                </span>
                <HiChevronDown style={{ flexShrink: 0, color: 'var(--gold)', transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'var(--transition)' }} />
              </button>
              <div style={{ maxHeight: openIndex === i ? 240 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                <p style={{ paddingBottom: 20, fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
