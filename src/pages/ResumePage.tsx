import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import resumeMarkdown from '../content/resume.md?raw';

const markdownComponents: Components = {
  a: ({ href, children, ...props }) => {
    if (href?.startsWith('/')) {
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

const ResumePage: React.FC = () => {
  return (
    <div className="space-y-10 py-2">
      <article className="prose prose-stone prose-lg font-serif text-stone-700 leading-loose max-w-none prose-headings:font-serif prose-headings:text-stone-900 prose-headings:tracking-tight prose-h1:text-3xl prose-h1:font-medium prose-h1:tracking-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:border-b prose-h2:border-stone-200/60 prose-h2:pb-3 prose-h2:first:mt-0 prose-a:text-sage-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-stone-900 prose-em:not-italic prose-em:font-normal prose-em:text-stone-600">
        <ReactMarkdown components={markdownComponents}>{resumeMarkdown}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ResumePage;
