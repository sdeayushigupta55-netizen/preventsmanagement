import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { services } from '../../data/services';
import { Reveal } from '../animations/Reveal';

const visuals = [
  'linear-gradient(180deg, rgba(15,26,36,0) 0%, rgba(15,26,36,0.85) 100%), linear-gradient(135deg, #1a2836 0%, #2d4560 100%)',
  'linear-gradient(180deg, rgba(15,26,36,0) 0%, rgba(15,26,36,0.85) 100%), linear-gradient(135deg, #241e2e 0%, #3d3450 100%)',
  'linear-gradient(180deg, rgba(15,26,36,0) 0%, rgba(15,26,36,0.85) 100%), linear-gradient(135deg, #2a2218 0%, #6b5840 100%)',
  'linear-gradient(180deg, rgba(15,26,36,0) 0%, rgba(15,26,36,0.85) 100%), linear-gradient(135deg, #142028 0%, #1e3d38 100%)',
];

export default function ServicesRail() {
  return (
    <section className="rail section">
      <div className="container">
        <Reveal className="rail__top">
          <span className="section-label">Our Expertise</span>
          <div className="rail__top-row">
            <h2 className="section-title">Four Pillars of<br />Celebration</h2>
            <p className="rail__desc">
              Drag or scroll to explore each service — every event type gets
              the same premium treatment, tailored to your vision.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="rail__track-wrap">
        <div className="rail__track">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                className="rail__card"
                style={{ background: visuals[i] }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -12 }}
              >
                <Link to={s.path} className="rail__card-inner">
                  <span className="rail__card-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="rail__card-icon"><Icon size={32} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                  <ul className="rail__tags">
                    {s.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <span className="rail__card-link">
                    Discover <HiArrowRight />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
        <div className="rail__fade rail__fade--right" />
      </div>

      <div className="container rail__footer">
        <Link to="/services" className="rail__all">
          View All Services <HiArrowRight />
        </Link>
      </div>
    </section>
  );
}
