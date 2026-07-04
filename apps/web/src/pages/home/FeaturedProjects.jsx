import React from 'react';
import { Sparkles, Gamepad2, Music, ShoppingBag } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import { Link } from 'react-router-dom';

const projects = [
  {
    icon: Gamepad2,
    title: 'Gaming & Livestreaming',
    description: 'Ongoing gaming content and live broadcasts across Kick, Twitch, and YouTube.',
    path: '/gaming',
  },
  {
    icon: Music,
    title: 'Original Music',
    description: 'Releases, sessions, and a growing catalog built on faith, craft, and identity.',
    path: '/music',
  },
  {
    icon: ShoppingBag,
    title: 'Digital Marketplace',
    description: 'Sound packs, drum kits, and creative tools for producers and creators.',
    path: '/marketplace',
  },
  {
    icon: Sparkles,
    title: 'Creator Services',
    description: 'Real-world technical support for streamers, churches, and small businesses.',
    path: '/services/streaming',
  },
];

const FeaturedProjects = () => (
  <Section
    eyebrow="Featured Projects"
    title="Everything Wali Studios is building"
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={i * 0.07}>
          <Link to={project.path} className="block h-full">
            <GlassCard
              variant="flat"
              className="h-full transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
            >
              <project.icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 leading-7">{project.description}</p>
            </GlassCard>
          </Link>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default FeaturedProjects;
