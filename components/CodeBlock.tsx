'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ className, children }: any) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'plaintext';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative bg-[#1e1e1e] rounded-sm overflow-hidden shadow-lg mx-auto my-6 border border-zinc-800">
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-zinc-800 pt-3">
        <span className="text-xs font-mono text-zinc-400 uppercase font-bold tracking-wider">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-zinc-400 hover:text-white transition p-1 hover:bg-white/10 rounded"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
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
            textShadow: 'none',
            margin: 0,
          }}
          codeTagProps={{
            style: {
              textShadow: 'none',
              background: 'transparent',
            },
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: '#6b7280',
            textAlign: 'right',
            opacity: 0.5,
          }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
