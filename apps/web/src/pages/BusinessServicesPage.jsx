import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Church,
  Briefcase,
  Globe,
  Radio,
  Network,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import Seo from '@/components/common/Seo';

const BusinessServicesPage = () => {
  return (
    <div className="min-h-screen text-gray-200 pt-28 pb-20">
      <Seo
        title="Business & Church Services"
        description="Website, media, and livestream technical support for churches, ministries, and small businesses from Wali Studios."
        path="/services/business"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue-600/10 to-black p-8 md:p-12 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              Business & Church Services
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
              Technical Support for Churches, Ministries, and Small Businesses
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-8">
              Practical, dependable help for organizations that need stronger
              websites, cleaner media workflows, more stable livestreams, and
              better technical systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
              >
                Get Started
              </Link>

              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                View Services
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Who This Is For
              </h2>

              <ul className="space-y-3 text-gray-300 leading-7">
                <li>• Churches and ministries building media presence</li>
                <li>• Small businesses needing a professional website</li>
                <li>• Organizations needing livestream support</li>
                <li>• Teams with technical issues slowing their workflow</li>
                <li>• Groups who want practical and dependable guidance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                What You Get
              </h2>

              <ul className="space-y-3 text-gray-300 leading-7">
                <li>• A more polished and professional digital presence</li>
                <li>• Better media and livestream reliability</li>
                <li>• Clearer technical direction and setup confidence</li>
                <li>• Practical solutions based on real needs</li>
                <li>• Support that respects your mission and your audience</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Service categories */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <div className="rounded-3xl border border-white/10 glass p-8 md:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
                Services Offered
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How Wali Productions Can Help
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Globe className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Website Setup
                </h3>
                <p className="text-gray-300 leading-7">
                  Professional site structure, branded pages, cleaner layout,
                  and a stronger online presence for your organization.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Radio className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Livestream Support
                </h3>
                <p className="text-gray-300 leading-7">
                  Help with streaming setup, platform readiness, and creating a
                  smoother experience for viewers and team members.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Network className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Technical System Guidance
                </h3>
                <p className="text-gray-300 leading-7">
                  Practical direction for devices, media workflows, and the
                  systems your organization depends on to communicate well.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Church className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Church Media Support
                </h3>
                <p className="text-gray-300 leading-7">
                  Support for ministries that want more dependable livestreaming,
                  stronger digital presentation, and better media organization.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Briefcase className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Small Business Support
                </h3>
                <p className="text-gray-300 leading-7">
                  Help for businesses that need a cleaner web presence and more
                  reliable technical structure behind the scenes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Wrench className="w-8 h-8 text-brand-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Custom Technical Help
                </h3>
                <p className="text-gray-300 leading-7">
                  For organizations with specific needs, unique setups, or
                  technical issues that require more tailored support.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Service options */}
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82 }}
          className="mb-14"
        >
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              Ways to Work Together
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Service Options
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">
                Website Setup
              </h3>
              <p className="text-gray-300 mb-6 leading-7">
                Best for organizations that need a cleaner and more professional
                online presence.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Website page structure</li>
                <li>• Branding-focused presentation</li>
                <li>• Professional content layout</li>
                <li>• Deployment guidance</li>
              </ul>

              <Link to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
              >
                Ask About Website Setup
              </Link>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-brand-blue-600/15 to-black p-8 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-blue-300 mb-3">
                Strong Fit for Churches
              </p>
              <h3 className="text-2xl font-bold text-white mb-3">
                Media & Livestream Support
              </h3>
              <p className="text-gray-300 mb-6 leading-7">
                Best for churches, ministries, and organizations that need help
                with streaming and communication systems.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Livestream support</li>
                <li>• Media workflow improvement</li>
                <li>• Technical troubleshooting</li>
                <li>• Practical setup guidance</li>
              </ul>

              <Link to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
              >
                Ask About Media Support
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-3">
                Custom Support
              </h3>
              <p className="text-gray-300 mb-6 leading-7">
                Best for organizations with a more specific need, custom
                workflow, or technical challenge.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Custom technical guidance</li>
                <li>• Workflow review</li>
                <li>• Setup recommendations</li>
                <li>• Organization-specific help</li>
              </ul>

              <Link to="/contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
              >
                Request Custom Help
              </Link>
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
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Work With Wali Productions
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">
                  Practical Solutions
                </h3>
                <p className="text-gray-300 leading-7">
                  Support focused on what actually helps your organization
                  operate more clearly and effectively.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">
                  Professional Presentation
                </h3>
                <p className="text-gray-300 leading-7">
                  Better structure, cleaner digital presence, and stronger
                  communication for the people you serve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-blue-400 mb-3">
                  Dependable Direction
                </h3>
                <p className="text-gray-300 leading-7">
                  Thoughtful guidance that respects your mission, your audience,
                  and the importance of reliable systems.
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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue-600/10 to-black p-8 md:p-12 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              Need Dependable Help?
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Let’s build something that serves your people well.
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
              Whether you need website support, church livestream help, or
              broader technical guidance, Wali Productions can help you move forward.
            </p>

            <Link to="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
            >
              Contact Wali Productions
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BusinessServicesPage;
