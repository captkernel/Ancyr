# ANCYR — Brand and Project Bible

> Single source of truth for the ANCYR brand, website architecture, and all engineering decisions.
> Update this file whenever a significant brand or technical decision is made.

---

## Brand Overview

ANCYR is India's ultra-premium Himalayan Angora house. Founded on craft knowledge developed since 1965 in the Kullu valley, the house produces shawls and stoles made from 100% Himalayan Angora. ANCYR's approach is rooted in the rare tradition of high-altitude Angora rabbit breeding, careful combing, and small-batch spinning that defined the region's reputation for luxury fibre. Every piece is made with full material honesty and complete production control. India-first. Quiet luxury. Proof-led.

---

## Brand Positioning

- Ultra-premium Himalayan Angora house
- India-first luxury brand — no international sales before 2028
- Differentiator: true 100% Angora (verified, documented, transparent)
- The market sells blends labelled as Angora. ANCYR does not blend. It documents its own chain.
- Positioning is built on proof, not marketing language
- Heritage: craft knowledge since 1965 — a family lineage rooted in Kullu, not a continuous commercial brand presence

---

## Brand Non-Negotiables

These rules are absolute. No deviation is permitted in website UI, copy, metadata, journal posts, or navigation.

### 1. Logo Lockup — LOCKED

The three-line stacked logo is permanent. Every line must always appear.

    ANCYR
    HIMALAYAN ANGORA HOUSE
    SINCE 1965

- Line 1: ANCYR — serif (Cormorant Garamond), font-light, wide tracking (0.3em+)
- Thin horizontal divider between Line 1 and Line 2
- Line 2: HIMALAYAN ANGORA HOUSE — sans (Inter), font-medium, wide tracking
- Line 3: SINCE 1965 — sans, font-normal, muted stone colour, medium tracking
- Always centred/stacked. Never horizontal.
- Implementation: src/components/ui/LogoLockup.tsx

Prohibited: removing any line, compressing to one line, rearranging order, abbreviating.

### 2. Product Scope — LOCKED

Only shawls and stoles. The website must not mention any other product type — not even in a we do not make X context. Naming a category implies it.

Correct: We make shawls and stoles. That is the full extent of our range.

Do not use on website: sweaters, knitwear, garments, apparel, accessories.

### 3. Diwali Must Never Appear on the Website — ABSOLUTE RULE

The website must never reference Diwali or any festival by name. The brand must feel timeless, not seasonal.

Internally the launch is timed around autumn 2026 — this is operational context only.

On the website, use:
- Launching 2026
- Altitude I — Light Edition
- Autumn 2026 (only if a seasonal anchor is truly necessary)

This rule applies to: all page copy, metadata descriptions, OG tags, SEO keywords, navigation labels, journal posts, microcopy, and component text.

### 4. Collection Naming — STRICT

Always: Altitude I — Light Edition

- Roman numeral I — never 1 or one
- The em dash (—) with surrounding spaces
- Never abbreviated where the full name is contextually appropriate

### 5. Material Claims — Quiet Confidence Only

Acceptable: Verified composition. / Transparent provenance. / True Angora fibre. / 100% Angora.

Never: superlatives, competitor references, or claims that cannot be documented.

### 6. India-First — No Global Emphasis

Do not emphasise international shipping, global distribution, or worldwide expansion on the website.

### 7. Heritage — Do Not Overstate

Since 1965 = family craft knowledge. Not a continuous commercial brand. Do not claim 60 years as a brand.

### 8. International Angora Breeding Farm — Sparse Reference Only

The founder's family heritage is rooted in the pioneering Himalayan Angora craft tradition of Kullu, Himachal Pradesh. This is internal brand context. On the website: at most one restrained reference in heritage or craft copy. Example: Rooted in the Himalayan Angora tradition of Kullu. No dedicated page. No repeated mention.

### 9. No Festival, Occasion, or Gifting Language

The website must feel timeless. Avoid language that ties pieces to seasons, weddings, or occasions.

---

## Strategy Bullets

- Product scope: Shawls and stoles only. No sweaters, no accessories, no knitwear.
- Debut collection: Altitude I — Light Edition. 5 pieces. 3 shawls, 2 stoles.
- Launch target: Autumn 2026 (internal only — website must never mention any festival name)
- Material commitment: 100% Angora where stated. No blending. Documented composition at lot level.
- Geography: India-first. No international sales before 2028 minimum.
- Distribution: Direct-to-consumer at launch. Private appointments before public. Retail from 2027.
- Proof-led positioning: Quiet confidence. We do not name competitors. We document our own chain.
- Heritage: Since 1965 refers to the family craft knowledge, not a continuous brand presence. Do not overstate.

---

## Tone of Voice

| Do | Do Not |
|---|---|
| Short, precise sentences | Long adjective-laden sentences |
| Factual claims with evidence | Superlatives without evidence |
| 100% Angora. Verified. | The finest Angora in the world |
| Quiet confidence | Loudness, hype, urgency |
| Verified composition. Transparent provenance. | Naming competitors or calling others fake |
| Poetic when serving truth | Poetic as a substitute for substance |
| India as context and pride | India as exoticism for external audiences |
| Craft, without compromise. | Revolutionary fashion. |
| Fibre first. | Startup language or hyperbole |

Voice reference: A conversation between two informed people who respect each other's intelligence. Not sales copy. Not academic. Informed, restrained, occasionally poetic.

Good headlines: The fibre, uncompromised. / Craft, without compromise. / A house built on one honest material.
Bad headlines: Best shawls in the world. / Revolutionary fashion. / India's most luxurious shawl brand.

---

## Visual Design Rules

### Palette

| Token | Hex | Use |
|---|---|---|
| ivory | #FAF8F4 | Page background |
| stone-50 | #F8F5F0 | Section alternates |
| stone-100 | #F0EBE3 | Cards, subtle backgrounds |
| stone-200 | #DDD7C8 | Borders, dividers |
| stone-500 | #8B7B6B | Label text, muted |
| stone-600 | #6E5E50 | Secondary body text |
| stone-700 | #4A3728 | Accent / Himalayan dusk |
| charcoal | #1C1917 | Primary text, dark sections |
| ink | #4A3728 | Accent, hover states |

### Typography
- Serif: Cormorant Garamond (300, 400, 500, 600) — headings, display, editorial, logo
- Sans: Inter (variable) — body copy, labels, UI elements, captions
- Label style: font-sans text-xs font-medium tracking-widest uppercase text-stone-500
- Line heights: Serif display 1.05–1.2 / Body 1.625

### Visual Principles
- Large whitespace — let the content breathe
- Refined typography — hierarchy carried by type, not decoration
- Minimal UI — no gradients, no flashy animations, no startup-style components
- Editorial pacing — content should feel considered, not packed

### Photography Direction
- Macro fibre: Individual Angora strands, extreme close-up, natural warm light
- Landscape: Kullu foothills, mist, minimal — not postcard tourism
- Craft hands: Combing, spinning, weaving — movement, process, texture
- Drape: Shawl/stole in motion, editorial, minimal background
- Aspect ratios: 3/4 for products, 4/3 for journal, 16/9 for hero banners

---

## Product Scope

ANCYR produces shawls and stoles only. The website must reflect this precisely.

Current range (Altitude I — Light Edition):
- 3 shawls: The 1965 — Luminous Ivory, Beas — Silver Ash, Mohal — Deep Ember
- 2 stoles: Deodar — Forest Night, Solang — Burnished Sand
- Total: 5 pieces at launch

All 5 pieces are 100% Himalayan Angora (Pure Angora). No other fiber types at launch.

No other product types exist, are planned for announcement, or should be implied on the website.

---

## Collection System

### Collection Naming Rules

- Series name: **Altitude** (permanent across all collections)
- Sequence: Roman numerals (I, II, III …) — never Arabic numerals or written words
- Subtitle: describes the edition or character (e.g., Light Edition, Winter Edition, Rare Fibres)
- Full form always used in context: **Altitude I — Light Edition**
- Em dash (—) with surrounding spaces between numeral and subtitle
- Future examples: Altitude II — Winter Edition / Altitude III — Rare Fibres / Altitude IV — Atelier Edition
- Future collections are internal planning only — do not reference on the website

### Debut Collection: Altitude I — Light Edition

- 5 pieces: 3 shawls, 2 stoles
- Founding collection strategy: **Pure Angora only** (see Product Architecture below)
- Composition: 100% Himalayan Angora across all pieces
- Launching: 2026

### Official Altitude I Color Palette

Each color is named after a Himalayan location or year significant to the craft:

| Code | Color Name | Hex | Description |
|---|---|---|---|
| ALT1-001 | The 1965 — Luminous Ivory | #FAF4E8 | Warm ivory, undyed fibre. Photographs beautifully in candlelight. The founding hero piece. |
| ALT1-002 | Beas — Silver Ash | #A8B0B4 | Cool grey. Refined, modern, works for corporate gifting. Named for the Beas River, Kullu. |
| ALT1-003 | Mohal — Deep Ember | #2E2825 | Charcoal with warm undertone. Almost black but softer. A refined evening tone. Named for Mohal valley. |
| ALT1-004 | Deodar — Forest Night | #2C3828 | Muted dark green, rich but restrained. Inspired by Himalayan cedar forests. Named for Cedrus deodara. |
| ALT1-005 | Solang — Burnished Sand | #C4A870 | Warm beige with golden undertone. An elegant gifting tone. Named for Solang Valley, Manali. |

These names are locked. Do not create shortened forms, alternate spellings, or informal references.

---

## Product Architecture

### Structure: Product Family → Color Variant

Products are organised as families with color variants. The website may list named colorways as individual products for editorial clarity, but the underlying data model groups them by family.

**Current Product Families (Altitude I):**
- Pure Angora Shawl
- Pure Angora Stole

**Product Naming Convention:** `Color Name — Product Type`
Examples: The 1965 — Luminous Ivory Shawl / Beas — Silver Ash Shawl / Deodar — Forest Night Stole

**Product Slugs (Altitude I):** `the-1965`, `beas`, `mohal`, `deodar`, `solang`

### Founding Collection Strategy: Pure Angora Only

Altitude I launches exclusively with Pure Angora products. This is the core brand positioning.

**At launch (Altitude I):** Pure Angora Shawl, Pure Angora Stole only.

**NOT in Altitude I (but architecturally supported for future collections):**
- Semi Angora Shawl / Stole
- Angora Blend products
- Merino Wool products
- Men’s specific SKUs

Do NOT imply these products exist or will be announced. Do NOT name them on the website.

### Data Model Extension Points

The Product interface includes `fiberType` and `productFamily` for future extensibility:
- `fiberType: FiberType` — ‘pure-angora’ | ‘semi-angora’ | ‘angora-blend’ | ‘merino’
- `productFamily: string` — e.g. ‘Pure Angora Shawl’, ‘Pure Angora Stole’
- Helper: `getProductsByFiberType()`, `getProductsByFamily()`

When adding future products: set correct fiberType, use appropriate family, follow color naming system.

---

## Website Information Architecture

| Route | Purpose | Key Conversion |
|---|---|---|
| / | Homepage — house, material, collection, CTA | Waitlist / Collection |
| /brand | Heritage story — Since 1965, craft lineage | Collection |
| /craft | Deep materials and process — 100% Angora, 5-step production | FAQ / Collection |
| /collection | Altitude I story + all 5 products + launch timeline | Waitlist |
| /products | Product listing (shawls + stoles) | Product detail |
| /products/[slug] | Product detail — specs, story, provenance, care | Waitlist |
| /journal | Editorial index | Individual posts |
| /journal/[slug] | Individual journal post | Contact / Collection |
| /waitlist | Dedicated waitlist landing | Email capture |
| /contact | Direct contact — general, press, appointments | Email |
| /stockists | Private appointments + future retail | Appointment request |
| /faq | Angora FAQ — fibre, care, authenticity, provenance | Contact |
| /privacy | Privacy policy placeholder | — |
| /terms | Terms of service placeholder | — |

Navigation: House | Craft | Altitude I | Shop | Journal | Contact + [Early Access button]

---

## Content Model

### Products (src/data/products.ts)

Fields:
- id: string (e.g. ALT1-001)
- slug: string (URL slug)
- name: string
- tagline: string (one-line poetic descriptor)
- category: shawl or stole
- collection: string (collection name)
- composition: string (e.g. 100% Himalayan Angora)
- weightGrams: number
- dimensions: string (e.g. 200 x 75 cm)
- colors: [ { name, hex, available } ]
- priceINR: number or null (null = price on request)
- story: string (2-3 sentences, product narrative)
- provenance: string (production chain description)
- careInstructions: string[]
- origin: string
- available: boolean
- featured: boolean
- coverAlt: string (photography direction for this product)

### Journal Posts (src/content/journal/*.mdx)

Frontmatter fields:
- title: string
- date: YYYY-MM-DD
- excerpt: string (1-2 sentences, shown in listings)
- tags: string[]
- author: string
- coverAlt: string (photography direction)

Body: MDX — standard markdown plus React components.

Journal posts must follow brand tone. No festival references. No competitor names. No hype language.

---

## Internal Brand Context (Not for Website)

This section documents context that informs the brand but must not dominate website storytelling.


### Himalayan Angora Heritage — Family Provenance
The founder's family heritage is rooted in the pioneering Himalayan Angora craft tradition of Kullu, Himachal Pradesh. Since the mid-20th century, this lineage has been defined by:
- High-altitude, cool-climate Angora rabbit breeding, producing exceptionally fine, soft fibre
- Humane, careful combing and small-batch spinning, ensuring fibre purity and traceability
- Limited-scale, quality-focused production, with a reputation for rare, luxury-grade Angora
- Generational craft knowledge, ethical animal care, and sustainable practices
- A deep connection to the Kullu valley landscape and culture, emphasizing provenance and material honesty
This legacy forms the foundation of ANCYR’s approach to fibre, craft, and proof-led luxury. The family’s experience in this tradition is the source of the brand’s material confidence and transparency, even though the original farm is not named or referenced on the website.

### Production Access
The house has direct access to the full production chain: fibre sourcing, combing, spinning, weaving, and finishing. This is the basis for the verified composition claim — unusual in the Indian luxury fibre market.

### Launch Timing
The debut collection launches in autumn 2026. Internal planning aligns this with the festive season, but the website must not reference any festival by name.

---

## Future Roadmap (Internal Only — Not for Website)

### 2026
- Altitude I public launch, autumn 2026
- Private appointments: Delhi, Mumbai, Bengaluru
- Integrate waitlist with email service (Resend recommended)
- Replace PlaceholderImage components with real photography via next/image

### 2027
- Second collection
- Retail in 2-3 curated Indian luxury spaces
- Product personalisation / monogram option (evaluate)
- Custom dimension orders

### 2028+
- International expansion — UK, US (Indian diaspora first)
- Global shipping
- Wholesale to international luxury stockists
- Potential: men's collection, gifting range

### Technical Backlog
- CMS integration (Sanity / Contentful) when content team grows
- E-commerce (custom or Shopify integration) when sales go live
- Privacy-first analytics (Fathom or Plausible)
- Image CDN for photography assets

---

## Technology Stack

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 App Router | SSG/SSR, SEO, image optimisation, TypeScript-native |
| Styling | Tailwind CSS 3.x | Utility-first, easy to maintain design tokens |
| Typography | next/font/google | Performance, no FOUT, self-hosted fonts |
| Content | MDX + gray-matter + reading-time | Local files, editable without code changes |
| Animation | Custom IntersectionObserver (FadeIn component) | No JS animation library dependency |
| Forms | Custom fetch to /api/waitlist | Integration-ready stub, easy to swap |
| Images | PlaceholderImage component (replace with next/image) | Structured placeholder system |

### Key Files
- src/data/products.ts — Product data and helper functions
- src/content/journal/*.mdx — Journal posts
- src/components/ui/LogoLockup.tsx — Logo lockup (do not modify structure)
- src/components/layout/Navigation.tsx — Site navigation
- src/components/layout/Footer.tsx — Site footer
- src/app/api/waitlist/route.ts — Waitlist API stub
- src/lib/mdx.ts — MDX loading utilities
- src/lib/utils.ts — Shared utilities (cn, formatDate, slugify)
- src/app/globals.css — Global CSS and design tokens

### Engineering Constraints (Windows / OneDrive environment)
- Write and Edit tools fail with EEXIST when parent directory exists — use Bash for file creation
- Long heredocs may fail with special characters — use Node.js append approach
- Node.js at: /c/Program Files/nodejs/ (export PATH if not found in bash)
- Dev server typically runs on port 3000; port 3002 used when 3000 is occupied

---

*Last updated: March 2026 (Product architecture, collection system, and Altitude I color palette updated). Update this file when significant brand or technical decisions are made.*
