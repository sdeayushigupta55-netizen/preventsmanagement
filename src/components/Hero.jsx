import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import { SITE } from '../data/site';
import HeroScene3D from './home/HeroScene3D';
import CountUp from './animations/CountUp';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__mesh">
        <div className="hero__mesh-animated" />
      </div>
      <div className="hero__grid-lines" />

      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="hero__layout">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <span className="hero__badge-pulse" />
            Premium Event Management · Bangalore
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
            Crafting Unforgettable
            <span className="hero__title-accent"> Celebrations</span>
          </motion.h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            Kalav Hospitality delivers end-to-end event solutions — from corporate
            gatherings and birthday celebrations to grand wedding affairs. We handle
            every detail so you can be fully present in your moment.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
          >
            <Link to="/contact" className="btn btn-primary hero__btn-glow">
              Start Planning <HiArrowRight />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline">
              <HiPhone /> {SITE.phone}
            </a>
          </motion.div>

          <motion.div
            className="hero__stats-glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            <div className="hero__stat">
              <strong><CountUp end={500} suffix="+" /></strong>
              <span>Events Delivered</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong><CountUp end={100} suffix="%" /></strong>
              <span>End-to-End Solutions</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>JP Nagar</strong>
              <span>Bangalore Based</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          <HeroScene3D />
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
