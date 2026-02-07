/**
 * Scans src/content/posts/*.md, parses frontmatter + body, and writes index.generated.json.
 * Run before dev/build so BLOG_POSTS is up to date. Adding a new .md file is enough.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');
const OUT_FILE = path.join(POSTS_DIR, 'index.generated.json');

const mdFiles = fs.readdirSync(POSTS_DIR).filter(
  (f) => f.endsWith('.md') && f.toLowerCase() !== 'readme.md'
);

const posts = mdFiles.map((file) => {
  const fullPath = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const slug = data.slug ?? file.replace(/\.md$/, '').replace(/\s+/g, '-');
  return {
    id: data.id ?? slug,
    slug,
    title: data.title ?? file.replace(/\.md$/, ''),
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    readTime: data.readTime ?? '1 min read',
    content: content.trim(),
  };
});

// Newest first
posts.sort((a, b) => {
  const dA = new Date(a.date);
  const dB = new Date(b.date);
  return isNaN(dB.getTime()) ? -1 : isNaN(dA.getTime()) ? 1 : dB - dA;
});

fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2), 'utf-8');
console.log(`Built ${posts.length} post(s) → src/content/posts/index.generated.json`);
