import BlogCard from './BlogCard';

export default function BlogList({ title, blogs }: any) {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog: any) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
