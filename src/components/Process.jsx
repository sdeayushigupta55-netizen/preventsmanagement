import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineColorSwatch, HiOutlineCog } from 'react-icons/hi';
import { Reveal, StaggerContainer, StaggerItem } from './animations/Reveal';

const stages = [
  {
    icon: HiOutlineLightBulb,
    phase: 'Create',
    tagline: 'Vision & Strategy',
    items: [
      'Event Conceptualization',
      'Creative Direction',
      'Theme & Storytelling',
      'Budget Planning',
      'Objective Setting',
    ],
  },
  {
    icon: HiOutlineColorSwatch,
    phase: 'Design',
    tagline: 'Look & Feel',
    items: [
      'Custom Décor & Styling',
      'Floral Arrangements',
      'Lighting Design',
      'Invitation & Collateral',
      'Venue Styling',
    ],
  },
  {
    icon: HiOutlineCog,
    phase: 'Produce',
    tagline: 'Flawless Execution',
    items: [
      'Vendor Coordination',
      'Catering Management',
      'Audio Visual Setup',
      'On-Ground Management',
      'Guest Experience',
    ],
  },
];

export default function Process({ premium = false }) {
  return (
    <section id="process" className="section process">
      <div className="container">
        <Reveal className="process__header">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Full Range of Work</h2>
          <p className="section-subtitle">
            Every event we deliver moves through three stages — from the first creative
            spark to flawless on-ground execution. Here is what each stage covers.
          </p>
        </Reveal>

        <StaggerContainer className={`process__grid ${premium ? 'process__grid-premium' : ''}`} stagger={0.15}>
          {stages.map((stage, i) => (
            <StaggerItem key={stage.phase}>
              <motion.div
                className="process__card premium-card"
                whileHover={premium ? {
                  y: -12,
                  rotateX: 4,
                  rotateY: i === 1 ? 0 : (i === 0 ? -3 : 3),
                  boxShadow: '0 24px 48px rgba(30, 45, 62, 0.12)',
                  transition: { duration: 0.4 },
                } : { y: -6 }}
                style={premium ? { transformStyle: 'preserve-3d' } : {}}
              >
                <div className="process__card-number">0{i + 1}</div>
                <motion.div
                  className="process__card-icon"
                  whileHover={premium ? { scale: 1.1, rotate: 5 } : {}}
                >
                  <stage.icon size={28} />
                </motion.div>
                <h3 className="process__card-phase">{stage.phase}</h3>
                <p className="process__card-tagline">{stage.tagline}</p>
                <ul className="process__card-list">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {premium && (
          <Reveal delay={0.2} className="process__cta-wrap">
            <Link to="/process" className="btn btn-navy">Explore Full Process</Link>
          </Reveal>
        )}
      </div>

      <style>{`
        .process { background: var(--white); }
        .process__header {
          text-align: center;
          margin-bottom: 60px;
        }
        .process__header .section-subtitle { margin: 0 auto; }
        .process__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .process__card {
          position: relative;
          padding: 40px 32px;
          background: var(--cream);
          border-radius: 16px;
          border-top: 3px solid var(--gold);
          transition: var(--transition);
        }
        .process__card-number {
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 700;
          color: rgba(166, 142, 101, 0.12);
          line-height: 1;
        }
        .process__card-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy);
          color: var(--gold-light);
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .process__card-phase {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .process__card-tagline {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .process__card-list li {
          font-size: 0.9rem;
          color: var(--text-light);
          padding: 8px 0;
          border-bottom: 1px solid rgba(30, 45, 62, 0.06);
          position: relative;
          padding-left: 16px;
        }
        .process__card-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          background: var(--gold);
          border-radius: 50%;
          transform: translateY(-50%);
        }
        .process__card-list li:last-child { border-bottom: none; }
        .process__cta-wrap { text-align: center; margin-top: 48px; }
        @media (max-width: 900px) {
          .process__grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
