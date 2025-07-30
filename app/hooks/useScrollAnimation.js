import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 1 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return {
    ref,
    isInView,
    animations: {
      fadeInUp,
      fadeIn,
      scaleIn,
      slideInLeft,
      slideInRight
    }
  };
};