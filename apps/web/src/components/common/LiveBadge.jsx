import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Pulsing status pill. Defaults to "LIVE" (crimson) — pass live={false}
 * for a neutral "OFFLINE" state once real stream-status data is wired in.
 */
const LiveBadge = ({ live = true, label, className }) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
      live ? 'bg-brand-crimson-600/15 text-brand-crimson-400 border border-brand-crimson-600/30' : 'bg-white/5 text-gray-400 border border-white/10',
      className
    )}
  >
    <span className={cn('h-2 w-2 rounded-full', live ? 'bg-brand-crimson-500 animate-live-pulse' : 'bg-gray-500')} />
    {label ?? (live ? 'Live' : 'Offline')}
  </span>
);

export default LiveBadge;
