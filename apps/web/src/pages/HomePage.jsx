import React from 'react';
import Seo, { SITE_URL } from '@/components/common/Seo';
import Hero from './home/Hero';
import GamingShowcase from './home/GamingShowcase';
import MusicShowcase from './home/MusicShowcase';
import LiveStreamSection from './home/LiveStreamSection';
import LatestVideos from './home/LatestVideos';
import FeaturedProjects from './home/FeaturedProjects';
import MarketplacePreview from './home/MarketplacePreview';
import CommunitySupportCta from './home/CommunitySupportCta';
import FinalCta from './home/FinalCta';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wali Studios',
  alternateName: 'Wali Productions LLC',
  url: SITE_URL,
  description:
    'Wali Studios is the entertainment division of Wali Productions LLC, creating premium gaming, music, livestreaming, and digital entertainment.',
  sameAs: [
    'https://www.facebook.com/profile.php?id=100092172984348',
    'https://www.instagram.com/waliproductions/',
    'https://x.com/WaliProductions',
    'https://www.tiktok.com/@waliproductions',
    'https://www.twitch.tv/waliproductions',
    'https://kick.com/waliproductions',
    'https://www.youtube.com/@WaliProductionsLLC',
    'https://www.patreon.com/c/WaliProductionsLLC',
  ],
};

const HomePage = () => (
  <div className="pb-8">
    <Seo
      title="Wali Studios — Gaming, Music & Digital Entertainment"
      description="Wali Studios is the entertainment division of Wali Productions LLC — premium gaming, original music, livestreaming, and a digital marketplace built with excellence and creativity."
      path="/"
      jsonLd={organizationJsonLd}
    />
    <Hero />
    <GamingShowcase />
    <MusicShowcase />
    <LiveStreamSection />
    <LatestVideos />
    <FeaturedProjects />
    <MarketplacePreview />
    <CommunitySupportCta />
    <FinalCta />
  </div>
);

export default HomePage;
