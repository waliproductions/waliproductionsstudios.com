import React from 'react';
import { Twitch, Youtube, Radio } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import LiveBadge from '@/components/common/LiveBadge';
import CtaLink from '@/components/common/CtaLink';

// Placeholder — no stream is embedded by default. Once a Kick/Twitch/YouTube
// API key is available, swap this block for a live embed and drive
// `isLive`/`platform` from that response.
const isLive = false;

const LiveStreamSection = () => (
  <Section
    eyebrow="Current Livestream"
    title="Join the stream when it's live"
    subtitle="Live gaming and creator content across Kick, Twitch, and YouTube."
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <Reveal>
      <GlassCard variant="strong" className="overflow-hidden p-0">
        <div className="relative flex aspect-video items-center justify-center bg-black/60">
          {/* Future integration point: embed the live Kick/Twitch/YouTube
              player here (iframe) once a channel is confirmed live. */}
          <div className="flex flex-col items-center gap-4 text-center px-6">
            <Radio className="w-12 h-12 text-brand-blue-400" aria-hidden="true" />
            <LiveBadge live={isLive} label={isLive ? 'Live Now' : 'Currently Offline'} />
            <p className="max-w-md text-gray-300">
              No stream is active right now. Check back soon, or follow a platform below to
              get notified the moment Wali Studios goes live.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/10 p-6">
          <CtaLink to="https://kick.com/waliproductions" variant="secondary" icon={Radio}>
            Kick
          </CtaLink>
          <CtaLink to="https://www.twitch.tv/waliproductions" variant="secondary" icon={Twitch}>
            Twitch
          </CtaLink>
          <CtaLink to="https://www.youtube.com/@waliproductionsgaming" variant="secondary" icon={Youtube}>
            YouTube
          </CtaLink>
        </div>
      </GlassCard>
    </Reveal>
  </Section>
);

export default LiveStreamSection;
