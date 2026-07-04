import React from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Radio,
  Briefcase,
  ArrowRight,
  Headphones,
  Monitor,
  Church,
} from 'lucide-react';

const HomePage = () => {
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
              Wali Productions
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-5xl mb-6">
              Music, creator support, and digital services built to help people create, connect, and grow.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-8">
              Wali Productions serves listeners, creators, churches, and small businesses
              through music, streaming and creator support, website development, and
              practical technical guidance.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/music"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Explore the Music
              </a>

              <a
                href="/services/streaming"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                View Creator Services
              </a>
            </div>
          </div>
        </motion.section>

        {/* Three lane intro */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68 }}
          className="mb-16"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Start Here
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose the path that fits you best
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <div className="mb-5">
                <Headphones className="w-9 h-9 text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                For Listeners & Supporters
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                Explore the music, connect with the brand, and support the work
                through the platforms and content that make up Wali Productions.
              </p>

              <a
                href="/music"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Go to Music
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/25 to-black p-8 shadow-2xl">
              <div className="mb-5">
                <Monitor className="w-9 h-9 text-purple-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-3">
                Best Starting Point
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                For Creators
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                Get help with streaming, OBS, audio routing, creator workflows,
                system cleanup, and technical support built for content creators.
              </p>

              <a
                href="/services/streaming"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Go to Creator Services
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <div className="mb-5">
                <Church className="w-9 h-9 text-purple-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                For Churches & Small Businesses
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                Get support for websites, livestream setup, church media needs,
                and dependable digital and technical systems.
              </p>

              <a
                href="/services/business"
                className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition"
              >
                Go to Business & Church Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Brand summary */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-zinc-950/80 p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
                What Wali Productions Does
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                One brand. Three strong lanes.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Music className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Music
                </h3>
                <p className="text-gray-300 leading-7">
                  Original music, platform presence, and ways for supporters to
                  listen, follow, and stay connected to the brand.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Radio className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Creator Services
                </h3>
                <p className="text-gray-300 leading-7">
                  Technical support for streamers, musicians, and creators who
                  need stronger workflows, cleaner setups, and more stability.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Briefcase className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Business & Church Support
                </h3>
                <p className="text-gray-300 leading-7">
                  Website help, media support, livestream guidance, and practical
                  technical assistance for organizations that need dependable systems.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Priority lanes */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88 }}
          className="mb-16"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need help as a creator?
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                If you stream, record, produce content, or need help getting your
                setup under control, Creator Services is the best place to start.
              </p>

              <a
                href="/services/streaming"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Visit Creator Services
              </a>
            </div>

            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need help for a church or business?
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                If your organization needs a stronger website, better livestream
                support, or more reliable technical direction, start here.
              </p>

              <a
                href="/services/business"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Visit Business & Church Services
              </a>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.98 }}
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Let’s Connect
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Whether you are here for the music or the services, Wali Productions is built to help you move forward.
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8 mb-8">
              Explore the music, learn more about the services, or reach out
              directly to start the conversation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/music"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Music
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

export default HomePage;
