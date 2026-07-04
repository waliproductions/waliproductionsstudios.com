import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Send, Music, Gamepad2, Briefcase, Handshake, Users, MessageSquare } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CONTACT_EMAIL = 'info@waliproductions.com';

const categories = [
  { value: 'general', label: 'General', icon: MessageSquare, description: 'Anything that doesn’t fit a specific category below.' },
  { value: 'music', label: 'Music', icon: Music, description: 'Music support, platform connections, and brand opportunities.' },
  { value: 'gaming', label: 'Gaming', icon: Gamepad2, description: 'Gaming content, streaming collaborations, and platform questions.' },
  { value: 'business', label: 'Business', icon: Briefcase, description: 'Website builds, church media, livestream, and technical support.' },
  { value: 'partnerships', label: 'Partnerships', icon: Handshake, description: 'Brand partnerships, sponsorships, and cross-promotion.' },
  { value: 'creator-collab', label: 'Creator Collaborations', icon: Users, description: 'Collabs with other streamers, musicians, and content creators.' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', category: 'general', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleCategoryChange = (value) => {
    setForm((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Future integration point: replace this mailto fallback with a real
    // PocketBase submission, e.g.
    //   await pb.collection('contact_messages').create({ ...form });
    // The form already collects everything that collection would need.
    const categoryLabel = categories.find((c) => c.value === form.category)?.label ?? 'General';
    const subject = encodeURIComponent(`[${categoryLabel}] Message from ${form.name || 'Website visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <Seo
        title="Contact"
        description="Get in touch with Wali Studios — general, music, gaming, business, partnership, and creator collaboration inquiries."
        path="/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let's talk about what you need.
          </h1>
          <p className="text-lg text-gray-300 leading-8">
            Whether it's music, gaming, a partnership, or a creator services question,
            pick a category and send a message.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard variant="flat" as="form" onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required value={form.name} onChange={handleChange('name')} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={handleChange('email')} placeholder="you@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Inquiry Category</Label>
                <Select value={form.category} onValueChange={handleCategoryChange}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="What can Wali Studios help with?"
                />
              </div>

              <Button type="submit" size="lg" className="rounded-full gap-2 bg-gradient-to-r from-brand-blue-600 to-brand-purple-600">
                <Send size={16} />
                Send Message
              </Button>

              {status === 'sent' && (
                <p role="status" className="text-sm text-brand-blue-400">
                  Opening your email client to finish sending this message.
                </p>
              )}
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <GlassCard variant="flat">
              <h2 className="text-xl font-bold text-white mb-5">Direct Contact</h2>
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                  <Mail className="w-5 h-5 text-brand-blue-400" />
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </a>
                <a href="tel:+14175016623" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                  <Phone className="w-5 h-5 text-brand-blue-400" />
                  <span>+1 (417) 501-6623</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard variant="gradient">
              <h2 className="text-xl font-bold text-white mb-5">Areas of Inquiry</h2>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.value} className="flex gap-3">
                    <category.icon className="w-5 h-5 shrink-0 text-brand-purple-400 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-white">{category.label}</p>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>

        <Section eyebrow="Looking for something specific?" title="Jump straight to a service page" className="mt-20">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <GlassCard variant="flat" as={Link} to="/services/streaming" className="block h-full">
                <h3 className="text-lg font-semibold text-white mb-2">Creator Tech Support</h3>
                <p className="text-gray-300 leading-7">OBS setup, audio routing, and streaming stability — view pricing tiers.</p>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.06}>
              <GlassCard variant="flat" as={Link} to="/services/business" className="block h-full">
                <h3 className="text-lg font-semibold text-white mb-2">Business &amp; Church Services</h3>
                <p className="text-gray-300 leading-7">Website builds, media support, and livestream guidance for organizations.</p>
              </GlassCard>
            </Reveal>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ContactPage;
