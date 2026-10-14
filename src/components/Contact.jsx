import { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { SITE } from '../data/site';
import { submitEnquiry } from '../utils/submitEnquiry';

const emptyForm = { name: '', email: '', phone: '', event: '', message: '' };

export default function Contact({ standalone = false }) {
  const [form, setForm] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      await submitEnquiry(form, honeypot);
      setStatus('success');
      setForm(emptyForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        {!standalone && (
          <div className="contact__banner">
            <h2 className="contact__banner-title">Planning An Event?</h2>
            <p className="contact__banner-text">
              Launch your celebration with Kalav Hospitality. We are your trusted
              partner for premium, end-to-end event management in Bangalore.
            </p>
          </div>
        )}

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon"><HiOutlinePhone size={22} /></div>
              <div>
                <h4>Call Us</h4>
                <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon"><HiOutlineMail size={22} /></div>
              <div>
                <h4>Write To Us</h4>
                {SITE.emails.map((item) => (
                  <a key={item.address} href={`mailto:${item.address}`}>
                    {item.address}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon"><HiOutlineLocationMarker size={22} /></div>
              <div>
                <h4>Visit Us</h4>
                <p>
                  {SITE.address.line1},<br />
                  {SITE.address.line2},<br />
                  {SITE.address.city}
                </p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <h3>Send Us a Message</h3>
            {status === 'success' ? (
              <div className="contact__success">
                <p>Thank you! Your enquiry was sent to {SITE.email}. We&apos;ll get back to you soon.</p>
                <button type="button" className="contact__success-reset" onClick={resetForm}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="contact__honeypot" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>
                {status === 'error' ? (
                  <div className="contact__error" role="alert">
                    {errorMessage}
                  </div>
                ) : null}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="7760565100" />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="event">Event Type</label>
                    <select id="event" name="event" required value={form.event} onChange={handleChange}>
                      <option value="">Select event type</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Marriage Celebration">Marriage Celebration</option>
                      <option value="Candlelight Dinner">Candlelight Dinner</option>
                      <option value="End-to-End Solution">End-to-End Solution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Tell us about your event</label>
                  <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} placeholder="Date, guest count, venue preference..." />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact {
          background: var(--white);
        }
        .contact__banner {
          text-align: center;
          padding: 60px 40px;
          background: var(--navy);
          border-radius: 4px;
          margin-bottom: 60px;
        }
        .contact__banner-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 600;
          color: var(--white);
          margin-bottom: 12px;
        }
        .contact__banner-text {
          color: rgba(255, 255, 255, 0.65);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
        }
        .contact__info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .contact__info-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .contact__info-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
          color: var(--gold);
          border-radius: 4px;
        }
        .contact__info-item h4 {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }
        .contact__info-item a {
          display: block;
          font-size: 0.98rem;
          font-weight: 500;
          color: var(--navy);
          transition: var(--transition);
          line-height: 1.5;
        }
        .contact__info-item a + a { margin-top: 4px; }
        .contact__info-item a:hover { color: var(--gold); }
        .contact__info-item p {
          font-size: 0.95rem;
          color: var(--text-light);
          line-height: 1.7;
        }
        .contact__form {
          padding: 40px;
          background: var(--cream);
          border-radius: 4px;
        }
        .contact__form h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 28px;
        }
        .contact__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .contact__field {
          margin-bottom: 20px;
        }
        .contact__field label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 8px;
        }
        .contact__field input,
        .contact__field select,
        .contact__field textarea {
          width: 100%;
          padding: 12px 16px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--navy);
          background: var(--white);
          border: 1px solid rgba(30, 45, 62, 0.12);
          border-radius: 4px;
          transition: var(--transition);
          outline: none;
        }
        .contact__field input:focus,
        .contact__field select:focus,
        .contact__field textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(166, 142, 101, 0.15);
        }
        .contact__field textarea { resize: vertical; }
        .contact__submit { width: 100%; justify-content: center; margin-top: 8px; }
        .contact__honeypot {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        .contact__error {
          padding: 14px 16px;
          margin-bottom: 20px;
          background: rgba(180, 60, 60, 0.08);
          border: 1px solid rgba(180, 60, 60, 0.25);
          color: #8b2e2e;
          border-radius: 4px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .contact__success {
          padding: 24px;
          background: rgba(166, 142, 101, 0.1);
          color: var(--navy);
          border-radius: 4px;
          text-align: center;
          font-weight: 500;
        }
        .contact__success p { margin-bottom: 16px; line-height: 1.6; }
        .contact__success-reset {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold-dark);
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .contact__success-reset:hover { color: var(--navy); }
        .contact__submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        @media (max-width: 900px) {
          .contact__grid { grid-template-columns: 1fr; }
          .contact__form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
