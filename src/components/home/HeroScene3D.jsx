import { motion } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';

export default function HeroScene3D() {
  const { transform, onMouseMove, onMouseLeave } = useMouseParallax(24);

  return (
    <div
      className="hero-scene"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="hero-scene__stage"
        style={{
          transform: `perspective(1200px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="hero-scene__ring hero-scene__ring--outer"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner counter-rotating ring */}
        <motion.div
          className="hero-scene__ring hero-scene__ring--inner"
          animate={{ rotateZ: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating orbs */}
        <motion.div
          className="hero-scene__orb hero-scene__orb--1"
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-scene__orb hero-scene__orb--2"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="hero-scene__orb hero-scene__orb--3"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Main 3D card with logo */}
        <motion.div
          className="hero-scene__card"
          style={{
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero-scene__card-shine" />
          <div className="hero-scene__card-inner">
            <img src="/logo.png" alt="" className="hero-scene__logo" />
            <div className="hero-scene__card-glow" />
          </div>
        </motion.div>

        {/* Floating glass chips */}
        <motion.div
          className="hero-scene__chip hero-scene__chip--1"
          animate={{ y: [0, -8, 0], rotateZ: [0, 3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>Weddings</span>
        </motion.div>
        <motion.div
          className="hero-scene__chip hero-scene__chip--2"
          animate={{ y: [0, 10, 0], rotateZ: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        >
          <span>Corporate</span>
        </motion.div>
        <motion.div
          className="hero-scene__chip hero-scene__chip--3"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <span>Celebrations</span>
        </motion.div>
      </div>
    </div>
  );
}
