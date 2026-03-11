'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoLockup } from '@/components/ui/LogoLockup';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/brand',      label: 'House'      },
  { href: '/craft',      label: 'Craft'      },
  { href: '/collection', label: 'Altitude I' },
  { href: '/products',   label: 'Shop'       },
  { href: '/journal',    label: 'Journal'    },
  { href: '/contact',    label: 'Contact'    },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    const isScrolled = window.scrollY > 32;
    setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ivory/95 backdrop-blur-sm border-b border-stone-100 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-editorial flex items-center justify-between gap-4">
          {/* Logo */}
          <LogoLockup size="sm" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={cn(
                  'nav-link font-sans text-[0.6875rem] tracking-[0.16em] uppercase transition-colors duration-200',
                  pathname.startsWith(link.href)
                    ? 'text-charcoal'
                    : 'text-stone-600 hover:text-charcoal'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/waitlist" variant="outline" size="sm">
              Early Access
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={cn('block w-5 h-px bg-charcoal transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-5 h-px bg-charcoal transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={cn('block w-5 h-px bg-charcoal transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — only rendered when open */}
      {menuOpen && (
      <div
        className="fixed inset-0 z-40 bg-ivory lg:hidden flex flex-col animate-fade-up"
      >
        <div className="pt-28 px-8 flex-1 flex flex-col">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={cn(
                  'font-serif font-light text-[2rem] leading-tight py-3 border-b border-stone-100 transition-colors duration-200',
                  pathname.startsWith(link.href) ? 'text-charcoal' : 'text-stone-500 hover:text-charcoal',
                  'animate-fade-up'
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <Button href="/waitlist" variant="primary" size="lg" className="w-full">
              Request Early Access
            </Button>
          </div>

          <div className="mt-auto pb-10">
            <p className="label">Altitude I — Light Edition</p>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
