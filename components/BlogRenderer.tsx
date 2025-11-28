'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, ExternalLink } from 'lucide-react';

export const CodeBlock = ({ className, children }: any) => {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'plaintext';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl text-white mx-auto my-6 border border-gray-800">
      <div className="flex items-center px-4 py-2.5 bg-[#282c34] border-b border-gray-800">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-[#ff5f56] rounded-full"></span>
          <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
          <span className="w-3 h-3 bg-[#27c93f] rounded-full"></span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs font-mono text-gray-500 uppercase mr-2">{language}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition p-1 hover:bg-white/10 rounded"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            backgroundColor: 'transparent',
            padding: '1.5rem',
            fontSize: '14px',
            lineHeight: '1.6',
            width: '100%',
            scrollbarWidth: 'none',
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#4b5563', textAlign: 'right' }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const CustomImage = ({ src, alt }: any) => {
  if (!src) return null;
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-gray-900">
        <Image
          src={src}
          alt={alt || 'Blog Image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
        />
      </div>
      {alt && <figcaption className="text-center text-sm text-gray-500 mt-2 italic">{alt}</figcaption>}
    </figure>
  );
};

export const CustomLink = ({ href, children }: any) => {
  const isExternal = href?.startsWith('http') || href?.startsWith('//');
  const styles =
    'text-blue-400 hover:text-blue-300 hover:underline decoration-blue-500/30 underline-offset-4 transition-colors inline-flex items-center gap-1';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
        <ExternalLink size={12} className="opacity-70" />
      </a>
    );
  }

  return (
    <Link href={href || '#'} className={styles}>
      {children}
    </Link>
  );
};

export const MdxH1 = ({ children }: any) => (
  <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-white tracking-tight border-b border-gray-800 pb-4">
    {children}
  </h1>
);
export const MdxH2 = ({ children }: any) => (
  <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-gray-100">{children}</h2>
);
export const MdxH3 = ({ children }: any) => (
  <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-200">{children}</h3>
);

export const MdxP = ({ children }: any) => <div className="text-gray-300 leading-relaxed text-lg mb-6">{children}</div>;
export const MdxUl = ({ children }: any) => (
  <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-300 marker:text-blue-500">{children}</ul>
);
export const MdxOl = ({ children }: any) => (
  <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-300 marker:text-blue-500">{children}</ol>
);
export const MdxBlockquote = ({ children }: any) => (
  <blockquote className="border-l-4 border-blue-500 bg-gray-900/50 pl-6 py-4 my-8 rounded-r-lg italic text-gray-400">
    {children}
  </blockquote>
);
export const MdxHr = () => <hr className="my-12 border-gray-800" />;
export const MdxInlineCode = ({ children }: any) => (
  <code className="bg-gray-800 text-blue-200 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-700">
    {children}
  </code>
);
