import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from '@/components/common/Seo';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20 px-4">
      <Seo title="Thank You" description="Your submission was received." path="/thank-you" noindex />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue-600/10 to-black p-8 md:p-12 shadow-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Submission Received
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Thank You
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-8 mb-8">
            Your creator setup questionnaire has been sent successfully. Wali Productions
            will review your submission and follow up with you as soon as possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/streaming"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
            >
              Back to Creator Services
            </Link>

            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
