import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Reveal, StaggerContainer, StaggerItem } from './animations/Reveal';

export default function Services({ premium = false }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="services__header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            End-to-end solutions for your celebrations — explore the passion we bring
            to every event we craft.
          </p>
        </Reveal>

        <StaggerContainer className="services__grid" stagger={0.12}>
          {services.map((service, i) => (
            <StaggerItem key={service.title}>
              <motion.article
                className={`services__card ${premium ? 'services__card-3d' : ''}`}
                whileHover={premium ? {
                  y: -10,
                  rotateX: 3,
                  rotateY: i % 2 === 0 ? -4 : 4,
                  transition: { duration: 0.35 },
                } : { y: -4 }}
                style={premium ? { transformStyle: 'preserve-3d' } : {}}
              >
                <div className="services__card-icon">
                  <service.icon size={32} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.excerpt}</p>
                <ul className="services__card-features">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link to={service.path} className="services__card-link">
                  Learn More →
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .services {
          background: var(--navy);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .services::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 0% 50%, rgba(166, 142, 101, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 50%, rgba(166, 142, 101, 0.06) 0%, transparent 50%);
          pointer-events: none;
        }
        .services__header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        .services__header .section-title { color: var(--white); }
        .services__header .section-subtitle {
          color: rgba(255, 255, 255, 0.65);
          margin: 0 auto;
        }
        .services__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          position: relative;
        }
        .services__card {
          padding: 40px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(166, 142, 101, 0.2);
          border-radius: 4px;
          transition: var(--transition);
        }
        .services__card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--gold);
        }
        .services__card-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(166, 142, 101, 0.15);
          color: var(--gold-light);
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .services__card-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .services__card-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .services__card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .services__card-features li {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          background: rgba(166, 142, 101, 0.12);
          color: var(--gold-light);
          border-radius: 50px;
          letter-spacing: 0.03em;
        }
        .services__card-link {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-light);
          transition: var(--transition);
        }
        .services__card-link:hover { color: var(--white); }
        @media (max-width: 768px) {
          .services__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
