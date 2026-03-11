'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
  threshold?: number;
}

// Shared IntersectionObserver — one observer for all FadeIn instances
const listeners = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(threshold: number) {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = listeners.get(entry.target);
          if (cb) {
            cb();
            listeners.delete(entry.target);
            sharedObserver?.unobserve(entry.target);
          }
        }
      }
    },
    { threshold, rootMargin: '0px 0px 80px 0px' }
  );
  return sharedObserver;
}

export function FadeIn({ children, delay = 0, className, direction = 'up', threshold = 0.1 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => setVisible(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver(threshold);
    listeners.set(el, show);
    observer.observe(el);

    return () => {
      listeners.delete(el);
      observer.unobserve(el);
    };
  }, [threshold, show]);

  return (
    <div
      ref={ref}
      className={cn(
        'motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
        'transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]',
        visible
          ? 'opacity-100 translate-y-0'
          : cn('opacity-0', direction === 'up' ? 'translate-y-5' : ''),
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
