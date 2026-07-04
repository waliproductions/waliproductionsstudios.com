import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Seo from '@/components/common/Seo';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvaaney";

function CreatorIntakePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const rawPlan = (query.get("plan") || "").toLowerCase();
  const validPlans = ["basic", "advanced", "custom"];
  const plan = validPlans.includes(rawPlan) ? rawPlan : null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  let planContent = {
    eyebrow: "Creator Intake • Custom",
    title: "Custom Help Questionnaire",
    intro:
      "This form helps Wali Productions review complex creator systems and technical requests so we can determine what custom support may be needed.",
    selectionValue: "Custom Help Request",
    focus:
      "Best for dual-PC setups, advanced routing, multi-device production systems, and customized creator workflows.",
  };

  if (plan === "basic") {
    planContent = {
      eyebrow: "Creator Intake • Basic",
      title: "Basic Setup Questionnaire",
      intro:
        "This form helps Wali Productions understand your current setup for a basic creator or streaming configuration.",
      selectionValue: "Basic Setup",
      focus:
        "Best for OBS cleanup, scene organization, simple stream quality improvements, and basic mic or camera guidance.",
    };
  }

  if (plan === "advanced") {
    planContent = {
      eyebrow: "Creator Intake • Advanced",
      title: "Advanced Setup Questionnaire",
      intro:
        "This form collects the technical details needed for routing, stream optimization, troubleshooting, and workflow improvements.",
      selectionValue: "Advanced Setup",
      focus:
        "Best for deeper technical setup support, audio routing, lag troubleshooting, sync issues, and stability improvements.",
    };
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    creatorType: "",
    platforms: "",
    currentGoals: "",
    currentProblems: "",
    computerSpecs: "",
    streamingSetup: "",
    audioHardware: "",
    videoHardware: "",
    peripherals: "",
    internetPlan: "",
    networkSetup: "",
    uploadDownload: "",
    softwareUsed: "",
    budget: "",
    timeline: "",
    extraDetails: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      _subject: `Creator Intake - ${planContent.selectionValue}`,
      selected_service: planContent.selectionValue,
      full_name: formData.fullName,
      email: formData.email,
      creator_type: formData.creatorType,
      platforms: formData.platforms,
      current_goals: formData.currentGoals,
      current_problems: formData.currentProblems,
      computer_specs: formData.computerSpecs,
      streaming_setup: formData.streamingSetup,
      audio_hardware: formData.audioHardware,
      video_hardware: formData.videoHardware,
      peripherals: formData.peripherals,
      internet_plan: formData.internetPlan,
      network_setup: formData.networkSetup,
      upload_download: formData.uploadDownload,
      software_used: formData.softwareUsed,
      budget: formData.budget,
      timeline: formData.timeline,
      extra_details: formData.extraDetails,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", "form_submission", {
          form_name: "creator_intake",
          service_type: planContent.selectionValue,
        });
      }

      navigate("/thank-you");
    } catch (error) {
      console.error("Creator intake submission error:", error);
      setSubmitError(
        "Something went wrong while sending your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!plan) {
    return (
      <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4">
        <Seo title="Creator Intake" description="Select a Creator Tech Support plan to begin your intake questionnaire." path="/creator-intake" noindex />
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/15 glass-strong p-8 md:p-12 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Creator Intake
          </p>

          <h1 className="text-4xl md:text-5xl font-black mb-5">
            Select a Service First
          </h1>

          <p className="text-lg text-gray-300 leading-8 mb-8">
            Please choose Basic, Advanced, or Custom Help from the Creator
            Services page before filling out this questionnaire.
          </p>

          <Link to="/services/streaming"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500"
          >
            Go to Creator Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 pt-28 pb-20 px-4">
      <Seo title={planContent.title} description={planContent.intro} path="/creator-intake" noindex />
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link to="/services/streaming"
            className="inline-flex items-center text-sm font-medium text-brand-blue-400 transition hover:text-brand-blue-300"
          >
            ← Back to Creator Services
          </Link>
        </div>

        <section className="mb-10">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-brand-blue-600/15 to-zinc-950 p-8 md:p-12 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              {planContent.eyebrow}
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl mb-5">
              {planContent.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-8 mb-6">
              {planContent.intro}
            </p>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-blue-400 mb-2">
                Selected Service
              </p>

              <p className="text-2xl font-bold text-white mb-3">
                {planContent.selectionValue}
              </p>

              <p className="text-gray-300 leading-7">{planContent.focus}</p>
            </div>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/15 glass-strong p-6 md:p-8 shadow-2xl space-y-8"
        >
          <section className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-5">
              Contact & Project Overview
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                aria-label="Full Name"
                required
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-label="Email Address"
                required
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <input
                type="text"
                name="creatorType"
                value={formData.creatorType}
                onChange={handleChange}
                placeholder="Creator Type (streamer, musician, podcaster, YouTuber, etc.)"
                aria-label="Creator Type (streamer, musician, podcaster, YouTuber, etc.)"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400 md:col-span-2"
              />

              <input
                type="text"
                name="platforms"
                value={formData.platforms}
                onChange={handleChange}
                placeholder="Platforms (Twitch, Kick, YouTube, Facebook, TikTok, etc.)"
                aria-label="Platforms (Twitch, Kick, YouTube, Facebook, TikTok, etc.)"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400 md:col-span-2"
              />

              <textarea
                name="currentGoals"
                value={formData.currentGoals}
                onChange={handleChange}
                rows="4"
                placeholder="What are you trying to accomplish with your setup?"
                aria-label="What are you trying to accomplish with your setup?"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400 md:col-span-2"
              />

              <textarea
                name="currentProblems"
                value={formData.currentProblems}
                onChange={handleChange}
                rows="4"
                placeholder="What problems are you having right now? Lag, dropped frames, audio sync, routing confusion, poor audio quality, camera issues, etc."
                aria-label="What problems are you having right now? Lag, dropped frames, audio sync, routing confusion, poor audio quality, camera issues, etc."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400 md:col-span-2"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-5">
              System Specs
            </h2>

            <textarea
              name="computerSpecs"
              value={formData.computerSpecs}
              onChange={handleChange}
              rows="6"
              placeholder="List your computer specs. Include desktop or laptop, CPU, GPU, RAM, storage, operating system, and whether you use one PC or multiple PCs."
              aria-label="List your computer specs. Include desktop or laptop, CPU, GPU, RAM, storage, operating system, and whether you use one PC or multiple PCs."
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
            />
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-5">Hardware</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <textarea
                name="streamingSetup"
                value={formData.streamingSetup}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your current setup. Include single-PC or dual-PC streaming, consoles, capture cards, monitors, docks, switchers, or anything else involved."
                aria-label="Describe your current setup. Include single-PC or dual-PC streaming, consoles, capture cards, monitors, docks, switchers, or anything else involved."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <textarea
                name="audioHardware"
                value={formData.audioHardware}
                onChange={handleChange}
                rows="5"
                placeholder="Audio hardware: mic, interface, mixer, headphones, speakers, instruments, MIDI devices, or other audio gear."
                aria-label="Audio hardware: mic, interface, mixer, headphones, speakers, instruments, MIDI devices, or other audio gear."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <textarea
                name="videoHardware"
                value={formData.videoHardware}
                onChange={handleChange}
                rows="5"
                placeholder="Video hardware: camera, webcam, lighting, lenses, capture hardware, monitors, or production gear."
                aria-label="Video hardware: camera, webcam, lighting, lenses, capture hardware, monitors, or production gear."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <textarea
                name="peripherals"
                value={formData.peripherals}
                onChange={handleChange}
                rows="5"
                placeholder="Other gear: controllers, stream decks, tablets, routers, adapters, USB hubs, NAS, external drives, etc."
                aria-label="Other gear: controllers, stream decks, tablets, routers, adapters, USB hubs, NAS, external drives, etc."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-5">
              Network Capabilities
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="internetPlan"
                value={formData.internetPlan}
                onChange={handleChange}
                placeholder="Internet Provider / Internet Plan"
                aria-label="Internet Provider / Internet Plan"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <input
                type="text"
                name="uploadDownload"
                value={formData.uploadDownload}
                onChange={handleChange}
                placeholder="Upload / Download Speeds"
                aria-label="Upload / Download Speeds"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <textarea
                name="networkSetup"
                value={formData.networkSetup}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your network setup. Include router model, switch, wired or Wi-Fi connections, access points, mesh, ISP equipment, and current network issues."
                aria-label="Describe your network setup. Include router model, switch, wired or Wi-Fi connections, access points, mesh, ISP equipment, and current network issues."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400 md:col-span-2"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-bold text-white mb-5">
              Software, Budget, and Timing
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <textarea
                name="softwareUsed"
                value={formData.softwareUsed}
                onChange={handleChange}
                rows="5"
                placeholder="Software used: OBS, Streamlabs, Ableton, Reaper, vMix, DAWs, plugins, routing tools, camera software, automation tools, etc."
                aria-label="Software used: OBS, Streamlabs, Ableton, Reaper, vMix, DAWs, plugins, routing tools, camera software, automation tools, etc."
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <textarea
                name="extraDetails"
                value={formData.extraDetails}
                onChange={handleChange}
                rows="5"
                placeholder="Anything else that would help us evaluate your setup or request?"
                aria-label="Anything else that would help us evaluate your setup or request?"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Budget Range"
                aria-label="Budget Range"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />

              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                placeholder="Desired Timeline"
                aria-label="Desired Timeline"
                className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-brand-blue-400"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-brand-blue-600/15 to-black p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Send Your Intake Details
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Submit this form and your questionnaire will be sent directly to
              Wali Productions through the website.
            </p>

            {submitError ? (
              <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {submitError}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-600/20 transition hover:from-brand-blue-500 hover:to-brand-purple-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Intake"}
              </button>

              <Link to="/contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
              >
                Go to Contact Page
              </Link>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default CreatorIntakePage;
