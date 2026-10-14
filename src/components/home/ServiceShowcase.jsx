import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { services } from '../../data/services';
import { Reveal } from '../animations/Reveal';

const AUTO_INTERVAL = 6000;

const themes = [
  {
    gradient: 'linear-gradient(135deg, #0f1a24 0%, #1e2d3e 45%, #2a4560 100%)',
    orb1: 'rgba(166, 142, 101, 0.35)',
    orb2: 'rgba(42, 63, 84, 0.6)',
    accent: '#c4a97a',
  },
  {
    gradient: 'linear-gradient(135deg, #1a1520 0%, #2a2438 50%, #1e2d3e 100%)',
    orb1: 'rgba(196, 120, 160, 0.2)',
    orb2: 'rgba(166, 142, 101, 0.3)',
    accent: '#e8b4c8',
  },
  {
    gradient: 'linear-gradient(135deg, #1e1810 0%, #2d2418 40%, #1e2d3e 100%)',
    orb1: 'rgba(166, 142, 101, 0.4)',
    orb2: 'rgba(232, 213, 176, 0.15)',
    accent: '#e8d5b0',
  },
  {
    gradient: 'linear-gradient(135deg, #101820 0%, #1e2d3e 60%, #3d5244 100%)',
    orb1: 'rgba(100, 160, 130, 0.2)',
    orb2: 'rgba(166, 142, 101, 0.25)',
    accent: '#a8d4b8',
  },
];

export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const service = services[active];
  const theme = themes[active];
  const Icon = service.icon;

  const goTo = useCallback((index) => {
    setActive(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % services.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (AUTO_INTERVAL / 50));
      });
    }, 50);
    return () => clearInterval(tick);
  }, [paused, active, next]);

  return (
    <section
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <Reveal className="showcase__header">
          <div className="showcase__header-row">
            <div>
              <span className="section-label">The Experience</span>
              <h2 className="section-title">Curated for Every Occasion</h2>
            </div>
            <p className="showcase__header-desc">
              Select a service to explore how we transform visions into
              extraordinary celebrations — each crafted with precision and care.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="showcase__stage">
        <div className="container showcase__stage-inner">
          {/* Left — cinematic panel */}
          <div className="showcase__panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="showcase__panel-bg"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: theme.gradient }}
              />
            </AnimatePresence>

            <div className="showcase__panel-orbs">
              <motion.div
                className="showcase__orb showcase__orb--1"
                animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: theme.orb1 }}
              />
              <motion.div
                className="showcase__orb showcase__orb--2"
                animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ background: theme.orb2 }}
              />
            </div>

            <div className="showcase__panel-grid" />

            <div className="showcase__panel-content">
              <div className="showcase__counter">
                <span className="showcase__counter-current">
                  {String(active + 1).padStart(2, '0')}
                </span>
                <span className="showcase__counter-sep">/</span>
                <span className="showcase__counter-total">
                  {String(services.length).padStart(2, '0')}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="showcase__panel-body"
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="showcase__panel-icon"
                    initial={{ scale: 0.6, rotateY: -30 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Icon size={36} />
                  </motion.div>

                  <h3 className="showcase__panel-title">{service.title}</h3>
                  <p className="showcase__panel-desc">{service.heroDesc}</p>

                  <div className="showcase__features">
                    {service.features.map((f, i) => (
                      <motion.span
                        key={f}
                        className="showcase__feature"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>

                  <Link to={service.path} className="showcase__panel-cta">
                    Explore {service.shortTitle}
                    <HiArrowRight />
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* 3D decorative ring */}
              <div className="showcase__deco-ring">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 200 200" className="showcase__ring-svg">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(166,142,101,0.15)" strokeWidth="1" strokeDasharray="8 12" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="showcase__progress">
              <motion.div
                className="showcase__progress-fill"
                style={{ width: `${progress}%`, background: theme.accent }}
              />
            </div>
          </div>

          {/* Right — service selector */}
          <div className="showcase__nav">
            {services.map((s, i) => {
              const SIcon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.slug}
                  className={`showcase__nav-item ${isActive ? 'showcase__nav-item--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <div className="showcase__nav-indicator">
                    {isActive && (
                      <motion.div
                        className="showcase__nav-indicator-fill"
                        layoutId="showcaseIndicator"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </div>

                  <div className="showcase__nav-icon">
                    <SIcon size={22} />
                  </div>

                  <div className="showcase__nav-text">
                    <span className="showcase__nav-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="showcase__nav-title">{s.title}</span>
                    <span className="showcase__nav-tagline">{s.tagline}</span>
                  </div>

                  <HiArrowRight className="showcase__nav-arrow" />
                </button>
              );
            })}

            <Link to="/services" className="showcase__view-all">
              View All Services <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
