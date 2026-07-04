import React from 'react';
import { Gamepad2, Swords, Trophy } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const highlights = [
  {
    icon: Gamepad2,
    title: 'Live Gameplay',
    description: 'Real-time streams across Kick, Twitch, and YouTube with genuine creator energy.',
  },
  {
    icon: Swords,
    title: 'Content Series',
    description: 'Recurring formats, clips, and highlight reels built for long-term audience growth.',
  },
  {
    icon: Trophy,
    title: 'Creator Identity',
    description: 'The real, hands-on experience behind every technical service Wali Studios offers.',
  },
];

const GamingShowcase = () => (
  <Section
    eyebrow="Gaming"
    title="Where the brand comes to life"
    subtitle="Entertainment, competition, and community — the gaming side of Wali Studios is the live, unscripted heart of the brand."
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="grid gap-6 md:grid-cols-3">
      {highlights.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <GlassCard variant="flat" className="h-full">
            <item.icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 leading-7">{item.description}</p>
          </GlassCard>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-8 flex">
      <CtaLink to="/gaming" variant="secondary">
        Enter the Gaming Hub
      </CtaLink>
    </Reveal>
  </Section>
);

export default GamingShowcase;
