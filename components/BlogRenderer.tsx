import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import CodeBlock from './CodeBlock';

const CustomImage = ({ src, alt }: any) => {
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

const CustomLink = ({ href, children }: any) => {
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

export const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-white tracking-tight border-b border-gray-800 pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-gray-100">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-200">{children}</h3>,
  h4: ({ children }: any) => <h4 className="text-xl font-medium mt-6 mb-2 text-gray-300">{children}</h4>,
  h5: ({ children }: any) => <h5 className="text-lg font-medium mt-4 mb-2 text-gray-400">{children}</h5>,
  h6: ({ children }: any) => (
    <h6 className="text-base font-medium mt-4 mb-2 text-gray-500 uppercase tracking-wide">{children}</h6>
  ),
  p: ({ children }: any) => <div className="text-gray-300 leading-relaxed text-lg mb-6">{children}</div>,
  strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
  em: ({ children }: any) => <em className="italic text-gray-400">{children}</em>,
  del: ({ children }: any) => <del className="line-through text-gray-500">{children}</del>,
  ul: ({ children }: any) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-300 marker:text-blue-500">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-300 marker:text-blue-500">{children}</ol>
  ),
  li: ({ children }: any) => <li className="pl-2">{children}</li>,
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-8 border border-gray-800 rounded-lg shadow-sm">
      <table className="w-full text-left text-sm text-gray-400">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => <thead className="bg-gray-800 text-gray-200 uppercase font-medium">{children}</thead>,
  tbody: ({ children }: any) => <tbody className="divide-y divide-gray-800 bg-gray-900/50">{children}</tbody>,
  tr: ({ children }: any) => <tr className="hover:bg-gray-800/40 transition-colors">{children}</tr>,
  th: ({ children }: any) => <th className="px-6 py-4 font-semibold tracking-wider text-white">{children}</th>,
  td: ({ children }: any) => <td className="px-6 py-4 align-top">{children}</td>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-500 bg-gray-900/50 pl-6 py-4 my-8 rounded-r-lg italic text-gray-400 shadow-sm">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-gray-800" />,
  img: CustomImage,
  a: CustomLink,
  pre: ({ children }: any) => <>{children}</>,
  code: ({ className, children }: any) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    return (
      <code className="bg-gray-800 text-blue-200 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-700">
        {children}
      </code>
    );
  },
};
