import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiPhone } from 'react-icons/hi';
import { SITE } from '../data/site';
import { Reveal } from './animations/Reveal';

export default function CTA({
  title = 'Planning An Event?',
  description = 'Launch your celebration with Kalav Hospitality. We are your trusted partner for premium, end-to-end event management in Bangalore.',
  primaryLabel = 'Get Started',
  primaryLink = '/contact',
}) {
  return (
    <section className="cta-banner section">
      <div className="container">
        <Reveal>
          <motion.div
            className="cta-banner__inner"
            whileInView={{
              background: [
                'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
                'linear-gradient(135deg, var(--navy-light) 0%, var(--navy) 100%)',
                'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="cta-banner__actions">
              <Link to={primaryLink} className="btn btn-primary hero__btn-glow">{primaryLabel}</Link>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline">
                <HiPhone /> {SITE.phone}
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
