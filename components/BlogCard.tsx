import Link from 'next/link';

export default function BlogCard({ blog }: any) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="p-4 border rounded-xl hover:shadow-md transition">
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{blog.summary}</p>
        <p className="text-sm text-gray-400 mt-3">{new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>
    </Link>
  );
}
