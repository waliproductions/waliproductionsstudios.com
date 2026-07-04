import React from 'react';
import { Users, Heart, ArrowRight } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const CommunitySupportCta = () => (
  <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal>
        <GlassCard variant="flat" className="h-full">
          <Users className="w-9 h-9 text-brand-blue-400 mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            Discord, events, announcements, and creator spotlights — connect with other
            listeners and viewers who follow Wali Studios.
          </p>
          <CtaLink to="/community" variant="secondary" icon={ArrowRight}>
            Visit the Community
          </CtaLink>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.08}>
        <GlassCard variant="gradient" className="h-full">
          <Heart className="w-9 h-9 text-brand-crimson-400 mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Support the Mission
          </h2>
          <p className="text-gray-300 leading-8 mb-6">
            Every stream, release, and pack sold helps fund the next project. Support
            directly through Patreon or by picking up something from the catalog.
          </p>
          <CtaLink to="https://www.patreon.com/c/WaliProductionsLLC" icon={ArrowRight}>
            Support on Patreon
          </CtaLink>
        </GlassCard>
      </Reveal>
    </div>
  </Section>
);

export default CommunitySupportCta;
