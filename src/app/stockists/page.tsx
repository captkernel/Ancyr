import type { Metadata } from 'next';
import { FadeIn } from '@/components/sections/FadeIn';
import { Button } from '@/components/ui/Button';
import { WaitlistForm } from '@/components/ui/WaitlistForm';

export const metadata: Metadata = {
  title: 'Private Appointments & Stockists – ANCYR',
  description: 'Book a private appointment with ANCYR, or find stockists. Currently India-only. Launching 2026.',
};

export default function StockistsPage() {
  return (
    <>
      <section className="pt-40 section bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-6">Private Appointments & Stockists</p>
            <h1 className="font-serif font-light text-display-lg text-charcoal max-w-2xl leading-[1.1] mb-6">
              We prefer meeting in person.<br />When possible.
            </h1>
            <p className="font-sans text-base text-stone-600 leading-relaxed max-w-lg mb-12">
              ANCYR is not yet available in stores. When Altitude I launches in 2026, we will open private viewing appointments in select Indian cities before any retail placement.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <FadeIn>
              <div className="border border-stone-200 p-8 h-full">
                <p className="label mb-5">Private Appointments</p>
                <p className="font-serif font-light text-xl text-charcoal mb-4">By appointment, in your city.</p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-6">
                  We will be conducting private viewings in Delhi, Mumbai, and Bengaluru in October–November 2026. These are personal sessions — by appointment only, with a team member present.
                </p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8">
                  To register your interest, write to us or join the waitlist. We will reach out with dates as they are confirmed.
                </p>
                <Button href="mailto:appointments@ancyr.com" variant="outline" external>
                  Request Appointment
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="border border-stone-200 p-8 h-full">
                <p className="label mb-5">Retail & Stockists</p>
                <p className="font-serif font-light text-xl text-charcoal mb-4">Not yet in stores.</p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-6">
                  Altitude I will launch directly — no retail intermediaries for the first collection. We want the first owners to have a direct relationship with the house.
                </p>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8">
                  Retail and stockist placement is planned for 2027 onwards, in curated luxury retail environments in India. If you represent such a space, we would be glad to hear from you.
                </p>
                <Button href="mailto:hello@ancyr.com?subject=Stockist Enquiry" variant="outline" external>
                  Stockist Enquiries
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="bg-stone-50 p-10 max-w-lg">
              <p className="label mb-4">Stay Informed</p>
              <h2 className="font-serif font-light text-2xl text-charcoal mb-4">Know when appointments open.</h2>
              <WaitlistForm variant="stacked" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
