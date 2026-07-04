import React from 'react';
import { MessageCircle, Heart, Star, Calendar, Megaphone, Users } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const benefits = [
  { icon: Star, title: 'Creator Benefits', description: 'Early access to releases, packs, and behind-the-scenes content for supporters.' },
  { icon: Calendar, title: 'Events', description: 'Community game nights, listening parties, and live Q&A sessions.' },
  { icon: Megaphone, title: 'Announcements', description: 'First look at new releases, streams, and marketplace drops.' },
  { icon: Users, title: 'Creator Spotlights', description: 'Recognizing community members and collaborators building alongside Wali Studios.' },
];

const CommunityPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Community"
      description="Join the Wali Studios community — Discord, Patreon membership, events, announcements, and creator spotlights."
      path="/community"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Community
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          A place to belong, not just follow.
        </h1>
        <p className="text-lg text-gray-300 leading-8">
          Wali Studios is built with its audience, not just for them. Join the Discord,
          support through Patreon, and be part of what comes next.
        </p>
      </Reveal>

      <Section eyebrow="Connect" title="Where the community lives">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard variant="flat" className="h-full">
              <MessageCircle className="w-9 h-9 text-brand-blue-400 mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-white mb-4">Discord</h3>
              <p className="text-gray-300 leading-8 mb-6">
                The main hub for conversation, stream alerts, announcements, and direct
                connection with other supporters.
              </p>
              <CtaLink to="https://discord.gg/BhG9sZEA">Join the Discord</CtaLink>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard variant="gradient" className="h-full">
              <Heart className="w-9 h-9 text-brand-crimson-400 mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-white mb-4">Patreon Membership</h3>
              <p className="text-gray-300 leading-8 mb-6">
                Direct support that funds new music, gaming content, and marketplace releases,
                with membership perks for supporters.
              </p>
              <CtaLink to="https://www.patreon.com/c/WaliProductionsLLC">Become a Member</CtaLink>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="What You Get" title="Built for the people who show up">
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <benefit.icon className="w-8 h-8 text-brand-purple-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-7">{benefit.description}</p>
                {/* Future integration point: pull live event/announcement
                    data from PocketBase once the community CMS collections exist. */}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next Step" title="Ready to join in?">
        <Reveal>
          <GlassCard variant="strong" className="text-center p-10 md:p-14">
            <p className="max-w-xl mx-auto text-gray-300 leading-8 mb-8">
              Whether you want to chat, get early access, or just keep up with what's
              coming next, the community is the best place to start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CtaLink to="https://discord.gg/BhG9sZEA">Join Discord</CtaLink>
              <CtaLink to="/contact" variant="secondary">Contact Us</CtaLink>
            </div>
          </GlassCard>
        </Reveal>
      </Section>
    </div>
  </div>
);

export default CommunityPage;
