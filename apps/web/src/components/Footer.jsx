import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Music2,
  Twitch,
  Youtube,
  Mail,
  Phone,
} from 'lucide-react';
import logo from '../assets/logo.png';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100092172984348', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/waliproductions/', icon: Instagram },
  { name: 'X', href: 'https://x.com/WaliProductions', icon: Twitter },
  { name: 'TikTok', href: 'https://www.tiktok.com/@waliproductions', icon: Music2 },
  { name: 'Twitch', href: 'https://www.twitch.tv/waliproductions', icon: Twitch },
  { name: 'YouTube', href: 'https://www.youtube.com/@WaliProductionsLLC', icon: Youtube },
];

const exploreLinks = [
  { name: 'Watch', path: '/watch' },
  { name: 'Music', path: '/music' },
  { name: 'Gaming', path: '/gaming' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Community', path: '/community' },
  { name: 'About', path: '/about' },
];

const serviceLinks = [
  { name: 'Creator Tech Support', path: '/services/streaming' },
  { name: 'Business & Church Services', path: '/services/business' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Wali Studios" className="h-9 w-auto object-contain" />
              <span className="font-display text-lg font-bold text-white">Wali Studios</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Wali Studios is the entertainment division of Wali Productions LLC.
            </p>
            <div className="flex gap-3 text-gray-400">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition hover:border-white/25 hover:text-white hover:bg-white/5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Future: Discord widget / live member count embed */}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:info@waliproductions.com" className="flex items-center gap-2 transition hover:text-white">
                <Mail size={15} />
                <span>info@waliproductions.com</span>
              </a>
              <a href="tel:+14175016623" className="flex items-center gap-2 transition hover:text-white">
                <Phone size={15} />
                <span>+1 (417) 501-6623</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Wali Productions LLC. All rights reserved.</p>
          <p>Wali Studios is the entertainment division of Wali Productions LLC.</p>
        </div>
      </div>
    </footer>
  );
}
