import React from 'react';
import { Gamepad2, Monitor, Radio, Twitch, Youtube } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';
import PlatformLink from '@/components/common/PlatformLink';

const identity = [
  { icon: Gamepad2, title: 'Entertainment', description: 'Gaming gives the audience a place to connect with the fun, personality, and live energy of the brand.' },
  { icon: Radio, title: 'Live Content', description: 'Streaming creates real-time audience connection and supports the wider Wali Studios ecosystem.' },
  { icon: Monitor, title: 'Real Creator Experience', description: 'This side of the brand reinforces that Creator Services is grounded in actual content creation and streaming practice.' },
];

const platforms = [
  { icon: Radio, name: 'Kick', href: 'https://kick.com/waliproductions', description: 'Primary live destination for gaming content and community building.' },
  { icon: Twitch, name: 'Twitch', href: 'https://www.twitch.tv/waliproductions', description: 'Community-driven live streaming with chat and creator interaction.' },
  { icon: Youtube, name: 'YouTube', href: 'https://www.youtube.com/@waliproductionsgaming', description: 'Full VODs, clips, and long-term audience growth.' },
];

const GamingPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Gaming"
      description="Gaming content and live streaming from Wali Studios — Kick, Twitch, and YouTube."
      path="/gaming"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Gaming
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Gaming content, creator energy, and live digital presence.
        </h1>
        <p className="text-lg text-gray-300 leading-8 mb-8">
          The gaming side of Wali Studios is where content, streaming, audience connection,
          and creator identity come together.
        </p>
        <div className="flex flex-wrap gap-4">
          <CtaLink to="https://kick.com/waliproductions">Watch on Kick</CtaLink>
          <CtaLink to="/watch" variant="secondary">All Platforms</CtaLink>
        </div>
      </Reveal>

      <Section eyebrow="Creator Brand" title="What the gaming lane represents">
        <div className="grid gap-6 md:grid-cols-3">
          {identity.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <item.icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-7">{item.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Platforms" title="Where to watch">
        <div className="grid gap-6 lg:grid-cols-3">
          {platforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.07}>
              <PlatformLink {...platform} cta={`Visit ${platform.name}`} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="More Than Gameplay" title="Built from real systems">
        <Reveal>
          <GlassCard variant="flat">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">Built from real systems</h3>
                <p className="text-gray-300 leading-8">
                  The gaming side reflects real streaming, production, audio, and creator
                  workflow experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">Connected to the service side</h3>
                <p className="text-gray-300 leading-8">
                  Visitors who like the content can also see the technical and creative
                  expertise behind it through Creator Services.
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      <Reveal>
        <GlassCard variant="strong" className="text-center p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">Next Step</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Want help building your own creator setup?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
            The gaming page shows the live creator side of the brand. Creator Services
            shows how Wali Studios can help others improve their own content systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink to="/services/streaming">Creator Services</CtaLink>
            <CtaLink to="/contact" variant="secondary">Contact</CtaLink>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default GamingPage;
