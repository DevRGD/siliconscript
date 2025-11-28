import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 bg-bg min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-text-primary">All Blog Posts</h1>

      <p className="text-text-secondary mb-10">This is the blogs index page. Later we will list all posts here.</p>

      <Link
        href="/"
        className="px-4 py-2 border border-border rounded-lg hover:bg-hover text-text-primary inline-block transition-colors"
      >
        Go Back Home
      </Link>
    </main>
  );
}
