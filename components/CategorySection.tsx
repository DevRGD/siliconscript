export default function CategorySection({ categories }: any) {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Blogs by Category</h2>

      <div className="space-y-10">
        {categories.map((cat: any) => (
          <div key={cat._id}>
            <h3 className="text-2xl font-semibold mb-4">{cat._id}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.posts.slice(0, 3).map((post: any) => (
                <div key={post._id} className="p-4 border rounded-xl hover:shadow-md transition">
                  <h4 className="font-semibold">{post.title}</h4>
                  <p className="text-gray-600 mt-2 line-clamp-2">{post.summary}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
