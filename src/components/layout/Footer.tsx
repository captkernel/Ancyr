import Link from 'next/link';
import { LogoLockup } from '@/components/ui/LogoLockup';

const footerLinks = {
  House: [
    { href: '/brand',    label: 'Our Story' },
    { href: '/craft',    label: 'Materials & Craft' },
    { href: '/stockists',label: 'Private Appointments' },
    { href: '/contact',  label: 'Contact' },
  ],
  Collection: [
    { href: '/collection',   label: 'Altitude I – Light Edition' },
    { href: '/products',     label: 'Shawls & Stoles' },
    { href: '/waitlist',     label: 'Early Access' },
  ],
  Journal: [
    { href: '/journal',  label: 'All Posts' },
    { href: '/journal/the-truth-about-angora', label: 'On 100% Angora' },
    { href: '/journal/the-1965-question',      label: 'Since 1965' },
  ],
  Help: [
    { href: '/faq',     label: 'FAQ' },
    { href: '/contact', label: 'Get in Touch' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms',   label: 'Terms of Service' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory mt-auto">
      <div className="container-editorial section">
        {/* Upper — logo + tagline */}
        <div className="mb-16 pb-12 border-b border-stone-700 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <LogoLockup size="lg" asLink inverted />
          <p className="font-serif font-light text-xl text-ivory/60 md:text-right max-w-xs leading-relaxed">
            Himalayan Angora, <br />verified and uncompromised.
          </p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-sans text-[0.6rem] font-medium tracking-[0.2em] uppercase text-stone-500 mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-stone-400 hover:text-ivory transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-600">
            &copy; {year} ANCYR — Himalayan Angora House. All rights reserved.
          </p>
          <p className="font-sans text-[0.625rem] tracking-[0.15em] uppercase text-stone-600">
            India-first. Since 1965.
          </p>
        </div>
      </div>
    </footer>
  );
}
