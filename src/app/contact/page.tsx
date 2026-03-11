import type { Metadata } from 'next';
import { FadeIn } from '@/components/sections/FadeIn';

export const metadata: Metadata = {
  title: 'Contact – ANCYR',
  description: 'Get in touch with ANCYR. For press, wholesale, private appointments, and general enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <p className="label mb-6">Contact</p>
              <h1 className="font-serif font-light text-display-lg text-charcoal mb-6">
                We are a small house.<br />We respond personally.
              </h1>
              <p className="font-sans text-base text-stone-600 leading-relaxed mb-10">
                For press inquiries, wholesale conversations, private appointments, and general questions about ANCYR and our craft, reach us directly. We aim to respond within two business days.
              </p>
              <div className="space-y-8">
                {[
                  { label: 'General', email: 'hello@ancyr.in', note: 'Questions about the brand, collection, and materials' },
                  { label: 'Press', email: 'press@ancyr.in', note: 'Editorial, interviews, and image requests' },
                  { label: 'Private Appointments', email: 'appointments@ancyr.in', note: 'In-person viewing in select cities' },
                ].map(item => (
                  <div key={item.label} className="border-t border-stone-200 pt-6">
                    <p className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-1">{item.label}</p>
                    <a href={'mailto:' + item.email} className="font-serif font-light text-xl text-charcoal hover:text-ink transition-colors duration-200 block mb-1">{item.email}</a>
                    <p className="font-sans text-xs text-stone-400">{item.note}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="border border-stone-200 p-8">
                <p className="label mb-6">Send a Message</p>
                <form className="flex flex-col gap-6" action="mailto:hello@ancyr.in" method="get" encType="text/plain">
                  <div>
                    <label htmlFor="contact-name" className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 block mb-2">Your Name</label>
                    <input id="contact-name" type="text" name="name" autoComplete="name" className="input-luxury" placeholder="Name" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 block mb-2">Email</label>
                    <input id="contact-email" type="email" name="email" autoComplete="email" required className="input-luxury" placeholder="Email address" />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 block mb-2">Subject</label>
                    <input id="contact-subject" type="text" name="subject" className="input-luxury" placeholder="What is this about?" />
                  </div>
                  <div>
                    <label htmlFor="contact-msg" className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 block mb-2">Message</label>
                    <textarea id="contact-msg" name="body" rows={5} className="input-luxury resize-none" placeholder="Your message" />
                  </div>
                  <button type="submit" className="font-sans text-[0.6875rem] tracking-[0.2em] uppercase bg-charcoal text-ivory border border-charcoal px-7 py-3.5 hover:bg-ink transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
