import React from 'react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// REAL SPOTIFY URL GOES HERE
// ---------------------------------------------------------------------------
// Replace PLACEHOLDER_SPOTIFY_ID below with the real Wali Studios Spotify
// album/artist/playlist ID once the catalog is live on Spotify. The `type`
// prop controls the embed path (`playlist`, `album`, `artist`, `track`,
// `show`, or `episode`) — see https://developer.spotify.com/documentation/embeds
// for the full oEmbed/iFrame reference.
//
//   <SpotifyEmbed type="artist" id="REAL_SPOTIFY_ARTIST_ID" />
//
const PLACEHOLDER_SPOTIFY_ID = 'PLACEHOLDER_SPOTIFY_ID';

/**
 * Responsive Spotify iFrame embed (official embed approach — no OAuth or
 * Web Playback SDK required). Renders inside the site's glass/dark shell so
 * it matches the rest of the design system while Spotify's own player
 * chrome handles playback.
 */
const SpotifyEmbed = ({
  type = 'playlist',
  id = PLACEHOLDER_SPOTIFY_ID,
  title = 'Spotify player',
  height = 352,
  className,
}) => (
  <div className={cn('overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-xl', className)}>
    <iframe
      title={title}
      src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="block w-full"
    />
  </div>
);

export default SpotifyEmbed;
