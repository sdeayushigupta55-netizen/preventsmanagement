import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { generalFaqs } from '../data/faqs';

export default function FAQ({ items = generalFaqs.slice(0, 6), showViewAll = true }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq__grid">
          <div className="faq__intro">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Have questions about planning your event? Here are answers to the
              most common ones.
            </p>
            {showViewAll && (
              <Link to="/faq" className="btn btn-navy" style={{ marginTop: 24 }}>
                View All FAQs
              </Link>
            )}
          </div>

          <div className="faq__list">
            {items.map((faq, i) => (
              <div
                key={faq.q}
                className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.q}
                  <HiChevronDown className="faq__chevron" size={20} />
                </button>
                <div className="faq__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq { background: var(--cream); }
        .faq__grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }
        .faq__item { border-bottom: 1px solid rgba(30, 45, 62, 0.08); }
        .faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          background: none;
          border: none;
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--navy);
          text-align: left;
          cursor: pointer;
        }
        .faq__chevron {
          flex-shrink: 0;
          color: var(--gold);
          transition: var(--transition);
        }
        .faq__item--open .faq__chevron { transform: rotate(180deg); }
        .faq__answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq__item--open .faq__answer { max-height: 240px; }
        .faq__answer p {
          padding-bottom: 20px;
          font-size: 0.92rem;
          color: var(--text-light);
          line-height: 1.7;
        }
        @media (max-width: 900px) {
          .faq__grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
