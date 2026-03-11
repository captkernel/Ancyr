# ANCYR — Component Reference

> Complete specification of every component in the codebase.
> Use this file on a new machine to recreate or extend the project correctly.

---

## Directory Structure

    src/components/
      layout/
        Navigation.tsx        Fixed header + mobile menu overlay
        Footer.tsx            Dark footer with link grid
      sections/
        FadeIn.tsx            IntersectionObserver scroll-fade wrapper
      ui/
        Button.tsx            Polymorphic button (link / external / button)
        LogoLockup.tsx        3-line stacked logo (LOCKED — do not modify structure)
        PlaceholderImage.tsx  Image wrapper with SVG-asset or styled fallback
        WaitlistForm.tsx      Email capture form (inline or stacked variant)

---

## Layout Components

### Navigation — src/components/layout/Navigation.tsx

**What it does:**
Fixed top header with scroll-aware background, desktop nav links, Early Access CTA button, and a full-screen mobile menu overlay with animated hamburger icon.

**Behaviour:**
- Client component — uses scroll listener, usePathname, useState
- Transparent at top; switches to bg-ivory/95 + backdrop-blur after 32px scroll
- Mobile menu: full-screen ivory overlay, closes on route change
- Nav links use aria-current="page" on active route (pathname.startsWith)
- Hamburger animates to X when open (3 spans, CSS rotate/opacity)
- Mobile nav items stagger in with .animate-fade-up + animationDelay per item

**Nav links (hardcoded array navLinks):**

    { href: "/brand",      label: "House"      }
    { href: "/craft",      label: "Craft"      }
    { href: "/collection", label: "Altitude I" }
    { href: "/products",   label: "Shop"       }
    { href: "/journal",    label: "Journal"    }
    { href: "/contact",    label: "Contact"    }

**Key classes:** .container-editorial, .nav-link, .animate-fade-up
**Props:** None (self-contained). Used only in src/app/layout.tsx.

---

### Footer — src/components/layout/Footer.tsx

**What it does:**
Dark footer (bg-charcoal text-ivory) with LogoLockup (inverted), brand tagline, 4-column link grid, copyright bar.

**Behaviour:**
- Server component (no use client)
- Year in copyright auto-generated: new Date().getFullYear()
- Logo shown inverted via LogoLockup inverted prop

**Link sections (object footerLinks):**

    House:      Our Story | Materials & Craft | Private Appointments | Contact
    Collection: Altitude I – Light Edition | Shawls & Stoles | Early Access
    Journal:    All Posts | On 100% Angora | Since 1965
    Help:       FAQ | Get in Touch | Privacy Policy | Terms of Service

**Props:** None (self-contained). Used only in src/app/layout.tsx.

---
## Section Components

### FadeIn — src/components/sections/FadeIn.tsx

**What it does:**
Wraps children in a div that fades in (+ optional upward translate) when scrolled into view. Uses IntersectionObserver. Fires once then disconnects.

**Client component** — uses useEffect, useState, useRef.

**Props:**

    children   ReactNode   Content to animate
    delay      number      0        Transition delay in ms (for stagger)
    className  string      —        Additional classes on wrapper div
    direction  up|none     up       up = translateY(1.25rem) to 0; none = opacity only
    threshold  number      0.1      IntersectionObserver threshold (0–1)

**Tailwind classes applied:**
- Hidden: opacity-0 translate-y-5 (direction=up) or opacity-0 (direction=none)
- Visible: opacity-100 translate-y-0
- Always: transition-[opacity,transform] duration-700 ease-out
- Accessibility: motion-reduce:transition-none motion-reduce:opacity-100

**Usage:**

    <FadeIn>
      <h2>Visible on scroll</h2>
    </FadeIn>

    <FadeIn delay={150} direction="none">
      <p>Fade only, delayed 150ms</p>
    </FadeIn>

    {items.map((item, i) => (
      <FadeIn key={item.id} delay={i * 100}>
        <Card {...item} />
      </FadeIn>
    ))}

---

## UI Components

### Button — src/components/ui/Button.tsx

**What it does:**
Polymorphic button — renders as Next.js Link, anchor tag (external), or button element depending on props. Consistent styling across all three.

**Props:**

    variant   primary|outline|ghost|ink   primary   Visual style
    size      sm|md|lg                    md        Padding and font size
    href      string                      —         If set, renders as Link or anchor
    external  boolean                     false     If true + href, renders anchor target=_blank
    type      button|submit|reset         button    Only when href is absent
    onClick   () => void                  —         Only when href is absent
    disabled  boolean                     false     Adds opacity-50 pointer-events-none
    className string                      —         Additional Tailwind classes
    children  ReactNode                   —         Button label/content

**Variants:**

    primary   Charcoal fill, ivory text. Hover: ink fill.
    outline   Transparent, charcoal border. Hover: charcoal fill, ivory text.
    ghost     Transparent, no border. Hover: stone-50 fill, stone-200 border.
    ink       Ink fill (stone-700), ivory text. Hover: stone-800 fill.

**Sizes:**

    sm   0.6875rem  tracking-[0.18em]  px-5 py-2.5
    md   0.6875rem  tracking-[0.20em]  px-7 py-3.5
    lg   0.75rem    tracking-[0.20em]  px-9 py-4

**Usage:**

    <Button href="/waitlist">Early Access</Button>
    <Button href="https://..." external variant="outline">External</Button>
    <Button type="submit" variant="ink" size="lg">Submit</Button>
    <Button variant="ghost" onClick={fn} disabled={loading}>Cancel</Button>
    <Button href="/path" variant="primary" className="w-full">Full width</Button>

---
### LogoLockup — src/components/ui/LogoLockup.tsx

**What it does:**
Renders the locked 3-line stacked ANCYR brand logo. Structure is non-negotiable per brand rules (CLAUDE.md).

**Props:**

    size      sm|md|lg|xl   md     Scale of the logo
    className string        —      Additional classes on wrapper
    asLink    boolean       true   Wraps in Link href="/" when true
    inverted  boolean       false  White text for dark backgrounds

**Three-line structure (LOCKED — never change):**

    Line 1:  ANCYR — font-serif font-light, wide tracking
    Divider: thin horizontal span (bg-stone-300 or bg-ivory/30 if inverted)
    Line 2:  HIMALAYAN ANGORA HOUSE — font-sans font-medium, wide tracking
    Line 3:  SINCE 1965 — font-sans font-normal, muted (stone-500 or ivory/60)

**Size scale:**

    sm   ANCYR: 1.125rem/tracking-[0.3em]   sub: 0.45rem   since: 0.4rem
    md   ANCYR: 1.5rem/tracking-[0.3em]     sub: 0.55rem   since: 0.5rem
    lg   ANCYR: 2rem/tracking-[0.32em]      sub: 0.65rem   since: 0.58rem
    xl   ANCYR: 2.75rem/tracking-[0.35em]   sub: 0.75rem   since: 0.65rem

**Where used:**

    Navigation.tsx — size="sm"
    Footer.tsx     — size="lg", inverted
    app/page.tsx   — xl, asLink={false}

**Usage:**

    <LogoLockup size="sm" />
    <LogoLockup size="lg" inverted asLink />
    <LogoLockup size="xl" asLink={false} />

---

### PlaceholderImage — src/components/ui/PlaceholderImage.tsx

**What it does:**
Image container. When src is provided it renders an img tag. Without src, shows a styled stone-toned placeholder with SVG grain texture and a photography-direction label.

**Props:**

    label        string                         Photography   Alt text and placeholder label
    aspectRatio  1/1|3/4|4/3|16/9|2/3|5/4|3/2  3/4           Aspect ratio of the container
    className    string                         —             Additional classes on outer div
    tone         light|medium|dark              medium        Placeholder bg (stone-50/100/200)
    overlay      boolean                        false         Gradient overlay at bottom (charcoal/30)
    src          string                         —             Path to SVG/image; if set renders img

**Behaviour:**
- With src: img tag fills container with object-cover
- Without src: stone bg + SVG grain (feTurbulence, opacity 0.04) + centered label
- Outer div: role="img" aria-label={label}
- Migration path: replace with next/image when real photography arrives

**SVG asset paths (all in public/images/):**

    hero/home-hero.svg
    brand/heritage.svg
    brand/himalayan-landscape.svg
    brand/raw-fibre.svg
    collection/hero.svg
    collection/story.svg
    craft/combing.svg
    craft/fibre-macro.svg
    craft/finishing.svg
    craft/spinning.svg
    craft/weaving.svg
    journal/himalayan-fiber-notes.svg
    journal/notes-on-altitude-i.svg
    journal/on-softness.svg
    journal/the-1965-question.svg
    journal/the-truth-about-angora.svg
    products/the-1965.svg
    products/beas.svg
    products/mohal.svg
    products/deodar.svg
    products/solang.svg
    waitlist/hero.svg

**Usage:**

    <PlaceholderImage
      src="/images/hero/home-hero.svg"
      label="Hero — Himalayan landscape"
      aspectRatio="16/9"
      overlay
    />

    <PlaceholderImage
      src={/images/products/ + product.slug + .svg}
      label={product.coverAlt}
      aspectRatio="3/4"
    />

    <PlaceholderImage
      label="Macro fibre detail"
      aspectRatio="4/3"
      tone="light"
    />

---
### WaitlistForm — src/components/ui/WaitlistForm.tsx

**What it does:** Email capture form that POSTs to /api/waitlist. Two layout variants: inline (email only, horizontal) and stacked (name + email, vertical). Shows success or error state.

**Client component** — uses useState for email, name, status, errorMsg.

**Props:**

    variant   inline|stacked   inline   Layout mode
    label     string           —        Optional eyebrow label above form

**Variants:**
- inline: email + button side by side. Used on homepage.
- stacked: name + email + full-width button. Used on /waitlist page.

**State:** idle → loading → success | error

**API (POST /api/waitlist):**

    Body:    { email: string, name: string }
    Success: HTTP 200 → success message shown
    Error:   HTTP 4xx/5xx + { message } → errorMsg shown

**Input styling:** .input-luxury class (globals.css)

**Usage:**

    <WaitlistForm variant="inline" label="EARLY ACCESS" />
    <WaitlistForm variant="stacked" label="JOIN THE WAITLIST" />

---

## Global CSS Classes

Defined in src/app/globals.css.

    .label               0.6875rem, tracking-[0.2em], uppercase, text-stone-500
    .container-editorial max-width 1440px, auto margin, clamp padding
    .container-narrow    max-width 800px, auto margin, clamp padding
    .section             padding-block clamp(4rem, 8vw, 7rem)
    .section-sm          padding-block clamp(2.5rem, 5vw, 4rem)
    .divider             2.5rem x 1px, bg-stone-500
    .nav-link            ::after underline animates on hover/aria-current
    .input-luxury        transparent bg, bottom-border only, stone palette
    .animate-fade-up     fadeUp keyframe, 0.7s ease, used by mobile nav

**CSS custom properties (:root):**

    --color-ivory        #FAF8F4
    --color-stone-200    #DDD7C8
    --color-stone-400    #A89880  (placeholder color in .input-luxury)
    --color-stone-500    #8B7B6B
    --color-charcoal     #1C1917
    --color-ink          #4A3728
    --transition-base    300ms cubic-bezier(0.4, 0, 0.2, 1)
    --transition-slow    600ms cubic-bezier(0.4, 0, 0.2, 1)

---
## Tailwind Design Tokens (tailwind.config.ts)

**Colors:**

    ivory       #FAF8F4   page background
    stone-50    #F8F5F0   section alternates
    stone-100   #F0EBE3   cards, subtle backgrounds
    stone-200   #DDD7C8   borders, dividers
    stone-300   #C4BAA8   logo divider, decorative
    stone-400   #A89880   placeholder text
    stone-500   #8B7B6B   label text, muted
    stone-600   #6E5E50   secondary body text
    stone-700   #4A3728   accent / Himalayan dusk
    stone-800   #2E2018   button hover state
    charcoal    #1C1917   primary text, dark sections
    ink         #4A3728   accent, hover (same value as stone-700)

**Fonts:**

    font-serif   Cormorant Garamond (var(--font-cormorant)) — headings, display, logo
    font-sans    Inter variable (var(--font-inter)) — body, labels, UI

**Display font sizes (clamp):**

    text-display-2xl   clamp(3rem,   6vw, 7rem)       lh:1.05  ls:-0.02em
    text-display-xl    clamp(2.5rem, 5vw, 5.5rem)    lh:1.08  ls:-0.02em
    text-display-lg    clamp(2rem,   4vw, 4rem)       lh:1.1   ls:-0.01em
    text-display-md    clamp(1.5rem, 3vw, 2.75rem)   lh:1.2   ls:-0.01em

**Custom max-widths:**

    max-w-editorial       56ch
    max-w-editorial-wide  80ch

**Typography plugin (prose-ancyr):**
Applied as: className="prose prose-ancyr" on journal post pages.

    body:       Inter, 1.0625rem, line-height 1.75
    headings:   Cormorant Garamond, font-weight 500
    h2:         2.25rem, lh 1.2, margin-top 3rem
    h3:         1.625rem, lh 1.3, margin-top 2.5rem
    blockquote: Cormorant italic, 1.35rem, stone-700, border-left 2px stone-300
    links:      underline offset 3px, hover to charcoal

---

## Component Dependency Map

    Navigation      → LogoLockup, Button, cn
    Footer          → LogoLockup
    FadeIn          → cn
    Button          → cn, next/link
    LogoLockup      → cn, next/link
    PlaceholderImage→ cn
    WaitlistForm    → Button

---

## Shared Utilities — src/lib/utils.ts

    cn(...inputs)            Tailwind class merging: clsx + tailwind-merge
    formatDate(dateStr)      Returns "March 2026" — en-IN, month + year
    formatDateLong(dateStr)  Returns "11 March 2026" — en-IN, day + month + year

---

## Journal Loader — src/lib/mdx.ts

    getAllJournalPosts()    Reads all .mdx/.md from src/content/journal/, sorted by date desc
    getJournalPost(slug)   Returns single JournalPost or null

JournalPost: slug, title, date (YYYY-MM-DD), excerpt, readingTime, tags[], author, coverAlt, content

---

## Product Data — src/data/products.ts

    getProductBySlug(slug)          Product | undefined
    getFeaturedProducts()           Product[] where featured=true (4 of 5 products)
    getProductsByCategory(cat)      Product[] by shawl|stole
    getProductsByFiberType(type)    Product[] by pure-angora|semi-angora|angora-blend|merino
    getProductsByFamily(family)     Product[] by productFamily string

Product slugs: the-1965, beas, mohal, deodar, solang
Product IDs:   ALT1-001 through ALT1-005
All products:  fiberType=pure-angora, available=false, priceINR=null (price on request)

---

*Last updated: March 2026. Update when components are added or modified.*