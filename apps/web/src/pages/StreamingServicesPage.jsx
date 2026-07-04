import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Mic, Radio, Settings, Cpu, CheckCircle2 } from 'lucide-react';

const StreamingServicesPage = () => {
  return (
    <div className="min-h-screen text-gray-200 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Creator Services
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
              Streaming & Content Creator Technical Support
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-8">
              Professional help for streamers, content creators, podcasters,
              and musicians who want their setup to look better, sound better,
              and work more reliably.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Get Started
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                View Service Tiers
              </a>
            </div>
          </div>
        </motion.section>

        {/* Who it's for */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68 }}
          className="mb-14"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-500/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Who This Is For
              </h2>

              <ul className="space-y-3 text-gray-300 leading-7">
                <li>• Streamers who need a cleaner and more stable setup</li>
                <li>• YouTubers building a professional creator workflow</li>
                <li>• Podcasters needing better audio and routing</li>
                <li>• Musicians streaming sessions or content</li>
                <li>• Creators tired of lag, sync issues, and messy scenes</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-purple-500/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What You Get
              </h2>

              <ul className="space-y-3 text-gray-300 leading-7">
                <li>• Clearer video and stronger stream stability</li>
                <li>• Cleaner audio and better signal flow</li>
                <li>• More organized OBS scenes and sources</li>
                <li>• Better creator workflow and setup confidence</li>
                <li>• Practical help tailored to your real gear and goals</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* What I help with */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-zinc-950/80 p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
                Technical Support Areas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What I Help Creators Fix
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Monitor className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  OBS Setup
                </h3>
                <p className="text-gray-300 leading-7">
                  Scene organization, source cleanup, stream settings,
                  encoder choices, and a more professional broadcast layout.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Mic className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Audio Cleanup
                </h3>
                <p className="text-gray-300 leading-7">
                  Better mic balance, cleaner routing, and practical solutions
                  for creators dealing with inconsistent or confusing audio.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Radio className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Streaming Stability
                </h3>
                <p className="text-gray-300 leading-7">
                  Help with dropped frames, quality issues, bitrate confusion,
                  sync problems, and unstable streaming performance.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Settings className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Workflow Organization
                </h3>
                <p className="text-gray-300 leading-7">
                  Practical setup guidance that helps your content process feel
                  more efficient, repeatable, and easier to manage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Cpu className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Advanced Creator Systems
                </h3>
                <p className="text-gray-300 leading-7">
                  Support for more complex creator setups, including dual-PC
                  workflows, advanced routing, and multi-device production needs.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Practical Guidance
                </h3>
                <p className="text-gray-300 leading-7">
                  Straightforward help without unnecessary confusion, so you can
                  understand your system and move forward with confidence.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          id="pricing"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82 }}
          className="mb-14"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Service Tiers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Choose the Level of Help You Need
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Basic Setup</h3>
              <p className="text-4xl font-black text-purple-400 mb-4">$100</p>
              <p className="text-gray-300 mb-6 leading-7">
                Best for creators who need help getting started or cleaning up a
                basic setup.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Basic OBS setup help</li>
                <li>• Scene and source cleanup</li>
                <li>• Stream quality recommendations</li>
                <li>• Basic mic / camera guidance</li>
              </ul>

              <a
                href="/creator-intake?plan=basic"
                className="inline-flex items-center rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Start with Basic
              </a>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/25 to-black p-8 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-3">
                Most Practical
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">Advanced Setup</h3>
              <p className="text-4xl font-black text-purple-400 mb-4">$250</p>
              <p className="text-gray-300 mb-6 leading-7">
                Best for creators who need deeper setup support and stronger
                technical cleanup.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Everything in Basic</li>
                <li>• Audio routing help</li>
                <li>• Better stream optimization</li>
                <li>• Troubleshooting lag and sync issues</li>
                <li>• Workflow improvement guidance</li>
              </ul>

              <a
                href="/creator-intake?plan=advanced"
                className="inline-flex items-center rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Start with Advanced
              </a>
            </div>

            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">Pro / Custom</h3>
              <p className="text-4xl font-black text-purple-400 mb-4">$400+</p>
              <p className="text-gray-300 mb-6 leading-7">
                Best for creators with more complex systems or advanced technical needs.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Dual-PC setup support</li>
                <li>• Advanced creator troubleshooting</li>
                <li>• Custom workflow solutions</li>
                <li>• More involved streaming / media setups</li>
              </ul>

              <a
                href="/creator-intake?plan=custom"
                className="inline-flex items-center rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Request Custom Help
              </a>
            </div>
          </div>
        </motion.section>

        {/* Why work with me */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Work With Wali Productions
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Real Creator Perspective
                </h3>
                <p className="text-gray-300 leading-7">
                  This support is built from real-world creator and streaming
                  experience, not just theory.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Practical Help
                </h3>
                <p className="text-gray-300 leading-7">
                  Clear, usable guidance focused on what actually improves your
                  content setup.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Professional Direction
                </h3>
                <p className="text-gray-300 leading-7">
                  The goal is not just to make things “work,” but to help your
                  content look and feel more professional.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.98 }}
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Ready to Improve Your Setup?
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Let’s get your creator system working the way it should.
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
              Whether you need a basic cleanup or advanced technical support,
              Wali Productions can help you build a setup that supports your content well.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-purple-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Contact Wali Productions
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default StreamingServicesPage;
