import type { Metadata } from 'next';
import Link from 'next/link';
import { products, type ProductCategory } from '@/data/products';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';

export const metadata: Metadata = {
  title: 'Shawls & Stoles – ANCYR',
  description: 'Browse the Altitude I collection — 100% Himalayan Angora shawls and stoles. Launching 2026.',
};

const categoryLabel: Record<ProductCategory, string> = {
  shawl: 'Shawl',
  stole: 'Stole',
};

export default function ProductsPage() {
  const shawls = products.filter(p => p.category === 'shawl');
  const stoles = products.filter(p => p.category === 'stole');

  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-4">Altitude I — Light Edition</p>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-xl leading-[1.08]">Shawls & Stoles.</h1>
            <p className="font-sans text-base text-stone-500 mt-4 max-w-md">Five pieces. 100% Himalayan Angora. Arriving 2026.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-8">Shawls</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {shawls.map((product, i) => (
              <FadeIn key={product.id} delay={i * 80}>
                <Link href={'/products/' + product.slug} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <PlaceholderImage label={product.coverAlt} src={'/images/products/' + product.slug + '.svg'} aspectRatio="3/4" tone="medium" className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="label mb-1">{product.composition}</p>
                  <h3 className="font-serif font-medium text-xl text-charcoal group-hover:text-ink transition-colors duration-200 mb-1">{product.name}</h3>
                  <p className="font-sans text-xs text-stone-500">{categoryLabel[product.category]} — {product.weightGrams}g — {product.dimensions}</p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="label mb-8">Stoles</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stoles.map((product, i) => (
              <FadeIn key={product.id} delay={i * 80}>
                <Link href={'/products/' + product.slug} className="group block">
                  <div className="relative overflow-hidden mb-4">
                    <PlaceholderImage label={product.coverAlt} src={'/images/products/' + product.slug + '.svg'} aspectRatio="3/4" tone="light" className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <p className="label mb-1">{product.composition}</p>
                  <h3 className="font-serif font-medium text-xl text-charcoal group-hover:text-ink transition-colors duration-200 mb-1">{product.name}</h3>
                  <p className="font-sans text-xs text-stone-500">{categoryLabel[product.category]} — {product.weightGrams}g — {product.dimensions}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
