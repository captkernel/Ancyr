import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const JOURNAL_DIR = path.join(process.cwd(), 'src/content/journal');

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  author: string;
  coverAlt: string;
  content: string;
}

function parsePost(filePath: string, slug: string): JournalPost {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    readingTime: readingTime(content).text,
    tags: data.tags ?? [],
    author: data.author ?? 'ANCYR',
    coverAlt: data.coverAlt ?? '',
    content,
  };
}

export function getAllJournalPosts(): JournalPost[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  const files = fs.readdirSync(JOURNAL_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  return files
    .map(filename => parsePost(path.join(JOURNAL_DIR, filename), filename.replace(/\.(mdx|md)$/, '')))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getJournalPost(slug: string): JournalPost | null {
  const mdxPath = path.join(JOURNAL_DIR, `${slug}.mdx`);
  const mdPath  = path.join(JOURNAL_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  return filePath ? parsePost(filePath, slug) : null;
}
