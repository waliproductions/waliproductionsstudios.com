import React from 'react';
import {
  Church,
  Briefcase,
  Globe,
  Radio,
  Network,
  Wrench,
} from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const services = [
  {
    icon: Globe,
    title: 'Website Setup',
    description: 'Professional site structure, branded pages, cleaner layout, and a stronger online presence for your organization.',
  },
  {
    icon: Radio,
    title: 'Livestream Support',
    description: 'Help with streaming setup, platform readiness, and creating a smoother experience for viewers and team members.',
  },
  {
    icon: Network,
    title: 'Technical System Guidance',
    description: 'Practical direction for devices, media workflows, and the systems your organization depends on to communicate well.',
  },
  {
    icon: Church,
    title: 'Church Media Support',
    description: 'Support for ministries that want more dependable livestreaming, stronger digital presentation, and better media organization.',
  },
  {
    icon: Briefcase,
    title: 'Small Business Support',
    description: 'Help for businesses that need a cleaner web presence and more reliable technical structure behind the scenes.',
  },
  {
    icon: Wrench,
    title: 'Custom Technical Help',
    description: 'For organizations with specific needs, unique setups, or technical issues that require more tailored support.',
  },
];

const serviceOptions = [
  {
    title: 'Website Setup',
    description: 'Best for organizations that need a cleaner and more professional online presence.',
    features: ['Website page structure', 'Branding-focused presentation', 'Professional content layout', 'Deployment guidance'],
    cta: 'Ask About Website Setup',
    featured: false,
  },
  {
    title: 'Media & Livestream Support',
    tag: 'Strong Fit for Churches',
    description: 'Best for churches, ministries, and organizations that need help with streaming and communication systems.',
    features: ['Livestream support', 'Media workflow improvement', 'Technical troubleshooting', 'Practical setup guidance'],
    cta: 'Ask About Media Support',
    featured: true,
  },
  {
    title: 'Custom Support',
    description: 'Best for organizations with a more specific need, custom workflow, or technical challenge.',
    features: ['Custom technical guidance', 'Workflow review', 'Setup recommendations', 'Organization-specific help'],
    cta: 'Request Custom Help',
    featured: false,
  },
];

const whyPoints = [
  { title: 'Practical Solutions', description: 'Support focused on what actually helps your organization operate more clearly and effectively.' },
  { title: 'Professional Presentation', description: 'Better structure, cleaner digital presence, and stronger communication for the people you serve.' },
  { title: 'Dependable Direction', description: 'Thoughtful guidance that respects your mission, your audience, and the importance of reliable systems.' },
];

const BusinessServicesPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Business & Church Services"
      description="Website, media, and livestream technical support for churches, ministries, and small businesses from Wali Studios."
      path="/services/business"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Business &amp; Church Services
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Technical Support for Churches, Ministries, and Small Businesses
        </h1>
        <p className="text-lg text-gray-300 leading-8 mb-8">
          Practical, dependable help for organizations that need stronger websites, cleaner
          media workflows, more stable livestreams, and better technical systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <CtaLink to="/contact">Get Started</CtaLink>
          <CtaLink to="#services" variant="secondary">View Services</CtaLink>
        </div>
      </Reveal>

      <Section eyebrow="Business & Church Services" title="Who this is for &amp; what you get">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <GlassCard variant="flat" className="h-full">
              <h3 className="text-xl font-semibold text-white mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li>Churches and ministries building media presence</li>
                <li>Small businesses needing a professional website</li>
                <li>Organizations needing livestream support</li>
                <li>Teams with technical issues slowing their workflow</li>
                <li>Groups who want practical and dependable guidance</li>
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard variant="gradient" className="h-full">
              <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li>A more polished and professional digital presence</li>
                <li>Better media and livestream reliability</li>
                <li>Clearer technical direction and setup confidence</li>
                <li>Practical solutions based on real needs</li>
                <li>Support that respects your mission and your audience</li>
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section id="services" eyebrow="Services Offered" title="How Wali Productions Can Help">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <service.icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-7">{service.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Ways to Work Together" title="Service Options">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceOptions.map((option, i) => (
            <Reveal key={option.title} delay={i * 0.08}>
              <GlassCard variant={option.featured ? 'gradient' : 'flat'} className="flex h-full flex-col">
                {option.tag && (
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-blue-300 mb-3">{option.tag}</p>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-6 leading-7">{option.description}</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  {option.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <CtaLink to="/contact" className="mt-auto self-start">{option.cta}</CtaLink>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Work With Wali Productions" title="Dependable, mission-minded support">
        <div className="grid gap-6 md:grid-cols-3">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">{point.title}</h3>
                <p className="text-gray-300 leading-7">{point.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Reveal>
        <GlassCard variant="strong" className="text-center p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Need Dependable Help?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Let&rsquo;s build something that serves your people well.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
            Whether you need website support, church livestream help, or broader technical
            guidance, Wali Productions can help you move forward.
          </p>
          <CtaLink to="/contact">Contact Wali Productions</CtaLink>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default BusinessServicesPage;
