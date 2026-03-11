import type { Metadata } from 'next';
import { FadeIn } from '@/components/sections/FadeIn';
import { Button } from '@/components/ui/Button';
import { faqs } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ – ANCYR',
  description: 'Answers to common questions about Angora, our process, care instructions, authenticity, and provenance.',
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap(section =>
      section.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-6">Frequently Asked</p>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-2xl leading-[1.08]">
              Questions about Angora,<br />care, and provenance.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-editorial max-w-3xl">
          {faqs.map((section, si) => (
            <FadeIn key={section.category} delay={si * 60}>
              <div className="mb-16">
                <p className="label mb-8">{section.category}</p>
                <div className="space-y-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="border-t border-stone-200 pt-6">
                      <h3 className="font-serif font-medium text-lg text-charcoal mb-3">{item.q}</h3>
                      <p className="font-sans text-sm text-stone-500 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn>
            <div className="border-t border-stone-200 pt-10">
              <h2 className="font-serif font-light text-2xl text-charcoal mb-3">Have another question?</h2>
              <p className="font-sans text-sm text-stone-500 mb-6">We are a small team. We respond to every message personally.</p>
              <Button href="/contact" variant="outline">Get in Touch</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
