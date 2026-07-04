      import React from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Users,
  Heart,
  Headphones,
  ArrowRight,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

const MusicPage = () => {
  return (
    <div className="min-h-screen text-gray-200 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Music
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
              Music that reflects purpose, creativity, and identity.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-8">
              This is the music side of Wali Productions. Built from passion,
              faith, and real expression—not just for listening, but for
              connection, support, and community.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.patreon.com/c/WaliProductionsLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Support on Patreon
              </a>

              <a
                href="https://discord.gg/BhG9sZEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Join the Community
              </a>
            </div>
          </div>
        </motion.section>

        {/* What the music represents */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Music className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Expression
              </h3>
              <p className="text-gray-300 leading-7">
                Music created with intention, built to reflect conviction,
                artistry, and originality.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Headphones className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Listening
              </h3>
              <p className="text-gray-300 leading-7">
                A place for supporters, listeners, and returning visitors to
                connect with the sound of Wali Productions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Community
              </h3>
              <p className="text-gray-300 leading-7">
                Music is also a bridge into the wider Wali Productions ecosystem
                through support, conversation, and shared connection.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Support and community */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-zinc-950/80 p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
                Support the Music
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Listen, support, and stay connected
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Heart className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Direct Support
                </h3>

                <p className="text-gray-300 leading-8 mb-6">
                  If the music speaks to you, there are direct ways to support
                  the work and help Wali Productions continue growing.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://waliproductions.bandcamp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
                  >
                    Buy on Bandcamp
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://www.patreon.com/c/WaliProductionsLLC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                  >
                    Support on Patreon
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://fiverr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                  >
                    Fiverr Placeholder
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Community Connection
                </h3>

                <p className="text-gray-300 leading-8 mb-6">
                  Join the Wali Productions community and stay connected beyond
                  the music platforms.
                </p>

                <a
                  href="https://discord.gg/BhG9sZEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Join Discord
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Music platform embeds / links area */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.86 }}
          className="mb-16"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Music Platforms
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Explore the music ecosystem
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Bandcamp
              </h3>
              <p className="text-gray-300 leading-7 mb-5">
                Support directly through Bandcamp and connect with the catalog
                in a more artist-focused way.
              </p>
              <a
                href="https://waliproductions.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Visit Bandcamp
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Patreon
              </h3>
              <p className="text-gray-300 leading-7 mb-5">
                Support the mission and help fuel future music, content, and
                brand growth through Patreon.
              </p>
              <a
                href="https://www.patreon.com/c/WaliProductionsLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Visit Patreon
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                Discord
              </h3>
              <p className="text-gray-300 leading-7 mb-5">
                Join the community and stay connected with the broader Wali
                Productions ecosystem.
              </p>
              <a
                href="https://discord.gg/BhG9sZEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Join Discord
                <ArrowRight size={18} />
              </a>
            </div>
	    
	    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-3">
                YouTube
              </h3>
              <p className="text-gray-300 leading-7 mb-5">
                Watch official music content, releases, and more from
		Wali Productions.
              </p>
              <a
                href="https://www.youtube.com/@WaliProductionsLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Visit YouTube
                <ArrowRight size={18} />
              </a>
            </div>


          </div>
        </motion.section>

        {/* Bridge to services */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95 }}
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Beyond the Music
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Wali Productions also supports creators, churches, and small businesses.
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8 mb-8">
              If you’re here because of the music, you can also explore the
              creator and service side of the brand.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/services/streaming"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Creator Services
              </a>

              <a
                href="/services/business"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Business & Church Services
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default MusicPage;
