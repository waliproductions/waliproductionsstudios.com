import React from 'react';
import { Monitor, Mic, Radio, Settings, Cpu, CheckCircle2 } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const helpAreas = [
  {
    icon: Monitor,
    title: 'OBS Setup',
    description: 'Scene organization, source cleanup, stream settings, encoder choices, and a more professional broadcast layout.',
  },
  {
    icon: Mic,
    title: 'Audio Cleanup',
    description: 'Better mic balance, cleaner routing, and practical solutions for creators dealing with inconsistent or confusing audio.',
  },
  {
    icon: Radio,
    title: 'Streaming Stability',
    description: 'Help with dropped frames, quality issues, bitrate confusion, sync problems, and unstable streaming performance.',
  },
  {
    icon: Settings,
    title: 'Workflow Organization',
    description: 'Practical setup guidance that helps your content process feel more efficient, repeatable, and easier to manage.',
  },
  {
    icon: Cpu,
    title: 'Advanced Creator Systems',
    description: 'Support for more complex creator setups, including dual-PC workflows, advanced routing, and multi-device production needs.',
  },
  {
    icon: CheckCircle2,
    title: 'Practical Guidance',
    description: 'Straightforward help without unnecessary confusion, so you can understand your system and move forward with confidence.',
  },
];

const tiers = [
  {
    name: 'Basic Setup',
    price: '$100',
    plan: 'basic',
    description: 'Best for creators who need help getting started or cleaning up a basic setup.',
    features: [
      'Basic OBS setup help',
      'Scene and source cleanup',
      'Stream quality recommendations',
      'Basic mic / camera guidance',
    ],
    cta: 'Start with Basic',
    featured: false,
  },
  {
    name: 'Advanced Setup',
    price: '$250',
    plan: 'advanced',
    tag: 'Most Practical',
    description: 'Best for creators who need deeper setup support and stronger technical cleanup.',
    features: [
      'Everything in Basic',
      'Audio routing help',
      'Better stream optimization',
      'Troubleshooting lag and sync issues',
      'Workflow improvement guidance',
    ],
    cta: 'Start with Advanced',
    featured: true,
  },
  {
    name: 'Pro / Custom',
    price: '$400+',
    plan: 'custom',
    description: 'Best for creators with more complex systems or advanced technical needs.',
    features: [
      'Dual-PC setup support',
      'Advanced creator troubleshooting',
      'Custom workflow solutions',
      'More involved streaming / media setups',
    ],
    cta: 'Request Custom Help',
    featured: false,
  },
];

const whyPoints = [
  { title: 'Real Creator Perspective', description: 'This support is built from real-world creator and streaming experience, not just theory.' },
  { title: 'Practical Help', description: 'Clear, usable guidance focused on what actually improves your content setup.' },
  { title: 'Professional Direction', description: 'The goal is not just to make things "work," but to help your content look and feel more professional.' },
];

const StreamingServicesPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Creator Tech Support"
      description="Professional streaming and content-creator technical support from Wali Studios — OBS setup, audio routing, and workflow cleanup."
      path="/services/streaming"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Creator Services
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Streaming &amp; Content Creator Technical Support
        </h1>
        <p className="text-lg text-gray-300 leading-8 mb-8">
          Professional help for streamers, content creators, podcasters, and musicians who
          want their setup to look better, sound better, and work more reliably.
        </p>
        <div className="flex flex-wrap gap-4">
          <CtaLink to="/contact">Get Started</CtaLink>
          <CtaLink to="#pricing" variant="secondary">View Service Tiers</CtaLink>
        </div>
      </Reveal>

      <Section eyebrow="Creator Services" title="Who this is for &amp; what you get">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <GlassCard variant="flat" className="h-full">
              <h3 className="text-xl font-semibold text-white mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li>Streamers who need a cleaner and more stable setup</li>
                <li>YouTubers building a professional creator workflow</li>
                <li>Podcasters needing better audio and routing</li>
                <li>Musicians streaming sessions or content</li>
                <li>Creators tired of lag, sync issues, and messy scenes</li>
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard variant="gradient" className="h-full">
              <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-300 leading-7">
                <li>Clearer video and stronger stream stability</li>
                <li>Cleaner audio and better signal flow</li>
                <li>More organized OBS scenes and sources</li>
                <li>Better creator workflow and setup confidence</li>
                <li>Practical help tailored to your real gear and goals</li>
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Technical Support Areas" title="What I Help Creators Fix">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {helpAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="h-full">
                <area.icon className="w-8 h-8 text-brand-blue-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 leading-7">{area.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Service Tiers" title="Choose the Level of Help You Need">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <GlassCard variant={tier.featured ? 'gradient' : 'flat'} className="flex h-full flex-col">
                {tier.tag && (
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-blue-300 mb-3">{tier.tag}</p>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                <p className="text-4xl font-black text-brand-blue-400 mb-4">{tier.price}</p>
                <p className="text-gray-300 mb-6 leading-7">{tier.description}</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <CtaLink to={`/creator-intake?plan=${tier.plan}`} className="mt-auto self-start">
                  {tier.cta}
                </CtaLink>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Work With Wali Productions" title="Built on real creator experience">
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
            Ready to Improve Your Setup?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Let&rsquo;s get your creator system working the way it should.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
            Whether you need a basic cleanup or advanced technical support, Wali Productions
            can help you build a setup that supports your content well.
          </p>
          <CtaLink to="/contact">Contact Wali Productions</CtaLink>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default StreamingServicesPage;
