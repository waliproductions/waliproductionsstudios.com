import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 text-white hover:from-brand-blue-500 hover:to-brand-purple-500 shadow-lg shadow-brand-blue-600/20',
  secondary:
    'glass text-gray-100 hover:bg-white/10 border-white/15',
  ghost:
    'text-brand-blue-400 hover:text-brand-blue-300',
};

/**
 * Pill-shaped call-to-action used for hero/section CTAs. Renders an
 * internal <Link> for app routes or a plain <a> for external URLs,
 * decided automatically from the `to` prop.
 */
const CtaLink = ({ to, children, variant = 'primary', className, icon: Icon, ...props }) => {
  const isExternal = /^https?:\/\//.test(to) || props.href;
  const sharedClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200',
    variants[variant],
    className
  );

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...props}
      >
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <Link to={to} className={sharedClassName} {...props}>
      {children}
      {Icon && <Icon size={16} />}
    </Link>
  );
};

export default CtaLink;
