import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import { SITE } from '../../data/site';
import { heroFrames } from '../../data/heroFrames';

const words = ['Crafting', 'Unforgettable', 'Celebrations'];

export default function HeroEditorial() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section className="heditorial" ref={ref} onMouseMove={onMouseMove}>
      <div className="heditorial__aurora" />
      <div className="heditorial__grain" />

      {heroFrames.map((f) => (
        <motion.div
          key={f.label}
          className="heditorial__frame-wrap"
          style={{
            top: f.top,
            bottom: f.bottom,
            left: f.left,
            right: f.right,
            x: mouse.x * f.parallax,
            y: mouse.y * f.parallax,
          }}
          initial={{ opacity: 0, scale: 0.75, rotate: f.rotate - 12 }}
          animate={{ opacity: 1, scale: 1, rotate: f.rotate }}
          transition={{ duration: 1.1, delay: 0.5 + f.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={f.path} className="heditorial__frame">
            <div className="heditorial__frame-border" />
            <img
              src={f.image}
              alt={`${f.label} events by Kalav Hospitality`}
              className="heditorial__frame-img"
              loading="eager"
            />
            <div className="heditorial__frame-overlay" />
            <span className="heditorial__frame-label">{f.label}</span>
            <span className="heditorial__frame-arrow">→</span>
          </Link>
        </motion.div>
      ))}

      <motion.div className="heditorial__center" style={{ y: yText, opacity, scale }}>
        <motion.p
          className="heditorial__eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.25em' }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Kalav Hospitality · Bangalore
        </motion.p>

        <h1 className="heditorial__headline">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className={i === 1 ? 'heditorial__word-gold' : ''}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="heditorial__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          End-to-end event management for corporate gatherings, weddings,
          birthdays, candlelight dinners, and every celebration in between.
        </motion.p>

        <motion.div
          className="heditorial__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/contact" className="heditorial__btn heditorial__btn--fill">
            Plan Your Event <HiArrowRight />
          </Link>
          <a href={`tel:${SITE.phoneRaw}`} className="heditorial__btn heditorial__btn--ghost">
            <HiPhone /> Call Us
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="heditorial__bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="heditorial__stat">
          <strong>500+</strong><span>Events</span>
        </div>
        <div className="heditorial__stat">
          <strong>5</strong><span>Services</span>
        </div>
        <div className="heditorial__stat">
          <strong>100%</strong><span>End-to-End</span>
        </div>
        <div className="heditorial__scroll-hint">
          <span>Scroll to explore</span>
          <motion.div
            className="heditorial__scroll-dot"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
