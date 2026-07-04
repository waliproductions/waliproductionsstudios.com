import React from 'react';

/**
 * Production-quality placeholder for a livestream/video embed.
 *
 * To go live with a real embed, replace the placeholder <div> below with
 * the platform's iframe, for example:
 *
 *   YouTube: <iframe src={`https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID`} ... />
 *   Twitch:  <iframe src={`https://player.twitch.tv/?channel=waliproductions&parent=waliproductionsstudios.com`} ... />
 *   Kick:    <iframe src={`https://player.kick.com/waliproductions`} ... />
 *
 * Keep the aspect-video wrapper so layout doesn't shift when the real
 * embed is dropped in.
 */
const StreamEmbedPlaceholder = ({ icon: Icon, label }) => (
  <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 bg-black/50">
    <div className="flex flex-col items-center gap-3 text-center px-6">
      {Icon && <Icon className="w-10 h-10 text-gray-500" aria-hidden="true" />}
      <p className="text-sm text-gray-500">{label ?? 'Embed placeholder — connect a live channel to enable this player'}</p>
    </div>
  </div>
);

export default StreamEmbedPlaceholder;
