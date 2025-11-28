export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold">Welcome to Our Blog</h1>
      <p className="text-lg text-gray-600 mt-4">Insights, stories, and ideas from our community</p>

      <div className="max-w-md mx-auto mt-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="
            w-full px-4 py-3 border rounded-lg
            focus:outline-none focus:ring focus:ring-blue-300
          "
        />
      </div>
    </section>
  );
}
