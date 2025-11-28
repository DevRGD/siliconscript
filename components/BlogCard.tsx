import Link from 'next/link';

export default function BlogCard({ blog }: any) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="p-4 border border-border rounded-xl bg-surface hover:shadow-glow transition-all duration-300">
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary">{blog.title}</h3>
        <p className="text-text-secondary mt-2 line-clamp-2">{blog.summary}</p>
        <p className="text-sm text-text-secondary/70 mt-3">{new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>
    </Link>
  );
}
