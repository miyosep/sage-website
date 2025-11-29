import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <div className="prose prose-stone prose-lg max-w-none font-serif leading-relaxed text-stone-800 prose-headings:font-serif prose-headings:font-normal prose-a:text-stone-600 prose-a:underline prose-a:decoration-stone-400 hover:prose-a:text-stone-900 transition-colors prose-blockquote:border-l-stone-300 prose-blockquote:italic prose-code:bg-stone-200 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:text-sm prose-pre:bg-stone-100 prose-pre:text-stone-800">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;