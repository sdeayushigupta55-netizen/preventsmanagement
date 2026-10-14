import { motion } from 'framer-motion';

const items = [
  'Corporate Events',
  'Wedding Planning',
  'Birthday Celebrations',
  'End-to-End Solutions',
  'Premium Décor',
  'Venue Management',
  'Luxury Catering',
  'Flawless Execution',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-strip__fade marquee-strip__fade--left" />
      <div className="marquee-strip__fade marquee-strip__fade--right" />
      <motion.div
        className="marquee-strip__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-strip__item">
            <span className="marquee-strip__dot" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
