import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiPhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { SITE } from '../../data/site';
import { Reveal } from '../animations/Reveal';

export default function HomeClosing() {
  return (
    <section className="closing">
      <div className="container closing__grid">
        <Reveal className="closing__cta">
          <span className="section-label">Ready?</span>
          <h2 className="closing__title">Let&apos;s Create Something<br />Extraordinary</h2>
          <p>Tell us about your event and we&apos;ll craft a proposal tailored to your vision.</p>
          <div className="closing__actions">
            <Link to="/contact" className="heditorial__btn heditorial__btn--fill">
              Get Started
            </Link>
            <Link to="/faq" className="closing__faq-link">View FAQ →</Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="closing__cards">
          <motion.a
            href={`tel:${SITE.phoneRaw}`}
            className="closing__card"
            whileHover={{ y: -4 }}
          >
            <HiPhone size={22} />
            <div>
              <span>Call</span>
              <strong>{SITE.phone}</strong>
            </div>
          </motion.a>
          <motion.div className="closing__card closing__card--email" whileHover={{ y: -4 }}>
            <HiOutlineMail size={22} />
            <div>
              <span>Email</span>
              {SITE.emails.map((item) => (
                <a key={item.address} href={`mailto:${item.address}`} className="closing__email-link">
                  <strong>{item.address}</strong>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div className="closing__card closing__card--static" whileHover={{ y: -4 }}>
            <HiOutlineLocationMarker size={22} />
            <div>
              <span>Visit</span>
              <strong>{SITE.address.line2}, {SITE.address.city}</strong>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
