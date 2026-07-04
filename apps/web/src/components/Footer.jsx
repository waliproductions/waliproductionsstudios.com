import React from 'react';
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Music,
  Video,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Wali Productions</h2>
          <p className="text-zinc-400">
            Music, gaming, and creator content built into one brand.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-zinc-300">
            <a
              href="https://www.facebook.com/profile.php?id=100092172984348"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <Facebook />
            </a>

            <a
              href="https://www.instagram.com/waliproductions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <Instagram />
            </a>

            <a
              href="https://x.com/WaliProductions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-white transition"
            >
              <Video />
            </a>

            <a
              href="https://www.tiktok.com/@waliproductions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-white transition"
            >
              <Music />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <div className="space-y-3 text-zinc-300">
            <a
              href="mailto:contact@waliproductions.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={16} />
              <span>contact@waliproductions.com</span>
            </a>

            <a
              href="tel:+14175016623"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={16} />
              <span>+1 (417) 501-6623</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-zinc-500 mt-8 text-sm">
        © {new Date().getFullYear()} Wali Productions. All rights reserved.
      </div>
    </footer>
  );
}
