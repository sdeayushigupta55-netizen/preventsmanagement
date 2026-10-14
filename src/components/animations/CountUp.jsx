import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CountUp({ end, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {typeof end === 'number' ? count : end}{suffix}
    </motion.span>
  );
}
