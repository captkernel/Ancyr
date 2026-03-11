import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllJournalPosts } from '@/lib/mdx';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { formatDateLong } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Journal – ANCYR',
  description: 'Writing on craft, material, Angora, and the making of ANCYR. Informed, honest, occasionally poetic.',
};

export default function JournalPage() {
  const posts = getAllJournalPosts();

  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <p className="label mb-6">Journal</p>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-xl leading-[1.08]">
              Craft. Material. Story.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-editorial">
          {posts.length === 0 ? (
            <FadeIn>
              <p className="font-sans text-stone-500">Posts coming soon.</p>
            </FadeIn>
          ) : (
            <>
              {/* Featured first post */}
              <FadeIn>
                <Link href={'/journal/' + posts[0].slug} className="group block mb-20">
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <PlaceholderImage label={'Journal cover — ' + posts[0].title} src={'/images/journal/' + posts[0].slug + '.svg'} aspectRatio="4/3" tone="light" className="transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div>
                      <p className="label mb-3">{posts[0].tags?.[0] ?? 'Journal'}</p>
                      <h2 className="font-serif font-medium text-display-md text-charcoal mb-4 leading-[1.2] group-hover:text-ink transition-colors duration-200">{posts[0].title}</h2>
                      <p className="font-sans text-base text-stone-500 leading-relaxed mb-4">{posts[0].excerpt}</p>
                      <p className="font-sans text-xs text-stone-400">{formatDateLong(posts[0].date)} &middot; {posts[0].readingTime}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              {/* Remaining posts */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-stone-100 pt-16">
                {posts.slice(1).map((post, i) => (
                  <FadeIn key={post.slug} delay={i * 80}>
                    <Link href={'/journal/' + post.slug} className="group block">
                      <PlaceholderImage label={'Journal cover — ' + post.title} src={'/images/journal/' + post.slug + '.svg'} aspectRatio="4/3" tone="medium" className="mb-5 transition-transform duration-500 group-hover:scale-[1.02]" />
                      <p className="label mb-2">{post.tags?.[0] ?? 'Journal'}</p>
                      <h3 className="font-serif font-medium text-xl text-charcoal mb-2 leading-snug group-hover:text-ink transition-colors duration-200">{post.title}</h3>
                      <p className="font-sans text-sm text-stone-500 line-clamp-3 leading-relaxed mb-3">{post.excerpt}</p>
                      <p className="font-sans text-xs text-stone-400">{formatDateLong(post.date)} &middot; {post.readingTime}</p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
