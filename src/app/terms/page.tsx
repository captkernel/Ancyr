import type { Metadata } from 'next';
import { FadeIn } from '@/components/sections/FadeIn';

export const metadata: Metadata = {
  title: 'Terms of Service – ANCYR',
};

export default function TermsPage() {
  return (
    <section className="pt-40 section bg-ivory">
      <div className="container-editorial max-w-3xl">
        <FadeIn>
          <p className="label mb-6">Legal</p>
          <h1 className="font-serif font-light text-display-md text-charcoal mb-12">Terms of Service</h1>
          <div className="prose prose-ancyr max-w-none">
            <p className="font-sans text-sm text-stone-400 mb-10">Last updated: March 2025. This is a placeholder policy. Full terms will be published before launch.</p>

            <h2>Use of this site</h2>
            <p>This website is operated by ANCYR (Himalayan Angora House). By accessing it, you agree not to misuse the content or services provided. All product descriptions, photography, and written content are the property of ANCYR.</p>

            <h2>Product availability</h2>
            <p>All products are subject to availability. Joining the waitlist does not constitute a purchase or reservation. Prices, where displayed, are indicative and subject to change prior to launch.</p>

            <h2>Intellectual property</h2>
            <p>The ANCYR name, logo, and all brand assets are protected intellectual property. Reproduction without written permission is not permitted.</p>

            <h2>Contact</h2>
            <p>For legal enquiries: legal@ancyr.in</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
