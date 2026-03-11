import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ancyr.com'),
  title: {
    default: 'ANCYR – Himalayan Angora House',
    template: '%s | ANCYR',
  },
  description:
    'India\'s ultra-premium Himalayan Angora house. 100% Angora shawls and stoles, crafted since 1965. Altitude I – Light Edition launching 2026.',
  keywords: [
    'Angora shawls India',
    'luxury shawls',
    'Himalayan Angora',
    '100% Angora shawl',
    'luxury stoles India',
    'ANCYR',
    'Angora House India',
  ],
  authors: [{ name: 'ANCYR' }],
  creator: 'ANCYR – Himalayan Angora House',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ancyr.com',
    siteName: 'ANCYR – Himalayan Angora House',
    title: 'ANCYR – Himalayan Angora House',
    description:
      '100% Himalayan Angora shawls and stoles. Crafted since 1965. Altitude I — Light Edition. Launching 2026.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANCYR – Himalayan Angora House',
    description: '100% Himalayan Angora. Shawls and stoles. Since 1965.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F4',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ANCYR',
  description: 'India\u2019s ultra-premium Himalayan Angora house. 100% Angora shawls and stoles, crafted since 1965.',
  url: 'https://ancyr.com',
  foundingDate: '1965',
  brand: {
    '@type': 'Brand',
    name: 'ANCYR',
    slogan: 'Himalayan Angora House',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'Himachal Pradesh',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
