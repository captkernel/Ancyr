import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { WaitlistForm } from '@/components/ui/WaitlistForm';
import { LogoLockup } from '@/components/ui/LogoLockup';
import { getFeaturedProducts } from '@/data/products';
import { getAllJournalPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'ANCYR – Himalayan Angora House',
  description: "India's ultra-premium Himalayan Angora house. 100% Angora shawls and stoles, crafted since 1965.",
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3);
  const journalPosts = getAllJournalPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            label="Hero editorial — shawl in motion, Himalayan light, minimal, atmospheric"
            src="/images/hero/home-hero.svg"
            aspectRatio="1/1"
            tone="medium"
            priority
            className="!aspect-auto w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        </div>
        <div className="container-editorial relative z-10">
          <FadeIn>
            <LogoLockup size="xl" asLink={false} inverted />
            <p className="label text-ivory/70 mb-6 mt-8">Altitude I — Light Edition</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-serif font-light text-ivory text-display-2xl max-w-3xl leading-[1.05] mb-6">
              The fibre,<br />uncompromised.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="font-sans text-base text-ivory/75 max-w-md mb-10 leading-relaxed">
              100% Himalayan Angora. Not a blend. Every shawl and stole
              we make carries verified composition — because that is the
              only standard we recognise.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <Button href="/collection" variant="primary">Discover Altitude I</Button>
              <Button href="/waitlist" variant="outline" className="border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal">
                Request Early Access
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IDENTITY STATEMENT */}
      <section className="section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <FadeIn className="md:col-span-5">
              <p className="label mb-6">Since 1965</p>
              <h2 className="font-serif font-light text-display-lg text-charcoal mb-6">
                A house built on one honest material.
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                ANCYR began as a family craft. A generation of Himalayan Angora — combed,
                spun, and woven by hand in Uttarakhand. What was knowledge became craft.
                What was craft became a house.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-8">
                We make only shawls and stoles. We make them from 100% Angora where we
                say we do. That is not a claim — it is a commitment held since before
                the industry began calling blends by a different name.
              </p>
              <Button href="/brand" variant="ghost">Our Story</Button>
            </FadeIn>
            <FadeIn delay={150} className="md:col-span-7">
              <div className="grid grid-cols-2 gap-3">
                <PlaceholderImage label="Artisan hands combing raw Angora fibre — macro, warm light" src="/images/craft/combing.svg" aspectRatio="3/4" tone="medium" />
                <div className="flex flex-col gap-3">
                  <PlaceholderImage label="Himalayan landscape — Uttarakhand, mist" src="/images/brand/himalayan-landscape.svg" aspectRatio="4/3" tone="light" />
                  <PlaceholderImage label="Finished shawl edge detail — texture, weave" src="/images/craft/finishing.svg" aspectRatio="4/3" tone="dark" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MATERIAL TRUTH */}
      <section className="section bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <span className="divider" />
              <p className="label">The Material</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { num: '100%', title: 'Angora. Verified.', body: 'When our label reads 100% Angora, the composition is exactly that. We produce, verify, and disclose.' },
              { num: '1965', title: 'Years of unbroken craft.', body: 'Our production knowledge spans three generations. The same hands, the same mountain, the same standards.' },
              { num: '180g', title: 'Warmth without weight.', body: 'Angora offers more warmth per gram than most fibres. Light enough to carry everywhere.' },
            ].map((card, i) => (
              <FadeIn key={card.num} delay={i * 100}>
                <div className="border-t border-stone-200 pt-8">
                  <p className="font-serif font-light text-[3.5rem] text-stone-300 leading-none mb-4">{card.num}</p>
                  <h3 className="font-serif font-medium text-xl text-charcoal mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="flex justify-center">
              <Button href="/craft" variant="outline">Materials &amp; Craft</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COLLECTION TEASER */}
      <section className="section bg-charcoal text-ivory overflow-hidden">
        <div className="container-editorial">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="label text-stone-500 mb-4">Arriving 2026</p>
              <h2 className="font-serif font-light text-display-xl text-ivory mb-4">Altitude I</h2>
              <p className="font-serif font-light italic text-display-md text-ivory/50">Light Edition</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={'/products/' + product.slug} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <PlaceholderImage label={product.coverAlt} src={'/images/products/' + product.slug + '.svg'} aspectRatio="3/4" tone="dark" overlay className="transition-transform duration-700 group-hover:scale-[1.03]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="label text-ivory/70 mb-1">{product.composition}</p>
                      <p className="font-serif font-light text-xl text-ivory">{product.name}</p>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-stone-500 tracking-wide uppercase">
                    {product.category} — {product.dimensions}
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/collection" variant="outline" className="border-stone-600 text-ivory hover:bg-ivory hover:text-charcoal hover:border-ivory">View Collection</Button>
              <Button href="/products" variant="ghost" className="text-stone-400 hover:text-ivory hover:border-stone-600">All Products</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      {journalPosts.length > 0 && (
        <section className="section bg-ivory">
          <div className="container-editorial">
            <FadeIn>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="label mb-2">From the Journal</p>
                  <h2 className="font-serif font-light text-display-md text-charcoal">Craft. Material. Story.</h2>
                </div>
                <Link href="/journal" className="hidden sm:block font-sans text-xs tracking-[0.16em] uppercase text-stone-500 hover:text-charcoal transition-colors duration-200">All Posts</Link>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {journalPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 80}>
                  <Link href={'/journal/' + post.slug} className="group block">
                    <PlaceholderImage label={'Journal cover — ' + post.title} src={'/images/journal/' + post.slug + '.svg'} aspectRatio="4/3" tone="light" className="mb-5 transition-transform duration-500 group-hover:scale-[1.02]" />
                    <p className="label mb-2">{post.tags?.[0] ?? 'Journal'}</p>
                    <h3 className="font-serif font-medium text-xl text-charcoal mb-2 leading-snug group-hover:text-ink transition-colors duration-200">{post.title}</h3>
                    <p className="font-sans text-sm text-stone-500 line-clamp-2 leading-relaxed mb-3">{post.excerpt}</p>
                    <p className="font-sans text-xs text-stone-400">{formatDate(post.date)} &middot; {post.readingTime}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WAITLIST CTA */}
      <section className="section-sm bg-stone-100">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="label mb-4">Altitude I — Light Edition</p>
            <h2 className="font-serif font-light text-display-md text-charcoal mb-4">Be the first to know.</h2>
            <p className="font-sans text-base text-stone-500 mb-10 max-w-md mx-auto leading-relaxed">
              Altitude I opens to early access before the public. Leave your email
              and we will reach out when the collection is ready.
            </p>
            <div className="max-w-sm mx-auto">
              <WaitlistForm variant="stacked" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
