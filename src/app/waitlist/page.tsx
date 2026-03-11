import type { Metadata } from 'next';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { WaitlistForm } from '@/components/ui/WaitlistForm';

export const metadata: Metadata = {
  title: 'Early Access – ANCYR',
  description: 'Join the ANCYR waitlist for early access to Altitude I – Light Edition, launching 2026.',
};

export default function WaitlistPage() {
  return (
    <>
      <section className="min-h-screen flex items-stretch bg-ivory">
        <div className="grid md:grid-cols-2 w-full">
          <FadeIn className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-32 md:py-40">
            <p className="label mb-6">Altitude I — Light Edition</p>
            <h1 className="font-serif font-light text-display-lg text-charcoal mb-6">
              Early access.<br />By request.
            </h1>
            <p className="font-sans text-base text-stone-600 leading-relaxed mb-4 max-w-sm">
              Altitude I opens in 2026. Waitlist members receive private access before the public launch — to view, to hold, to choose.
            </p>
            <p className="font-sans text-base text-stone-600 leading-relaxed mb-10 max-w-sm">
              This is not a marketing list. We will only contact you when access opens.
            </p>
            <WaitlistForm variant="stacked" />
          </FadeIn>
          <div className="hidden md:block">
            <PlaceholderImage
              label="Waitlist editorial — a single shawl draped, quiet, aspirational"
              src="/images/waitlist/hero.svg"
              aspectRatio="3/4"
              tone="medium"
              className="!aspect-auto w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
