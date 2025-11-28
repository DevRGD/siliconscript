import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';
import CategorySection from '@/components/CategorySection';
import { getTopBlogs, getRecentBlogs, getBlogsByCategories } from '@/libs/queries';

export default async function Home() {
  const [topBlogs, recentBlogs, categories] = await Promise.all([
    getTopBlogs(),
    getRecentBlogs(),
    getBlogsByCategories(),
  ]);

  return (
    <main className="bg-bg min-h-screen">
      <Hero />

      <div className="max-w-6xl mx-auto px-4">
        <BlogList title="Top Blogs" blogs={topBlogs} />
        <BlogList title="Recent Blogs" blogs={recentBlogs} />
        <CategorySection categories={categories} />
      </div>
    </main>
  );
}
