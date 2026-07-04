import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll/mount reveal wrapper used across every marketing page for a
 * consistent fade+rise entrance. Falls back to an instant, motion-free
 * render when the user has requested reduced motion.
 */
const Reveal = ({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  duration = 0.6,
  once = true,
  className,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    const Static = as;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
