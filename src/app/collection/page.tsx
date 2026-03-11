import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import { launchTimeline } from '@/data/collection';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { Button } from '@/components/ui/Button';
import { WaitlistForm } from '@/components/ui/WaitlistForm';

export const metadata: Metadata = {
  title: 'Altitude I – Light Edition – ANCYR',
  description: 'The debut collection from ANCYR. Five pieces. 100% Himalayan Angora. Shawls and stoles. Launching 2026.',
};

export default function CollectionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-16 pt-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage label="Collection hero — all five pieces arranged as editorial flat lay or drape grouping" src="/images/collection/hero.svg" aspectRatio="16/9" tone="dark" className="!aspect-auto w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        <div className="container-editorial relative z-10">
          <FadeIn>
            <p className="label text-stone-500 mb-4">Debut Collection</p>
            <h1 className="font-serif font-light text-display-2xl text-ivory max-w-2xl leading-[1.05] mb-3">Altitude I</h1>
            <p className="font-serif font-light italic text-display-lg text-ivory/50 mb-6">Light Edition</p>
            <p className="font-sans text-base text-ivory/60 max-w-sm mb-10">Five pieces. 100% Himalayan Angora. Shawls and stoles. Arriving 2026.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/waitlist" variant="primary">Request Early Access</Button>
              <Button href="/products" variant="outline" className="border-stone-600 text-ivory hover:bg-ivory hover:text-charcoal hover:border-ivory">View All Pieces</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COLLECTION STORY */}
      <section className="section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="label mb-6">On the Collection</p>
              <h2 className="font-serif font-light text-display-md text-charcoal mb-6">The first chapter. Carefully considered.</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                Altitude I is not a full range. It is five pieces — a deliberate number for a deliberate reason. We wanted to introduce ourselves with work that could be examined closely, worn thoroughly, and understood completely before we added more.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                Light Edition refers not to weight — though at 120–195 grams, these are among the lightest Angora pieces you will find — but to our approach: spare, unornamented, true to the material.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                Every colour in this collection was chosen for its relationship to the Himalayan palette at different hours — ivory at dawn, stone at midday, dusk at the hour it describes.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <PlaceholderImage label="Collection story image — shawl draped over stone surface, Himalayan context" src="/images/collection/story.svg" aspectRatio="3/4" tone="light" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <span className="divider" />
              <p className="label">The Pieces</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <FadeIn key={product.id} delay={i * 80}>
                <Link href={'/products/' + product.slug} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <PlaceholderImage label={product.coverAlt} src={'/images/products/' + product.slug + '.svg'} aspectRatio="3/4" tone="medium" overlay className="transition-transform duration-700 group-hover:scale-[1.03]" />
                    {product.featured && (
                      <span className="absolute top-4 left-4 font-sans text-[0.5625rem] font-medium tracking-[0.18em] uppercase bg-ivory/90 text-charcoal px-2.5 py-1">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="label mb-1">{product.composition}</p>
                      <h3 className="font-serif font-medium text-lg text-charcoal leading-snug group-hover:text-ink transition-colors duration-200">{product.name}</h3>
                      <p className="font-sans text-xs text-stone-500 mt-1">{product.category === 'shawl' ? 'Shawl' : 'Stole'} — {product.weightGrams}g — {product.dimensions}</p>
                    </div>
                    <p className="font-sans text-xs text-stone-400 whitespace-nowrap pt-0.5">{product.priceINR ? '₹' + product.priceINR.toLocaleString('en-IN') : 'Price on request'}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCH TIMELINE */}
      <section className="section bg-charcoal text-ivory">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="label text-stone-500 mb-6">Launch Timeline</p>
              <h2 className="font-serif font-light text-display-md text-ivory mb-10">2026. Early access opens before.</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {launchTimeline.map((item, i) => (
              <FadeIn key={item.date} delay={i * 80}>
                <div className="border-t border-stone-700 pt-6">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">{item.date}</p>
                  <h3 className="font-serif font-medium text-lg text-ivory mb-3">{item.event}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="max-w-sm">
              <WaitlistForm variant="stacked" label="Join the early access list" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
