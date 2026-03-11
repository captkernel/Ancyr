interface WaitlistFormProps {
  variant?: 'inline' | 'stacked';
  label?: string;
}

export function WaitlistForm({ variant = 'inline', label }: WaitlistFormProps) {
  if (variant === 'stacked') {
    return (
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {label && <p className="label">{label}</p>}
        <p className="font-serif text-xl font-light text-charcoal">
          Early access opens 2026.
        </p>
        <p className="font-sans text-sm text-stone-500 leading-relaxed">
          For private access and appointment requests, write to us at{' '}
          <a href="mailto:hello@ancyr.com" className="underline underline-offset-2 hover:text-charcoal transition-colors">
            hello@ancyr.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {label && <p className="label mb-4">{label}</p>}
      <p className="font-sans text-sm text-stone-500 leading-relaxed">
        Early access opens 2026. Write to{' '}
        <a href="mailto:hello@ancyr.com" className="underline underline-offset-2 hover:text-charcoal transition-colors">
          hello@ancyr.com
        </a>
      </p>
    </div>
  );
}
