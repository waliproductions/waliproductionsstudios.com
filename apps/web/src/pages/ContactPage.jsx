import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Music, Radio, Briefcase } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen text-gray-200 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-12 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400/80 mb-3">
              Contact
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
              Let’s talk about what you need.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8">
              Whether you need creator support, website help, media assistance,
              or want to connect through the music side of Wali Productions,
              this is the place to start.
            </p>
          </div>
        </motion.section>

        {/* Main contact area */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left side */}
          <motion.section
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 md:p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-5">
              Best Way to Reach Out
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              The easiest way to get started is by email. When you reach out,
              include a short description of what you need help with, what kind
              of setup or organization you’re working with, and what outcome
              you want.
            </p>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>

              <p className="text-gray-300 mb-3">
                Reach out directly at:
              </p>

              <a
                href="mailto:info@waliproductions.com"
                className="text-lg md:text-xl font-semibold text-purple-400 hover:text-purple-300 transition break-all"
              >
                info@waliproductions.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  What to Include in Your Message
                </h3>
              </div>

              <ul className="space-y-3 text-gray-300 leading-7">
                <li>• What kind of help you need</li>
                <li>• Whether you are a creator, church, or small business</li>
                <li>• What gear, platform, or website you are working with</li>
                <li>• What problems you are trying to solve</li>
                <li>• What result you want to achieve</li>
              </ul>
            </div>
          </motion.section>

          {/* Right side */}
          <motion.section
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-purple-500/10 bg-white/5 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-5">
                Areas of Inquiry
              </h2>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Radio className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Creator Services
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-7">
                    OBS setup, stream quality, audio routing, workflow cleanup,
                    advanced creator support, and technical troubleshooting.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Business & Church Support
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-7">
                    Website builds, church media support, livestream assistance,
                    technical systems guidance, and organization-focused help.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Music className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold text-white">
                      Music & Brand Connections
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-7">
                    Music support, platform connections, brand opportunities,
                    and other inquiries related to Wali Productions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-purple-500/10 bg-gradient-to-br from-purple-900/20 to-black p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to get started?
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                Send a message with what you need, and Wali Productions can help
                you figure out the next step.
              </p>

              <a
                href="mailto:info@waliproductions.com"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Email Wali Productions
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
