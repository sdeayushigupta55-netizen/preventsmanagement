import { motion } from 'framer-motion';
import { HiOutlineStar } from 'react-icons/hi';
import { testimonials } from '../data/testimonials';
import { Reveal, StaggerContainer, StaggerItem } from './animations/Reveal';

export default function Testimonials({ premium = false }) {
  const items = premium ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal className="testimonials__header">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </Reveal>

        <StaggerContainer className="testimonials__grid" stagger={0.12}>
          {items.map((t, i) => (
            <StaggerItem key={t.name}>
              <motion.blockquote
                className="testimonials__card premium-card"
                whileHover={premium ? {
                  y: -8,
                  rotateY: i === 1 ? 0 : (i === 0 ? -2 : 2),
                  transition: { duration: 0.35 },
                } : { y: -4 }}
                style={premium ? { transformStyle: 'preserve-3d' } : {}}
              >
                <div className="testimonials__stars">
                  {[...Array(5)].map((_, j) => (
                    <HiOutlineStar key={j} size={18} />
                  ))}
                </div>
                <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </motion.blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <style>{`
        .testimonials { background: var(--white); }
        .testimonials__header {
          text-align: center;
          margin-bottom: 50px;
        }
        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(${premium ? 4 : 3}, 1fr);
          gap: 30px;
        }
        .testimonials__card {
          padding: 36px;
          background: var(--cream);
          border-radius: 16px;
          border-left: 3px solid var(--gold);
          transition: var(--transition);
        }
        .testimonials__card:hover {
          box-shadow: var(--shadow-md);
        }
        .testimonials__stars {
          display: flex;
          gap: 4px;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .testimonials__quote {
          font-size: 0.95rem;
          color: var(--text);
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 24px;
        }
        .testimonials__card footer strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--navy);
          margin-bottom: 2px;
        }
        .testimonials__card footer span {
          font-size: 0.8rem;
          color: var(--text-light);
        }
        @media (max-width: 1100px) {
          .testimonials__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .testimonials__grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
