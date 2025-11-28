export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 bg-bg min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-text-primary">Contact</h1>

      <p className="text-text-secondary mb-6">Have questions? Get in touch with us.</p>

      <form className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:border-primary focus:outline-none placeholder-text-secondary"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:border-primary focus:outline-none placeholder-text-secondary"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:border-primary focus:outline-none placeholder-text-secondary"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-text-primary font-semibold rounded-lg hover:bg-accent transition-colors shadow-lg shadow-primary/20"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
