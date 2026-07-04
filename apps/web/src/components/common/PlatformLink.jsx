import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';

/**
 * Platform/social card used on Watch, Music, Gaming, and Community pages —
 * icon, name, short description, and an outbound link.
 */
const PlatformLink = ({ icon: Icon, name, description, href, cta = 'Visit', className }) => (
  <GlassCard variant="flat" className={cn('flex flex-col', className)}>
    {Icon && <Icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />}
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    {description && <p className="text-gray-300 leading-7 mb-5 flex-1">{description}</p>}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-brand-blue-400 font-semibold hover:text-brand-blue-300 transition"
    >
      {cta}
      <ArrowRight size={18} />
    </a>
  </GlassCard>
);

export default PlatformLink;
