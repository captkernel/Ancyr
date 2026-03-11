import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'ink';

interface ButtonBaseProps {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: undefined;
  onClick?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-charcoal text-ivory border border-charcoal hover:bg-ink hover:border-ink',
  outline:
    'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory',
  ghost:
    'bg-transparent text-charcoal border border-transparent hover:border-stone-200 hover:bg-stone-50',
  ink:
    'bg-ink text-ivory border border-ink hover:bg-stone-800 hover:border-stone-800',
};

const sizeStyles = {
  sm: 'text-[0.6875rem] tracking-[0.18em] px-5 py-2.5',
  md: 'text-[0.6875rem] tracking-[0.2em]  px-7 py-3.5',
  lg: 'text-[0.75rem]   tracking-[0.2em]  px-9 py-4',
};

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase transition-all duration-300 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-3';

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], disabled && 'opacity-50 cursor-not-allowed pointer-events-none', className);

  if ('href' in rest && rest.href) {
    const { href, external } = rest;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', onClick } = rest as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
