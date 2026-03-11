import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoLockupProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  asLink?: boolean;
  inverted?: boolean;
}

const sizeMap = {
  sm: {
    name:    'text-[1.125rem] tracking-[0.3em]',
    sub:     'text-[0.45rem]  tracking-[0.25em]',
    since:   'text-[0.4rem]   tracking-[0.2em]',
    gap:     'gap-[0.2rem]',
    divider: 'my-[0.15rem]',
  },
  md: {
    name:    'text-[1.5rem]   tracking-[0.3em]',
    sub:     'text-[0.55rem]  tracking-[0.25em]',
    since:   'text-[0.5rem]   tracking-[0.2em]',
    gap:     'gap-[0.25rem]',
    divider: 'my-[0.2rem]',
  },
  lg: {
    name:    'text-[2rem]     tracking-[0.32em]',
    sub:     'text-[0.65rem]  tracking-[0.28em]',
    since:   'text-[0.58rem]  tracking-[0.22em]',
    gap:     'gap-[0.3rem]',
    divider: 'my-[0.25rem]',
  },
  xl: {
    name:    'text-[2.75rem]  tracking-[0.35em]',
    sub:     'text-[0.75rem]  tracking-[0.3em]',
    since:   'text-[0.65rem]  tracking-[0.25em]',
    gap:     'gap-[0.35rem]',
    divider: 'my-[0.3rem]',
  },
};

export function LogoLockup({ size = 'md', className, asLink = true, inverted = false }: LogoLockupProps) {
  const s = sizeMap[size];
  const textColor = inverted ? 'text-ivory' : 'text-charcoal';
  const dividerColor = inverted ? 'bg-ivory/30' : 'bg-stone-300';

  const inner = (
    <div className={cn('flex flex-col items-center select-none', s.gap, className)}>
      {/* Line 1: ANCYR */}
      <span
        className={cn(
          'font-serif font-light leading-none uppercase',
          s.name,
          textColor
        )}
      >
        ANCYR
      </span>

      {/* Divider */}
      <span className={cn('block w-full h-px', dividerColor, s.divider)} aria-hidden="true" />

      {/* Line 2: HIMALAYAN ANGORA HOUSE */}
      <span
        className={cn(
          'font-sans font-medium leading-none uppercase whitespace-nowrap',
          s.sub,
          textColor
        )}
      >
        HIMALAYAN ANGORA HOUSE
      </span>

      {/* Line 3: SINCE 1965 */}
      <span
        className={cn(
          'font-sans font-normal leading-none uppercase',
          s.since,
          inverted ? 'text-ivory/60' : 'text-stone-500'
        )}
      >
        SINCE 1965
      </span>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="ANCYR – Himalayan Angora House">
        {inner}
      </Link>
    );
  }

  return inner;
}
