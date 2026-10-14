import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import { services } from '../../data/services';
import { serviceImages } from '../../data/serviceImages';
import { Reveal } from '../animations/Reveal';

const INTERVAL = 7000;
const DESKTOP_MQ = '(min-width: 969px)';

export default function ServicePanels() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_MQ).matches
  );
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(services[0].slug);
  const panelRefs = useRef({});

  const service = services[active];
  const Icon = service.icon;

  const goTo = useCallback((i) => {
    setActive(i);
    setProgress(0);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || paused) return;
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((prev) => (prev + 1) % services.length);
          return 0;
        }
        return p + 100 / (INTERVAL / 50);
      });
    }, 50);
    return () => clearInterval(tick);
  }, [paused, active, isDesktop]);

  const toggleMobile = (slug) => {
    setMobileOpen((prev) => {
      const next = prev === slug ? null : slug;
      if (next) {
        requestAnimationFrame(() => {
          panelRefs.current[slug]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        });
      }
      return next;
    });
  };

  return (
    <section
      className="create section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <Reveal className="create__header">
          <span className="section-label">What We Create</span>
          <h2 className="section-title">Your Event,<br />Our Craft</h2>
          <p className="create__intro">
            From intimate gatherings to grand celebrations — every event is
            designed with intention, executed with precision.
          </p>
        </Reveal>

        {/* Mobile: inline accordion — tap expands details right here */}
        <div className="create__mobile" aria-label="Services">
          {services.map((s, i) => {
            const SIcon = s.icon;
            const isOpen = mobileOpen === s.slug;
            return (
              <article
                key={s.slug}
                ref={(el) => { panelRefs.current[s.slug] = el; }}
                className={`create__mobile-card ${isOpen ? 'create__mobile-card--open' : ''}`}
              >
                <button
                  type="button"
                  className="create__mobile-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggleMobile(s.slug)}
                >
                  <span className="create__mobile-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="create__mobile-icon"><SIcon size={20} /></span>
                  <span className="create__mobile-trigger-text">
                    <strong>{s.title}</strong>
                    <span>{s.tagline}</span>
                  </span>
                  <HiChevronDown className={`create__mobile-chevron ${isOpen ? 'create__mobile-chevron--open' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="create__mobile-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="create__mobile-panel-inner">
                        <div className="create__mobile-media">
                          <img src={serviceImages[s.slug]} alt={s.title} loading="lazy" />
                        </div>
                        <p>{s.excerpt}</p>
                        <div className="create__mobile-tags">
                          {s.features.map((f) => (
                            <span key={f}>{f}</span>
                          ))}
                        </div>
                        <Link to={s.path} className="create__mobile-cta">
                          Explore Service <HiArrowRight />
                        </Link>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
          <Link to="/services" className="create__all create__all--mobile">
            View All Services <HiArrowRight />
          </Link>
        </div>

        {/* Desktop: side nav + cinematic panel */}
        <div className="create__desktop create__layout">
          <div className="create__left">
            <nav className="create__nav" aria-label="Services">
              {services.map((s, i) => {
                const SIcon = s.icon;
                const isActive = active === i;
                return (
                  <button
                    key={s.slug}
                    type="button"
                    className={`create__nav-item ${isActive ? 'create__nav-item--active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div className="create__nav-progress">
                      {isActive && (
                        <motion.div
                          className="create__nav-progress-bar"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                    <span className="create__nav-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="create__nav-icon"><SIcon size={20} /></span>
                    <div className="create__nav-text">
                      <strong>{s.title}</strong>
                      <span>{s.tagline}</span>
                    </div>
                    <HiArrowRight className="create__nav-arrow" />
                  </button>
                );
              })}
            </nav>

            <Link to="/services" className="create__all">
              View All Services <HiArrowRight />
            </Link>
          </div>

          <div className="create__visual">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="create__visual-bg"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={serviceImages[service.slug]}
                  alt={service.title}
                  className="create__visual-img"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 8, ease: 'linear' }}
                />
                <div className="create__visual-overlay" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${active}`}
                className="create__visual-content"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="create__visual-badge">
                  <Icon size={22} />
                  <span>{service.shortTitle}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <div className="create__visual-tags">
                  {service.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
                <Link to={service.path} className="create__visual-cta">
                  Explore Service <HiArrowRight />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="create__visual-counter">
              <span className="create__visual-current">{String(active + 1).padStart(2, '0')}</span>
              <span className="create__visual-sep">/</span>
              <span>{String(services.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
