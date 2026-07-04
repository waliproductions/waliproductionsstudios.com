import React from 'react';
import { Youtube, Twitch, Radio, Bell } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';
import LiveBadge from '@/components/common/LiveBadge';
import StreamEmbedPlaceholder from '@/components/common/StreamEmbedPlaceholder';

const platforms = [
  {
    key: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/@waliproductionsgaming',
    description: 'Full VODs, gaming series, and long-form content built for long-term discovery.',
  },
  {
    key: 'kick',
    name: 'Kick',
    icon: Radio,
    href: 'https://kick.com/waliproductions',
    description: 'Primary live destination for real-time gaming and creator streams.',
  },
  {
    key: 'twitch',
    name: 'Twitch',
    icon: Twitch,
    href: 'https://www.twitch.tv/waliproductions',
    description: 'Community-driven live streaming with chat, emotes, and creator interaction.',
  },
];

const WatchPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Watch"
      description="Watch Wali Studios live on YouTube, Kick, and Twitch — gaming streams, VODs, and creator content."
      path="/watch"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Watch
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Every stream, every platform, one place to watch.
        </h1>
        <p className="text-lg text-gray-300 leading-8 mb-6">
          Wali Studios streams across YouTube, Kick, and Twitch. Follow on your platform of
          choice to get notified the moment a broadcast goes live.
        </p>
        <LiveBadge live={false} />
      </Reveal>

      <Section
        eyebrow="Platforms"
        title="Watch on your platform of choice"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {platforms.map((platform, i) => (
            <Reveal key={platform.key} delay={i * 0.08}>
              <GlassCard variant="flat" className="flex h-full flex-col gap-5">
                <StreamEmbedPlaceholder icon={platform.icon} label={`${platform.name} embed — connects once live`} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 leading-7 mb-5">{platform.description}</p>
                  <CtaLink to={platform.href} variant="secondary" icon={platform.icon}>
                    Follow on {platform.name}
                  </CtaLink>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Never Miss a Stream" title="Get notified when we go live">
        <Reveal>
          <GlassCard variant="gradient" className="flex flex-col items-center gap-5 p-10 text-center md:p-14">
            <Bell className="w-10 h-10 text-brand-blue-400" aria-hidden="true" />
            <p className="max-w-xl text-gray-300 leading-8">
              {/* Future integration point: PocketBase-backed email/Discord
                  notification signup for stream alerts. */}
              Live-alert signup is coming soon. In the meantime, follow any platform above
              or join the Discord community for stream announcements.
            </p>
            <CtaLink to="/community">Join the Community</CtaLink>
          </GlassCard>
        </Reveal>
      </Section>
    </div>
  </div>
);

export default WatchPage;
