import { useState, useCallback } from 'react';

export function useMouseParallax(intensity = 20) {
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform({
      x: x * intensity,
      y: y * intensity,
      rotateX: -y * 12,
      rotateY: x * 12,
    });
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  }, []);

  return { transform, onMouseMove, onMouseLeave };
}
