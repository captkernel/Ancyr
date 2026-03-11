import type { Metadata } from 'next';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { Button } from '@/components/ui/Button';
import { processSteps, materialStats } from '@/data/craft';

export const metadata: Metadata = {
  title: 'Materials & Craft – ANCYR',
  description: 'How ANCYR sources, combs, spins, and weaves 100% Himalayan Angora. The full process, transparently told.',
};

export default function CraftPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-6">Materials & Craft</p>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-2xl leading-[1.08]">
              How a 100% Angora shawl<br />is actually made.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <PlaceholderImage label="Macro fibre shot — individual Angora strands, extreme close-up" src="/images/craft/fibre-macro.svg" aspectRatio="3/4" tone="light" />
            </FadeIn>
            <FadeIn delay={100}>
              <p className="label mb-6">The Fibre</p>
              <h2 className="font-serif font-light text-display-md text-charcoal mb-6">What Angora is. What it is not.</h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                Angora fibre comes from the Angora rabbit — not the Angora goat (that is mohair). It is one of the finest natural fibres available, with a hollow core that creates exceptional warmth-to-weight performance.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-4">
                The market for Angora in India is complicated. The fibre is expensive and difficult to process, which creates an incentive for blending — mixing Angora with wool or acrylic to reduce cost while retaining the label value.
              </p>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                We do not blend where we say we do not blend. Our 100% Angora products are exactly that. Verified composition. Transparent provenance.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section bg-stone-50">
        <div className="container-editorial">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <span className="divider" />
              <p className="label">The Process</p>
            </div>
          </FadeIn>
          <div className="space-y-20">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 60}>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1">
                    <p className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-stone-400">{step.step}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-serif font-medium text-2xl text-charcoal mb-4">{step.title}</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{step.body}</p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <PlaceholderImage label={step.imageLabel} src={step.imageSrc} aspectRatio="4/3" tone={i % 2 === 0 ? 'light' : 'medium'} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal text-ivory">
        <div className="container-editorial">
          <FadeIn>
            <h2 className="font-serif font-light text-display-md text-ivory mb-12 max-w-2xl">
              The numbers behind the material.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {materialStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 80}>
                <div className="border-t border-stone-700 pt-6">
                  <p className="font-serif font-light text-[2.5rem] text-ivory leading-none mb-2">{stat.value}</p>
                  <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">{stat.label}</p>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">{stat.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-ivory">
        <div className="container-editorial flex flex-col sm:flex-row gap-6 items-center justify-between">
          <FadeIn>
            <div>
              <h2 className="font-serif font-light text-2xl text-charcoal mb-1">See the craft in the collection.</h2>
              <p className="font-sans text-sm text-stone-500">Altitude I — shawls and stoles, 100% Himalayan Angora.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex gap-4">
              <Button href="/collection" variant="primary">Altitude I</Button>
              <Button href="/faq" variant="outline">Angora FAQ</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
