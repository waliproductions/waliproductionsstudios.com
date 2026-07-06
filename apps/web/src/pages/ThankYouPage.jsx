import React from 'react';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const ThankYouPage = () => (
  <div className="min-h-screen pt-32 pb-24 px-4">
    <Seo title="Thank You" description="Your submission was received." path="/thank-you" noindex />
    <div className="max-w-2xl mx-auto text-center">
      <Reveal>
        <GlassCard variant="gradient" className="p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Submission Received
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Thank You
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-8 mb-8">
            Your creator setup questionnaire has been sent successfully. Wali Productions
            will review your submission and follow up with you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink to="/services/streaming">Back to Creator Services</CtaLink>
            <CtaLink to="/" variant="secondary">Return Home</CtaLink>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default ThankYouPage;
