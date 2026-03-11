export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSection {
  category: string;
  items: FAQItem[];
}

export const faqs: FAQSection[] = [
  {
    category: 'The Fibre',
    items: [
      {
        q: 'What is Angora fibre?',
        a: 'Angora fibre comes from the Angora rabbit \u2014 not to be confused with Angora goat, which produces mohair. It is one of the finest natural fibres in the world, with a diameter of 11\u201316 microns. Its hollow core makes it extremely warm for its weight, and its natural halo gives it the characteristic softness and luminosity.',
      },
      {
        q: 'What is the difference between 100% Angora and Angora blends?',
        a: 'A 100% Angora product contains only Angora fibre \u2014 no wool, no acrylic, no synthetic. Blends typically mix Angora with wool (often 30\u201370% Angora) or synthetic fibres. Blends are less expensive to produce and easier to process, which is why many products described as \u201cAngora\u201d are blends. ANCYR clearly states composition on every product. When we say 100%, we mean it.',
      },
      {
        q: 'How can I tell if something is really 100% Angora?',
        a: 'Genuinely, it is difficult without testing. Fibre composition can be assessed through microscopic examination or chemical analysis. We maintain lot-level documentation and are working toward accessible composition verification for our customers. In the meantime, the honest answer is: buy from producers who document their supply chain.',
      },
      {
        q: 'Why is 100% Angora rare?',
        a: 'Angora is difficult and expensive to process at 100% purity. The fibre has very little natural crimp, which makes it challenging to spin into a stable yarn. Blending it with wool provides structure at lower cost. Producing 100% Angora requires significant craft knowledge and is more expensive throughout the supply chain \u2014 which is why most \u201cAngora\u201d products in the market are blends.',
      },
    ],
  },
  {
    category: 'Care & Longevity',
    items: [
      {
        q: 'How should I care for my ANCYR shawl or stole?',
        a: 'Dry clean is recommended for all pieces. If hand washing is necessary, use cold water with a gentle wool wash detergent \u2014 do not rub or wring. Lay flat to dry on a clean towel, reshaping while damp. Store folded in breathable cotton, away from direct sunlight and moisture. Do not hang, as the weight can stretch the fibre over time.',
      },
      {
        q: 'My shawl is pilling. Is that normal?',
        a: 'Light surface pilling can occur with any natural fibre and is not a quality defect. For Angora, some initial shedding and pilling is normal \u2014 it reduces after the first few wears. Use a soft-bristle garment brush to gently remove surface fuzz. Avoid friction against rough surfaces.',
      },
      {
        q: 'How long will a 100% Angora shawl last?',
        a: 'With proper care, a well-made Angora shawl can last decades. The fibre does not degrade under normal use. The keys are correct washing, proper storage, and protecting the piece from moths (cedar or lavender sachets work well). Angora does not felt under normal washing conditions, unlike wool.',
      },
    ],
  },
  {
    category: 'ANCYR & Provenance',
    items: [
      {
        q: 'Where is ANCYR based?',
        a: 'ANCYR is an India-first luxury house. Our production is based in Kullu, Himachal Pradesh. Our founding knowledge goes back to 1965. We are a family operation.',
      },
      {
        q: 'Do you manufacture everything yourself?',
        a: 'Yes. We operate our own production facility. Combing, spinning, weaving, and finishing all happen under our oversight. This is unusual in the luxury fibre space, and it is precisely why we can make claims about composition and process with confidence.',
      },
      {
        q: 'When does Altitude I launch? Can I buy now?',
        a: 'Altitude I \u2014 Light Edition launches in 2026. It is not available for purchase yet. You can join the waitlist to receive early access before the public launch.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'ANCYR is India-first. Our launch and initial years are focused on the Indian luxury market and the Indian diaspora. International shipping and expansion is planned for 2028 onwards.',
      },
    ],
  },
];
