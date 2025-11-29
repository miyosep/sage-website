import React from 'react';
import { SUBSTACK_POSTS } from '../services/content';

const WordsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <p className="font-sans text-stone-500">
          Long-form essays & reflections.
        </p>
      </div>

      <div className="space-y-6">
        {SUBSTACK_POSTS.map((post) => (
          <div key={post.id} className="flex flex-col md:flex-row md:items-baseline md:justify-between group">
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg md:text-xl text-stone-900 hover:text-sage-800 hover:underline decoration-stone-300 underline-offset-4 transition-colors"
            >
              {post.title}
            </a>
            <span className="font-sans text-sm text-stone-400 mt-1 md:mt-0 md:ml-4 shrink-0">
              {post.pubDate}
            </span>
          </div>
        ))}
      </div>
      
      {/*<div className="pt-8 border-t border-stone-200/50">
         <a href="#" className="font-sans text-sm text-stone-500 hover:text-stone-800 underline underline-offset-4 transition-colors">
           View all posts on Substack →
         </a>
      </div>*/}
      <div className="flex flex-col items-start justify-center py-12 space-y-4">
        <p className="font-serif text-2xl text-stone-400 italic">
          Writing in progress...
        </p>
        <p className="font-sans text-stone-500">
          I'm currently preparing my first pieces. Please check back later :)
        </p>
      </div>
    </div>
  );
};

export default WordsPage;