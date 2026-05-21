import { useEffect, useState } from 'react';
import { useInView } from './useInView';

export function useCountUp(end: number, duration = 2000, suffix = '') {
  const { ref, isInView } = useInView(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return { ref, count: `${count}${suffix}`, isInView };
}
