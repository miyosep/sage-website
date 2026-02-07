import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { BLOG_POSTS } from '../services/content';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <article className="space-y-8 animate-in fade-in duration-500">
      <Link
        to="/blogs"
        className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors font-sans text-sm group mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </Link>
      <header className="space-y-4 pb-6 border-b border-stone-200">
        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 font-sans text-sm text-stone-500">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>
      <div className="mt-8">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
};

export default BlogPostPage;
