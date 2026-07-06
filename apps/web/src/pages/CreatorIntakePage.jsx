import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvaaney";

const PLAN_CONTENT = {
  basic: {
    eyebrow: "Creator Intake • Basic",
    title: "Basic Setup Questionnaire",
    intro: "This form helps Wali Productions understand your current setup for a basic creator or streaming configuration.",
    selectionValue: "Basic Setup",
    focus: "Best for OBS cleanup, scene organization, simple stream quality improvements, and basic mic or camera guidance.",
  },
  advanced: {
    eyebrow: "Creator Intake • Advanced",
    title: "Advanced Setup Questionnaire",
    intro: "This form collects the technical details needed for routing, stream optimization, troubleshooting, and workflow improvements.",
    selectionValue: "Advanced Setup",
    focus: "Best for deeper technical setup support, audio routing, lag troubleshooting, sync issues, and stability improvements.",
  },
  custom: {
    eyebrow: "Creator Intake • Custom",
    title: "Custom Help Questionnaire",
    intro: "This form helps Wali Productions review complex creator systems and technical requests so we can determine what custom support may be needed.",
    selectionValue: "Custom Help Request",
    focus: "Best for dual-PC setups, advanced routing, multi-device production systems, and customized creator workflows.",
  },
};

// Field config drives both the visible form and the Formspree payload keys
// below — keep `name` in sync with the `formData` state shape.
const FORM_SECTIONS = [
  {
    title: "Contact & Project Overview",
    fields: [
      { name: "fullName", label: "Full Name", type: "input", inputType: "text", required: true },
      { name: "email", label: "Email Address", type: "input", inputType: "email", required: true },
      { name: "creatorType", label: "Creator Type", placeholder: "Streamer, musician, podcaster, YouTuber, etc.", type: "input", inputType: "text", span: 2 },
      { name: "platforms", label: "Platforms", placeholder: "Twitch, Kick, YouTube, Facebook, TikTok, etc.", type: "input", inputType: "text", span: 2 },
      { name: "currentGoals", label: "Current Goals", placeholder: "What are you trying to accomplish with your setup?", type: "textarea", rows: 4, span: 2 },
      { name: "currentProblems", label: "Current Problems", placeholder: "Lag, dropped frames, audio sync, routing confusion, poor audio quality, camera issues, etc.", type: "textarea", rows: 4, span: 2 },
    ],
  },
  {
    title: "System Specs",
    fields: [
      { name: "computerSpecs", label: "Computer Specs", placeholder: "Desktop or laptop, CPU, GPU, RAM, storage, operating system, and whether you use one PC or multiple PCs.", type: "textarea", rows: 6, span: 2 },
    ],
  },
  {
    title: "Hardware",
    fields: [
      { name: "streamingSetup", label: "Streaming Setup", placeholder: "Single-PC or dual-PC streaming, consoles, capture cards, monitors, docks, switchers, or anything else involved.", type: "textarea", rows: 5 },
      { name: "audioHardware", label: "Audio Hardware", placeholder: "Mic, interface, mixer, headphones, speakers, instruments, MIDI devices, or other audio gear.", type: "textarea", rows: 5 },
      { name: "videoHardware", label: "Video Hardware", placeholder: "Camera, webcam, lighting, lenses, capture hardware, monitors, or production gear.", type: "textarea", rows: 5 },
      { name: "peripherals", label: "Other Gear", placeholder: "Controllers, stream decks, tablets, routers, adapters, USB hubs, NAS, external drives, etc.", type: "textarea", rows: 5 },
    ],
  },
  {
    title: "Network Capabilities",
    fields: [
      { name: "internetPlan", label: "Internet Provider / Plan", type: "input", inputType: "text" },
      { name: "uploadDownload", label: "Upload / Download Speeds", type: "input", inputType: "text" },
      { name: "networkSetup", label: "Network Setup", placeholder: "Router model, switch, wired or Wi-Fi connections, access points, mesh, ISP equipment, and current network issues.", type: "textarea", rows: 5, span: 2 },
    ],
  },
  {
    title: "Software, Budget, and Timing",
    fields: [
      { name: "softwareUsed", label: "Software Used", placeholder: "OBS, Streamlabs, Ableton, Reaper, vMix, DAWs, plugins, routing tools, camera software, automation tools, etc.", type: "textarea", rows: 5 },
      { name: "extraDetails", label: "Anything Else?", placeholder: "Anything else that would help us evaluate your setup or request?", type: "textarea", rows: 5 },
      { name: "budget", label: "Budget Range", type: "input", inputType: "text" },
      { name: "timeline", label: "Desired Timeline", type: "input", inputType: "text" },
    ],
  },
];

const INITIAL_FORM_DATA = FORM_SECTIONS.flatMap((section) => section.fields).reduce(
  (acc, field) => ({ ...acc, [field.name]: "" }),
  {}
);

function CreatorIntakePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const rawPlan = (query.get("plan") || "").toLowerCase();
  const plan = PLAN_CONTENT[rawPlan] ? rawPlan : null;
  const planContent = PLAN_CONTENT[plan] ?? PLAN_CONTENT.custom;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
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
      <div className="min-h-screen pt-32 pb-24 px-4">
        <Seo title="Creator Intake" description="Select a Creator Tech Support plan to begin your intake questionnaire." path="/creator-intake" noindex />
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <GlassCard variant="gradient" className="p-10 md:p-14">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
                Creator Intake
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Select a Service First
              </h1>
              <p className="text-lg text-gray-300 leading-8 mb-8">
                Please choose Basic, Advanced, or Custom Help from the Creator Services page
                before filling out this questionnaire.
              </p>
              <CtaLink to="/services/streaming">Go to Creator Services</CtaLink>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <Seo title={planContent.title} description={planContent.intro} path="/creator-intake" noindex />
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link
            to="/services/streaming"
            className="inline-flex items-center text-sm font-medium text-brand-blue-400 transition hover:text-brand-blue-300"
          >
            ← Back to Creator Services
          </Link>
        </div>

        <Reveal>
          <GlassCard variant="gradient" className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
              {planContent.eyebrow}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mb-5">
              {planContent.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-8 mb-6">
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
          </GlassCard>
        </Reveal>

        <Reveal delay={0.06}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {FORM_SECTIONS.map((section) => (
              <GlassCard key={section.title} variant="flat">
                <h2 className="text-2xl font-bold text-white mb-5">{section.title}</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {section.fields.map((field) => {
                    const FieldControl = field.type === "textarea" ? Textarea : Input;
                    return (
                      <div key={field.name} className={cn("space-y-2", field.span === 2 && "md:col-span-2")}>
                        <Label htmlFor={field.name}>{field.label}</Label>
                        <FieldControl
                          id={field.name}
                          name={field.name}
                          type={field.type === "input" ? field.inputType : undefined}
                          rows={field.type === "textarea" ? field.rows : undefined}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            ))}

            <GlassCard variant="gradient">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Send Your Intake Details
              </h2>
              <p className="text-gray-300 leading-8 mb-6">
                Submit this form and your questionnaire will be sent directly to Wali
                Productions through the website.
              </p>

              {submitError ? (
                <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {submitError}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-purple-600"
                >
                  {isSubmitting ? "Sending..." : "Send Intake"}
                </Button>
                <CtaLink to="/contact" variant="secondary">Go to Contact Page</CtaLink>
              </div>
            </GlassCard>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

export default CreatorIntakePage;
