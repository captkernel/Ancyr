import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllJournalPosts, getJournalPost } from '@/lib/mdx';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';
import { FadeIn } from '@/components/sections/FadeIn';
import { MDXErrorBoundary } from '@/components/ui/MDXContent';
import { formatDateLong } from '@/lib/utils';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  const posts = getAllJournalPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: 'Post Not Found – ANCYR' };
  return {
    title: post.title + ' – ANCYR Journal',
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  const allPosts = getAllJournalPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = allPosts[currentIndex + 1] ?? null;
  const nextPost = allPosts[currentIndex - 1] ?? null;

  return (
    <>
      {/* Article header */}
      <section className="pt-40 pb-12 bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <nav className="flex items-center gap-2 font-sans text-xs text-stone-400 mb-10">
              <Link href="/journal" className="hover:text-charcoal transition-colors">Journal</Link>
              <span>/</span>
              <span className="text-charcoal">{post.tags?.[0] ?? 'Article'}</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map(tag => (
                <span key={tag} className="font-sans text-[0.5625rem] font-medium tracking-[0.18em] uppercase text-stone-400 border border-stone-200 px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif font-light text-display-xl text-charcoal max-w-3xl leading-[1.1] mb-6">{post.title}</h1>
            <p className="font-serif font-light italic text-xl text-stone-400 max-w-xl mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="font-sans text-xs text-stone-400">{formatDateLong(post.date)}</span>
              <span className="divider" />
              <span className="font-sans text-xs text-stone-400">{post.readingTime}</span>
              <span className="divider" />
              <span className="font-sans text-xs text-stone-400">{post.author}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero image */}
      <FadeIn>
        <PlaceholderImage
          label={post.coverAlt || 'Journal post hero — editorial, atmospheric, material-focused'}
          src={'/images/journal/' + post.slug + '.svg'}
          aspectRatio="16/9"
          tone="medium"
          className="w-full max-h-[600px]"
        />
      </FadeIn>

      {/* Article body */}
      <article className="section bg-ivory">
        <div className="container-narrow">
          <FadeIn>
            <div className="prose prose-ancyr max-w-none">
              <MDXErrorBoundary>
                <MDXRemote source={post.content} />
              </MDXErrorBoundary>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Post navigation */}
      <section className="section-sm bg-stone-50">
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 gap-6">
            {prevPost && (
              <Link href={'/journal/' + prevPost.slug} className="group block border border-stone-200 p-6 hover:border-stone-400 transition-colors duration-200">
                <p className="label mb-3">Previous</p>
                <h3 className="font-serif font-medium text-lg text-charcoal group-hover:text-ink transition-colors duration-200">{prevPost.title}</h3>
              </Link>
            )}
            {nextPost && (
              <Link href={'/journal/' + nextPost.slug} className="group block border border-stone-200 p-6 hover:border-stone-400 transition-colors duration-200 sm:text-right sm:ml-auto">
                <p className="label mb-3">Next</p>
                <h3 className="font-serif font-medium text-lg text-charcoal group-hover:text-ink transition-colors duration-200">{nextPost.title}</h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
