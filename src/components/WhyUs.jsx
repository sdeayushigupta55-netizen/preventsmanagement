import { Link } from 'react-router-dom';

const reasons = [
  { number: '01', title: 'Personalized Approach', text: 'No cookie-cutter templates. Every event is designed around your unique vision and preferences.' },
  { number: '02', title: 'Single Point of Contact', text: 'One dedicated coordinator manages your entire event from first call to final farewell.' },
  { number: '03', title: 'Transparent Budgeting', text: 'Detailed cost breakdowns before any vendor is booked — no surprise expenses.' },
  { number: '04', title: 'Vetted Vendor Network', text: 'Trusted partners for catering, décor, AV, photography, and entertainment across Bangalore.' },
  { number: '05', title: 'Stress-Free Experience', text: 'We handle the logistics so you and your guests can be fully present and enjoy the moment.' },
  { number: '06', title: 'Local Expertise', text: 'Deep knowledge of Bangalore venues, vendors, and cultural traditions for authentic celebrations.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us__grid">
          <div className="why-us__intro">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Your Celebration,<br />Our Commitment
            </h2>
            <p className="section-subtitle">
              We don&apos;t just manage events — we create experiences that leave lasting
              impressions on you and your guests.
            </p>
            <Link to="/contact" className="btn btn-navy">Get in Touch</Link>
          </div>

          <div className="why-us__list">
            {reasons.map((r) => (
              <div key={r.number} className="why-us__item">
                <span className="why-us__number">{r.number}</span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-us { background: var(--cream); }
        .why-us__grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .why-us__intro .btn { margin-top: 32px; }
        .why-us__list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .why-us__item { display: flex; gap: 16px; align-items: flex-start; }
        .why-us__number {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          flex-shrink: 0;
        }
        .why-us__item h4 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .why-us__item p {
          font-size: 0.88rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .why-us__grid { grid-template-columns: 1fr; gap: 50px; }
          .why-us__list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
