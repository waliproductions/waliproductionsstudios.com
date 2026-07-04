import React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'glass shadow-xl',
  strong: 'glass-strong shadow-2xl',
  gradient: 'glass-strong shadow-2xl bg-gradient-to-br from-brand-blue-600/15 via-transparent to-brand-purple-600/15',
  flat: 'bg-white/5 border border-white/10',
};

/**
 * Base glass surface used for cards, panels, and CTA blocks throughout
 * the site. Wraps arbitrary content in a rounded, blurred, bordered shell.
 */
const GlassCard = React.forwardRef(
  ({ as = 'div', variant = 'default', className, children, ...props }, ref) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        className={cn('rounded-3xl p-6 md:p-8', variants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
GlassCard.displayName = 'GlassCard';

export default GlassCard;
