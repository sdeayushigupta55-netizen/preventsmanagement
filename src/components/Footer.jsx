import { Link } from 'react-router-dom';
import { SITE, NAV_LINKS, SERVICE_LINKS } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo-light.png" alt="Kalav Hospitality" className="footer__logo" />
            <p>
              Kalav Hospitality by {SITE.tagline} — premium event management
              and end-to-end celebration solutions in Bangalore.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </div>

          <div className="footer__links">
            <h4>Services</h4>
            {SERVICE_LINKS.map((link) => (
              <Link key={link.path} to={link.path}>{link.label}</Link>
            ))}
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <p>
              {SITE.address.line1}<br />
              {SITE.address.line2}<br />
              {SITE.address.city}
            </p>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            {SITE.emails.map((item) => (
              <a key={item.address} href={`mailto:${item.address}`}>
                {item.address}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Kalav Hospitality · {SITE.tagline}. All rights reserved.</p>
          <a href={SITE.websiteUrl} target="_blank" rel="noopener noreferrer">
            {SITE.website}
          </a>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--navy-dark);
          color: rgba(255, 255, 255, 0.65);
          padding: 70px 0 30px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer__logo {
          height: 50px;
          width: auto;
          margin-bottom: 16px;
          background: transparent;
          object-fit: contain;
        }
        .footer__brand p {
          font-size: 0.88rem;
          line-height: 1.7;
          max-width: 280px;
        }
        .footer__links h4,
        .footer__contact h4 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gold-light);
          margin-bottom: 20px;
        }
        .footer__links a,
        .footer__contact a {
          display: block;
          font-size: 0.85rem;
          padding: 6px 0;
          transition: var(--transition);
        }
        .footer__links a:hover,
        .footer__contact a:hover { color: var(--gold-light); }
        .footer__contact p {
          font-size: 0.85rem;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          font-size: 0.78rem;
        }
        .footer__bottom a {
          color: rgba(255, 255, 255, 0.65);
          transition: var(--transition);
        }
        .footer__bottom a:hover { color: var(--gold-light); }
        @media (max-width: 900px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 500px) {
          .footer__grid { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
