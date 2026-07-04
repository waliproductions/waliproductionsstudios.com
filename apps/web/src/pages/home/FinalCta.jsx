import React from 'react';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const FinalCta = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
    <Reveal>
      <GlassCard variant="gradient" className="text-center p-10 md:p-16">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Let's Connect
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto">
          Whatever brought you here, Wali Studios is built to help you go further.
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
          Watch the streams, explore the music, browse the marketplace, or reach out
          directly — there's a place for you here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaLink to="/watch">Start Watching</CtaLink>
          <CtaLink to="/contact" variant="secondary">Contact Us</CtaLink>
        </div>
      </GlassCard>
    </Reveal>
  </section>
);

export default FinalCta;
