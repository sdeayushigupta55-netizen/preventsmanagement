import { motion } from 'framer-motion';
import { HiOutlineStar } from 'react-icons/hi';
import { testimonials } from '../../data/testimonials';
import { Reveal } from '../animations/Reveal';

const featured = testimonials[2];

export default function QuoteSpotlight() {
  return (
    <section className="quote-spot section">
      <div className="quote-spot__bg" />
      <div className="container">
        <Reveal>
          <blockquote className="quote-spot__inner">
            <div className="quote-spot__stars">
              {[...Array(5)].map((_, i) => (
                <HiOutlineStar key={i} size={22} />
              ))}
            </div>
            <motion.p
              className="quote-spot__text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              &ldquo;{featured.quote}&rdquo;
            </motion.p>
            <footer>
              <strong>{featured.name}</strong>
              <span>{featured.role}</span>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
