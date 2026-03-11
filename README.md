# ANCYR — Himalayan Angora House

Ultra-premium luxury brand website for ANCYR. Built with Next.js 15, Tailwind CSS, and MDX.

---

## Getting Started

### Prerequisites

- Node.js 18+ (v20+ recommended)
- npm or yarn

### Installation

    npm install

### Development

    npm run dev

Open http://localhost:3000 in your browser.

### Build for production

    npm run build
    npm start

### Type check

    npm run type-check

---

## Project Structure

    src/
      app/                  # Next.js App Router pages
        (root)/page.tsx     # Homepage
        brand/              # Heritage / Our Story
        craft/              # Materials & Craft
        collection/         # Altitude I collection
        products/           # Product listing + detail
        journal/            # Editorial journal
        waitlist/           # Early access form
        contact/            # Contact page
        stockists/          # Private appointments
        faq/                # Angora & provenance FAQ
        privacy/            # Privacy policy
        terms/              # Terms of service
        api/waitlist/       # Waitlist API endpoint
      components/
        layout/             # Navigation, Footer
        ui/                 # Button, LogoLockup, PlaceholderImage, WaitlistForm
        sections/           # FadeIn scroll animation
      content/
        journal/            # MDX journal posts (add new posts here)
      data/
        products.ts         # All product data (edit to update products)
      lib/
        mdx.ts              # MDX reading utilities
        utils.ts            # Shared utilities

---

## Adding Content

### Add a product

Edit src/data/products.ts and add a new entry to the products array.
Follow the existing product structure. Slugs must be unique.

### Add a journal post

Create a new .mdx file in src/content/journal/. Use the following frontmatter:

    ---
    title: "Your Post Title"
    date: "2026-01-15"
    excerpt: "One or two sentence summary shown in listings."
    tags: ["Material", "Craft"]
    author: "ANCYR"
    coverAlt: "Description of the ideal hero image for this post"
    ---

    Your post content here. Standard markdown supported.

The post will automatically appear in the journal listing and be available at /journal/your-filename.

---

## Waitlist Integration

The waitlist API endpoint is at src/app/api/waitlist/route.ts.
Currently it logs submissions to console and returns success.

To connect to an email service:
- **Resend**: Add RESEND_API_KEY to .env.local, call the Resend API in the route
- **ConvertKit**: Add CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID, call the subscribe API
- **Mailchimp**: Add MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID, call the members API

---

## Photography

All images are currently placeholder components (src/components/ui/PlaceholderImage.tsx).
Each placeholder shows the photography direction as a label.

To replace with real photography:
1. Add images to public/images/
2. Replace PlaceholderImage with next/image in the relevant component
3. Use the aspectRatio and className props to maintain layout

---

## Design System

Design tokens are defined in:
- tailwind.config.ts — colours, fonts, custom utilities
- src/app/globals.css — CSS custom properties, utility classes

Key custom utilities:
- .label — eyebrow/label text style
- .container-editorial — max-width 1440px editorial container
- .container-narrow — max-width 800px prose container
- .section — section vertical padding
- .section-sm — smaller section padding
- .divider — decorative horizontal rule
- .input-luxury — styled form input

---

## Brand Reference

See CLAUDE.md at the project root for:
- Logo lockup specification
- Brand positioning
- Tone of voice rules
- Visual design rules
- Information architecture
- Content model
- Future roadmap

---

## Deployment

The site is ready to deploy to Vercel:

    npx vercel

Or connect the repository to Vercel via the dashboard for automatic deployments.

Set the following environment variables in your deployment platform:
- None required for the base site
- Add email service keys when integrating the waitlist

---

## Licence

Proprietary. All rights reserved by ANCYR — Himalayan Angora House.
