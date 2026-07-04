import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import CtaLink from '@/components/common/CtaLink';
import LiveBadge from '@/components/common/LiveBadge';
import heroBg from '@/assets/hero-bg.jpg';

// Placeholder — replace with a live PocketBase/Twitch/Kick API check that
// flips this to `true` and supplies a real title when a stream goes live.
const isCurrentlyLive = false;

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          loading="eager"
          className={`h-full w-full object-cover opacity-30 ${prefersReducedMotion ? '' : 'animate-slow-zoom'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Wali Productions LLC &middot; Entertainment Division
            </span>
            <LiveBadge live={isCurrentlyLive} label={isCurrentlyLive ? 'Live Now' : 'Offline'} />
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-white mb-6">
            Gaming, music, and{' '}
            <span className="text-gradient-brand">live entertainment</span>{' '}
            built with purpose.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            Wali Studios creates premium gaming content, original music, and livestreaming
            experiences — crafted with excellence, creativity, and integrity at the core.
          </p>

          <div className="flex flex-wrap gap-4">
            <CtaLink to="/watch" icon={Play}>
              Watch Live
            </CtaLink>
            <CtaLink to="/music" variant="secondary" icon={ArrowRight}>
              Explore the Music
            </CtaLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
