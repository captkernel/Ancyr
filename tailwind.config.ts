import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        stone: {
          50:  '#F8F5F0',
          100: '#F0EBE3',
          200: '#DDD7C8',
          300: '#C4BAA8',
          400: '#A89880',
          500: '#8B7B6B',
          600: '#6E5E50',
          700: '#4A3728',
          800: '#2E2018',
        },
        charcoal: '#1C1917',
        ink:     '#4A3728',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'Cambria', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem,   6vw, 7rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['clamp(2.5rem, 5vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg':  ['clamp(2rem,   4vw, 4rem)',   { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'display-md':  ['clamp(1.5rem, 3vw, 2.75rem)',{ lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        editorial: '56ch',
        'editorial-wide': '80ch',
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        ancyr: {
          css: {
            '--tw-prose-body':       theme('colors.charcoal'),
            '--tw-prose-headings':   theme('colors.charcoal'),
            '--tw-prose-links':      theme('colors.ink'),
            '--tw-prose-bold':       theme('colors.charcoal'),
            '--tw-prose-hr':         theme('colors.stone.200'),
            '--tw-prose-quotes':     theme('colors.stone.600'),
            '--tw-prose-quote-borders': theme('colors.stone.300'),
            '--tw-prose-captions':   theme('colors.stone.500'),
            maxWidth: 'none',
            fontFamily: 'var(--font-inter)',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-cormorant)',
              fontWeight: '500',
            },
            h2: {
              fontSize: '2.25rem',
              lineHeight: '1.2',
              marginTop: '3rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.625rem',
              lineHeight: '1.3',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
            },
            p: { marginTop: '1.4em', marginBottom: '1.4em' },
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': { color: theme('colors.charcoal') },
            },
            blockquote: {
              borderLeftColor: theme('colors.stone.300'),
              borderLeftWidth: '2px',
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.35rem',
              fontStyle: 'italic',
              fontWeight: '400',
              paddingLeft: '1.5em',
              color: theme('colors.stone.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
