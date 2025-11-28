import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import CodeBlock from './CodeBlock';

const CustomImage = ({ src, alt }: any) => {
  if (!src) return null;
  return (
    <figure className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-lg bg-surface">
        <Image
          src={src}
          alt={alt || 'Blog Image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
        />
      </div>
      {alt && <figcaption className="text-center text-sm text-text-secondary mt-2 italic">{alt}</figcaption>}
    </figure>
  );
};

const CustomLink = ({ href, children }: any) => {
  const isExternal = href?.startsWith('http') || href?.startsWith('//');
  const styles =
    'text-primary hover:text-accent hover:underline decoration-primary/30 underline-offset-4 transition-colors inline-flex items-center gap-1';

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
    <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-text-primary tracking-tight border-b border-border pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-text-primary">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-text-primary">{children}</h3>
  ),
  h4: ({ children }: any) => <h4 className="text-xl font-medium mt-6 mb-2 text-text-primary">{children}</h4>,
  h5: ({ children }: any) => <h5 className="text-lg font-medium mt-4 mb-2 text-text-secondary">{children}</h5>,
  h6: ({ children }: any) => (
    <h6 className="text-base font-medium mt-4 mb-2 text-text-secondary uppercase tracking-wide">{children}</h6>
  ),
  p: ({ children }: any) => <div className="text-text-secondary leading-relaxed text-lg mb-6">{children}</div>,
  strong: ({ children }: any) => <strong className="font-bold text-text-primary">{children}</strong>,
  em: ({ children }: any) => <em className="italic text-text-secondary">{children}</em>,
  del: ({ children }: any) => <del className="line-through text-text-secondary/60">{children}</del>,
  ul: ({ children }: any) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-text-secondary marker:text-primary">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-text-secondary marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }: any) => <li className="pl-2">{children}</li>,
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-8 border border-border rounded-lg shadow-sm">
      <table className="w-full text-left text-sm text-text-secondary">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-surface text-text-primary uppercase font-medium border-b border-border">{children}</thead>
  ),
  tbody: ({ children }: any) => <tbody className="divide-y divide-border bg-bg/50">{children}</tbody>,
  tr: ({ children }: any) => <tr className="hover:bg-hover transition-colors">{children}</tr>,
  th: ({ children }: any) => <th className="px-6 py-4 font-semibold tracking-wider text-text-primary">{children}</th>,
  td: ({ children }: any) => <td className="px-6 py-4 align-top">{children}</td>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-primary bg-surface/50 pl-6 py-4 my-8 rounded-r-lg italic text-text-secondary shadow-sm">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-border" />,
  img: CustomImage,
  a: CustomLink,
  pre: ({ children }: any) => <>{children}</>,
  code: ({ className, children }: any) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    return (
      <code className="bg-surface text-primary px-1.5 py-0.5 rounded text-sm font-mono border border-border">
        {children}
      </code>
    );
  },
};
