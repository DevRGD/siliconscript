export default function Hero() {
  return (
    <section className="text-center py-20 bg-bg transition-colors duration-300">
      <h1 className="text-5xl font-bold text-text-primary">Welcome to Our Blog</h1>
      <p className="text-lg text-text-secondary mt-4">Insights, stories, and ideas from our community</p>

      <div className="max-w-md mx-auto mt-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="
            w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary
            focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder-text-secondary
            transition-colors duration-300
          "
        />
      </div>
    </section>
  );
}
