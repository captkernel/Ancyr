import type { Metadata } from 'next';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Story – ANCYR',
  description: 'The heritage of ANCYR. Himalayan Angora, family craft, since 1965.',
};

export default function BrandPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-24 section bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-6">Heritage</p>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-3xl mb-0 leading-[1.08]">
              A house born in the mountains.<br />Built to last.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* HERO IMAGE */}
      <FadeIn>
        <PlaceholderImage
          label="Full-width heritage image — Kullu valley, early light, generational craft space"
          src="/images/brand/himalayan-landscape.svg"
          aspectRatio="16/9"
          tone="medium"
          className="w-full"
        />
      </FadeIn>

      {/* ORIGIN STORY */}
      <section className="section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="label mb-4">The Origin</p>
                <p className="font-serif font-light text-[3rem] text-stone-200 leading-none">1965</p>
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={100}>
                <div className="space-y-6">
                  <p className="font-serif font-light text-2xl text-charcoal leading-relaxed">
                    From the house that first brought Angora to India in 1965.
                  </p>
                  <div className="pl-2 border-l-4 border-stone-200">
                    <p className="font-sans text-base text-stone-600 leading-relaxed mb-3">
                      A fibre then unknown to the region, introduced to the Himalayan valley of Kullu and quietly nurtured in the cold mountain air where it thrives.
                    </p>
                    <p className="font-sans text-base text-stone-600 leading-relaxed mb-3">
                      Over time, the knowledge of working with Angora spread through the valleys — a material passed through careful hands, shaped by patience, climate, and craft.
                    </p>
                    <p className="font-sans text-base text-stone-600 leading-relaxed mb-3">
                      For six decades, that knowledge remained in the mountains.
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="font-serif font-light text-xl text-charcoal mb-2">ANCYR marks its return.</p>
                    <p className="font-sans text-base text-stone-600 leading-relaxed">
                      A house built on Himalayan Angora.<br />
                      <span className="block mt-2">Six decades of understanding, now ready to be shared with the world.</span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE PAIR */}
      <section className="section-sm bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-4">
              <PlaceholderImage label="Family workshop — generational weaving, hands at loom" src="/images/brand/heritage.svg" aspectRatio="4/3" tone="light" />
              <PlaceholderImage label="Raw Angora fibre — just combed, natural loft, close-up" src="/images/brand/raw-fibre.svg" aspectRatio="4/3" tone="medium" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-editorial mx-auto">
              <p className="label mb-6">What We Stand For</p>
              <h2 className="font-serif font-light text-display-lg text-charcoal mb-10">
                Quiet confidence. Proof-led craft.
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 max-w-editorial-wide mx-auto">
            {[
              {
                title: 'Material truth',
                body: 'We make claims we can stand behind. When we say 100% Angora, the certificate, the process, and the fibre agree. Verified composition is not a differentiator — it is the baseline.',
              },
              {
                title: 'Family production',
                body: 'Our plant is not a contract manufacturer. It is ours. That means full visibility into every step — combing, spinning, weaving, finishing. We see every metre before it leaves.',
              },
              {
                title: 'India first',
                body: 'Before we think about export, we want to do right by the Indian luxury buyer — who has been offered too many blends called pure, and too many imports called luxury. We are neither.',
              },
              {
                title: 'Only what we can do well',
                body: 'We make shawls and stoles. That is the full extent of our range. The discipline of constraint is how quality survives.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="border-t border-stone-200 pt-6">
                  <h3 className="font-serif font-medium text-lg text-charcoal mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE INTERLUDE */}
      <section className="section bg-charcoal">
        <div className="container-narrow text-center">
          <FadeIn>
            <blockquote className="font-serif font-light text-[1.875rem] md:text-[2.5rem] text-ivory leading-[1.3] italic mb-8">
              "The mountain does not need to announce itself. Neither does the fibre."
            </blockquote>
            <cite className="font-sans text-xs tracking-[0.2em] uppercase text-stone-500 not-italic">
              — On the discipline of Angora
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div>
                <p className="label mb-2">Altitude I — Light Edition</p>
                <h2 className="font-serif font-light text-2xl text-charcoal">See what the craft produces.</h2>
              </div>
              <div className="flex gap-4">
                <Button href="/collection" variant="primary">View Collection</Button>
                <Button href="/craft" variant="outline">Our Process</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
