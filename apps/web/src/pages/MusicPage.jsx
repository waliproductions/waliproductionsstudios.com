import React from 'react';
import { Music, Heart, MessageCircle, ExternalLink, PlayCircle, ListMusic } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';
import PlatformLink from '@/components/common/PlatformLink';
import SpotifyEmbed from '@/components/common/SpotifyEmbed';
import { Badge } from '@/components/ui/badge';

// Placeholder catalog. Replace with a live fetch once a Spotify/Apple
// Music/Bandcamp API integration is connected — keep the same shape:
// { title, type, year }.
const releases = [
  { title: 'Featured Single', type: 'Single', year: '2026' },
  { title: 'Studio Sessions EP', type: 'EP', year: '2025' },
  { title: 'Origins', type: 'Album', year: '2024' },
];

const playlists = [
  { title: 'Wali Studios Radio', description: 'A rotating mix of every release, old and new.' },
  { title: "Producer's Picks", description: 'Behind-the-scenes favorites and unreleased snippets.' },
];

const availablePlatforms = [
  {
    icon: ExternalLink,
    name: 'Bandcamp',
    href: 'https://waliproductions.bandcamp.com/',
    description: 'Support directly and connect with the catalog in a more artist-focused way.',
  },
  {
    icon: Heart,
    name: 'Patreon',
    href: 'https://www.patreon.com/c/WaliProductionsLLC',
    description: 'Support the mission and help fund future music, content, and brand growth.',
  },
  {
    icon: MessageCircle,
    name: 'Discord',
    href: 'https://discord.gg/eSxWrSh7fv',
    description: 'Join the community and stay connected with the broader Wali Studios ecosystem.',
  },
  {
    icon: PlayCircle,
    name: 'YouTube',
    href: 'https://www.youtube.com/@WaliProductionsLLC',
    description: 'Watch official music content, releases, and more.',
  },
];

// Streaming platforms this catalog is prepared for — not yet connected.
// Wire each of these in as the corresponding API/embed becomes available.
const comingSoonPlatforms = ['Spotify', 'Apple Music', 'SoundCloud', 'YouTube Music'];

const MusicPage = () => (
  <div className="min-h-screen pt-32 pb-24">
    <Seo
      title="Music"
      description="Original music from Wali Studios — albums, singles, playlists, and ways to listen and support the work."
      path="/music"
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="mb-16 max-w-3xl">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
          Music
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Music that reflects purpose, creativity, and identity.
        </h1>
        <p className="text-lg text-gray-300 leading-8 mb-8">
          Built from passion, faith, and real expression — not just for listening, but for
          connection, support, and community.
        </p>
        <div className="flex flex-wrap gap-4">
          <CtaLink to="https://www.patreon.com/c/WaliProductionsLLC">Support on Patreon</CtaLink>
          <CtaLink to="https://discord.gg/eSxWrSh7fv" variant="secondary">Join the Community</CtaLink>
        </div>
      </Reveal>

      <Section eyebrow="Now Playing" title="Player">
        <Reveal>
          {/*
            Spotify embed — official iframe approach (no OAuth / Web Playback SDK).
            SpotifyEmbed currently points at a placeholder ID. Swap it out once the
            real Wali Studios Spotify playlist/album/artist is live — see the
            REAL SPOTIFY URL GOES HERE comment in
            src/components/common/SpotifyEmbed.jsx for the exact prop to change.
          */}
          <SpotifyEmbed type="playlist" title="Wali Studios — Spotify player" />
        </Reveal>
      </Section>

      <Section eyebrow="Featured Releases" title="Albums &amp; singles">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release, i) => (
            <Reveal key={release.title} delay={i * 0.06}>
              <GlassCard variant="flat" className="flex h-full flex-col p-0 overflow-hidden">
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-blue-600/20 to-brand-purple-600/20">
                  <Music className="w-10 h-10 text-white/50" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="rounded-full">{release.type}</Badge>
                    <span className="text-sm text-gray-400">{release.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{release.title}</h3>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Playlist Showcase" title="Curated listening">
        <div className="grid gap-6 md:grid-cols-2">
          {playlists.map((playlist, i) => (
            <Reveal key={playlist.title} delay={i * 0.08}>
              <GlassCard variant="gradient" className="h-full">
                <ListMusic className="w-8 h-8 text-brand-purple-400 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{playlist.title}</h3>
                <p className="text-gray-300 leading-7">{playlist.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Listen &amp; Support" title="Where to find the music">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {availablePlatforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.05}>
              <PlatformLink {...platform} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <GlassCard variant="flat" className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">Coming Soon</p>
              <p className="text-gray-300">Also on the way: {comingSoonPlatforms.join(', ')}.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {comingSoonPlatforms.map((name) => (
                <Badge key={name} variant="outline" className="rounded-full border-white/15 text-gray-400">
                  {name}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      <Reveal>
        <GlassCard variant="strong" className="text-center p-10 md:p-14">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Beyond the Music
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Wali Studios also creates gaming content and creator services.
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8 mb-8">
            If you're here because of the music, explore the rest of what Wali Studios
            is building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaLink to="/gaming">Gaming</CtaLink>
            <CtaLink to="/services/streaming" variant="secondary">Creator Services</CtaLink>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  </div>
);

export default MusicPage;
