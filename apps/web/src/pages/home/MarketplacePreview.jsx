import React from 'react';
import { Disc, Drum, Waves, Music4 } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import { Badge } from '@/components/ui/badge';
import CtaLink from '@/components/common/CtaLink';

const categories = [
  { icon: Drum, name: 'Drum Kits', badge: 'Free & Paid' },
  { icon: Waves, name: 'Sample Packs', badge: 'Free & Paid' },
  { icon: Disc, name: 'Loops', badge: 'Paid' },
  { icon: Music4, name: 'MIDI Packs', badge: 'Free' },
];

const MarketplacePreview = () => (
  <Section
    eyebrow="Digital Marketplace"
    title="Sounds built for creators"
    subtitle="Sound packs, sample packs, drum kits, loops, MIDI packs, and ambient packs — a growing storefront for producers and content creators."
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, i) => (
        <Reveal key={category.name} delay={i * 0.06}>
          <GlassCard variant="flat" className="h-full text-center flex flex-col items-center">
            <category.icon className="w-8 h-8 text-brand-purple-400 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-3">{category.name}</h3>
            <Badge variant="secondary" className="rounded-full">{category.badge}</Badge>
          </GlassCard>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-8 flex">
      <CtaLink to="/marketplace" variant="secondary">
        Browse the Marketplace
      </CtaLink>
    </Reveal>
  </Section>
);

export default MarketplacePreview;
