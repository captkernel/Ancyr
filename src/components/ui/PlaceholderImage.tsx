'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  label?: string;
  aspectRatio?: '1/1' | '3/4' | '4/3' | '16/9' | '2/3' | '5/4' | '3/2';
  className?: string;
  tone?: 'light' | 'medium' | 'dark';
  overlay?: boolean;
  src?: string;
  priority?: boolean;
}

const toneMap = {
  light:  'bg-stone-50',
  medium: 'bg-stone-100',
  dark:   'bg-stone-200',
};

const ratioMap = {
  '1/1':  'aspect-square',
  '3/4':  'aspect-[3/4]',
  '4/3':  'aspect-[4/3]',
  '16/9': 'aspect-video',
  '2/3':  'aspect-[2/3]',
  '5/4':  'aspect-[5/4]',
  '3/2':  'aspect-[3/2]',
};

export function PlaceholderImage({
  label = 'Photography',
  aspectRatio = '3/4',
  className,
  tone = 'medium',
  overlay = false,
  src,
  priority = false,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const prefixedSrc = src ? basePath + src : undefined;
  const showImage = prefixedSrc && !failed;

  return (
    <div
      className={cn(
        'relative overflow-hidden w-full',
        ratioMap[aspectRatio],
        !showImage && toneMap[tone],
        className
      )}
      role="img"
      aria-label={label}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={prefixedSrc}
          alt={label}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <span className="font-sans text-[0.5625rem] font-medium tracking-[0.2em] uppercase text-stone-400 text-center leading-relaxed">
            {label}
          </span>
        </div>
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/30" />
      )}
    </div>
  );
}
