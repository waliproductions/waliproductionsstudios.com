import React, { useMemo, useState } from 'react';
import { Drum, Waves, Disc, Music4, Wind, Layers, ShoppingCart } from 'lucide-react';
import Seo from '@/components/common/Seo';
import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import GlassCard from '@/components/common/GlassCard';
import CtaLink from '@/components/common/CtaLink';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder storefront data. Once a real catalog exists, replace this
// with a fetch from PocketBase (see apps/pocketbase) — each pack should
// carry { id, title, category, price, isFree, image, downloadUrl }.
const categories = [
  { key: 'sound-packs', name: 'Sound Packs', icon: Layers },
  { key: 'sample-packs', name: 'Sample Packs', icon: Waves },
  { key: 'drum-kits', name: 'Drum Kits', icon: Drum },
  { key: 'loops', name: 'Loops', icon: Disc },
  { key: 'midi-packs', name: 'MIDI Packs', icon: Music4 },
  { key: 'ambient-packs', name: 'Ambient Packs', icon: Wind },
];

const products = [
  { id: 1, title: 'Foundations Vol. 1', category: 'sound-packs', isFree: false, price: '$12' },
  { id: 2, title: 'Analog Warmth', category: 'sample-packs', isFree: false, price: '$18' },
  { id: 3, title: 'Trap Essentials', category: 'drum-kits', isFree: true, price: 'Free' },
  { id: 4, title: 'Midnight Loops', category: 'loops', isFree: false, price: '$9' },
  { id: 5, title: 'Chord Progressions I', category: 'midi-packs', isFree: true, price: 'Free' },
  { id: 6, title: 'Stillness', category: 'ambient-packs', isFree: false, price: '$15' },
];

// Payment processors this storefront is architected for. No checkout
// logic is implemented yet — wiring one of these in is a drop-in once
// a merchant account is ready.
const checkoutIntegrations = ['Stripe', 'PayPal', 'Shopify', 'Gumroad', 'Patreon'];

const MarketplacePage = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products;
    if (filter === 'free') return products.filter((p) => p.isFree);
    if (filter === 'paid') return products.filter((p) => !p.isFree);
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <Seo
        title="Digital Marketplace"
        description="Sound packs, sample packs, drum kits, loops, MIDI packs, and ambient packs from Wali Studios — free and paid downloads for producers and creators."
        path="/marketplace"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 max-w-3xl">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue-400 mb-3">
            Digital Marketplace
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Sound tools built by creators, for creators.
          </h1>
          <p className="text-lg text-gray-300 leading-8">
            Sound packs, drum kits, loops, MIDI, and ambient textures — a growing catalog of
            free and paid downloads for producers, streamers, and musicians.
          </p>
        </Reveal>

        <Section eyebrow="Categories" title="Browse by category">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Reveal key={category.key} delay={i * 0.05}>
                <GlassCard variant="flat" className="flex items-center gap-4">
                  <category.icon className="w-7 h-7 shrink-0 text-brand-purple-400" aria-hidden="true" />
                  <span className="font-semibold text-white">{category.name}</span>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Catalog" title="Latest packs">
          <Reveal className="mb-8">
            <Tabs value={filter} onValueChange={setFilter}>
              <TabsList className="flex flex-wrap h-auto gap-1 bg-white/5 p-1.5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="paid">Paid</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category.key} value={category.key}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.05}>
                <GlassCard variant="flat" className="flex h-full flex-col p-0 overflow-hidden">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-blue-600/20 to-brand-purple-600/20">
                    <Disc className="w-10 h-10 text-white/50" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Badge variant={product.isFree ? 'secondary' : 'default'} className="rounded-full">
                        {product.isFree ? 'Free' : 'Paid'}
                      </Badge>
                      <span className="text-sm font-semibold text-gray-300">{product.price}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-4">{product.title}</h3>
                    {/* Future integration point: real checkout / download
                        action wired to Stripe, PayPal, Shopify, or Gumroad. */}
                    <button
                      type="button"
                      disabled
                      className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-gray-400 cursor-not-allowed"
                      aria-disabled="true"
                    >
                      <ShoppingCart size={16} />
                      Coming Soon
                    </button>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section eyebrow="Checkout" title="Built for a real storefront">
          <Reveal>
            <GlassCard variant="gradient" className="text-center p-10 md:p-14">
              <p className="max-w-2xl mx-auto text-gray-300 leading-8 mb-8">
                The marketplace architecture is ready for real payments. No processor is
                connected yet — this section previews the checkout options Wali Studios
                is prepared to integrate.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {checkoutIntegrations.map((name) => (
                  <Badge key={name} variant="outline" className="rounded-full px-4 py-1.5 text-sm border-white/15 text-gray-300">
                    {name}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <CtaLink to="/contact">Ask About Licensing</CtaLink>
              </div>
            </GlassCard>
          </Reveal>
        </Section>
      </div>
    </div>
  );
};

export default MarketplacePage;
