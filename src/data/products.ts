export type ProductCategory = 'shawl' | 'stole';
export type FiberType = 'pure-angora' | 'semi-angora' | 'angora-blend' | 'merino';

export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  productFamily: string;
  fiberType: FiberType;
  collection: string;
  composition: string;
  weightGrams: number;
  dimensions: string;
  colors: ProductColor[];
  priceINR: number | null;
  story: string;
  provenance: string;
  careInstructions: string[];
  origin: string;
  available: boolean;
  featured: boolean;
  coverAlt: string;
}

export const products: Product[] = [
  {
    id: 'ALT1-001',
    slug: 'the-1965',
    name: 'The 1965 — Luminous Ivory',
    tagline: 'The founding piece. Pure light.',
    category: 'shawl',
    productFamily: 'Pure Angora Shawl',
    fiberType: 'pure-angora',
    collection: 'Altitude I — Light Edition',
    composition: '100% Himalayan Angora',
    weightGrams: 180,
    dimensions: '200 × 75 cm',
    colors: [
      { name: 'Luminous Ivory', hex: '#FAF4E8', available: true },
    ],
    priceINR: null,
    story:
      'The founding piece of Altitude I. Woven from the first combing of the season, The 1965 carries the unaltered warmth of Himalayan Angora in its most natural form. No dye. No blend. The fibre, as it arrived. Named for the year this family craft began.',
    provenance: 'Combed and spun in Kullu, Himachal Pradesh, following rare high-altitude family craft traditions. Handwoven on traditional pit looms. Finished by hand.',
    careInstructions: [
      'Dry clean recommended',
      'Hand wash in cold water with gentle wool wash if needed',
      'Lay flat to dry — never wring',
      'Store folded in breathable cotton, away from direct light',
      'Use a soft-bristle brush to remove surface fibre after wear',
    ],
    origin: 'Kullu, Himachal Pradesh, India',
    available: false,
    featured: true,
    coverAlt: 'The 1965 — Luminous Ivory shawl, editorial drape in warm candlelight, soft fold detail',
  },
  {
    id: 'ALT1-002',
    slug: 'beas',
    name: 'Beas — Silver Ash',
    tagline: 'Cool restraint. Warm core.',
    category: 'shawl',
    productFamily: 'Pure Angora Shawl',
    fiberType: 'pure-angora',
    collection: 'Altitude I — Light Edition',
    composition: '100% Himalayan Angora',
    weightGrams: 185,
    dimensions: '200 × 75 cm',
    colors: [
      { name: 'Silver Ash', hex: '#A8B0B4', available: true },
    ],
    priceINR: null,
    story:
      'Named for the Beas River, which flows from the high passes of Kullu through the valleys where Himalayan Angora is combed and spun. Cool on the eye. Warm against the skin. A shawl for those who wear restraint as intention.',
    provenance: 'Combed and spun in Kullu, Himachal Pradesh, following rare high-altitude family craft traditions. Hand-dyed with azo-free dyes. Handwoven on traditional pit looms. Finished by hand.',
    careInstructions: [
      'Dry clean recommended',
      'Hand wash cold with colour-safe gentle wool wash',
      'Lay flat to dry',
      'Store folded in breathable cotton',
    ],
    origin: 'Kullu, Himachal Pradesh, India',
    available: false,
    featured: true,
    coverAlt: 'Beas — Silver Ash shawl, cool grey Himalayan Angora, editorial drape in morning light',
  },
  {
    id: 'ALT1-003',
    slug: 'mohal',
    name: 'Mohal — Deep Ember',
    tagline: 'Almost black. Never cold.',
    category: 'shawl',
    productFamily: 'Pure Angora Shawl',
    fiberType: 'pure-angora',
    collection: 'Altitude I — Light Edition',
    composition: '100% Himalayan Angora',
    weightGrams: 195,
    dimensions: '200 × 75 cm',
    colors: [
      { name: 'Deep Ember', hex: '#2E2825', available: true },
    ],
    priceINR: null,
    story:
      'Named for Mohal, the valley town at the heart of Kullu where the craft is rooted. Charcoal with a warm undertone — almost black, but softer. A refined evening tone that carries warmth in its depth rather than its colour.',
    provenance: 'Combed and spun in Kullu, Himachal Pradesh, following rare high-altitude family craft traditions. Hand-dyed with azo-free dyes. Handwoven on traditional pit looms. Finished by hand.',
    careInstructions: [
      'Dry clean recommended',
      'Hand wash cold with colour-safe gentle wool wash',
      'Lay flat to dry',
      'Store folded in breathable cotton',
    ],
    origin: 'Kullu, Himachal Pradesh, India',
    available: false,
    featured: true,
    coverAlt: 'Mohal — Deep Ember shawl, dark charcoal Angora with warm undertone, draped in low evening light',
  },
  {
    id: 'ALT1-004',
    slug: 'deodar',
    name: 'Deodar — Forest Night',
    tagline: 'The quiet depth of Himalayan cedar.',
    category: 'stole',
    productFamily: 'Pure Angora Stole',
    fiberType: 'pure-angora',
    collection: 'Altitude I — Light Edition',
    composition: '100% Himalayan Angora',
    weightGrams: 125,
    dimensions: '190 × 65 cm',
    colors: [
      { name: 'Forest Night', hex: '#2C3828', available: true },
    ],
    priceINR: null,
    story:
      'Named for the Deodar cedar — Cedrus deodara, the divine tree — that covers the Himalayan slopes above 2,000 metres. Muted dark green, rich but restrained. A colour that belongs to the forest at dusk, brought into a room.',
    provenance: 'Combed and spun in Kullu, Himachal Pradesh, following rare high-altitude family craft traditions. Hand-dyed with azo-free dyes. Handwoven on traditional pit looms. Finished by hand.',
    careInstructions: [
      'Dry clean recommended',
      'Hand wash cold if needed',
      'Lay flat to dry',
      'Store folded in breathable cotton, away from direct sunlight to preserve depth of colour',
    ],
    origin: 'Kullu, Himachal Pradesh, India',
    available: false,
    featured: true,
    coverAlt: 'Deodar — Forest Night stole, muted dark green Angora, editorial drape against natural light',
  },
  {
    id: 'ALT1-005',
    slug: 'solang',
    name: 'Solang — Burnished Sand',
    tagline: 'Warm as the valley it names.',
    category: 'stole',
    productFamily: 'Pure Angora Stole',
    fiberType: 'pure-angora',
    collection: 'Altitude I — Light Edition',
    composition: '100% Himalayan Angora',
    weightGrams: 120,
    dimensions: '190 × 65 cm',
    colors: [
      { name: 'Burnished Sand', hex: '#C4A870', available: true },
    ],
    priceINR: null,
    story:
      'Named for Solang Valley, which opens north of Manali into a wide, sun-warmed bowl ringed by high peaks. Warm beige with a golden undertone — the colour of mountain light at midday. An elegant tone that reads equally in a formal room or an open landscape.',
    provenance: 'Combed and spun in Kullu, Himachal Pradesh, following rare high-altitude family craft traditions. Finished by hand.',
    careInstructions: [
      'Dry clean recommended',
      'Hand wash cold if needed',
      'Lay flat to dry',
      'Store folded in breathable cotton',
    ],
    origin: 'Kullu, Himachal Pradesh, India',
    available: false,
    featured: false,
    coverAlt: 'Solang — Burnished Sand stole, warm golden-beige Angora, flat lay with drape and woven edge detail',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsByFiberType(fiberType: FiberType): Product[] {
  return products.filter(p => p.fiberType === fiberType);
}

export function getProductsByFamily(family: string): Product[] {
  return products.filter(p => p.productFamily === family);
}

export function getRelatedProducts(slug: string, limit = 2): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter(p => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}
