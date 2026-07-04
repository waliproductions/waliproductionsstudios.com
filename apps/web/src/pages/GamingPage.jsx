import React from 'react';
import { motion } from 'framer-motion';
import {
  Gamepad2,
  Monitor,
  Radio,
  Twitch,
  Youtube,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const GamingPage = () => {
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
              Gaming
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
              Gaming content, creator energy, and live digital presence.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-8">
              The gaming side of Wali Productions is where content, streaming,
              audience connection, and creator identity come together.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://kick.com/waliproductions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Watch on Kick
              </a>

	      <a
		href="https://www.twitch.tv/waliproductions"
		target="_blank"
		rel="noopener noreferrer"
		className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
	      >
		Watch on Twich
	      </a>

	      <a
		href="https://www.youtube.com/@waliproductionsgaming"
		target="_blank"
		rel="noopener noreferrer"
		className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
	      >
		Watch on YouTube
	      </a>

              <a
                href="/services/streaming"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Creator Services
              </a>
            </div>
          </div>
        </motion.section>

        {/* Page purpose */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68 }}
          className="mb-16"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                What This Page Is About
              </h2>

              <p className="text-gray-300 leading-8 mb-5">
                This is the entertainment and live-content side of Wali Productions.
                It gives people a place to connect with the gaming brand, follow
                the content, and engage with the creator side of the business.
              </p>

              <p className="text-gray-300 leading-8">
                It also shows the real-world creator environment behind the technical
                services offered through Wali Productions.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why It Matters
              </h2>

              <p className="text-gray-300 leading-8 mb-5">
                The gaming side is not separate from the business. It supports the
                broader brand by showing your content identity, your consistency,
                and your creator perspective.
              </p>

              <p className="text-gray-300 leading-8">
                It helps visitors understand that the creator services you offer
                come from real hands-on experience, not just theory.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Creator identity cards */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.76 }}
          className="mb-16"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Creator Brand
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What the gaming lane represents
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Gamepad2 className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Entertainment
              </h3>
              <p className="text-gray-300 leading-7">
                Gaming gives the audience a place to connect with the fun,
                personality, and live energy of the brand.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Radio className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Live Content
              </h3>
              <p className="text-gray-300 leading-7">
                Streaming creates real-time audience connection and supports the
                wider Wali Productions ecosystem.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Monitor className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Real Creator Experience
              </h3>
              <p className="text-gray-300 leading-7">
                This side of the brand reinforces that your creator services are
                grounded in actual content creation and streaming practice.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Platform section */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.84 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-zinc-950/80 p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
                Platforms
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Where to connect with the gaming content
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Twitch className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Twitch</h3>
                <p className="text-gray-300 leading-7 mb-5">
                  A major platform for live gaming content and community building.
                </p>
                <a
                  href="https://www.twitch.tv/waliproductions"
		  target="_blank"
		  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
                >
                  Visit Twitch
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Youtube className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">YouTube</h3>
                <p className="text-gray-300 leading-7 mb-5">
                  A strong home for gaming content, clips, VODs, and long-term audience growth.
                </p>
                <a
                  href="https://www.youtube.com/@waliproductionsgaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
                >
                  Visit YouTube
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Radio className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Kick</h3>
                <p className="text-gray-300 leading-7 mb-5">
                  Follow the Wali Productions gaming presence on Kick and keep up with live content.
                </p>
                <a
                  href="https://kick.com/waliproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
                >
                  Visit Kick
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Value bridge */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.92 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More than gameplay
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Built from real systems
                </h3>
                <p className="text-gray-300 leading-8">
                  The gaming side reflects real streaming, production, audio,
                  and creator workflow experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Connected to the service side
                </h3>
                <p className="text-gray-300 leading-8">
                  Visitors who like the content can also see the technical and
                  creative expertise behind it through Creator Services.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Next Step
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Want help building your own creator setup?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
              The gaming page shows the live creator side of the brand.
              The Creator Services page shows how Wali Productions can help others
              improve their own content systems.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/services/streaming"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Creator Services
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GamingPage;
