import React from 'react';
import { Compass, Heart, ShieldCheck, Sparkles, Map, BookOpen } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const coreValues = [
  { icon: ShieldCheck, title: 'Integrity', description: 'Doing things the right way, even when no one is watching — in business, in content, and in community.' },
  { icon: Sparkles, title: 'Excellence', description: 'Premium quality across every release, stream, and service, not just the polished moments.' },
  { icon: Heart, title: 'Creativity', description: 'Original work built from real perspective — music, gameplay, and design that feels like Wali Studios.' },
  { icon: Compass, title: 'Faith-Rooted Character', description: "Christian values shape the standard of integrity and excellence behind the brand, without defining what it visually is." },
];

const roadmap = [
  { title: 'Now', description: 'Gaming livestreams, original music releases, and creator technical services.' },
  { title: 'Next', description: 'Digital marketplace launch, community membership perks, and expanded content series.' },
  { title: 'Future', description: 'Merch store, creator dashboard, member portal, and platform integrations across Discord, Spotify, and Apple Music.' },
];

const AboutPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="About"
      description="The history, mission, vision, and values behind Wali Studios — the entertainment division of Wali Productions LLC."
      path="/about"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          About Wali Studios
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Built to create with excellence, and to serve with purpose.
        </h1>
        <p className="text-lg text-gray-300 leading-8">
          Wali Studios is the entertainment division of Wali Productions LLC — where
          gaming, music, and creator services come together under one brand.
        </p>
      </Reveal>

      <Section eyebrow="History" title="How it started">
        <Reveal>
          <GlassCard variant="flat">
            <BookOpen className="w-9 h-9 text-brand-blue-400 mb-5" aria-hidden="true" />
            <p className="text-gray-300 leading-8">
              Wali Productions LLC began as a hands-on creator services business, helping
              streamers, churches, and small businesses build better technical systems.
              That real-world experience became the foundation for Wali Studios — the
              entertainment side of the brand, built by an actual creator rather than a
              theoretical one.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section eyebrow="Mission &amp; Vision" title="Why Wali Studios exists">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard variant="flat" className="h-full">
              <h3 className="text-2xl font-semibold text-white mb-4">Mission</h3>
              <p className="text-gray-300 leading-8">
                Create premium gaming, music, livestreaming, and digital entertainment that
                reflects excellence, integrity, and creativity in every release.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard variant="gradient" className="h-full">
              <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
              <p className="text-gray-300 leading-8">
                A self-sustaining entertainment brand — music, gaming, community, and
                marketplace working together to support creators and reach audiences well
                beyond where it started.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Core Values" title="What guides the work">
        <div className="grid gap-6 sm:grid-cols-2">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <value.icon className="w-8 h-8 text-brand-purple-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-7">{value.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Creator Philosophy" title="Built by a creator, for creators">
        <Reveal>
          <GlassCard variant="flat">
            <p className="text-gray-300 leading-8">
              Every service and every piece of content comes from real, hands-on creator
              experience. That perspective shapes how Wali Studios streams, releases music,
              and helps other creators strengthen their own setups — practical, not
              theoretical.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section eyebrow="Future Roadmap" title="Where Wali Studios is headed">
        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map((phase, i) => (
            <Reveal key={phase.title} delay={i * 0.08}>
              <GlassCard variant="flat" className="h-full">
                <Map className="w-7 h-7 text-brand-blue-400 mb-4" aria-hidden="true" />
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{phase.title}</p>
                <p className="text-gray-300 leading-7">{phase.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Reveal>
        <GlassCard variant="strong" className="text-center p-10 md:p-14">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-5">
            Want to be part of the next chapter?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink to="/community">Join the Community</CtaLink>
            <CtaLink to="/contact" variant="secondary">Get in Touch</CtaLink>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default AboutPage;
