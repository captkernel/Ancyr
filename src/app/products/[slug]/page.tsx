import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { WaitlistForm } from '@/components/ui/WaitlistForm';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found – ANCYR' };
  return {
    title: product.name + ' – ANCYR',
    description: product.story,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.story,
    brand: { '@type': 'Brand', name: 'ANCYR' },
    material: product.composition,
    countryOfOrigin: 'IN',
    category: product.category === 'shawl' ? 'Shawl' : 'Stole',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'INR',
      ...(product.priceINR ? { price: product.priceINR } : {}),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="pt-32 section bg-ivory">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <FadeIn>
              <div className="sticky top-28">
                <PlaceholderImage label={product.coverAlt} src={'/images/products/' + product.slug + '.svg'} aspectRatio="3/4" tone="light" />
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <PlaceholderImage label="Detail shot — drape and fold" src="/images/craft/finishing.svg" aspectRatio="4/3" tone="medium" />
                  <PlaceholderImage label="Fibre texture macro" src="/images/craft/fibre-macro.svg" aspectRatio="4/3" tone="light" />
                  <PlaceholderImage label="Edge and finishing detail" src="/images/craft/combing.svg" aspectRatio="4/3" tone="dark" />
                </div>
              </div>
            </FadeIn>

            {/* Details */}
            <FadeIn delay={100}>
              <nav className="flex items-center gap-2 font-sans text-xs text-stone-400 mb-8">
                <Link href="/products" className="hover:text-charcoal transition-colors">Shop</Link>
                <span>/</span>
                <span className="capitalize">{product.category}s</span>
                <span>/</span>
                <span className="text-charcoal">{product.name}</span>
              </nav>

              <p className="label mb-3">{product.collection}</p>
              <h1 className="font-serif font-light text-display-md text-charcoal mb-2">{product.name}</h1>
              <p className="font-serif font-light italic text-xl text-stone-500 mb-6">{product.tagline}</p>

              <div className="border-t border-stone-200 pt-6 mb-6">
                <p className="font-sans text-xs text-stone-400 leading-loose">
                  <span className="font-medium text-charcoal uppercase tracking-wider text-[0.625rem]">Composition</span><br />
                  {product.composition}
                </p>
                <p className="font-sans text-xs text-stone-400 leading-loose mt-3">
                  <span className="font-medium text-charcoal uppercase tracking-wider text-[0.625rem]">Weight</span><br />
                  {product.weightGrams}g
                </p>
                <p className="font-sans text-xs text-stone-400 leading-loose mt-3">
                  <span className="font-medium text-charcoal uppercase tracking-wider text-[0.625rem]">Dimensions</span><br />
                  {product.dimensions}
                </p>
                <p className="font-sans text-xs text-stone-400 leading-loose mt-3">
                  <span className="font-medium text-charcoal uppercase tracking-wider text-[0.625rem]">Origin</span><br />
                  {product.origin}
                </p>
              </div>

              {/* Colour swatches */}
              <div className="mb-8">
                <p className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">Available Colours</p>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <div key={color.name} className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full border border-stone-200 shadow-sm" style={{ backgroundColor: color.hex }} title={color.name} />
                      <span className="font-sans text-[0.5rem] tracking-wide uppercase text-stone-400">{color.name.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA — pre-launch */}
              <div className="bg-stone-50 p-6 mb-8">
                <p className="font-serif font-light text-lg text-charcoal mb-2">Launching 2026.</p>
                <p className="font-sans text-sm text-stone-500 mb-5">Join the waitlist for early access before the collection opens to all.</p>
                <WaitlistForm variant="stacked" />
              </div>

              {/* Story */}
              <div className="border-t border-stone-200 pt-6 mb-6">
                <p className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-4">About This Piece</p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">{product.story}</p>
              </div>

              {/* Provenance */}
              <div className="border-t border-stone-200 pt-6 mb-6">
                <p className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-4">Provenance</p>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">{product.provenance}</p>
              </div>

              {/* Care */}
              <div className="border-t border-stone-200 pt-6">
                <p className="font-sans text-[0.625rem] font-medium tracking-[0.2em] uppercase text-stone-400 mb-4">Care</p>
                <ul className="space-y-1.5">
                  {product.careInstructions.map((instruction, i) => (
                    <li key={i} className="font-sans text-sm text-stone-500 flex items-start gap-2">
                      <span className="text-stone-300 mt-0.5">—</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-stone-50">
          <div className="container-editorial">
            <FadeIn>
              <p className="label mb-8">You may also like</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map(p => (
                  <Link key={p.id} href={'/products/' + p.slug} className="group block">
                    <PlaceholderImage label={p.coverAlt} src={'/images/products/' + p.slug + '.svg'} aspectRatio="4/3" tone="medium" className="mb-4 transition-transform duration-500 group-hover:scale-[1.02]" />
                    <p className="label mb-1">{p.composition}</p>
                    <h3 className="font-serif font-medium text-xl text-charcoal group-hover:text-ink transition-colors duration-200">{p.name}</h3>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </>
  );
}
