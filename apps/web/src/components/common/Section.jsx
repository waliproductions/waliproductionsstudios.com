import React from 'react';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

/**
 * Consistent section shell: eyebrow + heading + optional subtitle,
 * followed by arbitrary content. Used on every page to keep vertical
 * rhythm and typography hierarchy uniform.
 */
const Section = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  headingClassName,
  as = 'section',
  children,
  id,
}) => {
  const Wrapper = as;
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Wrapper id={id} className={cn('mb-16 md:mb-24', className)}>
      {(eyebrow || title || subtitle) && (
        <Reveal className={cn('mb-8 md:mb-10 max-w-3xl', alignment, align === 'center' && 'flex flex-col items-center')}>
          {eyebrow && (
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className={cn('font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight', headingClassName)}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </Wrapper>
  );
};

export default Section;
