import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/common/Seo';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

const NotFoundPage = () => (
  <div className="min-h-screen pt-32 pb-24 px-4">
    <Seo title="Page Not Found" description="This page doesn't exist on Wali Studios." noindex />
    <div className="max-w-2xl mx-auto text-center">
      <GlassCard variant="gradient" className="p-10 md:p-14">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">404</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          This page went off-stream.
        </h1>
        <p className="text-gray-300 leading-8 mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back
          to the main event.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaLink to="/">Return Home</CtaLink>
          <CtaLink to="/contact" variant="secondary">Contact Us</CtaLink>
        </div>
      </GlassCard>
    </div>
  </div>
);

export default NotFoundPage;
