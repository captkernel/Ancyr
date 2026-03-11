import type { Metadata } from 'next';
import { FadeIn } from '@/components/sections/FadeIn';

export const metadata: Metadata = {
  title: 'Privacy Policy – ANCYR',
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 section bg-ivory">
      <div className="container-editorial max-w-3xl">
        <FadeIn>
          <p className="label mb-6">Legal</p>
          <h1 className="font-serif font-light text-display-md text-charcoal mb-12">Privacy Policy</h1>
          <div className="prose prose-ancyr max-w-none">
            <p className="font-sans text-sm text-stone-400 mb-10">Last updated: March 2025. This is a placeholder policy. A full policy will be published before launch.</p>

            <h2>What we collect</h2>
            <p>When you join our waitlist, we collect your name and email address. That is all. We do not use cookies for tracking. We do not share your data with third parties for marketing.</p>

            <h2>How we use it</h2>
            <p>Your email is used solely to notify you of early access to Altitude I. We will not add you to any other list, or contact you for any other purpose, without your explicit consent.</p>

            <h2>Your rights</h2>
            <p>You may request deletion of your data at any time by emailing hello@ancyr.in. We will process your request within 7 business days.</p>

            <h2>Contact</h2>
            <p>For privacy-related questions, write to: privacy@ancyr.in</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
