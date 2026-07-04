import React from 'react';
import { PlayCircle } from 'lucide-react';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';

// Placeholder thumbnails — replace with a YouTube Data API fetch (latest
// uploads) once an API key/channel ID is wired in. Keep the same shape:
// { title, tag }.
const placeholderVideos = [
  { title: 'Latest Upload', tag: 'Gaming' },
  { title: 'Behind the Scenes', tag: 'Studio' },
  { title: 'Stream Highlight', tag: 'Clips' },
  { title: 'Music Session', tag: 'Music' },
];

const LatestVideos = () => (
  <Section
    eyebrow="Latest Videos"
    title="Fresh from the channel"
    subtitle="A rotating feed of recent uploads, highlights, and behind-the-scenes content."
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {placeholderVideos.map((video, i) => (
        <Reveal key={video.title} delay={i * 0.06}>
          <GlassCard variant="flat" className="p-0 overflow-hidden group h-full flex flex-col">
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-blue-600/20 to-brand-purple-600/20">
              <PlayCircle className="w-12 h-12 text-white/70 transition group-hover:text-white group-hover:scale-110" />
              <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-200">
                {video.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-white">{video.title}</h3>
            </div>
          </GlassCard>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2} className="mt-8 flex">
      <CtaLink to="/watch" variant="secondary">
        Watch All
      </CtaLink>
    </Reveal>
  </Section>
);

export default LatestVideos;
