import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">All Blog Posts</h1>

      <p className="text-gray-600 mb-10">This is the blogs index page. Later we will list all posts here.</p>

      <Link href="/" className="px-4 py-2 border rounded-lg hover:bg-gray-100 inline-block">
        Go Back Home
      </Link>
    </main>
  );
}
