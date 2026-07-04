import React from 'react';
import { Music, Disc3, Radio } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

// Placeholder catalog — wire to Spotify/Apple Music/Bandcamp APIs once
// credentials are available (see MusicPage.jsx for the full future-hooks list).
const releases = [
  { title: 'Featured Single', meta: 'Latest Release', icon: Disc3 },
  { title: 'Studio Sessions', meta: 'Playlist', icon: Radio },
  { title: 'The Catalog', meta: 'Full Discography', icon: Music },
];

const MusicShowcase = () => (
  <Section
    eyebrow="Music"
    title="Original sound, real purpose"
    subtitle="Music built from conviction and artistry — a bridge between the brand and the people who support it."
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="grid gap-6 md:grid-cols-3">
      {releases.map((release, i) => (
        <Reveal key={release.title} delay={i * 0.08}>
          <GlassCard variant="gradient" className="h-full flex flex-col">
            <release.icon className="w-8 h-8 text-brand-purple-400 mb-6" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{release.meta}</p>
            <h3 className="text-xl font-semibold text-white">{release.title}</h3>
          </GlassCard>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-8 flex">
      <CtaLink to="/music" variant="secondary">
        Listen &amp; Support
      </CtaLink>
    </Reveal>
  </Section>
);

export default MusicShowcase;
