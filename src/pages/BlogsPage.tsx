import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../services/content';

const BlogsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <p className="font-sans text-stone-500">Short-form thoughts and notes.</p>
      </div>
      <div className="space-y-10">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group">
            <Link to={`/blogs/${post.slug}`} className="block space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h2 className="font-serif text-2xl text-stone-900 group-hover:text-stone-600 transition-colors">
                  {post.title}
                </h2>
                <span className="font-sans text-sm text-stone-400 flex-shrink-0 mt-1 md:mt-0">
                  {post.date}
                </span>
              </div>
              <p className="font-serif text-stone-600 leading-relaxed">{post.excerpt}</p>
              <div className="pt-2">
                <span className="inline-flex items-center font-sans text-xs font-medium text-stone-400 uppercase tracking-wider group-hover:text-stone-800 transition-colors">
                  Read<span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
