import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineShieldCheck } from 'react-icons/hi';
import { SITE } from '../data/site';
import { Reveal, StaggerContainer, StaggerItem } from './animations/Reveal';

const highlights = [
  {
    icon: HiOutlineSparkles,
    title: 'Bespoke Experiences',
    text: 'Every celebration is unique. We design events tailored to your vision, style, and budget.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Passion for Hospitality',
    text: 'Rooted in genuine care, we treat every event as if it were our own family celebration.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Trusted Execution',
    text: 'From venue to vendors, we manage every detail with precision so nothing is left to chance.',
  },
];

export default function About({ premium = false }) {
  const Visual = premium ? motion.div : 'div';
  const visualProps = premium ? {
    initial: { opacity: 0, x: -40, rotateY: 15 },
    whileInView: { opacity: 1, x: 0, rotateY: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  } : {};

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <Visual className={`about__visual ${premium ? 'about__visual-3d' : ''}`} {...visualProps}>
            <div className={`about__frame ${premium ? 'about__frame-3d' : ''}`}>
              <div className="about__image">
                <div className="about__image-inner">
                  <motion.span
                    className="about__monogram"
                    animate={premium ? { scale: [1, 1.03, 1] } : {}}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    KH
                  </motion.span>
                </div>
              </div>
              <div className="about__accent" />
              {premium && (
                <div className="about__floating-badge">
                  <strong>500+</strong>
                  <span>Events Crafted</span>
                </div>
              )}
            </div>
          </Visual>

          <div className="about__content">
            <Reveal>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                Incredible Experience,<br />Exceptional Results
              </h2>
              <p className="section-subtitle">
                Kalav Hospitality, powered by {SITE.tagline}, is a Bangalore-based
                event management company dedicated to creating premium celebrations.
                Whether it&apos;s a corporate conference, an intimate birthday party, or
                a grand wedding — we deliver end-to-end solutions that exceed expectations.
              </p>
              <p className="about__text">
                Based in JP Nagar, we serve clients across Bangalore and beyond.
                Our team brings together creative vision, meticulous planning, and
                flawless on-ground execution to turn your dream event into reality.
              </p>
            </Reveal>

            <StaggerContainer className="about__highlights" stagger={0.15} delay={0.2}>
              {highlights.map(({ icon: Icon, title, text }) => (
                <StaggerItem key={title}>
                  <motion.div
                    className="about__highlight premium-card"
                    whileHover={premium ? { x: 8, transition: { duration: 0.3 } } : {}}
                  >
                    <div className="about__highlight-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Reveal delay={0.3}>
              <Link to="/about" className="btn btn-navy" style={{ marginTop: 32 }}>
                Learn More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .about { background: var(--cream); }
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .about__frame { position: relative; }
        .about__image {
          aspect-ratio: 4/5;
          background: var(--navy);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 60px rgba(30, 45, 62, 0.2);
        }
        .about__image-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, var(--navy-light) 0%, var(--navy) 50%, var(--navy-dark) 100%);
        }
        .about__monogram {
          font-family: var(--font-serif);
          font-size: 8rem;
          font-weight: 700;
          color: rgba(166, 142, 101, 0.25);
          line-height: 1;
        }
        .about__accent {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 60%;
          height: 60%;
          border: 3px solid var(--gold);
          border-radius: 16px;
          z-index: -1;
        }
        .about__text {
          margin-top: 16px;
          color: var(--text-light);
          line-height: 1.8;
        }
        .about__highlights {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .about__highlight {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .about__highlight-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--white);
          color: var(--gold);
          border-radius: 12px;
          box-shadow: var(--shadow-sm);
        }
        .about__highlight h4 {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .about__highlight p {
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .about__grid { grid-template-columns: 1fr; gap: 50px; }
          .about__visual { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
